function compterOccurrences(tab,valeur){
    let compteur =0;
    for(let i =0; i<tab.length; i++){
        if(tab[i]===valeur){
            compteur++;
        }
    }
    return compteur;
}
let tableau = [1, 2, 3, 2, 4, 2, 5];
let resultat = compterOccurrences(tableau, 2);
console.log("Nombre d'occurrences :", resultat);