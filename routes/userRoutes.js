import express from 'express'
import { currentUser, deleteUser, listUser, login, logout, registerUser, updateRole } from '../controllers/UserController.js';
import { GeneralAuthorize } from '../middleware/Authorize.js';
import { SuperAdminAuth } from '../middleware/SuperAdminAuth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);
router.get('/user', GeneralAuthorize, currentUser)
router.post('/logout', GeneralAuthorize, logout)

// route untuk CRUD users
router.get('/users', SuperAdminAuth, listUser)
router.put('/users/:id', SuperAdminAuth, updateRole)
router.delete('/users/:id', SuperAdminAuth, deleteUser)

export default router;
