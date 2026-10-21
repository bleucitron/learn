<script lang="ts">
	type Props = {
		label: string;
		onclick?: () => void;
	};

	const { label, onclick }: Props = $props();
</script>

<!-- TODO: use <svelte:element> to render a <a> when provided with a href -->
<button class="Button" {onclick}>{label}</button>

<style lang="scss">
</style>
