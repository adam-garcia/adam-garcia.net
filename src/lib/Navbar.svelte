<script>
	export let segment;
</script>

<nav>
	<ul>
		<li><a aria-current={segment === '' ? 'page' : undefined} href="/">home</a></li>
		<li>
			<a rel="prefetch" aria-current={segment === 'blog' ? 'page' : undefined} href="/blog">blog</a>
		</li>
		<!-- <li><a aria-current={segment === 'work' ? 'page' : undefined} href="/work">work</a></li> -->
		<li><a aria-current={segment === 'about' ? 'page' : undefined} href="/about">about</a></li>
	</ul>
</nav>

<style lang="scss">
	@import '../static/layout.scss';
</style>
