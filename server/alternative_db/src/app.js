require("dotenv").config();
const express = require('express')
const morgan = require('morgan')


// propereties
const app = express()
app.use(morgan('combined'))
app.use(express.json())

// file for routes
require('./routes')(app)

const port = process.env.PORT || 8081
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});