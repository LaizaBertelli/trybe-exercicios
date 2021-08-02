//exercicio 1
function square(n){
    let aux = "";
    //cria uma string com n *
    for( var i = 0; i < n; i++){
        aux += "*";
    }
    //imprime aux n vezes
    for(var i = 0; i <n; i++){
        console.log(aux);
    }
}

square(5);

//exercicio 2
function triangle(n){
    let aux = "";
    //adiciona i "*" e imprime aux
    for(var i =0; i < n; i++){
        aux += "*";
        console.log(aux);
    }
}
triangle(5);

//exercicio 3
function invertedTriangle(n){
    let aux = [];
    //preenche o vetor auxiliar com n espaços vazios
    for(var i = 0; i < n; i++){
        aux.push(" ");
    }
    //subistitui o último indice com um "*"
    // a cada passagem ele move um indice para a esquerda
    for(var j = n; j > 0; j--){
        aux[j-1] = "*";
        console.log(aux.join("")); 
    }
}
invertedTriangle(5);

//exercicio 4