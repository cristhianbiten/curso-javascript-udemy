//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures

// Global
function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}
const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);


function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}
var myFunc = makeFunc();
myFunc();


function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2));  // 7
console.log(add10(2)); // 12