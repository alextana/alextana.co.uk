<script lang="ts">
	import { onMount } from 'svelte';
	export let type: string = 'default';
	// export let size: string = 'md';
	export let link: string = '';
	export let targetBlank: boolean = false;

	let classToUse: string = '';

	onMount(() => {
		const baseClass = 'py-1 px-4 rounded-md cursor-pointer w-max';
		switch (type) {
			case 'primary':
				classToUse = `${baseClass} text-white border border-blue-600 bg-blue-600 hover:bg-blue-700`;
				break;
			case 'secondary':
				classToUse = `${baseClass} text-white border border-green-600 bg-green-600 hover:bg-green-700`;
				break;
			case 'tertiary':
				classToUse = `${baseClass} text-white bg-transparent border border-white hover:bg-white hover:text-black`;
				break;
			case 'cta':
				classToUse = `${baseClass} text-white bg-transparent border-2 border-white hover:bg-white font-bold uppercase text-xs hover:text-black`;
				break;
			default:
				classToUse = `${baseClass} text-white border border-gray-600 bg-gray-600 hover:bg-gray-700`;
				break;
		}
	});
</script>

{#if link !== ''}
	<a href={link} target={targetBlank ? '_blank' : ''} class={classToUse} on:click><slot /></a>
{:else}
	<div class={classToUse} on:click>
		<slot />
	</div>
{/if}
