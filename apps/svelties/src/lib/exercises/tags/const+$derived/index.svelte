<script lang="ts">
	import { getPokemon } from '$lib/pokemons';

	const team = [15, 45, 75, 12, 105];
</script>

<div class="lab">
	<ul>
		{#each team as id (id)}
			{let exp = $state(0)}
			<!-- TODO: add the level (exp/10, truncated) with a `$derived` -->
			<li>
				<button
					onclick={() => {
						exp++;
					}}
				>
					<img src={getPokemon(id).sprites.front_default} alt={getPokemon(id).name} />
					<p>{getPokemon(id).name}</p>
					<p>{exp} xp</p>
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
