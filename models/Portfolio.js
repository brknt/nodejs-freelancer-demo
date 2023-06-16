const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PortfolioSchema = new Schema({

    title: String,
    description: {
        type: String,
        trim: true
    },
    image:String,
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Portfolio = mongoose.model('Porfolio',PortfolioSchema);

module.exports = Portfolio;