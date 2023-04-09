// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

let media = 0, c = 0, soma = 0;
let dmenor = 0, menor, dmaior = 0, maior;
document.getElementById("res").innerHTML = "";
const dados = fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        console.log(dados);
        maior = dados[0].valor
        menor = dados[0].valor

        for (dado of dados) {
            document.getElementById("res").innerHTML += `dia ${dado.dia}, vendeu R$${dado.valor} <br>`;

            // pt3
            if (!dado.valor == 0) {
                c++;
                soma += dado.valor;
            }
            //

            if (dado.valor < menor) {
                if (dado.valor != 0) {
                    menor = dado.valor
                    dmenor = dado.dia
                }
            } else if (dado.valor > maior) {
                maior = dado.valor
                dmaior = dado.dia
            }
        }

        document.getElementById("res").innerHTML += `<br><hr> O dia ${dmenor} foi o que menos vendeu, R$${menor} (Exceto os dias em que não houve faturamento) <br>`
        document.getElementById("res").innerHTML += ` O dia ${dmaior} foi o que mais vendeu,  R$${maior}<br><br>`

        // parte 3
        media = soma / c;
        media = Number(media.toFixed(5))
        document.getElementById("res").innerHTML += `Dias que venderam mais que a media :<br>`
        for (dado of dados) {
            if (dado.valor > media) {
                document.getElementById("res").innerHTML += `dia ${dado.dia} / `
            }
        }
        document.getElementById("res").innerHTML += `<br> Media: R$${media}`

    })
})


// console.log(dadosJS)
// console.log(dadosJS2)