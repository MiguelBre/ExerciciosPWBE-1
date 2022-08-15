/************
 * Objetivo: Separar números pares e números ímpares em duas listas diferentes.
 * Autor: Miguel
 * Data de criação: 15/08/2022
 * Versão: 1.0
 ***********/

const separar = function(numero1, numero2, opcao){
    let inicio = parseFloat(numero1);
    let final = parseFloat(numero2);
    let pares = [];
    let impares = [];
    let escolha = opcao.toUpperCase()
    let verificar;

    while (inicio < final){
        verificar = inicio%2;
        if (verificar == 0){
            pares.push(inicio);
        } else {
            impares.push(inicio);
        }
        inicio ++;
    }

    if (escolha == 'PARES'){
        console.log(pares)
        console.log('Quantidade de números pares encontrados: ' + pares.length)
    } else if (escolha == 'IMPARES'){
        console.log(impares)
        console.log('Quantidade de números impares encontrados: ' + impares.length)
    } else {
        console.log(pares)
        console.log('Quantidade de números pares encontrados: ' + pares.length)
        console.log(impares)
        console.log('Quantidade de números impares encontrados: ' + impares.length)
    }
}

module.exports = {
    separar
}