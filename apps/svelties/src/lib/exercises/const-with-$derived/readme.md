---
docs: https://svelte.dev/docs/svelte/declaration-tags
tags:
  - syntax
  - reactivity
  - svelte5
  - intermediate
  - declaration-tags
needs:
  - each
  - each-key
  - attributes
  - text-expressions
  - events
---

Comme on peut utiliser `{let ...}` pour définir un `$state` dans le markup, on peut aussi utiliser
`{const ...}` pour définir un `$derived`.

- utiliser `{const ...}` et `$derived` pour afficher le niveau du Pokémon (le nb de dizaines de son
  expérience)
