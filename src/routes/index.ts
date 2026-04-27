import { Router } from 'express';
import healthRoutes from './health.routes.js';

const router = Router();

/**
 * Health check route is included by default.
 */
router.use('/health', healthRoutes);

/**
 * NOTE: If you are using the auth module, you can register it here:
 * import authRoutes from './auth.routes.js';
 * router.use('/auth', authRoutes);
 */

export default router;
