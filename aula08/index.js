const nome = "Cristhian";
const sobrenome = "Bitencourt";
const idade = 23;
const peso = 80;
const alturaEmM = 1.8;

let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2023 - idade;

console.log(
  nome + " " + sobrenome + " tem " + idade + " anos, pesa " + peso + " kg"
);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(nome, "nasceu em", anoNascimento, ".");
