const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// {flag:a} means that the written content will not be overwritten while it will be append to the file's content.
writeFileSync('./content/third.txt', `Hi my name is Abdullah and here is files content : ${first}, ${second}`, { flag: 'a' });


// console.log(first, second);