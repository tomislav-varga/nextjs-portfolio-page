import { NextRequest } from 'next/server';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // Maximum 5 requests per hour

export async function rateLimit(req: NextRequest): Promise<boolean> {
  const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();

  // Initialize or reset the rate limit for this IP
  if (!store[ip] || now > store[ip].resetTime) {
    store[ip] = {
      count: 0,
      resetTime: now + WINDOW_MS,
    };
  }

  // Increment the request count
  store[ip].count++;

  // Check if the rate limit has been exceeded
  return store[ip].count <= MAX_REQUESTS;
} 