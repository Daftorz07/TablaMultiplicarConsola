# Generador de Tablas de Multiplicar en Consola

Esta es una aplicación desarrollada en Node.js que se ejecuta desde la consola.
El propósito de la aplicación es generar un archivo `.txt` que contiene la tabla de multiplicar de un número pasado como parámetro.
Los resultados se personalizan con colores y el manejo de parámetros se realiza utilizando la librería `yargs`.

## Características

- Genera la tabla de multiplicar de un número especificado.
- Personaliza las salidas en la consola usando colores.
- Permite especificar la ruta donde se guardará el archivo de salida.
- Uso de `writeFileSync` para crear el archivo de forma sincrónica.

## Opciones

```
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -n, --numero   Es el numero a multiplicar                 [número] [requerido]
  -l, --listar   Muestra la tabla de multiplicar en consola
                                                     [booleano] [defecto: false]
  -h, --hasta    Hasta que numero se va a multiplicar     [número] [defecto: 10]
```
