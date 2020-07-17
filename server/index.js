const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000 
const router = require('./routes')
const configs = require('./config')
const config = configs[app.get['env']]


const app = express()
//enable pug
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'))

app.use(express.static('public'))

//get the current year
app.use((req, res, next) => {
    const date = new Date()
    res.locals.currentYear = date.getFullYear()
    return next()
})

app.use('/', router)

app.listen(PORT, () => console.log('Server started ' +  PORT))