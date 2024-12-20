function* contador() {
    var ind=0
    while(true) {
        yield ind++
        if (ind>5) {
            break
        }
    }
}
const itc = contador()
for (con of itc) {
    console.log(con)
}