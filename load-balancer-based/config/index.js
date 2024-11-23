require("dotenv").config();

module.exports = {
    debug: process.env.DEBUG || false,
    port: process.env.PORT || 3000,
    max_cpus: process.env.MAX_CPUS || 4,
};