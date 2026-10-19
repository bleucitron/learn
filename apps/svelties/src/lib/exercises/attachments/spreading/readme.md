Les attachements n'impactent que les vrais éléments HTML, mais ils peuvent être fournis à des
instances de composants, qui vont pouvoir les relayer aux éléments qui en ont besoin.

- fournir l'attachement `outsideClick` aux instances dont la position dans le tableau est impaire
- utiliser la fonction `toggle` dans l'attachement pour l'exécuter lorsqu'on clique en dehors du
  Pokémon concerné
- relayer cet attachement à l'élément principal de `Pokemon`
