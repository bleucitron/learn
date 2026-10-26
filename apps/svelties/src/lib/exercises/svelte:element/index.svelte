<script lang="ts">
	import { getAllPokemons } from '#lib/pokemons/index.js';
	import Button from './Button.svelte';
	import Card from './Card.svelte';

	let id = $state(25);
</script>

<Card {id} />

<div>
	<Button
		label="Previous"
		onclick={() => {
			id = (id + 1) % getAllPokemons().length;
		}}
	/>
	<Button
		label="Next"
		onclick={() => {
			id = (id + 1) % getAllPokemons().length;
		}}
	/>
</div>
