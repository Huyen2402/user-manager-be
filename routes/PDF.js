const PDFDocument = require('pdfkit');
// var doc = new PDFDocument();
const fs = require('fs')
var stream = require('blob-stream')
const doc = new PDFDocument();
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // Passing size to the constructor



 // add your content to the document here, as usual
 
 // get a blob when you are done
 doc.end();
 stream.on('finish', function() {
   // get a blob you can do whatever you like with
   const blob = stream.toBlob('application/pdf');
 
   // or get a blob URL for display in the browser
   const url = stream.toBlobURL('application/pdf');
   iframe.src = url;
 });


});


module.exports = router;