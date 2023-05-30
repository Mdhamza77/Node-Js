const fs = require('fs')

fs.stat(`Users/joe/test.txt` , (err, data) => {
    if(err) {
        console.log(err.message)
        console.log(err.path)
        return  ;
    } 
    console.log(data.isFile())
    console.log(data)
}) 


fs.open(`Users/joe/test.txt` , 'r' , (err, data) => {
    if(err) {
        console.log(err.message)
        console.log(err.path)
        return  ;
    } 
    console.log(data)
}) 

