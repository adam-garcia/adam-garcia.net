<script>
	export let title;
	export let date;
	export let description;
	const dateOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	let printDate = new Date(date).toLocaleDateString('en-US', dateOptions);
</script>

<svelte:head>
	<title>{title} - adam-garcia.net</title>
</svelte:head>

<div class="post_frontmatter">
	<h1>{title}</h1>
</div>

<slot />

<style>
	.post_frontmatter hr {
		border: none;
		border-top: 1px solid #333;
		color: #333;
		overflow: visible;
		text-align: center;
		height: 5px;
		margin: 2em 0 1em 0;
	}

	.post_frontmatter hr:after {
		background: #fff;
		content: '/';
		padding: 0 4px;
		position: relative;
		top: -14px;
	}
</style>
