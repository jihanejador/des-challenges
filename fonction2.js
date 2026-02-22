function sommeTableau(tab){
    let sum = 0;
    for (let i =0 ; i<tab.length;i++){
        sum +=tab[i];

    }
    return sum;
}
let tableau = [1, 2, 3, 4, 5];
let resultat = sommeTableau(tableau);
console.log("La somme est :", resultat);