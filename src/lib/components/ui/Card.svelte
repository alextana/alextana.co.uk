<script lang="ts">
	export let link: string = '';
	export let targetBlank: boolean = false;

	const classToUse: string = 'card transition-all bg-black rounded-3xl p-6 hover:-translate-y-1';
</script>

{#if link !== ''}
	<a href={link} target={targetBlank ? '_blank' : ''} class={classToUse}><slot /></a>
{:else}
	<div class={classToUse}>
		<slot />
	</div>
{/if}

<style>
</style>
