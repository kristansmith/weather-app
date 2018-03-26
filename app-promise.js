const axios = require("axios");
const yargs = require("yargs");

const argv = yargs
                .options({
                    a: {
                        demand: true,
                        alias: "address",
                        describe: "Address to fetch weather for",
                        string: true
                    }
                })
                .help()
                .alias("help", "h")
                .argv;

var encodedAddress = encodeURIComponent(argv.address);

var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAe3hVNBw42VsOMdzcUPFEN_3fAu7FptiE`;

axios.get(geocodeURL).then((response) => {
    if (response.data.status === "ZERO_RESULTS") {
        // throw new Error("Unable to find that address");
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/9151be07013dff6aa8edd54c9100ecd1/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}.  It feels like ${apparentTemperature}.`);
}).catch((e) => {
    console.log(e);
    if (e.code = "ENOTFOUND") {
        console.log("Unable to connect to API");
    } else {
        console.log(e.message);
    }
});

