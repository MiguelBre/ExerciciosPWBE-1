/**************
 * Objetivo:        criar o relatório para informar ao usuário os dados do aluno
 * Data de criação: 08/08/2022
 * Autor:           Miguel Antonio
 * Versão:          1.1
 * Data de alteração: 11/08/2022
 * Autor da alteração: Miguel
 *************/

const relatar = function (statusAluno, nota1, nota2, nota3, nota4, notaExame, sexoA, sexoP, curso, disciplina, nomeA, nomeP, mediaAluno, mediaExame){
    let nomeAluno = nomeA;
    let nomeProfessor = nomeP;
    let nomeCurso = curso;
    let nomeDisciplina = disciplina;
    let pnota = nota1;
    let snota = nota2;
    let tnota = nota3;
    let qnota = nota4;
    let status = statusAluno;
    let exame = notaExame;
    let media = mediaAluno
    let sexoAluno = sexoA;
    let sexoProfessor = sexoP;
    let exameMedia = mediaExame;

    if(sexoAluno == 'MASCULINO' && sexoProfessor == 'MASCULINO'){
        console.log('\nO aluno [' + nomeAluno + '] foi [' + status + '] na disciplina [' + nomeDisciplina + ']. \nCurso: ' + nomeCurso + '. \nProfessor: ' + nomeProfessor + '. \nNotas do aluno: ' + pnota + ', ' + snota + ', ' + tnota + ', ' + qnota + ', ' + exame + '\nMédia final: ' + media + '\nMédia final do exame: ' + exameMedia);
    } else if(sexoAluno == 'MASCULINO' && sexoProfessor == 'FEMININO'){
        console.log('\nO aluno [' + nomeAluno + '] foi [' + status + '] na disciplina [' + nomeDisciplina + ']. \nCurso: ' + nomeCurso + '. \nProfessora: ' + nomeProfessor + '. \nNotas do aluno: ' + pnota + ', ' + snota + ', ' + tnota + ', ' + qnota + ', ' + exame + '\nMédia final: ' + media + '\nMédia final do exame: ' + exameMedia);
    } else if(sexoAluno == 'FEMININO' && sexoProfessor == 'FEMININO'){
        console.log('\nA aluna [' + nomeAluno + '] foi [' + status + '] na disciplina [' + nomeDisciplina + ']. \nCurso: ' + nomeCurso + '. \nProfessora: ' + nomeProfessor + '. \nNotas da aluna: ' + pnota + ', ' + snota + ', ' + tnota + ', ' + qnota + ', ' + exame + '\nMédia final: ' + media + '\nMédia final do exame: ' + exameMedia);
    } else {
        console.log('\nA aluna [' + nomeAluno + '] foi [' + status + '] na disciplina [' + nomeDisciplina + ']. \nCurso: ' + nomeCurso + '. \nProfessor: ' + nomeProfessor + '. \nNotas da aluna: ' + pnota + ', ' + snota + ', ' + tnota + ', ' + qnota + ', ' + exame + '\nMédia final: ' + media + '\nMédia final do exame: ' + exameMedia);
    }

}

module.exports = {
    relatar
}