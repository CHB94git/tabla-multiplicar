const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'limite',
        type: 'number',
        default: 10,
        describe: 'Es el límite númerico hasta donde deseas multiplicar'
    })
    .option('m', {
        alias: 'mostrar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en la consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b) && isNaN(argv.l)) {
            throw 'La base y el límite deben ser un número!'
        }
        return true
    })
    .argv;


module.exports = argv