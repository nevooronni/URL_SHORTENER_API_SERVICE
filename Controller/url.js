const Url = require('../Data/models');

//Create
const save = (longUrl, shortUrl, shortUrlId) => {
  Url.create({ longUrl, shortUrl, shortUrlId })
};

//find one
const find = (shortUrlId) => Url.findOne({ shortUrlId: shortUrlId });

//find all
const findAll = () => Url.find();

module.exports = { save, find, findAll };



