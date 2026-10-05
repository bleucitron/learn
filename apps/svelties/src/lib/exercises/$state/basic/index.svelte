<script lang="ts">
	import { getPokemon } from '$lib/pokemons';

	const pokemon = getPokemon(25);

	const maxHealth = 100;
	const health = maxHealth;
</script>

<img src={pokemon.sprites.front_default} alt={pokemon.name} class={{ dead: health <= 0 }} />
<div>{health} / {maxHealth}</div>

<button>Attack!</button>

<style>
	.dead {
		filter: grayscale(100%);
	}
</style>
