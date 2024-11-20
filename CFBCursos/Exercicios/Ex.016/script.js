const objs = document.getElementsByTagName('div')

for (o of objs) {
    console.log(o.innerHTML = "Curso")
}

for (o in objs) {
    console.log(objs[o].innerHTML)
}

/*

var num = [10, 20, 30, 40, 50]

for (n in num) {
     console.log(`${num[n]}`)
}

// [...] É igual a:

for (var ind = 0; ind < num.length; ind ++) {
    console.log(`${num[ind]}`)
} 
*/