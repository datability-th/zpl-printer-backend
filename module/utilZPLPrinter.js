var printer = require("printer");
//import {printer} from "printer";
const moment = require("moment");
var { templateSINGLE, templateDUAL } = require("./template");

var objInfoSticker = {
  _product1_: "",
  _product_number1_: "",
  _product_name1_: "",
  _type1_: "",
  _product1_: "",
  _surface1_: "",
  _color1_: "",
  _lot_date1_: "",
  _serial_number1_: "",
  _remark_date1_: "", // Received Date
  _qty1_: "",
  _spec1_: "",
  _profile1_: "",
  _width1_: "",
  _thick1_: "",
  _length1_: "",

  _product2_: "",
  _product_number2_: "",
  _product_name2_: "",
  _type2_: "",
  _product2_: "",
  _surface2_: "",
  _color2_: "",
  _lot_date2_: "",
  _serial_number2_: "",
  _remark_date2_: "", // Received Date
  _qty2_: "",
  _spec2_: "",
  _profile2_: "",
  _width2_: "",
  _thick2_: "",
  _length2_: "",
};

const MapItemsToPrintStickerZPL = (printerName, isOdd, fakeAPI) => {
  var template = templateSINGLE;
  var _mustSingleFormat = true;
  // console.log("fakeAPI",fakeAPI)
  for (var i = 0; i < fakeAPI.length; i++) {
    // console.log("i", i)
    // if (fakeAPI.length - 1 !== i) {
    // Dual Format
    template = templateDUAL;
    _mustSingleFormat = false;

    // console.log("i>>>= ", i + 1, "(Dual Format)");
    objInfoSticker._product1_ =
      fakeAPI[i]._product_ === undefined || fakeAPI[i]._product_ === ""
        ? "-"
        : fakeAPI[i]._product_;
    objInfoSticker._product_number1_ =
      fakeAPI[i]._product_number_ === undefined ||
      fakeAPI[i]._product_number_ === ""
        ? "-"
        : fakeAPI[i]._product_number_;
    objInfoSticker._product_name1_ =
      fakeAPI[i]._product_name_ === undefined ||
      fakeAPI[i]._product_name_ === ""
        ? "-"
        : fakeAPI[i]._product_name_;
    objInfoSticker._type1_ =
      fakeAPI[i]._type_ === undefined || fakeAPI[i]._type_ === ""
        ? "-"
        : fakeAPI[i]._type_;
    objInfoSticker._surface1_ =
      fakeAPI[i]._surface_ === undefined || fakeAPI[i]._surface_ === ""
        ? "-"
        : fakeAPI[i]._surface_;
    objInfoSticker._color1_ =
      fakeAPI[i]._color_ === undefined || fakeAPI[i]._color_ === ""
        ? "-"
        : fakeAPI[i]._color_;
    objInfoSticker._lot_date1_ =
      fakeAPI[i]._lot_date_ === undefined || fakeAPI[i]._lot_date_ === ""
        ? "-"
        : moment(new Date(fakeAPI[i]._lot_date_)).format("DD/MM/YYYY");
    objInfoSticker._serial_number1_ =
      fakeAPI[i]._serial_number_ === undefined ||
      fakeAPI[i]._serial_number_ === ""
        ? "-"
        : fakeAPI[i]._serial_number_;

    objInfoSticker._remark_date1_ =
      fakeAPI[i]._remark_date_ === undefined || fakeAPI[i]._remark_date_ === ""
        ? "-"
        : moment(new Date(fakeAPI[i]._remark_date_)).format("DD/MM/YYYY");
    objInfoSticker._qty1_ =
      fakeAPI[i]._qty_ === undefined || fakeAPI[i]._qty_ === ""
        ? "-"
        : fakeAPI[i]._qty_;
    objInfoSticker._spec1_ =
      fakeAPI[i]._spec_ === undefined || fakeAPI[i]._spec_ === ""
        ? "-"
        : fakeAPI[i]._spec_;
    objInfoSticker._profile1_ =
      fakeAPI[i]._profile_ === undefined || fakeAPI[i]._profile_ === ""
        ? "-"
        : fakeAPI[i]._profile_;
    // } else {
    //   if (isOdd) {
    //     // Single Format
    //     template = templateSINGLE;
    //     _mustSingleFormat = true;
    //     // console.log("i>>>= ", i, "(Single Format)");
    //     objInfoSticker._product1_ = (fakeAPI[i]._product_ === undefined || fakeAPI[i]._product_ === "") ? "-" : fakeAPI[i]._product_;
    //     objInfoSticker._product_number1_ = (fakeAPI[i]._product_number_ === undefined || fakeAPI[i]._product_number_ === "") ? "-" : fakeAPI[i]._product_number_;
    //     objInfoSticker._product_name1_ = (fakeAPI[i]._product_name_ === undefined || fakeAPI[i]._product_name_ === "") ? "-" : fakeAPI[i]._product_name_;
    //     objInfoSticker._type1_ = (fakeAPI[i]._type_ === undefined || fakeAPI[i]._type_ === "") ? "-" : fakeAPI[i]._type_;
    //     objInfoSticker._surface1_ = (fakeAPI[i]._surface_ === undefined || fakeAPI[i]._surface_ === "") ? "-" : fakeAPI[i]._surface_;
    //     objInfoSticker._color1_ = (fakeAPI[i]._color_ === undefined || fakeAPI[i]._color_ === "") ? "-" : fakeAPI[i]._color_;
    //     objInfoSticker._lot_date1_ = (fakeAPI[i]._lot_date_ === undefined || fakeAPI[i]._lot_date_ === "") ? "-" : moment(new Date(fakeAPI[i]._lot_date_)).format('DD/MM/YYYY');
    //     objInfoSticker._serial_number1_ = (fakeAPI[i]._serial_number_ === undefined || fakeAPI[i]._serial_number_ === "") ? "-" : fakeAPI[i]._serial_number_;

    //     objInfoSticker._remark_date1_ = (fakeAPI[i]._remark_date_ === undefined || fakeAPI[i]._remark_date_ === "") ? "-" : moment(new Date(fakeAPI[i]._remark_date_)).format('DD/MM/YYYY');
    //     objInfoSticker._qty1_ = (fakeAPI[i]._qty_ === undefined || fakeAPI[i]._qty_ === "") ? "-" : fakeAPI[i]._qty_;
    //     objInfoSticker._spec1_ = (fakeAPI[i]._spec_ === undefined || fakeAPI[i]._spec_ === "") ? "-" : fakeAPI[i]._spec_;
    //     objInfoSticker._profile1_ = (fakeAPI[i]._profile_ === undefined || fakeAPI[i]._profile_ === "") ? "-" : fakeAPI[i]._profile_;
    //   }
    // }
    var templateFulfill = FormatTemplateSticker(
      _mustSingleFormat,
      template,
      objInfoSticker
    );
    PrintZebra(templateFulfill, printerName);
    // i++;
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
  template = template.replace(/_qty1_/g, objInfoSticker._qty1_);
  template = template.replace(/_spec1_/g, objInfoSticker._spec1_);
  template = template.replace(/_profile1_/g, objInfoSticker._profile1_);
  template = template.replace(/_remark_date1_/g, objInfoSticker._remark_date1_);
  template = template.replace(/_width1_/g, objInfoSticker._spec1_);
  template = template.replace(/_thick1_/g, objInfoSticker._profile1_);
  template = template.replace(/_lenght1_/g, objInfoSticker._remark_date1_);

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
    template = template.replace(/_qty2_/g, objInfoSticker._qty2_);
    template = template.replace(/_spec2_/g, objInfoSticker._spec2_);
    template = template.replace(/_profile2_/g, objInfoSticker._profile2_);
    template = template.replace(
      /_remark_date2_/g,
      objInfoSticker._remark_date2_
    );
    template = template.replace(/_width2_/g, objInfoSticker._spec1_);
    template = template.replace(/_thick2_/g, objInfoSticker._profile1_);
    template = template.replace(/_lenght2_/g, objInfoSticker._remark_date1_);
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
