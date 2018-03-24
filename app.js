const yargs = require("yargs");
const geocode = require("./libs/geocode.js");
// const display = require("./libs/display.js");
const weather = require("./libs/weather.js");
const request = require("request");

const argv = yargs
    .options({
        a: {
            demand:true,
            alias:"address",
            describe:"Address to fetch weather for",
            string:true
        }
    })
    .help()
    .alias("help", "h")
    .argv;


geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${weatherResults.temperature}, but it feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});



