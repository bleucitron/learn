<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';
	import { getPlayerContext } from './context';

	type Props = {
		id: number;
	};

	const isPlayer = getPlayerContext();

	const { id }: Props = $props();

	const { name, sprites } = $derived(getPokemon(id));
	const side = $derived(isPlayer ? 'back' : 'front');
	const src = $derived(sprites[`${side}_default`]);
</script>

<img {src} alt={name} />
