const fs = require("fs/promises");

async function example() {
  const fileHandle = await fs.open("Users/joe/test.txt", "r");
  try {
    console.log(fileHandle.fd);
    console.log(await fileHandle.readFile({ encoding: "UTF8" }));
  } catch (err) {
    console.err(err);
  } finally {
    if (fileHandle) await fileHandle.close();
  }
}

example();
