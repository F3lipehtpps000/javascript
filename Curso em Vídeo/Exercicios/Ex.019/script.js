var num = [1, 2, 3, 4]
var ind = num.indexOf(3)

/* 
for(var pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 
for(var pos in num) {
   console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

if (ind == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 3 tem o índice ${ind}`)
}