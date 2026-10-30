<script lang="ts">
	import Pokemon from './Pokemon.svelte';
</script>

<div>
	<Pokemon id={25} health={50} maxHealth={100} />
	<Pokemon id={80} health={12} maxHealth={250} />
</div>

<style lang="scss">
	div {
		display: flex;
		place-content: center;
		gap: 5rem;
	}
</style>
