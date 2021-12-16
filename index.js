//APP VARIABLES
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.port;
const host = process.env.host;
const bodyParser = require('body-parser');

//DB, LOGIC AND SERVICES
const services = require('./Routes/services');
const db = require('./Data/db');
const urlDb = require('./Controller/url');

//CORS VARIABLES ACCEPT CLIENT REQUEST FROM THIS ORIGIN
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => console.log('listening port ' + port));

//ENDPOINTS
//create short url
app.post('/url', async (req, res) => {
  try {
    if (!!services.validateUrl(req.body.url)) {
      return res.status(400).send({ message: 'invalide url please enter a valid url!' });
    }

    //genearte shortId
    const urlKey = services.generateUrlKey();
    const shortUrl = `http://${host}:${port}/${urlKey}`;

    await urlDb.save(req.body.url, shortUrl, urlKey);
    return res.status(200).send({ message: 'url was shortened successfully', url: shortUrl });
  } catch (error) {
    return res.status(500).send({ message: 'There was an error that occured while making your request please try again!' })
  }
});

//Get short url
app.get('/:urlId', async (req, res) => {
  try {
    const url = await urlDb.find(req.params.urlId);
    return !url ? res.status(400).send({ message: 'url not found!' }) : res.redirect(301, url.longUrl);
  } catch (error) {
    return res.status(500).send({ message: 'There was an error that occured while making your request please try again!' })
  }
});

//Get all short all
app.get('/url/all', async (req, res) => {
  try {
    const urls = await urlDb.findAll();
    return !urls ? res.status(400).send({ message: 'no urls found!' }) : res.status(200).send({ message: 'urls fetched fetched successfully', urls: urls });
  } catch (error) {
    return res.status(500).send({ message: 'There was an error that occured while making your request please try again!' })
  }
});



