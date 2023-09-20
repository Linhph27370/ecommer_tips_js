const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

//init middlerware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
// init routes 
app.get("/",(req, res, next) =>{
    const strCompress = "hello"
    return res.status(200).json({
        metadata: strCompress.repeat(10000),
        message: 'Welcome Fantip!'
    })
})

module.exports = app