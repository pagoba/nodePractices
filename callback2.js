let empleados =[
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Maria'
    },
    {
        id: 3,
        nombre: 'Puto'
    }
];

let salarios = [
    {
        id: 1,
        salarios: 1000
    },
    {
        id: 2,
        salarios: 2000
    }
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id);
    if( !empleadoDB ){
        callback(`No existe un empleado con el id: ${id}`)
    } else{
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback)=>{
    id = empleado.id;
    let salarioDB = salarios.find(salario => salario.id === id);
    if( !salarioDB ){
        callback(`El usuario ${empleado.nombre} no tiene salario :c es UN PUTO POBRE`);
    } else{
        callback(null, salarioDB);
    }
}

// getEmpleado(buscarID, (err, empleadoDB) => {
//     if(err){
//         return console.log(err);
//     } 
//     console.log(`Usuario Si existe en la db\nEl usuario con id: ${empleadoDB.id} es ${empleadoDB.nombre}`);
//     getSalario(empleadoDB, (err, salarioDB)=>{
//         if(err){
//             return console.log(err);
//         }
//         console.log(`El usuario ${empleadoDB.nombre} con id: ${empleadoDB.id} tiene un salario de: ${salarioDB.salarios}`);
//     });
// });


let buscarDB = id =>{
//     getSalario(getEmpleado(id));
    getEmpleado(id, (err, empleadoDB) => {
        if(err){
            return console.log(err);
        } 
        // console.log(`Usuario Si existe en la db\nEl usuario con id: ${empleadoDB.id} es ${empleadoDB.nombre}`);
        getSalario(empleadoDB, (err, salarioDB)=>{
            if(err){
                return console.log(err);
            }
            return console.log(`Id : ${empleadoDB.id}\nNombre : ${empleadoDB.nombre}\nSalario : ${salarioDB.salarios}`);
        });
    });
}

buscarDB(2);