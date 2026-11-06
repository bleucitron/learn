<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getPokemon } from '#lib/pokemons/index.js';

	type Props = { id: number; health: Snippet<[number, number]> };

	const { id, health }: Props = $props();
	const { name, sprites } = $derived(getPokemon(id));

	const MAX_HP = 50;
	let hp = $state(Math.floor(MAX_HP / 10));

	function heal() {
		hp = Math.min(hp + 10, MAX_HP);
	}
</script>

<div class="Pokemon">
	<img src={sprites.front_default} alt={name} />
	{@render health(hp, MAX_HP)}
	<button onclick={heal}>Heal</button>
</div>

<style lang="scss">
	.Pokemon {
		display: flex;
		flex-flow: column;
		align-items: center;
		gap: 0.5rem;
		flex: 1 0;
	}
</style>
