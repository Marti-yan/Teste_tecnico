// 5) Escreva um programa que inverta os caracteres de um string.

let x = "Essa string serve para teste";

let novo_x = (x) => {
    let nova_str = '';
    for ( let i = x.length -1; i >= 0; i--){
        nova_str += x[i];
    }
    return nova_str;
}

console.log(novo_x(x))