const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("entry/index")
})

router.get("/register", (req, res) => {
    res.render("entry/register")
})

router.get("/login", (req, res) => {
    res.render("entry/login")
})

module.exports = router