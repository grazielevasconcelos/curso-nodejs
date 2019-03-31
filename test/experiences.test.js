const app = require('../server/app')
const request = require('supertest')(app)
const assert = require('assert')
const db = require('../server/config/mongo')


describe('experiences routes', () => {
    beforeEach(() => {
        let obj = { name: 'Restaurante Bela e a Fera'}
        db.collection('experiences').insert(obj, done)
    })
    afterEach((done) => {
        db.collection('experiences').remove({}, done)
    })

    it('GET /experiences', () =>{
        return request.get('/experiences').expect(200).then(result => {
            assert.ok(result.body.lenght)
        })
    })
    it('GET /experiences/:id', () =>{
        
    })
    it('POST /experiences', () =>{
        
    })
    it('PUT /experiences/:id', () =>{
        
    })
    it('DELETE /experiences/:id', () =>{const app = require('../server/app')
        
    })
})