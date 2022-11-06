const a = {nome:"carai!!!"}

console.log(a)

const b = a 

console.log(b)

b.nome = "boba da peste"
// mesmo tendo atribuido a B por ele estar pegando a referencia na memoria de A os 2 mudam

console.log(a)
console.log(b)

const x = 4

console.log(x)

let y = x
y++

console.log(y)