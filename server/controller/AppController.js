const AppController = {
	index(request, response, next){
		response.send('Pong!')
	},

	notFound(request, response, next){
		let err = new Error('not found')
		err.status = 404
		next(err)
	},
	handleError(err, request, response, next){
		let status = err.status || 500

		if (status !== 404) console.log(err.stack)

		response.status(status)
		response.json({ message: err.message})
		// if (request.xhr)
		// 	response.json({ message: err.message})
		// else
		// 	response.send(err.message)
	}
}

module.exports = AppController