<script lang="ts">
	export let title;
  export let date;
  export let description;
	const dateOptions: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	let printDate = new Date(date).toLocaleDateString('en-US', dateOptions);
</script>

<svelte:head>
	<title>{title} | adam-garcia.net</title>
</svelte:head>


<div class="post_frontmatter">
	<h1>{title}</h1>
	<h2>{printDate}</h2>
	<h3><a href="/blog">&#x21A9 Back to All Posts</a></h3>
	<p>{description}</p>
</div>
<slot />
