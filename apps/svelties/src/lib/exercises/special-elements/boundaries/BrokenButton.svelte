<script lang="ts">
	let n = $state(1);

	const f = $derived(n + 1);
</script>

<button
	onclick={() => {
		n = undefined;
	}}>More ({f})</button
>
