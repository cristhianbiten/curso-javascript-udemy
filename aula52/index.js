const nome = 'Cristhian';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Bitencourt';
    falaNome();
}

usaFalaNome();