const imprimirResultado = function(nota)
{
    switch (Math.floor(nota))
    {
        // entra no case se a nota for 10 ou 9 
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(5.5)
imprimirResultado(11)