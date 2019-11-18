/*
 * @Author: Rohan Wijesundara 
 * @Date: 2017-11-18 13:40:20
 */


# ReadingExcelfileUsingNodeJS

Create a project directory named whatabyte-portal anywhere in your system. Using the terminal, make that directory your current directory and execute the following command to initialize your Node.js project with default settings:

# npm init -y

Then, under the project directory, create the entry point of the application, a file named index.js.

 echo  >> index.js   

 You'll use nodemon to monitor your project source code and automatically restart your Node.js server whenever it changes.  

 # npm install --save-dev nodemon

 Create a dev script command in your package.json file to run nodemon and delete the test script


 {
  "name": "ReadingExcelfileUsingNodeJS",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon ./index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^1.19.3"
  }
}

Integrating the Express Web Framework with Node.js

# npm i express

Now, under the Required External Modules section, import the express and path packages

/ index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

Next, under the App Variables section, add the following

// index.js

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

Under the Routes Definitions section, create a simple route handler for the HTTP GET / request that replies with a string

// index.js

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});


    
