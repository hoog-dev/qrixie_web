<script lang="ts">
	import Menu from './Menu.svelte';
	import './styles.css';
	import "../app.css";
</script>

<div class="app">
	<div class="h-screen snap-y snap-mandatory overflow-scroll lg:px-20 p-4">
		<Menu></Menu>
		<main>
			<slot />
		</main>
	</div>
</div>
