# Team management

Gestion d'une équipe de Pokémons. Privilégier au maximum l'usage de classes réactives.

## Header

- 3 onglets pour afficher 3 "pages" :
  - Grass : zone pour attraper les Pokémons
  - Pokédex : liste des espèces découvertes et à découvrir
  - Team : membres de votre équipe

## Grass

Des Pokémons aléatoires apparaissent toutes les 5 s sur la page

Refs : `svelte-window`

## Pokédex

Styliser différemment les Pokémons découverts

Refs : `classes`

## Team

Deux listes :

- les Pokémons titulaires (max 6)
- les remplaçants

- Offrir la possibilité de promouvoir/démettre un Pokémon
- On doit pouvoir supprimer un Pokémon de son équipe

Chaque Pokémon peut gagner/perdre de la vie

Quand tous les Pokémons titulaires sont morts, afficher "Game Over".
