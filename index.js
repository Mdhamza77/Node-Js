const add = require('./Modules/Add')

const superHero = require('./Modules/super-Hero')

const Batman = new superHero()
console.log(Batman.getName())
Batman.setName("SuperMan")
console.log(Batman.getName())


console.log('Exporting an  Module')

const sum = add(88, 77)

console.log(sum)
