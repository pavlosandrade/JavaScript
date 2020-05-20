console.log(Math.ceil(6.1))

const Carro = {}
Carro.Modelo = 'Fusca'
Carro['Marca'] = 'Volkswagem'
console.log(Carro)

function Carro(modelo)
{
    this.modelo = modelo
}

const Carro1 = new Carro('Fusca')
console.log(Carro1.modelo)