let mongoose = require('mongoose')

const server = 'ds221609.mlab.com:21609'
const database = 'test'
const user = 'test'
const password = 'test'
// 
mongoose.connect("mongodb+srv://test:test@cluster0.ljuyz.mongodb.net/contact?retryWrites=true&w=majority", {'useNewUrlParser': true})
mongoose.set('useCreateIndex', true);

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  subject:String,
  message:String,
})

module.exports = mongoose.model('ContactDetails', CustomerSchema);