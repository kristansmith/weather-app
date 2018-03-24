const render = (obj) => {

    if (obj.errMsg) {
        console.log(`ERROR: ${obj.errMsg}`);
    } else if (obj.data) {
        var keys = Object.keys(obj.data);

        for (var i = 0; i < keys.length; i++) {
            var val = obj.data[keys[i]];
            console.log(`${keys[i].toUpperCase()} : ${val}`);
        }
    }
}

module.exports = {
    render
}
