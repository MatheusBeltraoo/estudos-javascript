// Armazenando uma FUNÇÃO em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(15, 5)

// Armazenando uma funçao arrow=(=>) substitui o function em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 5))

// Retorno implicito tipo em ruby, nao e necessario colocar o return

const subtracao = (a, b) => a - b

console.log(subtracao(8, 3))