const ExperienceRepository = {
    list(callback){
		let result = [
            { name: 'Piratas do Caribe' },
            { name: 'Piratas do Caribe' },
         ]
         callback(null, result) 
    },
	byId(id, callback){
        let obj = { name: 'Castelo de Cinderela' }
        callback(null, obj)
	},
	create(){

	},
	update(){

	},
	delete(){

	}
}

module.exports = ExperienceRepository