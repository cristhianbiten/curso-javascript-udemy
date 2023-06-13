const frutas = ['Pera', 'Maçã', 'Uva'];
for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Cristhian',
    sobrenome: 'Bitencourt',
    idade: 24
};
for (let key in pessoa) {
    console.log(key, pessoa[key]);
}