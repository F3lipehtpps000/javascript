var cursos = document.getElementsByClassName('curso')
var btnCopiar = document.getElementById('btn_cop')
var caixa1 = document.getElementById('caixa1')
var caixa2 = document.getElementById('caixa2')

function selecionar() {
    this.classList.toggle('destaque')
}

for (var i = 0; i < cursos.length; i++) {
    cursos[i].addEventListener('click', selecionar)
}

btnCopiar.addEventListener('click', function() {
    var operacao = this.classList.contains('destaque')
    if (operacao = true) {
        console.log('Aaarrrrhhhggg')
    } else {
        var selecionados = document.querySelectorAll('.destaque')
        selecionados.forEach(function(el) {
            caixa2.appendChild(el)
            el.classList.remove('destaque')
        })
    }
})