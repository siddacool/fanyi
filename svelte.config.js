import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // default options are fine, can also set pages and assets folders
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
    }),
    paths: {
      base: dev ? '' : '/fanyi', // your repo name
    },
  },
};

export default config;
