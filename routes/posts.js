const router    = require('express').Router()
const postModel = require('../models/post-model')
const crypto    = require('crypto')

router.get('/', (req, res) => {
  postModel.find((err, posts) => {
    if (err) {
      return next(new Error(err))
    }
    res.json(posts)
  })
})

router.post('/', (req, res) => {
  const {msg, email} = req.body
  const md5sum       = crypto.createHash('md5')
  postModel.create({email, message: msg, image: md5sum.update(email).digest('hex')}, (err, post) => {
    res.json(post)
  })
})

module.exports = router
