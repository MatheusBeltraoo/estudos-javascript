// é um conceito de JS que faz o "içamento" da váriavel ou seja mesmo que eu declare a variavel depois ela vai ser lida antes nao seguindo exatamente a ordem de cima para baixo em let isso nao ocorre

console.log('o valor do produto X e :', x) //= undefined isso acontece por que a variavel nao teve valor declarado mas ela ja foi criada

var x = 12000

console.log('o valor do produto X e:', x)

//------------------------------------------------------------------\\

console.log('o valor do produto Y e :', y)

let y = 15000

console.log('o valor do produtos Y e :', y)