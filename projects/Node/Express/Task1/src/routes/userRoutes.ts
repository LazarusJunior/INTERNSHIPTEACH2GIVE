import express from 'express';
import { body } from 'express-validator';
import * as userController from '../controllers/userController';
import { validateRequest } from '../middleware/validateRequest';

export const router = express.Router();

const userValidationRules = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('name').notEmpty().withMessage('Name is required'),
  body('school').notEmpty().withMessage('School is required'),
  body('sport').notEmpty().withMessage('Sport is required')
];

router.post('/', userValidationRules, validateRequest, userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userValidationRules, validateRequest, userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;