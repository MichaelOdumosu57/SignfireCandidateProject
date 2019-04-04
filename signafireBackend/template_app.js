const express = require('express')
const app = express()
const port = 3000
const file_name = __filename.split("/")[__filename.split("/").length-1].split(".js")[0]
const path = require('path')
const fs = require('fs');
const compression = require('compression')
const cors = require('cors')

app.use(  cors()   )
app.use(   compression()  )

app.get('/backend/signafireLogo', function (   req, res, next   ) {
	res.sendFile(   __dirname + '/Misc/images/assets_logo-sf-small.png'   )
});




console.log(   __dirname   )
app.listen(port, () => console.log(`${file_name} app listening on port ${port}!`))
