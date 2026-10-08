<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';
	import { getRandomNumber } from '#lib/utils/getRandomNumber.js';

	function createTeam(starterId: number) {
		const MAX = 6;

		let ids = $state<number[]>([starterId]);

		const pokemons = $derived(ids.map(getPokemon));
		const isFull = $derived(ids.length === MAX);

		function add() {
			const id = getRandomNumber(151);

			ids.push(id);
		}

		return {
			get pokemons() {
				return pokemons;
			},
			get isFull() {
				return isFull;
			},
			add
		};
	}
	const mine = createTeam(25);
	const yours = createTeam(4);
</script>

<div class="pokemons yours">
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each yours.pokemons as { name, sprites }}
		<img src={sprites.front_default} alt={name} />
	{/each}

	<button onclick={yours.add} disabled={yours.isFull}>Add</button>
</div>

<div class="pokemons mine">
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each mine.pokemons as { name, sprites }}
		<img src={sprites.back_default} alt={name} />
	{/each}

	<button onclick={mine.add} disabled={mine.isFull}>Add</button>
</div>

<style>
	.pokemons {
		display: flex;
	}

	.yours {
		position: relative;
		left: 96px;
	}

	button {
		width: 96px;
	}
</style>
