var valores = [6,5,1,7,9,3]
console.log(valores)
valores.sort()
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)  
}
*/
for (let pos in valores) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}