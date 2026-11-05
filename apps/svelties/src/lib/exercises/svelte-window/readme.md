---
docs: https://svelte.dev/docs/svelte/svelte-window
tags:
  - syntax
  - intermediate
  - special-elements
needs:
  - $props
  - $derived
  - each
  - component
  - attributes
  - text-expressions
  - style-directive
---

`<svelte:window>` permet de facilement accéder aux propriétés de la `window`.

Actuellement, les Pokémons sauvages sont tous positionnés au même endroit, car ils n'ont pas
d'information sur les limites possibles du terrain.

- utiliser `<svelte:window>` pour remplir les variables `innerWidth` et `innerHeight`
