const express = require('express')
const exphbs = require('express-handlebars')

//routes
const pagesRoutes = require('./routes/pagesRoutes')
const authRoutes = require('./routes/authRoutes')

const port = '4004'

const app = express()

app.engine('handlebars', exphbs.engine({ extname: 'handlebars', defaultLayout: "main"}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

//app.use('/toughts', toughtsRoutes)
app.use('/', authRoutes)

app.use('/', pagesRoutes)


app.listen(port, ()=>{
    console.log(`conectado na porta ${port}`)
})