// * Express :- By Using Node.js use Server Side that time we use Express
const express = require('express');
// * Create dbConfig = And pass to localhost MongoDb url 
const dbConfig = require('./database.config');
// * Create mongoose to Acceess mongoose
const mongoose = require('mongoose');
// * bodyParser :- create Middlewares. the MiddleWare incoming request stream and Exposes it on req.body 
// * middlewares part of express.js 
const bodyParser = require('body-parser');
// * Create app variable and pass express to it
const app = express();

// * Returns middleware that only parses urlencoded bodies and only looks at requests
// * where the Content-Type header matches the type option
app.use(bodyParser.urlencoded({ extended: true })) // urlencoded : work on middlewares 

//  * Returns middleware that only parses json and Check Type
// * app.use = use is HTTP method for which the middleware function applies
app.use(bodyParser.json())

// * Create the mongoose.promise at global level 
mongoose.Promise = global.Promise;


// * mongoosse = connect nodejs And dataBase  and Translate between objects in code and 
//   reppresentation those object in MongoDB
mongoose.connect(dbConfig.url, {
// * useNewUrlParser = new URL string parser instead of current one
    useNewUrlParser: true,
// * useUnifiedTopology = new Server Discovery and Monitoring engine instead of current one
    useUnifiedTopology: true

}).then(() => {
    console.log("successfully contected to database");
}).catch(err => {
    console.log('could not connect to the database . Exiting now...', err);
    process.exit(); //exit the flow
});

// Setting Notes routes to express app
require('./app/routes/note.routes')(app);

// * listen 3000 local-host
app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})
