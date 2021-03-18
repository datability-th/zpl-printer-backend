const express = require("express");
const bodyParser = require("body-parser");

const util = require("./module/utilZPLPrinter");
var fakeAPI = require("./module/fakeAPI.json");
var isOdd = true; // Check Array of fakeAPI
const printerName = "ZDesigner ZD220-203dpi ZPL";

const app = express();
app.use(bodyParser.json());

app.post("/zpl_print", (req, res) => {
  // Check Array of fakeAPI
  if (fakeAPI.data.length % 2 == 0) {
    //console.log("--->templateDUAL");
    isOdd = false;
  }

  // Check Printer Zebra Name
  util.CheckPrinterName();

  // Command Print on ZPL Format
  util.MapItemsToPrintStickerZPL(printerName, isOdd, fakeAPI.data);

  res.status(201).json({ status: "success" });
});

app.get("/", (req, res) => {
  res.send("Hi ZPL Printer Backend");
});

app.listen(3000, () => {
  console.log("Start server at port 3000.");
});
