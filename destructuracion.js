let deadpool = {
    nombre:'Wade',
    apellidos: 'Winston',
    poder: 'Regeneracion',
    getNombre: function (){
        return `${ this.nombre } ${ this.apellidos } - poder: ${ this.poder }`;
    }
}; 

    // let nombre = deadpool.nombre;
    // let apellidos = deadpool.apellidos;
    // let poder = deadpool.poder;
    // Instead of doing in this way we can create an destru.. function as follows:
     let {nombre,apellidos,poder} = deadpool;

    console.log(nombre, apellidos, poder);

