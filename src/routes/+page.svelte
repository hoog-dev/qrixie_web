<script lang="ts">
	import { qr } from '@svelte-put/qr/img'
	import * as Base from '$lib/components/base'
	export let data
	let link = 'https://qrixie.com'
	let ssid = ''
	let password = ''
	let activeType = 'link'

  let qrData = 'https://qrixie.com'
  let qrShape = 'circle'
  let qrAnchorInnerFill = '#000000'
  let qrAnchorOuterFill = '#000000'
  let qrModuleFill = '#000000'

  let showDesignSettings = false

	setInterval(generateURL, 1000)

	function generateURL() {
    console.log('generate')
		if (activeType == 'link') {
			qrData = link
		} else if (activeType == 'wifi') {
			qrData = `WIFI:T:WPA;S:${ssid};P:${password};;`
		}
	}

	function selectType(type: string) {
		activeType = type
	}

  function toggleDesignSettings() {
      showDesignSettings = !showDesignSettings
      console.log(showDesignSettings)
  }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="QRixie - The free QR generator" />
</svelte:head>

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
    <div>
      <button on:click={() => toggleDesignSettings()} class='mt-2 underline'>Design settings</button>
      {#if showDesignSettings}
      <div class='bg-[#8892AF] text-black mt-2 p-2 rounded'>
        <div>
          <label for='shape'>Shape</label>
          <select bind:value={qrShape}>
            <option value='circle'>Circle</option>
            <option value='square'>Square</option>
          </select>
        </div>
        <div>
          <label for='anchorInnerFill'>Anchor Inner Fill</label>
          <input type='color' id='anchorInnerFill' name='anchorInnerFill' bind:value={qrAnchorInnerFill}>
        </div>
        <div>
          <label for='anchorOuterFill'>Anchor Outer Fill</label>
          <input type='color' id='anchorOuterFill' name='anchorOuterFill' bind:value={qrAnchorOuterFill}>
        </div>
        <div>
          <label for='moduleFill'>Module Fill</label>
          <input type='color' id='moduleFill' name='moduleFill' bind:value={qr.moduleFill}>
        </div>
      </div>
      {/if} 
    </div>
  </div>
  <div class="flex justify-center w-full lg:w-1/2 mt-8">
    <img
      use:qr={{data: qrData, shape: qrShape, anchorInnerFill: qrAnchorInnerFill, anchorOuterFill: qrAnchorOuterFill }}
      class="bg-white w-full max-h-[400px] max-w-[400px]"
    />
  </div>

</section>
