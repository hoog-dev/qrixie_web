<script lang="ts">
	import { qr } from '@svelte-put/qr/img'
	import * as Base from '$lib/components/base'
	export let data
	let qr_url = ''
	let link = 'https://qrixie.com'
	let ssid = ''
	let password = ''
	let activeType = 'link'

	setInterval(generateURL, 1000)

	function generateURL() {
		if (activeType == 'link') {
			qr_url = link
		} else if (activeType == 'wifi') {
			qr_url = `WIFI:T:WPA;S:${ssid};P:${password};;`
		}
	}

	function selectType(type: string) {
		activeType = type
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="QRixie - The free QR generator" />
</svelte:head>

<!-- Section - Intro -->
<section class="flex flex-wrap items-center content-center mt-8 mb-4">
	<div class="w-full lg:w-1/2">
		<p class="w-full text-primary mb-4 tracking-wide font-fira">QR Code Generator</p>
		<h1 class="text-offwhite text-4xl md:text-6xl font-bold tracking-wider mb-4">QRixie</h1>
		<h2 class="text-fadedwhite text-4xl md:text-6xl font-bold tracking-wider">Forever Free</h2>
		<p class="mt-4 tracking-wide">
			QRixie is a free QR code generator that allows you to create QR codes for URLs, text, phone
			numbers, SMS, email addresses, and more. QRixie is free, easy to use, and does not require any
			registration or sign-up. Create your QR code now and download it for free.
		</p>
		<div class="mt-4">
			<div class="flex flex-wrap gap-2">
				<div
					on:click={() => selectType('link')}
					class="text-primary px-2 py-1 border border-primary rounded"
					class:bg-primary={activeType == 'link'}
					class:text-white={activeType == 'link'}
				>
					Link
				</div>
				<div
					on:click={() => selectType('wifi')}
					class="text-primary px-2 py-1 border border-primary rounded"
					class:bg-primary={activeType == 'wifi'}
					class:text-white={activeType == 'wifi'}
				>
					WiFi
				</div>
			</div>
			{#if activeType == 'link'}
				<div class="qr-type-link">
					<div class="qr-type-options">
						<input
							bind:value={link}
							type="text"
							class="bg-[#8892AF] text-black mt-4 px-2 py-1 w-full rounded outline-none placeholder:text-black"
							placeholder="Enter a URL"
						/>
					</div>
				</div>
			{/if}
			{#if activeType == 'wifi'}
				<div class="qr-type-link">
					<div class="qr-type-options">
						<input
							bind:value={ssid}
							type="text"
							class="bg-[#8892AF] text-black mt-4 px-2 py-1 w-full rounded outline-none placeholder:text-black"
							placeholder="SSID"
						/>
						<input
							bind:value={password}
							type="text"
							class="bg-[#8892AF] text-black mt-4 px-2 py-1 w-full rounded outline-none placeholder:text-black"
							placeholder="Password"
						/>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<div class="flex justify-center w-full lg:w-1/2 mt-8">
		<img
			use:qr={{
				data: qr_url,
				shape: 'circle',
				anchorInnerFill: 'black',
				anchorOuterFill: 'black',
				moduleFill: 'black'
			}}
			class="bg-white w-full max-h-[400px] max-w-[400px]"
		/>
	</div>
</section>
<!-- End Section - Intro -->
