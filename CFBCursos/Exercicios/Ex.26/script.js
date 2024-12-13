/* 
    const somar = function (...valores) {
        var V1 =  0
        for (V2 of valores) {
            V1 += V2
        }
        return V1
    }
*/
const somar = (...valores) => {
        var V1 =  0
        for (V2 of valores) {
            V1 += V2
        }
        return V1}
console.log(somar(5, 5, 5, 5, 5))