// argumentos que sustenta todos os argumentos enviados
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function soma(a, b = 2, c = 4) {
    console.log(a + b + c);
}
soma(2, undefined, 20);


function objeto({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 20 };
objeto(obj);


function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);


const conta2 = (...args) => {
    console.log(args);
}
conta2('+', 0, 20, 30, 40, 50);