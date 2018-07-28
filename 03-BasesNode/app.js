// Siempre al iniciar nuestro .js se declaran los "Require"
// Existen 3 tipos de require

const fs = require('fs'); // Los que contiene node en su documentacion
// const fs = require('express') // Los expres son expansiones que no son nativas de note desarrolladas por alguien mas
// const fs = require('./fs') // Los que creamos nosotros dentro del proyecto

let base = 2;

for(let i=1; i<=10; i++){
    console.log(`${base} * ${i} = ${(i*base)}`);
}