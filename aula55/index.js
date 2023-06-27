// IIFE -> Immediately Invoked Function Expression
(function() {

    const sobrenome = 'Bitencourt';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Cristhian'));
    }

    falaNome();
    
})(); // IIFE
