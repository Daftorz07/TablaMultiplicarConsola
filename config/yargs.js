//---------------------------------------------------------------------
// Configuramos yargs -------------------------------------------------
//---------------------------------------------------------------------
const argv = require('yargs')
    .options('n', {
        alias: 'numero',
        type: 'number',
        demandOption: true,  //Indica que el argumento es obligatorio
        describe: 'Es el numero a multiplicar'
    })
    .check((argv, options) => {
        console.log("Yargs:", argv);
        // Verifica el argumento enviado 
        if (isNaN(argv.n)) {
            throw 'El argumento debe ser un numero'
        }
        return true
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar en consola'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        default : 10,
        describe: 'Hasta que numero se va a multiplicar'
    })
    .argv

// Argumentos de consola YARGS
console.log("Argumentos de consola: ", argv); 

module.exports = argv