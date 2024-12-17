const soma = (...valores) => {
    const somar = val => {
        var res = 0
        for (V of val)
            res+=V
        return res
    }
    return somar(valores)
}
console.log(soma(5, 10, 15))