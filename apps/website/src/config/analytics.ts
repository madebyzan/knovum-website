/**
 * Cloudflare Web Analytics: cookieless, so it needs no consent banner. It loads only when a beacon
 * token is configured, and the Content Security Policy admits its origins only in that case.
 */
export const cloudflareAnalytics = {
  script: "https://static.cloudflareinsights.com/beacon.min.js",
  scriptOrigin: "https://static.cloudflareinsights.com",
  reportOrigin: "https://cloudflareinsights.com",
} as const;
