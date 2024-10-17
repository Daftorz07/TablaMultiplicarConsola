
//Pauete File System para manipular archivos y directorios
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (numero, listar, hasta = 10) => {

    try {

        let salidaConsola, salidaArchivo = "";
        let titulo = `Tabla de Multiplicar del: ${numero}`;

        for (let i = 1; i <= hasta; i++) {
            salidaArchivo += (`${numero} x ${i} = ${i * numero} \n`)
            salidaConsola += (`${colors.yellow(numero)} ${colors.gray('x')} ${colors.blue(i)} ${colors.gray('=')} ${colors.red(i * numero)} \n`)
        }

        //Mostrar tabla de multiplicar por consula
        if (listar) {

            console.clear();

            console.log("================================".grey);
            console.log(titulo.grey);
            console.log("================================".grey);

            console.log(salidaConsola);
        }

        const rutaSalida = `./archivos/tabla-${numero}.txt`;

        //Crear archivo de texto con la tabla de multiplicar
        fs.writeFileSync(rutaSalida, (titulo + "\n" + salidaArchivo))

        return `Tabla-${numero}.txt`

    } catch (error) {

        throw error;
    }
}

//Exportando el modulo para usarlo en otros archivos
module.exports = {
    crearArchivo
}