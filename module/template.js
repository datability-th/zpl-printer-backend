var templateSINGLE = `
^XA
~TA000
~JSN
^LT0
^MNW
^MTT
^PON
^PMN
^LH0,0
^JMA
^PR6,6
~SD15
^JUS
^LRN
^CI27
^PA0,1,1,0
^XZ

^XA
^MMT
^PW831
^LL480
^LS-16
^FT586,391^A0N,23,23^FH\^CI28^FD\"_serial_number1_\"^FS^CI27
^FT585,314^A0N,23,23^FH\^CI28^FD[ABCDE]^FS^CI27
^FT586,352^A0N,17,18^FH\^CI28^FDQTY^FS^CI27
^FT353,392^A0N,23,23^FH\^CI28^FD[ABCDE]^FS^CI27
^FT353,352^A0N,17,18^FH\^CI28^FDSPEC^FS^CI27
^FT351,314^A0N,23,23^FH\^CI28^FD[ABCDE]^FS^CI27
^FT585,275^A0N,17,18^FH\^CI28^FDCOLOR^FS^CI27
^FT351,275^A0N,17,18^FH\^CI28^FDSURFACE^FS^CI27
^FT585,232^A0N,23,23^FH\^CI28^FD[ABCDE]^FS^CI27
^FT585,193^A0N,17,18^FH\^CI28^FDTYPE^FS^CI27
^FT353,233^A0N,23,23^FH\^CI28^FD[ABCDE]^FS^CI27
^FT353,194^A0N,17,18^FH\^CI28^FDPROFILE^FS^CI27
^FT353,154^A0N,23,23^FH\^CI28^FD[PRODUCT NAME]^FS^CI27
^FT353,115^A0N,17,18^FH\^CI28^FDNAME^FS^CI27
^FT36,452^A0N,23,23^FH\^CI28^FD[SERIAL NUMBER]^FS^CI27
^FT578,80^A0N,23,23^FH\^CI28^FD[10/02/2021]^FS^CI27
^FT353,80^A0N,23,23^FH\^CI28^FD[010010101]^FS^CI27
^FT36,417^A0N,17,18^FH\^CI28^FDSERIAL NUMBER^FS^CI27
^FT578,42^A0N,17,18^FH\^CI28^FDLOT DATE^FS^CI27
^FT353,43^A0N,17,18^FH\^CI28^FDPRODUCT ID^FS^CI27
^PQ1,0,1,Y

^FX --> QRCode Product ID <--
^FO15,0
^BY2,2,25
^BQN,2,10
^FDMA,\"_serial_number1_\"

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
