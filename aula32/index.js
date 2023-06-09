const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);

const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);

const numerosArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numerosArray[1][2]);
const [lista1, lista2, lista3] = numerosArray;
console.log(lista3[2]);