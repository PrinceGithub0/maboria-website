import "server-only";
type Bucket = { count: number; expiresAt: number };

const buckets: Map<string, Bucket> = new Map();

export function rateLimit(key: string, limit = 60, windowMs = 60_000) {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (bucket && bucket.expiresAt > now) {
    if (bucket.count >= limit) return false;
    bucket.count += 1;
    return true;
  }
  buckets.set(key, { count: 1, expiresAt: now + windowMs });
  return true;
}
