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
	let heHim;
</script>

<svelte:head>
	<title>adam-garcia.net</title>
</svelte:head>

<div id="home">
	<div>
		<h1 id="it-me">
			Hi there, <br class="visible-mobile" /> I'm
			<span
				id="adam"
				on:mouseenter={() => {
					heHim = !heHim;
				}}
				on:mouseleave={() => {
					heHim = !heHim;
				}}
				class:show_pronouns={heHim}
			>
				Adam
			</span>
		</h1>

		<p class="intro">
			I'm a
			<span class="role"> researcher</span>
			<span class="role"> data scientist </span>
			<span class="role"> web developer </span>
			based in Brooklyn, NY.
		</p>
		<p>
			Thanks for stopping by&mdash;feel free to stick around if you want to
			check out my <a href="/blog">blog</a> or read a bit more
			<a href="/about">about me</a>, the links are all here and in the navbar
			up top. My GitHub handle is <a href="https://github.com/adam-garcia" target="blank">adam-garcia</a>.
		</p>
	</div>
	<h1>Recent blog posts</h1>
	<ul class="blog_posts">
		{#each posts as post}
			<Blogpost {post} />
		{/each}
	</ul>
	<ul />
</div>

<style>
	h1 {
		margin: 0 auto;
	}

	#adam {
		color: #198ce7;
		position: relative;
	}

	#adam::after {
		opacity: 0;
		content: '(he / him)';
		color: #333;
		font-size: 0.35em;
		position: absolute;
		bottom: 0.55em;
		margin-left: 0.3em;
		transition: opacity 0.35s ease-in;
		white-space: nowrap;
	}
	#adam.show_pronouns::after {
		opacity: 1;
	}

	p {
		font-size: 1.15em;
	}

	p.intro {
		font-size: 1.5em;
	}

	span.role {
		color: #333;
	}

	span.role:not(:first-child)::before {
		content: '/ ';
		color: #333;
	}

	@media (min-width: 480px) {
		#it-me {
			font-size: 4em;
		}
	}
	@media (min-width: 600px) {
		br.visible-mobile {
			display: none;
		}
	}
	ul.blog_posts {
		padding-left: 0;
		list-style: none;
	}
</style>
