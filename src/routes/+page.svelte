<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let heHim = $state();
</script>

<svelte:head>
	<title>adam-garcia.net</title>
</svelte:head>

<div id="home">
	<div>
		<h1 id="it-me">
			Hi there, <br class="visible-mobile" /> I'm
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<span
				id="adam"
				onmouseenter={() => heHim = !heHim}
				onmouseleave={() => heHim = !heHim}
				class={[heHim ? "show_pronouns" : '']}>
				Adam
			</span>
		</h1>

		<p class="intro">
			I'm a
			<span class="role"> data engineer</span>
			<span class="role"> web developer </span>
			<span class="role"> generative artist </span>
			based in Brooklyn, NY.
		</p>
		<p>
			I relish in designing and implementing efficient, observable, well-documented data processing systems, and <strong>I am open to NYC or remote roles in this problem space</strong>.
		</p>
		<p>
			Thanks for stopping by&mdash;feel free to stick around if you want to
			check out my <a href="/blog">blog</a> or read a bit more
			<a href="/about">about me</a>. My GitHub handle is <a href="https://github.com/adam-garcia" target="blank">adam-garcia</a>.
		</p>
	</div>
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
</style>
