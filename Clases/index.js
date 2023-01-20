/* 
    El paradigma de orientación a objetos plantea que todos los problemas de la vida real pueden y deben ser representados con codigo.

    Dentro de este paradigma, existen las clases que son "templates" o mejor dicho "plantillas/moldes" de objetos de la vida real

    Por ejemplo:
        Supongamos que tenemos una clase llamada auto, por lo tanto esta clase o este molde tendria los siguientes atributos:
            - color
            - motor
            - modelo
            - año
            - puertas
            - ruedas (marca)
            - patente
            - dueño
            - multas
    
    En base a los atributos de mi clase(molde) puedo "instanciar" la clase que es donde defino los valores de los atributos.

    - color: marron
    - motor: 1.6
    - modelo: GT
    - año: 1993
    - puertas: 3
    - ruedas (marca): Pirelli
    - patente: aaa123 (una patente seria el ID de la clase)
    - dueño: Juan
    - multas: No
*/

/* Como utilizar clases en JS */
class Auto {
    constructor(color, motor, modelo, year, puertas, ruedas, patente, owner, multas){
        this.color = color;
        this.motor = motor;
        this.modelo = modelo;
        this.year = year;
        this.puertas = puertas;
        this.ruedas = ruedas;
        this.patente = patente;
        this.owner = owner;
        this.multas = multas;
    }
}

let nuevoAuto = new Auto("marron", "1.6", "GT", "1993", "3 puertas", "Pirelli", "ABC123", "Juan", "No tiene multas")
console.log(nuevoAuto)

/* Por lo tanto podemos decir que un objeto es una instancia de clase */