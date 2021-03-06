const mongoose = require('mongoose');

const asnSchema = mongoose.Schema({
    nip: { type: Number, required: true, unique: true, min: 18 },
    password: { type: String, required: true, min: 8 },
    name: { type: String, required: true },
    pos: { type: String, required: true },
    bossName: { type: String, required: true },
    bossPos: { type: String, required: true },
    city: { type: String, required: true }
});

module.exports = mongoose.model('Asn', asnSchema);