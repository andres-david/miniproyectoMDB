let mongoose = require("mongoose");

mongoose.connect('mongodb+srv://andres:andresdb22@cluster0.dkrq3.mongodb.net/test?authSource=admin&replicaSet=atlas-13q3di-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
                {useNewUrlParser: true, useUnifiedTopology: true })
.then( (db) => {
    console.log("database connected on " + db.connection.host);
})
.catch( (error) => {
    console.log( error );
})