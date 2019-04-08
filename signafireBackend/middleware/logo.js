module.exports.url = function (   req, res, next   ) {


	if(   req.path === '/angularLogoRequest'){


		res.json('http://24.189.66.225/backend/signafireLogo')


	}


	else if(   req.path === '/angularTrashRequest'){

		console.log(req.path)
		res.json('http://24.189.66.225/backend/signafireTrash')


	}	


}

module.exports.logoImage = function(   dev_obj   ){
    return function (   req, res, next   ) {
        
    	res.sendFile(   dev_obj.dirname + '/Misc/images/assets_logo-sf-small.png'   )
    }
}

module.exports.trashImage = function(   dev_obj   ){
    return function (   req, res, next   ) {
        
    	res.sendFile(   dev_obj.dirname + '/Misc/images/trash_can.png'   )
    }
}

module.exports.error = function(   err,req, res, next   ){
	console.log('a problem occured could not send logo items to the server');
	res.json('backend failed to send items to frontend')
}
