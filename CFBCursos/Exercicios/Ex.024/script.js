function somar(...valores) {
    var res = 0
    for(var V of valores) {
        res += V
    }
    return res
}

console.log(somar(40, 40, 40))