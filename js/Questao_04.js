class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        let nomeCompleto = this.primeiroNome + " " + this.segundoNome;
        return nomeCompleto;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        if (this.media() > 6) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}

var alunos = new Array(5);
alunos[0] = new Aluno("Soraya", "Gomes", 6, 8);
alunos[1] = new Aluno("Mari", "Vitoria", 10, 8);
alunos[2] = new Aluno("Amanda", "Maciel", 7, 8);
alunos[3] = new Aluno("Gustavo", "Maximo", 5, 3);
alunos[4] = new Aluno("Gesilda", "Gomes", 6, 7);

for (var i = 0; i < 5; i++) {
    alert("Nome completo: " + alunos[i].nomeCompleto() + "\nMédia: " + alunos[i].media() + "\nSituação: " + alunos[i].situacao());
}
