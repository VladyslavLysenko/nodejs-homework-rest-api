// AlvEjFY5oTnLAM35
const app = require("./app");
const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://Vlad:AlvEjFY5oTnLAM35@cluster0.fx2z7ky.mongodb.net/contacts_reader?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })

