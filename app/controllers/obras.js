const mongoose  = require('mongoose');
const Obra    = require('../models/obra');

module.exports.list = (query) => {
    return Obra.find(query).exec();
};
