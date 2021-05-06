var printer = require("printer");
var { templateSINGLE, templateDUAL } = require("./template");

var objInfoSticker = {
  _product_number1_: "",
  _product_name1_: "",
  _type1_: "",
  _product1_: "",
  _surface1_: "",
  _color1_: "",
  _lot_date1_: "",
  _serial_number1_: "",

  _product_number2_: "",
  _product_name2_: "",
  _type2_: "",
  _product2_: "",
  _surface2_: "",
  _color2_: "",
  _lot_date2_: "",
  _serial_number2_: "",
};

const MapItemsToPrintStickerZPL = (printerName, isOdd, fakeAPI) => {
  var template = templateSINGLE;
  var _mustSingleFormat = true;
  // console.log("fakeAPI",fakeAPI)
  for (var i = 0; i < fakeAPI.length; i++) {
    if (fakeAPI.length - 1 !== i) {
      // Dual Format
      template = templateDUAL;
      _mustSingleFormat = false;
      console.log("i>>>= ", i + 1, "(Dual Format)");
      objInfoSticker._product_number1_ = fakeAPI[i]._product_number_;
      objInfoSticker._product_name1_ = fakeAPI[i]._product_name_;
      objInfoSticker._type1_ = fakeAPI[i]._type_;
      objInfoSticker._product1_ = fakeAPI[i]._product_;
      objInfoSticker._surface1_ = fakeAPI[i]._surface_;
      objInfoSticker._color1_ = fakeAPI[i]._color_;
      objInfoSticker._lot_date1_ = fakeAPI[i]._lot_date_;
      objInfoSticker._serial_number1_ = fakeAPI[i]._serial_number_;

      objInfoSticker._product_number2_ = fakeAPI[i + 1]._product_number_;
      objInfoSticker._product_name2_ = fakeAPI[i + 1]._product_name_;
      objInfoSticker._type2_ = fakeAPI[i + 1]._type_;
      objInfoSticker._product2_ = fakeAPI[i + 1]._product_;
      objInfoSticker._surface2_ = fakeAPI[i + 1]._surface_;
      objInfoSticker._color2_ = fakeAPI[i + 1]._color_;
      objInfoSticker._lot_date2_ = fakeAPI[i + 1]._lot_date_;
      objInfoSticker._serial_number2_ = fakeAPI[i + 1]._serial_number_;
    } else {
      if (isOdd) {
        // Single Format
        template = templateSINGLE;
        _mustSingleFormat = true;
        console.log("i>>>= ", i, "(Single Format)");
        objInfoSticker._product_number1_ = fakeAPI[i]._product_number_;
        objInfoSticker._product_name1_ = fakeAPI[i]._product_name_;
        objInfoSticker._type1_ = fakeAPI[i]._type_;
        objInfoSticker._product1_ = fakeAPI[i]._product_;
        objInfoSticker._surface1_ = fakeAPI[i]._surface_;
        objInfoSticker._color1_ = fakeAPI[i]._color_;
        objInfoSticker._lot_date1_ = fakeAPI[i]._lot_date_;
        objInfoSticker._serial_number1_ = fakeAPI[i]._serial_number_;
      }
    }
    var templateFulfill = FormatTemplateSticker(
      _mustSingleFormat,
      template,
      objInfoSticker
    );
    PrintZebra(templateFulfill, printerName);
    i++;
  }
};

const FormatTemplateSticker = (_mustSingleFormat, template, objInfoSticker) => {
  // Template Page #1
  template = template.replace(
    /_product_number1_/g,
    objInfoSticker._product_number1_
  );
  template = template.replace(
    /_product_name1_/g,
    objInfoSticker._product_name1_
  );
  template = template.replace(/_type1_/g, objInfoSticker._type1_);
  template = template.replace(/_product1_/g, objInfoSticker._product1_);
  template = template.replace(/_surface1_/g, objInfoSticker._surface1_);
  template = template.replace(/_color1_/g, objInfoSticker._color1_);
  template = template.replace(/_lot_date1_/g, objInfoSticker._lot_date1_);
  template = template.replace(
    /_serial_number1_/g,
    objInfoSticker._serial_number1_
  );

  // Template Page #2 --> Print when even of Array
  // console.log("---->>>>");
  // console.log("_mustSingleFormat", _mustSingleFormat);
  // console.log("---->>>>");
  if (_mustSingleFormat == false) {
    template = template.replace(
      /_product_number2_/g,
      objInfoSticker._product_number2_
    );
    template = template.replace(
      /_product_name2_/g,
      objInfoSticker._product_name2_
    );
    template = template.replace(/_type2_/g, objInfoSticker._type2_);
    template = template.replace(/_product2_/g, objInfoSticker._product2_);
    template = template.replace(/_surface2_/g, objInfoSticker._surface2_);
    template = template.replace(/_color2_/g, objInfoSticker._color2_);
    template = template.replace(/_lot_date2_/g, objInfoSticker._lot_date2_);
    template = template.replace(
      /_serial_number2_/g,
      objInfoSticker._serial_number2_
    );
  }

  return template;
};

const CheckPrinterName = () => {
  console.log(
    "default printer name: " +
      ("printer.getDefaultPrinterName()" || "is not defined on your computer")
  );
};

const PrintZebra = (templateFulfill, printer_name) => {
  // console.log("====");
  // console.log(templateFulfill);
  printer.printDirect({
    data: templateFulfill,
    printer: printer_name,
    type: "RAW",
    success: function () {
      console.log("printed: " + printer_name);
    },
    error: function (err) {
      console.log(err);
    },
  });
};

module.exports = { CheckPrinterName, MapItemsToPrintStickerZPL };
