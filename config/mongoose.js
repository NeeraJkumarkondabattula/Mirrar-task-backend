//import mongoose
const mongoose = require("mongoose");
//url for connect mongodb
const mongo =
  "mongodb+srv://neerajkumarkondabattula:tbsZPKGmdbi2xa3m@product.0kt07jv.mongodb.net/?retryWrites=true&w=majority";
//connection

mongoose
  .connect(mongo)
  .then(() => console.log("DB Connected Succesfully"))
  .catch((err) => console.log("Error while Connecting DB", err));
