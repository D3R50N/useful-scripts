// server.js
const express = require("express");
const app = express();
const global = require("./config/global");
const load_balancer = require("./index");
// runs in each instance
var cluster = require("cluster");
const config = require("./config");
var numCPUs = Math.min(require("os").cpus().length, config.max_cpus);

if (cluster.isMaster) {
  console.clear();
  console.log("Exécution sur", numCPUs, "coeurs");
  // Compteur pour suivre le nombre de serveurs démarrés
  var numServersStarted = 0;

  cluster.fork();

  // Événement lorsqu'un nouveau serveur démarre
  cluster.on("message", function (worker, message) {
    if (message === "server-started") {
      numServersStarted++;
      if (numServersStarted < numCPUs - 1) cluster.fork();

      if (numServersStarted === numCPUs - 1) {
        load_balancer();
      }
    }
  });
} else {
  main(cluster.worker.id);
}

process.on("SIGINT", function () {
  global.deleteAllPorts();
  process.exit();
});

function main(id) {
  var server;
  var SERVER_PORT = global.randomPort();
  var nb_requests = 0;
  listenOnBestPort();

  // Définir vos routes
  app.get("/", (req, res) => {
    nb_requests++;
    res.send(
      "<h1>Page d'accueil</h1> <a href='/test'>Test</a> <p>Serveur " +
        cluster.worker.id +
        "</p> <p>Port " +
        SERVER_PORT +
        "</p> <p>Nombre de requêtes : " +
        nb_requests +
        "</p>"
    );
    // showInfos();
  });

  app.get("/test", (req, res) => {
    res.send("<h1>Page test</h1>");
  });

  function listenOnBestPort() {
    server = app
      .listen(SERVER_PORT, () => {
        server.on("close", () => {});
        showInfos();
        global.addPort(SERVER_PORT);
        process.send("server-started");
      })
      .on("error", function (err) {
        //console.log('Port',SERVER_PORT,'failed.');
        listenOnBestPort(++SERVER_PORT);
      });
  }

  function showInfos() {
    // console.clear();
    console.log("Serveur",id,"ouvert sur le port", SERVER_PORT);
    // console.log("Nb de requetes: ", nb_requests);
  }
}
