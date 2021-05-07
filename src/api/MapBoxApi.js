import axios from 'axios';
import RemoveComma from './../utils/string/removeComma';

export default (geolocation) => {
    let {long , lat} = cleanCoord(geolocation);
    const radius = 4000;
    const mapboxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
    const token = "pk.eyJ1IjoidGVycnl1cmVjaGUiLCJhIjoiY2tvZHk5d29oMDc0bDMwb2FrY3U3d3NxOSJ9.bsvcctZhPWwLx-W8nnjwpw";

    const axios = axios.create({
        baseURL: `${mapboxURL}${long}${lat}.json?access_token=${token}`
    });

    function cleanCoord(geolocation) {
        let long = RemoveComma(geolocation.coords.long);
        let lat = RemoveComma(geolocation.coords.lat);

        return {
            long,
            lat
        }
    }

    return axios;
}
