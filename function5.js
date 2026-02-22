function inverserTableau(tab){
    let table = [];
    for(let i=tab.length -1;i>=0;i--){
        table.push(tab[i]);
    }
    return table;
}