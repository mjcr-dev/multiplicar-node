const opts = {
    base: {
        demand: true, //requerido
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs').command('listar', 'Imprime las tablas de multiplicar', opts) //como se repite los atributos podemos guardarlo en un objeto fuera y lo ponemos dos veces sin que sea redundante
    .command('crear', 'Almacena en un texto las tablas de multiplicar', opts)
    .help() //crea una ayuda automática
    .argv;

module.exports = {
    argv
}