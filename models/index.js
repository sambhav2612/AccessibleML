var mongoose = require('mongoose');
var { Schema } = mongoose;

var blairwatchSchema = new Schema({
    originalUrl: String,
      urlCode: String,
      shortUrl: String,
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
});

mongoose.model('BlairWitchSchema', blairwatchSchema);