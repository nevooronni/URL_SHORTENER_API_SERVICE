const Url = require('../Data/models');

//Create
const save = (longURL, shortURL, shortUrlId) => {
  Url.create({ longURL, shortURL, shortUrlId })
};

//read
const find = (shortUrlId) => Url.findOne({ shortUrlId: shortUrlId });

module.exports = { save, find };



