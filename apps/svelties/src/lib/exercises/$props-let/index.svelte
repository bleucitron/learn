<script lang="ts">
	import Pokemon from './Pokemon.svelte';
</script>

<div>
	<Pokemon id={25} hp={15} />
</div>

<style lang="scss">
	div {
		display: flex;
		place-content: center;
		gap: 5rem;
	}
</style>
