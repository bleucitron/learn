<script lang="ts">
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
	{#each ids as id (id)}
		<!-- TODO: provide with the outsideClick attachment that would execute `toggle` with the `id` -->
		<Pokemon {id} hidden={hidden.includes(id)}></Pokemon>
	{/each}
</div>
