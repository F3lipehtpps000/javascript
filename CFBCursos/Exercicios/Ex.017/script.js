/*
var num = 0

while (num <= 10) {
    console.log(`${num}`)
    num++
}
*/

// 5! = 5*4*3*2*1 = 120

var num = 5
var fat = 1

while (num >= 1) {
    fat *= num
    num--
}

console.log(`${fat}`)