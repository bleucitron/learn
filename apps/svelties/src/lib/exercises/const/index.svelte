<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';

	const starters = [1, 4, 7];
</script>

<div class="lab">
	<p>Choose your first Pokemon</p>
	<ul>
		{#each starters as id (id)}
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
