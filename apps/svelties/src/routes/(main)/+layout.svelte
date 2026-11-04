<script lang="ts">
	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style lang="scss">
	main {
		flex: 1 0;

		display: grid;
		place-content: center;

		width: 100%;
		padding-inline: 3rem;
	}
</style>
