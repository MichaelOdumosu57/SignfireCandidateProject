const db = require('../messages/messagesdb.js')

module.exports.total = function (   req, res, next   ) {
	res.json(   db   )
}

