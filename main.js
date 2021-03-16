
var printer = require('printer');
var template = "N\nS4\nD15\nq400\nR\nB20,10,0,1,2,30,173,B,\"barcode\"\nP0\n";


console.log('default printer name: ' + (printer.getDefaultPrinterName() || 'is not defined on your computer'));


function printZebra(barcode_text, printer_name){
	printer.printDirect({data:template.replace(/barcode/, barcode_text)
		, printer:printer_name
		, type: "RAW"
		, success:function(){
			console.log("printed: "+barcode_text);
		}
		, error:function(err){console.log(err);}
	});
}

printZebra("123", "ZDesigner ZD220-203dpi ZPL");