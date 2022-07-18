const path = require("path");
const fs = require("fs-extra");

exports.onPostBuild = () => {
  fs.copySync(
    path.join(__dirname, "public"),
    path.join(__dirname, "../public"),
    { overwrite: true }
  );
};
