// server/config/mongo.js

const mongojs = require('mongojs')
// const db = mongojs('localhost:27017/disney')
let mongoUri

if (process.env.NODE_ENV === 'test'){
    mongoUri = 'localhost:27017/disney-test'
} else {
    mongoUri = 'localhost:27017/disney'
}

const db = mongojs(mongoUri)

db.on('error', () => {
    console.log('caiu TI', err)
})

module.exports = db