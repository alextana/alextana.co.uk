<script>
	import '../app.css';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>

<!-- <Header /> -->
<slot />
<Footer />

<style>
	:global(body) {
		background: #1f1d26;
		color: white;
	}
</style>
