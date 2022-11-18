
const fs = require("fs");
const log = require("console").log;

var assetPath = "assets/";
//read parameters from command line
const args = process.argv.slice(2);
const pubspec = "pubspec.yaml";


//help function
function help() {
    log("Usage: test.bat [path_to_asset] [flag] [assets_dir]");
    log("Flag:");
    log("-d, --dir");
    log("assets_dir is by default assets/");
    log("When adding a new asset, the path_to_asset is the relative path from assets_dir to the assets (either file or folder).");
    log("Don't forget to add '/' at the end of path_to_asset if the asset is a folder.");
}

if (args.length === 0) {
    log("No path provided.\n ./assets folder will be add");
}
else if (args.length === 1) {
    if (args[1] === "-h" || args[1] === "--help") {
        //call help function
        help();
        return;
    }
}
else if (args.length === 2) {
    log(args[1] == "-d");
    if (args[1] !== "--dir" && args[1] !== "-d") {
        log("Invalid parameter.\n");
        help();
        return;
    }
    assetPath = "";
}
else if (args.length === 3) {
    if (args[1] !== "-dir" && args[1] !== "-d") {
        log("Invalid parameter.\n");
        help();
        return;
    }
    assetPath = args[2] + (args[2].endsWith("/") ? "" : "/");
}

// Read the file
fs.readFile(pubspec, (e, data) => {
    if (e) {
        log("Error while reading", pubspec);
        return;
    }
    //store the content of the file in a variable
    let fileContent = data.toString();
    //split the content of the file into an array
    let fileContentArray = fileContent.split(`assets:\r\n`);
    ;

    fileContentArray[1] = "    - " + assetPath + (args.length === 0 ? "" : args[0]) + "\r\n" + fileContentArray[1];
    //join the array back into a string
    let newFileContent = fileContentArray.join(`assets:\r\n`);
    //write the new content to the file
    fs.writeFile(pubspec, newFileContent, (e) => {
        if (e) {
            log("Error while writing", pubspec);
        }
    });

});