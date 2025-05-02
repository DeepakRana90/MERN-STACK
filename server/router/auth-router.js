const express = require("express");
const router = express.Router();
// const {home, register} = require("../controllers/auth-controller");
const authcontrol = require("../controllers/auth-controller");

// router.get("/", (req,res) => {
//     res.status(200).send("heloooooo");
// });

router.route("/").get(authcontrol.home);

router.route("/register").post(authcontrol.register);
router.route("/register").get(authcontrol.register);


module.exports = router;