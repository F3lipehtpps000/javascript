var vel = 60
var mul = 25
var mul = mul.toLocaleString('pt-BR', {style: 'currency', currency: "BRL"})
console.log(`A velocidade do seu carro é ${vel} km/h`)
if (vel>60) {
    console.log(`Você ultrapassou o limite de velocidade. MULTADO EM ${mul}`)
}