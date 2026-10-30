<script lang="ts">
	import Pokemon from './Pokemon.svelte';
</script>

<!-- TODO: instantiate different individuals with differents props -->
<div>
	<Pokemon />
</div>

<style lang="scss">
	div {
		display: flex;
		place-content: center;
		gap: 5rem;
	}
</style>
