<script>
	import Programming from '../svg/Programming.svelte';
</script>

<div class="welcoming opacity-10 z-1 absolute top-1/2 right-32 transform -translate-y-1/2">
	<Programming />
</div>
<div class="container about-container relative mx-auto z-5">
	<div class="about-text w-full lg:w-2/3 mx-auto lg:mx-0">
		<div class="blob" />
		<h1 class="text-6xl lg:text-8xl font-extrabold tracking-tighter mb-4">more about me</h1>
		<p class="about-text inline mb-1 leading-loose text-xl tracking-wide">
			Originally from 🇮🇹, now based in the UK, I enjoy building <span
				class="font-extrabold text-4xl text-pink-400 xl:text-6xl tracking-tighter inline-block transform -skew-y-2"
				>great</span
			>
			applications focusing on the finer details and user experience. A designer's mockup can be built
			into an application in a thousand different ways, which is why I'm so passionate about front end
			development.
			<br />
			<br />
			When I'm not behind a screen you can find me playing drums, playing with my cat, or outside walking
			along the beautiful and chaotic beach of Brighton.
		</p>
	</div>
</div>

<style>
	.about-text {
		z-index: 10;
		position: relative;
	}
	.about-container {
		text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
		border: 10px dotted #bd5cbd;
		border-radius: 50px;
		padding: 3%;
		width: 100%;
	}
	.blob {
		border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
		overflow: hidden;
		background: #bd5cbd;
		animation: morph 15s linear infinite;
		width: 524px;
		display: block;
		height: 754px;
		z-index: -1;
		position: absolute;
		top: 30%;
		left: -20%;
		transform: translateY(-50%);
	}

	@keyframes morph {
		0%,
		100% {
			border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
		}
		34% {
			border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
		}
		67% {
			border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
		}
	}
</style>
