<script lang="ts">
	const { data } = $props();

	const { exercises } = $derived(data);
</script>

<nav>
	<ul>
		{#each exercises as { slug, name } (slug)}
			<a href="/exercises/{slug}">{name ?? slug}</a>
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
