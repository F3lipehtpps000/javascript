const timer = document.getElementById('timer')
const iniciar = document.getElementById('iniciar')
const resetar = document.getElementById('resetar')

var timeLeft= 25 * 60
var intervalo

function updadeTimer() {
    const minutos = Math.floor(timeLeft / 60)
    const segundos = timeLeft % 60

    timer.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`

    if (timeLeft === 0) {
        clearInterval(intervalo)
        alert("O tempo acabou. Tenha seu descanço!")
    }
    else {
        timeLeft--
    }
}

iniciar.addEventListener('click', () => {
    if (!intervalo) {
        intervalo = setInterval(updadeTimer, 1000)
    }
})

resetar.addEventListener('click', () => {
    clearInterval(intervalo)
    intervalo = null
    timeLeft = 25 * 60
    timer.textContent = "25:00"
})