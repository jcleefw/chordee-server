const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Song = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: [] },
    format: { type: String },
    key: { type: String },
  },
  { timestamps: true },
)

module.exports = mongoose.model('songbrary', Song)