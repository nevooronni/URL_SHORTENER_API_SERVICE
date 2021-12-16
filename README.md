# URL_SHORTENER_API_SERVICE
URL shortener API

#### Features

- Create short url
- List all short url
- Fetch single short url

#### Technologies Ussed
- MongoDb
- Nodjs

#### Dependencies Ussed

- Mongoose: connect MongoDB database
- Shortid: create short unique strings
- Validate.js: validate the URLs received
- Dotenv: load environment variables
- CORS: allow access from our client app
- Express: back-end web framework

#### How should this be manually tested?

- install nodejs from here [official Node.js website](https://nodejs.org/en/)
- install mongoDb for you OS from here [Install Mongo DB](https://docs.mongodb.com/guides/server/install/)
- instal npm package manager `npm install -g npm`
- clone this repository `git clone https://github.com/nevooronni/URL_SHORTENER_API_SERVICE.git`
- Go to master branch `git checkout master`
- Create file called .env at root of directory & put the port and host variables for the API endpoint in `port=5050, host=localhost`
- install dependencies from package.json `npm install`
- start application `node index.js`
