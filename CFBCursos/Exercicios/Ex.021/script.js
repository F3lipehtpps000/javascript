function tempo() {
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    console.log(`${horas}:${minutos}`)
}

for (var ind = 0; ind <= 5; ind++) {
    tempo()
}