export const calculTVA = function(montantHT) {
    return montantHT * 1.2;
}

// à titre de rappel/apprentissage sur le this contextualisé qu'on ne retrouve plus comme probleme dans typescript
// function User() {
//     this.name = '';
// }

// function Ours() {
// }

// const ours = new Ours();

// User(); // Ici le this il vaut quoi ? Il vaut Window :O
// const user = new User(); // le this vaut prototype User, donc une nouvelle instance

// const userOurs = User.bind(ours);
// userOurs();