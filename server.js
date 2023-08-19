const { json } = require("body-parser");
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use("/api/v1/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)

app.listen(port, ()=> {
    console.log(` => http://localhost:${port}/ :)`);
});