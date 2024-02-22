const mongoose = require("mongoose")

module.exports=() =>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try{
        mongoose.connect('mongodb://localhost:27017', connectionParams)
        console.log("Database connected sucessfully!")
    }
    catch(error){
        console.log(error)
        console.log("Could not connect to the database!")
    }
}