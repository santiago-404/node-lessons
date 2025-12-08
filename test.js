//read two files
//then write those data into a new file

const {readFile, writeFile} = require('fs').promises

const start = async () => {
  try {
    const first = await readFile('./content/1-text.txt', 'utf-8')
    const second = await readFile('./content/2-text.txt', 'utf-8')

    writeFile('./content/3-text.txt', `Made with promises, first: ${first}, second: ${second}`, {flag: 'a'})
  } catch (error) {
    console.log(error)
  }
}

start()
console.log(1)