var n = []
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var val = document.getElementById('txtn')

function isNumero(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(num, lis) {
    if (lis.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(val.value) && !inLista(val.value, n)) {
        n.push(Number(val.value))
        var item = document.createElement('option')
        item.text = `Valor ${val.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert(`[ERROR!] Número inválido ou já adicionado.`)
    }
    val.value = ''
    val.focus()
}

function finalizar() {
    if (n.length == 0) {
        alert('[ERROR!] Adicione valores antes de começar!')
    } else {
        var tot = n.length
        var maior = n[0]
        var menor = n[0]
        var soma = 0
        var media = 0
        for (var pos in n) {
            soma += n[pos]
            if (n[pos] > maior)
                maior = n[pos]
            if (n[pos] < menor)
                menor = n[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} valores cadastrados <p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>A soma dos valores é igual a ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados ${media.toFixed(2)}</p>`
    }
}