var db = require('../messages/messagesdb.js').db
const assert = require('assert')


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

module.exports.toggleBool =  function (   req, res, next   ) {		
	req.on(   'data',(chunk)=> {
		if(   req.body === undefined) req.body = '';
		req.body += chunk
	})
	req.on(   'end',() => {
		req.body = JSON.parse(   req.body   )
	    var mBOOL_0_i = {0:false}
	    mBOOL_0_i = ultraObject.severalOr({
	        compTo:req.body, 
	        compAgn:db,
	        boolean:mBOOL_0_i,
	        which:0,
	        how:function(   dev_obj   ){
	        	if(   dev_obj.compAgnI.index === dev_obj.compTo.index   ){
	        		return 'a'
	        	}    	           		            
	        },
	        result:'a'
	    })		
	    if(   mBOOL_0_i[0]   ){
	    	db[   mBOOL_0_i.spot   ].starred = !db[   mBOOL_0_i.spot   ].starred   
	    	res.json(   db[   mBOOL_0_i.spot   ].starred   )
	    }
	    else{
	    	next()
	    }
	})	
}

module.exports.error = function(   err,req,res,next   ){
	res.json('something broke while dealing with message service')
}
