const config = require("./config");


const debug = {
    log: (msg) => {
        if (config.debug) console.log(msg);
    },
    error: (msg) => {
        if (config.debug) console.error(msg);
    }, 
}
        
module.exports = {debug};