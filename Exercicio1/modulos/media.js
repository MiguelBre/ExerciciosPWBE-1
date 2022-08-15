/****************
 * Objetivo:    calcular a nota de um aluno pelas notas inseridas pelo professor
 * Data:        08/08/2022
 * Autor:       Miguel Antonio
 * Versão:      1.0
 ***************/

const { exit } = require("process");

const calcularMedia = function (valor1, valor2, valor3, valor4){
    let nota1 = parseFloat(valor1);
    let nota2 = parseFloat(valor2);
    let nota3 = parseFloat(valor3);
    let nota4 = parseFloat(valor4);
    let mediaAluno;

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        console.log('Erro: valores inseridos inválidos');
    } else if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
        console.log('ERRO: Todos os valores devem ser inseridos')
    } else if(nota1 > 100 || nota1 < 0 || nota2 > 100 || nota2 < 0 || nota3 > 100 || nota3 < 0 ||nota4 > 100 || nota4 < 0){
        console.log('ERRO: as notas devem ser inseridas entre 0 e 100.');
        exit();
    } else {
        mediaAluno = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
        return mediaAluno;
    }
}

module.exports = {
    calcularMedia
}