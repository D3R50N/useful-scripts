const fs = require("fs");
const log = require("console").log;
const args = process.argv.slice(2);
const path = require("path");
var exec = require("child_process").exec;

var file_path = args[0] || path.join(fs.realpathSync("."), "collections.txt");

if (!fs.existsSync(file_path)) {
  console.log("Le fichier contenant le nom des collections n'existe pas");
  return;
}

var text = fs.readFileSync(file_path).toString("utf-8");

var collections = text.split("\n").filter((x) => x.trim().length > 0);

generate_mc(0);
function generate_mc(index) {
  if (index >= collections.length) {
    console.log("Génération terminée");
    return;
  }
  const collection = collections[index];
  console.log(`→${collection}`);
  exec(
    "node " +
      process.env.DEV +
      "\\scripts\\node-model-controller\\index.js " +
      collection,
    (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        generate_mc(index + 1);
        return;
      }
      generate_mc(index + 1);
    }
  );
  return index;
}
