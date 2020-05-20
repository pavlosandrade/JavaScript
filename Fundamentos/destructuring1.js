// Novo recurso do ES2015
const carro = 
{
    Modelo: 'Fusca',
    Marca: 'Volkswagem',
    Preco: 13500.00,
    Codigos:
    {
        chassi: 123456798,
        motor: 35254
    }
}

const { Modelo, Marca} = carro
console.log(Modelo, Marca)

const {Codigos: {chassi, motor}} = carro
console.log(chassi, motor)
