const mongoose = require('mongoose');

async function generateEmailBody(cart) {
  console.log(cart);
  const db = mongoose.connection;
  const User = db.collection("users");
  const lastUser = await User.findOne({}, { sort: { _id: -1 } });
  console.log(lastUser);
  let emailBody = `<h1>A new order has arrived from ${lastUser.firstName} ${lastUser.lastName}!</h1>`;
  emailBody +=
    "<h2>Please reserve the following items in your shop, the customer will be arriving within 30 minutes.</h2>";
  emailBody += "<ul>";
  cart.forEach((item) => {
    emailBody += `<li>${item.title} - Quantity: ${item.quantity}</li>`;
  });
  emailBody += "</ul>";
  emailBody +=
    "<p>Note: You can cancel the reservation if the customer does not arrive within one hour of giving the order.</p>";
  emailBody += `<p>Contact ${lastUser.email} for further queries with the customer.</p>`;
  return emailBody;
}

module.exports = {
  generateEmailBody
};
