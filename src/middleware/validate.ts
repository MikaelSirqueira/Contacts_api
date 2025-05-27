import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate = (schema: ZodSchema, property: "body" | "params" | "query" = "body") => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const parsed = schema.safeParse(req[property]);
    if (!parsed.success) {
      res.status(400).json({
        message: "Erro de validação",
        errors: parsed.error.errors,
      });
      return;
    }
    req[property] = parsed.data;
    next();
  };
};
