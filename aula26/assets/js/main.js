const form = document.querySelector('#form');


function criaParagrafo() {
    const p = document.createElement('p');
    return p;
}


form.addEventListener('submit', evento => {
    evento.preventDefault();

    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        exibeResultadoNaTela('Peso inválido', false);
        return;
    }

    if (!altura) {
        exibeResultadoNaTela('Altura inválida', false);
        return;
    }

    const valorIMC = calculaIMC(peso, altura);
    const resultadoIMC = verificaIMC(valorIMC);
    const exibir = exibeResultadoNaTela(resultadoIMC, true);

});


function calculaIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}


function verificaIMC(valorIMC) {
    if (valorIMC >= 0 && valorIMC < 18.5) return `Seu IMC é ${valorIMC}. Você está abaixo do peso.`;
    if (valorIMC < 25) return `Seu IMC é ${valorIMC}. Você está com o peso normal.`;
    if (valorIMC < 30) return `Seu IMC é ${valorIMC}. Você está com sobrepeso.`;
    if (valorIMC < 35) return `Seu IMC é ${valorIMC}. Você está com obesidade grau 1.`;
    if (valorIMC < 40) return `Seu IMC é ${valorIMC}. Você está com obesidade grau 2.`;
    if (valorIMC >= 40 && valorIMC <= 100){
        return `Seu IMC é ${valorIMC}. Você está com obesidade grau 3.`;
    } else {
        return `Valor inválido`;
    }
}

function exibeResultadoNaTela(resultadoIMC, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = resultadoIMC;
    resultado.appendChild(p);
}

