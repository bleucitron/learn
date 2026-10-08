> NOTE: cet exercice est le mème que $state/factories, mais avec une approche différente

Beaucoup de code est dupliqué pour permettre de gérer les deux équipes indépendemment. L'objectif
est de factoriser la création d'une équipe de Pokémons.

- créer une `class` permettant de créer un `$state` et de gérer tout son comportement
- une instance de cette classe doit prendre comme argument l'`id` du Pokémon starter
- cette classe doit fournir le state, ainsi que
  - une méthode `add()` pour ajouter un Pokémon
  - une propriété indiquant si l'équipe est au complet
- les fonctionnalités doivent être identiques entre avant et après la factorisation
