<script lang="ts">
	const { data } = $props();

	const { tags } = $derived(data);
</script>

<nav>
	<ul>
		{#each tags as { name, nb } (name)}
			<a href="/tags/{name}">
				<span>{name}</span>

				<span>{nb} exercises</span>
			</a>
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

	a {
		padding: 1rem;
		/* text-decoration: none; */

		span:first-child {
			font-size: 1.5rem;
			font-family: var(--svelte-font);
		}
	}
</style>
