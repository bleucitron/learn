<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';

	type Props = {
		id: number;
		hidden?: boolean;
	};

	let { id, hidden = false, ...props }: Props = $props();

	const { name, sprites } = $derived(getPokemon(id));
	const side = $derived(hidden ? 'back' : 'front');

	const src = $derived(sprites[`${side}_default`]);
</script>

<button {...props}>
	<img {src} alt={name} />
</button>
