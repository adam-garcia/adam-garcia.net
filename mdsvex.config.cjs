module.exports = {
	extensions: [".svelte.md", ".md", ".svx"],
	smartypants: {
		dashes: "oldschool",
	},
	remarkPlugins: [
		[import("remark-github"), {
			// Use your own repository
			repository: "https://github.com/svelte-add/mdsvex.git",
		}],
		import("remark-abbr"),
	],
	rehypePlugins: [
		import("rehype-slug"),
		[import("rehype-autolink-headings"), {
			behavior: "wrap",
		}],
	],
	layout: {
		blog: "src/lib/mdsvex/blog.svelte",
		_: "src/lib/mdsvex/_.svelte"
	}
};


// Error [ERR_REQUIRE_ESM]: require() of
// ES Module /Users/adam/code/svelte-4/node_modules/remark-github/index.js
// from /Users/adam/code/svelte-4/mdsvex.config.cjs not supported.
// Instead change the require of
// index.js in /Users/adam/code/svelte-4/mdsvex.config.cjs
// to a dynamic import() which is available in all CommonJS modules.
