import axios from 'axios';
import RemoveComma from './../utils/string/removeComma';

const GetAddress = async (geolocation) => {
    const {long, lat} = cleanCoords(geolocation);

    const mapboxURL = "https://api.mapbox.com";
    const mapboxGeocodingPath = "/geocoding/v5/mapbox.places/";
    const token = "pk.eyJ1IjoidGVycnl1cmVjaGUiLCJhIjoiY2tvZHk5d29oMDc0bDMwb2FrY3U3d3NxOSJ9.bsvcctZhPWwLx-W8nnjwpw";
    const urlCoords = `${long},${lat}`;
    const urlToken = `.json?access_token=${token}`;

    const address = await axios.get(`${mapboxURL}${mapboxGeocodingPath}${urlCoords}${urlToken}`);

    function cleanCoords(geolocation) {
        let long = RemoveComma(geolocation.coords.longitude.toString());
        let lat = RemoveComma(geolocation.coords.latitude.toString());

        return {
            long,
            lat
        }
    }

    return address;
}

export {
    GetAddress
}
