const express = require("express");
const bodyParser = require("body-parser");

const util = require("./module/utilZPLPrinter");
var fakeAPI = require("./module/fakeAPI.json");
var isOdd = true; // Check Array of fakeAPI
const printerName = "ZDesigner ZD220-203dpi ZPL";

// Check Array of fakeAPI
if (fakeAPI.data.length % 2 == 0) {
  console.log("--->templateDUAL");
  isOdd = false;
}

// Check Printer Zebra Name
util.CheckPrinterName();

// Command Print on ZPL Format
util.MapItemsToPrintStickerZPL(printerName, isOdd, fakeAPI.data);

const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text({ type: "*/*" }));

app.post("/handle", (req, res) => {
  console.log("req.body", req.body);
  res.status(201).json(req.body);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Start server at port 3000.");
});
