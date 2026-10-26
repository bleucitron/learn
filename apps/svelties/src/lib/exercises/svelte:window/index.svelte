<script lang="ts">
	import Pokemon from './Pokemon.svelte';

	const ferals = [4, 12, 50, 140, 45, 88];
</script>

{#each ferals as id (id)}
	<Pokemon {id} />
{/each}
