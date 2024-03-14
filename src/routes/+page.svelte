<script lang="ts">
  import { qr } from '@svelte-put/qr/img'

	import * as Base from '$lib/components/base'
	export let data

  export let url = "https://qrixie.com"
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="QRixie - The free QR generator" />
</svelte:head>

			<!-- Section - Intro -->
			<section class="flex flex-wrap items-center content-center h-screen snap-start">
        <div class='w-full lg:w-1/2'>
          <p class="w-full text-primary mb-4 tracking-wide font-fira">QR Code Generator</p>
          <h1 class="text-offwhite text-4xl md:text-6xl font-bold tracking-wider mb-4">QRixie</h1>
          <h2 class="text-fadedwhite text-4xl md:text-6xl font-bold tracking-wider">Forever Free</h2>
          <p class="mt-4 tracking-wide">
          QRixie is a free QR code generator that allows you to create QR codes for URLs, text, phone numbers, SMS, email addresses, and more. 
          You can also customize the QR code with colors, add a logo, and download the QR code in PNG, SVG, or EPS format. 
          QRixie is free, easy to use, and does not require any registration or sign-up. 
          Create your QR code now and download it for free.
          </p>
          <input bind:value={url} type='text' class='bg-[#8892AF] text-black mt-4 px-2 py-1 w-full rounded' placeholder="Enter a URL">
        </div>
        <div class='flex justify-center w-full lg:w-1/2 mt-8'>
            <img
              use:qr={{
                data: url,
                shape: 'circle',
                anchorInnerFill: 'black',
                anchorOuterFill: 'black',
                moduleFill: 'black',
              }}
              class='bg-white max-h-[300px] max-w-[300px]'
            />
        </div>
			</section>
			<!-- End Section - Intro -->

