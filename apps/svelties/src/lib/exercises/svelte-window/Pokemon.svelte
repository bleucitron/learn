<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';
	import { getRandomNumber } from '#lib/utils/getRandomNumber.js';

	const MARGIN = 96;

	type Props = {
		id: number;
	};

	const { id }: Props = $props();

	const { name, sprites } = $derived(getPokemon(id));
	const src = $derived(sprites.front_default);

	let innerHeight = $state(0);
	let innerWidth = $state(0);

	const left = $derived(getRandomNumber(0, innerWidth - MARGIN));
	const top = $derived(getRandomNumber(0, innerHeight - MARGIN));
</script>

<svelte:window bind:innerHeight bind:innerWidth />

{#if innerHeight && innerWidth}
	<div class="Pokemon" style:left="{left}px" style:top="{top}px">
		<img {src} alt={name} />
	</div>
{/if}

<style>
	.Pokemon {
		position: absolute;
	}
</style>
