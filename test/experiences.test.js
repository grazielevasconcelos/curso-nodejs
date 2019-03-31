const app = require('../server/app')
const request = require('supertest')(app)
const assert = require('assert')
const db = require('../server/config/mongo')


describe('experiences routes', () => {
    let id
    beforeEach((done) => {
        let obj = { name: 'Restaurante Bela e a Fera'}
        db.collection('experiences').insert(obj, (err, result) => {
            id = result._id.toString()
            done()
        })
    })
    afterEach((done) => {
        db.collection('experiences').remove({}, done)
    })

    it('GET /experiences', () =>{
        return request.get('/experiences').expect(200)
        .then(result => {
            assert.ok(result.body.length)
            assert.equal(result.body.length, 1)
            assert.equal(result.body[0].name, 'Restaurante Bela e a Fera')
        })
    })
    it('GET /experiences/:id', () =>{
        return request.get(`/experiences/${id}`).expect(200)
            .then(result => {
                assert.equal(result.body._id, id)
                assert.equal(result.body.name, 'Restaurante Bela e a Fera')
            })
    })
    it('POST /experiences', () =>{
        let obj = { name: 'Carousel das Princesas' }
        return request.post('/experiences').send(obj).expect(201)
            .then(result => {
                assert.ok(result.body._id)
                assert.ok(result.body.name)
            })
        
    })
    it('PUT /experiences/:id', () =>{
        let obj = { name: 'Beauty and the Beast Restaurant' }
        return request.put(`/experiences/${id}`).send(obj).expect(200)
            .then(result => {
                assert.deepEqual(result.body, { n: 1, nModified: 1, ok: 1 })
            })
    })
    it('DELETE /experiences/:id', () =>{const app = require('../server/app')
        return request.delete(`/experiences/${id}`).expect(204)
            .then(result => {
                assert.equal(result.text, '')
                db.collection('experiences').findOne({ _id: db.ObjectId(id)},(err, data) =>{
                    assert.ok(!data)
                    assert.ok(!err)
                })
            })
    })

    it('invalid_id', () => {
        return request.get('/experiences/43').expect(422)
            .then(result => {
                assert.equal('invalid id', result.body.message)
            })
    })
})