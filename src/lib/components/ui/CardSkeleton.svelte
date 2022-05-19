<script lang="ts">
	export let amount: number = 0;
	const classToUse: string =
		'card bg-zinc-900 cursor-pointer hover:bg-blue-900 p-6 rounded-3xl shadow-lg text-gray-200';
</script>

{#each Array(amount) as _}
	<div class={classToUse} />
{/each}
