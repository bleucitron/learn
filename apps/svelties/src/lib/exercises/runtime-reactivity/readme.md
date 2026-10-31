---
docs: https://svelte.dev/blog/runes#Runtime-reactivity
tags:
  - syntax
  - reactivity
  - svelte5
  - 3to5
  - 4to5
  - beginner
needs:
  - $derived
  - $effect
  - classes
  - events
  - attributes
  - text-expressions
---

À la différence de Svelte 4 et antérieurs, la réactivité de Svelte 5 peut "voir" les variables
réactives à travers les appels de fonction, sans que les liens entre variables réactives soient
explicites.

- utiliser le mode runes pour rendre l'usage de `log()` réactif dans un effet
- vous n'avez le droit de fournir des argument à la fonction `log`
