const validate = require('validate.js');
const shortId = require('shortid');

//VALIDATE URL
const validateUrl = (url = '') => {
  return validate({ website: url }, {
    website: {
      url: {
        allowLocal: true,
      }
    }
  });
};

//GENERATE KEY
const generateUrlKey = () => shortId.generate();

module.exports = { validateUrl, generateUrlKey: generateUrlKey };

