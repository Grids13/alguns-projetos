//atividade: (retorne o nome dos alunos aprovados)
//                     1-crie uma funcao que recebe o array `alunos` e um numero que ira representar a media final.
//                     2-percorra o array e popule um novo array auxiliar apenas com alunos cujas notas sao maiores ou iguais a media final
//                     3-utilize a tecnica `object destructuring` para manipular as propriedades desejadas de cada aluno.
const alunos = [
    {
        nome: "joao",
        nota: 5,
        turma: "1B",
    },
    {
        nome: "sofia",
        nota: 9,
        turma: "1B",
    },
    {
        nome: "paulo",
        nota: 6,
        turma: "2c",
    },
    {
        nome: "Raul", 
        nota: 4,
        turma: "2c"
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [] ;                       //declaramos a variavel aprovados
                             
    for ( let i = 0;  i < arr.length;  i++) {           // iniciamos um loop com o for para que haja a verificacao
        const { nota, nome } = arr[i];           //utilizamos a tecnica 'desestruturando o objeto" para que possamos manipular propriedades de cada aluno

        if (nota >= media) {                      // colocamos a condicional para caso a nota do aluno seja maior ou igual a media
            aprovados.push(nome);       //colocar o nome dele dentro do array dos aprovados
        }
    }
    return aprovados;
}  
console.log(alunosAprovados(alunos,5));