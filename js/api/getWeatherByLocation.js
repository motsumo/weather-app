// const getWeather = require('./getWeather')
import getWeather from './getWeather'

export default function getWeatherByLocation() {  
    navigator.geolocation.getCurrentPosition(function (position) {
        const {latitude, longitude} = position.coords;
        getWeather(latitude + ',' + longitude)       
    })
}
