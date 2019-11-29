'use strict'

console.log('Hola mundo')
let x
x = 23
x = 'Pepe'
x = true
console.log(x)

const y = 34
console.log(y)

const obj = {user: 'Pepe', edad: 34}
const amigos = ['Juan', 'Rosa']
obj.edad = 35
// obj = 34 -> Error
amigos.push('Raul')
amigos[0]

//////////////////////// Funciones

// declarar
function algo(a = 0, b = 0) {}

// asignar

const otra = function (a = 0, b = 0) {
    console.log(a+b)
}
otra.propiedad = 'Cosa rara'

otra(2)
console.log(otra.propiedad)

// funciones arrow (lambdas)

const unaMas = () => {}
// const cuadrado = (a) => {return a*a }
const cuadrado = a => a*a

const verCuadrado = a => console.log(a*a)

setTimeout(() => console.log(cuadrado(5)), 2000)
//setTimeout( verCuadrado, 2000)
setTimeout(() => {verCuadrado(55)}, 3000)

const data = [3, 6, 2, 9, 4, 6]
// const dataCuadrados = []


// Ambitos en ES6

{
    let v1 = 34    
}
// console.log(v1) daria un error


// ES6
/* 
for (const item of data) {
    dataCuadrados.push(item*item)
}
 */

// data.forEach( item => dataCuadrados.push(item*item))

const dataCuadrados = data.map( item => item*item )

const dataPares = dataCuadrados.filter( item => !(item%2))

const sumaTotal = dataPares.reduce( (a, b) => a+b )


 console.log(data, dataCuadrados, dataPares, sumaTotal)

 // ES6 'template strings' 

 let name = 'Pepe'
 const cadena = `Template 
 string : ${name}`

 name = 'Maria'

 console.log(cadena)

 const media =  (...aDatos) => {
    return aDatos.reduce( (a,b) => a+b) / aDatos.length
 }

 console.log(media(2, 4, 6, 7))

 // Clonado de objetos

 const obj1 = {user: 'Pepe', clave: {id: 23, dpto: 1}}
 //const obj2 = Object.assign({}, obj1)
 //const obj2 = {...obj1}
 const obj2 = JSON.parse(JSON.stringify(obj1))
 obj2.user = 'Juan'
 obj2.clave.id = 0
 console.log(obj1)
 console.log(obj2)

 const numbers = [4, 5, 6, 7]
 const clonNumbers = [...numbers]
 clonNumbers.push(12)
 console.log(numbers, clonNumbers)

 let hoy = new Date()
 console.log( hoy)



 