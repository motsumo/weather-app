// const $ = require('jquery');
import $ from 'jquery'
var content = $('.content'); 

export default function getWeather(query) {  
    fetch('https://api.apixu.com/v1/current.json?key=50520bdcee434d7faa2180209191505&q=' + query)
        .then(function (response) {
            return response.json()
        })
        .then(function (b) {
            content.html(b.current.temp_c + "  " + b.current.temp_f)
        })
}



