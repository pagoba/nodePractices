const axios = require('axios');

const getPlaceLatLng = async (address) => {
    let encodedUrl = encodeURI (address);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);

    if (resp.data.status === 'ZERO_RESULTS'){
        throw new Error ('There are not result for that city');
    }
    
    let location = resp.data.results[0];
    let coors = resp.data.results[0].geometry.location;
    // console.log(JSON.stringify(resp.data, undefined, 2)); // To print all the response

    return {
        address : location.formatted_address,
        lat : coors.lat,
        lng : coors.lng
    }
}

module.exports = {
    getPlaceLatLng
}

