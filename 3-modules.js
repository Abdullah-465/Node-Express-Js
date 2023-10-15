// Modules - Encapsulated code ( only share minimum )
// Common JS - Every file is module by default 

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-exports_alternative')

console.log(data);
require('./7-mind-gernade')
sayHi(names.name1) 
