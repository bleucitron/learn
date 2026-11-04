<script lang="ts">
	const { data } = $props();

	const { content } = $derived(data);
</script>

<nav>
	{#each content as { section, paths } (section)}
		<section>
			<h2>{section}</h2>
			<ul>
				{#each paths as path (path)}
					<li>
						<a href="/exercises/{path}">{path}</a>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</nav>

<style lang="scss">
	section {
		display: flex;
		align-items: center;
		gap: 1rem;

		margin-block: 1rem;

		& > * {
			flex: 1 0;
		}
	}

	nav {
		width: 100%;
	}

	h2 {
		flex: 2 0;
		margin: 0;
		font-size: 2.5rem;
		text-align: right;
	}

	ul {
		flex-shrink: 1;
	}
</style>
