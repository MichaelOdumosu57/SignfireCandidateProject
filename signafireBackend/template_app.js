const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const compression = require('compression')
const cors = require('cors')
//middleware
const logo = require('./middleware/logo.js')
//

app.use(  cors()   )
app.use(   compression()  )

app.get(   '/backend/angularLogoRequest', logo.url,logo.error   );


app.get('/backend/signafireLogo', logo.image(   {dirname:__dirname}   ),logo.error);





console.log(   __dirname   )
app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))