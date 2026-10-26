<script lang="ts">
	import { getPokemon } from '$lib/pokemons';

	const team = [15, 45, 75, 12, 105];
</script>

<div class="lab">
	<ul>
		{#each team as id (id)}
			<!-- TODO: use {let ...} to define a local state representing the current Pokemon exp -->
			{const { sprites, name } = getPokemon(id)}
			<li>
				<button>
					<img src={sprites.front_default} alt={name} />
					<p>{name}</p>
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		display: flex;
		gap: 3rem;
	}

	li {
		display: flex;
		flex-flow: column;
		align-items: center;
	}

	p {
		text-align: center;
	}
</style>
