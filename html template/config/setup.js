const config = {};

const debug = {
    log: (data) => {
        if (config.debug)
            console.log(data);
    },
    table: (data) => {
        if (config.debug)
            console.table(data);
    },
    info: (data) => {
        if (config.debug)
            console.info(data);
    },
    warn: (data) => {
        if (config.debug)
            console.warn(data);
    },
    error: (data) => {
        if (config.debug)
            console.error(data);
    }
}