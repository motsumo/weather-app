// const $ = require('jquery');
// const getWeather = require('./getWeather')
import $ from 'jquery'
import getWeather from './getWeather'

var input = $('#input');

export default function getWeatherBySearch() {
    getWeather(input.val())    
}
