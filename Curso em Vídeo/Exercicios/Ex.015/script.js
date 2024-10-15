function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 18) {
                // Criança
                img.setAttribute('src', 'Homem criança.png')
            } else if ( idade >= 18 && idade < 50) {
                // Adulto/jovem
                img.setAttribute('src', 'Homem jovem.png')
            } else {
                // Idoso/velhor
                img.setAttribute('src', 'Homem velho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 18) {
                // Criança
                img.setAttribute('src', 'Mulher criança.png')
            } else if ( idade >= 18 && idade < 50) {
                // Adulto/jovem
                img.setAttribute('src', 'Mulher jovem.png')
            } else {
                // Idoso/velho
                img.setAttribute('src', 'Mulher velha.png')
            }
        }
        res.style.textAlign = 'center'
        var sres = document.getElementById('foto')
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}