<script>
	import '../static/main.scss';
	import Navbar from '$lib/Navbar.svelte';
	// export let segment;
	import { page } from '$app/stores';
	$: segment = $page.path.split(/\//)[1];
</script>

<Navbar {segment} />

<main id="main">
	<slot />
</main>

