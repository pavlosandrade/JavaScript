function rand({min = 0, max = 10})
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 0, min: 10}
console.log(rand(obj))
