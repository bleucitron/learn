Beaucoup de code est dupliqué pour permettre de gérer les deux équipes indépendemment. L'objectif
est de factoriser la création d'une équipe de Pokémons.

- créer une `function` permettant de créer un `$state` et de gérer tout son comportement
- cette fonction doit prendre comme argument l'`id` du Pokémon starter
- cette fonction doit renvoyer le state, ainsi que
  - une méthode `add()` pour ajouter un Pokémon
  - une propriété indiquant si l'équipe est au complet
- les fonctionnalités doivent être identiques entre avant et après la factorisation
