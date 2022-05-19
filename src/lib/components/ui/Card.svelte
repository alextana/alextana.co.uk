<script lang="ts">
	export let link: string = '';
	export let targetBlank: boolean = false;

	const classToUse: string =
		'card bg-zinc-900 cursor-pointer hover:bg-blue-900 p-6 rounded-3xl shadow-lg text-gray-200';
</script>

{#if link !== ''}
	<a href={link} target={targetBlank ? '_blank' : ''} class={classToUse}><slot /></a>
{:else}
	<div class={classToUse}>
		<slot />
	</div>
{/if}
