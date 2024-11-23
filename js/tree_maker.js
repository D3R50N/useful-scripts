/* eslint-disable no-extend-native */
var tree = `
src/
├── components/
│   ├── Auth/
│   │   ├── Login.js
│   │   └── Register.js
│   ├── Listings/
│   │   ├── AddListing.js
│   │   ├── ListingDetail.js
│   │   └── Listings.js
│   ├── Profile/
│   │   └── Profile.js
│   ├── NavBar.js
├── pages/
│   ├── Home.js
│   ├── Listings.js
│   └── Profile.js
├── App.js
├── index.js
└── store.js`.split("\n");

String.prototype.count = function (char = "") {
  let reg = new RegExp(char, "g");

  return (this.match(reg) || []).length;
};

const fs = require("fs-extra");

tree = tree.filter((v) => v !== "");
var current_level = 0;
var current_path = "";
for (let i = 0; i < tree.length; i++) {
  let level = tree[i].count("──") + tree[i].count("│");
  let item = tree[i]
    .replaceAll("─", "")
    .replaceAll("├", "")
    .replaceAll("└", "")
    .replaceAll("│", "")
    .trim();

  if (level < current_level) {
    var sp = current_path.split("/");
    sp.pop();
    sp.pop();
    current_path = sp.join("/") + "/";
  }
  item = current_path + item;

  current_level = level;
  if (item.endsWith("/")) current_path = item;

  if (item.endsWith("/")) {
    fs.ensureDir(item);
  } else fs.ensureFile(item);
}
