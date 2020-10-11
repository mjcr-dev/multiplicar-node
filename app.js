const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
// ó const argv = require('./config/yargs').argv;

//let base = 2;

let comando = argv._[0];

switch (comando) {

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(archivo); })
            .catch(e => {
                console.log(e);
            });

        break;

    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(contenido => { console.log(contenido); })
            .catch(e => {
                console.log(e);
            });

        break;

    default:
        console.log(`No se reconoce el comando ${ comando }`);

}