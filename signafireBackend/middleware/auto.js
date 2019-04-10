module.exports.match = function (   req, res, next   ) {

	ultraObject.reqBody({
		stream:req,
		fn:function(dev_obj){
			console.log(dev_obj.stream.body)
		}
	})
	res.json('success')
}

module.exports.error =  function (  err, req, res, next   ) {

	res.json('error')

}
