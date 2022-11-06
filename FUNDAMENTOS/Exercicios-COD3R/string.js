const escola = "Doidera"

console.log(escola.charAt(4))
// .charAt serve para escolher a posiçao do elemento na string
console.log(escola.charCodeAt(3))
// .charCodeAt serve para buscar o codigo unicode do elemento escolhido
console.log(escola.indexOf('i'))
// .indexOf serve para saber em qual posiçao o elemento esta na string
console.log(escola.substring(1))
console.log(escola.substring(1,3))
// .substring serve para voce escolher a partir de qual elemento sera impresso em diante
console.log('Escola' .concat(escola) .concat("!"))
console.log('escola' + escola + ("!"))
// .concat serve para concatenar a string e quando for apenas string o + pode ser usado para concatenar 
console.log(escola.replace('e','oooooo'))
// .replace serve para trocar um elemento nesse exemplo acima troquei o 'e' por 'oooooo'
console.log("Leticia,Matheus,Lucas,Enzo".split(','))
// .split serve para pegar as strings e transformalas em array