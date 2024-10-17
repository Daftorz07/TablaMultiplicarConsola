
//Funcion para crear el archivo
const { crearArchivo } = require('./helpers/multiplicar')
const argv  = require('./config/yargs')
const colors = require('colors')

//Limpiar consola
console.clear()

//console.log("Argumentos de consola: ", argv); 

// Argumentos de consola YARGS
const numero = argv.n
const listar = argv.l
const hasta = argv.h

//---------------------------------------------------------------------
// Ejecucion Tabla de Multiplicar -------------------------------------
//---------------------------------------------------------------------
crearArchivo(numero, listar, hasta)
    .then(nombreArchivo => {
        console.log(nombreArchivo.gray, "= Archivo creado".rainbow)
    })
    .catch(err => {
        console.error("Catch: =>", err)
    })
