
const Player1 = {Nome: "Joshua", Stamina: 95, Vidas: 2, Mana: 100}

const Player2= {Nome: "Rodrigo", Stamina: 70, Vidas: 4, Speedboost: `${10}%`}

const Player3 = {...Player2,...Player1}

console.log(Player3)


const soma=(v1, v2, v3)=>{
    return v1+v2+v3
}

console.log(soma(100, 20, 3))

var valores = [300, 20, 1]

console.log(soma(...valores))