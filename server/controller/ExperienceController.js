const repository = require('../repository/ExperienceRepository')


function notFound(data){
	if(Array.isArray(data) && !data.length || !data) {
		let err = new Error('xp not found')
		err.status = 404
		throw err
	}	
	return data
}

const ExperienceController = {
	list(request, response, next){ //middlewares - filters
		repository.listAsync()
			.then(notFound)
			.then(data => response.status(200).send(data))
			.catch(next)
	},
	byId(request, response, next){
		const id = request.params.id
		repository.byIdAsync(id)
			.then(notFound)
			.then(data => response.json(data))
			.catch(next)
	},
	create(request, response, next){
		const body = request.body
		repository.createAsync(body).then(data => {
			response.status(201).json(data)
		})
		.catch(next)
		// console.log(request.body)
		// response.status(201).end()
	},
	update(request, response, next){
		const id = request.params.id
		const body = request.body
		repository.updateAsync(id, body)
			.then(data => response.json(data))
			.catch(next)
	},
	delete(request, response, next){
		const id = request.params.id
		repository.deleteAsync(id)
			.then(data => response.sendStatus(204))
			.catch(next)
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