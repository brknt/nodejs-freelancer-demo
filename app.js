const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

const ejs = require("ejs");

const pageRoute = require("./routes/pageRoute");
const portfolioRoute = require("./routes/portfolioRoute");

const app = express();


// CONNECT MONGODB 
mongoose
  .connect("mongodb://localhost/freelancer-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection succesful");
  })
  .catch((error) => {
    console.log(`Database connection failed : ${err}`);
  });


// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());




app.use("/", pageRoute.routes);
app.use("/portfolio",portfolioRoute.routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
