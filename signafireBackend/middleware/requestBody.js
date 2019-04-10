module.exports = function(   dev_obj   ){
	dev_obj.stream.on('data',(chunk)=> dev_obj.stream.body += chunk)
	dev_obj.stream.on('end',dev_obj.fn)
}