<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		header: Snippet;
		footer: Snippet;
		children?: Snippet;
	};
	const { header, footer, children }: Props = $props();
</script>

<div class="Card">
	{@render header()}
	{@render children?.()}
	{@render footer()}
</div>

<style lang="scss">
	.Card {
		display: flex;
		flex-flow: column;
		justify-content: center;

		outline: 3px solid #888888;
		outline-offset: -3px;
		border-radius: 1rem;

		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

		overflow: hidden;
	}
</style>
