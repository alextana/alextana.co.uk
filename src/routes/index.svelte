<script lang="ts">
	import { browser } from '$app/env';
	import { fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { quintInOut } from 'svelte/easing';
	import Programming from '$lib/components/svg/Programming.svelte';
	import Contributions from '$lib/components/svg/Contributions.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Game from '$lib/components/game/Game.svelte';

	import Card from '$lib/components/ui/Card.svelte';
	import CardSkeleton from '$lib/components/ui/CardSkeleton.svelte';

	const skills: Array<string> = [
		'HTML',
		'CSS',
		'Tailwind CSS',
		'JavaScript',
		'TypeScript',
		'Svelte',
		'React',
		'Vue',
		'Node',
		'Express',
		'Git',
		'Making coffee',
		'Making tea',
		'UX/UI',
		'Design',
		'SvelteKit',
		'NextJs',
		'NuxtJs',
		'Adobe XD',
		'Figma'
	];

	let selectedGreeting: string = '';
	let heroContainer: HTMLElement;
	let innerWidth: number = 0;
	let isMobile: boolean = false;
	let showSkills: boolean = false;
	let showGame: boolean = false;
	let isPlaying: boolean = false;

	function setClass(tag: string) {
		switch (tag) {
			case 'svelte':
				return 'bg-red-500 text-white';
				break;
			case 'tailwindcss':
				return 'bg-blue-800 text-white';
			case 'javascript':
				return 'bg-yellow-500 text-black';
			case 'vue':
				return 'bg-green-500 text-black';
			default:
				return 'bg-gray-500 text-white';
		}
	}

	const animationDuration: number = 800;
	const greetings: Array<string> = [
		'hello world',
		`console.log('hey there')`,
		`hey I'm user[0]`,
		`looking for projects?`,
		`mono is a nice font`,
		`I like svelte`,
		`baNaNa`,
		`clever programmer joke`,
		`coffees.push(Infinity)`,
		`it's not a bug, it's a feature`,
		`copilot is a nice name -- Github copilot 2022`,
		`🇬🇧 programmers be like "git init"`,
		`git stash -m "will definitely remember to do this later"`,
		`ctrl/cmd + z to safety`,
		`stackoverflow who?`,
		`nandos?`,
		`github copilot wrote this`,
		`a new js framework probably just dropped`,
		`// we don't know why but if you remove this line everything breaks`,
		`edgy? border-radius: 0px;`,
		`recursion recursion recursion re`,
		`who likes semicolons, honestly`
	];

	interface Repo {
		name: string;
		description: string;
		url: string;
		homepage: string;
	}

	interface Article {
		title: string;
		comments_count: number;
		tag_list: Array<string>;
		url: string;
		social_image: string;
		description: string;
		positive_reactions_count: number;
		reading_time_minutes: number;
	}

	let repos: Array<Repo> = [];
	let articles: Array<Article> = [];
	let repoError: boolean = false;
	let articleError: boolean = false;

	$: if (browser && innerWidth < 992) {
		isMobile = true;
	} else {
		isMobile = false;
	}
	if (browser) {
		getRepos();
		getArticles();
	}

	async function getRepos() {
		try {
			const res = await fetch('/api/repos');
			repos = await res.json();
		} catch (error) {
			console.error(error);
			repoError = true;
		}
	}

	async function getArticles() {
		try {
			const res = await fetch(`https://dev.to/api/articles?username=alextana`);
			articles = await res.json();
		} catch (error) {
			console.error(error);
			articleError = true;
		}
	}

	function setGreeting() {
		selectedGreeting = greetings[Math.floor(Math.random() * greetings.length)];
	}

	function setPlayingMode(type: string) {
		switch (type) {
			case 'playing':
				isPlaying = true;
				break;
			case 'not_playing':
				isPlaying = false;
				break;
		}
	}

	onMount(() => {
		setGreeting();
		showGame = true;
		showSkills = true;

		setInterval(() => {
			const pre = selectedGreeting;
			selectedGreeting = '';
			setTimeout(() => {
				setGreeting();
				if (selectedGreeting === pre) {
					setGreeting();
				}
			}, animationDuration);
		}, 3000);
	});
</script>

<div
	class="relative overflow-hidden text-center font-light mx-auto w-full hero-section"
	bind:this={heroContainer}
>
	<div class="skills overflow-hidden">
		{#if heroContainer}
			{#if showSkills}
				{#each skills as skill, i}
					{@const top = Math.random() * heroContainer.clientHeight}
					{@const left = Math.random() * heroContainer.clientWidth}
					{@const opacity = Math.random() * 0.17}
					{@const animationDuration = Math.floor(Math.random() * (15 - 3) + 3)}
					<div
						class="floating-skill bg-gray-800 px-2 py-6 font-mono absolute text-md lg:text-2xl"
						style="animation-duration: {animationDuration}s; top: {top}px; left: {left}px; z-index: {top}; opacity: {opacity};"
					>
						{skill}
					</div>
				{/each}
			{/if}
		{/if}
	</div>
	<div class="intro-text absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
		<div class="intro">
			<h1 class="text-8xl tracking-tighter">alex tana</h1>
			<div class="sub-text text-xl mb-4">front end developer based in Brighton, UK.</div>
		</div>
		<div class="greeting-text mx-auto overflow-hidden px-4 py-1 rounded-md w-full transition-all ">
			{#if selectedGreeting !== ''}
				<div
					in:fly={{ duration: animationDuration, easing: quintInOut, y: -200 }}
					out:fly={{ duration: animationDuration, easing: quintInOut, y: 200 }}
					class="intro-container"
				>
					<div class="hero text-lg font-light tracking-tighter font-mono">
						{selectedGreeting}
					</div>
				</div>
			{/if}
		</div>
		{#if showGame}
			<div
				transition:scale={{ duration: 300, delay: 1000 }}
				class="game-button w-full flex justify-center mt-4"
			>
				<Button on:click={() => setPlayingMode('playing')} type="cta">Bored?</Button>
			</div>
		{/if}
	</div>
</div>

<div class="container py-24 mx-auto grid gap-3 grid-cols-1 lg:grid-cols-2">
	<div class="repos flex-grow w-full">
		<div class="tracking-tighter font-bold text-4xl mb-6">
			My latest
			<span class="github-icon mx-2 inline-block">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="fill-current"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					><path
						d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
					/></svg
				>
			</span> repos:
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 h-max gap-3 justify-start items-start">
			{#if repos.length}
				{#each repos || [] as repo, i}
					{#if repo.name !== 'alextana'}
						<div transition:scale={{ duration: 300, delay: i * 50 }} class="card-transition">
							<Card>
								<div class="repo-info mb-2">
									<div class="repo-name">
										{repo?.name}
									</div>
									{#if repo?.description}
										<div class="repo-description text-sm">
											{repo?.description}
										</div>
									{/if}
								</div>

								<div class="links flex gap-1">
									{#if repo.homepage}
										<Button type="primary" link={repo?.homepage}>Website</Button>
									{/if}
									{#if repo.url}
										<Button type="tertiary" link={repo?.url}>Github</Button>
									{/if}
								</div>
							</Card>
						</div>
					{/if}
				{/each}
			{:else if repoError}
				Could not load repositories
			{:else}
				<CardSkeleton amount={5} />
			{/if}
		</div>
	</div>
	<div class="articles w-full text-gray-300">
		<div class="articles-title">
			<div class=" font-bold text-4xl tracking-tighter mb-6 text-white">My latest articles:</div>
		</div>
		<div class="articles-container flex-grow grid grid-cols-2">
			{#if articles.length}
				{#each articles as article}
					<Card link={article.url} targetBlank>
						{#if article.social_image}
							<img class="rounded-3xl mb-4" src={article.social_image} alt={article.title} />
						{/if}
						{#if article.title}
							{article.title}
						{/if}
						<div class="article-interactions w-full flex justify-between">
							<div class="positive-interactions flex gap-1 items-center">
								<div class="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4 text-gray-400 hover:text-gray-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
										/>
									</svg>
								</div>
								<div class="count text-xs">
									{article.positive_reactions_count}
								</div>
							</div>
							<div class="reading-time">
								{#if article.reading_time_minutes}
									<span class="w-max text-align-right block mt-2 ml-auto text-xs text-gray-400"
										>{article.reading_time_minutes}min read</span
									>
								{/if}
							</div>
						</div>
						{#if article.tag_list.length}
							<div class="tag-list flex gap-1 flex-wrap mt-4">
								{#each article.tag_list as tag}
									<div
										class="
										{setClass(tag)} tag px-2 py-1 text-white rounded-md smaller-txt font-semibold uppercase
									"
									>
										{tag}
									</div>
								{/each}
							</div>
						{/if}
					</Card>
				{/each}
			{:else if articleError}
				Could not load articles
			{:else}
				<CardSkeleton amount={1} />
			{/if}
		</div>
	</div>
</div>

<div class="about-experience relative pink-gradient text-gray-800 py-32 overflow-hidden">
	<div class="welcoming opacity-10 z-1 absolute top-1/2 left-32 transform -translate-y-1/2">
		<Contributions />
	</div>
	<div class="container relative ml-auto z-5">
		<div class="about-text w-full lg:w-2/3 mx-auto lg:ml-auto text-left lg:text-right">
			<h1 class="text-6xl lg:text-8xl font-extrabold tracking-tighter mb-4">experience</h1>
			<p
				class="about-text inline mb-1 bg-fuchsia-500/10 backdrop-blur-lg leading-loose text-xl tracking-wide"
			>
				I have been interested in web design and development since when I was 12, and I've watched
				the web change over the years from table-based layouts to mobile-friendly fully fledged
				desktop-like applications.
				<br />
				I started working professionally as a front end developer in 2018, building websites for car
				dealerships - using a wide range of technologies including
				<span class="text-2xl xl:text-3xl font-extrabold font-mono tracking-tighter"
					>{'<html/>'}</span
				>,
				<span class="text-2xl xl:text-3xl font-extrabold tracking-tighter css-anim">CSS</span>,
				<span class="text-2xl xl:text-3xl font-mono">{'{.js}'}</span> and
				<span class="text-2xl xl:text-3xl font-mono">{'{{ Vue }}'}</span>.
				<br />
				In 2021 I started working at Barkweb, where I'm helping the team build a CMS and e-commerce/auctions
				platforms using cutting edge technologies like
				<span class="text-2xl xl:text-3xl font-mono tracking-tighter">$: Svelte</span>,
				<span class="text-2xl xl:text-3xl italic tracking-tighter font-extrabold">GO</span>
				and <span class="text-2xl xl:text-3xl font-mono">>>esbuild</span> to name a few.
				<br />
			</p>
		</div>
	</div>
</div>

<div class="about-me relative blue-gradient text-white py-32 overflow-hidden">
	<div class="welcoming opacity-10 z-1 absolute top-1/2 right-32 transform -translate-y-1/2">
		<Programming />
	</div>
	<div class="container relative mx-auto z-5">
		<div class="about-text w-full lg:w-2/3 mx-auto lg:mx-0">
			<h1 class="text-6xl lg:text-8xl font-extrabold tracking-tighter mb-4">more about me</h1>
			<p
				class="about-text inline mb-1 bg-black/5 backdrop-blur-lg leading-loose text-xl tracking-wide"
			>
				You probably already know all the boring stuff, I enjoy building <span
					class="font-extrabold text-4xl xl:text-6xl tracking-tighter">great</span
				>
				applications focusing on the finer details and user experience - a designer's mockup can be built
				into an application in a thousand different ways, which is why I'm so passionate about front
				end development.
				<br />
				<br />
				When I'm not behind a screen you can find me playing drums, playing with my cat, or outside walking
				along the beautiful and chaotic beach of Brighton.
			</p>
		</div>
	</div>
</div>

{#if isPlaying}
	<Game on:close={() => (isPlaying = false)} />
{/if}

<svelte:window bind:innerWidth />

<style>
	.hero-section {
		height: 70vh;
		background-image: linear-gradient(
			106.4deg,
			rgba(255, 104, 192, 1) 11.1%,
			rgba(104, 84, 249, 1) 81.3%
		);
	}

	.blue-gradient {
		background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
	}

	.pink-gradient {
		background-image: radial-gradient(
			circle 673px at 10% 20%,
			rgba(255, 220, 163, 1) 0%,
			rgba(129, 255, 239, 1) 48.5%,
			rgba(139, 172, 251, 1) 97.8%
		);
	}

	.floating-skill {
		animation-name: float;
		animation-iteration-count: infinite;
	}

	.intro-text {
		z-index: 2;
	}

	.smaller-txt {
		font-size: 0.6rem;
	}

	@keyframes float {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(10px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
