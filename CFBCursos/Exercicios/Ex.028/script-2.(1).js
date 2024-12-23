const cursos=["HTML", "CSS", "JavaScript", "Python"]
var cur = cursos.map((el, i) => {
    return `<div>${el}</div>`
})

console.log(cur)