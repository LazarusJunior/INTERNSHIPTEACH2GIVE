import { Request, Response, NextFunction } from 'express';
import { getXataClient } from '../xata';
import { UserRecord } from '../xata';
import { CustomError } from '../middleware/errorHandlers';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const client = getXataClient();
  try {
    const newUser = await client.db.users.create(req.body as UserRecord);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  const client = getXataClient();
  try {
    const users = await client.db.users.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const client = getXataClient();
  try {
    const user = await client.db.users.read(id);
    if (!user) {
      const error: CustomError = new Error('User not found');
      error.status = 404;
      throw error;
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const client = getXataClient();
  try {
    const updatedUser = await client.db.users.update(id, req.body as UserRecord);
    if (!updatedUser) {
      const error: CustomError = new Error('User not found');
      error.status = 404;
      throw error;
    }
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    next(error);
  }
};

export const partialUpdateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const client = getXataClient();
  try {
    const updatedUser = await client.db.users.update(id, req.body as Partial<UserRecord>);
    if (!updatedUser) {
      const error: CustomError = new Error('User not found');
      error.status = 404;
      throw error;
    }
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const client = getXataClient();
  try {
    await client.db.users.delete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};
