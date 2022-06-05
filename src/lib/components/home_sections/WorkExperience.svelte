<script>
	import Contributions from '../svg/Contributions.svelte';
</script>

<div class="welcoming opacity-10 z-1 absolute top-1/2 left-32 transform -translate-y-1/2">
	<Contributions />
</div>
<div class="container about-container relative text-container mx-auto z-5">
	<div class="about-text w-full lg:w-2/3 mx-auto lg:ml-auto text-left lg:text-right">
		<div class="blob">
			<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
				<path
					fill="#FF0066"
					d="M40.5,-60.1C49.1,-49.5,50.3,-33.1,54.9,-18C59.5,-3,67.6,10.8,67.5,25.3C67.4,39.8,59.2,54.9,46.6,65.5C33.9,76.1,17,82.2,-1.1,83.8C-19.2,85.3,-38.5,82.4,-53.3,72.5C-68,62.6,-78.3,45.7,-76.5,29.9C-74.7,14.1,-60.9,-0.6,-52.3,-13.9C-43.7,-27.2,-40.4,-39.1,-32.5,-49.9C-24.7,-60.8,-12.3,-70.7,1.8,-73.2C15.9,-75.7,31.9,-70.8,40.5,-60.1Z"
					transform="translate(100 100)"
				/>
			</svg>
		</div>
		<h1 class="text-6xl lg:text-8xl font-extrabold tracking-tighter mb-4">experience</h1>
		<p class="about-text inline mb-1 leading-loose text-xl tracking-wide">
			I have been interested in web design and development since I was 12, and I've watched the web
			change over the years from table-based layouts to mobile-friendly fully fledged desktop-like
			applications.
			<br />
			I started working professionally as a front end developer in 2018, building websites for car dealerships
			- using a wide range of technologies including
			<span class="text-2xl xl:text-3xl font-extrabold font-mono tracking-tighter">{'<html/>'}</span
			>,
			<span class="text-2xl xl:text-3xl font-extrabold tracking-tighter css-anim">CSS</span>,
			<span class="text-2xl xl:text-3xl font-mono">{'{.js}'}</span> and
			<span class="text-2xl xl:text-3xl font-mono">{'{{ Vue }}'}</span>.
			<br />
			In 2021 I started working at Barkweb, where I'm currently helping the team build a CMS and e-commerce/auction
			platforms using cutting edge technologies like
			<span class="text-2xl xl:text-3xl font-mono tracking-tighter">$: Svelte</span>,
			<span class="text-2xl xl:text-3xl italic tracking-tighter font-extrabold">GO</span>
			and <span class="text-2xl xl:text-3xl font-mono">>>esbuild</span> to name a few.
			<br />
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
		border: 10px dotted #2b3da1;
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
		right: -50%;
		transform: translateY(-50%);
	}
	.blob path {
		fill: #2b3da1;
		backdrop-filter: blur(20px);
	}
</style>
