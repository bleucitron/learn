<script lang="ts">
	import favicon from '$lib/assets/pika.webp';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="exercise">
	{@render children()}
</div>

<style>
	.exercise {
		display: flex;
		flex-flow: column;
		align-items: center;
	}
</style>
