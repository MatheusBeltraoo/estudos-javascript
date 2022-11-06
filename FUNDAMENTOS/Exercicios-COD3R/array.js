const valores = [1, 2, 5, 6.8, 7.0, 4.7, 2.5]
console.log(valores[8], valores[4])

valores[7] = 11
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'testando')
console.log(valores)