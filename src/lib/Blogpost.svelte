<script>
	export let post;
	export let showDate = true;
	let underline = (event) => {
		event.target.querySelector('h2.post-title span').style.textDecoration = 'underline #333';
		event.target.querySelector('h2.post-title small').style.color = '#333';
	};
	let removeUnderline = (event) => {
		event.target.querySelector('h2.post-title span').style.textDecoration = 'underline #ffffff00';
		event.target.querySelector('h2.post-title small').style.color = '#666';
	};
</script>

<li class="listed-post" on:mouseenter={underline} on:mouseleave={removeUnderline}>
	<a sveltekit:prefetch href={post.slug}>
		<div>
			<h2 class="post-title">
				<span>{post.title}</span>
				{#if showDate}
					<small>{post.printDate}</small>
				{/if}
			</h2>
			<p>{post.description}</p>
		</div>
	</a>
</li>

<style>
	a {
		text-decoration: none;
		display: block;
		color: inherit;
	}
	.listed-post {
		margin-top: 2rem;
		transition: all 0.25s ease-in;
	}
	.listed-post:first-child {
		margin-top: 1rem;
	}
	.listed-post p {
		margin: 0;
	}
	.post-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-weight: 500;
		margin-bottom: 0;
	}
	.post-title span {
		text-decoration: underline #ffffff00;
		transition: text-decoration 0.25s ease-in;
	}
	.post-title small {
		color: #666;
		font-weight: 300;
		transition: all 0.25s ease-in;
	}
</style>
