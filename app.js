const util = require("./module/utilZPLPrinter");
var { templateSINGLE, templateDUAL } = require("./module/template");
var fakeAPI = require("./module/fakeAPI.json");
var isOdd = true; // Check Array of fakeAPI
const printerName = "ZDesigner ZD220-203dpi ZPL";

// Check Array of fakeAPI
var template = templateSINGLE;
if (fakeAPI.length % 2 === 0) {
  isOdd = false;
  template = templateDUAL;
}
util.CheckPrinterName();
util.MapItemsToPrintStickerZPL(printerName, isOdd, fakeAPI, template);
//util.FormatTemplateSticker(isOdd, template, objInfoSticker);
console.log("===");
console.log(template);
console.log("===");

// //var fakeAPI = ["A"];
// var fakeAPI = ["A", "B", "C"];
// //var fakeAPI = ["A", "B", "C", "D"];
// //var fakeAPI = ["A", "B", "C", "D", "E"];
// var isOdd = true;
// for (var i = 0; i < fakeAPI.length; i++) {
//   if (fakeAPI.length - 1 !== i) {
//     console.log("i= ", i);
//     console.log("i>>>= ", i + 1, "(Dual Format)");
//   } else {
//     if (isOdd) {
//       console.log("i>>>= ", i, "(Single Format)");
//     }
//   }

//   i++;
// }
