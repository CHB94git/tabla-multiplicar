const { tablaMultiplicar } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors')

console.clear()

tablaMultiplicar(argv.b, argv.l, argv.m)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creada correctamente'))
    .catch(err => console.log(err))


