import express from 'express'
import { createCars, deleteCars, getDetailCar, listCars, updateCars } from '../controllers/CarController.js';
import upload from '../middleware/upload.js';
import { GeneralAuthorize } from '../middleware/Authorize.js';
import { AllAdminAuth } from '../middleware/AllAdminAuth.js';

const router = express.Router();

router.get('/cars', GeneralAuthorize, listCars)
router.get('/cars/:id', GeneralAuthorize, getDetailCar)
router.post('/cars', AllAdminAuth, upload.single('image'), createCars);
router.put('/cars/:id', AllAdminAuth, upload.single('image'),  updateCars)
router.delete('/cars/:id', AllAdminAuth, deleteCars)

export default router;