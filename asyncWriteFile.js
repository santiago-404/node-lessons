
const {readFile, writeFile} = require('fs');

const promise = new Promise((resolve, reject) => {
  readFile('./text.txt', 'utf-8', (err, data) => {
    if(err){
      reject(err)
    }
    resolve(data)
  })
})

promise.then(onResolve)
promise.catch(onReject)

function onResolve(data){
  writeFile('./asyncWrite.txt', data, (err) => {
      if(err){
        return console.log(err.message())
      }
      return console.log('Task done!')
    })
}

function onReject(err){
  console.log(err.message())
}
