const fs = require('fs'); //requerimos filesystem para poder escribir/leer.. en el sistema
const colors = require('colors');

//se puede exportar tambien cambiando el let por module.exports.funcion...
let crearArchivo = (base, limite) => {

    return new Promise((reject, resolve) => {

        if (!Number(base)) { //si introducen un número como string lo toma un número igual
            reject(`El valor introducido ${ base } no es un número.`); //se manda por el reject el error
            return; //return vacío para que no continue el codigo
        }

        let ext = ".txt";
        let nomArchivo = "tabla" + base + "-hasta-" + limite + ext;

        let contenido = '';

        for (let i = 1; i <= limite; i++) {
            let mult = base * i;
            contenido += `${base} * ${i} = ${mult}\n`;
        }

        fs.writeFile(`tablas/${ nomArchivo }`, contenido, e => { //fileWrite(archivo,contenido,callback)

            if (e)
                reject(e);
            else
                resolve(`Archivo ${ nomArchivo.green } creado con éxito.`);

        });

    });

}

let listarTabla = (base, limite) => {

    return new Promise((reject, resolve) => {

        let contenido = '======================\n'.green;
        contenido += `Tabla de ${ base } `.green + `(hasta ${ limite })\n`.yellow;
        contenido += '======================\n'.green;

        for (let i = 1; i <= limite; i++) {
            let mult = base * i;
            contenido += `${base} * ${i} = ${mult}\n`;
        }

        if (!Number(base)) { //si introducen un número como string lo toma un número igual
            reject(`El valor introducido ${ base } no es un número.`); //se manda por el reject el error
            return; //return vacío para que no continue el codigo
        } else {
            resolve(contenido);
        }

    });

}

//module es un objeto global donde tendremos las funciones
module.exports = { //con module exports exportamos la funcion para poder utilizarla
    crearArchivo,
    listarTabla
}