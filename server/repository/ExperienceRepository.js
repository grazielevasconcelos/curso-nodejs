const db = require('../config/mongo')

const ExperienceRepository = {
    list(callback){
        db.collection('experiences').find({}, (err, data) => {
            callback(err, data) 
        })
        //MOC
        // let result = [
        //     { name: 'Piratas do Caribe' },
        //     { name: 'Piratas do Caribe' },
        //  ]
        // callback(null, result) 
    },
	byId(id, callback){
        let _id = db.ObjectId(id)
        db.collection('experiences').findOne( { _id: _id } , callback)

        //Declarando callback
        // db.collection('experiences').findOne( { _id: _id } , (err, data) => {
        //     callback(err, data)
        // })

        //MOCK
        // let obj = { name: 'Castelo de Cinderela' }
        // callback(null, obj)
	},
	create(body, callback){
        db.collection('experiences').insert(body, callback)
	},
	update(id, body, callback){
        let _id = db.ObjectId(id)
        let query = { _id: _id }
        db.collection('experiences').update( query, { $set: body }, callback)
        // db.experiences.update( { "_id" : ObjectId("5c9faff49bb254b2c1bcd14e") }, { $set: { "name": "Piratas do Caribe 2" } })
	},
	delete(id, callback){
        let _id = db.ObjectId(id)
        let query = { _id: _id }
        db.collection('experiences').remove(query, callback)
	}
}

module.exports = ExperienceRepository