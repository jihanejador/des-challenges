function inverserTableau(tab){
    let table = [];
    for(let i=tab.length -1;i>=0;i--){
        table.push(tab[i]);
    }
    return table;
}
let tableau = [1, 2, 3, 4, 5];
let resultat = inverserTableau(tableau);
console.log(resultat);