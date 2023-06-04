function saudacao(nome) {
  console.log(`Bom dia ${nome}!`);
}
saudacao("Maria"); // Bom dia Maria!


function saudacaoComReturn(nome) {
  return `Boa tarde ${nome}!`;
}
const variavel = saudacaoComReturn("Luiz");
console.log(variavel); // Boa tarde Luiz!


function soma(x, y) {
  const resultado = x + y;
  return resultado;
}
console.log(soma(2, 2)); // 4


const raizQuadrada = function (n) {
  return n ** 0.5;
};
console.log(raizQuadrada(9)); // 3


const raizQuadrada2 = (n) => {
  return n ** 0.5;
};
console.log(raizQuadrada2(16)); // 4


const raizQuadrada3 = (n) => n ** 0.5;
console.log(raizQuadrada3(25)); // 5
