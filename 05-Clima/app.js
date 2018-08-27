const place = require ('./place/place');
const weather = require ('./weather/weather.js');

const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'City address to get weather',
        demand: true
    }
}).argv;

// place.getPlaceLatLng(argv.address)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// weather.getWeather(40.4167754,-3.7037902)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

let getInfo = async (address) => {
    try {
        let coors = await place.getPlaceLatLng(address);
        let temp = await weather.getWeather(coors.lat, coors.lng);
        return `The weather in ${coors.address} is ${temp}`;
    } catch (e) {
        return `It was not possible to determine weather in ${address}`
    }
    
}

getInfo(argv.address)
    .then(message => console.log(message))
    .catch(e => console.log(e));