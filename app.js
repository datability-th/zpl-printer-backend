var printer = require("printer");
// var template = "N\nS4\nD15\nq400\nR\nB20,10,0,1,2,30,173,B,\"barcode\"\nP0\n";

var template = `
^XA

^FX ====== Col #1 ======
^FX --> QRCode Product ID <--
^FO15,0
^BY2,2,25
^BQN,2,7
^FDMA,010210510LT00001PK001
^FS
^FO5,5
^GB310,230,2
^FS

^FX --> Text Right Align <--
^CFA,10
^CW2,E:ANMD_S.TTF
^FO170,25^FDProduct Number^FS
^FO170,40^FD\"_product_number_\"^FS
^FO170,65^FD[\"_product_name_\"]^FS
^FO170,80^FDTYPE: \"_type_\"^FS
^FO170,95^FDPRODUCT: \"_product_\"^FS
^FO170,110^FDSURFACE: \"_surface_\"^FS
^FO170,125^FDCOLOR: \"_color_\"^FS
^FO170,140^FDLOT Date: \"_lot_date_\"^FS

^FX --> Text Serial Number <--
^FO20,180^FDSerial Number^FS
^FO20,200^FD\"_serial_number_\"^FS


^FX =============== New Page ===============
^FX ====== Col #1 ======
^FX --> QRCode Product ID <--
^FO330,0
^BY2,2,25
^BQN,2,7
^FDMA,010210510LT00001PK001
^FS
^FO320,5
^GB310,230,2
^FS

^FX --> Text Right Align <--
^CFA,10
^CW2,E:ANMD_S.TTF
^FO485,25^FDProduct Number^FS
^FO485,40^FD\"_product_number_\"^FS
^FO485,65^FD[\"_product_name_\"]^FS
^FO485,80^FDTYPE: \"_type_\"^FS
^FO485,95^FDPRODUCT: \"_product_\"^FS
^FO485,110^FDSURFACE: \"_surface_\"^FS
^FO485,125^FDCOLOR: \"_color_\"^FS
^FO485,140^FDLOT Date: \"_lot_date_\"^FS

^FX --> Text Serial Number <--
^FO330,180^FDSerial Number^FS
^FO330,200^FD\"_serial_number_\"^FS



^XZ
`;

console.log(
  "default printer name: " +
    (printer.getDefaultPrinterName() || "is not defined on your computer")
);

function printZebra(barcode_text, printer_name) {
  printer.printDirect({
    data: template.replace(/barcode/, barcode_text),
    printer: printer_name,
    type: "RAW",
    success: function () {
      console.log("printed: " + barcode_text);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

printZebra("123", "ZDesigner ZD220-203dpi ZPL");
