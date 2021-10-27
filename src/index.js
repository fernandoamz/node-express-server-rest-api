const compression   = require('compression')
const express       = require('express')
const app           = express()
const router        = express.Router()
const bodyParser    = require("body-parser")

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.disable('x-powered-by')
app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

router.use(function(req, res, next){
    console.log("[ API ] -> /" + req.method + ' -> ' + req.path)
    next()
})

const system_health = require('./routes/systemHealth')(router);

const port = process.env.PORT || 3000
app.use("/api", router)

app.use("*", function(req, res){
    res.status(404).json({status: 'ERROR', result: '404'})
})

app.listen(port, function(){
  console.log('[ API ] -> Server Ready: ' + port)
})
