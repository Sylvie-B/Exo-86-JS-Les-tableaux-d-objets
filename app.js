/* Ne touchez pas à ce code */
let citroen = {
    color: 'blue',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Citroën est ouverte");
    },
}

let peugeot = {
    color: 'yellow',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Peugeot est ouverte");
    }
}

let ford = {
    color: 'red',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Ford est ouverte");
    }
}

/**
 * Votre code commence ici !
 */
let voitures = {
    garage: 'concession',
    lieu: 'Fourmies',
    // Dans un tableau, ajouter les différentes voitures que vous possédez.
    collection: [peugeot, citroen, ford], // Vos voitures dans cette propriété !
}

// FIXME Parcourrez le tableau dans lequel vous avez placé vos objets.
for (let i =0 ; i < voitures.collection.length ; i++){
    // TODO ==> invoquez la méthode ouvrirPorte pour chaque voiture de la collection.
    voitures.collection[i].ouvrirPorte();
}

let newPara = document.getElementById('newPara');
let carColor = document.createElement('span');
for (let i =0 ; i < voitures.collection.length ; i++){
    carColor.innerHTML += voitures.collection[i].color + " ";
    newPara.appendChild(carColor);
}
