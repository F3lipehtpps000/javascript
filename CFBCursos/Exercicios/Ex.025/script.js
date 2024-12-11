const função = function (...valores) {
    var res = 0
    for (V of valores) {
        res += V
    }
    return res
}

console.log(função(25, 50))