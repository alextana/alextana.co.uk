<script lang="ts">
	export let amount: number = 0;
	const classToUse: string = 'card skeleton bg-zinc-900 rounded-3xl p-6 hover:bg-black';
</script>

{#each Array(amount) as _}
	<div class={classToUse} />
{/each}

<style>
	.card {
		min-height: 170px;
		min-width: 100%;
	}

	.skeleton {
		max-width: 300px;
		animation: shine-lines 1.2s infinite linear;
		background-image: linear-gradient(90deg, rgb(24 24 27) 0px, #1f1e22 80px, rgb(24 24 27) 80px);
		background-size: 800px;
	}
	@keyframes shine-lines {
		0% {
			background-position: -100px;
		}
		40%,
		100% {
			background-position: 500px;
		}
	}
</style>
