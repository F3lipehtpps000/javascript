function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    this.dados_anonimos = function() {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 1000)
    }
}

const  alu = new aluno("Adriano", 3.5)
alu.dados_anonimos()