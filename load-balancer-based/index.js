const http = require("http");
const httpProxy = require("http-proxy");
const express = require("express");
const app = express();
const config = require('./config');

const global = require("./config/global");
// Liste des serveurs disponibles
class Server {
  constructor(port) {
    this.host = "localhost";
    this.port = port;
  }
}

function main() {
  const servers = global.getPorts().map((p) => new Server(p));

  if (servers.length == 0) {
    console.log("Aucun serveur disponible");
    return;
  }

  // Créer un proxy
  const proxy = httpProxy.createProxyServer();

  app.use((req, res) => {
    // TODO : Implémenter le load balancer
    // Choisir un serveur cible au hasard
    const target = servers[Math.floor(Math.random() * servers.length)];

    // Redirection de la demande vers le serveur cible
  if(config.debug)  console.log(`http://${target.host}:${target.port}${req.url}`);
    proxy.web(req, res, {
      target: `http://${target.host}:${target.port}${req.url}`,
      ignorePath: true,
    });
  });

  // Créer le serveur load balancer
  var server = http.createServer(app).listen(config.port);
  console.log("Load balancer sur `http://localhost:" + config.port);
}
module.exports = main;
