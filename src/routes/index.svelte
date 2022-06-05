<script lang="ts">
	import { browser } from '$app/env';
	import { fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { quintInOut } from 'svelte/easing';
	import WorkExperience from '$lib/components/home_sections/WorkExperience.svelte';
	import AboutMe from '$lib/components/home_sections/AboutMe.svelte';
	import Contact from '$lib/components/home_sections/Contact.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Game from '$lib/components/game/Game.svelte';

	import Card from '$lib/components/ui/Card.svelte';
	import CardSkeleton from '$lib/components/ui/CardSkeleton.svelte';

	const skills: Array<Skill> = [
		{
			name: 'HTML',
			icon: `<svg fill="none" class="w-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a"/><path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff"/></svg>`
		},
		{
			name: 'CSS',
			icon: `<svg fill="none" class="w-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"/><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"/><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"/></svg>`
		},
		{
			name: 'Tailwind CSS',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-32"><defs><linearGradient x1="0" y1="-21.333" y2="85.333" id="A" x2="64" gradientUnits="userSpaceOnUse"><stop stop-color="#2383ae" offset="0%"/><stop stop-color="#6dd7b9" offset="100%"/></linearGradient></defs><path d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z" fill="url(#A)" fill-rule="evenodd"/></svg>`
		},
		{
			name: 'Javascript',
			icon: `<svg class="w-32" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 0h256v256H0V0z" fill="#F7DF1E"/><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/></svg>`
		},
		{
			name: 'Node',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-32" version="1.2" viewBox="0 0 442.37 270.929"><defs><clipPath id="a"><path d="M239.03 226.605l-42.13 24.317c-1.578.91-2.546 2.59-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336c1.575.907 3.517.907 5.09 0l42.126-24.336c1.57-.91 2.54-2.59 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317c-.79-.453-1.67-.68-2.55-.68-.88 0-1.76.227-2.55.68"/></clipPath><linearGradient id="b" x1="-.348" x2="1.251" gradientTransform="rotate(116.114 53.1 202.97) scale(86.48)" gradientUnits="userSpaceOnUse"><stop offset=".3" stop-color="#3E863D"/><stop offset=".5" stop-color="#55934F"/><stop offset=".8" stop-color="#5AAD45"/></linearGradient><clipPath id="c"><path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39c-.414-.24-.863-.41-1.32-.53zm0 0"/></clipPath><linearGradient id="d" x1="-.456" x2=".582" gradientTransform="rotate(-36.46 550.846 -214.337) scale(132.798)" gradientUnits="userSpaceOnUse"><stop offset=".57" stop-color="#3E863D"/><stop offset=".72" stop-color="#619857"/><stop offset="1" stop-color="#76AC64"/></linearGradient><clipPath id="e"><path d="M241.066 225.953c-.707.07-1.398.29-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336c1.3-.754 2.19-2.03 2.46-3.476l-46.18-78.89c-.34-.067-.68-.102-1.03-.102-.14 0-.28.007-.42.02"/></clipPath><linearGradient id="f" x1=".043" x2=".984" gradientTransform="translate(192.862 279.652) scale(97.417)" gradientUnits="userSpaceOnUse"><stop offset=".16" stop-color="#6BBF47"/><stop offset=".38" stop-color="#79B461"/><stop offset=".47" stop-color="#75AC64"/><stop offset=".7" stop-color="#659E5A"/><stop offset=".9" stop-color="#3E863D"/></linearGradient></defs><path fill="#689f63" d="M218.647 270.93c-1.46 0-2.91-.383-4.19-1.12l-13.337-7.896c-1.992-1.114-1.02-1.508-.363-1.735 2.656-.93 3.195-1.14 6.03-2.75.298-.17.688-.11.993.07l10.246 6.08c.37.2.895.2 1.238 0l39.95-23.06c.37-.21.61-.64.61-1.08v-46.1c0-.46-.24-.87-.618-1.1l-39.934-23.04c-.37-.22-.86-.22-1.23 0l-39.926 23.04c-.387.22-.633.65-.633 1.09v46.1c0 .44.24.86.62 1.07l10.94 6.32c5.94 2.97 9.57-.53 9.57-4.05v-45.5c0-.65.51-1.15 1.16-1.15h5.06c.63 0 1.15.5 1.15 1.15v45.52c0 7.92-4.32 12.47-11.83 12.47-2.31 0-4.13 0-9.21-2.5l-10.48-6.04c-2.59-1.5-4.19-4.3-4.19-7.29v-46.1c0-3 1.6-5.8 4.19-7.28l39.99-23.07c2.53-1.43 5.89-1.43 8.4 0l39.94 23.08c2.58 1.49 4.19 4.28 4.19 7.28v46.1c0 2.99-1.61 5.78-4.19 7.28l-39.94 23.07c-1.28.74-2.73 1.12-4.21 1.12"/><path fill="#689f63" d="M230.987 239.164c-17.48 0-21.145-8.024-21.145-14.754 0-.64.516-1.15 1.157-1.15h5.16c.57 0 1.05.415 1.14.978.78 5.258 3.1 7.91 13.67 7.91 8.42 0 12-1.902 12-6.367 0-2.57-1.02-4.48-14.1-5.76-10.94-1.08-17.7-3.49-17.7-12.24 0-8.06 6.8-12.86 18.19-12.86 12.79 0 19.13 4.44 19.93 13.98.03.33-.09.65-.31.89-.22.23-.53.37-.85.37h-5.19c-.54 0-1.01-.38-1.12-.9-1.25-5.53-4.27-7.3-12.48-7.3-9.19 0-10.26 3.2-10.26 5.6 0 2.91 1.26 3.76 13.66 5.4 12.28 1.63 18.11 3.93 18.11 12.56 0 8.7-7.26 13.69-19.92 13.69m48.66-48.89h1.34c1.1 0 1.31-.77 1.31-1.22 0-1.18-.81-1.18-1.26-1.18h-1.38zm-1.63-3.78h2.97c1.02 0 3.02 0 3.02 2.28 0 1.59-1.02 1.92-1.63 2.12 1.19.08 1.27.86 1.43 1.96.08.69.21 1.88.45 2.28h-1.83c-.05-.4-.33-2.6-.33-2.72-.12-.49-.29-.73-.9-.73h-1.51v3.46h-1.67zm-3.57 4.3c0 3.58 2.89 6.48 6.44 6.48 3.58 0 6.47-2.96 6.47-6.48 0-3.59-2.93-6.44-6.48-6.44-3.5 0-6.44 2.81-6.44 6.43m14.16.03c0 4.24-3.47 7.7-7.7 7.7-4.2 0-7.7-3.42-7.7-7.7 0-4.36 3.58-7.7 7.7-7.7 4.15 0 7.69 3.35 7.69 7.7"/><path fill="#fff" fill-rule="evenodd" d="M94.936 90.55c0-1.84-.97-3.53-2.558-4.445l-42.356-24.37c-.715-.42-1.516-.64-2.328-.67h-.438c-.812.03-1.613.25-2.34.67L2.562 86.105C.984 87.025 0 88.715 0 90.555l.093 65.64c0 .91.47 1.76 1.27 2.21.78.48 1.76.48 2.54 0l25.18-14.42c1.59-.946 2.56-2.618 2.56-4.44V108.88c0-1.83.97-3.52 2.555-4.43l10.72-6.174c.796-.46 1.67-.688 2.56-.688.876 0 1.77.226 2.544.687l10.715 6.172c1.586.91 2.56 2.6 2.56 4.43v30.663c0 1.82.983 3.5 2.565 4.44l25.164 14.41c.79.47 1.773.47 2.56 0 .776-.45 1.268-1.3 1.268-2.21zm199.868 34.176c0 .457-.243.88-.64 1.106l-14.548 8.386c-.395.227-.883.227-1.277 0l-14.55-8.386c-.4-.227-.64-.65-.64-1.106V107.93c0-.458.24-.88.63-1.11l14.54-8.4c.4-.23.89-.23 1.29 0l14.55 8.4c.4.23.64.652.64 1.11zM298.734.324c-.794-.442-1.76-.43-2.544.027-.78.46-1.262 1.3-1.262 2.21v65c0 .64-.34 1.23-.894 1.55-.55.32-1.235.32-1.79 0L281.634 63c-1.58-.914-3.526-.914-5.112 0l-42.37 24.453c-1.583.91-2.56 2.6-2.56 4.42v48.92c0 1.83.977 3.51 2.56 4.43l42.37 24.47c1.582.91 3.53.91 5.117 0l42.37-24.48c1.58-.92 2.56-2.6 2.56-4.43V18.863c0-1.856-1.01-3.563-2.63-4.47zm141.093 107.164c1.574-.914 2.543-2.602 2.543-4.422V91.21c0-1.824-.97-3.507-2.547-4.425l-42.1-24.44c-1.59-.92-3.54-.92-5.13 0l-42.36 24.45c-1.59.92-2.56 2.6-2.56 4.43v48.9c0 1.84.99 3.54 2.58 4.45l42.09 23.99c1.55.89 3.45.9 5.02.03l25.46-14.15c.8-.45 1.31-1.3 1.31-2.22 0-.92-.49-1.78-1.29-2.23l-42.62-24.46c-.8-.45-1.29-1.3-1.29-2.21v-15.34c0-.916.48-1.76 1.28-2.216l13.26-7.65c.79-.46 1.76-.46 2.55 0l13.27 7.65c.79.45 1.28 1.3 1.28 2.21v12.06c0 .91.49 1.76 1.28 2.22.79.45 1.77.45 2.56-.01zm0 0"/><path fill="#689f63" fill-rule="evenodd" d="M394.538 105.2c.3-.177.676-.177.98 0l8.13 4.69c.304.176.49.5.49.85v9.39c0 .35-.186.674-.49.85l-8.13 4.69c-.304.177-.68.177-.98 0l-8.125-4.69c-.31-.176-.5-.5-.5-.85v-9.39c0-.35.18-.674.49-.85zm0 0"/><g clip-path="url(#a)" transform="translate(-78.306 -164.016)"><path fill="url(#b)" d="M331.363 246.793l-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"/></g><g clip-path="url(#c)" transform="translate(-78.306 -164.016)"><path fill="url(#d)" d="M144.07 264.004l83.825 113.453 110.86-81.906-83.83-113.45zm0 0"/></g><g clip-path="url(#e)" transform="translate(-78.306 -164.016)"><path fill="url(#f)" d="M197.02 225.934v107.43h91.683v-107.43zm0 0"/></g></svg>`
		},
		{
			name: 'Vue',
			icon: `<svg class="w-32" viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill="#41B883"/><path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill="#41B883"/><path d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" fill="#35495E"/></svg>`
		},
		{
			name: 'React',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-32" viewBox="0 0 32 32"><g transform="matrix(.05696 0 0 .05696 .647744 2.43826)" fill="none" fill-rule="evenodd"><circle r="50.167" cy="237.628" cx="269.529" fill="#00d8ff"/><g stroke="#00d8ff" stroke-width="24"><path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"/><path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"/><path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"/></g></g></svg>`
		},
		{
			name: 'Next',
			icon: `<svg class="w-32" viewBox="0 0 512 309" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><path d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z" fill="#ffffff" fill-rule="nonzero"></path></g></svg>`
		},
		{
			name: 'Nuxt',
			icon: `<svg class="w-32" viewBox="0 0 256 189" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><polygon fill="#48B884" points="109.7766 0.0009 -0.0004 188.2259 219.5526 188.2259"></polygon><polygon fill="#3F7F70" points="72.8361 188.226 255.9991 188.226 164.4181 31.198"></polygon><polygon fill="#36495D" points="72.8361 188.226 219.5521 188.226 146.1941 62.444"></polygon></g></svg>`
		},
		{
			name: 'Typescript',
			icon: `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" class="w-32"><style>.st0{fill:#007acc}.st1{fill:#fff}</style><path class="st0" d="M0 200V0h400v400H0"/><path class="st1" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"/></svg>`
		},
		{
			name: 'Svelte',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="107" height="128" viewBox="0 0 107 128"><title>svelte-logo</title><path d="M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157" style="fill:#ff3e00"/><path d="M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287" style="fill:#fff"/></svg>`
		},
		{
			name: 'Express',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" stroke="#fff" fill="#fff" width="120" height="60"><path d="M40 41.753V18.708h1.25v3.625a4.74 4.74 0 0 0 .408-.511c1.044-2.166 3.246-3.533 5.65-3.506 2.85-.085 5.166.97 6.527 3.506a11.27 11.27 0 0 1 .272 10.331c-1.268 2.842-4.4 4.255-7.753 3.736a6.27 6.27 0 0 1-5.004-3.302v9.165zm1.25-14.893l.28 2.706c.494 3.08 2.315 4.9 5.174 5.242a5.88 5.88 0 0 0 6.459-3.736c1.112-2.65 1.03-5.65-.22-8.238a5.76 5.76 0 0 0-6.068-3.353 5.61 5.61 0 0 0-5.012 4.144 28.62 28.62 0 0 0-.613 3.234zm39.498 3.132a6.74 6.74 0 0 1-6.587 5.957c-5.242.264-7.702-3.217-8.093-7.234a11.59 11.59 0 0 1 1.021-6.383 7.12 7.12 0 0 1 7.412-3.974 6.81 6.81 0 0 1 6.042 5.183 34.97 34.97 0 0 1 .587 3.83H67.363c-.255 3.642 1.702 6.57 4.476 7.276 3.455.85 6.408-.647 7.48-3.932.238-.843.672-.962 1.438-.723zm-13.395-3.787h12.314c-.077-3.88-2.493-6.7-5.77-6.732-3.7-.06-6.383 2.647-6.544 6.732zm15.94 3.872H84.5a4.84 4.84 0 0 0 2.842 4.17 7.43 7.43 0 0 0 6.451-.17 2.9 2.9 0 0 0 1.702-2.851 2.63 2.63 0 0 0-1.77-2.63c-1.328-.494-2.74-.766-4.093-1.2a30 30 0 0 1-4.119-1.506c-2.18-1.064-2.315-5.208.153-6.52a8.69 8.69 0 0 1 8.306-.128c1.594.88 2.475 2.657 2.213 4.46H95.15c0-.05-.094-.094-.094-.145-.128-3.3-2.902-4.332-5.88-4.042-.9.1-1.753.372-2.553.774a2.55 2.55 0 0 0-1.48 2.553 2.55 2.55 0 0 0 1.702 2.4c1.3.477 2.68.783 4.025 1.157l3.25.85a3.84 3.84 0 0 1 2.638 3.464c.26 1.745-.63 3.46-2.204 4.255-2.842 1.608-7.523 1.183-9.608-.85-1.067-1.073-1.662-2.53-1.65-4.042zm28.78-6.374h-1.132c0-.153-.06-.3-.077-.417a3.7 3.7 0 0 0-3.013-3.557 7.43 7.43 0 0 0-4.774.23 2.9 2.9 0 0 0-2.102 2.766 2.67 2.67 0 0 0 2.042 2.689l5.174 1.328a14.39 14.39 0 0 1 1.65.502c1.65.6 2.77 2.132 2.82 3.883a4.25 4.25 0 0 1-2.6 4.04 9.47 9.47 0 0 1-7.659.077 5.31 5.31 0 0 1-3.2-5.157h1.106c.416 2.005 1.793 3.675 3.682 4.465s4.046.596 5.764-.516a3.04 3.04 0 0 0 1.634-2.842 2.63 2.63 0 0 0-1.796-2.613c-1.328-.494-2.74-.757-4.093-1.2a30.15 30.15 0 0 1-4.144-1.489c-2.128-1.047-2.298-5.157.128-6.468a8.57 8.57 0 0 1 8.442-.094 4.45 4.45 0 0 1 2.136 4.366zm-74.13 11.83a1.95 1.95 0 0 1-2.417-.919l-4.4-6.085-.638-.85-5.106 6.944a1.87 1.87 0 0 1-2.298.902l6.578-8.825-6.12-7.974c.908-.328 1.92.028 2.425.85l4.56 6.16 4.587-6.136a1.83 1.83 0 0 1 2.281-.851L35.02 21.9l-3.217 4.187a.85.85 0 0 0 0 1.268l6.127 8.178zm27.93-16.892v1.2a6.17 6.17 0 0 0-6.57 6.374q0 4.204 0 8.408v.953h-1.217v-16.86h1.2v3.455c1.472-2.52 3.744-3.455 6.595-3.523zM7.333 26.59l.536-2.647c1.472-5.234 7.472-7.412 11.6-4.17 2.417 1.898 3.02 4.587 2.902 7.617H8.754c-.22 5.412 3.685 8.68 8.68 7.012 1.646-.6 2.885-1.968 3.293-3.668.264-.85.7-.996 1.498-.75a6.91 6.91 0 0 1-3.302 5.047 8 8 0 0 1-9.319-1.191c-1.216-1.367-1.95-3.095-2.093-4.92 0-.3-.1-.58-.17-.85q-.01-.757-.01-1.48zm1.438-.366h12.314c-.077-3.923-2.553-6.706-5.855-6.732-3.676-.05-6.306 2.672-6.468 6.715z"/></svg>`
		},
		{
			name: 'Git',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M31.396 14.575L17.425.604a2.06 2.06 0 0 0-2.914 0l-2.9 2.9 3.68 3.68c.856-.3 1.836-.095 2.518.587a2.45 2.45 0 0 1 .581 2.533l3.547 3.547c.858-.296 1.848-.105 2.533.582a2.45 2.45 0 1 1-3.469 3.468c-.72-.72-.898-1.78-.534-2.667l-3.308-3.308v8.705a2.5 2.5 0 0 1 .65.464 2.45 2.45 0 1 1-3.468 3.468 2.45 2.45 0 0 1 0-3.468c.237-.236.5-.415.803-.535v-8.786c-.292-.12-.566-.297-.803-.535a2.45 2.45 0 0 1-.528-2.681l-3.63-3.628-9.58 9.57a2.06 2.06 0 0 0 0 2.915l13.972 13.97a2.06 2.06 0 0 0 2.914 0L31.396 17.5a2.06 2.06 0 0 0 0-2.915" fill="#f03c2e"/></svg>`
		}
	];

	interface Skill {
		name: string;
		icon: string;
	}

	let selectedGreeting: string = '';
	let heroContainer: HTMLElement;
	let innerWidth: number = 0;
	let showSkills: boolean = false;
	let showGame: boolean = false;
	let isPlaying: boolean = false;

	function setClass(tag: string) {
		switch (tag.toLowerCase()) {
			case 'svelte':
				return 'bg-red-500 text-white';
				break;
			case 'tailwindcss':
				return 'bg-blue-800 text-white';
			case 'javascript':
				return 'bg-yellow-500 text-black';
			case 'vue':
				return 'bg-green-500 text-black';
			case 'spotify':
				return 'bg-green-500 text-black';
			default:
				return 'bg-gray-500 text-white';
		}
	}

	const animationDuration: number = 800;
	const greetings: Array<string> = [
		'hello world',
		`console.log('hey there')`,
		`hey I'm user[0]`,
		`looking for projects?`,
		`mono is a nice font`,
		`I like svelte`,
		`baNaNa`,
		`clever programmer joke`,
		`coffees.push(Infinity)`,
		`it's not a bug, it's a feature`,
		`copilot is a nice name -- Github copilot 2022`,
		`🇬🇧 programmers be like "git init"`,
		`git stash -m "will definitely remember to do this later"`,
		`ctrl/cmd + z to safety`,
		`stackoverflow who?`,
		`nandos?`,
		`github copilot wrote this`,
		`a new js framework probably just dropped`,
		`// we don't know why but if you remove this line everything breaks`,
		`edgy? border-radius: 0px;`,
		`recursion recursion recursion re`,
		`who likes semicolons, honestly`
	];

	if (browser) {
		getRepos();
		getArticles();
	}

	let repos: Array<Repo> = [];
	let repoError: boolean = false;

	interface Repo {
		name: string;
		description: string;
		html_url: string;
		homepage: string;
		topics: Array<string>;
	}

	async function getRepos() {
		try {
			const res = await fetch('/api/repos');
			repos = await res.json();
		} catch (error) {
			console.error(error);
			repoError = true;
		}
	}

	interface Article {
		title: string;
		comments_count: number;
		tag_list: Array<string>;
		url: string;
		social_image: string;
		description: string;
		positive_reactions_count: number;
		reading_time_minutes: number;
	}

	let articles: Array<Article> = [];
	let articleError: boolean = false;

	async function getArticles() {
		try {
			const res = await fetch(`https://dev.to/api/articles?username=alextana`);
			articles = await res.json();
		} catch (error) {
			console.error(error);
			articleError = true;
		}
	}

	function setGreeting() {
		selectedGreeting = greetings[Math.floor(Math.random() * greetings.length)];
	}

	function setPlayingMode(type: string) {
		switch (type) {
			case 'playing':
				isPlaying = true;
				break;
			case 'not_playing':
				isPlaying = false;
				break;
		}
	}

	onMount(() => {
		setGreeting();
		showGame = true;
		showSkills = true;

		setInterval(() => {
			const pre = selectedGreeting;
			selectedGreeting = '';
			setTimeout(() => {
				setGreeting();
				if (selectedGreeting === pre) {
					setGreeting();
				}
			}, animationDuration);
		}, 3000);
	});
</script>

<div
	class="relative overflow-hidden text-center font-light mx-auto w-full hero-section"
	bind:this={heroContainer}
>
	<div class="skills overflow-hidden">
		{#if heroContainer}
			{#if showSkills}
				{#each skills as skill, i}
					{@const top = Math.random() * heroContainer.clientHeight}
					{@const left = Math.random() * heroContainer.clientWidth}
					{@const zIndex = Math.random() * 30}
					{@const animationDuration = Math.floor(Math.random() * (95 - 3) + 25)}
					{@const opacity = Math.random() * 0.3}
					<div
						class="floating-skill  px-2 py-6 font-mono absolute text-md lg:text-2xl"
						style="animation-duration: {animationDuration}s; top: {top}px; left: {left}px; z-index: {zIndex}; opacity: {opacity};"
					>
						{@html skill.icon}
					</div>
				{/each}
			{/if}
		{/if}
	</div>
	<div
		class="intro-text absolute w-full top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2"
	>
		<div class="intro">
			<h1 class="text-8xl tracking-tighter">alex tana</h1>
			<div class="sub-text text-2xl font-bold tracking-tighter mb-4">I make things for the web</div>
		</div>
		<div class="greeting-text mx-auto overflow-hidden px-4 py-1 rounded-md w-full transition-all">
			{#if selectedGreeting !== ''}
				<div
					in:fly={{ duration: animationDuration, easing: quintInOut, y: -200 }}
					out:fly={{ duration: animationDuration, easing: quintInOut, y: 200 }}
					class="intro-container"
				>
					<div class="hero text-lg font-light tracking-tighter font-mono">
						{selectedGreeting}
					</div>
				</div>
			{/if}
		</div>
		{#if showGame}
			<div
				transition:scale={{ duration: 300, delay: 1000 }}
				class="game-button w-full flex justify-center mt-4"
			>
				<Button on:click={() => setPlayingMode('playing')} type="cta">Bored?</Button>
			</div>
		{/if}
	</div>
</div>

<div class="container py-16 lg:py-24 mx-auto">
	<div class="repos flex-grow w-full mb-8">
		<div class="tracking-tighter font-light text-4xl mb-6">
			My latest
			<span class="github-icon mx-2 inline-block">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="fill-current"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					><path
						d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
					/></svg
				>
			</span> projects:
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-max gap-3 justify-start items-start"
		>
			{#if repos.length}
				{#each repos || [] as repo, i}
					{#if repo.name !== 'alextana'}
						<div class="card-transition relative">
							{#if repo?.topics?.includes('featured')}
								<div
									class="featured absolute left-1/2 transform -translate-x-1/2 -top-2 rounded-full font-bold text-neutral-800 text-xs uppercase w-max shadow-2xl bg-yellow-400 px-2 py-1"
								>
									📌 Featured
								</div>
							{/if}
							<Card>
								<div class="repo-info mb-2 text-gray-300">
									<div class="repo-name text-3xl font-light tracking-tighter mb-1">
										{repo?.name?.replace('-', ' ')}
									</div>
									{#if repo?.description}
										<div class="repo-description text-md mb-2">
											{repo?.description}
										</div>
									{/if}
								</div>

								<div class="repos-tags mb-4">
									{#if repo.topics}
										<div class="tag-list flex gap-1 flex-wrap mt-4">
											{#each repo.topics as tag}
												{#if tag.toLowerCase() !== 'featured'}
													<div
														class="
												{setClass(tag)} tag px-2 py-1 text-white rounded-md smaller-txt font-semibold uppercase
											"
													>
														{tag}
													</div>
												{/if}
											{/each}
										</div>
									{/if}
								</div>

								<div class="links flex gap-1">
									{#if repo.homepage}
										<Button type="cta-small" link={repo?.homepage}>Website</Button>
									{/if}
									{#if repo.html_url}
										<Button type="cta-small-secondary" link={repo?.html_url}>Github</Button>
									{/if}
								</div>
							</Card>
						</div>
					{/if}
				{/each}
			{:else if repoError}
				Could not load repositories
			{:else}
				<CardSkeleton amount={8} />
			{/if}
		</div>
	</div>
	<div class="articles w-full text-gray-300">
		<div class="articles-title">
			<div class=" font-light text-4xl tracking-tighter mb-6 text-white">
				My latest
				<span class="mx-2 inline-block bg-white rounded-xl">
					<svg viewBox="0 32 447.99999999999994 448" xmlns="http://www.w3.org/2000/svg" class="w-8"
						><path
							d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
						/></svg
					>
				</span>
				articles:
			</div>
		</div>
		<div class="articles-container flex-grow grid grid-cols-1 md:grid-cols-2 gap-3">
			{#if articles.length}
				{#each articles as article}
					<Card link={article.url} targetBlank>
						{#if article.social_image}
							<img class="rounded-3xl mb-4" src={article.social_image} alt={article.title} />
						{/if}
						{#if article.title}
							{article.title}
						{/if}
						<div class="article-interactions w-full flex justify-between">
							<div class="positive-interactions flex gap-1 items-center">
								<div class="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4 text-gray-400 hover:text-gray-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
										/>
									</svg>
								</div>
								<div class="count text-xs">
									{article.positive_reactions_count}
								</div>
							</div>
							<div class="reading-time">
								{#if article.reading_time_minutes}
									<span class="w-max text-align-right block mt-2 ml-auto text-xs text-gray-400"
										>{article.reading_time_minutes}min read</span
									>
								{/if}
							</div>
						</div>
						{#if article.tag_list.length}
							<div class="tag-list flex gap-1 flex-wrap mt-4">
								{#each article.tag_list as tag}
									<div
										class="
										{setClass(tag)} tag px-2 py-1 text-white rounded-md smaller-txt font-semibold uppercase
									"
									>
										{tag}
									</div>
								{/each}
							</div>
						{/if}
					</Card>
				{/each}
			{:else if articleError}
				Could not load articles
			{:else}
				<CardSkeleton amount={1} />
			{/if}
		</div>
	</div>
</div>

<div class="about-experience relative pink-gradient text-gray-300 py-32">
	<WorkExperience />
</div>

<div class="about-me relative text-white py-32">
	<AboutMe />
</div>

<div class="contact-me py-24 text-white">
	<Contact />
</div>

{#if isPlaying}
	<Game on:close={() => (isPlaying = false)} />
{/if}

<svelte:window bind:innerWidth />

<style>
	.hero-section {
		height: 100vh;
		background: #0f0c29; /* fallback for old browsers */
		background: -webkit-linear-gradient(
			to right,
			#24243e,
			#302b63,
			#0f0c29
		); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to right,
			#24243e,
			#302b63,
			#0f0c29
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}

	@-webkit-keyframes moveGradient {
		0% {
			background-position: 0% 23%;
		}
		50% {
			background-position: 100% 78%;
		}
		100% {
			background-position: 0% 23%;
		}
	}
	@keyframes moveGradient {
		0% {
			background-position: 0% 23%;
		}
		50% {
			background-position: 100% 78%;
		}
		100% {
			background-position: 0% 23%;
		}
	}
	.blue-gradient {
		background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
	}

	.floating-skill {
		animation-name: float;
		animation-iteration-count: infinite;
	}

	.intro-text {
		z-index: 2;
	}

	.smaller-txt {
		font-size: 0.6rem;
	}

	@keyframes float {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(100px);
		}
		100% {
			transform: translateY(0);
		}
	}

	.blob {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		z-index: 20;
		opacity: 0.9;
	}

	.intro-text {
		z-index: 40;
	}
</style>
