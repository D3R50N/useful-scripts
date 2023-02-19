const fs = require("fs");
const log = require("console").log;
const args = process.argv.slice(2);

var name = args[0] || fs.realpathSync(".").split("\\").pop();

function replace_all(str, val, new_val) {
  var ret = str;
  do {
    ret = ret.replace(val, new_val);
  } while (ret.includes(val));
  return ret;
}

function change_name_in(path) {
    var data = fs.readFileSync(path).toString("utf-8");
    var new_data = replace_all(data, "$name", name);
    fs.writeFileSync(path, new_data);
}


function change_name_in_all(...paths) {
    paths.forEach(path => change_name_in(path));
}
change_name_in_all("manifest.json","popup.html","README.md");
