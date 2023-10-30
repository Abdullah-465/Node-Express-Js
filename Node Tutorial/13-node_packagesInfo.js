// npm - Global command comes with node
// npm --v - to check the node version

// local dependency - use it only in this particular project
// npm i <packagename>

// Global dependency - use it in any project
// npm install -g <packagename>

// package.json  -  manifest file ( stores important info about project/package )
// manual approach ( create pakacge.json in the root, create properties etc. )
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const lodash = require('lodash')

const cmplxArray = [1,[2,[3,[4]]]];
const flatArray = lodash.flattenDeep(cmplxArray);

console.log(flatArray);
console.log("Hello People!!! and world also!!!");