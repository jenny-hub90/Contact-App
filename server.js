const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

console.log("connection string",process.env.DBCONNECTION)

mongoose.connect(process.env.DBCONNECTION).then(()=> console.log('connected to database')).
    catch((err)=> {console.error(err)});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});