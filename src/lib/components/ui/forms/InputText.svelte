<script lang="ts">
	export let value: string = '';
	export let placeholder: string = '';
	export let widthClass: string = 'w-full';
	export let extraClass: string = '';
</script>

<div class="{widthClass} {extraClass}">
	<input
		class="{widthClass} transition-all px-2 py-1 rounded-md border-transparent bg-gray-800 focus:bg-white border text-white focus:text-gray-800 focus:border-gray-100 mb-4"
		type="text"
		bind:value
		{placeholder}
	/>
</div>
