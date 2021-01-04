//operadores de comparacion
const resultado1 = 5 === 6 //igualdad estricta
const resultado2 = 5 == '5'//igualdad no estricta, los strings pueden ser iguales a numeros si el valor es el mismo

const resultado3 = 5 !== 5 
const resultado4 = 5 != '5'

//console.log(resultado3, resultado4)

//Operadores or '||', and '&&', not'!'

//control de flujo switch

/*let x = 3
switch(x){
    case 1:
        console.log('caso 1'); break;

    case 2:
        console.log('caso 2'); break;
    
    case 3:
        console.log('caso 3'); break;
    
    default:
        console.log('caso por defecto'); break;
}*/

//ciclo for
/*for(let i = 0; i < 10; i++)
    console.log(i)*/

//acceder a un elemento de un arreglo
const numeros = [1,2,'string',4,5]

for(let i = 0; i < numeros.length; i++)
    console.log(numeros[i])

