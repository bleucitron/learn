<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';

	// TODO: make this component able to receive props
	const id = 25;
	const { name, sprites } = getPokemon(id);

	const health = 50;
	const maxHealth = 100;
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
		flex: 1 0;
	}
</style>
