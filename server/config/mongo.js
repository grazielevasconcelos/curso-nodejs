// server/config/mongo.js

const mongojs = require('mongojs')
const db = mongojs('localhost:27017/disney')

db.on('error', () => {
    console.log('caiu TI', err)
})

module.exports = db