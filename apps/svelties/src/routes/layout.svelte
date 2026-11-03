<script lang="ts">
	import '#lib/assets/global.css';
	import favicon from '#lib/assets/pika.webp';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style lang="scss"></style>
