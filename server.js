var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoURI = "mongodb://127.0.0.1:27017/shopping";
mongoose.connect(mongoURI, {useNewUrlParser: true})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

var Users = require('./routes/Users')
var Checkouts = require('./routes/Checkouts')
var Products = require('./routes/Products')

app.use('/users', Users)
app.use('/checkouts', Checkouts)
app.use('/products', Products)

app.listen(port, () => {
    console.log("Server is running on port" + port)
})