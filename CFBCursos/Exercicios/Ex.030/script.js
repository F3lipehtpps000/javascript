var div1 = document.getElementById('c1')
var div2 = document.getElementById('c2')
var div3 = document.getElementById('c3')
var div4 = document.getElementById('c4')
var div5 = document.getElementById('c5')
var div6 = document.getElementById('c6')

var div$ = [div1, div2, div3, div4, div5, div6]

for (d of div$) {
    console.log(`[ Original: ${d.innerText} ]`)
}

div$.map((e)=>{
    console.log(`[ Original: ${e.innerText} ]`)
})

div1.innerHTML = "HTML 5"
div2.innerHTML = "CSS 3"