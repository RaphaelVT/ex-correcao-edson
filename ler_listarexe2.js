const alunos = [
    {
   nomeAluno: "Edson",
   dataNascimento: 1988,
   curso: "dev",
   periodo: "noite",
    },
    {
   nomeAluno: "Aluno 1",
   dataNascimento: 2010,
   curso: "dev",
   periodo: "noite",
    },
    {
   nomeAluno: "Aluno 2",
   dataNascimento: 1999,
   curso: "dev",
   periodo: "tarde",
    },
    ];


    const listar = () => {
        if (alunos.length === 0) {
        console.log("Nenhum aluno encontrado ");
        return false;
        } else {
        alunos.forEach((aluno, indice) => {
        console.log(`${indice + 1}.
        Nome do Aluno: ${aluno.nomeAluno}
        Ano de Nascimento: ${aluno.dataNascimento}
        Curso: ${aluno.curso}
        Período: ${aluno.periodo}
        ` );
        });
        return true;
        }
        };


listar();