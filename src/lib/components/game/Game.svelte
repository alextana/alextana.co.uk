<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { onMount, createEventDispatcher } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { ConfettiExplosion } from 'svelte-confetti-explosion';
	import Button from '$lib/components/ui/Button.svelte';
	import { scrollingEnabled } from '$lib/stores/scrollingEnabled';

	const dispatch = createEventDispatcher();

	let currentlyUncovered: Array<Entry> = [];
	let isWon: boolean = false;
	let showAlert: boolean = false;
	let shouldShow: boolean = false;
	let innerHeight: number = 0;
	let innerWidth: number = 0;

	$: pairedEntries = entries.filter((f) => f.paired);

	$: if (pairedEntries.length === entries.length) {
		setTimeout(() => {
			isWon = true;
		}, 800);
	}

	$: shouldShow ? ($scrollingEnabled = false) : ($scrollingEnabled = true);

	interface Entry {
		symbol: string;
		paired: boolean;
		covered: boolean;
		id: string;
	}

	let entries: Array<Entry> = ([] = [
		{ symbol: '👻', paired: false, covered: true, id: uuidv4() },
		{ symbol: '💩', paired: false, covered: true, id: uuidv4() },
		{ symbol: '🐊', paired: false, covered: true, id: uuidv4() },
		{ symbol: '🐳', paired: false, covered: true, id: uuidv4() },
		{ symbol: '🦥', paired: false, covered: true, id: uuidv4() },
		{ symbol: '🍄', paired: false, covered: true, id: uuidv4() },

		{ symbol: '👻', paired: false, covered: true, id: uuidv4() },
		{ symbol: '💩', paired: false, covered: true, id: uuidv4() },
		{ symbol: '🐊', paired: false, covered: true, id: uuidv4() },
		{ symbol: '🐳', paired: false, covered: true, id: uuidv4() },
		{ symbol: '🦥', paired: false, covered: true, id: uuidv4() },
		{ symbol: '🍄', paired: false, covered: true, id: uuidv4() }
	]);

	function shuffleArray(array: Array<any>) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}

		entries = entries;
	}

	function handleUncovering(entry: Entry) {
		if (pairedEntries.find((f) => f === entry)) {
			return;
		}

		if (currentlyUncovered.length === 2) {
			return;
		}

		if (!currentlyUncovered.length || currentlyUncovered.length === 1) {
			if (entry === currentlyUncovered[0]) {
				return;
			}

			const entryToPush: any = entries.find((f) => f.id === entry.id);

			uncover(entryToPush);
			currentlyUncovered.push(entry);
		}

		if (currentlyUncovered.length === 2) {
			if (currentlyUncovered[0].symbol === currentlyUncovered[1].symbol) {
				currentlyUncovered.forEach((f) => {
					f.paired = true;
				});

				currentlyUncovered = [];
				entries = entries;
			} else {
				setTimeout(() => {
					currentlyUncovered.forEach((f) => {
						f.covered = true;
					});

					currentlyUncovered = [];
					entries = entries;
				}, 800);
			}
		}
	}

	function uncover(entry: Entry) {
		if (entry?.covered) {
			entry.covered = false;
		}
		entries = entries;
	}

	onMount(() => {
		shouldShow = true;
		shuffleArray(entries);
	});

	function playAgain() {
		entries.forEach((f) => {
			f.paired = false;
			f.covered = true;
		});
		pairedEntries = [];
		isWon = false;
		entries = entries;
	}

	function handleClose() {
		if (pairedEntries.length && !isWon) {
			showAlert = true;
		} else {
			close();
		}
	}

	function cancelClose() {
		showAlert = false;
	}

	function confirmClose() {
		showAlert = false;
		close();
	}

	function close() {
		shouldShow = false;
		setTimeout(() => {
			dispatch('close');
		}, 500);
	}
</script>

{#if shouldShow}
	<div
		transition:scale={{ duration: 400 }}
		class="game fixed w-max z-50 p-8 bg-gray-900 shadow-3xl rounded-3xl text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
	>
		<div
			class="close-button p-2 rounded-full bg-white cursor-pointer hover:bg-gray-200 text-gray-700 absolute -right-3 -top-3"
			on:click={handleClose}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</div>
		<h2 class="text-center mb-8 text-3xl text-gray-200 tracking-tighter">
			Match the <span class="font-extrabold">emojis 🤔</span>
		</h2>
		<div class="game-grid relative grid grid-cols-3 gap-1">
			{#if isWon}
				<div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<ConfettiExplosion
						particleCount={200}
						force={0.7}
						stageHeight={innerHeight}
						stageWidth={innerWidth}
					/>
				</div>
				<div
					class="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  confetti-explosion mx-auto text-center py-16"
				>
					<div class="win-message flex flex-wrap justify-center">
						<p class="text-2xl w-full font-light tracking-tighter italic mb-0">congratulations</p>
						<h2 class="text-6xl w-full font-black tracking-tighter mb-4">YOU WON!</h2>
						<div class="flex gap-3">
							<Button type="tertiary" on:click={playAgain}>Play Again</Button>
							<Button type="tertiary" on:click={close}>Had enough</Button>
						</div>
					</div>
				</div>
			{/if}

			{#each entries as entry}
				<div
					class:uncovered={!entry.covered}
					class:covered={entry.covered}
					class="entry text-gray-600 cursor-pointer w-32 h-32 {isWon
						? 'opacity-0 pointer-events-none'
						: ''} {entry.covered
						? 'bg-gray-800 hover:bg-blue-800 hover:text-white'
						: 'bg-white'} rounded-3xl p-4 relative"
					on:click={() => handleUncovering(entry)}
				>
					<div
						class="absolute symbol top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl"
					>
						{#if entry.covered}
							<span
								in:fade={{ duration: 500, delay: 200 }}
								out:fade={{ duration: 0, delay: 0 }}
								class="text-6xl font-black"
							>
								?
							</span>
						{:else}
							<div
								in:fade|local={{ duration: 500, delay: 200 }}
								out:fade={{ duration: 0, delay: 0 }}
								class="symbol"
							>
								{entry.symbol}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div
		transition:fade={{ duration: 300 }}
		class="overlay fixed top-0 left-0 w-screen h-screen bg-fuchsia-400/40 backdrop-blur-xl z-40"
		on:click={handleClose}
	/>
{/if}

{#if showAlert}
	<div
		transition:scale={{ duration: 200 }}
		class="bg-white rounded-3xl w-max text-gray-800 shadow-2xl p-6 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
	>
		<h2 class="text-4xl font-extrabold text-gray-700 tracking-tighter">oh dear!</h2>
		<p class="text-md">Your game is in progress, are you sure you'd like to close?</p>
		<div class="toggles flex gap-1 justify-end mt-4">
			<Button type="primary" on:click={confirmClose}>Close</Button>
			<Button type="secondary" on:click={cancelClose}>Cancel</Button>
		</div>
	</div>
{/if}

<svelte:window bind:innerHeight bind:innerWidth />

<style>
	.uncovered {
		transform: rotateY(180deg);
	}
	.entry {
		transition: 0.8s all ease;
	}
	.covered {
		transform: rotateY(0deg);
	}
</style>
