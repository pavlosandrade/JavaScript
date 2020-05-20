//variavel sera global, sera visivel em todo lugar
{
    {
        {
            {var sera = 'Sera???'}
        }
    }
}
console.log(sera)

//variavel local
function teste()
{
    var local = 123
}
teste()
// nao sera visivel fora do escocpo da funcao
console.log(local)