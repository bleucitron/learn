<script lang="ts">
	import Card from './Card.svelte';

	type Props = {
		ids: number[];
	};

	const { ids }: Props = $props();
</script>

<ul class="team">
	{#each ids as id (id)}
		<li>
			<Card {id} />
		</li>
	{/each}
</ul>

<style>
	.team {
		display: flex;
		gap: 0.5rem;
		margin: auto;
	}
</style>
