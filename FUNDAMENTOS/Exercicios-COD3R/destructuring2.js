const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 8 , 5, 6]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8] , [9, 6, 7]]
console.log(nota)