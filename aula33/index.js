const pessoa = {
    nome: 'Cristhian',
    sobrenome: 'Bitencourt',
    idade: 24,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome);
console.log(resto);

const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);
