var colocação = 6

switch (colocação) {
    case 1:
        console.log(`Primeiro Lugar`)
        break
    case 2:
        console.log(`Segundo Lugar`)
        break
    case 3:
        console.log(`Terceiro Lugar`)
        break
    case 4: case 5:
        console.log(`Prémio de participação`)
        break
    default:
        console.log(`Fora do pódio`)
        break
}