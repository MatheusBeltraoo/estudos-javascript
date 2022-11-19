const expressao = 'OPAAAA'  //contexto léxico 1


function expre() {               //contexto léxico 2
    const expressao = 'FALAAA'
    return expressao
}

// Objetos sao grupos aninhados de pares nome/valor 

const cliente = {
    nome: 'Matheus',
    idade: 20,
    peso: 74.2,
    celular: 82998100133,
    endereco: {
        Logradouro: 'Rua perimetral #',
        numero: 456
    }
}

console.log(expressao)
console.log(expre())
console.log(cliente)