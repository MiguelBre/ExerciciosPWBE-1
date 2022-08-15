/************ 
 * Objetivo:        Calcular uma nova média, utilizando a média anterior e uma nova nota inserida pelo usuário
 * Data de criação: 11/08/2022
 * Autor:           Miguel
 * versão:          1.0
 ***********/

const { exit } = require("process");

const calcularExame = function (notaExame, mediaAluno){
    let notaE = parseFloat(notaExame);
    let media = mediaAluno;

    if(notaExame == ''){
        console.log('ERRO: Informação não inserida');
        exit();
    } else if (notaE < 0 || notaE > 100){
        console.log('ERRO: Nota do exame inválida');
        exit();
    } else{
        mediaExame = (media + parseFloat(notaE))/2;  
        return mediaExame;                                        
    }
}

module.exports = {
    calcularExame
}