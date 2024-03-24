// Definição do nome e da quantidade de XP do herói
let nomeDoHeroi = " "
let xpDoHeroi = 50000

//Estruturas de decisão para determinar o nível do herói de acordo com XP
if (xpDoHeroi < 1000) {
    nomeDoHeroi = " Ferro "
}
else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000){
    nomeDoHeroi = " Bronze "
}
else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000){
    nomeDoHeroi = " Prata "
}
else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
    nomeDoHeroi = " Platina Diamante "
}
else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000){
    nomeDoHeroi = " Ascendente "
}
else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000){
    nomeDoHeroi = " Imortal "
}
else nomeDoHeroi = " Radiante "


console.log ("O heroi de nome" + nomeDoHeroi + "está no nível " + xpDoHeroi )