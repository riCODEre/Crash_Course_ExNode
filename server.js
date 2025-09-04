const exp = require('express')
const app = exp()

app.set('view engine', 'ejs')

app.use((req, res, next) => {
    res.locals.currentPath = req.path
    next()
})

app.use('/', require("./routes/entry"))
app.use(exp.static("public"))



app.listen(3000)