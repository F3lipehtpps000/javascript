function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`

    if (hora >= 6 && hora < 12) {
        // BOM DIA!
        foto.src = "Manhã.png"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        foto.src = "Tarde.png"
        document.body.style.background = '#b9846f'
    } else {
     // BOA NOITE!
        foto.src = "Noite.png"
        document.body.style.background = '#515154'
    }
}