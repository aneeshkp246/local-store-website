const mongoose = require("mongoose");

module.exports.connectToMainDB = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    try {
        // Connect to the main database
        mongoose.connect('mongodb://0.0.0.0:27017/users', connectionParams);
        console.log("Users Database connected successfully!");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to the main database!");
    }
};

module.exports.connectToProductsDB = () => {
    const productsConnectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    try {
        // Connect to the products database
        mongoose.createConnection('mongodb://0.0.0.0:27017/products', productsConnectionParams);
        console.log("Products Database connected successfully!");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to the products database!");
    }
};
