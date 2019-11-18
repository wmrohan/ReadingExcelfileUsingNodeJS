
/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const multer = require('multer');




let storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, './uploads')
	},
	filename: function (req, file, cb) {
      req.filename = Date.now() + '-' + file.originalname;
      cb(null, req.filename);
    }
  })

const upload = multer({ storage: storage }).single('file');



/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

// index.js

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send("welcome to filestream");
  });

/**
 * Routes for upload
 */

app.post("/upload", upload, (req, res)   => {
  res.status(200).send("Successfully upload "+req.filename);
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Fileupload to requests on http://localhost:${port}`);

  });