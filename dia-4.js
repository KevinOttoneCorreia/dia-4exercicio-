// ELABOREI DESTA FORMA EM UM PRIMEIRO MOMENTO //

let fome = String(prompt("Você está com fome? "))
let dinheiro = Number(prompt("Quantos reais você tem? "))
let restaurante = String(prompt("O restaurante está aberto? "))

    if (fome === "não estou" && dinheiro === 0 ){
        console.log("Hoje a janta é em casa");
    }

    if ( fome === "estou com fome" && dinheiro != 0 && restaurante === "não"){
console.log ("Peça um delivery");
    }

    if (fome === "estou com fome" && dinheiro != 0 && restaurante === "está") {
    console.log("Hoje o jantar será no seu restaurante preferido")
}


// CORRIGINDO NA MELHOR ESTRUTURA FICOU ASSIM -----> //

const temFome = prompt("Você está com fome? (sim/não)")
const temDinheiro = prompt("Você tem dinheiro? (sim/não)")
const restauranteAberto = prompt("O restaurante está aberto? (sim/não)")

if (temFome === "não" || temDinheiro == "não") {
    console.log("Hoje a janta será em casa");
} else if (temDinheiro === "sim" && restauranteAberto === "sim") {
    console.log("Hoje o jantar será no seu restaurante preferido!");
}else {
    console.log("Peça um delivery!");
}