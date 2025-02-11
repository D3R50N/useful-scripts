const fs = require("fs");
const process = require("process");


String.prototype.count = function (char = "") {
  let reg = new RegExp(char, "g");
  return (this.match(reg) || []).length;
};


function makeTree() {
  const tree_path = process.argv.slice(2)[0];

  if (!fs.existsSync(tree_path))
    return "Chemin spécifié (" + tree_path + ") inexistant.";
  const tree = fs.readFileSync(process.argv.slice(2)[0], { encoding: "utf-8" });

  const sep = process.argv.slice(2)[1] ?? "  ";
  const resolve = (line = "") => {
    return {
      level: line.count(sep),
      path: line.replaceAll(sep, "").trim(),
      isDir: line.trim().endsWith("/"),
    };
  };

  const paths = tree
    .trim()
    .split("\n")
    .map((l) => resolve(l));

  var dirs = [];
  for (let p of paths) {
    const dir = dirs[p.level - 1];
    if (dir) {
      p.path = dir.path + p.path;
    }

    if (p.isDir) {
      dirs[p.level] = p;
      try {
        fs.mkdirSync(p.path);
      } catch (error) {}
    } else {
      fs.writeFileSync(p.path, "");
    }
  }
  return "Arborescence créée.";
}

console.log(makeTree());
