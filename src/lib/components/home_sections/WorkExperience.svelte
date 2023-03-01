<script>
	import Contributions from '../svg/Contributions.svelte';
</script>

<div class="welcoming opacity-10 z-1 absolute top-1/2 left-32 transform -translate-y-1/2">
	<Contributions />
</div>
<div class="container about-container relative text-container mx-auto z-5">
	<div class="about-text w-full lg:w-2/3 mx-auto lg:ml-auto text-left lg:text-right">
		<div class="blob" />
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
			In 2021 I started working at Barkweb, where I've helped the team build a CMS and e-commerce/auction
			platforms using cutting edge technologies like
			<span class="text-2xl xl:text-3xl font-mono tracking-tighter">$: Svelte</span>,
			<span class="text-2xl xl:text-3xl italic tracking-tighter font-extrabold">GO</span>
			and <span class="text-2xl xl:text-3xl font-mono">>>esbuild</span> to name a few.
			<br />
			In february 2023 I've joined Amiqus, where I am currently helping the team to build their new front end
			using <span class="text-2xl xl:text-3xl font-mono">{'{{ Vue }}'}</span>.
		</p>
	</div>
</div>

<style>
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
		background: #2b3da1;
		border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
		overflow: hidden;
		animation: morph 15s linear infinite;
		width: 924px;
		display: block;
		height: 754px;
		z-index: -1;
		position: absolute;
		top: 30%;
		right: -50%;
		transform: translateY(-50%);
	}
</style>
