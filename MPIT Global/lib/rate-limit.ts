interface RateLimitRecord {
  count: number;
  resetAt: number;
}

// In-memory store for rate limiting IP addresses
const ipStore = new Map<string, RateLimitRecord>();

// Cleanup stale entries every 10 minutes to avoid memory accumulation
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupStaleEntries() {
  const now = Date.now();
  if (now - lastCleanup > CLEANUP_INTERVAL_MS) {
    lastCleanup = now;
    for (const [key, record] of ipStore.entries()) {
      if (record.resetAt <= now) {
        ipStore.delete(key);
      }
    }
  }
}

/**
 * Rate limiter utility to prevent automated spam and abuse.
 * @param key Unique key (e.g., client IP)
 * @param limit Maximum allowed requests within window
 * @param windowMs Time window in milliseconds (default: 15 minutes)
 */
export function checkRateLimit(
  key: string,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000
): { allowed: boolean; remaining: number; resetTime: number } {
  cleanupStaleEntries();

  const now = Date.now();
  const existing = ipStore.get(key);

  if (!existing || existing.resetAt <= now) {
    ipStore.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });
    return {
      allowed: true,
      remaining: limit - 1,
      resetTime: now + windowMs,
    };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: existing.resetAt,
    };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: limit - existing.count,
    resetTime: existing.resetAt,
  };
}
