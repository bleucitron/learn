<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';
	import { getRandomNumber } from '#lib/utils/getRandomNumber.js';

	const MAX = 6;

	let ids = $state<number[]>([25]);

	const pokemons = $derived(ids.map(getPokemon));
	const teamSize = $derived(ids.length);
	const full = $derived(teamSize === MAX);

	function add() {
		const id = getRandomNumber(151);

		ids.push(id);
	}
</script>

<div class="pokemons">
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each pokemons as { name, sprites }}
		<img src={sprites.front_default} alt={name} />
	{/each}

	<button onclick={add} disabled={full}>Add</button>
</div>

<style>
	.pokemons {
		display: flex;
	}

	button {
		width: 96px;
	}
</style>
