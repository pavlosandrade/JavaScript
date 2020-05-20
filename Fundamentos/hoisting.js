//conceito de içamento
console.log('a = ', a)
var a = 2
console.log('a = ', a)

function teste()
{
    console.log('a = ', a)
    var a = 5
    console.log('a = ', a)
}
teste()

//içamento nao funciona com let
console.log('b = ', b)
let b = 3
console.log('b = ', b)