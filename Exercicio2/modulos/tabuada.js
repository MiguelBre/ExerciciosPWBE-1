/****************
 * Objetivo: criação de funções para calcular uma tabuada
 * Data: 11/08
 * Autor: Miguel
 * Versão 1.0
 ****************/

 const calcularTabuada = function (numero1, numero2, inicio, fim){
    let num1 = parseFloat(numero1);
    let num2 = parseFloat(numero2);
    let init = parseFloat(inicio);
    let end = parseFloat(fim);
    let resultado;

    while (num1 <= num2){
        while (init <= end){
            resultado = num1 * init;
            console.log(num1 + ' x ' + init + ' = ' + resultado);
            init ++;
        }
        num1++;
        init = inicio
        console.log('\n')
    }

}

module.exports = {
    calcularTabuada
}