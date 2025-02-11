const fs = require("fs");
const log = require("console").log;

var routesFilePath = "lib/app/routes/route.dart";
var mainFilePath = "lib/main.dart";
//read parameters from command line
const args = process.argv.slice(2);

if (args.length === 0) {
  log("No route provided.");
  return;
}

function capitalize(str = "") {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Read the file
fs.readFile(routesFilePath, (e, data) => {
  if (e) {
    log("The file", routesFilePath, "doesn't exist. Please create it.");
    return;
  }
  //store the content of the file in a variable
  let fileContent = data.toString();
  //split the content of the file into an array
  let fileContentArray = fileContent.split(`\n}`);
  var route = args[0];

  fileContentArray[0] += "\n  static const " + route + ' = "/' + route + '";';
  if (fileContent.includes("static const " + route + ' = "/' + route + '";')) {
    console.log("Route already exists");

    return;
  }
  //join the array back into a string
  let newFileContent = fileContentArray.join(`\n}`);
  //write the new content to the file
  fs.writeFile(routesFilePath, newFileContent, (e) => {
    if (e) {
      log("Error while writing the file ", routesFilePath);
    }

    writeMain();
  });
});

function writeMain() {
  fs.readFile(mainFilePath, (e, data) => {
    if (e) {
      log("The file", mainFilePath, "doesn't exist. Please create it.");
      return;
    }
    let fileContent = data.toString();

    var route = args[0];
    let newFileContent = fileContent.replace(
      `GetPage(`,
      `GetPage(
              name: Routes.${route},
              page: () => const ${capitalize(route)}Page(),
              binding: ${capitalize(route)}Binding(),
            ),
            GetPage(`
    );

    let dependencyMark = "import 'package:get/get.dart';";
    newFileContent = newFileContent.replace(
      dependencyMark,
      dependencyMark +
        "\nimport 'app/ui/pages/" +
        route.toLowerCase() +
        "_page/" +
        route.toLowerCase() +
        "_page.dart';" +
        "\nimport 'app" +
        "/bindings/" +
        route.toLowerCase() +
        "_binding.dart';"
    );

    fs.writeFile(mainFilePath, newFileContent, (e) => {
      if (e) {
        log("Error while writing the file ", mainFilePath);
      }
    });
  });
}
