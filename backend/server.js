const express = require("express");
const cors = require("cors");
const { connectToMainDB, connectToProductsDB } = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const nodemailer = require("nodemailer");
const {TestModel} = require("./models/products.js")
const { generateEmailBody } = require('./routes/emailGen');

const app = express();

connectToMainDB();
connectToProductsDB();

app.use(express.json());
app.use(cors());

// Define endpoints
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);



app.get("/api/products", async (req, res) => {
  try {
    const docs = await TestModel.find({});
    console.log("Retrieved data:", docs);
    res.json(docs);
  } catch (err) {
    console.error("Error retrieving data from database: ", err);
    res.status(500).send("Error retrieving data from database");
  }
});

app.post("/api/send-email", async (req, res) => {
  try {
    const cart = req.body.cart;

    const emailBody = await generateEmailBody(cart);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bonerr722@gmail.com",
        pass: "ljviycrznouzelpc",
      },
    });

    const mailOptions = {
      from: "bonerr722@gmail.com",
      to: "aneeshkp1515@gmail.com",
      subject: "Your Cart Details",
      html: emailBody,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});



// Start the server
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
