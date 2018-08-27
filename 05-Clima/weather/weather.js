const axios = require('axios');

const getWeather = async (lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`);

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}