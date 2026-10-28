---
docs: https://svelte.dev/docs/svelte/svelte-element
tags:
  - syntax
  - svelte5
  - intermediate
  - special-elements
needs:
  - $props
  - $derived
  - \{#each}
  - component
  - events
  - attributes
  - text-expressions
---

On veut que notre `Button` puisse aussi afficher des liens lorsque c'est pertinent

- utiliser un `Button` à la place du `p` pour afficher le nom du Pokémon
- fournir une prop `href` à l'instance du nouveau `<Button>`
- utiliser `<svelte:element>` pour afficher un lien dans le `Button` lorsqu'il possède un `href`
