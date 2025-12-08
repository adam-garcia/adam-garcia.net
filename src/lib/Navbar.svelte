<script>
	import { page } from '$app/state';
	let segment = $derived.by(() => {
		return page.url.pathname.split(/\//)[1];
	})
</script>

<nav>
	<ul>
		<li><a aria-current={segment === ''} href="/">home</a></li>
		<li>
			<a rel="prefetch" aria-current={segment === 'blog'} href="/blog">blog</a>
		</li>
		<!-- <li><a aria-current={segment === 'work'} href="/work">work</a></li> -->
		<li><a aria-current={segment === 'about'} href="/about">about</a></li>
	</ul>
</nav>

<style lang="scss">
	@use '../static/layout.scss';
</style>
