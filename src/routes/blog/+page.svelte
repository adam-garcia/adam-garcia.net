<script lang="ts">
	// import type { PageLoad } from "./$types";
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	import Blogpost from '$lib/Blogpost.svelte';
	// export let posts;
</script>

<svelte:head>
	<title>blog | adam-garcia.net</title>
</svelte:head>

<h1>All Posts</h1>

<ul class="blog_posts">
	{#each data.posts as post}
		<Blogpost {post} />
	{/each}
</ul>

<style lang="scss">
	ul.blog_posts {
		padding-left: 0;
		list-style: none;
	}

</style>
