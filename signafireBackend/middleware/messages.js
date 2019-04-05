var db = require('../messages/messagesdb.js').db


module.exports.provide = function (   req, res, next   ) {	
	res.json(   db   )
}

module.exports.count =  function (   req, res, next   ) {
		var messagesCount = 0 		
		var mFL_0_i = {
		    forLoop_0_i:0,
		    forLoopLength:db.length,
		    fn:function(   dev_obj   ){
				if(   db[mFL_0_i.forLoop_0_i].starred   ){
					messagesCount += 1
				}
		    },
		    args:{}
		}		
		ultraObject.forLoop(   mFL_0_i   )
		res.json(   messagesCount   )
	}


