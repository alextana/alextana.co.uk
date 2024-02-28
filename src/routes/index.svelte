<script lang="ts">
	import { browser } from '$app/env';
	import { fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { quintInOut } from 'svelte/easing';
	import WorkExperience from '$lib/components/home_sections/WorkExperience.svelte';
	import AboutMe from '$lib/components/home_sections/AboutMe.svelte';
	import Contact from '$lib/components/home_sections/Contact.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Game from '$lib/components/game/Game.svelte';
	import { Gradient } from '$lib/components/home_sections/Gradient';

	const gradient: any = new Gradient();

	import Card from '$lib/components/ui/Card.svelte';
	import CardSkeleton from '$lib/components/ui/CardSkeleton.svelte';

	let selectedGreeting: string = '';
	let innerWidth: number = 0;
	let showGame: boolean = false;
	let isPlaying: boolean = false;

	let canvas: any = null;

	$: if (canvas) {
		gradient.initGradient('#gradient-canvas');
	}

	function setClass(tag: string) {
		switch (tag.toLowerCase()) {
			case 'svelte':
				return 'bg-red-500 text-white';
			case 'tailwindcss':
				return 'bg-blue-800 text-white';
			case 'javascript':
				return 'bg-yellow-500 text-black';
			case 'vue':
				return 'bg-green-500 text-black';
			case 'spotify':
				return 'bg-green-500 text-black';
			case 'react':
				return 'bg-blue-500 text-white';
			default:
				return 'bg-gray-500 text-white';
		}
	}

	const animationDuration: number = 800;
	const greetings: Array<string> = [
		'hello world',
		`console.log('hey there')`,
		`looking for projects?`,
		`mono is a nice font`,
		`I like svelte`,
		`baNaNa`,
		`clever programmer joke`,
		`coffees.push(Infinity)`,
		`it's not a bug, it's a feature`,
		`🇬🇧 programmers be like "git init"`,
		`git stash -m "will definitely remember to do this later"`,
		`ctrl/cmd + z to safety`,
		`stackoverflow who?`,
		`github copilot wrote this`,
		`a new js framework probably just dropped`,
		`// we don't know why but if you remove this line everything breaks`,
		`edgy? border-radius: 0px;`,
		`recursion recursion recursion re`,
		`who likes semicolons, honestly`
	];

	if (browser) {
		getRepos();
		getArticles();
	}

	let repos: Array<Repo> = [];
	let repoError: boolean = false;

	interface Repo {
		name: string;
		description: string;
		html_url: string;
		homepage: string;
		topics: Array<string>;
	}

	async function getRepos() {
		try {
			const res = await fetch('/api/repos');
			repos = await res.json();
			let index = repos?.findIndex((r) => r.topics.includes('featured'));

			if (!index) {
				return;
			}
			repos.unshift(repos.splice(index, 1)[0]);
		} catch (error) {
			console.error(error);
			repoError = true;
		}
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

	let articles: Array<Article> = [];
	let articleError: boolean = false;

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

<div class="relative overflow-hidden text-center font-light mx-auto w-full hero-section">
	<canvas bind:this={canvas} data-js-darken-top id="gradient-canvas" data-transition-in />
	<div
		class="intro-text text-black/80 absolute w-full top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2"
	>
		<div class="intro">
			<h1 class="text-8xl font-extrabold tracking-tighter">hello</h1>
			<div class="sub-text text-4xl font-bold tracking-tighter mb-4">I make things for the web</div>
		</div>
		<div class="greeting-text mx-auto overflow-hidden px-4 py-1 rounded-md w-full transition-all">
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

<div class="container py-16 lg:py-24 mx-auto">
	<div class="repos flex-grow w-full mb-8">
		<div class="tracking-tighter font-light text-4xl mb-6">
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
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-max gap-3 justify-start items-start"
		>
			{#if repos.length}
				{#each repos || [] as repo, i}
					{#if repo.name !== 'alextana'}
						<div class="relative">
							{#if repo?.topics?.includes('featured')}
								<!-- <div
									class="featured absolute left-1/2 transform -translate-x-1/2 -top-2 rounded-full font-bold text-neutral-800 text-xs uppercase w-max shadow-2xl bg-yellow-400 px-2 py-1"
								>
									📌 Featured
								</div> -->
							{/if}
							<Card>
								<div class="repo-info mb-2 text-gray-300">
									<div class="repo-name text-3xl font-light tracking-tighter mb-1">
										{repo?.name?.replace('-', ' ')}
									</div>
									{#if repo?.description}
										<div class="repo-description text-md mb-2">
											{repo?.description}
										</div>
									{/if}
								</div>

								<div class="repos-tags mb-4">
									{#if repo.topics}
										<div class="tag-list flex gap-1 flex-wrap mt-4">
											{#each repo.topics as tag}
												{#if tag.toLowerCase() !== 'featured'}
													<div
														class="
												{setClass(tag)} tag px-2 py-1 text-white rounded-md smaller-txt font-semibold uppercase
											"
													>
														{tag}
													</div>
												{/if}
											{/each}
										</div>
									{/if}
								</div>

								<div class="links flex gap-1">
									{#if repo.homepage}
										<Button type="cta-small" link={repo?.homepage}>Website</Button>
									{/if}
									{#if repo.html_url}
										<Button type="cta-small-secondary" link={repo?.html_url}>Github</Button>
									{/if}
								</div>
							</Card>
						</div>
					{/if}
				{/each}
			{:else if repoError}
				Could not load repositories
			{:else}
				<CardSkeleton amount={8} />
			{/if}
		</div>
	</div>
	<div class="articles w-full text-gray-300">
		<div class="articles-title">
			<div class=" font-light text-4xl tracking-tighter mb-6 text-white">
				My latest
				<span class="mx-2 inline-block bg-white rounded-xl">
					<svg viewBox="0 32 447.99999999999994 448" xmlns="http://www.w3.org/2000/svg" class="w-8"
						><path
							d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
						/></svg
					>
				</span>
				articles:
			</div>
		</div>
		<div class="articles-container flex-grow grid grid-cols-1 md:grid-cols-2 gap-3">
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

<div class="about-experience relative pink-gradient text-gray-300 py-32">
	<WorkExperience />
</div>

<div class="about-me relative text-white py-32">
	<AboutMe />
</div>

<div class="contact-me py-24 text-white">
	<Contact />
</div>

{#if isPlaying}
	<Game on:close={() => (isPlaying = false)} />
{/if}

<svelte:window bind:innerWidth />

<style>
	.hero-section {
		height: 100vh;
		background: #2e1437; /* fallback for old browsers */
	}

	#gradient-canvas {
		width: 100%;
		height: 100%;
		--gradient-color-1: #4cd4b0;
		--gradient-color-2: #fffce6;
		--gradient-color-3: #f24d16;
		--gradient-color-4: #edd834;
	}

	@-webkit-keyframes moveGradient {
		0% {
			background-position: 0% 23%;
		}
		50% {
			background-position: 100% 78%;
		}
		100% {
			background-position: 0% 23%;
		}
	}
	@keyframes moveGradient {
		0% {
			background-position: 0% 23%;
		}
		50% {
			background-position: 100% 78%;
		}
		100% {
			background-position: 0% 23%;
		}
	}
	.blue-gradient {
		background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
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
			transform: translateY(100px);
		}
		100% {
			transform: translateY(0);
		}
	}

	h1 {
		font-size: 8rem;
	}

	.blob {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		z-index: 20;
		opacity: 0.9;
	}

	.intro-text {
		z-index: 40;
	}
</style>
