// Siempre al iniciar nuestro .js se declaran los "Require"
// Existen 3 tipos de require

// const fs = require('fs'); // Los que contiene node en su documentacion
// const fs = require('express') // Los expres son expansiones que no son nativas de note desarrolladas por alguien mas
// const fs = require('./fs') // Los que creamos nosotros dentro del proyecto

// let base = 5;
// let data = '';

// for(let i=1; i<=10; i++){
//     data += `${base} * ${i} = ${(i*base)}\n`;
// }

// fs.writeFile(`tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// const multiplicar = require('./multiplicar/multiplicar');
// Si lo importo asi entonces se tendria que poner:
// multiplicar.crearaArchivo(base);

// pero tambien se puede desestructurar:
const {crearArchivo} = require('./multiplicar/multiplicar');

let base = 7;

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));

