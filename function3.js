function macTableau(tab){
    let max =tab[0];
    for(let i=0; i<tab.length;i++){
        if(tab[i]>max){
            max=tab[i];
        }
    }
    return max;
}