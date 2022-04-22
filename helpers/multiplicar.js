const fs = require('fs')

const colors = require('colors')


async function tablaMultiplicar (base, limite = 10, listar = false) {
    try {
        let salida = ''
        let salidaConsola = ''

        for (let i = 1; i <= limite; i++) {
            const resultado = base * i
            salida += `${base} x ${i} = ${resultado}\n`
            salidaConsola += colors.blue(`${base} ${'x'.green} ${i} ${'='.green} ${resultado}\n`)
        }
        if (listar) {
            console.log('======================================'.yellow)

            console.log(colors.rainbow(`${'     TABLA DE MULTIPLICAR DEL:'} ${base}`))

            console.log('======================================'.yellow)
            console.log(salidaConsola)
        }

        fs.writeFileSync(`./tablasGeneradas/tabla-del-${base}.txt`, salida)

        return `Archivo tabla-${base}.txt`
    } catch (error) {
        throw (error)
    }

}

module.exports = {
    tablaMultiplicar
}
