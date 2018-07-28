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

let getSalario = (empleado) =>
{
    return new Promise(
        (resolve, reject) => {
            let salarioDB = salarios.find(salario => salario.id === empleado.id);
            if( !salarioDB ){
                reject(`El usuario ${empleado.nombre} no tiene salario :c es UN PUTO POBRE`);
            } else{
                resolve(
                    //regresa un objeto
                    {
                        nombre: empleado.nombre,
                        salario: salarioDB.salarios,
                        id: empleado.id
                    }
                );
            }
        }
    )
}

getEmpleado(1).then(empleado=>{
    return getSalario(empleado);
})
.then(
    resp => {
        console.log(`id: ${resp.id}\nnombre: ${resp.nombre}\nsalario: ${resp.salario}`);
        //console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    }
)
.catch(e => {
    console.log(e);
}
);
