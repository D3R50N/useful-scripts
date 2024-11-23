const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;

const arguments = process.argv.slice(2);

const dir_path = path.join(process.env.DEV,"projects", ...arguments);

if (!fs.existsSync(dir_path)) {
    // console.log("Création de ", dir_path);
    fs.mkdirSync(dir_path, { recursive: true });
}

console.log(dir_path)