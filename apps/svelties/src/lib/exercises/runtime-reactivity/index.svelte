<svelte:options runes={false} />

<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';

	const MAX_HP = 100;
	const id = 25;

	const { name, sprites } = getPokemon(id);

	let hp = 0;

	function heal() {
		hp = Math.min(hp + 10, MAX_HP);
	}

	function log() {
		console.log(`hp is now ${hp}/${MAX_HP}`);
	}

	// TODO: use rune mode to make this effect reactive
	$: {
		log();
	}
</script>

<div class="Pokemon">
	<img src={sprites.front_default} alt={name} />
	<p>{hp}/{MAX_HP}</p>
	<button on:click={heal}>Heal</button>
</div>

<style lang="scss">
	.Pokemon {
		display: flex;
		flex-flow: column;
		align-items: center;
		gap: 0.5rem;
		flex: 1 0;
	}

	button {
		color: black;
	}
</style>
