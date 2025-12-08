<script lang="ts">
	import '../static/main.scss';
	import '../static/global.scss';
	import '../static/layout.scss';
	import Navbar from '$lib/Navbar.svelte';
	let { children } = $props();
</script>

<svelte:head>
</svelte:head>

<Navbar/>
<main id="main"> {@render children()} </main>
