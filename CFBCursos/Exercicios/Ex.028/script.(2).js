function* perguntas() {
    const nome = yield 'Qual seu nome?'
    const esposte = yield 'Qual seu esporte favorito?'
    return `Seu nome é ${nome}, e seu espote favorito é ${esposte}.`
}
const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Felipe').value)
console.log(itp.next('Jiu-jitsu').value)