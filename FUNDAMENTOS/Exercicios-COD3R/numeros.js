const peso01 = 1
const peso02 = 2

console.log(Number.isInteger(peso01))
console.log(Number.isInteger(peso02))

const nota_portugues = 8.75
const nota_matematica = 7.6
const nota_historia = 6.5

const total = nota_portugues * peso01 + nota_matematica * peso02 
const media = total / (peso01 + peso02)

console.log(media)
console.log(media.toFixed(3))
//  .Tofixed serve para limitar o numero de casas decimais
console.log(media.toString(2))
// ja o .ToString serve para mudar o numero para binario
