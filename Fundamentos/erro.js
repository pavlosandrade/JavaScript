function tratarErro(erro)
{
    //throw new Error('...')
    throw 'erro de sintaxe'
}

function imprimirNome(obj)
{
    try
    {
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e)
    {
        tratarErro(e)
    }finally
    {
        console.log('final')
    }
    
}

const obj = 
{
    nome: 'Pavlos'
}
imprimirNome(obj)