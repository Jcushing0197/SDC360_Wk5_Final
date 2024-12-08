const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CensusSchema = new Schema({
    add_city: { type: String },
    add_state: { type: String },
    add_street: { type: String },
    add_zip: { type: String },
    census_year: { type: String },
    num_people: { type: String },
    census_taker: { type: String }
}, {
    collection: 'census'
});

module.exports = mongoose.model('Census', CensusSchema);


