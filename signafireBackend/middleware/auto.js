var package = {term:''}


module.exports.match = function (   req, res, next   ) {
	
	ultraObject.reqBody({
		stream:req,
		fn:function(dev_obj){			
			var rB_fnMisc_0_i = ultraObject.scope.add({
				value: ultraObject.misc.add({
					value:JSON.parse(   dev_obj.stream.body   )
				})
			})
			ultraObject.misc.abelast.add({
				value:rB_fnMisc_0_i
			})
			var reqBody_fn_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
            ultraObject.partialMatch({
                compTo:ultraObject.misc[
					ultraObject.scope[rB_fnMisc_0_i]
				].term,
                compAgn:ultraObject.misc[
					ultraObject.scope[rB_fnMisc_0_i]
				].fullString,
                range:1,
                spaces:0,
                gap:0,
                trailer:ultraObject.misc[
					ultraObject.scope[rB_fnMisc_0_i]
				].fullString.length,
                type:'string'                
            })
            console.log(ultraObject.misc[
            	ultraObject.misc.abelast[
            		ultraObject.misc.abelast.length-1
        		]
            ])			
            if(ultraObject.misc[
            	ultraObject.misc.abelast[
            		ultraObject.misc.abelast.length-1
        		]
            ].satisfy){


            	package.term = ultraObject.misc[
					ultraObject.scope[rB_fnMisc_0_i]
				].term
				console.log(package)
            }
            ultraObject.misc.minus({
            	index:ultraObject.misc.length-1
            })
            ultraObject.misc.abelast.minus({
            	index:ultraObject.misc.abelast.length-1
            })
			// ultraObject.misc.abelast.add({
			// 	value:ultraObject.scope[rB_fnMisc_0_i]
			// }) 
			ultraObject.scope.minus(   {index:rB_fnMisc_0_i}   ) 	
		},
		keep:'false',
		finish:function(dev_obj){
			res.json(package)
		}
	})
	
	


}


module.exports.error =  function (  err, req, res, next   ) {

	console.error(err)
	throw('e')
	res.json(err)

}
