
/**
 * Required External Modules
 */

const express = require("express");
const multer = require('multer');
const Excel = require('exceljs');

const fileDestination = './uploads';


let storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, fileDestination)
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

  var resultLog = [];
  console.log('File Uploading: ' + req.filename);
  req.filePath = fileDestination + '/' +req.filename;	
  var workbook = new Excel.Workbook();
  workbook.xlsx.readFile(req.filePath)
      .then(function () {       
            var worksheet = workbook.getWorksheet(1);      
            worksheet.eachRow({ includeEmpty: false },function (row, rowNumber) {
              if (rowNumber != 1) {
                var currRow = worksheet.getRow(rowNumber); 
                console.log(rowNumber,"Name :" + currRow.getCell(1).value +", email :" +currRow.getCell(2).value);
                resultLog.push({'ID' : rowNumber ,'Name' : currRow.getCell(1).value , 'email' : currRow.getCell(2).value});
              }    
            });
        res.status(200).send(resultLog);     
      }).catch(function (error) {
        res.status(500).send({ code: 500 , message: error.message, error: error });
      });
});

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Fileupload to requests on http://localhost:${port}`);

  });