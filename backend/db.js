const mongoose = require("mongoose")

module.exports=() =>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try{
        mongoose.connect('mongodb://0.0.0.0:27017', connectionParams)
        console.log("Database connected sucessfully!")
    }
    catch(error){
        console.log(error)
        console.log("Could not connect to the database!")
    }
}

module.exports.connectToProductsDB = () => {
    const productsConnectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    try {
        mongoose.connect('mongodb://0.0.0.0:27017/products', productsConnectionParams);
        console.log("Products Database connected successfully!");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to the products database!");
    }
};