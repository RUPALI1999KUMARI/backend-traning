const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const globalMiddleware= function (req, res, next) {
    let currDate = new Date().toLocaleString()
    console.log(currDate, req.originalUrl,req.ip);
    next()
}


app.use(globalMiddleware)

mongoose.connect("mongodb+srv://RUPALIKUMARI:Ja8ibOldIbkNORKK@cluster0.wwhf9wj.mongodb.net/RUPALIDB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
