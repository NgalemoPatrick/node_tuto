// Load core 'http' module and store it into http variable
const http = require("http");

//process is a global object with the information about the currently working process
const PORT = process.env.PORT || 1338;

const os = require('os')
const path = require('path')
const fs = require('fs')
// import module
const {responseJson, responseText, responseNotFound} = require('./services/services')

//create http server object
// res short for response if the response object uses to send data back to the browser
// req short for request is the request object use to get information about headers url etc
// const server = http.createServer( (req, res) => {
//     res.end('Bonjour Ngalemo')
// })

// serving JSON
// create a server object
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-type', 'application/json')
//     res.end(JSON.stringify({ text: 'Bonjour M. Ngalemo', numbers: '[2,4,5,7]'}))
// })


// create a server object
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return responseText(req, res);
  } else if (req.url === "/json") {
    return responseJson(req, res);
  } else {
    return responseNotFound(req, res);
  }
});

// console.log(os.homedir())
// console.log(os.type())
// console.log(os.version())
// console.log(__dirname)
// console.log(__filename)
console.log(path.parse(__filename))
// fs.readFile('./files/me.txt', 'utf8',(err, data) => {
//     if(err) throw err
//     console.log(data)
// })

fs.readFile(path.join(__dirname, 'files', 'me.txt'), 'utf8', (err, data)=> {
    if(err) throw err
    console.log(data)
})

console.log('Hello... what\'s your name?')
// write into a file
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you Prestige', (err)=> {
    if(err) throw err
    console.log('Write complete')
})

// In case of uncought exeption
process.on('uncaughtException', err => {
    console.error(`There was an uncaught eror: ${err}`)
    process.exit(1)
})

// server listening
server.listen(PORT, () => console.log(`server running ${PORT}`));
