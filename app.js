const request = require("request");

request({
    url:"https://maps.googleapis.com/maps/api/geocode/json?address=1301%20Lombard%20St%20Philadelphia&key=AIzaSyAe3hVNBw42VsOMdzcUPFEN_3fAu7FptiE",
    json:true
}, (error, response, body) => {
    console.log(body);
});