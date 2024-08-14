import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
const { i18n } = require('./next-i18next.config')
export const runtime = "edge";

module.exports = {
  i18n,
  reactStrictMode: true,
  // Required by Next i18n with API routes, otherwise API routes 404 when fetching without trailing slash
  trailingSlash: true,
}

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}