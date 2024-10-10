import { Request, Response, NextFunction } from 'express';

export interface CustomError extends Error {
  status?: number;
}

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).json({
    error: {
      message: message
    }
  });
};

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error: CustomError = new Error('Not Found');
  error.status = 404;
  next(error);
};