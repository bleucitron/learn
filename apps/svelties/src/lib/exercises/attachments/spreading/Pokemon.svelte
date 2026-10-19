<script lang="ts">
	import { getPokemon } from '$lib/pokemons';

	type Props = {
		id: number;
		hidden?: boolean;
	};

	let { id, hidden = false }: Props = $props();

	const { name, sprites } = $derived(getPokemon(id));
	const side = $derived(hidden ? 'back' : 'front');

	const src = $derived(sprites[`${side}_default`]);
</script>

<!-- TODO: apply the provided attachment -->
<button>
	<img {src} alt={name} />
</button>
