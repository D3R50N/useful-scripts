
const fs = require("fs");
const log = require("console").log;

var routesFilePath = "lib/app/routes/route.dart";
//read parameters from command line
const args = process.argv.slice(2);


if (args.length === 0) {
    log("No route provided.");
    return;
}


// Read the file
fs.readFile(routesFilePath, (e, data) => {
    if (e) {
        log("The file",routesFilePath,"doesn't exist. Please create it.");
        return;
    }
    //store the content of the file in a variable
    let fileContent = data.toString();
    //split the content of the file into an array
    let fileContentArray = fileContent.split(`\n}`);
    ;

   

    fileContentArray[0] += '\n  static const ' + args[0] + ' = "/' + args[0] + '";';
    //join the array back into a string
    let newFileContent = fileContentArray.join(`\n}`);
    //write the new content to the file
    fs.writeFile(routesFilePath, newFileContent, (e) => {
        if (e) {
            log("Error while writing the file ", routesFilePath);
        }
    });

});