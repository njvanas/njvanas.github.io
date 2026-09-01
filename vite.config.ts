import { createHash } from 'node:crypto';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * GitHub Pages ignores public/_headers. Inject a CSP meta tag and hash
 * any inline scripts (JSON-LD) so the policy applies in production.
 */
function contentSecurityPolicy(): Plugin {
  return {
    name: 'content-security-policy',
    transformIndexHtml(html) {
      const hashes = new Set<string>();
      const inlineScript = /<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
      for (const match of html.matchAll(inlineScript)) {
        const source = match[1] ?? '';
        if (!source.trim()) continue;
        hashes.add(`'sha256-${createHash('sha256').update(source).digest('base64')}'`);
      }

      const csp = [
        "default-src 'self'",
        `script-src 'self' ${[...hashes].join(' ')}`.trim(),
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https://images.credly.com",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self' mailto:",
        'upgrade-insecure-requests',
      ].join('; ');

      const tag = `<meta http-equiv="Content-Security-Policy" content="${csp}" />`;
      if (/<meta\s+http-equiv="Content-Security-Policy"/i.test(html)) {
        return html.replace(
          /<meta\s+http-equiv="Content-Security-Policy"\s+content="[^"]*"\s*\/?>/i,
          tag,
        );
      }
      return html.replace('<head>', `<head>\n    ${tag}`);
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [tailwindcss(), react(), contentSecurityPolicy()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
