<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';
	import { getRandomNumber } from '#lib/utils/getRandomNumber.js';

	const pokemon = getPokemon(25);

	const maxHealth = 100;
	let health = $state(maxHealth);

	const dead = $derived(health <= 0);

	// TODO: add an $effect to trigger an alert when your Pokemon dies

	function attack() {
		const damage = getRandomNumber(10, 30);
		health = Math.max(0, health - damage);
	}
</script>

<img src={pokemon.sprites.front_default} alt={pokemon.name} class={{ dead }} />
<div>{health} / {maxHealth}</div>

<button onclick={attack} disabled={dead}>Attack!</button>

<style>
	.dead {
		filter: grayscale(100%);
	}
</style>
