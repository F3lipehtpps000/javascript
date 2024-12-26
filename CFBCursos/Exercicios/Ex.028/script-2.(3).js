const el = document.getElementsByTagName(`div`)
const val = Array.prototype.map.call(el, ({innerText}) => innerText)

console.log(val)