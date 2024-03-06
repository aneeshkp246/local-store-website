const express = require("express");
const app = express();
const cors = require("cors");
const { connectToMainDB, connectToProductsDB } = require("./db");
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth");
const mongoose = require('mongoose');
const nodemailer = require("nodemailer")

connectToMainDB();
connectToProductsDB();


app.use(express.json());
app.use(cors());
// Define endpoints
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

// Define the schema for the "test" collection
const testSchema = new mongoose.Schema({
  title: String,
  imageURL: String,
  price: Number,
  rating: Number,
});

// Define the Test model for the "test" collection
const TestModel = mongoose.model('Test', testSchema, 'test');

// Define your routes
app.get('/api/products', async (req, res) => {
  try {
    // Retrieve data from the "test" collection in the "products" database
    const docs = await TestModel.find({});
    console.log("Retrieved data:", docs);
    res.json(docs);
  } catch (err) {
    console.error("Error retrieving data from database: ", err);
    res.status(500).send('Error retrieving data from database');
  }
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  __v: Number
});

app.post('/api/send-email', async (req, res) => {
  try {
    const cart = req.body.cart;

    // Wait for the email body to be generated
    const emailBody = await generateEmailBody(cart);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bonerr722@gmail.com', 
        pass: 'ljviycrznouzelpc' 
      }
    });

    const mailOptions = {
      from: 'bonerr722@gmail.com', 
      to: 'aneeshkp1515@gmail.com',
      subject: 'Your Cart Details',
      html: emailBody
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});


async function generateEmailBody(cart) {
  console.log(cart);
  const db = mongoose.connection;
  const User = db.collection('users'); 
  const lastUser = await User.findOne({}, { sort: { _id: -1 } });
  console.log(lastUser);
  let emailBody = `<h1>A new order has arrived from ${lastUser.firstName} ${lastUser.lastName}!</h1>`;
  emailBody += '<h2>Please reserve the following items in your shop, the customer will be arriving within 30 minutes.</h2>';
  emailBody += '<ul>';
  cart.forEach((item) => {
    emailBody += `<li>${item.title} - Quantity: ${item.quantity}</li>`;
  });
  emailBody += '</ul>';
  emailBody += '<p>Note: You can cancel the reservation if the customer does not arrive within one hour of giving the order.</p>';
  emailBody += `<p>Contact ${lastUser.email} for further queries with the customer.</p>`;
  return emailBody;
}



// Start the server
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
