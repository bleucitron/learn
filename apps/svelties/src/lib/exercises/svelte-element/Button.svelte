<script lang="ts">
	type Props = {
		label: string;
		href: string;
		onclick?: () => void;
	};

	const { label, href, onclick }: Props = $props();

	const type = $derived(href ? 'a' : 'button');
	const role = $derived(href ? 'link' : 'button');
</script>

<!-- TODO: use <svelte:element> to render a <a> when provided with a href -->
<svelte:element this={type} {onclick} {role} {...href ? { href } : null}>{label}</svelte:element>

<style lang="scss">
</style>
