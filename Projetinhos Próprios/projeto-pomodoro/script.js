var data = new Date()
var horas = data.getHours()
var minutos = data.getMinutes()

var timer = document.getElementById('timer')
timer.innerText = `${horas}:${minutos}`