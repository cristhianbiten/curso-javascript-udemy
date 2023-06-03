//conversão para binario 
let num1 = 1500;
console.log(num1.toString(2));

//arredondar 
let num2 = 10.456789;
console.log(num2.toFixed(2));

//verificar se é inteiro
let num3 = 10.25;
console.log(Number.isInteger(num3));

//verificar se é NaN
let num4 = num1 * 'ola';
console.log(Number.isNaN(num4));