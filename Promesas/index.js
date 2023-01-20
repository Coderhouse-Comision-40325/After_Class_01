/* 
    Promesa:
        es un objeto especial que nos permitira encapsular una operación, la cual reaccionara a dos posibles situaciones dentro de una promesa.

    Responde a:
        ¿Qué deberia hacer si la promesa se cumple?
        ¿Qué deberia hacer si la promesa no se cumple?

    Una promesa tiene estados y son los siguientes:
        - Fulfilled (se cumplio) (Tenemos que pensar en "si se cumplio ENTONCES hace esto")
        - Rejected (No se cumplio)
    
    Podemos decir que los estados de una promesa funcionan muy similar al mundo real, porque cuando prometes algo no sabemos cuando se va a cumplir, sin embargo cuando llega el momento se nos notifica si la promesa se cumplio (fulfilled) o fue rechazada (rejected)
*/

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject('No se puede dividir por 0')
        } else {
            resolve(dividendo/divisor)
        }
    }
)}

dividir(6,0) // Con 0 en el segundo parametro da error y con cualquier otro entero no y se cumple la condición
    .then(resultado => {
        console.log(resultado)
    })
.catch(error => {
    console.log(error)
})