const cursosTodos = [...document.getElementsByClassName('curso')]
const cursoC1 = [...document.getElementsByClassName('c1')]
const cursoC2 = [...document.getElementsByClassName('c2')]
const cursoC3 = [...document.getElementsByClassName('c3')]
const cursoPremium = document.getElementsByClassName('curso')[2]

console.log(cursosTodos)
console.log(cursoC1)
console.log(cursoC2)
console.log(cursoC3)
console.log(cursoPremium)

cursoC3.map((el, i) => {
    el.classList.add("destacado")
})