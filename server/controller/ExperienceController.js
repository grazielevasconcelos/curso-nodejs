const repository = require('../repository/ExperienceRepository')

const ExperienceController = {
	list(request, response, next){ //middlewares - filters
		repository.list((err, data) => {
			if(err) return next(err)
			response.status(200).send(data)
		})
	},
	byId(request, response, next){
		const id = request.params.id
		repository.byId(id, (err, data) => {
			if(err) return next(err)
			if(!data) {
				let notFound = new Error('xp not found')
				notFound.status = 404
				return next(notFound)
			}
			response.json(data)
		})
	},
	create(request, response, next){
		const body = request.body
		
		repository.create(body, (err, data) => {
			if(err) return next(err)
			response.status(201).json(data)
		})
		// console.log(request.body)
		// response.status(201).end()
	},
	update(request, response, next){
		const id = request.params.id
		const body = request.body
		repository.update(id, body, (err, data) => {
			if(err) return next(err)
			response.json(data)
		})
	},
	delete(request, response, next){
		const id = request.params.id
		repository.delete(id, (err, data) => {
			if(err) return next(err)
			response.sendStatus(204)
		})
	},
	validateId(request, response, next){
		const id = request.params.id
		if (id.length !== 24) {
			let err = new Error('invalid id')
			err.status = 422
			return next(err)
		}
		next()
	}	
}

module.exports = ExperienceController