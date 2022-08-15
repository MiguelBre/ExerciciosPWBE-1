/**********
 * Objetivo: Criar um relatório contendo o status completo do estudante no curso e seu orientador.
 * 
 *********/
const { relatar } = require('./modulos/relatorio.js');
const { calcularMedia } = require('./modulos/media.js');
const { calcularExame } = require('./modulos/exame.js');
const { parse } = require('path');
const { exit } = require('process');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Pedindo o nome do aluno(a)
entradaDados.question('Digite o nome do aluno: ', function(nomeA){
    let nomeAluno = nomeA; 

    //Identificando o sexo do estudante
    entradaDados.question('Digite o sexo do estudante: ', function(sexoA){
        let sexoAluno = sexoA.toUpperCase();

        //Qual curso o aluno está cursando
        entradaDados.question('Curso: ', function(curso){
            let nomeCurso = curso;

            //Qual disciplina esses exames pertencem
            entradaDados.question('Nome da disciplina: ', function(disciplina){
                let nomeDisciplina = disciplina;

                //Solicitando o nome do professor
                entradaDados.question('Insira o nome do orientador responsável: ', function(nomeP){
                    let nomeProfessor = nomeP;

                    //Identificando o sexo do professor
                    entradaDados.question('Insira o sexo do orientador: ', function(sexoP){
                        let sexoProfessor = sexoP.toUpperCase();

                        //Solicitando a primeira nota
                        entradaDados.question('Informe a 1ª nota: ', function(valor1){
                            let nota1 = valor1;

                            //Solicitando a segunda nota
                            entradaDados.question('Informe a 2ª nota: ', function(valor2){
                                let nota2 = valor2;

                                //Solicitando a terceira nota
                                entradaDados.question('Informe a 3ª nota: ', function(valor3){
                                    let nota3 = valor3;

                                    //Solicitando a quarta nota
                                    entradaDados.question('Informe a 4ª nota: ', function(valor4){
                                        let nota4 = valor4;
                                        let mediaAluno;
                                        let notaExame = 'Não foi preciso realizar o exame';
                                        let mediaExame = 'Não foi preciso realizar o exame';
                                        let statusAluno;

                                        //Possíveis erros
                                        if(nomeAluno == '' || sexoAluno == '' || nomeProfessor == '' || sexoProfessor == '' || nomeCurso == '' || nomeDisciplina == ''){
                                            console.log('ERRO: Todas as informações devem ser inseridas.');
                                            exit();
                                        } else if (sexoAluno != 'FEMININO' && sexoAluno != 'MASCULINO' || sexoProfessor != 'FEMININO' && sexoProfessor != 'MASCULINO'){
                                            console.log('ERRO: sexo inválido');
                                            exit();
                                        }else{
                                            //Atualizando o status do aluno
                                            mediaAluno = calcularMedia(nota1, nota2, nota3, nota4, mediaAluno)
                                            if(mediaAluno >= 70){
                                                if(sexoAluno == 'FEMININO'){
                                                statusAluno = 'Aprovada';
                                                } else {
                                                    statusAluno = 'Aprovado';
                                                }

                                            } else if(mediaAluno <= 50){
                                                if(sexoAluno == 'FEMININO'){
                                                statusAluno = 'Reprovada';
                                                } else {
                                                    statusAluno = 'Reprovado'
                                                }

                                            }
                                            if (statusAluno)
                                            {
                                                relatar(statusAluno, nota1, nota2, nota3, nota4, notaExame, sexoAluno, sexoProfessor, curso, disciplina, nomeA, nomeP, mediaAluno, mediaExame);
                                                exit();
                                            }else if (mediaAluno > 50 && mediaAluno < 70) {
                                                console.log('O aluno deverá realizar um exame');
                                                entradaDados.question('Insira a nota do EXAME: ', function(valorExame){
                                                    notaExame = parseFloat(valorExame);
                                                    mediaExame = calcularExame(notaExame, mediaAluno);
                                                    if (parseFloat(mediaExame) > 60){
                                                        if(sexoAluno == 'FEMININO'){
                                                        statusAluno = 'Aprovada no exame';
                                                        } else {
                                                            statusAluno = 'Aprovado no exame'
                                                        }
                                                    } else {
                                                        if (sexoAluno == 'FEMININO') {
                                                            statusAluno = 'Reprovada no exame';
                                                        } else {
                                                            statusAluno = 'Reprovado no exame';
                                                        }
                                                        
                                                    }
                                                    relatar(statusAluno, nota1, nota2, nota3, nota4, notaExame, sexoAluno, sexoProfessor, curso, disciplina, nomeA, nomeP, mediaAluno, mediaExame);
                                                    exit();
                                                });
                                            } 
                                        }

                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});


