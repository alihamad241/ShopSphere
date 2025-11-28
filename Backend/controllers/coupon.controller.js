import Coupon from "../models/coupon.model.js";
import User from "../models/user.model.js";

export const getCoupon = async (req, res) => {
    try {
        // Return the most recent active coupon for this user (if any)
        const coupon = await Coupon.findOne({ userId: req.user._id, isActive: true }).sort({ createdAt: -1 });
        res.json(coupon || null);
    } catch (error) {
        console.log("Error in getCoupon controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const validateCoupon = async (req, res) => {
    try {
        const { code } = req.body;
        if (!code) return res.status(400).json({ message: "Code is required" });
        const normalized = String(code).trim().toUpperCase();
        const coupon = await Coupon.findOne({ code: normalized, userId: req.user._id, isActive: true });

        if (!coupon) {
            return res.status(404).json({ message: "Coupon not found" });
        }

        if (coupon.expirationDate < new Date()) {
            coupon.isActive = false;
            await coupon.save();
            return res.status(404).json({ message: "Coupon expired" });
        }

        res.json({
            message: "Coupon is valid",
            code: coupon.code,
            discountPercentage: coupon.discountPercentage,
        });
    } catch (error) {
        console.log("Error in validateCoupon controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const createCoupon = async (req, res) => {
    try {
        const { userId, code, discountPercentage, expirationDate } = req.body;

        if (!userId || !code || !discountPercentage || !expirationDate) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // ensure user exists
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        // normalize and validate inputs
        const normalizedCode = String(code).trim().toUpperCase();
        const discount = Number(discountPercentage);
        if (Number.isNaN(discount) || discount < 0 || discount > 100) {
            return res.status(400).json({ message: "discountPercentage must be a number between 0 and 100" });
        }
        const exp = new Date(expirationDate);
        if (isNaN(exp.getTime())) {
            return res.status(400).json({ message: "Invalid expirationDate" });
        }
        if (exp <= new Date()) {
            return res.status(400).json({ message: "expirationDate must be in the future" });
        }

        // ensure unique code only (normalized)
        const existing = await Coupon.findOne({ code: normalizedCode });
        if (existing) {
            return res.status(409).json({ message: "A coupon with this code already exists" });
        }

        const coupon = new Coupon({
            userId,
            code: normalizedCode,
            discountPercentage: discount,
            expirationDate: exp,
            isActive: true,
        });

        try {
            await coupon.save();
            res.status(201).json(coupon);
        } catch (saveErr) {
            // handle duplicate key at DB level (race)
            if (saveErr && saveErr.code === 11000) {
                return res.status(409).json({ message: "A coupon with this code already exists" });
            }
            throw saveErr;
        }
    } catch (error) {
        console.error("Error in createCoupon controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const listCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find().sort({ createdAt: -1 });
        res.json(coupons);
    } catch (error) {
        console.error("Error in listCoupons controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const deactivateCoupon = async (req, res) => {
    try {
        const { code } = req.params;
        const normalized = String(code || "")
            .trim()
            .toUpperCase();
        const coupon = await Coupon.findOneAndUpdate({ code: normalized }, { isActive: false }, { new: true });
        if (!coupon) return res.status(404).json({ message: "Coupon not found" });
        res.json({ message: "Coupon deactivated", coupon });
    } catch (error) {
        console.error("Error in deactivateCoupon controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
