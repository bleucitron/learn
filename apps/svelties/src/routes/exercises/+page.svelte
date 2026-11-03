<script lang="ts">
	const { data } = $props();

	const { exercises } = $derived(data);
</script>

<nav>
	<ul>
		{#each exercises as { path } (path)}
			<a href="/exercises/{path}">{path}</a>
		{/each}
	</ul>
</nav>

<style lang="scss">
	ul {
		display: flex;
		gap: 0.5rem;
		justify-content: space-between;
		flex-wrap: wrap;
	}
</style>
