const prompt = require("prompt-sync")();

const alunos = [];

const modelo = () => {
    const nomeAluno = prompt("Nome do aluno: ");
    const dataNascimento = parseInt(prompt("Ano de nascimento (AAAA): "), 10);
    const curso = prompt("Descrição do curso: ");
    const periodo = prompt("Qual o período: ");

    if (nomeAluno !== "" && curso !== "" && periodo !== "" && !isNaN(dataNascimento)) {
        return {
            nomeAluno,
            dataNascimento,
            curso,
            periodo,
        };
    } else {
        console.log("Dados inválidos");
        return undefined;
    }
};

const criar = () => {
    const aluno = modelo();
    if (aluno !== undefined) {
        alunos.push(aluno);
        console.log("Aluno cadastrado com sucesso!");
    }
};

const listar = () => {
    if (alunos.length === 0) {
        console.log("Nenhum aluno encontrado");
        return false;
    } else {
        alunos.forEach((aluno, indice) => {
            console.log(`${indice + 1}.
            Nome do Aluno: ${aluno.nomeAluno}
            Ano de Nascimento: ${aluno.dataNascimento}
            Curso: ${aluno.curso}
            Período: ${aluno.periodo}
            `);
        });
        return true;
    }
};

const atualizar = () => {
    const indice = parseInt(prompt("Qual o índice que deseja atualizar? "), 10) - 1;

    if (indice >= 0 && indice < alunos.length) {
        const aluno = modelo();
        if (aluno !== undefined) {
            alunos[indice] = aluno;
            console.log("Aluno atualizado com sucesso");
            console.log(alunos);
        } else {
            console.log("Falha na atualização");
        }
    } else {
        console.log("Índice inválido");
    }
};

const remover = () => {
    const indice = parseInt(prompt("Qual índice você deseja remover? "), 10) - 1;
    if (indice >= 0 && indice < alunos.length) {
        let alunoRemover = alunos.splice(indice, 1);
        console.log(`Aluno: ${alunoRemover[0].nomeAluno}, removido com sucesso`);
        console.log(alunos);
    } else {
        console.log("Índice inválido");
    }
};

module.exports = {
    criar,
    atualizar,
    remover,
    listar
};
