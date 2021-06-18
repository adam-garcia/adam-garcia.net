<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/blog');

		if (res.ok) {
			return { props: { posts: await res.json() } };
		}
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	import Blogpost from '$lib/Blogpost.svelte';
	export let posts;
</script>

<svelte:head>
	<title>blog | adam-garcia.net</title>
</svelte:head>

<h1>All Posts</h1>

<ul class="blog_posts">
	{#each posts as post}
		<Blogpost {post} />
	{/each}
</ul>

<style lang="scss">
	ul.blog_posts {
		padding-left: 0;
		list-style: none;
	}
	hr.fancy {
		border: none;
		border-top: 1px solid #333;
		color: #333;
		overflow: visible;
		text-align: center;
		height: 5px;
		margin: 1em 0 1em 0;
	}

	hr.fancy:after {
		background: #fff;
		content: '/';
		padding: 0 4px;
		position: relative;
		top: -14px;
	}
</style>
