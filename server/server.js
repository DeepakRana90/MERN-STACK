require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

app.use(express.json());

app.use("/api/auth", router);


// app.get("/", (req, res) => {
//     res.status(200).send("Welcome server");
// });

// app.get("/register", (req,res) => {
//     res.status(200).send("Rsgisterr");
// })

connectDb().then(() => {    
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`my new respose in : ${PORT}`);
    });
});