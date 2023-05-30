const fs = require("fs");

try {
  const fd = fs.openSync(`Users/joe/test.txt`, "r+");
  console.log("The File data " + fd);
} catch (err) {
  console.error(err);
}
