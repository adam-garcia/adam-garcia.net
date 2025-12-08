<script lang="ts">
	import { page } from '$app/state';
	let role: string = $derived.by(() => {
		return page.url.href.split("#")[1] || 'data-engineer'
	})
</script>

<svelte:head>
	<title>about | adam-garcia.net</title>
</svelte:head>

<div id="home">
	<div>
		<h1>Hi there, <br class="visible-mobile" /> I'm <span id="adam">Adam</span></h1>
		<p class="intro">
			I'm a
			<a href="#data-engineer" class="role" aria-current={role == 'data-engineer'}>
				data engineer
			</a
			>
			<a href="#web-developer" class="role" aria-current={role == 'web-developer'}>
				web developer
			</a>
			<a href="#generative-artist" class="role" aria-current={role == 'generative-artist'}>
				generative artist
			</a>
			based in Brooklyn, NY.
		</p>
		{#if role == 'data-engineer'}
			<div id="data-engineer">
				<h2>Data Engineer</h2>
				<p>
					I've been engineering data integration systems for the last 10 years of my career. I started in the public health research space, designing data entry systems and writing data cleaning scripts; for the last 4 years, I've planned, implemented, and maintained production ELT pipelines for a custom online dashboard.
				</p>
				<p>
					I relish in designing and implementing efficient, observable, well-documented data processing systems, and <strong>I am open to NYC or remote roles in this problem space</strong>.
				</p>
				<p>
					I have expertise in R and SQL, proficiency in Python and Ruby. I use tools like Docker and Git for reproducible environments, and I like Apache Airflow and DBT for orchestrating data flows.
				</p>
			</div>
		{:else if role == 'web-developer'}
			<div id="web-developer">
				<h2>Web Developer</h2>
				<p>
					I got into web development as a hobby in graduate school, and it's really stuck. In particular, I find web technologies to be an extraordinarily powerful tool for data transparency, scientific communication, and public education.
				</p>
				<p>
					Over the last 4 years, I've hardened some of these skills through  backend web development in Ruby on Rails at Green River Data Analysis.
				</p>
				<p>
					Before those experiences, the biggest project I'd spearheaded was a dashboard that visualizes the catastrophic data of <a href="https://www.vera.org/tracking-covid-19-in-immigration-detention">COVID-19 in immigration detention</a> through my work at the Vera Institute of Justice.
				</p>
			</div>
		{:else if role == 'generative-artist'}
			<div id="generative-artist">
				<h2>Generative Artist</h2>
				<p>
					In the last year, I've started delving into generative art as a creative outlet. I make bespoke data visualizations of events, places, or activities, mostly in the form of maps for friends and loved ones.
				</p>
				<h3>Examples</h3>
				<p>
					My friends Jeff and Lauren did a bike ride through Setonaikai National Park. I plotted their route from their Strava data and overlaid it on elevation and bathymetry data for the region. <br>
					<enhanced:img src="assets/about/jeff_lauren_jp.png?w=750" alt="Jeff and Lauren's Bike Ride"/>
				</p>
				<hr>
				<p>
					Another couple, Jacob and Emma, went on an E-Bike ride through Tuscany, so I made this when I had Jacob for a secret santa party:
					<enhanced:img src="assets/about/jacob_map.png?w=750" alt="Jacob and Emma's Bike Ride" />
				</p>
			</div>
		{/if}
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
		font-size: min(0.35em, 14pt);
		position: absolute;
		bottom: 0.55em;
		margin-left: 0.3em;
		white-space: nowrap;
	}

	a.role {
    text-decoration: none;
		color: #bbb;
		transition: color 0.25s ease-in;
		cursor: pointer;
	}

	a.role:not(:first-child)::before {
		content: '/ ';
		color: #bbb;
	}

	a.role[aria-current=true],
	a.role:hover {
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
