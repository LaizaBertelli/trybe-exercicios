//exercicio 1
function square(n){
    let aux = "";
    //cria uma string com n *
    for( var i = 0; i < n; i++){
        aux += "*";
    }
    //imprime aux n vezes
    for(var i = 0; i <n; i++){
        // console.log(aux);
    }
}

square(5);

//exercicio 2
function triangle(n){
    let aux = "";
    //adiciona i "*" e imprime aux
    for(var i =0; i < n; i++){
        aux += "*";
        // console.log(aux);
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
        // console.log(aux.join("")); 
    }
}
invertedTriangle(5);

function preencheLinha(num){
    let string = '';
    for(let i = 0; i < num; i ++){
        string += '*';
    }
    return string;
}

function revert(array){
    for( let i = array.length - 1; i >= 0; i --){
        console.log(array[i]);
    }
}
function addSpaces (line){
    let array = [];
    for(let i = 0; i < line; i ++){
        array.push(' ');
    }
    return array.join('');
}
//exercicio 4
function baseN(n){

    let lines = (n + 1) / 2;
    let controle = lines;
    let piramide = [];
    let base = n;
    
    //preencher linhas
    for(let i = 0; i < lines; i ++){
        if(lines === controle){
            piramide[i] = preencheLinha(base);
            base = base - 2;
            controle -= 1;
        }else {
            piramide[i] = addSpaces(lines - controle) + preencheLinha(base);
            base = base - 2;
            controle -= 1;
        }
    }
    revert(piramide);
}

baseN(7);



