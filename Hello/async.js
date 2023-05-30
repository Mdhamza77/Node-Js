const fs = require('fs');

fs.readFile('./file.md', (err, data) => {
  if (err) throw err;
  else  {
    console.log(data)
  }
  fs.unlink(`./file.md` , (filelinkErr) => {
      if(filelinkErr)  throw new filelinkErr
  })
});

//fs.unlinkSync('./file.md')   Unlinking the file directory synchronously 


