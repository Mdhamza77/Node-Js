const EventEmitter = require('events')

const eventEmitter = new EventEmitter() ;

eventEmitter.on('start' , (name , age) => {
    console.log(`The Users age  is ${age} and her name is "${name}"`)
}) 

eventEmitter.emit('start',"Elizabeth Hurtley" , 25) 