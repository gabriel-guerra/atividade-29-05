import { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
  req.body.valor = req.body.valor * 1.25;
  next();
};