/*
var num = 0
var max = 1000

while (num < max) {
    console.log(`Olá, mundo! [${num}]`)
    if (num >= 10) {
        break
    }
    num++
}
*/

var num = 0
var max = 1000
var pars = 0

for(var ind=num; ind < max; ind++) {
    console.log(`Olá, mundo! [${ind}]`)
    if(ind%2==0) {
        continue
    }
    pars++
}
console.log(`Quantidade de pares: ${pars}`)
console.log(`Adeus, mundo!`)