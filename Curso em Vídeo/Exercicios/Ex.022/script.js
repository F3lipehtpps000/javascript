var amigo = {Nome: "Joâo",
    Idade: "14",
    Sexo: "M",
    Peso: 54.5,
    Engordar(x=0) {
        console.log('Engordou')
        this.Peso += x
    }
}
amigo.Engordar()
console.log(`${amigo.Nome} pesa ${amigo.Peso}`)