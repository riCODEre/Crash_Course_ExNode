const app = require('express')()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("accessed")
    res.render("index", {text: "World"})
})

const regRouter = require("./routes/users")

app.use('/', regRouter)

app.listen(3000)