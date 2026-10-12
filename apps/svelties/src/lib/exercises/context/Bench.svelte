<script lang="ts">
	import Pokemon from './Pokemon.svelte';

	type Props = {
		ids: number[];
	};

	const { ids }: Props = $props();
</script>

<div class="bench">
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each ids as id}
		<Pokemon {id} />
	{/each}
</div>

<style>
	.bench {
		display: flex;
	}
</style>
