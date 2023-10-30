const { readFile, writeFile } = require('fs').promises


const start = async() => {
  try {
    const first = await readFile('./content/first.txt','utf8')
    const second = await readFile('./content/second.txt','utf8')
    await writeFile('./content/newFile.txt',`This is te new content of this file : ${first} And ${second} `,{flag:'a'})

    console.log(first,second);
  } catch (error) {
    console.log(error);
  }
}



start()



// const getData = (path) => {
//     return new Promise((resolve, reject) => {

//         readFile(path, 'utf8', (err, res) => {
//             if (err) {
//                 resolve(err);
//             }
//             else {
//                 reject(res);
//             }
//         })
//     })

// }


// const startGet = async () => {
//     try {
//         const first = await getData('./content/first.txt')
//         const second = await getData('./content/second.txt')
//         console.log(first);
//         console.log(second);

//     } catch (error) {
//         console.log(error);
//     }
// }



// getData('./content/first.txt')
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// startGet()