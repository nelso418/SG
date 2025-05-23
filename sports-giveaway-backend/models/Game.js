const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
  date: Date,
  homeTeam: String,
  awayTeam: String,
  league: String,
  giveaway: { type: mongoose.Schema.Types.ObjectId, ref: 'Giveaway', default: null }
});
module.exports = mongoose.model('Game', GameSchema);