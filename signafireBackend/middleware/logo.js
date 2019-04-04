module.exports.url = function (   req, res, next   ) {
	res.json('http://24.189.66.225/backend/signafireLogo')
}

module.exports.image = function(   dev_obj   ){
    return function (   req, res, next   ) {
        
    	res.sendFile(   dev_obj.dirname + '/Misc/images/assets_logo-sf-small.png'   )
    }
}

module.exports.error = function(   err,req, res, next   ){
	console.log('a problem occured could not send logo items to the server');
	res.json('backend failed to send items to frontend')
}
