


module.exports.match = function (   req, res, next   ) {
	var packageShip = {indent:0}
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
			//check this
			var reqBody_fn_dev_obj = ultraObject.args.add(   {value:ultraObject.iterify(   {iterify:dev_obj}   )   }   )
            ultraObject.partialMatch({
                compTo:ultraObject.misc[
					ultraObject.scope[rB_fnMisc_0_i]
				].term,
                compAgn:ultraObject.misc[
					ultraObject.scope[rB_fnMisc_0_i]
				].fullString,
                range:ultraObject.misc[
					ultraObject.scope[rB_fnMisc_0_i]
				].term.length,
                spaces:1,
                gap:ultraObject.misc[
					ultraObject.scope[rB_fnMisc_0_i]
				].fullString.length- ultraObject.misc[
					ultraObject.scope[rB_fnMisc_0_i]
				].term.length,
                trailer:0,
                type:'string',
                full:'true'
            })
        //     console.log(ultraObject.misc[
        //     	ultraObject.misc.abelast[
        //     		ultraObject.misc.abelast.length-1
        // 		]
        //     ])
            
            
            if(ultraObject.misc[
            	ultraObject.misc.abelast[
            		ultraObject.misc.abelast.length-1
        		]
            ].satisfy){


            	packageShip.term = ultraObject.misc[
					ultraObject.scope[rB_fnMisc_0_i]
				].term
				
								
				if(   ultraObject.misc[
                    	ultraObject.misc.abelast[
                    		ultraObject.misc.abelast.length-1
                		]
                      ][2][0] === undefined  ){
                    
                    
                    packageShip.indent = 0
                }
                
                
				else if(    ultraObject.misc[
                            	ultraObject.misc.abelast[
                            		ultraObject.misc.abelast.length-1
                        		]
                            ][2][0] !== undefined  ){
                    
                    
                    packageShip.indent = ultraObject.misc[
                    	ultraObject.misc.abelast[
                    		ultraObject.misc.abelast.length-1
                		]
                    ][2][0]
                }
                // represent the gap needed to find that word at the index 2 is gap anyway
				console.log(packageShip)
            }
            
            
            ultraObject.misc.minus({
            	index:ultraObject.misc.length-1
            })
            ultraObject.misc.abelast.minus({
            	index:ultraObject.misc.abelast.length-1
            })

			ultraObject.scope.minus(   {index:rB_fnMisc_0_i}   )
		},
		keep:'false',
		finish:function(dev_obj){
			res.json(packageShip)
		}
	})
	
}


module.exports.error =  function (  err, req, res, next   ) {

	console.error(err)
	throw('e')
	res.json(err)

}
