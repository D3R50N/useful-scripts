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

  var font_name = args[0];

  const options = args.slice(1);
  var is_regular = options.includes("-r") || options.includes("--regular");
  var has_bold = options.includes("-b") || options.includes("--bold");
  var has_medium = options.includes("-m") || options.includes("--medium");
  var has_bold_italic =
    options.includes("-bi") || options.includes("--bold-italic");
  var has_black = options.includes("-bl") || options.includes("--black");
  var has_light = options.includes("-l") || options.includes("--light");

  if (font_name.includes("-Regular")) {
    font_name = font_name.replace("-Regular", "");
    is_regular = true;
  }
  if (font_name.includes("-Bold")) {
    font_name = font_name.replace("-Bold", "");
    has_bold = true;
  }

  if (font_name.includes("-Medium")) {
    font_name = font_name.replace("-Medium", "");
    has_medium = true;
  }

  if (font_name.includes("-BoldItalic")) {
    font_name = font_name.replace("-BoldItalic", "");
    has_bold_italic = true;
  }

  if (font_name.includes("-Black")) {
    font_name = font_name.replace("-Black", "");
    has_black = true;
  }

  if (font_name.includes("-Light")) {
    font_name = font_name.replace("-Light", "");
    has_light = true;
  }

  //store the content of the file in a variable
  let fileContent = data.toString();

  //split the content of the file into an array
  let fileContentArray = fileContent.split(`fonts:\r\n`);
  fileContentArray[1] =
    "    - family: " +
    font_name +
    "\r\n" +
    "      fonts:\r\n" +
    "        - asset: assets/fonts/" +
    font_name +
    (is_regular ? "-Regular" : "") +
    ".ttf\r\n" +
    (has_light
      ? "        - asset: assets/fonts/" + font_name + "-Light.ttf\r\n"
      : "") +
    (has_light ? "          weight : 300\r\n" : "") +
    (has_bold
      ? "        - asset: assets/fonts/" + font_name + "-Bold.ttf\r\n"
      : "") +
    (has_bold ? "          weight : 700\r\n" : "") +
    (has_medium
      ? "        - asset: assets/fonts/" + font_name + "-Medium.ttf\r\n"
      : "") +
    (has_medium ? "          weight : 500\r\n" : "") +
    (has_bold_italic
      ? "        - asset: assets/fonts/" + font_name + "-BoldItalic.ttf\r\n"
      : "") +
    (has_black
      ? "        - asset: assets/fonts/" + font_name + "-Black.ttf\r\n"
      : "") +
    (has_black ? "          weight : 900\r\n" : "") +
    fileContentArray[1];
  //join the array back into a string
  let newFileContent = fileContentArray.join(`fonts:\r\n`);
  //write the new content to the file
  fs.writeFile(pubspec, newFileContent, (e) => {
    if (e) {
      log("Error while writing", pubspec);
    }
  });
});
