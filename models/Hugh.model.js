const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hughTeeSchema = new Schema({
  color: [{ type: String, enum: ['black', 'white', 'grey'] }],
  size: [{ type: String, enum: ['XS', 'S', 'M', 'L', 'XL'] }],
});

const HughTee = mongoose.model('HughTee', hughTeeSchema);

module.exports = HughTee;
