/**
 * Async Await
 */

 let getNombre = async() => {
     //Si queremos disparar el error entonces agregamos:
     // throw new Error ('No existe un nombre  para ese usuario');
     return 'Fernando';
 };

 // async regresa una promesa. Entonces sto es la misma wea que si pusieramos:
//  let getNombre = () => {
//      return new Promise( (resolve, reject)=>{
//          resolve('Fernando');
//      })
//  }

//  getNombre().then(
//      nombre => {
//          console.log(nombre);
//      }
//  )
//  .catch(e => {
//      console.log(e);
//  })

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`
}

saludo().then(mensaje =>
console.log(mensaje)
);
