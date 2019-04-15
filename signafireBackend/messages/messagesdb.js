var messages = [
	{
		message:'Delectus facilis nisi consequatur numquam consequatur temporibus minima. Quaerat et id et asperiores alias inventore repellat qui. Laudantium at ut temporibus. Architecto delectus modi consequatur. Velit labore fuga iusto',
		name:'Jake Tappen',
		date:'Feb 24, 2017',
		starred:false

	},
	{
		message:'Alpine Alpine Alpine Alpine Alpine ',
		name:'Smooth Kipper',
		date:'Jan 21, 2017',
		starred:false
	},
	{
		message:'Semper Tappen Semper dipper Semper Semper',
		name:'Tom Kaligher',
		date:'May 24, 2016',
		starred:false
	}
]
//adding index might use itO here
var messagesCount = 0
var mdbFL_0_i = {
    forLoop_0_i:0,
    forLoopLength:messages.length,
    fn:function(   dev_obj   ){
		messages[mdbFL_0_i.forLoop_0_i].index = mdbFL_0_i.forLoop_0_i
    },
    args:{}
}
ultraObject.forLoop(   mdbFL_0_i   )
//
 	
module.exports.db  = messages