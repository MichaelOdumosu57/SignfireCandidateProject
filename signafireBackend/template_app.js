const express = require('express')
const app = express()
const port = 3000;
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const compression = require('compression')
const cors = require('cors')
//middleware
global.ultraObject = require('./middleware/ultraObject.js')
global.reqBody =  require('./middleware/requestBody.js')
const backend = express.Router()
const logo = require('./middleware/logo.js')
const messages = require('./middleware/messages.js')
const auto =  require('./middleware/auto.js')
//

app.use(  cors()   )
app.use(   compression()  )
app.use(   '/backend',backend   )
backend.get(   '/angularLogoRequest', logo.url,logo.error   );
backend.get(   '/angularTrashRequest', logo.url,logo.error   );
backend.get(   '/signafireLogo', logo.logoImage(   {dirname:__dirname}   ),logo.error);
// backend.get(   '/signafireTrash', logo.trashImage(   {dirname:__dirname}   ),logo.error);
backend.get(   '/messages',messages.provide,messages.error   )
backend.get(   '/starredAmount',messages.count,messages.error   )
//toggling functionality
backend.post(   '/toggleStarred',messages.toggleBool,messages.error   )
//
// trash functionality
backend.put(   '/trashTweet',messages.deleteTweet,messages.error   )
//
// 'auto-highlight functionality'
backend.put(   '/autoHighlight',auto.match,auto.error)
//




app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))