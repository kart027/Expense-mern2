const mongoose = require("mongoose")

function connect(){
    const connectionParams={
        useNewUrlParser: true,
       
        useUnifiedTopology: true
        
    }
    mongoose.connect("mongodb+srv://kartik:kartik27076@cluster0.7ecurks.mongodb.net/?retryWrites=true",connectionParams)
        .then( () => {
            console.log('Connected to database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. \n${err}`);
        })

}

module.exports= connect;
