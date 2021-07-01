var printer = require("printer");
//import {printer} from "printer";
const moment = require("moment");
var { templateSINGLE, templateDUAL } = require("./template");

var objInfoSticker = {
  _received_date1_: "",
  _product_name1_: "",
  _product_id1_: "",
  _packing_list1_: "",
  _product_code1_: "",
  _color1_: "",
  _surface1_: "",
  _width1_: "",
  _thick1_: "",
  _length1_: "",
  _qty1_: "",
  _serial_number1_: "",
  _image1_: "",

  _received_date2_: "",
  _product_name2_: "",
  _product_id2_: "",
  _packing_list2_: "",
  _product_code2_: "",
  _color2_: "",
  _surface2_: "",
  _width2_: "",
  _thick2_: "",
  _length2_: "",
  _qty2_: "",
  _serial_number2_: "",
  _image2_: "",
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

    // _received_date_
    objInfoSticker.received_date1 =
      fakeAPI[i]._received_date_ === undefined ||
      fakeAPI[i]._received_date_ === ""
        ? "-"
        : moment(new Date(fakeAPI[i]._received_date_)).format("DD/MM/YYYY");

    // _product_name_
    objInfoSticker._product_name1_ =
      fakeAPI[i]._product_name_ === undefined ||
      fakeAPI[i]._product_name_ === ""
        ? "-"
        : fakeAPI[i]._product_name_;

    // _product_id_
    objInfoSticker._product_id1_ =
      fakeAPI[i]._product_id_ === undefined || fakeAPI[i]._product_id_ === ""
        ? "-"
        : fakeAPI[i]._product_id_;

    // _packing_list_
    objInfoSticker._packing_list1_ =
      fakeAPI[i]._packing_list_ === undefined ||
      fakeAPI[i]._packing_list_ === ""
        ? "-"
        : fakeAPI[i]._packing_list_;

    // _product_code_
    objInfoSticker._product_code1_ =
      fakeAPI[i]._product_code_ === undefined ||
      fakeAPI[i]._product_code_ === ""
        ? "-"
        : fakeAPI[i]._product_code_;

    // _color_
    objInfoSticker._color1_ =
      fakeAPI[i]._color_ === undefined || fakeAPI[i]._color_ === ""
        ? "-"
        : fakeAPI[i]._color_;

    // _surface_
    objInfoSticker._surface1_ =
      fakeAPI[i]._surface_ === undefined || fakeAPI[i]._surface_ === ""
        ? "-"
        : fakeAPI[i]._surface_;

    // _width_
    objInfoSticker._width1_ =
      fakeAPI[i]._width_ === undefined || fakeAPI[i]._width_ === ""
        ? "-"
        : fakeAPI[i]._width_;

    // _thick_
    objInfoSticker._thick1_ =
      fakeAPI[i]._thick_ === undefined || fakeAPI[i]._thick_ === ""
        ? "-"
        : fakeAPI[i]._thick_;

    // _length_
    objInfoSticker._length1_ =
      fakeAPI[i]._length_ === undefined || fakeAPI[i]._length_ === ""
        ? "-"
        : fakeAPI[i]._length_;

    // _qty_
    objInfoSticker._qty1_ =
      fakeAPI[i]._qty_ === undefined || fakeAPI[i]._qty_ === ""
        ? "-"
        : fakeAPI[i]._qty_;

    // _serial_number_
    objInfoSticker._serial_number1_ =
      fakeAPI[i]._serial_number_ === undefined ||
      fakeAPI[i]._serial_number_ === ""
        ? "-"
        : fakeAPI[i]._serial_number_;

    // _image_
    // objInfoSticker._image1_ =
    //   fakeAPI[i]._image_ === undefined || fakeAPI[i]._image_ === ""
    //     ? "-"
    //     : fakeAPI[i]._image_;

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
    /_received_date1_/g,
    objInfoSticker._received_date1_
  );
  template = template.replace(
    /_product_name1_/g,
    objInfoSticker._product_name1_
  );
  template = template.replace(/_product_id1_/g, objInfoSticker._product_id1_);
  template = template.replace(
    /_packing_list1_/g,
    objInfoSticker._packing_list1_
  );
  template = template.replace(
    /_product_code1_/g,
    objInfoSticker._product_code1_
  );
  template = template.replace(/_color1_/g, objInfoSticker._color1_);
  template = template.replace(/_surface1_/g, objInfoSticker._surface1_);
  template = template.replace(/_width1_/g, objInfoSticker._spec1_);
  template = template.replace(/_thick1_/g, objInfoSticker._profile1_);
  template = template.replace(/_lenght1_/g, objInfoSticker._remark_date1_);
  template = template.replace(/_qty1_/g, objInfoSticker._qty1_);
  template = template.replace(
    /_serial_number1_/g,
    objInfoSticker._serial_number1_
  );
  // template = template.replace(/_image1_/g, objInfoSticker._image1_);

  // Template Page #2 --> Print when even of Array
  // console.log("---->>>>");
  // console.log("_mustSingleFormat", _mustSingleFormat);
  // console.log("---->>>>");
  if (_mustSingleFormat == false) {
    template = template.replace(
      /_received_date2_/g,
      objInfoSticker._received_date2_
    );
    template = template.replace(
      /_product_name2_/g,
      objInfoSticker._product_name2_
    );
    template = template.replace(/_product_id2_/g, objInfoSticker._product_id2_);
    template = template.replace(
      /_packing_list2_/g,
      objInfoSticker._packing_list2_
    );
    template = template.replace(
      /_product_code2_/g,
      objInfoSticker._product_code2_
    );
    template = template.replace(/_color2_/g, objInfoSticker._color2_);
    template = template.replace(/_surface2_/g, objInfoSticker._surface2_);
    template = template.replace(/_width2_/g, objInfoSticker._spec2_);
    template = template.replace(/_thick2_/g, objInfoSticker._profile2_);
    template = template.replace(/_lenght2_/g, objInfoSticker._remark_date2_);
    template = template.replace(/_qty2_/g, objInfoSticker._qty2_);
    template = template.replace(
      /_serial_number2_/g,
      objInfoSticker._serial_number2_
    );
    // template = template.replace(/_image2_/g, objInfoSticker._image2_);
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
