const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Song = new Schema(
  {
    name: { type: String, required: true },
    artist: [],
    format: String,
    key: String,
    sheetMusic: String
  },
  { timestamps: true },
)

module.exports = mongoose.model('songbrary', Song)