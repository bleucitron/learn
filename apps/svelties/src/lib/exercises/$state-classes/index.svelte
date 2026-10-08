<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';
	import { getRandomNumber } from '#lib/utils/getRandomNumber.js';

	class Team {
		private MAX = 6;

		private ids = $state<number[]>([]);

		constructor(starterId: number) {
			this.ids = [starterId];
		}

		pokemons = $derived(this.ids.map(getPokemon));
		isFull = $derived(this.ids.length === this.MAX);

		add = () => {
			const id = getRandomNumber(151);

			this.ids.push(id);
		};
	}

	const mine = new Team(25);
	const yours = new Team(4);
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
