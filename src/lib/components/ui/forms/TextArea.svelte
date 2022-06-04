<script lang="ts">
	export let widthClass: string = 'w-full';
	export let value: string = '';
	export let placeholder: string = '';
</script>

<textarea
	class="{widthClass} p-6 transition-all rounded-md border-transparent text-3xl font-extrabold tracking-tighter focus:bg-white border text-white focus:text-gray-800 focus:border-gray-100 outline-none"
	name=""
	id=""
	cols="30"
	{placeholder}
	rows="5"
	bind:value
/>
