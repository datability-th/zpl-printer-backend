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
