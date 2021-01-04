//console.log('hola mundo')

//Tipos de datos en JS
//String, se puede usar comillas simple o dobles
//Boolean: true o false
//Null
//Numbre
//Undefined
//Object: es un objeto o estructuras q agrupan tipo de datos

//Para definir variables
//var
//let
//const

let miPrimeraVariable = 'mi primera variable!!!'
//console.log(miPrimeraVariable);

//Mutabilidad
miPrimeraVariable = 'esto ha cambiado'
//console.log(miPrimeraVariable);

//boolean
let miBoolean = true
let miOtroBoolean = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -256

//console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable)

//let undef
//consolo.log(undef)

let nulo = null
//console.log('nulo', 12, nulo)

//objeto vacio
const miPrimerObjeto = {}

//objeto son agrupaciones de datos que tienen sentido entre si
const miObjeto = {
    //los objetos tienen propiedades
    unNumero: 12,
    unString: 'esta cadena de caracteres',
    unaCondicion: true,
}
console.log(miObjeto.unString);

//arreglo
const arrVacio = []
const arr = [1, 2, 'hola', 'mundo', miObjeto]
//console.log(arrVacio, arr)

arrVacio.push(5)//agrega el elemento al final
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('hola')
arrVacio.push(miPrimeraVariable)
console.log(arrVacio);