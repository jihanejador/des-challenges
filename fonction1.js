function remplirTableau(length){
    let tab =[];
    for (let i =0; i< length;i++){
        let nomber = prompt("Entrer le nombre "+ (i+1)+":");
        tab.push(Number(nomber));

    }
    return tab;
}