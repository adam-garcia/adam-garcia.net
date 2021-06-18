import pkg from 'mdsvex';
const { mdsvex } = pkg;
import { mdsvexConfig } from "./mdsvex.config.js";
import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
import adapterNetlify from '@sveltejs/adapter-netlify'
import commonjs from '@rollup/plugin-commonjs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess(),
		commonjs()
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapterNetlify(),
		// plugins: [commonjs()],
	},
};

export default config;
