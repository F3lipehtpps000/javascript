const vp  = 0
// vp = Valor Padrão

function add(v) {
    return valor+v
}

var valor = 30
var valor = add(45)
console.log(valor)

// DIVISÃO

function somar(a = vp, b = vp) {
    var res = Number(a + b)
    return res
}

var n1 = 50
var n2 = 25
console.log(somar(n1, n2))