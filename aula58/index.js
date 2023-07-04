function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Cristhian', 'Bitencourt');
const p2 = new Pessoa('Andressa', 'Oliveira');

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();