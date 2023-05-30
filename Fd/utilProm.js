const fs =  require('fs')
const utils =  require('util')


async  function exam() {
    const open =  utils.promisify(fs.open)
    const fileData  =await open('Users/joe/test.txt', 'r') 
    console.log(fileData)


}

exam();


fs.readFile('Users/joe/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
