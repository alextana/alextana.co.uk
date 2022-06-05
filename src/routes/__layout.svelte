<script>
	import '../app.css';
	import Footer from '$lib/components/footer/Footer.svelte';
	import { scrollingEnabled } from '$lib/stores/scrollingEnabled';
</script>

<div class="main-container {!$scrollingEnabled ? 'lock-scroll' : ''}">
	<slot />
	<Footer />
</div>

<svelte:head>
	<title>alex tana | Portfolio</title>
</svelte:head>

<style>
	:global(html, body) {
		overflow-x: hidden;
		background: #121117;
		color: white;
	}

	:global(.lock-scroll) {
		margin: 0;
		height: 100vh;
		overflow: hidden;
	}

	@media (max-width: 992px) {
		:global(.container) {
			padding-right: 15px !important;
			padding-left: 15px !important;
		}
	}
</style>
