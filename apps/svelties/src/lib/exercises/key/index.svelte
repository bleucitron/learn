<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';
	import { getRandomNumber } from '#lib/utils/getRandomNumber.js';
	import { blur } from 'svelte/transition';

	let id = $state<number>(25);
	const { name, sprites } = $derived(getPokemon(id));

	function shuffle() {
		id = getRandomNumber(1, 151);
	}
</script>

<!-- TODO: use {#key} to trigger the transition on each id change -->
<img src={sprites.front_default} alt={name} in:blur />
<button onclick={shuffle}> Shuffle </button>

<style lang="scss">
	img {
		width: 96px;
		height: 96px;
	}
</style>
