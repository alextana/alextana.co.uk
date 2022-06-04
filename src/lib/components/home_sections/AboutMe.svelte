<script>
	import Programming from '../svg/Programming.svelte';
</script>

<div class="welcoming opacity-10 z-1 absolute top-1/2 right-32 transform -translate-y-1/2">
	<Programming />
</div>
<div class="container about-container relative mx-auto z-5">
	<div class="about-text w-full lg:w-2/3 mx-auto lg:mx-0">
		<div class="blob">
			<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<path
					fill="#FF0066"
					d="M34.5,-45.6C42.9,-41.4,46.5,-28.9,47.4,-17.5C48.2,-6.1,46.2,4.1,47.3,19.8C48.3,35.5,52.4,56.6,45,68.1C37.7,79.5,18.8,81.3,2.7,77.6C-13.5,74,-27.1,64.9,-38.7,54.9C-50.4,44.8,-60.2,33.8,-67.6,19.9C-75,6,-79.9,-10.8,-75.2,-24.2C-70.5,-37.6,-56.2,-47.6,-42.1,-49.9C-27.9,-52.1,-14,-46.6,-0.4,-46C13.1,-45.3,26.2,-49.7,34.5,-45.6Z"
					transform="translate(100 100)"
				/>
			</svg>
		</div>
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
		width: 1024px;
		display: block;
		height: 1024px;
		z-index: -1;
		position: absolute;
		top: 30%;
		left: -50%;
		transform: translateY(-50%);
	}
	.blob path {
		fill: #bd5cbd;
		backdrop-filter: blur(20px);
	}
</style>
