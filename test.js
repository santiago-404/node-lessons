const {readFile, writeFile} = require('fs')

let words;

readFile('./text.txt', 'utf-8', 
  (err, data) => {
    if(err){
      console.log(err)
      return
    }
    words = data;
    console.log(data);
    
      
    writeFile('./copy-text.txt', words, (err) => {
      if(err){
        return console.log(err)
      }
      readFile('./copy-text.txt', 'utf-8', 
        (err, data) => {
          if(err){
            return console.log(err)
          }
          console.log(data);
          return
      })
    })

})
