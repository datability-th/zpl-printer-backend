var templateSINGLE = `
^XA

^FX ===========================================
^FX =============== New Page #1 ===============
^FX ===========================================
^FX ====== Col #1 ======
^FX --> QRCode Product ID <--
^FO15,0
^BY2,2,25
^BQN,2,7
^FDMA,\"_serial_number1_\"
^FS
^FO5,5
^GB310,230,2
^FS

^FX --> Text Right Align <--
^CFA,10
^CW2,E:ANMD_S.TTF
^FO170,25^FDProduct Number^FS
^FO170,40^FD\"_product_number1_\"^FS
^FO170,65^FD[\"_product_name1_\"]^FS
^FO170,80^FDTYPE: \"_type1_\"^FS
^FO170,95^FDPRODUCT: \"_product1_\"^FS
^FO170,110^FDSURFACE: \"_surface1_\"^FS
^FO170,125^FDCOLOR: \"_color1_\"^FS
^FO170,140^FDLOT Date: \"_lot_date1_\"^FS

^FX --> Text Serial Number <--
^FO20,180^FDSerial Number^FS
^FO20,200^FD\"_serial_number1_\"^FS

^XZ
`;

var templateDUAL = `
^XA

^FX ===========================================
^FX =============== New Page #1 ===============
^FX ===========================================
^FX ====== Col #1 ======
^FX --> QRCode Product ID <--
^FO15,0
^BY2,2,25
^BQN,2,7
^FDMA,\"_serial_number1_\"
^FS
^FO5,5
^GB310,230,2
^FS

^FX --> Text Right Align <--
^CFA,10
^CW2,E:ANMD_S.TTF
^FO170,25^FDProduct Number^FS
^FO170,40^FD\"_product_number1_\"^FS
^FO170,65^FD[\"_product_name1_\"]^FS
^FO170,80^FDTYPE: \"_type1_\"^FS
^FO170,95^FDPRODUCT: \"_product1_\"^FS
^FO170,110^FDSURFACE: \"_surface1_\"^FS
^FO170,125^FDCOLOR: \"_color1_\"^FS
^FO170,140^FDLOT Date: \"_lot_date1_\"^FS

^FX --> Text Serial Number <--
^FO20,180^FDSerial Number^FS
^FO20,200^FD\"_serial_number1_\"^FS

^FX ===========================================
^FX =============== New Page #2 ===============
^FX ===========================================
^FX ====== Col #1 ======
^FX --> QRCode Product ID <--
^FO330,0
^BY2,2,25
^BQN,2,7
^FDMA,\"_serial_number2_\"
^FS
^FO320,5
^GB310,230,2
^FS

^FX --> Text Right Align <--
^CFA,10
^CW2,E:ANMD_S.TTF
^FO485,25^FDProduct Number^FS
^FO485,40^FD\"_product_number2_\"^FS
^FO485,65^FD[\"_product_name2_\"]^FS
^FO485,80^FDTYPE: \"_type2_\"^FS
^FO485,95^FDPRODUCT: \"_product2_\"^FS
^FO485,110^FDSURFACE: \"_surface2_\"^FS
^FO485,125^FDCOLOR: \"_color2_\"^FS
^FO485,140^FDLOT Date: \"_lot_date2_\"^FS

^FX --> Text Serial Number <--
^FO330,180^FDSerial Number^FS
^FO330,200^FD\"_serial_number2_\"^FS

^XZ
`;

module.exports = { templateSINGLE, templateDUAL };
