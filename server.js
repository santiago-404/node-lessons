const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //will run everytime a request comes in the server
  console.log('request received');
  //response
  res.setHeader('Content-Type', 'HTML');
  fs.readFile('./index.html', (err, data) => {
    if(err){
      console.log(err);
      res.setHeader('Content-type', 'text/plain');
      res.write('erro 404');
      res.end();
    } else{
    //sends the data to the web browser 
    // that sent the request
    res.end(data);
    }
  })
})


server.listen(3000, 'localhost', () => {
  console.log('listening for requests biatch');
})

