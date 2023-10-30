const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, res) => {

    if (err) {
        console.log(err);
    }
    const first = res;
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
        }
        const second = res;
        writeFile('./content/third.txt', `Hi my name is Abdullah and here is file's content : ${first}, ${second}`, { flag: 'a' }, (err, res) => {
            if (err) {
                console.log(err);
            }
            console.log(res);
        })
    })

})
