//CONNECT TO MONGODB DATABASE url_shortener
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/url_shortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

