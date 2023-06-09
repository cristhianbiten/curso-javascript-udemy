const numero = Number(prompt('Digite um número: '));

const seuNumero = document.getElementById('seu-numero');
const texto = document.getElementById('texto');

seuNumero.innerHTML = numero;

texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>
                    <p>${numero} é inteiro: ${Number.isInteger(numero)}</p>
                    <p>É NaN: ${Number.isNaN(numero)}</p>
                    <p>Arredondando para baixo: ${Math.floor(numero)}</p>
                    <p>Arredondando para cima: ${Math.ceil(numero)}</p>
                    <p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

