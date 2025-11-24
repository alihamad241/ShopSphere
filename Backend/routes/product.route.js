import express from 'express';
import {
    getAllProducts,
    getFeaturedProducts,
    createProduct,
    deleteProduct,
    getRecommendedProducts,
    getProductsByCategory,
    toggleFeaturedProduct
} from '../controllers/product.controller.js';
import { protectRoute, adminRoute, ownerRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', protectRoute, getAllProducts);
router.get('/featured', getFeaturedProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/recommendations', getRecommendedProducts);
router.post('/', protectRoute, ownerRoute, createProduct);
router.patch('/:id', protectRoute, ownerRoute, toggleFeaturedProduct);
router.delete('/:id', protectRoute, ownerRoute, deleteProduct);

export default router;
