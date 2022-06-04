<script lang="ts">
	import * as yup from 'yup';
	import { Form, Message } from 'svelte-yup';
	import TextArea from '$lib/components/ui/forms/TextArea.svelte';
	let schema = yup.object().shape({
		textMessage: yup.string().required().max(3000).label('Text Message')
	});

	let fields: Fields = { textMessage: '' };

	interface Fields {
		textMessage: string;
	}

	let submitted: boolean = false;
	let mailLink: any;
	let isValid: boolean;
	function formSubmit() {
		submitted = true;
		isValid = schema.isValidSync(fields);
		if (isValid) {
			mailLink.click();
		}
	}
</script>

<div class="container narrow mx-auto text-center">
	<div class="text-contact">
		<h2 class="text-6xl font-extrabold tracking-tighter mb-8">
			drop me a line <span class="wave">👋</span>
		</h2>
	</div>
	<div class="info-container flex items-center flex-wrap lg:flex-nowrap gap-3">
		<div class="forms w-full md:w-1/2 mx-auto">
			<Form class="form" {schema} {fields} submitHandler={formSubmit} {submitted}>
				<div class="form-group">
					<TextArea
						bind:value={fields.textMessage}
						placeholder="Hello, let's build something together"
					/>
					<Message name="textMessage" />
				</div>
				<button
					class="mt-4 text-white bg-transparent border-2 border-white hover:bg-white font-bold uppercase text-md py-2 px-8 hover:text-black rounded-full"
					type="submit">Send</button
				>
			</Form>
		</div>
	</div>

	<a
		bind:this={mailLink}
		href="mailto:hello@alextana.co.uk?body={fields.textMessage}&subject=Portfolio%20Enquiry"
		class="hidden">Mail</a
	>
</div>

<style>
	.narrow {
		max-width: 1100px;
	}

	.wave {
		animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
		animation-duration: 2.5s; /* Change to speed up or slow down */
		animation-iteration-count: infinite; /* Never stop waving :) */
		transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
		display: inline-block;
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		} /* The following five values can be played with to make the waving more or less extreme */
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		} /* Reset for the last half to pause */
		100% {
			transform: rotate(0deg);
		}
	}
</style>
