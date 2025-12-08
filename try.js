const {readFile, writeFile} = require('fs');

const readFilePromise = (path) => {
  return promise = new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, data) => {
      if(err){
        reject(err)
      }
        resolve(data)
    })
  })
}

const start = async() => {
  try {
    const first = await readFilePromise('./content/1-text.txt')
    const second = await readFilePromise('./content/2-text.txt')

    writeFile('./content/wrap.txt', `Wrapped function, first: ${first}, second: ${second}`, (err) => {
      console.log(err)
    })
  } catch (error) {
    console.log(error)
  }
}

start()