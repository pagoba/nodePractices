// Siempre al iniciar nuestro .js se declaran los "Require"
// Existen 3 tipos de require

const fs = require('fs'); // Los que contiene node en su documentacion
// const fs = require('express') // Los expres son expansiones que no son nativas de note desarrolladas por alguien mas
// const fs = require('./fs') // Los que creamos nosotros dentro del proyecto

let crearArchivo = async (base) => {
    let data = '';

    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${(i*base)}\n`;
    }
    
    fs.writeFileSync(`./tablas/tabla-${base}.txt`, data, (err) => {
        if (err){
            throw (err);
        }
        else {
            let archivo = {
                Nombre: `tabla-${base}.txt`
            };
            return 'Archivo creado';
        }
    }); 
}

module.exports = {
    crearArchivo
}