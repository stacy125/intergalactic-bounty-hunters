const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bountyHunters', {
  useNewUrlParser: true, useUnifiedTopology: true
});
module.exports = mongoose;
