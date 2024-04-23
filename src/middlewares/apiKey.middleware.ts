import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const apiKey = process.env.API_KEY;
    const requestApiKey = req.headers['x-api-key'];

    if (!requestApiKey || requestApiKey !== apiKey) {
      return res.status(401).json({ message: 'Invalid API Key' });
    }
    
    req.headers['api-key'] = requestApiKey;

    next();
  }
}
