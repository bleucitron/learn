<script lang="ts">
	import { outsideClick } from './outsideClick';
	import Pokemon from './Pokemon.svelte';

	const ids = [4, 16, 61, 74, 8, 123, 45, 99];
	let hidden: number[] = $state([]);

	function toggle(id: number) {
		if (hidden.includes(id)) {
			hidden = hidden.filter((i) => i !== id);
		} else {
			hidden.push(id);
		}
	}
</script>

<div>
	{#each ids as id, position (id)}
		<Pokemon
			{id}
			hidden={hidden.includes(id)}
			{@attach position % 2 === 0 ? outsideClick(() => toggle(id)) : null}
		></Pokemon>
	{/each}
</div>
