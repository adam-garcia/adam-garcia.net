<script>
	let role;
	role = 'researcher';
	let setRole;
	setRole = (t) => {
		role = t.innerHTML;
	};
</script>

<svelte:head>
	<title>about | adam-garcia.net</title>
</svelte:head>

<div id="home">
	<div>
		<h1>Hi there, <br class="visible-mobile" /> I'm <span id="adam">Adam</span></h1>
		<p class="intro">
			I'm a
			<span
				class="role"
				on:click={setRole(this)}
				aria-current={role === 'researcher' ? 'role' : undefined}>
				researcher
			</span
			>
			<span
				class="role"
				on:click={setRole(this)}
				aria-current={role === 'data scientist' ? 'role' : undefined}>
				data scientist
			</span>
			<span
				class="role"
				on:click={setRole(this)}
				aria-current={role === 'web developer' ? 'role' : undefined}>
				web developer
			</span>
			based in Brooklyn, NY.
		</p>
		{#if role == 'researcher'}
			<p>
				My education and early career were in public health research, specifically in interventions to childhood obesity and cancer prevention behavior. As a statistician, my work was in the <code>data</code> space: writing data management and cleaning pipelines; designing, fitting, and communicating statistical models; and creating summary reports and technical write-ups.
			</p>
			<p>
				I still consider myself a researcher at heart, primarily in that I'm interested in using rigorous methods to assess and dismantle the intertwined systems of oppresion that create social problems.
			</p>
		{:else if role == 'data scientist'}
			<p>
				I got into R programming in grad school&#8212;mostly as a means to an end (stats)&#8212;but having taken a couple CS courses in college, and generally interested in the internet and web technologies, it wasn't long before I stumbled into the world of data science.
			</p>
			<p>
				My experience in data science are mostly adjacent to data engineering: <a href="https://github.com/vera-institute/ice-detention-covid" target="blank">web scraping</a> and such, though I have some interest in cautiously applying machine learning techniques to assist (not supplant) the analytic process.
			</p>
		{:else if role == 'web developer'}
			<p>
				Web design and development is where my interests in the internet and scientific communication intersect. That's a bit of a half-truth, because it is just *fun* to make things on the web.
			</p>
			<p>
				Regardless, I'm really into leveraging the smattering of tools out there to create (hopefully) engaging and informative interfaces to data. My biggest project so far has been a <a href="https://vera.org/tracking-covid-19-in-immigration-detention#dashboard" target="blank">dashboard</a> that visualizes the catastrophic data of COVID-19 in immigration detention, through my work at Vera.
			</p>
		{/if}
		<p />
	</div>
</div>

<style lang="scss">
	h1 {
		margin: 0 auto;
	}

	p {
		font-size: 1.15em;
	}

	p.intro {
		font-size: 1.5em;
	}

	#adam {
		color: #198ce7;
		position: relative;
	}

	#adam::after {
		content: '(he / him)';
		color: #333;
		font-size: 0.35em;
		position: absolute;
		bottom: 0.55em;
		margin-left: 0.3em;
		white-space: nowrap;
	}

	span.role {
		color: #bbb;
		transition: color 0.25s ease-in;
		cursor: pointer;
	}

	span.role:not(:first-child)::before {
		content: '/ ';
		color: #bbb;
	}

	span.role[aria-current='role'],
	span.role:hover {
		color: #333;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	@media (min-width: 600px) {
		br.visible-mobile {
			display: none;
		}
	}
</style>
