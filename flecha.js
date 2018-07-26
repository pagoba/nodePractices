// normal functions 
function sumar (a,b){
    return a+b;
}

function saludar (){
    return 'Hola mundo';
}

function saludar2 (nombre){
    return `Hola ${nombre} eres putito :3`;
}

// functions switched to arrow function
sumarF = (a,b) => a+b;
saludarF = () => 'Hola mundo';
saludar2F = (nombre) => `Hola ${nombre} eres putito con una flecha :D`;


// Printing normal functions:
console.log('Without arrow function: \n', sumar(5,10));
console.log('Without arrow function: \n', saludar());
console.log('Without arrow function: \n', saludar2('Sergio'));

// Printing arrow functions:
console.log('With arrow function: \n', sumarF(5,10));
console.log('With arrow function: \n', saludarF());
console.log('With arrow function: \n', saludar2F('Sergio'));




