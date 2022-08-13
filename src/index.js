const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

const route = require('./routes/route.js');
const mongoose =require('mongoose')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://RUPALIKUMARI:Ja8ibOldIbkNORKK@cluster0.wwhf9wj.mongodb.net/?retryWrites=true&w=majority"
,{
    useNewUrlParser: true,
}
).then( ()=> {console.log( "MongoDb is connected" )} )
.catch(err => console.log(err))

app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
