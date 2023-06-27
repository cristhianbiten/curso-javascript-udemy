// Factory function 
// Constructor function

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,

        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Cristhian', 'Bitencourt', 1.8, 80);
console.log(p1.nomeCompleto);

