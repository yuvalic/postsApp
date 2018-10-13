const express    = require('express')
const mongoose   = require('mongoose')
const postRoutes = require('./routes/posts')
const bodyParser = require('body-parser')
const path       = require('path')

const app  = express()
const port = process.env.PORT || 4000

setTimeout(() => {
  mongoose.connect('mongodb://mongo:27017/posts', (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('mongo is up')
    }
  })
}, 3000)


mongoose.connection.on('reconnected', () => console.log('dbevent: reconnected'))
mongoose.connection.on('disconnected', function () {
  console.log('dbevent: disconnected')
})
app.use(express.static(path.join('client/dist')))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/posts', postRoutes)

app.listen(port, () => console.log('server up (:'))
