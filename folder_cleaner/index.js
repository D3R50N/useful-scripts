const fs = require("fs");
const path = require("path");
const folder_sorter = {
  vidéos: [
    ".webm",
    ".ogg",
    ".mp4",
    ".mkv",
    ".avi",
    ".flv",
    ".mov",
    ".m4v",
    ".mp4",
    ".avi",
    ".mov",
    ".wmv",
    ".mkv",
    ".flv",
    ".m4v",
    ".3gp",
  ],
  images: [
    ".jpg",
    ".png",
    ".gif",
    ".bmp",
    ".svg",
    ".webp",
    ".tiff",
    ".ico",
    ".jpg",
    ".png",
    ".jpeg",
    ".gif",
    ".bmp",
    ".svg",
    ".webp",
    ".tiff",
  ],
  documents: [".pdf", ".doc", ".txt", ".ppt", ".xls", ".xlsx", ".csv", ".docx"],
  audio: [".mp3", ".wav", ".ogg", ".aac", ".flac", ".wma", ".m4a", ".opus"],
  présentations: [
    ".ppt",
    ".pptx",
    ".key",
    ".odp",
    ".pps",
    ".ppsx",
    ".pot",
    ".potx",
  ],
  "feuilles de calcul": [
    ".xls",
    ".xlsx",
    ".csv",
    ".ods",
    ".tsv",
    ".xlsb",
    ".xlsm",
    ".xltx",
  ],
  archives: [".zip", ".rar", ".7z", ".tar", ".gz", ".bz2", ".xz", ".jar"],
  "fichiers sources": [
    ".js",
    ".html",
    ".css",
    ".py",
    ".java",
    ".cpp",
    ".php",
    ".rb",
    ".cpp",
    ".java",
    ".py",
    ".rb",
    ".js",
    ".css",
    ".html",
    ".php",
    ".cpp",
    ".java",
    ".py",
    ".rb",
    ".js",
    ".css",
    ".html",
    ".php",
  ],
  programmes: [
    ".exe",
    ".dmg",
    ".msi",
    ".app",
    ".deb",
    ".bat",
    ".rpm",
    ".pkg",
    ".jar",
  ],
  "fichiers vectoriels": [
    ".psd",
    ".ai",
    ".indd",
    ".eps",
    ".svg",
    ".cdr",
    ".tif",
  ],
  polices: [
    ".ttf",
    ".otf",
    ".woff",
    ".woff2",
    ".eot",
    ".svg",
    ".dfont",
    ".ttc",
  ],
  "e-books": [
    ".epub",
    ".mobi",
    ".pdf",
    ".azw",
    ".azw3",
    ".djvu",
    ".fb2",
    ".lit",
  ],
  // Ajoutez d'autres attributs et extensions ici
};

var folder_path = process.argv[2];
if (!folder_path || folder_path == ".") {
  folder_path = process.cwd();
} else if (folder_path.startsWith(".")) {
  folder_path = process.cwd() + folder_path.substring(1);
}

if (!fs.existsSync(folder_path)) {
  console.log("Le dossier '" + folder_path + "' n'existe pas");
  return;
}

var folder = fs.readdirSync(folder_path);

var errors = [];

folder.forEach((file_name) => {
  try {
    if (fs.lstatSync(path.join(folder_path, file_name)).isDirectory()) return;
    var file_extension = file_name.substring(file_name.lastIndexOf("."));
    if (file_extension == file_name) file_extension = "";

    var file_type_name = "Autres";
    for (var type in folder_sorter) {
      if (folder_sorter[type].includes(file_extension)) {
        file_type_name = capitalize(type);
        break;
      }
    }
    var new_file_path = path.join(folder_path, file_type_name, file_name);
    if (!fs.existsSync(path.join(folder_path, file_type_name))) {
      fs.mkdirSync(path.join(folder_path, file_type_name));
      console.log(`Dossier "${file_type_name}" créé`);
    }
    fs.renameSync(path.join(folder_path, file_name), new_file_path);

    console.log(
      `Fichier "${file_name}" déplacé vers le dossier "${file_type_name}"`
    );
  } catch (error) {
    errors.push({ file_name, error });
  }
});

if (errors.length > 0) {
  console.log("Erreurs survenues (" + errors.length + ") :");
  for (var i = 0; i < errors.length; i++) {
    console.log(
      ` - "${errors[i].file_name}" : ${errors[i].error.message || errors[i].error}`
    );
  }
}

function capitalize(str = "") {
  return str.substring(0, 1).toLocaleUpperCase() + str.substring(1);
}
