const express = require("express");
const bodyParser = require("body-parser");

const util = require("./module/utilZPLPrinter");
var fakeAPI = require("./module/fakeAPI.json");
var isOdd = true; // Check Array of fakeAPI
const printerName = "ZDesigner ZD230-203dpi ZPL";

const app = express();
app.use(bodyParser.json());

// Set up CORS Middleware and logging
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, x-access-token, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, HEAD"
  );
  console.log(req.method, req.originalUrl);
  next();
});

app.post("/zpl_print", (req, res) => {
  // Check Array of fakeAPI
  var _data = req.body;
  // console.log(_data);
  //var _data = fakeAPI.data;
  // if (_data.length % 2 == 0) {
  //   //console.log("--->templateDUAL");
  //   isOdd = false;
  // }

  // Check Printer Zebra Name
  util.CheckPrinterName();

  // Command Print on ZPL Format
  util.MapItemsToPrintStickerZPL(printerName, isOdd, _data);

  res.status(201).json({ status: "success" });
});

app.get("/", (req, res) => {
  res.send("Hi ZPL Printer Backend");
});

app.listen(4000, () => {
  console.log("Start server at port 4000.");
});
