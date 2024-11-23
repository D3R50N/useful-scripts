const fs = require("fs");
const path = require("path");
const PORT_FILE = path.join("config","port.json");

module.exports = {
  getPorts: function () {
    var ports = [];
    if (fs.existsSync(PORT_FILE))
      try {
        ports = JSON.parse(fs.readFileSync(PORT_FILE, { encoding: "utf-8" }));
      } catch (error) {
        ports = [];
      }

    return ports;
  },

  deletePort: function (p) {
    var ports = [];
    if (!fs.existsSync(PORT_FILE)) return;
    try {
      ports = JSON.parse(fs.readFileSync(PORT_FILE, { encoding: "utf-8" }));
    } catch (error) {
      ports = [];
    }
    if (!ports.includes(p)) return;

    ports = ports.filter((v, i) => v != p);
    fs.writeFileSync(PORT_FILE, JSON.stringify(ports));
  },

  addPort: function (p) {
    var ports = this.getPorts();

    if (ports.includes(p)) return;
    ports.push(p);
    fs.writeFileSync(PORT_FILE, JSON.stringify(ports));
  },
  randomPort: function () {
    return parseInt(Math.random() * 10000 + 3000);
  }, 
  deleteAllPorts: function () {
    fs.writeFileSync(PORT_FILE, JSON.stringify([]));
  }
};
