const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/'){
    return res.end(`
      <h1>Welcome to my homepage</h1>
      <h2>Made with node.js</h2>
      `)
  }

  if (req.url === '/about'){
    return res.end('<h1>im abraham</h1>')
  }

  return res.end(`
    <h1>ERROR</h1>
    <p>nothing to see hear...</p>
    <a href="/k">Back Home</a>
    `)
})

server.listen(5000)
