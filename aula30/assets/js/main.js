const h1 = document.querySelector('.container h1');
const data = new Date();

function getMesTexto(mes) {
    let mesTexto;

    switch (mes) {
        case 0:
            mesTexto = 'janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'março';
            return mesTexto;
        case 3:
            mesTexto = 'abril';
            return mesTexto;
        case 4:
            mesTexto = 'maio';
            return mesTexto;
        case 5:
            mesTexto = 'junho';
            return mesTexto;
        case 6:
            mesTexto = 'julho';
            return mesTexto;
        case 7:
            mesTexto = 'agosto';
            return mesTexto;
        case 8:
            mesTexto = 'setembro';
            return mesTexto;
        case 9:
            mesTexto = 'outubro';
            return mesTexto;
        case 10:
            mesTexto = 'novembro';
            return mesTexto;
        case 11:
            mesTexto = 'dezembro';
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function getDiaDaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const diaSemana = data.getDay();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();

    const diaSemanaTexto = getDiaDaSemanaTexto(diaSemana);
    const mesTexto = getMesTexto(mes);
    const horaZeroAEsquerda = zeroAEsquerda(hora);
    const minutoZeroAEsquerda = zeroAEsquerda(minuto);

    return `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${horaZeroAEsquerda}:${minutoZeroAEsquerda}`;

}

function atualizaData() {
    h1.innerHTML = formataData(data);
}

atualizaData();

//opção sem switch case
//h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
