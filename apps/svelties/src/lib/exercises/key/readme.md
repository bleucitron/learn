---
name: \{key ...\}
docs: https://svelte.dev/docs/svelte/key
tags:
  - syntax
  - reactivity
  - intermediate
needs:
  - $state
  - $derived
  - events
  - attributes
---

Les transitions ne se jouent que lorsqu'un composant est monté ou démonté, sauf lors du rendu
initial. Elles ne sont pas jouées lors d'un simple rafraîchissement de props.
`{#key ...}` permet de forcer le démontage/remontage d'un composant en fonction des mises à jour des
valeurs réactives qu'il référence.

- faire en sorte de déclencher la transition d'entrée pour chaque nouveau Pokémon
