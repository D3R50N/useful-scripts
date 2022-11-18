
const fs = require("fs");
const log = require("console").log;

const pubspec = "pubspec.yaml";

//read parameters from command line
const args = process.argv.slice(2);


if (args.length === 0) {
    log("No font provided.");
    return;
}


// Read the file
fs.readFile(pubspec, (e, data) => {
    if (e) {
        log("The file", pubspec, "doesn't exist. Please create it.");
        return;
    }
    //store the content of the file in a variable
    let fileContent = data.toString();
    //split the content of the file into an array
    let fileContentArray = fileContent.split(`fonts:\r\n`);
    ;

    fileContentArray[1] = "    - family: " + args[0] + "\r\n" +
        "      fonts:\r\n" +
        "        - asset: assets/fonts/" + args[0]+".ttf\r\n"
        + fileContentArray[1];
    //join the array back into a string
    let newFileContent = fileContentArray.join(`fonts:\r\n`);
    //write the new content to the file
    fs.writeFile(pubspec, newFileContent, (e) => {
        if (e) {
            log("Error while writing", pubspec);
        }
    });

});