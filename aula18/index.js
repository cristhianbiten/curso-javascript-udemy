function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 55);
console.log(pessoa1.nome, pessoa2.nome);
console.log(pessoa1);

const pessoa3 = {
    nome: 'Cristhian',
    sobrenome: 'Bitencourt',
    idade: 24,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();