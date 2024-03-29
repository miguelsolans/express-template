/*
 * controller/person
 * Author: Miguel Solans
 * Notes:
 */
const Person    = require('../models/person');

module.exports.list = (query) => {
    return Person.find(query).exec();
};

module.exports.addNew = (data) => {
    let newData = new Person(data);

    return newData.save();
};