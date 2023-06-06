/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY:
*false
0
'' "" ``
null / undefined
NaN

QUALQUER COISA DIFERENTE DISSO É TRUE
*/

console.log('Luiz' && 0 && 'Maria'); // retorna 0

const corUsuario = null;
const corPadrao = corUsuario || 'preto'; // retorna preto
console.log(corPadrao);
