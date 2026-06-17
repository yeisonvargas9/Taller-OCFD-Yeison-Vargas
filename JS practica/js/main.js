// 1. Creación de nuestro primer objeto: La Persona
// Definimos el objeto persona con sus propiedades básicas y su método
const persona = {
    nombre: "Juan",
    edad: 23,
    altura: 1.68,
    peso: "60 kg",
    
    // 2. Agregando comportamiento: Métodos en el objeto
    caminar() {
        console.log("Estoy caminando");
    }
};

// Mostramos el objeto completo en la consola
console.log(persona);

// Llamamos al método usando el punto (.)
persona.caminar();


// 3. Transformación de datos: De Objeto a JSON
// Convertimos nuestro objeto vivo a una cadena de texto JSON
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);


// 4. Organizándolo todo: Arreglos de Objetos
// Creamos una colección de empleados usando objetos dentro de un arreglo
const listaEmpleados = [
    { nombre: "Juan Pérez", apellido: "López" },
    { nombre: "Ana", apellido: "González" },
    { nombre: "Pedro", apellido: "Sánchez" }
];
console.log(listaEmpleados);


// 5. Herramientas de búsqueda: indexOf() y find()
// 5.1. Búsqueda de posición con indexOf()
const frutas = ["Manzana", "Banana", "Naranja"];

// Buscamos en qué posición está la "Manzana"
const posicionManzana = frutas.indexOf("Manzana");
console.log(posicionManzana);


// 5.2. Búsqueda por condición con find()
const edades = [25, 30, 18, 15];

// Buscamos el primer elemento que sea menor a 20 años
const primerMenor = edades.find(edad => edad < 20);
console.log(primerMenor);
