//API SCHEMA
const mongoose = require('mongoose');
const urlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  shortUrlId: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('URL', urlSchema);
