const mongoose = require('mongoose');
const GiveawaySchema = new mongoose.Schema({
  description: String,
  sponsor: String,
  imageUrl: String
});
module.exports = mongoose.model('Giveaway', GiveawaySchema);