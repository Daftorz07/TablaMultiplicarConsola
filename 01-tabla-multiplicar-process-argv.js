

//Funcion para crear el archivo
const {crearArchivo} = require('./helpers/multiplicar')

//Limpiar consola
//console.clear()

//TODO: Forma de extraer argumentos de consola: process.argv
//Leer argumentos de consola
console.log(process.argv); // Identifica los argumentos de consola
const [, , arg3 = 'numero=5'] = process.argv // Obtiene el argumento de consola 
const [ , numero = '5'] = arg3.split('=') // Extrae el valor del argumento de consola

//Tabla de Multiplicar
//const numero = 5

//Llamamos a la funcion
crearArchivo(numero)
    .then(nombreArchivo => {
        console.log(nombreArchivo, "= Archivo creado")
    })
    .catch(err => {
        console.log("Catch: =>", err)
    })