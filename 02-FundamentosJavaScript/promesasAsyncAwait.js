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

let getEmpleado = async (id) => 
{
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error (`No existe un empleado con el id: ${id}`)
    } else {
        return empleadoDB;
    }
};

let getSalario = async (empleado) =>
{
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if( !salarioDB ){
        throw new Error (`El usuario ${empleado.nombre} no tiene salario :c es UN PUTO POBRE`);
    } else{
        let newEmpleado =
            //regresa un objeto
            {
                nombre: empleado.nombre,
                salario: salarioDB.salarios,
                id: empleado.id
            }
        return newEmpleado;
        }
}

// funcion que encadena las 2 funciones
let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `El usuario con el id: ${resp.id} cuyo nombre es: ${resp.nombre} tiene un salario de: $${resp.salario}`;
}

// manda a llamar a la funcion getInformacion
getInformacion(10)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));



