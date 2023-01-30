const fs = require("fs");
const path = require("path");
const config_file = path.join(__dirname, "app.config");

const config = {};
(() => {
  try {
    const appConfig = fs.readFileSync(config_file, "utf8").split("\n");
    appConfig.forEach((line) => {
      if (line.trim().length === 0 || line.startsWith("#")) return;
      const [key, value] = line.split("=");
      if (!key || !value) return;
      let v = value.trim();
      if (v === "true") v = true;
      if (v === "false") v = false;
      config[key.trim()] = v;
    });
  } catch (error) {}
})();
module.exports = config;
