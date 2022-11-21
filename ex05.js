/*5.a[ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
*/
const person = {
    name: "José",
    age: 15,
    genre: "male",
    profession: "Tech Assistant",
    nationality: "Brazilian"
}

if (person.age >= 18 && person.nationality === "Brazilian") {
    console.log ("A pessoa foi aprovada")
}else{
    console.log ("A pessoa não foi aprovada")
}
/*5.bFaça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. 
Cada nota deve conter uma mensagem diferente.*/
const notaJurados = 10
switch (notaJurados) {
    case 10:
        console.log ("Você foi excelente na sua apresentação")
        break;
    case 8:
        console.log ("Você foi muito bem, gostei bastante, mas senti que faltou um pouco mais da sua interpretação")
        break;
    case 6:
        console.log ("Você canta bem, mas você está escolhendo músicas ou vestimentas inadequadas para o momento")
        break;
    case 4:
        console.log ("Você está melhorando, está evoluindo, mas não está conseguindo manter-se no tom da música")
        break;
    case 2:
        console.log ("Apesar da sua dedicação, ainda você não sabe cantar. Procure um profissional para que você consiga evoluir")
        break;
    default:
        console.log ("Por gentileza, o próximo")
        break;
}

