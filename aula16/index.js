const alunos = ['Luiz', 'Maria', 'João'];


delete alunos[1]; // Deleta o elemento do array, mas não remove o índice

const removePrimeiro = alunos.shift();
const removeUltimo = alunos.pop();

const adicionaPrimeiro = alunos.unshift('Luiza');
const adicionaUltimo = alunos.push('Fábio');

const tamanhoArray = alunos.length;

console.log(alunos);
console.log(tamanhoArray);