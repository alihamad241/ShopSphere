import express from 'express';
import {
    getAllStores,
    getFeaturedStores,
    createStore,
    deleteStore,
    getRecommendedStores,
    getStoresByCategory,
    toggleFeaturedStore
} from '../controllers/store.controller.js';
import { protectRoute, adminRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', protectRoute, adminRoute, getAllStores);
router.get('/featured', getFeaturedStores);
router.get('/category/:category', getStoresByCategory);
router.get('/recommendations', getRecommendedStores);
router.post('/', protectRoute, adminRoute, createStore);
router.patch('/:id', protectRoute, adminRoute, toggleFeaturedStore);
router.delete('/:id', protectRoute, adminRoute, deleteStore);

export default router;
