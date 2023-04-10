const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");

const app = express();

app.use("/books", router);
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://admin:5PqYg9OKIVsbYHqE@cluster0.iksaunn.mongodb.net/bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

//5PqYg9OKIVsbYHqE
 