import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      // Target the widest range of iOS/Safari versions needed.
      // This drives the legacy (nomodule) bundle transpilation.
      targets: [
        'defaults',
        'ios >= 12',
        'safari >= 12',
        'not dead',
        'not IE 11',
      ],

      // Ensure legacy chunks (ES5 fallback) are always produced.
      renderLegacyChunks: true,

      // Inject polyfills for the MODERN bundle too (for iOS 15 edge cases).
      // 'true' auto-detects needed polyfills. This covers queueMicrotask,
      // ResizeObserver, etc. that iOS 13/14 may be missing.
      modernPolyfills: true,

      // Additional polyfills bundled into the legacy (nomodule) chunk.
      // regenerator-runtime is required for async/generator support on old iOS.
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],

  // GitHub Pages deployment path — this MUST be the repository name.
  // Using './' causes broken relative paths for nomodule scripts on subpaths.
  base: '/huzaifa-portfolio/',

  build: {
    // Use terser for minification — esbuild can leave in modern syntax
    // that older iOS Safari cannot parse even when 'target' is set.
    // plugin-legacy automatically sets build.target — don't override it.
    minify: 'terser',
    terserOptions: {
      compress: {
        // Ensure no modern ECMAScript compression that breaks old Safari
        ecma: 2019,
        passes: 2,
      },
      format: {
        ecma: 2019,
      },
    },
  },
})
