<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';

	type Props = { id: number; maxHealth: number; health: number };

	const { id, health, maxHealth }: Props = $props();
	const { name, sprites } = $derived(getPokemon(id));
</script>

<div class="Pokemon">
	<img src={sprites.front_default} alt={name} />
	<p>{name}</p>
	<p>{health}/{maxHealth}</p>
</div>

<style lang="scss">
	.Pokemon {
		display: flex;
		flex-flow: column;
		align-items: center;
		gap: 0.5rem;
	}
</style>
