const mongoose = require('mongoose')



module.exports = {
  connect: () => {
    db = mongoose.connection
  },
  getDB:   () => db,
}