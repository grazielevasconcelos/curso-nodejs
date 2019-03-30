//server/app.js

const express = require('express')
const app = express()
const AppController = require('./controller/AppController')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//use = todos os verbos http
app.use(require('./route'))
app.use(AppController.notFound)
app.use(AppController.handleError)



// app.get('/', (request, response, next) => {
// 	response.write('Oi!')
// 	response.write('Hi!')
// 	response.write('または!')
// 	response.end()
// 	// response.send('Oi!')
// 	//request.query.q
// 	//response.status(422)
// })

// // http://localhost:3000/novatec
// app.get('/novatec', (request, response, next) => {
// 	response.send('Oi, Novatec')
// })

// app.listen(3000)
// TODO alterar o package json para server/bin/www e descomentar linha abaixo
// module.exports = app

console.time()
app.listen(3000, () =>{
    console.log('server is up')
    console.timeEnd()
})