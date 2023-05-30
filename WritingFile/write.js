const { log } = require('console')
const fs =  require('fs')



async function example() {
    const content = "Let us ADD SOME RECEEPIE TO THIS CONTENT"
    const fileHandle = await fs.writeFileSync("jake/test.txt", content);
    try {
      console.log(fileHandle);
    } catch (err) {
      console.error(err);
    } finally {
      if (fileHandle) await fileHandle.close();
    }
  }
  


example();