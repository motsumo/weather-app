// const $ = require('jquery');
import $ from 'jquery'
import { getWeatherBySearch, getWeatherByLocation } from './api'
// import getWeatherBySearch from './api/getWeatherBySearch'
// import getWeatherByLocation from './api/getWeatherByLocation'

// const getWeatherBySearch = require('./getWeatherBySearch')
// const getWeatherByLocation = require('./getWeatherByLocation')

var button = $('.button');
var myWeather = $('.my-weather');

button.click(getWeatherBySearch);

myWeather.click(getWeatherByLocation)


