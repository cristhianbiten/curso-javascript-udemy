const relogioElement = document.querySelector('.relogio');
const iniciarElement = document.querySelector('.iniciar');
const pausarElement = document.querySelector('.pausar');
const zerarElement = document.querySelector('.zerar');

let segundos = 0;
let timer;

function formatarHora(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciarRelogio() {
    relogioElement.classList.remove('pausado');
    clearInterval(timer);
    iniciarContagem();
}

function pausarRelogio() {
    clearInterval(timer);
    relogioElement.classList.add('pausado');
}

function zerarRelogio() {
    relogioElement.classList.remove('pausado');
    clearInterval(timer);
    relogioElement.innerHTML = '00:00:00';
    segundos = 0;
}

function iniciarContagem() {
    timer = setInterval(function () {
        segundos++;
        atualizarRelogio();
    }, 1000);
}

function atualizarRelogio() {
    relogioElement.innerHTML = formatarHora(segundos);
}

document.addEventListener('click', function (evento) {
    const elementoClicado = evento.target;

    if (elementoClicado === iniciarElement) {
        iniciarRelogio();
    }

    if (elementoClicado === pausarElement) {
        pausarRelogio();
    }

    if (elementoClicado === zerarElement) {
        zerarRelogio();
    }
});


