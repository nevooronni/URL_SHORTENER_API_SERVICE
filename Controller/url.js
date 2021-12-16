const Url = require('../Data/models');
console.log("🚀 ~ file: url.js ~ line 2 ~ Url", Url)

//Create
const save = (longUrl, shortUrl, shortUrlId) => {
console.log("🚀 ~ file: url.js ~ line 6 ~ save ~ shortUrlId", shortUrlId)
console.log("🚀 ~ file: url.js ~ line 6 ~ save ~ shortURL", shortUrl)
console.log("🚀 ~ file: url.js ~ line 6 ~ save ~ longURL", longUrl)
  Url.create({ longUrl, shortUrl, shortUrlId })
};

//find one
const find = (shortUrlId) => Url.findOne({ shortUrlId: shortUrlId });

//find all
const findAll = () => Url.find();

module.exports = { save, find, findAll };



