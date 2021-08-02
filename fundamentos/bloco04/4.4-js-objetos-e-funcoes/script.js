//exercicios 1 - 4
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};
console.log("Bem-vinda, " + info.personagem);

for(let key in info){
  console.log(key);
}
for(let value in info){
  console.log(info[value]);
}

//exercicio 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear mountain, Dell's Four Color Comics#178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for(let key in info, info2){
  console.log(info[key] + " e " + info2[key]); //não pode imprimir o Sim e Sim corrigir depois
  if(info.recorrente === info2.recorrente){
    console.log("Ambos recorrentes");
  }
}