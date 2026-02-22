function compterOccurrences(tab,valeur){
    let compteur =0;
    for(let i =0; i<tab.length; i++){
        if(tab[i]===valeur){
            compteur++;
        }
    }
    return compteur;
}