<script lang="ts">
	export let link: string = '';
	export let targetBlank: boolean = false;
</script>

{#if link !== ''}
	<a href={link} target={targetBlank ? '_blank' : ''} class="card"><slot /></a>
{:else}
	<div class="card">
		<slot />
	</div>
{/if}

<style>
	.card {
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 0.7rem;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
			0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
			0 32px 64px rgba(0, 0, 0, 0.07);
		padding: 2.5em;
		background: #111111;
		min-width: 250px;
		height: max-content;
		position: relative;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		outline: 2px solid transparent;
		min-height: 250px;
	}
	.card:hover {
		background: #111111;
		outline: 2px solid #2bd2ff;
	}

	.card::after {
		content: '';
		transition: all 0.6s ease-in-out;
		opacity: 0;
		border-radius: 50%;

		left: 50%;
		top: 50%;
	}

	.card:hover::after {
		content: '';
		width: 650px;
		opacity: 1;
		height: 430px;
		filter: blur(100px);
		background-color: #fa8bff;
		animation-name: gradients;
		animation-duration: 0.3s;
		animation-iteration-count: infinite;
		transition: all 0.2s ease-in-out;
		background-image: linear-gradient(45deg, #fa8bff 0%, #2bd2ff 52%, #2bff88 90%);
		background-size: 200% 200%;
		color: white;
		z-index: -1;
		position: absolute;
	}

	@keyframes gradients {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
