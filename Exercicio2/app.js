/**
 * Data de criação: 11/08/2022
 * Autor: Miguel
 * Version: 1.0
 */

const { calcularTabuada } = require('./modulos/tabuada.js')
var readline = require('readline');
const { exit } = require('process');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o primeiro numero (2 - 100): ', function(valor1){
    let numero1 = valor1;
    entradaDados.question('Digite o segundo número (2 - 100): ', function(valor2){
        let numero2 = valor2;
        entradaDados.question('digite o início das tabuadas (0 - 50): ', function(comeco){
            let inicio = comeco;
            entradaDados.question('Digite o fim dessas tabuadas (1 - 50): ', function(owari){
                let fim = owari;
                if (numero1 == '' || numero2 == '' || inicio == '' || fim == '') {
                    console.log('ERRO: Todos os valores devem ser inseridos')
                    exit();
                } else if (parseFloat(numero1) < 2 || parseFloat(numero1) > 100 || parseFloat(numero2) < 2 || parseFloat(numero2) > 100) {
                    console.log('ERRO: Os valores dos números devem estar entre 2 e 100')
                    exit();
                } else if (parseFloat(inicio) < 0 || parseFloat(inicio) > 50 || parseFloat(fim) < 0 || parseFloat(fim) > 50) {
                    console.log('ERRO: As tabuadas devem estar entre 0 e 50')
                    exit();
                } else {
                    calcularTabuada(numero1, numero2, inicio, fim);
                    exit();
                }
            })
        })
    })
})