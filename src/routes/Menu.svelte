<script lang="ts">
import { page } from '$app/stores';
import { goto } from '$app/navigation';

    const items = [

    ]

    let showMobileMenu = false

    function scrollIntoView({ target }) {
        if($page.route.id != '/') {
            goto(`/${target.getAttribute('href')}`)
        }
        showMobileMenu = false
        const el = document.querySelector(target.getAttribute('href'))
        if (!el) {
            return
        }
        el.scrollIntoView({
            behavior: 'smooth'
        })
        showMobileMenu = false
    }

    function toggleMobileMenu() {
        showMobileMenu = !showMobileMenu
    }

</script>

<div class="hidden md:flex items-center justify-between sticky top-0 py-4">
    <div class="flex items-center justify-center bg-darkblue text-primary px-4 h-12 border-2 border-primary shadow-logo">
        <a href="/">
            QRixie
        </a>
    </div>
    <menu class="hidden md:flex gap-4 font-fira text-sm">
        {#each items as item}
            <li>
                <a href="{item.link}" on:click|preventDefault={scrollIntoView} class="hover:underline underline-offset-8 decoration-2 decoration-primary"><span class="text-primary">{item.prefix}</span> {item.label}</a>
            </li>
        {/each}
    </menu>
</div>

<div class="flex flex-wrap md:hidden items-center justify-between sticky top-0">
    <div class="flex items-center justify-center bg-darkblue text-primary h-12 px-4 border border-primary shadow-logo">
        <a href="/">
            QRixie
        </a>
    </div>
    <div class="flex items-center" on:click={toggleMobileMenu}>
        <svg width="26" height="26" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#53D2B8" d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"/>
        </svg>
    </div>
    
    <div class:hidden={!showMobileMenu} class:flex={showMobileMenu} class="flex flex-wrap content-start fixed top-0 left-0 w-full h-full bg-bglight py-4 px-4">
        <div class="flex items-center justify-between w-full">
            <a href="/" class="flex items-center justify-center h-12 px-4 mb-8 text-primary border border-primary shadow-logo">
                hoog.dev
            </a>
            <div on:click={toggleMobileMenu} class="flex items-center">
                <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#53D2B8" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/>
                </svg>
            </div>
        </div>
        <menu class="flex gap-8 flex-wrap w-full mt-12">
            {#each items as item}
                <li class="w-full text-xl text-center">
                    <a href="{item.link}" on:click|preventDefault={scrollIntoView} class="hover:underline underline-offset-8 decoration-2 decoration-primary"><span class="text-primary">{item.prefix}</span> {item.label}</a>
                </li>
            {/each}
        </menu>
    </div>

</div>
