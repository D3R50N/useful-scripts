const fs = require("fs");
const log = require("console").log;
const args = process.argv.slice(2);

var name = args[0] || fs.realpathSync(".").split("\\").pop();

if (name.endsWith("s")) {
    name = name.slice(0, -1);
}

var model_path = `src/models/${capitalize(name)}Model.js`;
var controller_path = `src/controllers/${capitalize(name)}Controller.js`;

main();

function main() {
  if (!fs.existsSync("src")) {
    fs.mkdirSync("src");
  }
  if (!fs.existsSync("src/models")) {
    fs.mkdirSync("src/models");
  }
  if (!fs.existsSync("src/controllers")) {
    fs.mkdirSync("src/controllers");
  }

  log("→Création du model dans", model_path);
  fs.writeFileSync(
    model_path,
    fs
      .readFileSync(process.env.DEV+"\\scripts\\node-model-controller\\model.js")
      .toString("utf-8")
      .replaceAll("$name", name)
      .replaceAll("$cname", capitalize(name))
  );

  log("→Création du controller dans", controller_path);
  fs.writeFileSync(
    controller_path,
    fs
      .readFileSync(process.env.DEV+"\\scripts\\node-model-controller\\controller.js")
      .toString("utf-8")
      .replaceAll("$name", name)
      .replaceAll("$cname", capitalize(name))
  );

  log("→Ajout des routes dans src/routes.js");
  var routes = fs.readFileSync("src/routes.js").toString("utf-8");

  var new_imports = `\nimport ${capitalize(
    name
  )}Controller from "./controllers/${capitalize(name)}Controller.js";`;

  if (routes.includes(new_imports)) {
    log("\n∵∴Erreur: src/routes.js∵∴");
    log("Les routes ont déjà été importées");
    return;
  }

  var import_delimiter = "const routes = Router();";
  var export_delimiter = "export default routes;";

  var import_index = routes.indexOf(import_delimiter) + import_delimiter.length;
  var export_index = routes.indexOf(export_delimiter);

  var imports = routes.slice(0, import_index);
  var exports = routes.slice(export_index);

  var old_routes = routes.slice(import_index, export_index);

  var new_routes = fs
    .readFileSync(process.env.DEV+"\\scripts\\node-model-controller\\routes.js")
    .toString("utf-8")
    .replaceAll("$name", name)
    .replaceAll("$cname", capitalize(name));

  fs.writeFileSync(
    "src/routes.js",
    imports +
      new_imports +
      old_routes +
      "\n//" +
      capitalize(name) +
      "s\n" +
      new_routes +
      exports
  );
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
