// 7.[ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.
const numberOne = 7
if (numberOne % 2 === 0) {
    console.log("O número é PAR!")
    if (numberOne % 5 === 0) {
        console.log("O número é PAR e divisível por 5!")
    } else {
        console.log("O número é PAR e NÃO divisível por 5!")
    }
} else {
    console.log("O número é ÍMPAR")
    for (let i = 2; i < numberOne; i++)
        if (numberOne % i === 0) {
            console.log("Ele é ÍMPAR, mas NÃO É PRIMO!! ");
            break;
        } else {
            if (i === numberOne - 1)
            console.log("Ele é um número PRIMO!!")
        }
}