let num = []
n = 3
num.push (n) // adiciona um valor no vetor
num.push (5)
num.sort() // coloca os valores em ordem crescente
console.log (num)
console.log (`O vetor tem ${num.length} posições`)
console.log (`O primeiro valor é ${num[0]}`)
var pos = num.indexOf (8)
if (pos == -1) { 
    console.log ('Valor não encontrado')
} else {
    console.log (`O valor esta na posição ${pos }`)
}
