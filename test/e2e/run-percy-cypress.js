// tslint:disable
const spawn = require('child_process').spawn
const httpServer = require('http-server')
// eslint-disable-next-line

const port = process.env.PORT_NUMBER || 8000
// We need to change the command path based on the platform they're using

const server = httpServer.createServer()

server.listen(port)
console.log(`Server is listening on http://localhost:${port}`)

const tests = spawn('cypress', ['run'], {
  stdio: 'inherit',
})

tests.on('close', () => {
  console.log(`Tests finished! Closing server http://localhost:${port}`)
  server.close()
})
