let empleados = [
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

let getEmpleado = (id) => 
{
    return new Promise
    ((resolve, reject) => 
        {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con el id: ${id}`)
        } else {
            resolve(empleadoDB);
        }
        }
    )
};

getEmpleado(1).then(empleado=>{
    console.log('Empleado de la DB: ', empleado);
},(err)=>{
    console.log(err);
});

