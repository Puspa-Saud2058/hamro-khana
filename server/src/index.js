const express = require('express')
const connection=require('./db/connection')
const User=require('./models/user')
const app = express()
const port = 4000
connection()
app.post('/users',async (req, res) => {
  await User.create
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})