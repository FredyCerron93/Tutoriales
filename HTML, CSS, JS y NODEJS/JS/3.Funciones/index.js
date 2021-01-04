/*function iterar(arg1){
    for(let i = 0; i < numeros.length; i++)
        console.log(arg1[i]);
}

const numeros = [1,2,'string',4,5]
const nombres = ['pedro','juan','string','fredy','kien sea']

iterar(numeros)
iterar(nombres)*/

function suma(a, b){
    return a + b
}

const resultaSuma1 = suma(1,2)
const resultaSuma2 = suma(5,6)
const resultaSuma3 = suma(resultaSuma1, resultaSuma2)
//console.log('Resultado', resultaSuma3)

//CallBACK
function sumar(a, b, cb){
    const r = a + b
    cb(r + 5)
}

function CallBACK(result){
    console.log('resultado', result)
}

//sumar(2, 3, CallBACK)

//Fat arrow function
const miFatArrowFunction = (a, b) => a + b
const otraFAF = (a, b) => {
    return a + b
}
const r = otraFAF(4, 5)
//console.log(miFatArrowFunction(1, 3))

//Funciones Anonimas
sumar(2, 9, function(r){
    console.log('esta es una funcion anonima y el resultado es: ', r)
})