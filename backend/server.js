const express = require('express');
const app = express();

// Define endpoints
app.get("/api", (req, res) => {
  res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] });
});


// Start the server
app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
