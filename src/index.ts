import express from 'express'//ESmodules
//const express = require('express'); //commonjs esto antes mejor el otro, porque se compila como commonjs

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())//middleware que transforma la req.body a un json

const PORT = 3000

//ping server to check server status
app.get('/ping', (_req, res) => {
    
    console.log('ping')
    res.send('pong')
})

//adding routes
app.use('/api/diaries', diaryRouter)



app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})