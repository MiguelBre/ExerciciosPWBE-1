/*
 * Data de criação: 15/08/2022
 * Autor: Miguel
 * Version: 1.0
 */

const { separar } = require('./modulos/separador')
 var readline = require('readline');
 const { exit } = require('process');
 
 var entradaDados = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 entradaDados.question('Digite o primeiro numero (0 - 500): ', function(valor1){
     let numero1 = valor1;
     entradaDados.question('Digite o segundo número (Entre 100 e 1000, não podendo ser igual ao primeiro número): ', function(valor2){
         let numero2 = valor2;
         entradaDados.question('Insira a lista que deseja aparecer (Pares, impares ou ambas): ', function(option){
            let opcao = option.toUpperCase();
            if (numero1 == '' || numero2 == '' || opcao == ''){
                console.log('ERRO: Todos os dados devem ser inseridos.')
                exit();
            } else if (parseFloat(numero1) < 0 || parseFloat(numero1) > 500 || parseFloat(numero2) < 100 || parseFloat(numero2) > 1000) {
                console.log('ERRO: Os números inseridos devem estar com os valores entre os numeros apresentados entre parênteses.')
                exit();
            } else if (parseFloat(numero1) == parseFloat(numero2)) {
                console.log('ERRO: Os dois valores não podem ser iguais.')
                exit();
            } else if (opcao != 'PARES' && opcao != 'IMPARES' && opcao != 'AMBAS'){
                console.log('ERRO: A opção escolhida não está entre as disponibilizadas');
                exit();
            } else {
                separar(numero1, numero2, opcao);
                exit();
            }
         })
     })
 })