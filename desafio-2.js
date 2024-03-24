//Definir a função para calcular vitórias e derrotas

const result = HeroHank (90,30)
function HeroHank (numWins, numDefeat) {
    const totalWins = numWins - numDefeat
    let level = " "

    switch (true){
        case totalWins < 10:
        level = "Ferro"
        break

        case totalWins >= 11 && totalWins <= 20:
        level = "Bronze"
        break

        
        case totalWins >= 21 && totalWins <= 50:
        level = "Prata"
        break

        
        case totalWins >= 51 && totalWins <= 80:
        level = "Ouro"
        break

        
        case totalWins >= 81 && totalWins <= 90:
        level = "Diamante"
        break

        
        case totalWins >= 91 && totalWins <= 100:
        level = "Lendário"
        break

        default:
        level = "Imortal"
    }
    return `O Herói tem um saldo de ${totalWins} e está no nível ${level}.`
}

console.log (result)