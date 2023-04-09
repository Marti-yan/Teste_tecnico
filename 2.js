//  Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


const seq = 3; // numero de exemplo usado para a entrada do dado
const num = seq;
let verify = false
let soma = 0;
let ant = 0;
let prox = 1;

if (num <= 5 && num != 4) {
    console.log(`${num} faz parte da sequencia`)
} else{
    for (let i = 0 ; i < seq; i++) {
        soma = ant + prox;
        ant = prox;
        prox = soma;
        if (ant == num){
            console.log(`${num} faz parte da sequencia`)
            verify = true;
        } 
    }
    if (!verify){
        console.log(`${num} não faz parte da sequencia`)
    }
}
