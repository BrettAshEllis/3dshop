const express = require("express");
const router = express.Router();
const { login, signup } = require("../models/user.models")

router.get("/verify", (req, res) => {
    return res.send({
        data: { username: req.user.username },
        success: true,
        error: null,
    });
});

router.get("/logout", (req, res) => {
    res.clearCookie("access_token");
    return res.send({ data: null, success: true, error: null });
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    login(res, username, password);
});

router.put("/signup", (req, res) => {
    signup(res, req.body.username, req.body.password);
});

module.exports = router;