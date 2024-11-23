const fs = require("fs");
const PATH = require("./globals");


const files = fs.readdirSync(PATH).filter((v) => v.endsWith(".bat"));


for (let file of files) {
  let name = file.replaceAll(".bat", "");
  let shortcut_name = "";
  for (let c of name) {
    if (!"aeiouy".includes(c)) shortcut_name += c;
  }
  fs.writeFileSync(
    "shortcuts/" + shortcut_name + ".bat",
    "@echo off\n" + name + " %*% "
  );
}
