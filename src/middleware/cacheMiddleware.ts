import { Request, Response, NextFunction } from "express";

const cache = new Map<string, any>();

export const cacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const key = req.originalUrl;

  if (cache.has(key)) {
    return res.json({
      source: "cache",
      data: cache.get(key),
    });
  }

  const originalJson = res.json.bind(res);

  res.json = (body: any) => {
    cache.set(key, body);
    return originalJson({
      source: "server",
      data: body,
    });
  };

  next();
};
