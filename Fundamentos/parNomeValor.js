// par nome/valor
const saudacao = 'Opa! bao!?' // contexto lexico 1

function exec()
{ 
    const saudacao = 'Fala viado!!' // contexto lexico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor
const Carro = 
{
    modelo: 'Fusca',
    marca: 'Volksvagem',
    preco: 13500.00
}

console.log(saudacao)
console.log(exec())
console.log(Carro)