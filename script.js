function getFontColor(rgbRy) {
  // if (colorContrast(rgbRy, [255, 255, 255]) > 4.5) {
  //   return "white";
   //} else {
   //  return "black";
   //}
 }
 let pickedColorRef = document.getElementById("input");
 let pickedColorRef1 = document.getElementById("input1");
 let pickedColorRef2 = document.getElementById("input2");
 let pickedColorRef3 = document.getElementById("input3");
 var theBody = document.body;
 var palette = document.querySelector(".palette");
 var img = document.getElementById("img");
 var viewColor = document.querySelector(".viewColor");// the current color
 var colorsRy = [];
 var imgW = 400;
 var canvas = document.querySelector("canvas");
 var ctx = canvas.getContext("2d");
 var cw = canvas.width = imgW; //img.width,
 cx = cw / 2;
 var ch = canvas.height = imgW * img.height / img.width,
   cy = ch / 2;
 
 //draw the first image on the canvas
 ctx.drawImage(img, 0, 0, cw, ch);
 // get the Image Data
 var imgData = ctx.getImageData(0, 0, cw, ch);
 var pixels = imgData.data;
 var thisRGB;
 var thisRGBRy;
 let tenant_id=16;
 let text1='{"data1":['+
 '{"Binated_Thread_Code": "B-1800","Thread_Discription": "Emerald Black","PMS_Code": "Process Black C","RGB_Code": "rgb(48, 49, 50)","Customer ": "landsend","Cust_Thread_Code": "1000","Cust_Thread_Discription": "EMERALD BLACK ","Cust_RGB_Code": "rgb(0 ,0 ,0)"},'+
 '{"Binated_Thread_Code": "B-1801","Thread_Discription": "Super White","PMS_Code": "663C","RGB_Code": "rgb(229, 231, 244)","Customer ": "landsend","Cust_Thread_Code": "1801","Cust_Thread_Discription": "WHITE ","Cust_RGB_Code": "rgb(128 ,255 ,255)"},'+
 '{"Binated_Thread_Code": "B-1801","Thread_Discription": "Super White","PMS_Code": "663C","RGB_Code": "rgb(229, 231, 244)","Customer ": "landsend","Cust_Thread_Code": "1802","Cust_Thread_Discription": "SNOW WHITE ","Cust_RGB_Code": "rgb(242,233,234)"},'+
 '{"Binated_Thread_Code": "B-1801","Thread_Discription": "Super White","PMS_Code": "663C","RGB_Code": "rgb(229, 231, 244)","Customer ": "landsend","Cust_Thread_Code": "1803","Cust_Thread_Discription": "CREME NEON ","Cust_RGB_Code": "rgb(237 ,236 ,223)"},'+
 '{"Binated_Thread_Code": "B-1000","Thread_Discription": "Emerald Black","PMS_Code": "426C","RGB_Code": "rgb(41, 41, 42)","Customer ": "landsend","Cust_Thread_Code": "1000","Cust_Thread_Discription": "BLACK","Cust_RGB_Code": "rgb(0 ,0 ,0)"},'+
 '{"Binated_Thread_Code": "B-1005","Thread_Discription": "Fluorescent White","PMS_Code": "663C","RGB_Code": "rgb(225, 227, 242)","Customer ": "landsend","Cust_Thread_Code": "1005","Cust_Thread_Discription": "FLUORESCENT WHITE","Cust_RGB_Code": "rgb(225,227,242)"},'+
 '{"Binated_Thread_Code": "B-1010","Thread_Discription": "Gray Haze","PMS_Code": "441C","RGB_Code": "rgb(195, 196, 191)","Customer ": "landsend","Cust_Thread_Code": "1010","Cust_Thread_Discription": "LT GRAY ","Cust_RGB_Code": "rgb(194 ,196 ,191)"},'+
 '{"Binated_Thread_Code": "B-1011","Thread_Discription": "Chrome","PMS_Code": "421C ","RGB_Code": "rgb(171, 176, 178)","Customer ": "landsend","Cust_Thread_Code": "1011","Cust_Thread_Discription": "MED GRAY ","Cust_RGB_Code": "rgb(169 ,175 ,178)"},'+
 '{"Binated_Thread_Code": "B-1012","Thread_Discription": "Smoke","PMS_Code": "429C","RGB_Code": "rgb(163, 176, 181)","Customer ": "landsend","Cust_Thread_Code": "1012","Cust_Thread_Discription": "STEEL ","Cust_RGB_Code": "rgb(163 ,175 ,179)"},'+
 '{"Binated_Thread_Code": "B-1013","Thread_Discription": "Peach Blush","PMS_Code": "5035C","RGB_Code": "rgb(239, 210, 203)","Customer ": "landsend","Cust_Thread_Code": "1013","Cust_Thread_Discription": "PEACH BLSM ","Cust_RGB_Code": "rgb(238 ,209 ,202)"},'+
 '{"Binated_Thread_Code": "B-1014","Thread_Discription": "Bermuda Sand","PMS_Code": "1767C","RGB_Code": "rgb(238, 178, 188)","Customer ": "landsend","Cust_Thread_Code": "1014","Cust_Thread_Discription": "PALE PINK ","Cust_RGB_Code": "rgb(238 ,178 ,188)"},'+
 '{"Binated_Thread_Code": "B-1015","Thread_Discription": "Desert Bloom","PMS_Code": "169C","RGB_Code": "rgb(233, 180, 177)","Customer ": "landsend","Cust_Thread_Code": "1019","Cust_Thread_Discription": "APRICOT ","Cust_RGB_Code": "rgb(233 ,172 ,165)"},'+
 '{"Binated_Thread_Code": "B-1017","Thread_Discription": "Orange Wisp","PMS_Code": "488C","RGB_Code": "rgb(242, 187, 171)","Customer ": "landsend","Cust_Thread_Code": "1017","Cust_Thread_Discription": "LT PEACH ","Cust_RGB_Code": "rgb(244 ,188 ,172)"},'+
 '{"Binated_Thread_Code": "B-1020","Thread_Discription": "Bright Peach","PMS_Code": "170C","RGB_Code": "rgb(245, 137, 127)","Customer ": "landsend","Cust_Thread_Code": "1020","Cust_Thread_Discription": "MELON ","Cust_RGB_Code": "rgb(247 ,136 ,125)"},'+
 '{"Binated_Thread_Code": "B-1021","Thread_Discription": "Rust","PMS_Code": "167C","RGB_Code": "rgb(188, 84, 47)","Customer ": "landsend","Cust_Thread_Code": "1021","Cust_Thread_Discription": "BURNT ORNG ","Cust_RGB_Code": "rgb(186 ,82 ,47)"},'+
 '{"Binated_Thread_Code": "B-1021","Thread_Discription": "Rust","PMS_Code": "167C","RGB_Code": "rgb(188, 84, 47)","Customer ": "landsend","Cust_Thread_Code": "1621","Cust_Thread_Discription": "RUST","Cust_RGB_Code": "rgb(209,84,0)"},'+
 '{"Binated_Thread_Code": "B-1022","Thread_Discription": "Corn Silk","PMS_Code": "9140C","RGB_Code": "rgb(235, 227, 185)","Customer ": "landsend","Cust_Thread_Code": "1666","Cust_Thread_Discription": "VANILLA ","Cust_RGB_Code": "rgb(253 ,230 ,147)"},'+
 '{"Binated_Thread_Code": "B-1023","Thread_Discription": "Lemon","PMS_Code": "100C","RGB_Code": "rgb(244, 219, 106)","Customer ": "landsend","Cust_Thread_Code": "1023","Cust_Thread_Discription": "BR YELLOW ","Cust_RGB_Code": "rgb(243 ,218 ,104)"},'+
 '{"Binated_Thread_Code": "B-1024","Thread_Discription": "Gold Rush","PMS_Code": "7549C","RGB_Code": "rgb(250, 166, 31)","Customer ": "landsend","Cust_Thread_Code": "1024","Cust_Thread_Discription": "BUTTERCUP ","Cust_RGB_Code": "rgb(255 ,166 ,23)"},'+
 '{"Binated_Thread_Code": "B-1025","Thread_Discription": "Military Gold","PMS_Code": "131C","RGB_Code": "rgb(204, 129, 41)","Customer ": "landsend","Cust_Thread_Code": "1025","Cust_Thread_Discription": "AMBER","Cust_RGB_Code": "rgb(205 ,129 ,38)"},'+
 '{"Binated_Thread_Code": "B-1025","Thread_Discription": "Military Gold","PMS_Code": "131C","RGB_Code": "rgb(204, 129, 41)","Customer ": "landsend","Cust_Thread_Code": "1625","Cust_Thread_Discription": "LT COPPER NEON ","Cust_RGB_Code": "rgb(195 ,127 ,41)"},'+
 '{"Binated_Thread_Code": "B-1026","Thread_Discription": "Orange Sorbet","PMS_Code": "149C","RGB_Code": "rgb(242, 188, 138)","Customer ": "landsend","Cust_Thread_Code": "1026","Cust_Thread_Discription": "BUTTER ","Cust_RGB_Code": "rgb(244 ,188 ,139)"},'+
 '{"Binated_Thread_Code": "B-1028","Thread_Discription": "Country Kitchen Blue","PMS_Code": "278C","RGB_Code": "rgb(90, 137, 169)","Customer ": "landsend","Cust_Thread_Code": "1028","Cust_Thread_Discription": "COPENHAGEN ","Cust_RGB_Code": "rgb(90 ,137 ,170)"},'+
 '{"Binated_Thread_Code": "B-1029","Thread_Discription": "Blue Jay","PMS_Code": "279C","RGB_Code": "rgb(50, 138, 189)","Customer ": "landsend","Cust_Thread_Code": "1029","Cust_Thread_Discription": "MED BLUE ","Cust_RGB_Code": "rgb(46 ,137 ,189)"},'+
 '{"Binated_Thread_Code": "B-1030","Thread_Discription": "Light Periwinkle","PMS_Code": "2708C","RGB_Code": "rgb(147, 168, 193)","Customer ": "landsend","Cust_Thread_Code": "1030","Cust_Thread_Discription": "HORIZON ","Cust_RGB_Code": "rgb(148 ,169 ,194)"},'+
 '{"Binated_Thread_Code": "B-1031","Thread_Discription": "Frosted Lavender","PMS_Code": "243C","RGB_Code": "rgb(200, 162, 192)","Customer ": "landsend","Cust_Thread_Code": "1031","Cust_Thread_Discription": "LT PURPLE ","Cust_RGB_Code": "rgb(199 ,161 ,191)"},'+
 '{"Binated_Thread_Code": "B-1032","Thread_Discription": "Velvet Violet","PMS_Code": "2080C","RGB_Code": "rgb(129, 109, 158)","Customer ": "landsend","Cust_Thread_Code": "1032","Cust_Thread_Discription": "PRETTY PURP ","Cust_RGB_Code": "rgb(129 ,108 ,157)"},'+
 '{"Binated_Thread_Code": "B-1033","Thread_Discription": "Purple Pansy","PMS_Code": "526C","RGB_Code": "rgb(111, 74, 130)","Customer ": "landsend","Cust_Thread_Code": "1033","Cust_Thread_Discription": "REGAL PURP ","Cust_RGB_Code": "rgb(110 ,73 ,129)"},'+
 '{"Binated_Thread_Code": "B-1034","Thread_Discription": "Vintage Rose","PMS_Code": "7433C","RGB_Code": "rgb(155, 67, 100)","Customer ": "landsend","Cust_Thread_Code": "1034","Cust_Thread_Discription": "WINE ","Cust_RGB_Code": "rgb(153 ,66 ,98)"},'+
 '{"Binated_Thread_Code": "B-1035","Thread_Discription": "Burgundy","PMS_Code": "505C","RGB_Code": "rgb(101, 49, 63)","Customer ": "landsend","Cust_Thread_Code": "1035","Cust_Thread_Discription": "MAROON ","Cust_RGB_Code": "rgb(99 ,47 ,61)"},'+
 '{"Binated_Thread_Code": "B-1036","Thread_Discription": "Raisin","PMS_Code": "1817C","RGB_Code": "rgb(89, 49, 51)","Customer ": "landsend","Cust_Thread_Code": "1036","Cust_Thread_Discription": "MAHOGANY ","Cust_RGB_Code": "rgb(89 ,48 ,50)"},'+
 '{"Binated_Thread_Code": "B-1037","Thread_Discription": "Tango","PMS_Code": "2035C","RGB_Code": "rgb(189, 34, 39)","Customer ": "landsend","Cust_Thread_Code": "1037","Cust_Thread_Discription": "BR RED ","Cust_RGB_Code": "rgb(190 ,20 ,34)"},'+
 '{"Binated_Thread_Code": "B-1038","Thread_Discription": "Barn Red","PMS_Code": "201C","RGB_Code": "rgb(141, 47, 52)","Customer ": "landsend","Cust_Thread_Code": "1038","Cust_Thread_Discription": "TERRACOTTA ","Cust_RGB_Code": "rgb(140 ,47 ,51)"},'+
 '{"Binated_Thread_Code": "B-1039","Thread_Discription": "Brick Red","PMS_Code": "200C","RGB_Code": "rgb(162, 40, 50)","Customer ": "landsend","Cust_Thread_Code": "1039","Cust_Thread_Discription": "BRICK ","Cust_RGB_Code": "rgb(161 ,40 ,49)"},'+
 '{"Binated_Thread_Code": "B-1040","Thread_Discription": "Weimaraner","PMS_Code": "410C","RGB_Code": "rgb(139, 135, 138)","Customer ": "landsend","Cust_Thread_Code": "1040","Cust_Thread_Discription": "GRAY ","Cust_RGB_Code": "rgb(138 ,134 ,137)"},'+
 '{"Binated_Thread_Code": "B-1041","Thread_Discription": "Polished Pewter","PMS_Code": "431C","RGB_Code": "rgb(112, 117, 124)","Customer ": "landsend","Cust_Thread_Code": "1041","Cust_Thread_Discription": "DK GRAY ","Cust_RGB_Code": "rgb(110 ,116 ,123)"},'+
 '{"Binated_Thread_Code": "B-1042","Thread_Discription": "Lapis","PMS_Code": "8184C","RGB_Code": "rgb(33, 81, 121)","Customer ": "landsend","Cust_Thread_Code": "1042","Cust_Thread_Discription": "CELESTIAL ","Cust_RGB_Code": "rgb(33 ,79 ,119)"},'+
 '{"Binated_Thread_Code": "B-1043","Thread_Discription": "Navy","PMS_Code": "289C","RGB_Code": "rgb(45, 52, 69)","Customer ": "landsend","Cust_Thread_Code": "1043","Cust_Thread_Discription": "NAVY ","Cust_RGB_Code": "rgb(44 ,52 ,69)"},'+
 '{"Binated_Thread_Code": "B-1043","Thread_Discription": "Navy","PMS_Code": "289C","RGB_Code": "rgb(45, 52, 69)","Customer ": "landsend","Cust_Thread_Code": "1944","Cust_Thread_Discription": "MIDNIGHT NAVY NEON ","Cust_RGB_Code": "rgb(46 ,60 ,74)"},'+
 '{"Binated_Thread_Code": "B-1045","Thread_Discription": "Light Mint","PMS_Code": "7471C","RGB_Code": "rgb(136, 203, 190)","Customer ": "landsend","Cust_Thread_Code": "1045","Cust_Thread_Discription": "MINT GR ","Cust_RGB_Code": "rgb(134 ,204 ,191)"},'+
 '{"Binated_Thread_Code": "B-1046","Thread_Discription": "Eucalyptus","PMS_Code": "7465C","RGB_Code": "rgb(77, 172, 153)","Customer ": "landsend","Cust_Thread_Code": "1046","Cust_Thread_Discription": "LT PEACOCK ","Cust_RGB_Code": "rgb(79 ,172 ,152)"},'+
 '{"Binated_Thread_Code": "B-1047","Thread_Discription": "Celadon","PMS_Code": "345C","RGB_Code": "rgb(159, 190, 163)","Customer ": "landsend","Cust_Thread_Code": "1047","Cust_Thread_Discription": "MINT ","Cust_RGB_Code": "rgb(158 ,189 ,162)"},'+
 '{"Binated_Thread_Code": "B-1048","Thread_Discription": "Aloe","PMS_Code": "7490C","RGB_Code": "rgb(123, 149, 83)","Customer ": "landsend","Cust_Thread_Code": "1048","Cust_Thread_Discription": "LIME ","Cust_RGB_Code": "rgb(123 ,149 ,83)"},'+
 '{"Binated_Thread_Code": "B-1049","Thread_Discription": "Lime Green","PMS_Code": "360C","RGB_Code": "rgb(110, 160, 76)","Customer ": "landsend","Cust_Thread_Code": "1049","Cust_Thread_Discription": "APPLE","Cust_RGB_Code": "rgb(111 ,160 ,77)"},'+
 '{"Binated_Thread_Code": "B-1050","Thread_Discription": "Green Thumb","PMS_Code": "361C","RGB_Code": "rgb(68, 150, 69)","Customer ": "landsend","Cust_Thread_Code": "1050","Cust_Thread_Discription": "GREEN ","Cust_RGB_Code": "rgb(69 ,150 ,69)"},'+
 '{"Binated_Thread_Code": "B-1051","Thread_Discription": "Bell Pepper","PMS_Code": "2252C","RGB_Code": "rgb(0, 136, 70)","Customer ": "landsend","Cust_Thread_Code": "1051","Cust_Thread_Discription": "CHRISTMAS GREEN ","Cust_RGB_Code": "rgb(0 ,135 ,69)"},'+
 '{"Binated_Thread_Code": "B-1052","Thread_Discription": "Mermaid","PMS_Code": "2236C","RGB_Code": "rgb(59, 117, 117)","Customer ": "landsend","Cust_Thread_Code": "1052","Cust_Thread_Discription": "DEEP SEA GREEN ","Cust_RGB_Code": "rgb(57 ,116 ,116)"},'+
 '{"Binated_Thread_Code": "B-1053","Thread_Discription": "Light Coral","PMS_Code": "488C","RGB_Code": "rgb(231, 183, 165)","Customer ": "landsend","Cust_Thread_Code": "1053","Cust_Thread_Discription": "BISQUE ","Cust_RGB_Code": "rgb(231 ,183 ,165)"},'+
 '{"Binated_Thread_Code": "B-1054","Thread_Discription": "Tawny","PMS_Code": "7613C","RGB_Code": "rgb(172, 131, 123)","Customer ": "landsend","Cust_Thread_Code": "1054","Cust_Thread_Discription": "MILK CHOC ","Cust_RGB_Code": "rgb(172 ,131 ,122)"},'+
 '{"Binated_Thread_Code": "B-1055","Thread_Discription": "Latte","PMS_Code": "155C","RGB_Code": "rgb(212, 177, 144)","Customer ": "landsend","Cust_Thread_Code": "1055","Cust_Thread_Discription": "AZTEC ","Cust_RGB_Code": "rgb(212 ,177 ,143)"},'+
 '{"Binated_Thread_Code": "B-1056","Thread_Discription": "Golden Oak","PMS_Code": "2313C","RGB_Code": "rgb(158, 106, 72)","Customer ": "landsend","Cust_Thread_Code": "1056","Cust_Thread_Discription": "DESERT ","Cust_RGB_Code": "rgb(158 ,105 ,71)"},'+
 '{"Binated_Thread_Code": "B-1057","Thread_Discription": "Caramel","PMS_Code": "4645C","RGB_Code": "rgb(161, 114, 87)","Customer ": "landsend","Cust_Thread_Code": "1057","Cust_Thread_Discription": "BR SUGAR ","Cust_RGB_Code": "rgb(160 ,113 ,85)"},'+
 '{"Binated_Thread_Code": "B-1058","Thread_Discription": "Sienna","PMS_Code": "175C","RGB_Code": "rgb(114, 71, 61)","Customer ": "landsend","Cust_Thread_Code": "1058","Cust_Thread_Discription": "WOODLAND ","Cust_RGB_Code": "rgb(113 ,70 ,59)"},'+
 '{"Binated_Thread_Code": "B-1059","Thread_Discription": "Dark Chocolate","PMS_Code": " Black 5 C","RGB_Code": "rgb(67, 56, 53)","Customer ": "landsend","Cust_Thread_Code": "1059","Cust_Thread_Discription": "DP BROWN ","Cust_RGB_Code": "rgb(66 ,55 ,52)"},'+
 '{"Binated_Thread_Code": "B-1060","Thread_Discription": "Pussywillow","PMS_Code": "7527C","RGB_Code": "rgb(180, 166, 152)","Customer ": "landsend","Cust_Thread_Code": "1060","Cust_Thread_Discription": "KHAKI ","Cust_RGB_Code": "rgb(179 ,166 ,151)"},'+
 '{"Binated_Thread_Code": "B-1061","Thread_Discription": "Vanilla Pudding","PMS_Code": "9160C","RGB_Code": "rgb(244, 218, 171)","Customer ": "landsend","Cust_Thread_Code": "1061","Cust_Thread_Discription": "WHEAT ","Cust_RGB_Code": "rgb(244 ,218 ,171)"},'+
 '{"Binated_Thread_Code": "B-1062","Thread_Discription": "Rhino","PMS_Code": "7536C","RGB_Code": "rgb(142, 135, 122)","Customer ": "landsend","Cust_Thread_Code": "1062","Cust_Thread_Discription": "FLAX ","Cust_RGB_Code": "rgb(141 ,134 ,122)"},'+
 '{"Binated_Thread_Code": "B-1063","Thread_Discription": "Elephant","PMS_Code": "7497C","RGB_Code": "rgb(124, 119, 107)","Customer ": "landsend","Cust_Thread_Code": "1063","Cust_Thread_Discription": "OLIVE ","Cust_RGB_Code": "rgb(124 ,118 ,105)"},'+
 '{"Binated_Thread_Code": "B-1065","Thread_Discription": "Copper","PMS_Code": "151C","RGB_Code": "rgb(227, 120, 38)","Customer ": "landsend","Cust_Thread_Code": "1065","Cust_Thread_Discription": "CHR ORANGE ","Cust_RGB_Code": "rgb(229 ,120 ,33)"},'+
 '{"Binated_Thread_Code": "B-1066","Thread_Discription": "Cornmeal","PMS_Code": "7401C","RGB_Code": "rgb(245, 214, 161)","Customer ": "landsend","Cust_Thread_Code": "1066","Cust_Thread_Discription": "MAIZE ","Cust_RGB_Code": "rgb(245 ,214 ,161)"},'+
 '{"Binated_Thread_Code": "B-1068","Thread_Discription": "Canary","PMS_Code": "116C","RGB_Code": "rgb(253, 187, 28)","Customer ": "landsend","Cust_Thread_Code": "1068","Cust_Thread_Discription": "CANARY ","Cust_RGB_Code": "rgb(255 ,188 ,22)"},'+
 '{"Binated_Thread_Code": "B-1069","Thread_Discription": "Sunshine Yellow","PMS_Code": "123C","RGB_Code": "rgb(251, 177, 24)","Customer ": "landsend","Cust_Thread_Code": "1069","Cust_Thread_Discription": "YELLOW ","Cust_RGB_Code": "rgb(254 ,221 ,35)"},'+
 '{"Binated_Thread_Code": "B-1069","Thread_Discription": "Sunshine Yellow","PMS_Code": "123C","RGB_Code": "rgb(251, 177, 24)","Customer ": "landsend","Cust_Thread_Code": "1824","Cust_Thread_Discription": "FLOURES YELLOW NEON ","Cust_RGB_Code": "rgb(255 ,221 ,0)"},'+
 '{"Binated_Thread_Code": "B-1070","Thread_Discription": "Tawny Tan","PMS_Code": "141C","RGB_Code": "rgb(210, 170, 114)","Customer ": "landsend","Cust_Thread_Code": "1070","Cust_Thread_Discription": "STRAW ","Cust_RGB_Code": "rgb(210 ,169 ,112)"},'+
 '{"Binated_Thread_Code": "B-1071","Thread_Discription": "Baby’s Breath","PMS_Code": "9285C","RGB_Code": "rgb(233, 228, 219)","Customer ": "landsend","Cust_Thread_Code": "1071","Cust_Thread_Discription": "WINTER WHITE ","Cust_RGB_Code": "rgb(233 ,229 ,220)"},'+
 '{"Binated_Thread_Code": "B-1072","Thread_Discription": "Coconut Cream","PMS_Code": "9180C","RGB_Code": "rgb(221, 212, 190)","Customer ": "landsend","Cust_Thread_Code": "1072","Cust_Thread_Discription": "Coconut Cream","Cust_RGB_Code": "rgb(244,229,192)"},'+
 //'{"Binated_Thread_Code": "B-1073","Thread_Discription": "null","PMS_Code": "null","RGB_Code": "rgbnull","Customer ": "landsend","Cust_Thread_Code": "1073","Cust_Thread_Discription": "CELERY ","Cust_RGB_Code": "rgb(204 ,219 ,207)"},'+
 '{"Binated_Thread_Code": "B-1074","Thread_Discription": "Powder Blue","PMS_Code": "2708C","RGB_Code": "rgb(151, 182, 208)","Customer ": "landsend","Cust_Thread_Code": "1074","Cust_Thread_Discription": "Baby Blue","Cust_RGB_Code": "rgb(149 ,181 ,207)"},'+
 '{"Binated_Thread_Code": "B-1074","Thread_Discription": "Powder Blue","PMS_Code": "2708C","RGB_Code": "rgb(151, 182, 208)","Customer ": "landsend","Cust_Thread_Code": "1953","Cust_Thread_Discription": "BABY BL NEON ","Cust_RGB_Code": "rgb(162 ,196 ,220)"},'+
 '{"Binated_Thread_Code": "B-1075","Thread_Discription": "Baby Blue","PMS_Code": "2717C","RGB_Code": "rgb(131, 167, 199)","Customer ": "landsend","Cust_Thread_Code": "1075","Cust_Thread_Discription": "LT BLUE ","Cust_RGB_Code": "rgb(132 ,168 ,200)"},'+
 '{"Binated_Thread_Code": "B-1075","Thread_Discription": "Baby Blue","PMS_Code": "2717C","RGB_Code": "rgb(131, 167, 199)","Customer ": "landsend","Cust_Thread_Code": "1775","Cust_Thread_Discription": "DEEP OCEAN BLUE ","Cust_RGB_Code": "rgb(98 ,132 ,172)"},'+
 '{"Binated_Thread_Code": "B-1076","Thread_Discription": "True Blue","PMS_Code": "2728C","RGB_Code": "rgb(0, 88, 151)","Customer ": "landsend","Cust_Thread_Code": "1076","Cust_Thread_Discription": "ROYAL ","Cust_RGB_Code": "rgb(0 ,87 ,150)"},'+
 '{"Binated_Thread_Code": "B-1076","Thread_Discription": "True Blue","PMS_Code": "2728C","RGB_Code": "rgb(0, 88, 151)","Customer ": "landsend","Cust_Thread_Code": "1842","Cust_Thread_Discription": "DP ROYAL NEON ","Cust_RGB_Code": "rgb(0 ,85 ,149)"},'+
 '{"Binated_Thread_Code": "B-1078","Thread_Discription": "Pumpkin","PMS_Code": "Orange 021 C","RGB_Code": "rgb(235, 86, 40)","Customer ": "landsend","Cust_Thread_Code": "1078","Cust_Thread_Discription": "DP ORANGE ","Cust_RGB_Code": "rgb(237 ,83 ,42)"},'+
 '{"Binated_Thread_Code": "B-1079","Thread_Discription": "Celtic Green","PMS_Code": "347C","RGB_Code": "rgb(0, 136, 80)","Customer ": "landsend","Cust_Thread_Code": "1079","Cust_Thread_Discription": "LT KELLY ","Cust_RGB_Code": "rgb(0 ,135 ,79)"},'+
 '{"Binated_Thread_Code": "B-1080","Thread_Discription": "Lilac","PMS_Code": "2066C","RGB_Code": "rgb(166, 125, 169)","Customer ": "landsend","Cust_Thread_Code": "1080","Cust_Thread_Discription": "SOFT ORCHID ","Cust_RGB_Code": "rgb(166 ,125 ,169)"},'+
 '{"Binated_Thread_Code": "B-1081","Thread_Discription": "Azalea","PMS_Code": "1925C","RGB_Code": "rgb(186, 50, 83)","Customer ": "landsend","Cust_Thread_Code": "1081","Cust_Thread_Discription": "CANDY APPLE RED ","Cust_RGB_Code": "rgb(186 ,48 ,81)"},'+
 '{"Binated_Thread_Code": "B-1082","Thread_Discription": "Antique Ecru","PMS_Code": "2316C ","RGB_Code": "rgb(205, 186, 167)","Customer ": "landsend","Cust_Thread_Code": "1082","Cust_Thread_Discription": "NATURAL ","Cust_RGB_Code": "rgb(205 ,186 ,166)"},'+
 '{"Binated_Thread_Code": "B-1083","Thread_Discription": "Daisy","PMS_Code": "121C","RGB_Code": "rgb(250, 207, 90)","Customer ": "landsend","Cust_Thread_Code": "1083","Cust_Thread_Discription": "YELLOW ","Cust_RGB_Code": "rgb(250 ,206 ,90)"},'+
 '{"Binated_Thread_Code": "B-1084","Thread_Discription": "Sandy Shores","PMS_Code": "9182C","RGB_Code": "rgb(210, 185, 157)","Customer ": "landsend","Cust_Thread_Code": "1084","Cust_Thread_Discription": "SAND ","Cust_RGB_Code": "rgb(210 ,185 ,157)"},'+
 '{"Binated_Thread_Code": "B-1085","Thread_Discription": "Cement","PMS_Code": "2330C","RGB_Code": "rgb(184, 181, 175)","Customer ": "landsend","Cust_Thread_Code": "1085","Cust_Thread_Discription": "PLATINUM ","Cust_RGB_Code": "rgb(184 ,181 ,175)"},'+
 '{"Binated_Thread_Code": "B-1086","Thread_Discription": "Sterling Silver","PMS_Code": "427C","RGB_Code": "rgb(199, 200, 197)","Customer ": "landsend","Cust_Thread_Code": "1086","Cust_Thread_Discription": "LIGHT SILVER ","Cust_RGB_Code": "rgb(199 ,201 ,198)"},'+
 '{"Binated_Thread_Code": "B-1087","Thread_Discription": "Silver Birch","PMS_Code": "2330C","RGB_Code": "rgb(189, 188, 184)","Customer ": "landsend","Cust_Thread_Code": "1087","Cust_Thread_Discription": "SILVER ","Cust_RGB_Code": "rgb(188 ,188 ,184)"},'+
 '{"Binated_Thread_Code": "B-1088","Thread_Discription": "Robin’s Egg","PMS_Code": "2227C","RGB_Code": "rgb(97, 169, 172)","Customer ": "landsend","Cust_Thread_Code": "1088","Cust_Thread_Discription": "SEA TURQ ","Cust_RGB_Code": "rgb(97 ,169 ,172)"},'+
 '{"Binated_Thread_Code": "B-1089","Thread_Discription": "Sea Frost","PMS_Code": "636C","RGB_Code": "rgb(109, 169, 177)","Customer ": "landsend","Cust_Thread_Code": "1089","Cust_Thread_Discription": "Sea Frost","Cust_RGB_Code": "rgb(139,211,230)"},'+
 '{"Binated_Thread_Code": "B-1090","Thread_Discription": "Deep Sky Blue","PMS_Code": "2235C","RGB_Code": "rgb(22, 134, 138)","Customer ": "landsend","Cust_Thread_Code": "1090","Cust_Thread_Discription": "DP AQUA ","Cust_RGB_Code": "rgb(20 ,133 ,137)"},'+
 '{"Binated_Thread_Code": "B-1091","Thread_Discription": "Teal Blue","PMS_Code": "632C","RGB_Code": "rgb(8, 113, 129)","Customer ": "landsend","Cust_Thread_Code": "1091","Cust_Thread_Discription": "BLUE TEAL ","Cust_RGB_Code": "rgb(0 ,112 ,128)"},'+
 '{"Binated_Thread_Code": "B-1092","Thread_Discription": "Summer Sky","PMS_Code": "550C","RGB_Code": "rgb(148, 194, 208)","Customer ": "landsend","Cust_Thread_Code": "1092","Cust_Thread_Discription": "CRYSTAL BLUE ","Cust_RGB_Code": "rgb(147 ,194 ,209)"},'+
 '{"Binated_Thread_Code": "B-1093","Thread_Discription": "Azure Sea","PMS_Code": "305C","RGB_Code": "rgb(36, 187, 201)","Customer ": "landsend","Cust_Thread_Code": "1093","Cust_Thread_Discription": "TURQUOISE ","Cust_RGB_Code": "rgb(27 ,187 ,201)"},'+
 '{"Binated_Thread_Code": "B-1094","Thread_Discription": "Caribbean Blue","PMS_Code": "306C","RGB_Code": "rgb(9, 178, 200)","Customer ": "landsend","Cust_Thread_Code": "1094","Cust_Thread_Discription": "MED TURQUOISE ","Cust_RGB_Code": "rgb(0 ,179 ,201)"},'+
 '{"Binated_Thread_Code": "B-1095","Thread_Discription": "Larimar","PMS_Code": "638C","RGB_Code": "rgb(0, 169, 194)","Customer ": "landsend","Cust_Thread_Code": "1095","Cust_Thread_Discription": "TURQUOISE BLUE ","Cust_RGB_Code": "rgb(0 ,169 ,194)"},'+
 '{"Binated_Thread_Code": "B-1096","Thread_Discription": "Cobalt","PMS_Code": "7461C","RGB_Code": "rgb(11, 126, 155)","Customer ": "landsend","Cust_Thread_Code": "1096","Cust_Thread_Discription": "POOL ","Cust_RGB_Code": "rgb(0 ,125 ,155)"},'+
 '{"Binated_Thread_Code": "B-1097","Thread_Discription": "Honeydew Melon","PMS_Code": "558C ","RGB_Code": "rgb(174, 209, 191)","Customer ": "landsend","Cust_Thread_Code": "1097","Cust_Thread_Discription": "LT MINT ","Cust_RGB_Code": "rgb(175 ,210 ,192)"},'+
 '{"Binated_Thread_Code": "B-1100","Thread_Discription": "Cucumber","PMS_Code": "7486C","RGB_Code": "rgb(189, 208, 178)","Customer ": "landsend","Cust_Thread_Code": "1100","Cust_Thread_Discription": "LT GREEN ","Cust_RGB_Code": "rgb(190 ,209 ,178)"},'+
 '{"Binated_Thread_Code": "B-1101","Thread_Discription": "Wintergreen","PMS_Code": "2257C","RGB_Code": "rgb(70, 144, 83)","Customer ": "landsend","Cust_Thread_Code": "1101","Cust_Thread_Discription": "SEAWEED ","Cust_RGB_Code": "rgb(72 ,143 ,82)"},'+
 '{"Binated_Thread_Code": "B-1103","Thread_Discription": "Hunter Green","PMS_Code": "3435C","RGB_Code": "rgb(53, 78, 60)","Customer ": "landsend","Cust_Thread_Code": "1103","Cust_Thread_Discription": "HUNTER ","Cust_RGB_Code": "rgb(52 ,77 ,59)"},'+
 '{"Binated_Thread_Code": "B-1104","Thread_Discription": "Scallion","PMS_Code": "580C","RGB_Code": "rgb(193, 196, 150)","Customer ": "landsend","Cust_Thread_Code": "1104","Cust_Thread_Discription": "MARGARITA ","Cust_RGB_Code": "rgb(193 ,197 ,150)"},'+
 '{"Binated_Thread_Code": "B-1105","Thread_Discription": "Weeping Willow","PMS_Code": "452C","RGB_Code": "rgb(170, 162, 125)","Customer ": "landsend","Cust_Thread_Code": "1105","Cust_Thread_Discription": "WILLOW ","Cust_RGB_Code": "rgb(171 ,163 ,126)"},'+
 '{"Binated_Thread_Code": "B-1106","Thread_Discription": "Guacamole","PMS_Code": "10107C","RGB_Code": "rgb(151, 140, 84)","Customer ": "landsend","Cust_Thread_Code": "1106","Cust_Thread_Discription": "MOSS ","Cust_RGB_Code": "rgb(151 ,140 ,84)"},'+
 '{"Binated_Thread_Code": "B-1107","Thread_Discription": "Honeysuckle","PMS_Code": "1777C","RGB_Code": "rgb(231, 99, 119)","Customer ": "landsend","Cust_Thread_Code": "1107","Cust_Thread_Discription": "PINK CORAL ","Cust_RGB_Code": "rgb(232 ,98 ,118)"},'+
 '{"Binated_Thread_Code": "B-1109","Thread_Discription": "Pink Rose","PMS_Code": "212C","RGB_Code": "rgb(208, 79, 137)","Customer ": "landsend","Cust_Thread_Code": "1109","Cust_Thread_Discription": "DK COTTON CANDY ","Cust_RGB_Code": "rgb(207 ,77 ,136)"},'+
 '{"Binated_Thread_Code": "B-1110","Thread_Discription": "Fuchsia","PMS_Code": "219C","RGB_Code": "rgb(192, 48, 110)","Customer ": "landsend","Cust_Thread_Code": "1110","Cust_Thread_Discription": "HOT PINK ","Cust_RGB_Code": "rgb(191 ,47 ,110)"},'+
 '{"Binated_Thread_Code": "B-1111","Thread_Discription": "Evening Mist","PMS_Code": "531C","RGB_Code": "rgb(197, 174, 197)","Customer ": "landsend","Cust_Thread_Code": "1111","Cust_Thread_Discription": "THISTLE ","Cust_RGB_Code": "rgb(197 ,173 ,197)"},'+
 '{"Binated_Thread_Code": "B-1112","Thread_Discription": "Majestic Purple","PMS_Code": "2090C","RGB_Code": "rgb(84, 72, 129)","Customer ": "landsend","Cust_Thread_Code": "1112","Cust_Thread_Discription": "DP PURPLE ","Cust_RGB_Code": "rgb(83 ,70 ,128)"},'+
 '{"Binated_Thread_Code": "B-1112","Thread_Discription": "Majestic Purple","PMS_Code": "2090C","RGB_Code": "rgb(84, 72, 129)","Customer ": "landsend","Cust_Thread_Code": "1922","Cust_Thread_Discription": "DP PURPLE NEON ","Cust_RGB_Code": "rgb(77 ,50 ,117)"},'+
 '{"Binated_Thread_Code": "B-1116","Thread_Discription": "Cotton Candy","PMS_Code": "189C","RGB_Code": "rgb(234, 173, 191)","Customer ": "landsend","Cust_Thread_Code": "1116","Cust_Thread_Discription": "CHINA ROSE ","Cust_RGB_Code": "rgb(235 ,173 ,191)"},'+
 '{"Binated_Thread_Code": "B-1117","Thread_Discription": "Flamingo Pink","PMS_Code": "205C","RGB_Code": "rgb(214, 97, 142)","Customer ": "landsend","Cust_Thread_Code": "1117","Cust_Thread_Discription": "WATERMELON ","Cust_RGB_Code": "rgb(212 ,98 ,142)"},'+
 '{"Binated_Thread_Code": "B-1118","Thread_Discription": "Overcast Gray","PMS_Code": "429C","RGB_Code": "rgb(137, 145, 146)","Customer ": "landsend","Cust_Thread_Code": "1118","Cust_Thread_Discription": "PEWTER ","Cust_RGB_Code": "rgb(137 ,145 ,147)"},'+
 '{"Binated_Thread_Code": "B-1118","Thread_Discription": "Overcast Gray","PMS_Code": "429C","RGB_Code": "rgb(137, 145, 146)","Customer ": "landsend","Cust_Thread_Code": "1918","Cust_Thread_Discription": "SILVER NEON ","Cust_RGB_Code": "rgb(138 ,139 ,142)"},'+
 '{"Binated_Thread_Code": "B-1119","Thread_Discription": "English Rose","PMS_Code": "7634C","RGB_Code": "rgb(158, 81, 101)","Customer ": "landsend","Cust_Thread_Code": "1119","Cust_Thread_Discription": "BOYSENBERRY ","Cust_RGB_Code": "rgb(156 ,79 ,100)"},'+
 '{"Binated_Thread_Code": "B-1121","Thread_Discription": "Candy Heart","PMS_Code": "203C","RGB_Code": "rgb(226, 174, 197)","Customer ": "landsend","Cust_Thread_Code": "1121","Cust_Thread_Discription": "LT PINK ","Cust_RGB_Code": "rgb(226 ,175 ,197)"},'+
 '{"Binated_Thread_Code": "B-1122","Thread_Discription": "Deep Lilac","PMS_Code": "7664C","RGB_Code": "rgb(79, 54, 105)","Customer ": "landsend","Cust_Thread_Code": "1122","Cust_Thread_Discription": "IMP PURPLE ","Cust_RGB_Code": "rgb(78 ,53 ,104)"},'+
 '{"Binated_Thread_Code": "B-1123","Thread_Discription": "Parchment","PMS_Code": "7499C","RGB_Code": "rgb(236, 224, 191)","Customer ": "landsend","Cust_Thread_Code": "1123","Cust_Thread_Discription": "CREME ","Cust_RGB_Code": "rgb(237 ,224 ,191)"},'+
 '{"Binated_Thread_Code": "B-1124","Thread_Discription": "Buttercup","PMS_Code": "116C","RGB_Code": "rgb(250, 199, 76)","Customer ": "landsend","Cust_Thread_Code": "1124","Cust_Thread_Discription": "LEMON ","Cust_RGB_Code": "rgb(250 ,199 ,75)"},'+
 '{"Binated_Thread_Code": "B-1125","Thread_Discription": "Saffron","PMS_Code": "1225C","RGB_Code": "rgb(241, 177, 61)","Customer ": "landsend","Cust_Thread_Code": "1125","Cust_Thread_Discription": "SUNBURST ","Cust_RGB_Code": "rgb(241 ,177 ,60)"},'+
 '{"Binated_Thread_Code": "B-1126","Thread_Discription": "Light Brown Sugar","PMS_Code": "10143C","RGB_Code": "rgb(174, 126, 91)","Customer ": "landsend","Cust_Thread_Code": "1126","Cust_Thread_Discription": "BRAN ","Cust_RGB_Code": "rgb(174 ,125 ,90)"},'+
 '{"Binated_Thread_Code": "B-1127","Thread_Discription": "Loofah","PMS_Code": "474C","RGB_Code": "rgb(219, 186, 166)","Customer ": "landsend","Cust_Thread_Code": "1127","Cust_Thread_Discription": "LT TAN ","Cust_RGB_Code": "rgb(220 ,186 ,165)"},'+
 '{"Binated_Thread_Code": "B-1128","Thread_Discription": "Taupe","PMS_Code": "10136C","RGB_Code": "rgb(163, 144, 130)","Customer ": "landsend","Cust_Thread_Code": "1128","Cust_Thread_Discription": "FAWN","Cust_RGB_Code": "rgb(162 ,144 ,130)"},'+
 '{"Binated_Thread_Code": "B-1129","Thread_Discription": "Mud Pie","PMS_Code": "412C","RGB_Code": "rgb(73, 58, 52)","Customer ": "landsend","Cust_Thread_Code": "1129","Cust_Thread_Discription": "EGYPTIAN ","Cust_RGB_Code": "rgb(72 ,57 ,51)"},'+
 '{"Binated_Thread_Code": "B-1130","Thread_Discription": "Chocolate Chip","PMS_Code": "476C","RGB_Code": "rgb(74, 58, 55)","Customer ": "landsend","Cust_Thread_Code": "1130","Cust_Thread_Discription": "CHOCOLATE ","Cust_RGB_Code": "rgb(73 ,57 ,55)"},'+
 '{"Binated_Thread_Code": "B-1131","Thread_Discription": "Espresso","PMS_Code": "Black C","RGB_Code": "rgb(60, 53, 50)","Customer ": "landsend","Cust_Thread_Code": "1131","Cust_Thread_Discription": "DK BROWN ","Cust_RGB_Code": "rgb(59 ,52 ,49)"},'+
 '{"Binated_Thread_Code": "B-1132","Thread_Discription": "Clear Blue","PMS_Code": "291C","RGB_Code": "rgb(138, 187, 207)","Customer ": "landsend","Cust_Thread_Code": "1132","Cust_Thread_Discription": "PALE BLUE ","Cust_RGB_Code": "rgb(136 ,187 ,207)"},'+
 '{"Binated_Thread_Code": "B-1133","Thread_Discription": "Forget-Me-Not","PMS_Code": "279C","RGB_Code": "rgb(41, 127, 184)","Customer ": "landsend","Cust_Thread_Code": "1133","Cust_Thread_Discription": "LT INDIGO ","Cust_RGB_Code": "rgb(39 ,126 ,183)"},'+
 '{"Binated_Thread_Code": "B-1134","Thread_Discription": "Royal Blue","PMS_Code": "2132C","RGB_Code": "rgb(0, 86, 147)","Customer ": "landsend","Cust_Thread_Code": "1134","Cust_Thread_Discription": "INDIGO ","Cust_RGB_Code": "rgb(0 ,85 ,146)"},'+
 '{"Binated_Thread_Code": "B-1134","Thread_Discription": "Royal Blue","PMS_Code": "2132C","RGB_Code": "rgb(0, 86, 147)","Customer ": "landsend","Cust_Thread_Code": "1934","Cust_Thread_Discription": "ROYAL NEON ","Cust_RGB_Code": "rgb(0 ,93 ,153)"},'+
 '{"Binated_Thread_Code": "B-1135","Thread_Discription": "Baby Chick","PMS_Code": "1205C","RGB_Code": "rgb(245, 215, 119)","Customer ": "landsend","Cust_Thread_Code": "1135","Cust_Thread_Discription": "SUNRAY ","Cust_RGB_Code": "rgb(245 ,215 ,119)"},'+
 '{"Binated_Thread_Code": "B-1136","Thread_Discription": "Dark Taupe","PMS_Code": "7531C","RGB_Code": "rgb(140, 122, 109)","Customer ": "landsend","Cust_Thread_Code": "1136","Cust_Thread_Discription": "BEIGE ","Cust_RGB_Code": "rgb(139 ,121 ,108)"},'+
 '{"Binated_Thread_Code": "B-1137","Thread_Discription": "Citrus Burst","PMS_Code": "137C","RGB_Code": "rgb(243, 141, 33)","Customer ": "landsend","Cust_Thread_Code": "1137","Cust_Thread_Discription": "GOLD ","Cust_RGB_Code": "rgb(244 ,140 ,13)"},'+
 '{"Binated_Thread_Code": "B-1137","Thread_Discription": "Citrus Burst","PMS_Code": "137C","RGB_Code": "rgb(243, 141, 33)","Customer ": "landsend","Cust_Thread_Code": "1825","Cust_Thread_Discription": "PACKER GOLD NEON ","Cust_RGB_Code": "rgb(249 ,178 ,0)"},'+
 '{"Binated_Thread_Code": "B-1137","Thread_Discription": "Citrus Burst","PMS_Code": "137C","RGB_Code": "rgb(243, 141, 33)","Customer ": "landsend","Cust_Thread_Code": "1951","Cust_Thread_Discription": "HONEYDEW ","Cust_RGB_Code": "rgb(246 ,153 ,42)"},'+
 '{"Binated_Thread_Code": "B-1138","Thread_Discription": "Doe Skin","PMS_Code": "9183C","RGB_Code": "rgb(205, 186, 165)","Customer ": "landsend","Cust_Thread_Code": "1138","Cust_Thread_Discription": "PUTTY ","Cust_RGB_Code": "rgb(204 ,186 ,164)"},'+
 '{"Binated_Thread_Code": "B-1141","Thread_Discription": "Mauve","PMS_Code": "5005C","RGB_Code": "rgb(157, 114, 121)","Customer ": "landsend","Cust_Thread_Code": "1141","Cust_Thread_Discription": "LT REDWOOD ","Cust_RGB_Code": "rgb(156 ,113 ,120)"},'+
 '{"Binated_Thread_Code": "B-1141","Thread_Discription": "Mauve","PMS_Code": "5005C","RGB_Code": "rgb(157, 114, 121)","Customer ": "aramark","Cust_Thread_Code": "1998","Cust_Thread_Discription": "Dark Mauve","Cust_RGB_Code": "rgb(86,90,92)"},'+
 '{"Binated_Thread_Code": "B-1142","Thread_Discription": "Peach Puff","PMS_Code": "4735C","RGB_Code": "rgb(182, 154, 142)","Customer ": "landsend","Cust_Thread_Code": "1142","Cust_Thread_Discription": "BAMBOO ","Cust_RGB_Code": "rgb(183 ,155 ,143)"},'+
 '{"Binated_Thread_Code": "B-1143","Thread_Discription": "China Blue","PMS_Code": "2130C","RGB_Code": "rgb(75, 108, 154)","Customer ": "landsend","Cust_Thread_Code": "1143","Cust_Thread_Discription": "PERIWINKLE ","Cust_RGB_Code": "rgb(75 ,107 ,153)"},'+
 '{"Binated_Thread_Code": "B-1144","Thread_Discription": "Bark","PMS_Code": "7504C","RGB_Code": "rgb(133, 107, 89)","Customer ": "landsend","Cust_Thread_Code": "1144","Cust_Thread_Discription": "UMBER ","Cust_RGB_Code": "rgb(132 ,106 ,87)"},'+
 '{"Binated_Thread_Code": "B-1145","Thread_Discription": "Coffee Bean","PMS_Code": "7603C","RGB_Code": "rgb(95, 64, 54)","Customer ": "landsend","Cust_Thread_Code": "1145","Cust_Thread_Discription": "LT WALNUT ","Cust_RGB_Code": "rgb(94 ,62 ,53)"},'+
 '{"Binated_Thread_Code": "B-1146","Thread_Discription": "Tomato Red","PMS_Code": "485C","RGB_Code": "rgb(211, 41, 40)","Customer ": "landsend","Cust_Thread_Code": "1146","Cust_Thread_Discription": "BITTERSWEET ","Cust_RGB_Code": "rgb(212 ,39 ,39)"},'+
 '{"Binated_Thread_Code": "B-1147","Thread_Discription": "Christmas Red","PMS_Code": "1795C","RGB_Code": "rgb(182, 31, 49)","Customer ": "landsend","Cust_Thread_Code": "1147","Cust_Thread_Discription": "RED ","Cust_RGB_Code": "rgb(182 ,15 ,47)"},'+
 '{"Binated_Thread_Code": "B-1148","Thread_Discription": "Rustic Pink","PMS_Code": "183C","RGB_Code": "rgb(219, 139, 154)","Customer ": "landsend","Cust_Thread_Code": "1148","Cust_Thread_Discription": "PETAL PINK ","Cust_RGB_Code": "rgb(220 ,139 ,154)"},'+
 '{"Binated_Thread_Code": "B-1149","Thread_Discription": "Tusk","PMS_Code": "9202C","RGB_Code": "rgb(220, 198, 180)","Customer ": "landsend","Cust_Thread_Code": "1149","Cust_Thread_Discription": "PARCHMENT ","Cust_RGB_Code": "rgb(220 ,199 ,179)"},'+
 '{"Binated_Thread_Code": "B-1150","Thread_Discription": "Chartreuse","PMS_Code": "937C","RGB_Code": "rgb(219, 223, 139)","Customer ": "landsend","Cust_Thread_Code": "1150","Cust_Thread_Discription": "KIWI ","Cust_RGB_Code": "rgb(219 ,224 ,140)"},'+
 '{"Binated_Thread_Code": "B-1152","Thread_Discription": "Peach Tea","PMS_Code": "1635C","RGB_Code": "rgb(245, 138, 116)","Customer ": "landsend","Cust_Thread_Code": "1152","Cust_Thread_Discription": "PEACH ","Cust_RGB_Code": "rgb(250 ,137 ,114)"},'+
 '{"Binated_Thread_Code": "B-1153","Thread_Discription": "Frosted Glass","PMS_Code": "643C","RGB_Code": "rgb(172, 191, 203)","Customer ": "landsend","Cust_Thread_Code": "1153","Cust_Thread_Discription": "STEEL BLUE ","Cust_RGB_Code": "rgb(172 ,191 ,203)"},'+
 '{"Binated_Thread_Code": "B-1154","Thread_Discription": "Lipstick Rose","PMS_Code": "1785C","RGB_Code": "rgb(216, 70, 97)","Customer ": "landsend","Cust_Thread_Code": "1154","Cust_Thread_Discription": "FIESTA RED ","Cust_RGB_Code": "rgb(216 ,70 ,96)"},'+
 '{"Binated_Thread_Code": "B-1155","Thread_Discription": "Marmalade","PMS_Code": "714C","RGB_Code": "rgb(245, 159, 103)","Customer ": "landsend","Cust_Thread_Code": "1155","Cust_Thread_Discription": "HOT ORANGE ","Cust_RGB_Code": "rgb(245 ,158 ,101)"},'+
 '{"Binated_Thread_Code": "B-1156","Thread_Discription": "Palm Frond","PMS_Code": "5767C","RGB_Code": "rgb(121, 117, 72)","Customer ": "landsend","Cust_Thread_Code": "1156","Cust_Thread_Discription": "PALMETTO ","Cust_RGB_Code": "rgb(120 ,115 ,70)"},'+
 '{"Binated_Thread_Code": "B-1157","Thread_Discription": "Marsh","PMS_Code": "7757C","RGB_Code": "rgb(120, 108, 77)","Customer ": "landsend","Cust_Thread_Code": "1157","Cust_Thread_Discription": "OLIVE ","Cust_RGB_Code": "rgb(119 ,107 ,76)"},'+
 '{"Binated_Thread_Code": "B-1158","Thread_Discription": "Chestnut","PMS_Code": "7594C","RGB_Code": "rgb(123, 69, 57)","Customer ": "landsend","Cust_Thread_Code": "1158","Cust_Thread_Discription": "COPPER ","Cust_RGB_Code": "rgb(121 ,67 ,55)"},'+
 '{"Binated_Thread_Code": "B-1159","Thread_Discription": "Mustard","PMS_Code": "117C","RGB_Code": "rgb(210, 162, 67)","Customer ": "landsend","Cust_Thread_Code": "1159","Cust_Thread_Discription": "MUSTARD ","Cust_RGB_Code": "rgb(210 ,161 ,66)"},'+
 '{"Binated_Thread_Code": "B-1160","Thread_Discription": "Antique Blue","PMS_Code": "7698C","RGB_Code": "rgb(76, 115, 132)","Customer ": "landsend","Cust_Thread_Code": "1160","Cust_Thread_Discription": "STONEWARE ","Cust_RGB_Code": "rgb(76 ,114 ,131)"},'+
 '{"Binated_Thread_Code": "B-1161","Thread_Discription": "Twilight","PMS_Code": "2181C","RGB_Code": "rgb(47, 73, 82)","Customer ": "landsend","Cust_Thread_Code": "1161","Cust_Thread_Discription": "TARTAN BLUE ","Cust_RGB_Code": "rgb(45 ,72 ,81)"},'+
 '{"Binated_Thread_Code": "B-1162","Thread_Discription": "Admiral Blue","PMS_Code": "2210C","RGB_Code": "rgb(33, 64, 75)","Customer ": "landsend","Cust_Thread_Code": "1162","Cust_Thread_Discription": "DK TEAL ","Cust_RGB_Code": "rgb(31 ,63 ,74)"},'+
 '{"Binated_Thread_Code": "B-1166","Thread_Discription": "Hanukkah Blue","PMS_Code": "2747C","RGB_Code": "rgb(32, 69, 131)","Customer ": "landsend","Cust_Thread_Code": "1166","Cust_Thread_Discription": "ROYAL ","Cust_RGB_Code": "rgb(30 ,68 ,130)"},'+
 '{"Binated_Thread_Code": "B-1167","Thread_Discription": "Blue Ink","PMS_Code": "7687C","RGB_Code": "rgb(35, 74, 121)","Customer ": "landsend","Cust_Thread_Code": "1167","Cust_Thread_Discription": "DK ROYAL ","Cust_RGB_Code": "rgb(35 ,72 ,119)"},'+
 '{"Binated_Thread_Code": "B-1167","Thread_Discription": "Blue Ink","PMS_Code": "7687C","RGB_Code": "rgb(35, 74, 121)","Customer ": "landsend","Cust_Thread_Code": "1843","Cust_Thread_Discription": "DP BLUE NEON ","Cust_RGB_Code": "rgb(15 ,70 ,120)"},'+
 '{"Binated_Thread_Code": "B-1169","Thread_Discription": "Split Pea","PMS_Code": "377C","RGB_Code": "rgb(141, 153, 70)","Customer ": "landsend","Cust_Thread_Code": "1169","Cust_Thread_Discription": "SPRING GREEN ","Cust_RGB_Code": "rgb(128 ,159 ,0)"},'+
 '{"Binated_Thread_Code": "B-1170","Thread_Discription": "Fern","PMS_Code": "370C","RGB_Code": "rgb(93, 111, 49)","Customer ": "landsend","Cust_Thread_Code": "1170","Cust_Thread_Discription": "DILL ","Cust_RGB_Code": "rgb(90 ,110 ,41)"},'+
 '{"Binated_Thread_Code": "B-1171","Thread_Discription": "Lemon Drop","PMS_Code": "135C","RGB_Code": "rgb(240, 221, 167)","Customer ": "landsend","Cust_Thread_Code": "1171","Cust_Thread_Discription": "MUSTARD ","Cust_RGB_Code": "rgb(240 ,175 ,69)"},'+
 '{"Binated_Thread_Code": "B-1172","Thread_Discription": "Egg Yolk","PMS_Code": "130C","RGB_Code": "rgb(233, 154, 40)","Customer ": "landsend","Cust_Thread_Code": "1172","Cust_Thread_Discription": "CORN ","Cust_RGB_Code": "rgb(231 ,152 ,45)"},'+
 '{"Binated_Thread_Code": "B-1173","Thread_Discription": "Autumn Gold","PMS_Code": "7412C","RGB_Code": "rgb(194, 121, 61)","Customer ": "landsend","Cust_Thread_Code": "1173","Cust_Thread_Discription": "KARAT ","Cust_RGB_Code": "rgb(194 ,121 ,63)"},'+
 '{"Binated_Thread_Code": "B-1174","Thread_Discription": "Cinnamon Stick","PMS_Code": "1807C","RGB_Code": "rgb(133, 59, 57)","Customer ": "landsend","Cust_Thread_Code": "1174","Cust_Thread_Discription": "REDWOOD ","Cust_RGB_Code": "rgb(132 ,58 ,55)"},'+
 '{"Binated_Thread_Code": "B-1175","Thread_Discription": "Dark Federal Blue","PMS_Code": "653C","RGB_Code": "rgb(61, 105, 141)","Customer ": "landsend","Cust_Thread_Code": "1175","Cust_Thread_Discription": "LAKE BLUE ","Cust_RGB_Code": "rgb(59 ,104 ,141)"},'+
 '{"Binated_Thread_Code": "B-1176","Thread_Discription": "Navajo Blue","PMS_Code": "2143C","RGB_Code": "rgb(16, 130, 183)","Customer ": "landsend","Cust_Thread_Code": "1176","Cust_Thread_Discription": "LAPIS BLUE ","Cust_RGB_Code": "rgb(0 ,129 ,182)"},'+
 '{"Binated_Thread_Code": "B-1177","Thread_Discription": "Blue Bird","PMS_Code": "2935C","RGB_Code": "rgb(0, 110, 169)","Customer ": "landsend","Cust_Thread_Code": "1177","Cust_Thread_Discription": "TILE BLUE ","Cust_RGB_Code": "rgb(0 ,109 ,167)"},'+
 '{"Binated_Thread_Code": "B-1178","Thread_Discription": "Carrot","PMS_Code": "1645C","RGB_Code": "rgb(241, 106, 70)","Customer ": "landsend","Cust_Thread_Code": "1178","Cust_Thread_Discription": "BRT MELON ","Cust_RGB_Code": "rgb(246 ,105 ,67)"},'+
 '{"Binated_Thread_Code": "B-1179","Thread_Discription": "Sweet Potato","PMS_Code": "2348C","RGB_Code": "rgb(202, 82, 76)","Customer ": "landsend","Cust_Thread_Code": "1179","Cust_Thread_Discription": "CORAL ","Cust_RGB_Code": "rgb(201 ,82 ,75)"},'+
 '{"Binated_Thread_Code": "B-1180","Thread_Discription": "Daffodil","PMS_Code": "7404C","RGB_Code": "rgb(230, 195, 71)","Customer ": "landsend","Cust_Thread_Code": "1180","Cust_Thread_Discription": "DAFFODIL ","Cust_RGB_Code": "rgb(230 ,196 ,74)"},'+
 '{"Binated_Thread_Code": "B-1181","Thread_Discription": "Candy Apple Red","PMS_Code": "7427C","RGB_Code": "rgb(139, 37, 53)","Customer ": "landsend","Cust_Thread_Code": "1181","Cust_Thread_Discription": "DK RED ","Cust_RGB_Code": "rgb(137 ,37 ,51)"},'+
 '{"Binated_Thread_Code": "B-1181","Thread_Discription": "Candy Apple Red","PMS_Code": "7427C","RGB_Code": "rgb(139, 37, 53)","Customer ": "landsend","Cust_Thread_Code": "1981","Cust_Thread_Discription": "RUST NEON ","Cust_RGB_Code": "rgb(135 ,42 ,57)"},'+
 '{"Binated_Thread_Code": "B-1182","Thread_Discription": "Mulberry","PMS_Code": "7637C","RGB_Code": "rgb(121, 44, 61)","Customer ": "landsend","Cust_Thread_Code": "1182","Cust_Thread_Discription": "CURRANT ","Cust_RGB_Code": "rgb(120 ,43 ,60)"},'+
 '{"Binated_Thread_Code": "B-1183","Thread_Discription": "Cranberry","PMS_Code": "2041C","RGB_Code": "rgb(143, 51, 84)","Customer ": "landsend","Cust_Thread_Code": "1183","Cust_Thread_Discription": "RASPBERRY ","Cust_RGB_Code": "rgb(141 ,49 ,82)"},'+
 '{"Binated_Thread_Code": "B-1184","Thread_Discription": "Scarlet Rose","PMS_Code": "1935C","RGB_Code": "rgb(189, 32, 71)","Customer ": "landsend","Cust_Thread_Code": "1184","Cust_Thread_Discription": "CHERRY ","Cust_RGB_Code": "rgb(189 ,29 ,68)"},'+
 '{"Binated_Thread_Code": "B-1185","Thread_Discription": "Dark Teal","PMS_Code": "7719C","RGB_Code": "rgb(4, 100, 95)","Customer ": "landsend","Cust_Thread_Code": "1185","Cust_Thread_Discription": "PEACOCK ","Cust_RGB_Code": "rgb(0 ,98 ,94)"},'+
 '{"Binated_Thread_Code": "B-1186","Thread_Discription": "Ruby Slipper","PMS_Code": "Rubin Red C","RGB_Code": "rgb(169, 30, 70)","Customer ": "landsend","Cust_Thread_Code": "1186","Cust_Thread_Discription": "CRANBERRY ","Cust_RGB_Code": "rgb(169 ,0 ,66)"},'+
 '{"Binated_Thread_Code": "B-1187","Thread_Discription": "Orchid","PMS_Code": "2040C","RGB_Code": "rgb(183, 31, 87)","Customer ": "landsend","Cust_Thread_Code": "1187","Cust_Thread_Discription": "PINK RASPBERRY ","Cust_RGB_Code": "rgb(183 ,24 ,85)"},'+
 '{"Binated_Thread_Code": "B-1188","Thread_Discription": "Chokecherry","PMS_Code": "249C","RGB_Code": "rgb(123, 61, 110)","Customer ": "landsend","Cust_Thread_Code": "1188","Cust_Thread_Discription": "DP ORCHID ","Cust_RGB_Code": "rgb(122 ,59 ,109)"},'+
 '{"Binated_Thread_Code": "B-1190","Thread_Discription": "Sea Weed","PMS_Code": "3985C","RGB_Code": "rgb(150, 128, 61)","Customer ": "landsend","Cust_Thread_Code": "1190","Cust_Thread_Discription": "DRAB GREEN ","Cust_RGB_Code": "rgb(149 ,127 ,61)"},'+
 '{"Binated_Thread_Code": "B-1191","Thread_Discription": "Gold Coin","PMS_Code": "7557C","RGB_Code": "rgb(147, 113, 55)","Customer ": "landsend","Cust_Thread_Code": "1191","Cust_Thread_Discription": "MUTED OLIVE ","Cust_RGB_Code": "rgb(146 ,112 ,56)"},'+
 '{"Binated_Thread_Code": "B-1192","Thread_Discription": "Honey Mustard","PMS_Code": "125C","RGB_Code": "rgb(169, 122, 43)","Customer ": "landsend","Cust_Thread_Code": "1192","Cust_Thread_Discription": "OLIVE GOLD ","Cust_RGB_Code": "rgb(169 ,121 ,42)"},'+
 '{"Binated_Thread_Code": "B-1192","Thread_Discription": "Honey Mustard","PMS_Code": "125C","RGB_Code": "rgb(169, 122, 43)","Customer ": "landsend","Cust_Thread_Code": "1792","Cust_Thread_Discription": "BRT GOLD NEON ","Cust_RGB_Code": "rgb(178 ,136 ,54)"},'+
 '{"Binated_Thread_Code": "B-1196","Thread_Discription": "Medium Camo Green","PMS_Code": "456C","RGB_Code": "rgb(161, 131, 46)","Customer ": "landsend","Cust_Thread_Code": "1959","Cust_Thread_Discription": "GOLD NEON ","Cust_RGB_Code": "rgb(167 ,137 ,21)"},'+
 //'{"Binated_Thread_Code": "B-1218","Thread_Discription": "null","PMS_Code": "null","RGB_Code": "rgbnull","Customer ": "landsend","Cust_Thread_Code": "1341","Cust_Thread_Discription": "ROSEY COPPER ","Cust_RGB_Code": "rgb(164,100,98)"},'+
 '{"Binated_Thread_Code": "B-1221","Thread_Discription": "Terra Cotta","PMS_Code": "7598C","RGB_Code": "rgb(171, 66, 52)","Customer ": "landsend","Cust_Thread_Code": "1221","Cust_Thread_Discription": "CHINESE RUST ","Cust_RGB_Code": "rgb(170 ,65 ,52)"},'+
 '{"Binated_Thread_Code": "B-1223","Thread_Discription": "Lemon Tart","PMS_Code": "Yellow C","RGB_Code": "rgb(238, 199, 39)","Customer ": "landsend","Cust_Thread_Code": "1223","Cust_Thread_Discription": "SUNNY YELLOW ","Cust_RGB_Code": "rgb(239 ,200 ,44)"},'+
 '{"Binated_Thread_Code": "B-1223","Thread_Discription": "Lemon Tart","PMS_Code": "Yellow C","RGB_Code": "rgb(238, 199, 39)","Customer ": "landsend","Cust_Thread_Code": "1924","Cust_Thread_Discription": "BR YELLOW NEON ","Cust_RGB_Code": "rgb(251 ,212 ,0)"},'+
 '{"Binated_Thread_Code": "B-1224","Thread_Discription": "Lemonade","PMS_Code": "2003C","RGB_Code": "rgb(225, 188, 79)","Customer ": "landsend","Cust_Thread_Code": "1224","Cust_Thread_Discription": "SUNFLOWER ","Cust_RGB_Code": "rgb(226 ,188 ,81)"},'+
 '{"Binated_Thread_Code": "B-1225","Thread_Discription": "Liquid Gold","PMS_Code": "7563C","RGB_Code": "rgb(200, 141, 70)","Customer ": "landsend","Cust_Thread_Code": "1225","Cust_Thread_Discription": "DK GOLD ","Cust_RGB_Code": "rgb(201 ,141 ,71)"},'+
 '{"Binated_Thread_Code": "B-1225","Thread_Discription": "Liquid Gold","PMS_Code": "7563C","RGB_Code": "rgb(200, 141, 70)","Customer ": "landsend","Cust_Thread_Code": "1791","Cust_Thread_Discription": "PUTRED GOLD NEON ","Cust_RGB_Code": "rgb(175 ,121 ,64)"},'+
 '{"Binated_Thread_Code": "B-1226","Thread_Discription": "Amber","PMS_Code": "714C","RGB_Code": "rgb(211, 140, 99)","Customer ": "landsend","Cust_Thread_Code": "1226","Cust_Thread_Discription": "LT ORANGE ","Cust_RGB_Code": "rgb(213 ,141 ,100)"},'+
 '{"Binated_Thread_Code": "B-1227","Thread_Discription": "Mint Jubilee","PMS_Code": "564C","RGB_Code": "rgb(122, 156, 151)","Customer ": "landsend","Cust_Thread_Code": "1227","Cust_Thread_Discription": "PALE SAGE ","Cust_RGB_Code": "rgb(121 ,156 ,151)"},'+
 '{"Binated_Thread_Code": "B-1232","Thread_Discription": "Lavender","PMS_Code": "Violet 0631C","RGB_Code": "rgb(166, 153, 186)","Customer ": "landsend","Cust_Thread_Code": "1232","Cust_Thread_Discription": "LT LILAC ","Cust_RGB_Code": "rgb(167 ,153 ,187)"},'+
 '{"Binated_Thread_Code": "B-1233","Thread_Discription": "Blackberry Purple","PMS_Code": "668C","RGB_Code": "rgb(79, 70, 100)","Customer ": "landsend","Cust_Thread_Code": "1233","Cust_Thread_Discription": "DUSTY GRAPE ","Cust_RGB_Code": "rgb(78 ,69 ,100)"},'+
 '{"Binated_Thread_Code": "B-1234","Thread_Discription": "Hibiscus","PMS_Code": "7425C","RGB_Code": "rgb(191, 58, 100)","Customer ": "landsend","Cust_Thread_Code": "1234","Cust_Thread_Discription": "DK ROSE ","Cust_RGB_Code": "rgb(190 ,55 ,99)"},'+
 '{"Binated_Thread_Code": "B-1235","Thread_Discription": "Crocus","PMS_Code": "2058C","RGB_Code": "rgb(155, 105, 142)","Customer ": "landsend","Cust_Thread_Code": "1235","Cust_Thread_Discription": "DK ORCHID ","Cust_RGB_Code": "rgb(154 ,104 ,142)"},'+
 '{"Binated_Thread_Code": "B-1236","Thread_Discription": "Plum Brandy","PMS_Code": "505C","RGB_Code": "rgb(78, 43, 54)","Customer ": "landsend","Cust_Thread_Code": "1236","Cust_Thread_Discription": "DK PLUM ","Cust_RGB_Code": "rgb(78 ,42 ,54)"},'+
 '{"Binated_Thread_Code": "B-1238","Thread_Discription": "Sangria","PMS_Code": "201C","RGB_Code": "rgb(130, 42, 53)","Customer ": "landsend","Cust_Thread_Code": "1238","Cust_Thread_Discription": "CHRISTMAS RED ","Cust_RGB_Code": "rgb(129 ,40 ,51)"},'+
 '{"Binated_Thread_Code": "B-1239","Thread_Discription": "Charcoal","PMS_Code": "10385C","RGB_Code": "rgb(88, 83, 82)","Customer ": "landsend","Cust_Thread_Code": "1239","Cust_Thread_Discription": "MILKY GRAY ","Cust_RGB_Code": "rgb(87 ,82 ,81)"},'+
 '{"Binated_Thread_Code": "B-1239","Thread_Discription": "Charcoal","PMS_Code": "10385C","RGB_Code": "rgb(88, 83, 82)","Customer ": "landsend","Cust_Thread_Code": "1640","Cust_Thread_Discription": "DK GRAY NEON ","Cust_RGB_Code": "rgb(111 ,111 ,111)"},'+
 '{"Binated_Thread_Code": "B-1240","Thread_Discription": "Stone","PMS_Code": "409C","RGB_Code": "rgb(115, 106, 105)","Customer ": "landsend","Cust_Thread_Code": "1240","Cust_Thread_Discription": "GRAY HEATHER ","Cust_RGB_Code": "rgb(114 ,105 ,103)"},'+
 '{"Binated_Thread_Code": "B-1241","Thread_Discription": "Obsidian","PMS_Code": "432C","RGB_Code": "rgb(60, 64, 70)","Customer ": "landsend","Cust_Thread_Code": "1241","Cust_Thread_Discription": "CHARCOAL ","Cust_RGB_Code": "rgb(59 ,63 ,69)"},'+
 '{"Binated_Thread_Code": "B-1242","Thread_Discription": "Dark Denim","PMS_Code": "654C","RGB_Code": "rgb(35, 62, 92)","Customer ": "landsend","Cust_Thread_Code": "1242","Cust_Thread_Discription": "SAPPHIRE ","Cust_RGB_Code": "rgb(35 ,61 ,91)"},'+
 '{"Binated_Thread_Code": "B-1243","Thread_Discription": "Star-kissed Night","PMS_Code": "2768C","RGB_Code": "rgb(52, 61, 83)","Customer ": "landsend","Cust_Thread_Code": "1243","Cust_Thread_Discription": "DK INDIGO ","Cust_RGB_Code": "rgb(51 ,60 ,83)"},'+
 '{"Binated_Thread_Code": "B-1243","Thread_Discription": "Star-kissed Night","PMS_Code": "2768C","RGB_Code": "rgb(52, 61, 83)","Customer ": "landsend","Cust_Thread_Code": "1967","Cust_Thread_Discription": "DP NAVY NEON ","Cust_RGB_Code": "rgb(35 ,57 ,87)"},'+
 '{"Binated_Thread_Code": "B-1244","Thread_Discription": "Darkest Night","PMS_Code": "Black 6 C","RGB_Code": "rgb(45, 49, 57)","Customer ": "landsend","Cust_Thread_Code": "1244","Cust_Thread_Discription": "DK MIDNIGHT ","Cust_RGB_Code": "rgb(45 ,48 ,56)"},'+
 '{"Binated_Thread_Code": "B-1245","Thread_Discription": "Sea Foam Green","PMS_Code": "339C","RGB_Code": "rgb(41, 160, 133)","Customer ": "landsend","Cust_Thread_Code": "1245","Cust_Thread_Discription": "SEA GRN ","Cust_RGB_Code": "rgb(43 ,159 ,132)"},'+
 '{"Binated_Thread_Code": "B-1246","Thread_Discription": "Teal Green","PMS_Code": "326C","RGB_Code": "rgb(0, 140, 135)","Customer ": "landsend","Cust_Thread_Code": "1246","Cust_Thread_Discription": "JADE ","Cust_RGB_Code": "rgb(0 ,139 ,135)"},'+
 '{"Binated_Thread_Code": "B-1247","Thread_Discription": "Bottle Green","PMS_Code": "340C","RGB_Code": "rgb(2, 148, 110)","Customer ": "landsend","Cust_Thread_Code": "1247","Cust_Thread_Discription": "PARROT GRN ","Cust_RGB_Code": "rgb(0 ,147 ,109)"},'+
 '{"Binated_Thread_Code": "B-1248","Thread_Discription": "Margarita Lime","PMS_Code": "2283C","RGB_Code": "rgb(155, 205, 106)","Customer ": "landsend","Cust_Thread_Code": "1248","Cust_Thread_Discription": "LT APPLE GRN ","Cust_RGB_Code": "rgb(154 ,206 ,105)"},'+
 '{"Binated_Thread_Code": "B-1248","Thread_Discription": "Margarita Lime","PMS_Code": "2283C","RGB_Code": "rgb(155, 205, 106)","Customer ": "landsend","Cust_Thread_Code": "1950","Cust_Thread_Discription": "FLOURES GREEN NEON ","Cust_RGB_Code": "rgb(118 ,214 ,56)"},'+
 '{"Binated_Thread_Code": "B-1249","Thread_Discription": "Shamrock","PMS_Code": "802C","RGB_Code": "rgb(18, 162, 74)","Customer ": "landsend","Cust_Thread_Code": "1249","Cust_Thread_Discription": "DK APPLE GRN ","Cust_RGB_Code": "rgb(14 ,161 ,70)"},'+
 '{"Binated_Thread_Code": "B-1250","Thread_Discription": "Christmas Green","PMS_Code": "3415C","RGB_Code": "rgb(0, 114, 73)","Customer ": "landsend","Cust_Thread_Code": "1250","Cust_Thread_Discription": "KELLY GRN ","Cust_RGB_Code": "rgb(0 ,112 ,71)"},'+
 '{"Binated_Thread_Code": "B-1251","Thread_Discription": "Kelly Green","PMS_Code": "7481C","RGB_Code": "rgb(5, 146, 75)","Customer ": "landsend","Cust_Thread_Code": "1251","Cust_Thread_Discription": "BRIGHT GRN ","Cust_RGB_Code": "rgb(0 ,145 ,76)"},'+
 '{"Binated_Thread_Code": "B-1252","Thread_Discription": "Neptune","PMS_Code": "5473C","RGB_Code": "rgb(56, 93, 100)","Customer ": "landsend","Cust_Thread_Code": "1252","Cust_Thread_Discription": "BLUE SPRUCE ","Cust_RGB_Code": "rgb(55 ,91 ,99)"},'+
 '{"Binated_Thread_Code": "B-1259","Thread_Discription": "Cocoa","PMS_Code": "8561C","RGB_Code": "rgb(121, 89, 85)","Customer ": "landsend","Cust_Thread_Code": "1259","Cust_Thread_Discription": "MED COCOA ","Cust_RGB_Code": "rgb(119 ,88 ,84)"},'+
 '{"Binated_Thread_Code": "B-1261","Thread_Discription": "Lavendula","PMS_Code": "2716C","RGB_Code": "rgb(147, 157, 195)","Customer ": "landsend","Cust_Thread_Code": "1261","Cust_Thread_Discription": "LAVENDULA ","Cust_RGB_Code": "rgb(147,157,195)"},'+
 '{"Binated_Thread_Code": "B-1270","Thread_Discription": "Sawdust","PMS_Code": "7401C","RGB_Code": "rgb(228, 185, 131)","Customer ": "landsend","Cust_Thread_Code": "1270","Cust_Thread_Discription": "CHAMOIS ","Cust_RGB_Code": "rgb(228 ,186 ,130)"},'+
 '{"Binated_Thread_Code": "B-1274","Thread_Discription": "Porcelain Blue","PMS_Code": "292C","RGB_Code": "rgb(112, 168, 198)","Customer ": "landsend","Cust_Thread_Code": "1675","Cust_Thread_Discription": "PWDR BLUE NEON ","Cust_RGB_Code": "rgb(122 ,174 ,213)"},'+
 '{"Binated_Thread_Code": "B-1278","Thread_Discription": "Orange Icing","PMS_Code": "1505C","RGB_Code": "rgb(241, 104, 36)","Customer ": "landsend","Cust_Thread_Code": "1278","Cust_Thread_Discription": "TANGERINE ","Cust_RGB_Code": "rgb(255 ,102 ,22)"},'+
 '{"Binated_Thread_Code": "B-1279","Thread_Discription": "Tropical Teal","PMS_Code": "3282C","RGB_Code": "rgb(3, 130, 116)","Customer ": "landsend","Cust_Thread_Code": "1279","Cust_Thread_Discription": "PEACOCK ","Cust_RGB_Code": "rgb(0 ,129 ,115)"},'+
 '{"Binated_Thread_Code": "B-1280","Thread_Discription": "Oregon Green","PMS_Code": "3288C","RGB_Code": "rgb(2, 120, 100)","Customer ": "landsend","Cust_Thread_Code": "1280","Cust_Thread_Discription": "DK PEACOCK ","Cust_RGB_Code": "rgb(0 ,119 ,99)"},'+
 '{"Binated_Thread_Code": "B-1281","Thread_Discription": "Radish","PMS_Code": "193C","RGB_Code": "rgb(161, 35, 65)","Customer ": "landsend","Cust_Thread_Code": "1281","Cust_Thread_Discription": "DP RED ","Cust_RGB_Code": "rgb(159 ,35 ,63)"},'+
 '{"Binated_Thread_Code": "B-1288","Thread_Discription": "Shark","PMS_Code": "423C","RGB_Code": "rgb(123, 122, 119)","Customer ": "landsend","Cust_Thread_Code": "1288","Cust_Thread_Discription": "GRAY ","Cust_RGB_Code": "rgb(153,143,130)"},'+
 '{"Binated_Thread_Code": "B-1289","Thread_Discription": "Silver Mound","PMS_Code": "631C","RGB_Code": "rgb(73, 152, 164)","Customer ": "landsend","Cust_Thread_Code": "1289","Cust_Thread_Discription": "SEA BLUE ","Cust_RGB_Code": "rgb(70 ,152 ,165)"},'+
 '{"Binated_Thread_Code": "B-1290","Thread_Discription": "Mallard Teal","PMS_Code": "3165C","RGB_Code": "rgb(23, 75, 76)","Customer ": "landsend","Cust_Thread_Code": "1290","Cust_Thread_Discription": "DK SMOKEY TEAL ","Cust_RGB_Code": "rgb(21 ,75 ,75)"},'+
 '{"Binated_Thread_Code": "B-1291","Thread_Discription": "Marlin","PMS_Code": "315C","RGB_Code": "rgb(9, 102, 116)","Customer ": "landsend","Cust_Thread_Code": "1291","Cust_Thread_Discription": "TEAL ","Cust_RGB_Code": "rgb(0 ,100 ,115)"},'+
 '{"Binated_Thread_Code": "B-1292","Thread_Discription": "Limestone","PMS_Code": "317C","RGB_Code": "rgb(143, 196, 196)","Customer ": "landsend","Cust_Thread_Code": "1292","Cust_Thread_Discription": "LT AQUA ","Cust_RGB_Code": "rgb(142 ,196 ,195)"},'+
 '{"Binated_Thread_Code": "B-1292","Thread_Discription": "Limestone","PMS_Code": "317C","RGB_Code": "rgb(143, 196, 196)","Customer ": "landsend","Cust_Thread_Code": "1692","Cust_Thread_Discription": "Limestone","Cust_RGB_Code": "rgb(177,228,227)"},'+
 '{"Binated_Thread_Code": "B-1293","Thread_Discription": "Malachite","PMS_Code": "322C","RGB_Code": "rgb(2, 110, 113)","Customer ": "landsend","Cust_Thread_Code": "1293","Cust_Thread_Discription": "LT TARTAN BLUE ","Cust_RGB_Code": "rgb(0 ,109 ,112)"},'+
 '{"Binated_Thread_Code": "B-1294","Thread_Discription": "Liberty","PMS_Code": "633C","RGB_Code": "rgb(7, 130, 155)","Customer ": "landsend","Cust_Thread_Code": "1294","Cust_Thread_Discription": "LT TURQUOISE ","Cust_RGB_Code": "rgb(0 ,129 ,155)"},'+
 '{"Binated_Thread_Code": "B-1295","Thread_Discription": "Cyan","PMS_Code": "7460C","RGB_Code": "rgb(5, 141, 173)","Customer ": "landsend","Cust_Thread_Code": "1295","Cust_Thread_Discription": "DK TURQUOISE ","Cust_RGB_Code": "rgb(0 ,140 ,172)"},'+
 '{"Binated_Thread_Code": "B-1295","Thread_Discription": "Cyan","PMS_Code": "7460C","RGB_Code": "rgb(5, 141, 173)","Customer ": "landsend","Cust_Thread_Code": "1593","Cust_Thread_Discription": "BLUE MACAW ","Cust_RGB_Code": "rgb(0,163,224)"},'+
 '{"Binated_Thread_Code": "B-1295","Thread_Discription": "Cyan","PMS_Code": "7460C","RGB_Code": "rgb(5, 141, 173)","Customer ": "landsend","Cust_Thread_Code": "1977","Cust_Thread_Discription": "SAPPHIRE NEON ","Cust_RGB_Code": "rgb(0 ,129 ,175)"},'+
 '{"Binated_Thread_Code": "B-1296","Thread_Discription": "Deep Ocean","PMS_Code": "7469C","RGB_Code": "rgb(10, 97, 128)","Customer ": "landsend","Cust_Thread_Code": "1296","Cust_Thread_Discription": "AZURE ","Cust_RGB_Code": "rgb(0 ,95 ,126)"},'+
 '{"Binated_Thread_Code": "B-1296","Thread_Discription": "Deep Ocean","PMS_Code": "7469C","RGB_Code": "rgb(10, 97, 128)","Customer ": "landsend","Cust_Thread_Code": "1896","Cust_Thread_Discription": "SKY BLUE NEON ","Cust_RGB_Code": "rgb(0 ,112 ,136)"},'+
 '{"Binated_Thread_Code": "B-1297","Thread_Discription": "Calypso Blue","PMS_Code": "2193C","RGB_Code": "rgb(7, 114, 163)","Customer ": "landsend","Cust_Thread_Code": "1297","Cust_Thread_Discription": "SKY BLUE ","Cust_RGB_Code": "rgb(0 ,113 ,163)"},'+
 '{"Binated_Thread_Code": "B-1298","Thread_Discription": "Tree Frog","PMS_Code": "3272C","RGB_Code": "rgb(5, 135, 123)","Customer ": "landsend","Cust_Thread_Code": "1298","Cust_Thread_Discription": "TURQUOISE JADE ","Cust_RGB_Code": "rgb(0 ,134 ,122)"},'+
 '{"Binated_Thread_Code": "B-1298","Thread_Discription": "Tree Frog","PMS_Code": "3272C","RGB_Code": "rgb(5, 135, 123)","Customer ": "landsend","Cust_Thread_Code": "1685","Cust_Thread_Discription": "TEAL NEON ","Cust_RGB_Code": "rgb(192,31,6)"},'+
 '{"Binated_Thread_Code": "B-1299","Thread_Discription": "Green Turquoise","PMS_Code": "326C","RGB_Code": "rgb(0, 185, 172)","Customer ": "landsend","Cust_Thread_Code": "1299","Cust_Thread_Discription": "DK MINT GREEN ","Cust_RGB_Code": "rgb(0 ,185 ,172)"},'+
 '{"Binated_Thread_Code": "B-1301","Thread_Discription": "Jade","PMS_Code": "2413C","RGB_Code": "rgb(53, 168, 125)","Customer ": "landsend","Cust_Thread_Code": "1301","Cust_Thread_Discription": "PEA GREEN ","Cust_RGB_Code": "rgb(56 ,168 ,125)"},'+
 '{"Binated_Thread_Code": "B-1302","Thread_Discription": "Spearmint","PMS_Code": "353C","RGB_Code": "rgb(126, 200, 149)","Customer ": "landsend","Cust_Thread_Code": "1302","Cust_Thread_Discription": "LT PEA GRN ","Cust_RGB_Code": "rgb(122 ,206 ,150)"},'+
 '{"Binated_Thread_Code": "B-1305","Thread_Discription": "Chamois","PMS_Code": "4545C","RGB_Code": "rgb(194, 182, 152)","Customer ": "landsend","Cust_Thread_Code": "1305","Cust_Thread_Discription": "SPRITE ","Cust_RGB_Code": "rgb(193 ,181 ,151)"},'+
 '{"Binated_Thread_Code": "B-1306","Thread_Discription": "Army Green","PMS_Code": "2327C","RGB_Code": "rgb(125, 122, 103)","Customer ": "landsend","Cust_Thread_Code": "1306","Cust_Thread_Discription": "BAYLEAF ","Cust_RGB_Code": "rgb(123 ,121 ,102)"},'+
 '{"Binated_Thread_Code": "B-1307","Thread_Discription": "Raspberry Punch","PMS_Code": "Red 032 C","RGB_Code": "rgb(218, 71, 82)","Customer ": "landsend","Cust_Thread_Code": "1307","Cust_Thread_Discription": "BR CORAL ","Cust_RGB_Code": "rgb(218 ,71 ,81)"},'+
 '{"Binated_Thread_Code": "B-1309","Thread_Discription": "Dahlia","PMS_Code": "211C","RGB_Code": "rgb(215, 99, 154)","Customer ": "landsend","Cust_Thread_Code": "1309","Cust_Thread_Discription": "CANDY PINK ","Cust_RGB_Code": "rgb(214 ,99 ,153)"},'+
 '{"Binated_Thread_Code": "B-1310","Thread_Discription": "Magenta","PMS_Code": "2062C","RGB_Code": "rgb(151, 61, 116)","Customer ": "landsend","Cust_Thread_Code": "1310","Cust_Thread_Discription": "MAGENTA ","Cust_RGB_Code": "rgb(149 ,60 ,115)"},'+
 '{"Binated_Thread_Code": "B-1311","Thread_Discription": "Mystic Lavender","PMS_Code": "2073C","RGB_Code": "rgb(142, 140, 184)","Customer ": "landsend","Cust_Thread_Code": "1311","Cust_Thread_Discription": "LILAC ","Cust_RGB_Code": "rgb(142 ,139 ,184)"},'+
 '{"Binated_Thread_Code": "B-1312","Thread_Discription": "Purple Grape","PMS_Code": "7677C","RGB_Code": "rgb(89, 74, 112)","Customer ": "landsend","Cust_Thread_Code": "1312","Cust_Thread_Discription": "ROYAL PURPLE ","Cust_RGB_Code": "rgb(88 ,73 ,111)"},'+
 '{"Binated_Thread_Code": "B-1313","Thread_Discription": "Berry Blast","PMS_Code": "2627C","RGB_Code": "rgb(69, 54, 85)","Customer ": "landsend","Cust_Thread_Code": "1313","Cust_Thread_Discription": "DK DUSTY GRAPE ","Cust_RGB_Code": "rgb(68 ,53 ,85)"},'+
 '{"Binated_Thread_Code": "B-1315","Thread_Discription": "Pink Grapefruit","PMS_Code": "1765C ","RGB_Code": "rgb(229, 157, 167)","Customer ": "landsend","Cust_Thread_Code": "1315","Cust_Thread_Discription": "ENGLISH ROSE ","Cust_RGB_Code": "rgb(228 ,156 ,167)"},'+
 '{"Binated_Thread_Code": "B-1317","Thread_Discription": "Blush Pink","PMS_Code": "5035C ","RGB_Code": "rgb(234, 160, 156)","Customer ": "landsend","Cust_Thread_Code": "1317","Cust_Thread_Discription": "SOFT PEACH ","Cust_RGB_Code": "rgb(233 ,160 ,155)"},'+
 '{"Binated_Thread_Code": "B-1317","Thread_Discription": "Blush Pink","PMS_Code": "5035C ","RGB_Code": "rgb(234, 160, 156)","Customer ": "landsend","Cust_Thread_Code": "1016","Cust_Thread_Discription": "DUSTY ROSE ","Cust_RGB_Code": "rgb(234 ,149 ,149)"},'+
 '{"Binated_Thread_Code": "B-1318","Thread_Discription": "Graphite","PMS_Code": "Black C","RGB_Code": "rgb(67, 66, 72)","Customer ": "landsend","Cust_Thread_Code": "1318","Cust_Thread_Discription": "LT CHARCOAL ","Cust_RGB_Code": "rgb(66 ,64 ,71)"},'+
 '{"Binated_Thread_Code": "B-1319","Thread_Discription": "Iris","PMS_Code": "2060C","RGB_Code": "rgb(163, 103, 138)","Customer ": "landsend","Cust_Thread_Code": "1319","Cust_Thread_Discription": "ROSEBERRY ","Cust_RGB_Code": "rgb(162 ,102 ,137)"},'+
 '{"Binated_Thread_Code": "B-1320","Thread_Discription": "Purple Heart","PMS_Code": "519C","RGB_Code": "rgb(91, 65, 92)","Customer ": "landsend","Cust_Thread_Code": "1320","Cust_Thread_Discription": "RED VIOLET ","Cust_RGB_Code": "rgb(90 ,64 ,92)"},'+
 '{"Binated_Thread_Code": "B-1321","Thread_Discription": "Bubble Gum Pink","PMS_Code": "2037C","RGB_Code": "rgb(225, 147, 184)","Customer ": "landsend","Cust_Thread_Code": "1321","Cust_Thread_Discription": "ROSE PINK ","Cust_RGB_Code": "rgb(225 ,146 ,184)"},'+
 '{"Binated_Thread_Code": "B-1322","Thread_Discription": "Royal Purple","PMS_Code": "2685C","RGB_Code": "rgb(66, 64, 122)","Customer ": "landsend","Cust_Thread_Code": "1322","Cust_Thread_Discription": "VIOLET ","Cust_RGB_Code": "rgb(65 ,63 ,121)"},'+
 '{"Binated_Thread_Code": "B-1329","Thread_Discription": "Toasted Marshmellow","PMS_Code": "7614C","RGB_Code": "rgb(126, 97, 85)","Customer ": "landsend","Cust_Thread_Code": "1329","Cust_Thread_Discription": "COCOA ","Cust_RGB_Code": "rgb(124 ,96 ,84)"},'+
 '{"Binated_Thread_Code": "B-1330","Thread_Discription": "Bahamas Blue","PMS_Code": "2725C","RGB_Code": "rgb(82, 95, 153)","Customer ": "landsend","Cust_Thread_Code": "1330","Cust_Thread_Discription": "GRAPE ","Cust_RGB_Code": "rgb(81 ,94 ,151)"},'+
 '{"Binated_Thread_Code": "B-1334","Thread_Discription": "Purple Passion","PMS_Code": "255C","RGB_Code": "rgb(98, 51, 103)","Customer ": "landsend","Cust_Thread_Code": "1334","Cust_Thread_Discription": "PURPLE ","Cust_RGB_Code": "rgb(97 ,50 ,103)"},'+
 '{"Binated_Thread_Code": "B-1335","Thread_Discription": "Dark Periwinkle","PMS_Code": "7456C","RGB_Code": "rgb(70, 102, 163)","Customer ": "landsend","Cust_Thread_Code": "1335","Cust_Thread_Discription": "LT VIOLET ","Cust_RGB_Code": "rgb(69 ,101 ,162)"},'+
 '{"Binated_Thread_Code": "B-1336","Thread_Discription": "Saddle Brown","PMS_Code": "10379C","RGB_Code": "rgb(111, 90, 83)","Customer ": "landsend","Cust_Thread_Code": "1336","Cust_Thread_Discription": "MOCHA ","Cust_RGB_Code": "rgb(110 ,88 ,81)"},'+
 '{"Binated_Thread_Code": "B-1338","Thread_Discription": "Nutmeg","PMS_Code": "872C","RGB_Code": "rgb(171, 143, 106)","Customer ": "landsend","Cust_Thread_Code": "1338","Cust_Thread_Discription": "LT BROWN ","Cust_RGB_Code": "rgb(171 ,143 ,106)"},'+
 '{"Binated_Thread_Code": "B-1343","Thread_Discription": "Grape Juice","PMS_Code": "2755C","RGB_Code": "rgb(54, 57, 99)","Customer ": "landsend","Cust_Thread_Code": "1343","Cust_Thread_Discription": "DARK VIOLET ","Cust_RGB_Code": "rgb(53 ,56 ,98)"},'+
 '{"Binated_Thread_Code": "B-1344","Thread_Discription": "Camel","PMS_Code": "10356C","RGB_Code": "rgb(144, 114, 86)","Customer ": "landsend","Cust_Thread_Code": "1344","Cust_Thread_Discription": "TAN","Cust_RGB_Code": "rgb(143 ,113 ,84)"},'+
 '{"Binated_Thread_Code": "B-1350","Thread_Discription": "Citrus Green","PMS_Code": "10109C","RGB_Code": "rgb(180, 162, 68)","Customer ": "landsend","Cust_Thread_Code": "1350","Cust_Thread_Discription": "LT MOSS ","Cust_RGB_Code": "rgb(181 ,163 ,72)"},'+
 '{"Binated_Thread_Code": "B-1350","Thread_Discription": "Citrus Green","PMS_Code": "10109C","RGB_Code": "rgb(180, 162, 68)","Customer ": "landsend","Cust_Thread_Code": "1450","Cust_Thread_Discription": "ELECTRIC LIME ","Cust_RGB_Code": "rgb(201,219,3)"},'+
 '{"Binated_Thread_Code": "B-1351","Thread_Discription": "Alligator","PMS_Code": "3298C","RGB_Code": "rgb(23, 91, 75)","Customer ": "landsend","Cust_Thread_Code": "1351","Cust_Thread_Discription": "LANDROVER ","Cust_RGB_Code": "rgb(0,106,82)"},'+
 '{"Binated_Thread_Code": "B-1354","Thread_Discription": "Watermelon","PMS_Code": "191C","RGB_Code": "rgb(204, 77, 109)","Customer ": "landsend","Cust_Thread_Code": "1354","Cust_Thread_Discription": "PINK ROSE ","Cust_RGB_Code": "rgb(204 ,75 ,109)"},'+
 '{"Binated_Thread_Code": "B-1357","Thread_Discription": "Dark Seaweed","PMS_Code": "7498C","RGB_Code": "rgb(73, 71, 53)","Customer ": "landsend","Cust_Thread_Code": "1357","Cust_Thread_Discription": "DK EVERGREEN ","Cust_RGB_Code": "rgb(72 ,70 ,52)"},'+
 '{"Binated_Thread_Code": "B-1358","Thread_Discription": "Cedar Bark","PMS_Code": "1817C","RGB_Code": "rgb(120, 79, 79)","Customer ": "landsend","Cust_Thread_Code": "1358","Cust_Thread_Discription": "BROWN ","Cust_RGB_Code": "rgb(119 ,77 ,77)"},'+
 '{"Binated_Thread_Code": "B-1359","Thread_Discription": "Golden Nugget","PMS_Code": "7409C","RGB_Code": "rgb(204, 150, 44)","Customer ": "landsend","Cust_Thread_Code": "1359","Cust_Thread_Discription": "LT MUSTARD ","Cust_RGB_Code": "rgb(207 ,152 ,45)"},'+
 '{"Binated_Thread_Code": "B-1360","Thread_Discription": "Dusty Blue","PMS_Code": "5415C","RGB_Code": "rgb(118, 145, 161)","Customer ": "landsend","Cust_Thread_Code": "1360","Cust_Thread_Discription": "CHINA BLUE ","Cust_RGB_Code": "rgb(118 ,145 ,161)"},'+
 '{"Binated_Thread_Code": "B-1363","Thread_Discription": "Steel Lavender","PMS_Code": "10251C","RGB_Code": "rgb(122, 129, 146)","Customer ": "landsend","Cust_Thread_Code": "1363","Cust_Thread_Discription": "DK PEWTER ","Cust_RGB_Code": "rgb(121 ,129 ,145)"},'+
 '{"Binated_Thread_Code": "B-1364","Thread_Discription": "Storm Sky Blue","PMS_Code": "2139C","RGB_Code": "rgb(73, 90, 110)","Customer ": "landsend","Cust_Thread_Code": "1364","Cust_Thread_Discription": "SLATE BLUE ","Cust_RGB_Code": "rgb(71 ,89 ,110)"},'+
 '{"Binated_Thread_Code": "B-1365","Thread_Discription": "Dusty Plum","PMS_Code": "2111C","RGB_Code": "rgb(66, 74, 96)","Customer ": "landsend","Cust_Thread_Code": "1365","Cust_Thread_Discription": "POWDER BLUE ","Cust_RGB_Code": "rgb(64 ,73 ,95)"},'+
 '{"Binated_Thread_Code": "B-1366","Thread_Discription": "Dark Purple Iris","PMS_Code": "2755C","RGB_Code": "rgb(43, 54, 107)","Customer ": "landsend","Cust_Thread_Code": "1366","Cust_Thread_Discription": "EMPIRE BLUE ","Cust_RGB_Code": "rgb(44 ,53 ,107)"},'+
 '{"Binated_Thread_Code": "B-1368","Thread_Discription": "Night Sky","PMS_Code": "533C","RGB_Code": "rgb(43, 56, 75)","Customer ": "aramark","Cust_Thread_Code": "1966","Cust_Thread_Discription": "Dark Blue","Cust_RGB_Code": "rgb(15,48,99)"},'+
 '{"Binated_Thread_Code": "B-1369","Thread_Discription": "Fresh Pine","PMS_Code": "7740C","RGB_Code": "rgb(60, 123, 63)","Customer ": "landsend","Cust_Thread_Code": "1369","Cust_Thread_Discription": "LT EMERALD ","Cust_RGB_Code": "rgb(58 ,121 ,62)"},'+
 '{"Binated_Thread_Code": "B-1370","Thread_Discription": "Fir","PMS_Code": "7484C","RGB_Code": "rgb(37, 80, 60)","Customer ": "landsend","Cust_Thread_Code": "1370","Cust_Thread_Discription": "LT PINE ","Cust_RGB_Code": "rgb(35 ,79 ,59)"},'+
 '{"Binated_Thread_Code": "B-1371","Thread_Discription": "Deep Sea","PMS_Code": "3292C","RGB_Code": "rgb(35, 85, 79)","Customer ": "landsend","Cust_Thread_Code": "1371","Cust_Thread_Discription": "SPRUCE ","Cust_RGB_Code": "rgb(32 ,84 ,78)"},'+
 '{"Binated_Thread_Code": "B-1374","Thread_Discription": "Maroon","PMS_Code": "1817C","RGB_Code": "rgb(97, 46, 50)","Customer ": "landsend","Cust_Thread_Code": "1374","Cust_Thread_Discription": "COFFEE BEAN ","Cust_RGB_Code": "rgb(96 ,44 ,49)"},'+
 '{"Binated_Thread_Code": "B-1376","Thread_Discription": "Space Blue","PMS_Code": "302C","RGB_Code": "rgb(36, 79, 104)","Customer ": "landsend","Cust_Thread_Code": "1376","Cust_Thread_Discription": "CADET BLUE ","Cust_RGB_Code": "rgb(35 ,77 ,103)"},'+
 '{"Binated_Thread_Code": "B-1378","Thread_Discription": "Paprika","PMS_Code": "2028C","RGB_Code": "rgb(221, 59, 39)","Customer ": "landsend","Cust_Thread_Code": "1378","Cust_Thread_Discription": "DK MANDARIN ","Cust_RGB_Code": "rgb(221 ,56 ,35)"},'+
 '{"Binated_Thread_Code": "B-1380","Thread_Discription": "Oasis","PMS_Code": "2399C","RGB_Code": "rgb(0, 154, 135)","Customer ": "landsend","Cust_Thread_Code": "1380","Cust_Thread_Discription": "LT JADE ","Cust_RGB_Code": "rgb(0 ,153 ,134)"},'+
 '{"Binated_Thread_Code": "B-1381","Thread_Discription": "Ripe Raspberry","PMS_Code": "7420C","RGB_Code": "rgb(141, 41, 67)","Customer ": "landsend","Cust_Thread_Code": "1381","Cust_Thread_Discription": "GARNET ","Cust_RGB_Code": "rgb(140 ,40 ,66)"},'+
 '{"Binated_Thread_Code": "B-1382","Thread_Discription": "Colonial Rose","PMS_Code": "7428C","RGB_Code": "rgb(101, 62, 72)","Customer ": "landsend","Cust_Thread_Code": "1382","Cust_Thread_Discription": "SOFT BORDEAUX ","Cust_RGB_Code": "rgb(101 ,61 ,71)"},'+
 '{"Binated_Thread_Code": "B-1383","Thread_Discription": "Pink Pansy","PMS_Code": "220C","RGB_Code": "rgb(157, 30, 85)","Customer ": "landsend","Cust_Thread_Code": "1383","Cust_Thread_Discription": "BERRY ","Cust_RGB_Code": "rgb(156 ,31 ,84)"},'+
 '{"Binated_Thread_Code": "B-1384","Thread_Discription": "Merlot","PMS_Code": "7638C","RGB_Code": "rgb(112, 45, 57)","Customer ": "landsend","Cust_Thread_Code": "1384","Cust_Thread_Discription": "BURGUNDY ","Cust_RGB_Code": "rgb(110 ,43 ,56)"},'+
 '{"Binated_Thread_Code": "B-1385","Thread_Discription": "Garnet","PMS_Code": "209C","RGB_Code": "rgb(97, 38, 52)","Customer ": "landsend","Cust_Thread_Code": "1385","Cust_Thread_Discription": "CLARET ","Cust_RGB_Code": "rgb(97 ,37 ,51)"},'+
 '{"Binated_Thread_Code": "B-1386","Thread_Discription": "Eggplant","PMS_Code": "7644C","RGB_Code": "rgb(77, 49, 61)","Customer ": "landsend","Cust_Thread_Code": "1386","Cust_Thread_Discription": "DK WINE ","Cust_RGB_Code": "rgb(77 ,48 ,61)"},'+
 '{"Binated_Thread_Code": "B-1387","Thread_Discription": "Berry Frost","PMS_Code": "667C","RGB_Code": "rgb(117, 105, 127)","Customer ": "landsend","Cust_Thread_Code": "1387","Cust_Thread_Discription": "WOODVIOLET ","Cust_RGB_Code": "rgb(116 ,103 ,126)"},'+
 '{"Binated_Thread_Code": "B-1388","Thread_Discription": "Plum","PMS_Code": "7652C","RGB_Code": "rgb(93, 55, 82)","Customer ": "landsend","Cust_Thread_Code": "1388","Cust_Thread_Discription": "PLUM WINE ","Cust_RGB_Code": "rgb(92 ,53 ,81)"},'+
 '{"Binated_Thread_Code": "B-1389","Thread_Discription": "Bordeaux","PMS_Code": "7435C","RGB_Code": "rgb(117, 47, 75)","Customer ": "landsend","Cust_Thread_Code": "1389","Cust_Thread_Discription": "SPARKLING WINE ","Cust_RGB_Code": "rgb(115 ,46 ,74)"},'+
 '{"Binated_Thread_Code": "B-1390","Thread_Discription": "Forest Green","PMS_Code": "3305C","RGB_Code": "rgb(45, 70, 62)","Customer ": "landsend","Cust_Thread_Code": "1390","Cust_Thread_Discription": "EVERGREEN ","Cust_RGB_Code": "rgb(44 ,69 ,61)"},'+
 '{"Binated_Thread_Code": "B-1391","Thread_Discription": "Spruce Green","PMS_Code": "5545C","RGB_Code": "rgb(80, 108, 99)","Customer ": "landsend","Cust_Thread_Code": "1391","Cust_Thread_Discription": "DUSTY SPRUCE ","Cust_RGB_Code": "rgb(78 ,107 ,97)"},'+
 '{"Binated_Thread_Code": "B-1392","Thread_Discription": "Silver Sage","PMS_Code": "5626C","RGB_Code": "rgb(108, 123, 107)","Customer ": "landsend","Cust_Thread_Code": "1392","Cust_Thread_Discription": "THYME ","Cust_RGB_Code": "rgb(106 ,122 ,106)"},'+
 '{"Binated_Thread_Code": "B-1394","Thread_Discription": "Kale","PMS_Code": "5743C","RGB_Code": "rgb(81, 85, 69)","Customer ": "landsend","Cust_Thread_Code": "1394","Cust_Thread_Discription": "SAGE GREEN ","Cust_RGB_Code": "rgb(80 ,84 ,67)"},'+
 '{"Binated_Thread_Code": "B-1395","Thread_Discription": "Rosemary","PMS_Code": "5535C","RGB_Code": "rgb(62, 74, 64)","Customer ": "landsend","Cust_Thread_Code": "1395","Cust_Thread_Discription": "DK PINE ","Cust_RGB_Code": "rgb(61 ,73 ,63)"},'+
 '{"Binated_Thread_Code": "B-1396","Thread_Discription": "Dark Sage","PMS_Code": "5615C","RGB_Code": "rgb(82, 98, 81)","Customer ": "landsend","Cust_Thread_Code": "1396","Cust_Thread_Discription": "PINE ","Cust_RGB_Code": "rgb(81 ,97 ,80)"},'+
 '{"Binated_Thread_Code": "B-1397","Thread_Discription": "Evergreen","PMS_Code": "3305C","RGB_Code": "rgb(35, 70, 60)","Customer ": "landsend","Cust_Thread_Code": "1397","Cust_Thread_Discription": "ARMY GRN ","Cust_RGB_Code": "rgb(33 ,69 ,59)"},'+
 '{"Binated_Thread_Code": "B-1461","Thread_Discription": "Iron Gray","PMS_Code": "444C","RGB_Code": "rgb(98, 112, 111)","Customer ": "landsend","Cust_Thread_Code": "1461","Cust_Thread_Discription": "IRON GRAY ","Cust_RGB_Code": "rgb(98,112,111)"},'+
 '{"Binated_Thread_Code": "B-1489","Thread_Discription": "Clover","PMS_Code": "575C","RGB_Code": "rgb(84, 102, 46)","Customer ": "landsend","Cust_Thread_Code": "1489","Cust_Thread_Discription": "CLOVER (GREEN) ","Cust_RGB_Code": "rgb(84,102,46)"},'+
 '{"Binated_Thread_Code": "B-1648","Thread_Discription": "Celery","PMS_Code": "576C","RGB_Code": "rgb(137, 155, 99)","Customer ": "landsend","Cust_Thread_Code": "1073","Cust_Thread_Discription": "CELERY ","Cust_RGB_Code": "rgb(204 ,219 ,207)"},'+
 '{"Binated_Thread_Code": "B-1649","Thread_Discription": "Granny Smith","PMS_Code": "376C","RGB_Code": "rgb(116, 150, 61)","Customer ": "landsend","Cust_Thread_Code": "1649","Cust_Thread_Discription": "GRANNY SMITH ","Cust_RGB_Code": "rgb(132,189,0)"},'+
 '{"Binated_Thread_Code": "B-1710","Thread_Discription": "Magenta","PMS_Code": "2415C","RGB_Code": "rgb(151, 49, 114)","Customer ": "landsend","Cust_Thread_Code": "1710","Cust_Thread_Discription": "DP ORCHID NEON ","Cust_RGB_Code": "rgb(150 ,48 ,113)"},'+
 '{"Binated_Thread_Code": "B-1756","Thread_Discription": "Pea Green","PMS_Code": "378C","RGB_Code": "rgb(92, 91, 47)","Customer ": "landsend","Cust_Thread_Code": "1756","Cust_Thread_Discription": "MOSS GRN NEON ","Cust_RGB_Code": "rgb(91 ,90 ,47)"},'+
 '{"Binated_Thread_Code": "B-1757","Thread_Discription": "Dark Olive","PMS_Code": "455C","RGB_Code": "rgb(99, 83, 48)","Customer ": "landsend","Cust_Thread_Code": "1757","Cust_Thread_Discription": "DARK OLIVE ","Cust_RGB_Code": "rgb(92 ,71 ,20)"},'+
 '{"Binated_Thread_Code": "B-1764","Thread_Discription": "Denim","PMS_Code": "534C","RGB_Code": "rgb(45, 73, 93)","Customer ": "landsend","Cust_Thread_Code": "1764","Cust_Thread_Discription": "DARK DENIM ","Cust_RGB_Code": "rgb(10 ,68 ,126)"},'+
 '{"Binated_Thread_Code": "B-1773","Thread_Discription": "Autumn Gold","PMS_Code": "1385C","RGB_Code": "rgb(177, 103, 49)","Customer ": "landsend","Cust_Thread_Code": "1773","Cust_Thread_Discription": "MED COPPER NEON ","Cust_RGB_Code": "rgb(176 ,102 ,50)"},'+
 '{"Binated_Thread_Code": "B-1826","Thread_Discription": "Peach Pie","PMS_Code": "1355C","RGB_Code": "rgb(254, 199, 125)","Customer ": "landsend","Cust_Thread_Code": "1826","Cust_Thread_Discription": "LT CHAMOIS NEON ","Cust_RGB_Code": "rgb(255 ,198 ,124)"},'+
 '{"Binated_Thread_Code": "B-1828","Thread_Discription": "Work Shirt","PMS_Code": "2915C","RGB_Code": "rgb(66, 140, 175)","Customer ": "landsend","Cust_Thread_Code": "1828","Cust_Thread_Discription": "OCEAN BLUE ","Cust_RGB_Code": "rgb(96 ,175 ,221)"},'+
 '{"Binated_Thread_Code": "B-1829","Thread_Discription": "Blue Bird","PMS_Code": "285C","RGB_Code": "rgb(2, 103, 162)","Customer ": "landsend","Cust_Thread_Code": "1829","Cust_Thread_Discription": "BLUE JAY NEON ","Cust_RGB_Code": "rgb(26,117,207)"},'+
 '{"Binated_Thread_Code": "B-1830","Thread_Discription": "China Blue","PMS_Code": "7453C","RGB_Code": "rgb(101, 134, 188)","Customer ": "landsend","Cust_Thread_Code": "1830","Cust_Thread_Discription": "LT BLUE NEON ","Cust_RGB_Code": "rgb(101 ,134 ,188)"},'+
 '{"Binated_Thread_Code": "B-1831","Thread_Discription": "Purple Pansy","PMS_Code": "528C","RGB_Code": "rgb(155, 100, 156)","Customer ": "landsend","Cust_Thread_Code": "1831","Cust_Thread_Discription": "LILAC NEON ","Cust_RGB_Code": "rgb(154 ,100 ,156)"},'+
 '{"Binated_Thread_Code": "B-1833","Thread_Discription": "Heliotrope","PMS_Code": "259C","RGB_Code": "rgb(120, 46, 116)","Customer ": "landsend","Cust_Thread_Code": "1833","Cust_Thread_Discription": "REGAL PURP NEON ","Cust_RGB_Code": "rgb(119 ,45 ,115)"},'+
 '{"Binated_Thread_Code": "B-1850","Thread_Discription": "Fluorescent Green","PMS_Code": "802C","RGB_Code": "rgb(105, 189, 77)","Customer ": "landsend","Cust_Thread_Code": "1850","Cust_Thread_Discription": "MINT NEON ","Cust_RGB_Code": "rgb(92 ,202 ,75)"},'+
 '{"Binated_Thread_Code": "B-1851","Thread_Discription": "Cadmium Green","PMS_Code": "3425C","RGB_Code": "rgb(0, 95, 57)","Customer ": "landsend","Cust_Thread_Code": "1851","Cust_Thread_Discription": "KELLY NEON ","Cust_RGB_Code": "rgb(0 ,94 ,56)"},'+
 '{"Binated_Thread_Code": "B-1855","Thread_Discription": "Coffee with Cream","PMS_Code": "874C","RGB_Code": "rgb(179, 147, 113)","Customer ": "landsend","Cust_Thread_Code": "1855","Cust_Thread_Discription": "DESERT SAND ","Cust_RGB_Code": "rgb(179 ,153 ,120)"},'+
 '{"Binated_Thread_Code": "B-1858","Thread_Discription": "Chestnut","PMS_Code": "168C","RGB_Code": "rgb(102, 56, 49)","Customer ": "landsend","Cust_Thread_Code": "1858","Cust_Thread_Discription": "BROWN NEON ","Cust_RGB_Code": "rgb(101 ,55 ,48)"},'+
 '{"Binated_Thread_Code": "B-1867","Thread_Discription": "Fluorescent Green","PMS_Code": 0,"RGB_Code": "rgb(226, 232, 130)","Customer ": "landsend","Cust_Thread_Code": "1867","Cust_Thread_Discription": "YELLOW NEON ","Cust_RGB_Code": "rgb(228 ,255 ,130)"},'+
 '{"Binated_Thread_Code": "B-1874","Thread_Discription": "Baby Blue","PMS_Code": "283C","RGB_Code": "rgb(144, 179, 216)","Customer ": "landsend","Cust_Thread_Code": "1874","Cust_Thread_Discription": "Baby Blue Neon","Cust_RGB_Code": "rgb(146,293,233)"},'+
 '{"Binated_Thread_Code": "B-1884","Thread_Discription": "Burly Wood","PMS_Code": "726C","RGB_Code": "rgb(198, 170, 142)","Customer ": "landsend","Cust_Thread_Code": "1884","Cust_Thread_Discription": "COTTAGE BEIGE ","Cust_RGB_Code": "rgb(197 ,169 ,141)"},'+
 '{"Binated_Thread_Code": "B-1893","Thread_Discription": "Sky Blue","PMS_Code": "637C","RGB_Code": "rgb(46, 173, 200)","Customer ": "landsend","Cust_Thread_Code": "1893","Cust_Thread_Discription": "MISTY ","Cust_RGB_Code": "rgb(46 ,173 ,201)"},'+
 '{"Binated_Thread_Code": "B-1908","Thread_Discription": "Fluorescent Pink","PMS_Code": "1787C","RGB_Code": "rgb(239, 71, 106)","Customer ": "landsend","Cust_Thread_Code": "1908","Cust_Thread_Discription": "FLOURES PINK NEON ","Cust_RGB_Code": "rgb(255 ,67 ,104)"},'+
 '{"Binated_Thread_Code": "B-1935","Thread_Discription": "Fluorescent Yellow Green","PMS_Code": 0,"RGB_Code": "rgb(227, 228, 25)","Customer ": "landsend","Cust_Thread_Code": "1935","Cust_Thread_Discription": "SUN YELLOW NEON ","Cust_RGB_Code": "rgb(232 ,255 ,0)"},'+
 '{"Binated_Thread_Code": "B-1937","Thread_Discription": "Fluorescent Orange","PMS_Code": "804C","RGB_Code": "rgb(251, 170, 25)","Customer ": "landsend","Cust_Thread_Code": "1937","Cust_Thread_Discription": "FLOURES ORANGE NEON ","Cust_RGB_Code": "rgb(255 ,171 ,0)"},'+
 '{"Binated_Thread_Code": "B-1940","Thread_Discription": "Key Lime","PMS_Code": "389C","RGB_Code": "rgb(204, 203, 76)","Customer ": "landsend","Cust_Thread_Code": "1940","Cust_Thread_Discription": "VETERAN GREEN ","Cust_RGB_Code": "rgb(201,219,3)"},'+
 '{"Binated_Thread_Code": "B-1946","Thread_Discription": "Fluorescent Orange","PMS_Code": "811C","RGB_Code": "rgb(242, 99, 34)","Customer ": "landsend","Cust_Thread_Code": "1946","Cust_Thread_Discription": "ORANGE NEON ","Cust_RGB_Code": "rgb(255 ,97 ,21)"},'+
 '{"Binated_Thread_Code": "B-1971","Thread_Discription": "Saffron","PMS_Code": "7408C","RGB_Code": "rgb(248, 179, 32)","Customer ": "landsend","Cust_Thread_Code": "1971","Cust_Thread_Discription": "BRT SUN NEON ","Cust_RGB_Code": "rgb(249 ,179 ,36)"},'+
 '{"Binated_Thread_Code": "B-1973","Thread_Discription": "Bronze","PMS_Code": "154C","RGB_Code": "rgb(148, 94, 53)","Customer ": "landsend","Cust_Thread_Code": "1973","Cust_Thread_Discription": "COPPER NEON ","Cust_RGB_Code": "rgb(147 ,93 ,52)"},'+
 '{"Binated_Thread_Code": "B-1999","Thread_Discription": "Raisin","PMS_Code": "1817C","RGB_Code": "rgb(103, 50, 50)","Customer ": "landsend","Cust_Thread_Code": "1999","Cust_Thread_Discription": "DP BURGUNDY NEON ","Cust_RGB_Code": "rgb(102 ,49 ,49)"}]}';
 
 let text2='{"data2":['+
 '{"Binated_Thread_Code": "B-1800","Thread_Discription": "Emerald Black","PMS_Code": "Process Black C","RGB_Code": "rgb(48, 49, 50)","Customer ": "Staple ","Cust_Thread_Code": "1","Cust_Thread_Discription": "BLACK","Cust_RGB_Code": "rgb(0,255,0)"},'+
 '{"Binated_Thread_Code": "B-1801","Thread_Discription": "Super White","PMS_Code": "663C","RGB_Code": "rgb(229, 231, 244)","Customer ": "Staple ","Cust_Thread_Code": "100","Cust_Thread_Discription": "WHITE","Cust_RGB_Code": "rgb(128,255,255)"},'+
 '{"Binated_Thread_Code": "B-1010","Thread_Discription": "Gray Haze","PMS_Code": "&nbsp;441C","RGB_Code": "rgb(195, 196, 191)","Customer ": "Staple ","Cust_Thread_Code": "41","Cust_Thread_Discription": "LT. ASH","Cust_RGB_Code": "rgb(220,218,217)"},'+
 '{"Binated_Thread_Code": "B-1010","Thread_Discription": "Gray Haze","PMS_Code": "&nbsp;441C","RGB_Code": "rgb(195, 196, 191)","Customer ": "Staple ","Cust_Thread_Code": "37","Cust_Thread_Discription": "PLATINUM","Cust_RGB_Code": "rgb(182,197,193)"},'+
 '{"Binated_Thread_Code": "B-1012","Thread_Discription": "Smoke","PMS_Code": "429C","RGB_Code": "rgb(163, 176, 181)","Customer ": "Staple ","Cust_Thread_Code": "27","Cust_Thread_Discription": "LT GREY","Cust_RGB_Code": "rgb(196,208,214)"},'+
 '{"Binated_Thread_Code": "B-1013","Thread_Discription": "Peach Blush","PMS_Code": "5035C ","RGB_Code": "rgb(239, 210, 203)","Customer ": "Staple ","Cust_Thread_Code": "619","Cust_Thread_Discription": "LT PINK","Cust_RGB_Code": "rgb(249,197,211)"},'+
 '{"Binated_Thread_Code": "B-1013","Thread_Discription": "Peach Blush","PMS_Code": "5035C ","RGB_Code": "rgb(239, 210, 203)","Customer ": "Staple ","Cust_Thread_Code": "624","Cust_Thread_Discription": "PINK","Cust_RGB_Code": "rgb(250,213,229)"},'+
 '{"Binated_Thread_Code": "B-1018","Thread_Discription": "Light Salmon","PMS_Code": "919C","RGB_Code": "rgb(239, 179, 168)","Customer ": "Staple ","Cust_Thread_Code": "628","Cust_Thread_Discription": "PINK PETAL","Cust_RGB_Code": "rgb(249,180,160)"},'+
 '{"Binated_Thread_Code": "B-1020","Thread_Discription": "Bright Peach","PMS_Code": "170C","RGB_Code": "rgb(245, 137, 127)","Customer ": "Staple ","Cust_Thread_Code": "626","Cust_Thread_Discription": "CORAL","Cust_RGB_Code": "rgb(245,146,149)"},'+
 '{"Binated_Thread_Code": "B-1021","Thread_Discription": "Rust","PMS_Code": "167C","RGB_Code": "rgb(188, 84, 47)","Customer ": "Staple ","Cust_Thread_Code": "627","Cust_Thread_Discription": "TERACOTA","Cust_RGB_Code": "rgb(200,91,73)"},'+
 '{"Binated_Thread_Code": "B-1021","Thread_Discription": "Rust","PMS_Code": "167C","RGB_Code": "rgb(188, 84, 47)","Customer ": "Staple ","Cust_Thread_Code": "719","Cust_Thread_Discription": "CANYON RED","Cust_RGB_Code": "rgb(194,99,50)"},'+
 '{"Binated_Thread_Code": "B-1021","Thread_Discription": "Rust","PMS_Code": "167C","RGB_Code": "rgb(188, 84, 47)","Customer ": "Staple ","Cust_Thread_Code": "720","Cust_Thread_Discription": "RUST","Cust_RGB_Code": "rgb(172,69,25)"},'+
 '{"Binated_Thread_Code": "B-1021","Thread_Discription": "Rust","PMS_Code": "167C","RGB_Code": "rgb(188, 84, 47)","Customer ": "Staple ","Cust_Thread_Code": "821","Cust_Thread_Discription": "UPS ORANGE","Cust_RGB_Code": "rgb(211,124,45)"},'+
 '{"Binated_Thread_Code": "B-1023","Thread_Discription": "Lemon","PMS_Code": "100C","RGB_Code": "rgb(244, 219, 106)","Customer ": "Staple ","Cust_Thread_Code": "750","Cust_Thread_Discription": "MAIZE","Cust_RGB_Code": "rgb(255,245,200)"},'+
 '{"Binated_Thread_Code": "B-1023","Thread_Discription": "Lemon","PMS_Code": "100C","RGB_Code": "rgb(244, 219, 106)","Customer ": "Staple ","Cust_Thread_Code": "755","Cust_Thread_Discription": "NEON YELLOW","Cust_RGB_Code": "rgb(249,243,122)"},'+
 '{"Binated_Thread_Code": "B-1025","Thread_Discription": "Military Gold","PMS_Code": "131C","RGB_Code": "rgb(204, 129, 41)","Customer ": "Staple ","Cust_Thread_Code": "780","Cust_Thread_Discription": "GOLD","Cust_RGB_Code": "rgb(253,184,39)"},'+
 '{"Binated_Thread_Code": "B-1032","Thread_Discription": "Velvet Violet","PMS_Code": "2080C","RGB_Code": "rgb(129, 109, 158)","Customer ": "Staple ","Cust_Thread_Code": "560","Cust_Thread_Discription": "VIOLET","Cust_RGB_Code": "rgb(128,119,183)"},'+
 '{"Binated_Thread_Code": "B-1032","Thread_Discription": "Velvet Violet","PMS_Code": "2080C","RGB_Code": "rgb(129, 109, 158)","Customer ": "Staple ","Cust_Thread_Code": "637","Cust_Thread_Discription": "PING LT MAGNTA","Cust_RGB_Code": "rgb(178,143,194)"},'+
 '{"Binated_Thread_Code": "B-1035","Thread_Discription": "Burgundy","PMS_Code": "505C","RGB_Code": "rgb(101, 49, 63)","Customer ": "Staple ","Cust_Thread_Code": "687","Cust_Thread_Discription": "BURGUNDY","Cust_RGB_Code": "rgb(120,0,38)"},'+
 '{"Binated_Thread_Code": "B-1035","Thread_Discription": "Burgundy","PMS_Code": "505C","RGB_Code": "rgb(101, 49, 63)","Customer ": "Staple ","Cust_Thread_Code": "700","Cust_Thread_Discription": "MAROON","Cust_RGB_Code": "rgb(102,0,46)"},'+
 '{"Binated_Thread_Code": "B-1037","Thread_Discription": "Tango","PMS_Code": "2035C","RGB_Code": "rgb(189, 34, 39)","Customer ": "Staple ","Cust_Thread_Code": "600","Cust_Thread_Discription": "RED","Cust_RGB_Code": "rgb(219,26,50)"},'+
 '{"Binated_Thread_Code": "B-1041","Thread_Discription": "Polished Pewter","PMS_Code": "431C","RGB_Code": "rgb(112, 117, 124)","Customer ": "Staple ","Cust_Thread_Code": "33","Cust_Thread_Discription": "CHARCOAL","Cust_RGB_Code": "rgb(115,123,139)"},'+
 '{"Binated_Thread_Code": "B-1042","Thread_Discription": "Lapis","PMS_Code": "8184C","RGB_Code": "rgb(33, 81, 121)","Customer ": "Staple ","Cust_Thread_Code": "486","Cust_Thread_Discription": "BLUETWRL","Cust_RGB_Code": "rgb(27,66,154)"},'+
 '{"Binated_Thread_Code": "B-1045","Thread_Discription": "Light Mint","PMS_Code": "7471C","RGB_Code": "rgb(136, 203, 190)","Customer ": "Staple ","Cust_Thread_Code": "384","Cust_Thread_Discription": "FBTEAL","Cust_RGB_Code": "rgb(109,200,183)"},'+
 '{"Binated_Thread_Code": "B-1046","Thread_Discription": "Eucalyptus","PMS_Code": "7465C","RGB_Code": "rgb(77, 172, 153)","Customer ": "Staple ","Cust_Thread_Code": "399","Cust_Thread_Discription": "PINGTEAL","Cust_RGB_Code": "rgb(52,188,154)"},'+
 '{"Binated_Thread_Code": "B-1047","Thread_Discription": "Celadon","PMS_Code": "345C","RGB_Code": "rgb(159, 190, 163)","Customer ": "Staple ","Cust_Thread_Code": "311","Cust_Thread_Discription": "KIWI","Cust_RGB_Code": "rgb(206,229,185)"},'+
 '{"Binated_Thread_Code": "B-1048","Thread_Discription": "Aloe","PMS_Code": "7490C","RGB_Code": "rgb(123, 149, 83)","Customer ": "Staple ","Cust_Thread_Code": "317","Cust_Thread_Discription": "CHANNELBIO GREEN","Cust_RGB_Code": "rgb(182,213,84)"},'+
 '{"Binated_Thread_Code": "B-1050","Thread_Discription": "Green Thumb","PMS_Code": "361C","RGB_Code": "rgb(68, 150, 69)","Customer ": "Staple ","Cust_Thread_Code": "295","Cust_Thread_Discription": "LT GREEN","Cust_RGB_Code": "rgb(67,184,89)"},'+
 '{"Binated_Thread_Code": "B-1050","Thread_Discription": "Green Thumb","PMS_Code": "361C","RGB_Code": "rgb(68, 150, 69)","Customer ": "Staple ","Cust_Thread_Code": "316","Cust_Thread_Discription": "OH GREEN","Cust_RGB_Code": "rgb(0,102,58)"},'+
 '{"Binated_Thread_Code": "B-1053","Thread_Discription": "Light Coral","PMS_Code": "488C","RGB_Code": "rgb(231, 183, 165)","Customer ": "Staple ","Cust_Thread_Code": "220","Cust_Thread_Discription": "FLESH","Cust_RGB_Code": "rgb(254,217,183)"},'+
 '{"Binated_Thread_Code": "B-1053","Thread_Discription": "Light Coral","PMS_Code": "488C","RGB_Code": "rgb(231, 183, 165)","Customer ": "Staple ","Cust_Thread_Code": "638","Cust_Thread_Discription": "LT PEACH","Cust_RGB_Code": "rgb(250,193,173)"},'+
 '{"Binated_Thread_Code": "B-1055","Thread_Discription": "Latte","PMS_Code": "155C","RGB_Code": "rgb(212, 177, 144)","Customer ": "Staple ","Cust_Thread_Code": "224","Cust_Thread_Discription": "D KHAKI","Cust_RGB_Code": "rgb(172,155,125)"},'+
 '{"Binated_Thread_Code": "B-1056","Thread_Discription": "Golden Oak","PMS_Code": "2313C","RGB_Code": "rgb(158, 106, 72)","Customer ": "Staple ","Cust_Thread_Code": "219","Cust_Thread_Discription": "DK BGE","Cust_RGB_Code": "rgb(163,135,104)"},'+
 '{"Binated_Thread_Code": "B-1058","Thread_Discription": "Sienna","PMS_Code": "175C","RGB_Code": "rgb(114, 71, 61)","Customer ": "Staple ","Cust_Thread_Code": "115","Cust_Thread_Discription": "DATEBRWN","Cust_RGB_Code": "rgb(116,85,62)"},'+
 '{"Binated_Thread_Code": "B-1060","Thread_Discription": "Pussywillow","PMS_Code": "7527C","RGB_Code": "rgb(180, 166, 152)","Customer ": "Staple ","Cust_Thread_Code": "47","Cust_Thread_Discription": "CASEGRAY","Cust_RGB_Code": "rgb(114,124,131)"},'+
 '{"Binated_Thread_Code": "B-1064","Thread_Discription": "Goldenrod","PMS_Code": "109C","RGB_Code": "rgb(255, 201, 30)","Customer ": "Staple ","Cust_Thread_Code": "760","Cust_Thread_Discription": "YELLOW","Cust_RGB_Code": "rgb(255,231,22)"},'+
 '{"Binated_Thread_Code": "B-1066","Thread_Discription": "Cornmeal","PMS_Code": "7401C","RGB_Code": "rgb(245, 214, 161)","Customer ": "Staple ","Cust_Thread_Code": "118","Cust_Thread_Discription": "TOBACCO","Cust_RGB_Code": "rgb(206,186,125)"},'+
 '{"Binated_Thread_Code": "B-1069","Thread_Discription": "Sunshine Yellow","PMS_Code": "123C","RGB_Code": "rgb(251, 177, 24)","Customer ": "Staple ","Cust_Thread_Code": "87","Cust_Thread_Discription": "OFF WHITE","Cust_RGB_Code": "rgb(255,244,213)"},'+
 '{"Binated_Thread_Code": "B-1070","Thread_Discription": "Tawny Tan","PMS_Code": "141C","RGB_Code": "rgb(210, 170, 114)","Customer ": "Staple ","Cust_Thread_Code": "815","Cust_Thread_Discription": "VEGASGLD","Cust_RGB_Code": "rgb(239,205,137)"},'+
 '{"Binated_Thread_Code": "B-1070","Thread_Discription": "Tawny Tan","PMS_Code": "141C","RGB_Code": "rgb(210, 170, 114)","Customer ": "Staple ","Cust_Thread_Code": "250","Cust_Thread_Discription": "KHAKI","Cust_RGB_Code": "rgb(237,210,154)"},'+
 '{"Binated_Thread_Code": "B-1071","Thread_Discription": "Baby’s Breath","PMS_Code": "9285C","RGB_Code": "rgb(233, 228, 219)","Customer ": "Staple ","Cust_Thread_Code": "890","Cust_Thread_Discription": "NATURAL","Cust_RGB_Code": "rgb(237,237,221)"},'+
 '{"Binated_Thread_Code": "B-1076","Thread_Discription": "True Blue","PMS_Code": "2728C","RGB_Code": "rgb(0, 88, 151)","Customer ": "Staple ","Cust_Thread_Code": "473","Cust_Thread_Discription": "FRNCHBLU","Cust_RGB_Code": "rgb(13,92,171)"},'+
 '{"Binated_Thread_Code": "B-1078","Thread_Discription": "Pumpkin","PMS_Code": "Orange 021 C","RGB_Code": "rgb(235, 86, 40)","Customer ": "Staple ","Cust_Thread_Code": "840","Cust_Thread_Discription": "LT ORANGE","Cust_RGB_Code": "rgb(242,101,34)"},'+
 '{"Binated_Thread_Code": "B-1079","Thread_Discription": "Celtic Green","PMS_Code": "347C","RGB_Code": "rgb(0, 136, 80)","Customer ": "Staple ","Cust_Thread_Code": "300","Cust_Thread_Discription": "KELLY","Cust_RGB_Code": "rgb(0,147,96)"},'+
 '{"Binated_Thread_Code": "B-1084","Thread_Discription": "Sandy Shores","PMS_Code": "9182C","RGB_Code": "rgb(210, 185, 157)","Customer ": "Staple ","Cust_Thread_Code": "230","Cust_Thread_Discription": "DK FLESH","Cust_RGB_Code": "rgb(252,216,167)"},'+
 '{"Binated_Thread_Code": "B-1087","Thread_Discription": "Silver Birch","PMS_Code": "2330C","RGB_Code": "rgb(189, 188, 184)","Customer ": "Staple ","Cust_Thread_Code": "221","Cust_Thread_Discription": "TAN","Cust_RGB_Code": "rgb(202,199,179)"},'+
 '{"Binated_Thread_Code": "B-1092","Thread_Discription": "Summer Sky","PMS_Code": "550C","RGB_Code": "rgb(148, 194, 208)","Customer ": "Staple ","Cust_Thread_Code": "420","Cust_Thread_Discription": "LT BLUE","Cust_RGB_Code": "rgb(127,187,221)"},'+
 '{"Binated_Thread_Code": "B-1092","Thread_Discription": "Summer Sky","PMS_Code": "550C","RGB_Code": "rgb(148, 194, 208)","Customer ": "Staple ","Cust_Thread_Code": "415","Cust_Thread_Discription": "SKY BLUE","Cust_RGB_Code": "rgb(170,208,238)"},'+
 '{"Binated_Thread_Code": "B-1093","Thread_Discription": "Azure Sea","PMS_Code": "305C","RGB_Code": "rgb(36, 187, 201)","Customer ": "Staple ","Cust_Thread_Code": "422","Cust_Thread_Discription": "PWDRBLUE","Cust_RGB_Code": "rgb(172,220,246)"},'+
 '{"Binated_Thread_Code": "B-1094","Thread_Discription": "Caribbean Blue","PMS_Code": "306C","RGB_Code": "rgb(9, 178, 200)","Customer ": "Staple ","Cust_Thread_Code": "412","Cust_Thread_Discription": "UPS BLUE","Cust_RGB_Code": "rgb(69,195,211)"},'+
 '{"Binated_Thread_Code": "B-1095","Thread_Discription": "Larimar","PMS_Code": "638C","RGB_Code": "rgb(0, 169, 194)","Customer ": "Staple ","Cust_Thread_Code": "439","Cust_Thread_Discription": "TOOBLUE","Cust_RGB_Code": "rgb(14,149,212)"},'+
 '{"Binated_Thread_Code": "B-1095","Thread_Discription": "Larimar","PMS_Code": "638C","RGB_Code": "rgb(0, 169, 194)","Customer ": "Staple ","Cust_Thread_Code": "435","Cust_Thread_Discription": "NEONBLUE","Cust_RGB_Code": "rgb(66,198,243)"},'+
 '{"Binated_Thread_Code": "B-1096","Thread_Discription": "Cobalt","PMS_Code": "7461C","RGB_Code": "rgb(11, 126, 155)","Customer ": "Staple ","Cust_Thread_Code": "440","Cust_Thread_Discription": "HOUSTON BLU","Cust_RGB_Code": "rgb(24,132,198)"},'+
 '{"Binated_Thread_Code": "B-1103","Thread_Discription": "Hunter Green","PMS_Code": "3435C","RGB_Code": "rgb(53, 78, 60)","Customer ": "Staple ","Cust_Thread_Code": "355","Cust_Thread_Discription": "EVER GREEN","Cust_RGB_Code": "rgb(34,80,60)"},'+
 '{"Binated_Thread_Code": "B-1105","Thread_Discription": "Weeping Willow","PMS_Code": "452C","RGB_Code": "rgb(170, 162, 125)","Customer ": "Staple ","Cust_Thread_Code": "119","Cust_Thread_Discription": "DOESKIN","Cust_RGB_Code": "rgb(149,135,108)"},'+
 '{"Binated_Thread_Code": "B-1109","Thread_Discription": "Pink Rose","PMS_Code": "212C","RGB_Code": "rgb(208, 79, 137)","Customer ": "Staple ","Cust_Thread_Code": "613","Cust_Thread_Discription": "RASPBRY","Cust_RGB_Code": "rgb(228,80,157)"},'+
 '{"Binated_Thread_Code": "B-1112","Thread_Discription": "Majestic Purple","PMS_Code": "2090C","RGB_Code": "rgb(84, 72, 129)","Customer ": "Staple ","Cust_Thread_Code": "580","Cust_Thread_Discription": "PURPLE","Cust_RGB_Code": "rgb(73,47,145)"},'+
 '{"Binated_Thread_Code": "B-1112","Thread_Discription": "Majestic Purple","PMS_Code": "2090C","RGB_Code": "rgb(84, 72, 129)","Customer ": "Staple ","Cust_Thread_Code": "591","Cust_Thread_Discription": "DK PLUM","Cust_RGB_Code": "rgb(48,14,95)"},'+
 '{"Binated_Thread_Code": "B-1116","Thread_Discription": "Cotton Candy","PMS_Code": "189C","RGB_Code": "rgb(234, 173, 191)","Customer ": "Staple ","Cust_Thread_Code": "617","Cust_Thread_Discription": "CORAL RED","Cust_RGB_Code": "rgb(248,180,197)"},'+
 '{"Binated_Thread_Code": "B-1117","Thread_Discription": "Flamingo Pink","PMS_Code": "205C","RGB_Code": "rgb(214, 97, 142)","Customer ": "Staple ","Cust_Thread_Code": "615","Cust_Thread_Discription": "NEONPINK","Cust_RGB_Code": "rgb(240,90,125)"},'+
 '{"Binated_Thread_Code": "B-1118","Thread_Discription": "Overcast Gray","PMS_Code": "429C","RGB_Code": "rgb(137, 145, 146)","Customer ": "Staple ","Cust_Thread_Code": "20","Cust_Thread_Discription": "GRAY","Cust_RGB_Code": "rgb(255,128,192)"},'+
 '{"Binated_Thread_Code": "B-1118","Thread_Discription": "Overcast Gray","PMS_Code": "429C","RGB_Code": "rgb(137, 145, 146)","Customer ": "Staple ","Cust_Thread_Code": "22","Cust_Thread_Discription": "PEWTER","Cust_RGB_Code": "rgb(182,183,186)"},'+
 '{"Binated_Thread_Code": "B-1122","Thread_Discription": "Deep Lilac","PMS_Code": "7664C","RGB_Code": "rgb(79, 54, 105)","Customer ": "Staple ","Cust_Thread_Code": "573","Cust_Thread_Discription": "IRIS","Cust_RGB_Code": "rgb(101,45,138)"},'+
 '{"Binated_Thread_Code": "B-1125","Thread_Discription": "Saffron","PMS_Code": "1225C","RGB_Code": "rgb(241, 177, 61)","Customer ": "Staple ","Cust_Thread_Code": "770","Cust_Thread_Discription": "NFL YELL","Cust_RGB_Code": "rgb(255,213,63)"},'+
 '{"Binated_Thread_Code": "B-1137","Thread_Discription": "Citrus Burst","PMS_Code": "137C","RGB_Code": "rgb(243, 141, 33)","Customer ": "Staple ","Cust_Thread_Code": "830","Cust_Thread_Discription": "TENNORG","Cust_RGB_Code": "rgb(250,166,33)"},'+
 '{"Binated_Thread_Code": "B-1138","Thread_Discription": "Doe Skin","PMS_Code": "9183C","RGB_Code": "rgb(205, 186, 165)","Customer ": "Staple ","Cust_Thread_Code": "201","Cust_Thread_Discription": "PUTTY","Cust_RGB_Code": "rgb(231,231,213)"},'+
 '{"Binated_Thread_Code": "B-1151","Thread_Discription": "Silver Moon","PMS_Code": "9381C","RGB_Code": "rgb(187, 197, 206)","Customer ": "Staple ","Cust_Thread_Code": "75","Cust_Thread_Discription": "METALIC SILVER","Cust_RGB_Code": "rgb(214,211,206)"},'+
 '{"Binated_Thread_Code": "B-1155","Thread_Discription": "Marmalade","PMS_Code": "714C","RGB_Code": "rgb(245, 159, 103)","Customer ": "Staple ","Cust_Thread_Code": "860","Cust_Thread_Discription": "BURNT ORANGE","Cust_RGB_Code": "rgb(247,146,61)"},'+
 '{"Binated_Thread_Code": "B-1157","Thread_Discription": "Marsh","PMS_Code": "7757C","RGB_Code": "rgb(120, 108, 77)","Customer ": "Staple ","Cust_Thread_Code": "361","Cust_Thread_Discription": "FATIGUE","Cust_RGB_Code": "rgb(81,76,35)"},'+
 '{"Binated_Thread_Code": "B-1157","Thread_Discription": "Marsh","PMS_Code": "7757C","RGB_Code": "rgb(120, 108, 77)","Customer ": "Staple ","Cust_Thread_Code": "217","Cust_Thread_Discription": "EARTH","Cust_RGB_Code": "rgb(96,80,50)"},'+
 '{"Binated_Thread_Code": "B-1158","Thread_Discription": "Chestnut","PMS_Code": "7594C","RGB_Code": "rgb(123, 69, 57)","Customer ": "Staple ","Cust_Thread_Code": "139","Cust_Thread_Discription": "CBS BROWN","Cust_RGB_Code": "rgb(131,64,14)"},'+
 '{"Binated_Thread_Code": "B-1167","Thread_Discription": "Blue Ink","PMS_Code": "7687C","RGB_Code": "rgb(35, 74, 121)","Customer ": "Staple ","Cust_Thread_Code": "458","Cust_Thread_Discription": "CHOWBLUE","Cust_RGB_Code": "rgb(39,69,146)"},'+
 '{"Binated_Thread_Code": "B-1167","Thread_Discription": "Blue Ink","PMS_Code": "7687C","RGB_Code": "rgb(35, 74, 121)","Customer ": "Staple ","Cust_Thread_Code": "477","Cust_Thread_Discription": "PACBLUE","Cust_RGB_Code": "rgb(9,52,122)"},'+
 '{"Binated_Thread_Code": "B-1172","Thread_Discription": "Egg Yolk","PMS_Code": "130C","RGB_Code": "rgb(233, 154, 40)","Customer ": "Staple ","Cust_Thread_Code": "255","Cust_Thread_Discription": "WHEAT","Cust_RGB_Code": "rgb(230,194,116)"},'+
 '{"Binated_Thread_Code": "B-1172","Thread_Discription": "Egg Yolk","PMS_Code": "130C","RGB_Code": "rgb(233, 154, 40)","Customer ": "Staple ","Cust_Thread_Code": "775","Cust_Thread_Discription": "GLDNROD","Cust_RGB_Code": "rgb(255,201,34)"},'+
 '{"Binated_Thread_Code": "B-1172","Thread_Discription": "Egg Yolk","PMS_Code": "130C","RGB_Code": "rgb(233, 154, 40)","Customer ": "Staple ","Cust_Thread_Code": "191","Cust_Thread_Discription": "GOLDEN BROWN","Cust_RGB_Code": "rgb(202,140,18)"},'+
 '{"Binated_Thread_Code": "B-1174","Thread_Discription": "Cinnamon Stick","PMS_Code": "1807C","RGB_Code": "rgb(133, 59, 57)","Customer ": "Staple ","Cust_Thread_Code": "120","Cust_Thread_Discription": "BROWN","Cust_RGB_Code": "rgb(87,38,0)"},'+
 '{"Binated_Thread_Code": "B-1177","Thread_Discription": "Blue Bird","PMS_Code": "2935C","RGB_Code": "rgb(0, 110, 169)","Customer ": "Staple ","Cust_Thread_Code": "398","Cust_Thread_Discription": "SHEVRON BLUE","Cust_RGB_Code": "rgb(0,130,200)"},'+
 '{"Binated_Thread_Code": "B-1177","Thread_Discription": "Blue Bird","PMS_Code": "2935C","RGB_Code": "rgb(0, 110, 169)","Customer ": "Staple ","Cust_Thread_Code": "438","Cust_Thread_Discription": "EMPBLUE","Cust_RGB_Code": "rgb(0,128,197)"},'+
 '{"Binated_Thread_Code": "B-1177","Thread_Discription": "Blue Bird","PMS_Code": "2935C","RGB_Code": "rgb(0, 110, 169)","Customer ": "Staple ","Cust_Thread_Code": "480","Cust_Thread_Discription": "DK ROYAL","Cust_RGB_Code": "rgb(13,92,171)"},'+
 '{"Binated_Thread_Code": "B-1178","Thread_Discription": "Carrot","PMS_Code": "1645C","RGB_Code": "rgb(241, 106, 70)","Customer ": "Staple ","Cust_Thread_Code": "870","Cust_Thread_Discription": "TEX ORANGE","Cust_RGB_Code": "rgb(227,120,35)"},'+
 '{"Binated_Thread_Code": "B-1191","Thread_Discription": "Gold Coin","PMS_Code": "7557C","RGB_Code": "rgb(147, 113, 55)","Customer ": "Staple ","Cust_Thread_Code": "260","Cust_Thread_Discription": "NUTMEG","Cust_RGB_Code": "rgb(162,132,89)"},'+
 '{"Binated_Thread_Code": "B-1195","Thread_Discription": "Menthol","PMS_Code": "566C","RGB_Code": "rgb(145, 196, 181)","Customer ": "Staple ","Cust_Thread_Code": "363","Cust_Thread_Discription": "BOTTLE GREEN","Cust_RGB_Code": "rgb(131,170,155)"},'+
 '{"Binated_Thread_Code": "B-1199","Thread_Discription": "Onyx","PMS_Code": "8604C","RGB_Code": "rgb(43, 48, 55)","Customer ": "Staple ","Cust_Thread_Code": "55","Cust_Thread_Discription": "DKCHAR","Cust_RGB_Code": "rgb(33,52,63)"},'+
 '{"Binated_Thread_Code": "B-1219","Thread_Discription": "Hint of Mint","PMS_Code": "621C","RGB_Code": "rgb(163, 188, 184)","Customer ": "Staple ","Cust_Thread_Code": "413","Cust_Thread_Discription": "UPS LT BLUE","Cust_RGB_Code": "rgb(166,220,222)"},'+
 '{"Binated_Thread_Code": "B-1225","Thread_Discription": "Liquid Gold","PMS_Code": "7563C","RGB_Code": "rgb(200, 141, 70)","Customer ": "Staple ","Cust_Thread_Code": "759","Cust_Thread_Discription": "TMC GOLD","Cust_RGB_Code": "rgb(191,139,48)"},'+
 '{"Binated_Thread_Code": "B-1226","Thread_Discription": "Amber","PMS_Code": "714C","RGB_Code": "rgb(211, 140, 99)","Customer ": "Staple ","Cust_Thread_Code": "810","Cust_Thread_Discription": "GOLD METALIC","Cust_RGB_Code": "rgb(217,180,102)"},'+
 '{"Binated_Thread_Code": "B-1228","Thread_Discription": "Mink","PMS_Code": "warmgrey 11C","RGB_Code": "rgb(110, 99, 89)","Customer ": "Staple ","Cust_Thread_Code": "209","Cust_Thread_Discription": "MUSHROOM","Cust_RGB_Code": "rgb(137,136,117)"},'+
 '{"Binated_Thread_Code": "B-1230","Thread_Discription": "Root Beer","PMS_Code": "8621C","RGB_Code": "rgb(99, 79, 64)","Customer ": "Staple ","Cust_Thread_Code": "121","Cust_Thread_Discription": "DKBROWN","Cust_RGB_Code": "rgb(84,64,52)"},'+
 '{"Binated_Thread_Code": "B-1232","Thread_Discription": "Lavender","PMS_Code": "Violet 0631C","RGB_Code": "rgb(166, 153, 186)","Customer ": "Staple ","Cust_Thread_Code": "574","Cust_Thread_Discription": "PING LT PURPLE","Cust_RGB_Code": "rgb(186,171,211)"},'+
 '{"Binated_Thread_Code": "B-1236","Thread_Discription": "Plum Brandy","PMS_Code": "505C","RGB_Code": "rgb(78, 43, 54)","Customer ": "Staple ","Cust_Thread_Code": "703","Cust_Thread_Discription": "BORDEAUX","Cust_RGB_Code": "rgb(72,24,44)"},'+
 '{"Binated_Thread_Code": "B-1241","Thread_Discription": "Obsidian","PMS_Code": "432C","RGB_Code": "rgb(60, 64, 70)","Customer ": "Staple ","Cust_Thread_Code": "378","Cust_Thread_Discription": "JADE","Cust_RGB_Code": "rgb(0,185,185)"},'+
 '{"Binated_Thread_Code": "B-1242","Thread_Discription": "Dark Denim","PMS_Code": "654C","RGB_Code": "rgb(35, 62, 92)","Customer ": "Staple ","Cust_Thread_Code": "411","Cust_Thread_Discription": "LIBERTY MUT.BLUE","Cust_RGB_Code": "rgb(9,55,108)"},'+
 '{"Binated_Thread_Code": "B-1242","Thread_Discription": "Dark Denim","PMS_Code": "654C","RGB_Code": "rgb(35, 62, 92)","Customer ": "Staple ","Cust_Thread_Code": "50","Cust_Thread_Discription": "CHARCOAL","Cust_RGB_Code": "rgb(46,61,76)"},'+
 '{"Binated_Thread_Code": "B-1242","Thread_Discription": "Dark Denim","PMS_Code": "654C","RGB_Code": "rgb(35, 62, 92)","Customer ": "Staple ","Cust_Thread_Code": "478","Cust_Thread_Discription": "DK BLUE","Cust_RGB_Code": "rgb(0,62,126)"},'+
 '{"Binated_Thread_Code": "B-1243","Thread_Discription": "Star-kissed Night","PMS_Code": "2768C","RGB_Code": "rgb(52, 61, 83)","Customer ": "Staple ","Cust_Thread_Code": "500","Cust_Thread_Discription": "NAVY","Cust_RGB_Code": "rgb(4,44,95)"},'+
 '{"Binated_Thread_Code": "B-1243","Thread_Discription": "Star-kissed Night","PMS_Code": "2768C","RGB_Code": "rgb(52, 61, 83)","Customer ": "Staple ","Cust_Thread_Code": "507","Cust_Thread_Discription": "NAVY","Cust_RGB_Code": "rgb(4,51,104)"},'+
 '{"Binated_Thread_Code": "B-1243","Thread_Discription": "Star-kissed Night","PMS_Code": "2768C","RGB_Code": "rgb(52, 61, 83)","Customer ": "Staple ","Cust_Thread_Code": "525","Cust_Thread_Discription": "FRECH NAVY","Cust_RGB_Code": "rgb(0,45,98)"},'+
 '{"Binated_Thread_Code": "B-1243","Thread_Discription": "Star-kissed Night","PMS_Code": "2768C","RGB_Code": "rgb(52, 61, 83)","Customer ": "Staple ","Cust_Thread_Code": "555","Cust_Thread_Discription": "DK NAVY","Cust_RGB_Code": "rgb(0,42,92)"},'+
 '{"Binated_Thread_Code": "B-1243","Thread_Discription": "Star-kissed Night","PMS_Code": "2768C","RGB_Code": "rgb(52, 61, 83)","Customer ": "Staple ","Cust_Thread_Code": "556","Cust_Thread_Discription": "MIDNIGHT","Cust_RGB_Code": "rgb(0,36,74)"},'+
 '{"Binated_Thread_Code": "B-1249","Thread_Discription": "Shamrock","PMS_Code": "802C ","RGB_Code": "rgb(18, 162, 74)","Customer ": "Staple ","Cust_Thread_Code": "314","Cust_Thread_Discription": "JD GREEN","Cust_RGB_Code": "rgb(65,150,57)"},'+
 '{"Binated_Thread_Code": "B-1251","Thread_Discription": "Kelly Green","PMS_Code": "7481C","RGB_Code": "rgb(5, 146, 75)","Customer ": "Staple ","Cust_Thread_Code": "299","Cust_Thread_Discription": "GATOR GREEN","Cust_RGB_Code": "rgb(0,172,81)"},'+
 '{"Binated_Thread_Code": "B-1251","Thread_Discription": "Kelly Green","PMS_Code": "7481C","RGB_Code": "rgb(5, 146, 75)","Customer ": "Staple ","Cust_Thread_Code": "284","Cust_Thread_Discription": "OPTUM GREEN","Cust_RGB_Code": "rgb(105,167,56)"},'+
 '{"Binated_Thread_Code": "B-1255","Thread_Discription": "Khaki","PMS_Code": "7407C","RGB_Code": "rgb(192, 148, 107)","Customer ": "Staple ","Cust_Thread_Code": "218","Cust_Thread_Discription": "SAND","Cust_RGB_Code": "rgb(212,173,145)"},'+
 '{"Binated_Thread_Code": "B-1257","Thread_Discription": "Bronze","PMS_Code": "7566C","RGB_Code": "rgb(157, 87, 46)","Customer ": "Staple ","Cust_Thread_Code": "110","Cust_Thread_Discription": "CHOCOBRN","Cust_RGB_Code": "rgb(171,102,13)"},'+
 '{"Binated_Thread_Code": "B-1257","Thread_Discription": "Bronze","PMS_Code": "7566C","RGB_Code": "rgb(157, 87, 46)","Customer ": "Staple ","Cust_Thread_Code": "140","Cust_Thread_Discription": "LUGGAGE","Cust_RGB_Code": "rgb(141,76,29)"},'+
 '{"Binated_Thread_Code": "B-1270","Thread_Discription": "Sawdust","PMS_Code": "7401C","RGB_Code": "rgb(228, 185, 131)","Customer ": "Staple ","Cust_Thread_Code": "200","Cust_Thread_Discription": "BEIGE","Cust_RGB_Code": "rgb(212,201,176)"},'+
 '{"Binated_Thread_Code": "B-1270","Thread_Discription": "Sawdust","PMS_Code": "7401C","RGB_Code": "rgb(228, 185, 131)","Customer ": "Staple ","Cust_Thread_Code": "788","Cust_Thread_Discription": "ATH VEGAS GOLD","Cust_RGB_Code": "rgb(211,199,161)"},'+
 '{"Binated_Thread_Code": "B-1272","Thread_Discription": "Golden Retriever","PMS_Code": "149C","RGB_Code": "rgb(220, 163, 115)","Customer ": "Staple ","Cust_Thread_Code": "240","Cust_Thread_Discription": "TOAST","Cust_RGB_Code": "rgb(226,187,132)"},'+
 '{"Binated_Thread_Code": "B-1274","Thread_Discription": "Porcelain Blue","PMS_Code": "292C","RGB_Code": "rgb(112, 168, 198)","Customer ": "Staple ","Cust_Thread_Code": "436","Cust_Thread_Discription": "DALEBLUE","Cust_RGB_Code": "rgb(114,173,211)"},'+
 '{"Binated_Thread_Code": "B-1275","Thread_Discription": "Porcelain Blue","PMS_Code": "292C","RGB_Code": "rgb(112, 168, 198)","Customer ": "Staple ","Cust_Thread_Code": "459","Cust_Thread_Discription": "SLATEGRY","Cust_RGB_Code": "rgb(107,168,195)"},'+
 '{"Binated_Thread_Code": "B-1278","Thread_Discription": "Orange Icing","PMS_Code": "1505C","RGB_Code": "rgb(241, 104, 36)","Customer ": "Staple ","Cust_Thread_Code": "823","Cust_Thread_Discription": "PING Mango","Cust_RGB_Code": "rgb(245,134,60)"},'+
 '{"Binated_Thread_Code": "B-1280","Thread_Discription": "Oregon Green","PMS_Code": "3288C","RGB_Code": "rgb(2, 120, 100)","Customer ": "Staple ","Cust_Thread_Code": "386","Cust_Thread_Discription": "GOLFGRN","Cust_RGB_Code": "rgb(0,113,102)"},'+
 '{"Binated_Thread_Code": "B-1281","Thread_Discription": "Radish","PMS_Code": "193C","RGB_Code": "rgb(161, 35, 65)","Customer ": "Staple ","Cust_Thread_Code": "607","Cust_Thread_Discription": "RED PEPPER","Cust_RGB_Code": "rgb(171,5,52)"},'+
 '{"Binated_Thread_Code": "B-1282","Thread_Discription": "Radish","PMS_Code": "193C","RGB_Code": "rgb(161, 35, 65)","Customer ": "Staple ","Cust_Thread_Code": "680","Cust_Thread_Discription": "CARDINAL","Cust_RGB_Code": "rgb(147,0,51)"},'+
 '{"Binated_Thread_Code": "B-1284","Thread_Discription": "Emerald Sea","PMS_Code": "3288C","RGB_Code": "rgb(4, 99, 84)","Customer ": "Staple ","Cust_Thread_Code": "334","Cust_Thread_Discription": "LT SPRUCE","Cust_RGB_Code": "rgb(61,117,96)"},'+
 '{"Binated_Thread_Code": "B-1287","Thread_Discription": "Gun Metal","PMS_Code": "10190C","RGB_Code": "rgb(107, 106, 106)","Customer ": "Staple ","Cust_Thread_Code": "16","Cust_Thread_Discription": "PING ASH","Cust_RGB_Code": "rgb(203,200,196)"},'+
 '{"Binated_Thread_Code": "B-1289","Thread_Discription": "Silver Mound","PMS_Code": "631C","RGB_Code": "rgb(73, 152, 164)","Customer ": "Staple ","Cust_Thread_Code": "400","Cust_Thread_Discription": "AQUA","Cust_RGB_Code": "rgb(1,168,177)"},'+
 '{"Binated_Thread_Code": "B-1290","Thread_Discription": "Mallard Teal","PMS_Code": "3165C","RGB_Code": "rgb(23, 75, 76)","Customer ": "Staple ","Cust_Thread_Code": "372","Cust_Thread_Discription": "STEEL GREEN","Cust_RGB_Code": "rgb(31,64,70)"},'+
 '{"Binated_Thread_Code": "B-1291","Thread_Discription": "Mallard Teal","PMS_Code": "3165C","RGB_Code": "rgb(23, 75, 76)","Customer ": "Staple ","Cust_Thread_Code": "388","Cust_Thread_Discription": "TEALHAZE","Cust_RGB_Code": "rgb(0,93,121)"},'+
 '{"Binated_Thread_Code": "B-1292","Thread_Discription": "Mallard Teal","PMS_Code": "3165C","RGB_Code": "rgb(23, 75, 76)","Customer ": "Staple ","Cust_Thread_Code": "451","Cust_Thread_Discription": "MARINE BLUE","Cust_RGB_Code": "rgb(0,90,106)"},'+
 '{"Binated_Thread_Code": "B-1291","Thread_Discription": "Marlin","PMS_Code": "315C","RGB_Code": "rgb(9, 102, 116)","Customer ": "Staple ","Cust_Thread_Code": "462","Cust_Thread_Discription": "COBALT","Cust_RGB_Code": "rgb(0,97,143)"},'+
 '{"Binated_Thread_Code": "B-1293","Thread_Discription": "Malachite","PMS_Code": "322C","RGB_Code": "rgb(2, 110, 113)","Customer ": "Staple ","Cust_Thread_Code": "370","Cust_Thread_Discription": "MALLARD","Cust_RGB_Code": "rgb(0,128,133)"},'+
 '{"Binated_Thread_Code": "B-1294","Thread_Discription": "Liberty","PMS_Code": "&nbsp;633C","RGB_Code": "rgb(7, 130, 155)","Customer ": "Staple ","Cust_Thread_Code": "431","Cust_Thread_Discription": "PRTYBLUE","Cust_RGB_Code": "rgb(0,158,212)"},'+
 '{"Binated_Thread_Code": "B-1295","Thread_Discription": "Cyan","PMS_Code": "7460C","RGB_Code": "rgb(5, 141, 173)","Customer ": "Staple ","Cust_Thread_Code": "437","Cust_Thread_Discription": "MRNGLORY","Cust_RGB_Code": "rgb(0,125,195)"},'+
 '{"Binated_Thread_Code": "B-1296","Thread_Discription": "Cyan","PMS_Code": "7460C","RGB_Code": "rgb(5, 141, 173)","Customer ": "Staple ","Cust_Thread_Code": "441","Cust_Thread_Discription": "FARM BLU","Cust_RGB_Code": "rgb(35,162,219)"},'+
 '{"Binated_Thread_Code": "B-1297","Thread_Discription": "Cyan","PMS_Code": "7460C","RGB_Code": "rgb(5, 141, 173)","Customer ": "Staple ","Cust_Thread_Code": "443","Cust_Thread_Discription": "LIONBLUE","Cust_RGB_Code": "rgb(0,155,205)"},'+
 '{"Binated_Thread_Code": "B-1298","Thread_Discription": "Cyan","PMS_Code": "7460C","RGB_Code": "rgb(5, 141, 173)","Customer ": "Staple ","Cust_Thread_Code": "448","Cust_Thread_Discription": "BLUE JAY","Cust_RGB_Code": "rgb(0,147,208)"},'+
 '{"Binated_Thread_Code": "B-1297","Thread_Discription": "Calypso Blue","PMS_Code": "2193C","RGB_Code": "rgb(7, 114, 163)","Customer ": "Staple ","Cust_Thread_Code": "450","Cust_Thread_Discription": "MED BLUE","Cust_RGB_Code": "rgb(0,109,173)"},'+
 '{"Binated_Thread_Code": "B-1298","Thread_Discription": "Tree Frog","PMS_Code": "3272C","RGB_Code": "rgb(5, 135, 123)","Customer ": "Staple ","Cust_Thread_Code": "433","Cust_Thread_Discription": "DKTEAL","Cust_RGB_Code": "rgb(0,157,174)"},'+
 '{"Binated_Thread_Code": "B-1299","Thread_Discription": "Green Turquoise","PMS_Code": "326C","RGB_Code": "rgb(0, 185, 172)","Customer ": "Staple ","Cust_Thread_Code": "383","Cust_Thread_Discription": "FARM GRN","Cust_RGB_Code": "rgb(72,191,162)"},'+
 '{"Binated_Thread_Code": "B-1300","Thread_Discription": "Green Turquoise","PMS_Code": "326C","RGB_Code": "rgb(0, 185, 172)","Customer ": "Staple ","Cust_Thread_Code": "335","Cust_Thread_Discription": "OH GREEN (CACTUS)","Cust_RGB_Code": "rgb(13,117,124)"},'+
 '{"Binated_Thread_Code": "B-1302","Thread_Discription": "Spearmint","PMS_Code": "353C","RGB_Code": "rgb(126, 200, 149)","Customer ": "Staple ","Cust_Thread_Code": "305","Cust_Thread_Discription": "LIME GREEN","Cust_RGB_Code": "rgb(125,197,106)"},'+
 '{"Binated_Thread_Code": "B-1303","Thread_Discription": "Spearmint","PMS_Code": "353C","RGB_Code": "rgb(126, 200, 149)","Customer ": "Staple ","Cust_Thread_Code": "320","Cust_Thread_Discription": "MINT GRN","Cust_RGB_Code": "rgb(168,215,178)"},'+
 '{"Binated_Thread_Code": "B-1304","Thread_Discription": "Ivy","PMS_Code": "7729C","RGB_Code": "rgb(18, 80, 65)","Customer ": "Staple ","Cust_Thread_Code": "348","Cust_Thread_Discription": "DKOLIVE","Cust_RGB_Code": "rgb(0,84,28)"},'+
 '{"Binated_Thread_Code": "B-1306","Thread_Discription": "Army Green","PMS_Code": "2327C ","RGB_Code": "rgb(125, 122, 103)","Customer ": "Staple ","Cust_Thread_Code": "227","Cust_Thread_Discription": "TAUPE","Cust_RGB_Code": "rgb(119,115,98)"},'+
 '{"Binated_Thread_Code": "B-1308","Thread_Discription": "Army Fatigues","PMS_Code": "5753C","RGB_Code": "rgb(108, 110, 91)","Customer ": "Staple ","Cust_Thread_Code": "114","Cust_Thread_Discription": "HAZELNUT","Cust_RGB_Code": "rgb(96,77,34)"},'+
 '{"Binated_Thread_Code": "B-1309","Thread_Discription": "Army Fatigues","PMS_Code": "5753C","RGB_Code": "rgb(108, 110, 91)","Customer ": "Staple ","Cust_Thread_Code": "330","Cust_Thread_Discription": "PEBBLE","Cust_RGB_Code": "rgb(114,122,88)"},'+
 '{"Binated_Thread_Code": "B-1310","Thread_Discription": "Magenta","PMS_Code": "2062C","RGB_Code": "rgb(151, 61, 116)","Customer ": "Staple ","Cust_Thread_Code": "592","Cust_Thread_Discription": "MAGENTA","Cust_RGB_Code": "rgb(182,62,151)"},'+
 '{"Binated_Thread_Code": "B-1311","Thread_Discription": "Mystic Lavender","PMS_Code": "2073C","RGB_Code": "rgb(142, 140, 184)","Customer ": "Staple ","Cust_Thread_Code": "564","Cust_Thread_Discription": "JAZZ PURPLE","Cust_RGB_Code": "rgb(117,107,163)"},'+
 '{"Binated_Thread_Code": "B-1315","Thread_Discription": "Pink Grapefruit","PMS_Code": "1765C","RGB_Code": "rgb(229, 157, 167)","Customer ": "Staple ","Cust_Thread_Code": "589","Cust_Thread_Discription": "BLKBERRY","Cust_RGB_Code": "rgb(83,37,92)"},'+
 '{"Binated_Thread_Code": "B-1316","Thread_Discription": "Pink Grapefruit","PMS_Code": "1765C ","RGB_Code": "rgb(229, 157, 167)","Customer ": "Staple ","Cust_Thread_Code": "617","Cust_Thread_Discription": "CORAL RED","Cust_RGB_Code": "rgb(248,180,197)"},'+
 '{"Binated_Thread_Code": "B-1321","Thread_Discription": "Bubble Gum Pink","PMS_Code": "2037C","RGB_Code": "rgb(225, 147, 184)","Customer ": "Staple ","Cust_Thread_Code": "618","Cust_Thread_Discription": "DK PINK","Cust_RGB_Code": "rgb(237,154,194)"},'+
 '{"Binated_Thread_Code": "B-1322","Thread_Discription": "Royal Purple","PMS_Code": "2685C","RGB_Code": "rgb(66, 64, 122)","Customer ": "Staple ","Cust_Thread_Code": "563","Cust_Thread_Discription": "PING PURPLE","Cust_RGB_Code": "rgb(75,58,151)"},'+
 '{"Binated_Thread_Code": "B-1323","Thread_Discription": "Golden Wheat","PMS_Code": "458C","RGB_Code": "rgb(206, 175, 77)","Customer ": "Staple ","Cust_Thread_Code": "758","Cust_Thread_Discription": "LT GOLD","Cust_RGB_Code": "rgb(255,241,110)"},'+
 '{"Binated_Thread_Code": "B-1330","Thread_Discription": "Bahamas Blue","PMS_Code": "2725C","RGB_Code": "rgb(82, 95, 153)","Customer ": "Staple ","Cust_Thread_Code": "561","Cust_Thread_Discription": "LAKRPRPL","Cust_RGB_Code": "rgb(112,117,183)"},'+
 '{"Binated_Thread_Code": "B-1335","Thread_Discription": "Dark Periwinkle","PMS_Code": "7456C","RGB_Code": "rgb(70, 102, 163)","Customer ": "Staple ","Cust_Thread_Code": "562","Cust_Thread_Discription": "SLOC PURPLE","Cust_RGB_Code": "rgb(104,119,185)"},'+
 '{"Binated_Thread_Code": "B-1342","Thread_Discription": "Fawn","PMS_Code": "7514C","RGB_Code": "rgb(191, 153, 136)","Customer ": "Staple ","Cust_Thread_Code": "124","Cust_Thread_Discription": "CHAMOIS","Cust_RGB_Code": "rgb(255,229,157)"},'+
 '{"Binated_Thread_Code": "B-1349","Thread_Discription": "Palomino","PMS_Code": "127C","RGB_Code": "rgb(238, 206, 135)","Customer ": "Staple ","Cust_Thread_Code": "753","Cust_Thread_Discription": "DAFFODIL","Cust_RGB_Code": "rgb(244,241,145)"},'+
 '{"Binated_Thread_Code": "B-1350","Thread_Discription": "Citrus Green","PMS_Code": "10109C","RGB_Code": "rgb(180, 162, 68)","Customer ": "Staple ","Cust_Thread_Code": "360","Cust_Thread_Discription": "OLIVE","Cust_RGB_Code": "rgb(152,174,76)"},'+
 '{"Binated_Thread_Code": "B-1352","Thread_Discription": "Old Gold","PMS_Code": "7753C","RGB_Code": "rgb(183, 139, 45)","Customer ": "Staple ","Cust_Thread_Code": "800","Cust_Thread_Discription": "OLD GOLD","Cust_RGB_Code": "rgb(179,157,34)"},'+
 '{"Binated_Thread_Code": "B-1353","Thread_Discription": "Blue Spruce","PMS_Code": "646C","RGB_Code": "rgb(81, 109, 129)","Customer ": "Staple ","Cust_Thread_Code": "469","Cust_Thread_Discription": "PING SLAT BLU","Cust_RGB_Code": "rgb(91,121,159)"},'+
 '{"Binated_Thread_Code": "B-1356","Thread_Discription": "Pink Pearl","PMS_Code": "&nbsp;685C","RGB_Code": "rgb(181, 153, 161)","Customer ": "Staple ","Cust_Thread_Code": "669","Cust_Thread_Discription": "ASHBERRY","Cust_RGB_Code": "rgb(174,120,128)"},'+
 '{"Binated_Thread_Code": "B-1363","Thread_Discription": "Steel Lavender","PMS_Code": "10251C","RGB_Code": "rgb(122, 129, 146)","Customer ": "Staple ","Cust_Thread_Code": "52","Cust_Thread_Discription": "GRANITE","Cust_RGB_Code": "rgb(99,108,116)"},'+
 '{"Binated_Thread_Code": "B-1364","Thread_Discription": "Storm Sky Blue","PMS_Code": "2139C","RGB_Code": "rgb(73, 90, 110)","Customer ": "Staple ","Cust_Thread_Code": "510","Cust_Thread_Discription": "OCEAN","Cust_RGB_Code": "rgb(70,104,139)"},'+
 '{"Binated_Thread_Code": "B-1370","Thread_Discription": "Fir","PMS_Code": "7484C","RGB_Code": "rgb(37, 80, 60)","Customer ": "Staple ","Cust_Thread_Code": "353","Cust_Thread_Discription": "CAJUN GREEN","Cust_RGB_Code": "rgb(0,63,49)"},'+
 '{"Binated_Thread_Code": "B-1376","Thread_Discription": "Space Blue","PMS_Code": "302C","RGB_Code": "rgb(36, 79, 104)","Customer ": "Staple ","Cust_Thread_Code": "511","Cust_Thread_Discription": "WTHRDBLU","Cust_RGB_Code": "rgb(12,68,109)"},'+
 '{"Binated_Thread_Code": "B-1378","Thread_Discription": "Paprika","PMS_Code": "2028C","RGB_Code": "rgb(221, 59, 39)","Customer ": "Staple ","Cust_Thread_Code": "850","Cust_Thread_Discription": "ORANGE","Cust_RGB_Code": "rgb(239,64,53)"},'+
 '{"Binated_Thread_Code": "B-1379","Thread_Discription": "Mandarin","PMS_Code": "179C","RGB_Code": "rgb(225, 85, 68)","Customer ": "Staple ","Cust_Thread_Code": "610","Cust_Thread_Discription": "SPANISH RED","Cust_RGB_Code": "rgb(239,77,60)"},'+
 '{"Binated_Thread_Code": "B-1380","Thread_Discription": "Mandarin","PMS_Code": "179C","RGB_Code": "rgb(225, 85, 68)","Customer ": "Staple ","Cust_Thread_Code": "844","Cust_Thread_Discription": "NEON ORANGE","Cust_RGB_Code": "rgb(243,120,84)"},'+
 '{"Binated_Thread_Code": "B-1380","Thread_Discription": "Oasis","PMS_Code": "2399C","RGB_Code": "rgb(0, 154, 135)","Customer ": "Staple ","Cust_Thread_Code": "381","Cust_Thread_Discription": "NKGREEN","Cust_RGB_Code": "rgb(0,141,125)"},'+
 '{"Binated_Thread_Code": "B-1381","Thread_Discription": "Oasis","PMS_Code": "2399C","RGB_Code": "rgb(0, 154, 135)","Customer ": "Staple ","Cust_Thread_Code": "395","Cust_Thread_Discription": "EMERALD","Cust_RGB_Code": "rgb(0,158,155)"},'+
 '{"Binated_Thread_Code": "B-1382","Thread_Discription": "Oasis","PMS_Code": "2399C","RGB_Code": "rgb(0, 154, 135)","Customer ": "Staple ","Cust_Thread_Code": "390","Cust_Thread_Discription": "TEAL","Cust_RGB_Code": "rgb(29,152,150)"},'+
 '{"Binated_Thread_Code": "B-1381","Thread_Discription": "Ripe Raspberry","PMS_Code": "7420C","RGB_Code": "rgb(141, 41, 67)","Customer ": "Staple ","Cust_Thread_Code": "650","Cust_Thread_Discription": "SCARLET","Cust_RGB_Code": "rgb(163,18,48)"},'+
 '{"Binated_Thread_Code": "B-1382","Thread_Discription": "Ripe Raspberry","PMS_Code": "7420C","RGB_Code": "rgb(141, 41, 67)","Customer ": "Staple ","Cust_Thread_Code": "678","Cust_Thread_Discription": "WINE","Cust_RGB_Code": "rgb(137,0,36)"},'+
 '{"Binated_Thread_Code": "B-1388","Thread_Discription": "Plum","PMS_Code": "7652C","RGB_Code": "rgb(93, 55, 82)","Customer ": "Staple ","Cust_Thread_Code": "705","Cust_Thread_Discription": "MULBERRY","Cust_RGB_Code": "rgb(99,51,76)"},'+
 '{"Binated_Thread_Code": "B-1389","Thread_Discription": "Bordeaux","PMS_Code": "7435C","RGB_Code": "rgb(117, 47, 75)","Customer ": "Staple ","Cust_Thread_Code": "639","Cust_Thread_Discription": "SHEVRON RED","Cust_RGB_Code": "rgb(134,0,56)"},'+
 '{"Binated_Thread_Code": "B-1392","Thread_Discription": "Silver Sage","PMS_Code": "5626C","RGB_Code": "rgb(108, 123, 107)","Customer ": "Staple ","Cust_Thread_Code": "513","Cust_Thread_Discription": "THUNDER","Cust_RGB_Code": "rgb(97,124,125)"},'+
 '{"Binated_Thread_Code": "B-1394","Thread_Discription": "Kale","PMS_Code": "5743C","RGB_Code": "rgb(81, 85, 69)","Customer ": "Staple ","Cust_Thread_Code": "374","Cust_Thread_Discription": "CYPRESS","Cust_RGB_Code": "rgb(67,72,68)"},'+
 '{"Binated_Thread_Code": "B-1395","Thread_Discription": "Rosemary","PMS_Code": "5535C","RGB_Code": "rgb(62, 74, 64)","Customer ": "Staple ","Cust_Thread_Code": "285","Cust_Thread_Discription": "PING SPRUCE","Cust_RGB_Code": "rgb(17,68,50)"},'+
 '{"Binated_Thread_Code": "B-1405","Thread_Discription": "Goose Gray","PMS_Code": "10102C","RGB_Code": "rgb(176, 179, 166)","Customer ": "Staple ","Cust_Thread_Code": "225","Cust_Thread_Discription": "TRADKHAK","Cust_RGB_Code": "rgb(175,173,158)"},'+
 '{"Binated_Thread_Code": "B-1411","Thread_Discription": "Silver","PMS_Code": "429C","RGB_Code": "rgb(184, 192, 195)","Customer ": "Staple ","Cust_Thread_Code": "70","Cust_Thread_Discription": "ANTQSLV","Cust_RGB_Code": "rgb(197,198,200)"},'+
 '{"Binated_Thread_Code": "B-1415","Thread_Discription": "Battleship","PMS_Code": "430C","RGB_Code": "rgb(104, 113, 112)","Customer ": "Staple ","Cust_Thread_Code": "61","Cust_Thread_Discription": "LIBRITY GRAY","Cust_RGB_Code": "rgb(145,138,144)"},'+
 '{"Binated_Thread_Code": "B-1425","Thread_Discription": "Pumpkin Spice","PMS_Code": "2012C","RGB_Code": "rgb(201, 125, 41)","Customer ": "Staple ","Cust_Thread_Code": "126","Cust_Thread_Discription": "MOCHA","Cust_RGB_Code": "rgb(156,95,21)"},'+
 '{"Binated_Thread_Code": "B-1428","Thread_Discription": "Rice","PMS_Code": "2324C","RGB_Code": "rgb(145, 133, 112)","Customer ": "Staple ","Cust_Thread_Code": "223","Cust_Thread_Discription": "JAVA","Cust_RGB_Code": "rgb(165,151,145)"},'+
 '{"Binated_Thread_Code": "B-1451","Thread_Discription": "Celery","PMS_Code": "577C","RGB_Code": "rgb(139, 160, 92)","Customer ": "Staple ","Cust_Thread_Code": "306","Cust_Thread_Discription": "LIME PRO","Cust_RGB_Code": "rgb(133,197,81)"},'+
 '{"Binated_Thread_Code": "B-1491","Thread_Discription": "Brass","PMS_Code": "7509C","RGB_Code": "rgb(167, 120, 48)","Customer ": "Staple ","Cust_Thread_Code": "271","Cust_Thread_Discription": "SADDLE","Cust_RGB_Code": "rgb(191,132,50)"},'+
 '{"Binated_Thread_Code": "B-1494","Thread_Discription": "Olive Green","PMS_Code": "7760C","RGB_Code": "rgb(124, 111, 55)","Customer ": "Staple ","Cust_Thread_Code": "193","Cust_Thread_Discription": "COPPER","Cust_RGB_Code": "rgb(118,91,0)"}]}';
 
 let text3='{"data3":['+
 '{"Binated_Thread_Code": "B-1800","Thread_Discription": "Emerald Black","PMS_Code": "Process Black C","RGB_Code": "rgb(48, 49, 50)","Customer ": "flywhee","Cust_Thread_Code": 1800,"Cust_Thread_Discription": "Emerald Black","Cust_RGB_Code": "rgb(36,33,33)"},'+
 '{"Binated_Thread_Code": "B-1801","Thread_Discription": "Super White","PMS_Code": "663C","RGB_Code": "rgb(229, 231, 244)","Customer ": "flywhee","Cust_Thread_Code": 1801,"Cust_Thread_Discription": "Super White","Cust_RGB_Code": "rgb(221,228,237)"},'+
 '{"Binated_Thread_Code": "B-1015","Thread_Discription": "Desert Bloom","PMS_Code": "169C","RGB_Code": "rgb(233, 180, 177)","Customer ": "flywhee","Cust_Thread_Code": 1815,"Cust_Thread_Discription": "Baby Pink","Cust_RGB_Code": "rgb(249,188,202)"},'+
 '{"Binated_Thread_Code": "B-1024","Thread_Discription": "Gold Rush","PMS_Code": "7549C","RGB_Code": "rgb(250, 166, 31)","Customer ": "flywhee","Cust_Thread_Code": 1624,"Cust_Thread_Discription": "Egg Yolk","Cust_RGB_Code": "rgb(246,167,4)"},'+
 '{"Binated_Thread_Code": "B-1038","Thread_Discription": "Barn Red","PMS_Code": "201C","RGB_Code": "rgb(141, 47, 52)","Customer ": "flywhee","Cust_Thread_Code": 1981,"Cust_Thread_Discription": "Crmine","Cust_RGB_Code": "rgb(161,38,65)"},'+
 '{"Binated_Thread_Code": "B-1048","Thread_Discription": "Aloe","PMS_Code": "7490C","RGB_Code": "rgb(123, 149, 83)","Customer ": "flywhee","Cust_Thread_Code": 1848,"Cust_Thread_Discription": "Lime Green","Cust_RGB_Code": "rgb(114,169,78)"},'+
 '{"Binated_Thread_Code": "B-1075","Thread_Discription": "Baby Blue","PMS_Code": "2717C","RGB_Code": "rgb(131, 167, 199)","Customer ": "flywhee","Cust_Thread_Code": 1675,"Cust_Thread_Discription": "Nordic Blue","Cust_RGB_Code": "rgb(145,192,235)"},'+
 '{"Binated_Thread_Code": "B-1076","Thread_Discription": "True Blue","PMS_Code": "2728C","RGB_Code": "rgb(0, 88, 151)","Customer ": "flywhee","Cust_Thread_Code": 1842,"Cust_Thread_Discription": "True Blue","Cust_RGB_Code": "rgb(0,74,152)"},'+
 '{"Binated_Thread_Code": "B-1078","Thread_Discription": "Pumpkin","PMS_Code": "Orange 021 C","RGB_Code": "rgb(235, 86, 40)","Customer ": "flywhee","Cust_Thread_Code": 1678,"Cust_Thread_Discription": "Pumpkin","Cust_RGB_Code": "rgb(226,67,7)"},'+
 '{"Binated_Thread_Code": "B-1101","Thread_Discription": "Wintergreen","PMS_Code": "2257C","RGB_Code": "rgb(70, 144, 83)","Customer ": "flywhee","Cust_Thread_Code": 1701,"Cust_Thread_Discription": "Spring Green","Cust_RGB_Code": "rgb(59,175,41)"},'+
 '{"Binated_Thread_Code": "B-1111","Thread_Discription": "Evening Mist","PMS_Code": "531C","RGB_Code": "rgb(197, 174, 197)","Customer ": "flywhee","Cust_Thread_Code": 1911,"Cust_Thread_Discription": "Evening Mist","Cust_RGB_Code": "rgb(218,189,221)"},'+
 '{"Binated_Thread_Code": "B-1117","Thread_Discription": "Flamingo Pink","PMS_Code": "205C","RGB_Code": "rgb(214, 97, 142)","Customer ": "flywhee","Cust_Thread_Code": 1977,"Cust_Thread_Discription": "Peacock Blue","Cust_RGB_Code": "rgb(0,128,188)"},'+
 '{"Binated_Thread_Code": "B-1118","Thread_Discription": "Overcast Gray","PMS_Code": "429C","RGB_Code": "rgb(137, 145, 146)","Customer ": "flywhee","Cust_Thread_Code": 1918,"Cust_Thread_Discription": "Polished Pewter","Cust_RGB_Code": "rgb(136,140,141)"},'+
 '{"Binated_Thread_Code": "B-1122","Thread_Discription": "Deep Lilac","PMS_Code": "7664C","RGB_Code": "rgb(79, 54, 105)","Customer ": "flywhee","Cust_Thread_Code": 1633,"Cust_Thread_Discription": "Regal Purple","Cust_RGB_Code": "rgb(107,29,116)"},'+
 '{"Binated_Thread_Code": "B-1158","Thread_Discription": "Chestnut","PMS_Code": "7594C","RGB_Code": "rgb(123, 69, 57)","Customer ": "flywhee","Cust_Thread_Code": 1885,"Cust_Thread_Discription": "Camel","Cust_RGB_Code": "rgb(137,103,77)"},'+
 '{"Binated_Thread_Code": "B-1178","Thread_Discription": "Carrot","PMS_Code": "1645C","RGB_Code": "rgb(241, 106, 70)","Customer ": "flywhee","Cust_Thread_Code": 1645,"Cust_Thread_Discription": "Lead","Cust_RGB_Code": "rgb(0,0,0)"},'+
 '{"Binated_Thread_Code": "B-1223","Thread_Discription": "Lemon Tart","PMS_Code": "Yellow C","RGB_Code": "rgb(238, 199, 39)","Customer ": "flywhee","Cust_Thread_Code": 1623,"Cust_Thread_Discription": "Lemon Tart","Cust_RGB_Code": "rgb(247,227,0)"},'+
 '{"Binated_Thread_Code": "B-1299","Thread_Discription": "Green Turquoise","PMS_Code": "326C","RGB_Code": "rgb(0, 185, 172)","Customer ": "flywhee","Cust_Thread_Code": 1888,"Cust_Thread_Discription": "Deep Sky Blue","Cust_RGB_Code": "rgb(0,137,150)"},'+
 '{"Binated_Thread_Code": "B-1309","Thread_Discription": "Dahlia","PMS_Code": "211C","RGB_Code": "rgb(215, 99, 154)","Customer ": "flywhee","Cust_Thread_Code": 1990,"Cust_Thread_Discription": "Pink Rose","Cust_RGB_Code": "rgb(243,79,152)"},'+
 '{"Binated_Thread_Code": "B-1379","Thread_Discription": "Mandarin","PMS_Code": "179C","RGB_Code": "rgb(225, 85, 68)","Customer ": "flywhee","Cust_Thread_Code": 1851,"Cust_Thread_Discription": "Cadmium Green","Cust_RGB_Code": "rgb(4,98,64)"},'+
 '{"Binated_Thread_Code": "B-1447","Thread_Discription": "Cinnamon Candy","PMS_Code": "199C","RGB_Code": "rgb(175, 35, 37)","Customer ": "flywhee","Cust_Thread_Code": 1839,"Cust_Thread_Discription": "Christmas Red","Cust_RGB_Code": "rgb(173,23,43)"},'+
 //'{"Binated_Thread_Code": "B-1466","Thread_Discription": "Sailor Blue","PMS_Code": "null","RGB_Code": "rgbnull","Customer ": "flywhee","Cust_Thread_Code": 1967,"Cust_Thread_Discription": "Pea Coat","Cust_RGB_Code": "rgb(11,30,96)"},'+
 '{"Binated_Thread_Code": "B-1478","Thread_Discription": "Orange Peel","PMS_Code": "2018C","RGB_Code": "rgb(242, 110, 36)","Customer ": "flywhee","Cust_Thread_Code": 1765,"Cust_Thread_Discription": "Tiger","Cust_RGB_Code": "rgb(255,107,0)"},'+
 '{"Binated_Thread_Code": "B-1491","Thread_Discription": "Brass","PMS_Code": "7509C","RGB_Code": "rgb(167, 120, 48)","Customer ": "flywhee","Cust_Thread_Code": 1672,"Cust_Thread_Discription": "Toasted Almond","Cust_RGB_Code": "rgb(184,132,0)"},'+
 '{"Binated_Thread_Code": "B-1740","Thread_Discription": "Weimaraner","PMS_Code": "423C","RGB_Code": "rgb(123, 121, 126)","Customer ": "flywhee","Cust_Thread_Code": 1740,"Cust_Thread_Discription": "Weimaraner","Cust_RGB_Code": "rgb(119,119,123)"},'+
 '{"Binated_Thread_Code": "B-1945","Thread_Discription": "Sienna","PMS_Code": "477C","RGB_Code": "rgb(115, 80, 71)","Customer ": "flywhee","Cust_Thread_Code": 1945,"Cust_Thread_Discription": "Sienna","Cust_RGB_Code": "rgb(102,58,42)"}]}';
 
 
 let text4='{"data4":['+
     '{"Binated_Thread_Code": "B-1800","Thread_Discription": "Emerald Black","PMS_Code": "Process Black C","RGB_Code": "rgb(48, 49, 50)","Customer ": "Columbia","Cust_Thread_Code": "Process Black C","Cust_Thread_Discription": "Emerald Black","Cust_RGB_Code": "rgb(40,41,42)"},'+
     '{"Binated_Thread_Code": "B-1801","Thread_Discription": "Super White","PMS_Code": "663C","RGB_Code": "rgb(229, 231, 244)","Customer ": "Columbia","Cust_Thread_Code": "663C","Cust_Thread_Discription": "Super White","Cust_RGB_Code": "rgb(227,229,251)"},'+
     '{"Binated_Thread_Code": "B-1000","Thread_Discription": "Emerald Black","PMS_Code": "426C","RGB_Code": "rgb(41, 41, 42)","Customer ": "Columbia","Cust_Thread_Code": "426C","Cust_Thread_Discription": "Emerald Black","Cust_RGB_Code": "rgb(169,175,178)"},'+
     '{"Binated_Thread_Code": "B-1005","Thread_Discription": "Fluorescent White","PMS_Code": "663C","RGB_Code": "rgb(225, 227, 242)","Customer ": "Columbia","Cust_Thread_Code": "663C","Cust_Thread_Discription": "Fluorescent White","Cust_RGB_Code": "rgb(227,229,251)"},'+
     '{"Binated_Thread_Code": "B-1010","Thread_Discription": "Gray Haze","PMS_Code": "&nbsp;441C","RGB_Code": "rgb(195, 196, 191)","Customer ": "Columbia","Cust_Thread_Code": "&nbsp;441C","Cust_Thread_Discription": "Gray Haze","Cust_RGB_Code": "rgb(194,196,191)"},'+
     '{"Binated_Thread_Code": "B-1011","Thread_Discription": "Chrome","PMS_Code": "421C ","RGB_Code": "rgb(171, 176, 178)","Customer ": "Columbia","Cust_Thread_Code": "421C ","Cust_Thread_Discription": "Chrome","Cust_RGB_Code": "rgb(169,175,178)"},'+
     '{"Binated_Thread_Code": "B-1012","Thread_Discription": "Smoke","PMS_Code": "429C","RGB_Code": "rgb(163, 176, 181)","Customer ": "Columbia","Cust_Thread_Code": "429C","Cust_Thread_Discription": "Smoke","Cust_RGB_Code": "rgb(163,175,179)"},'+
     '{"Binated_Thread_Code": "B-1013","Thread_Discription": "Peach Blush","PMS_Code": "5035C ","RGB_Code": "rgb(239, 210, 203)","Customer ": "Columbia","Cust_Thread_Code": "5035C ","Cust_Thread_Discription": "Peach Blush","Cust_RGB_Code": "rgb(238,209,202)"},'+
     '{"Binated_Thread_Code": "B-1014","Thread_Discription": "Bermuda Sand","PMS_Code": "1767C","RGB_Code": "rgb(238, 178, 188)","Customer ": "Columbia","Cust_Thread_Code": "1767C","Cust_Thread_Discription": "Bermuda Sand","Cust_RGB_Code": "rgb(238,178,188)"},'+
     '{"Binated_Thread_Code": "B-1015","Thread_Discription": "Desert Bloom","PMS_Code": "169C","RGB_Code": "rgb(233, 180, 177)","Customer ": "Columbia","Cust_Thread_Code": "169C","Cust_Thread_Discription": "Desert Bloom","Cust_RGB_Code": "rgb(233,179,177)"},'+
     '{"Binated_Thread_Code": "B-1017","Thread_Discription": "Orange Wisp","PMS_Code": "488C","RGB_Code": "rgb(242, 187, 171)","Customer ": "Columbia","Cust_Thread_Code": "488C","Cust_Thread_Discription": "Orange Wisp","Cust_RGB_Code": "rgb(244,188,172)"},'+
     '{"Binated_Thread_Code": "B-1018","Thread_Discription": "Light Salmon","PMS_Code": "919C","RGB_Code": "rgb(239, 179, 168)","Customer ": "Columbia","Cust_Thread_Code": "919C","Cust_Thread_Discription": "Light Salmon","Cust_RGB_Code": "rgb(240,180,168)"},'+
     '{"Binated_Thread_Code": "B-1020","Thread_Discription": "Bright Peach","PMS_Code": "170C","RGB_Code": "rgb(245, 137, 127)","Customer ": "Columbia","Cust_Thread_Code": "170C","Cust_Thread_Discription": "Bright Peach","Cust_RGB_Code": "rgb(247,136,125)"},'+
     '{"Binated_Thread_Code": "B-1021","Thread_Discription": "Rust","PMS_Code": "167C","RGB_Code": "rgb(188, 84, 47)","Customer ": "Columbia","Cust_Thread_Code": "167C","Cust_Thread_Discription": "Rust","Cust_RGB_Code": "rgb(186,82,47)"},'+
     '{"Binated_Thread_Code": "B-1022","Thread_Discription": "Corn Silk","PMS_Code": "9140C","RGB_Code": "rgb(235, 227, 185)","Customer ": "Columbia","Cust_Thread_Code": "9140C","Cust_Thread_Discription": "Corn Silk","Cust_RGB_Code": "rgb(234,227,185)"},'+
     '{"Binated_Thread_Code": "B-1023","Thread_Discription": "Lemon","PMS_Code": "100C","RGB_Code": "rgb(244, 219, 106)","Customer ": "Columbia","Cust_Thread_Code": "100C","Cust_Thread_Discription": "Lemon","Cust_RGB_Code": "rgb(243,218,104)"},'+
     '{"Binated_Thread_Code": "B-1024","Thread_Discription": "Gold Rush","PMS_Code": "7549C","RGB_Code": "rgb(250, 166, 31)","Customer ": "Columbia","Cust_Thread_Code": "7549C","Cust_Thread_Discription": "Gold Rush","Cust_RGB_Code": "rgb(255,166,23)"},'+
     '{"Binated_Thread_Code": "B-1025","Thread_Discription": "Military Gold","PMS_Code": "131C","RGB_Code": "rgb(204, 129, 41)","Customer ": "Columbia","Cust_Thread_Code": "131C","Cust_Thread_Discription": "Military Gold","Cust_RGB_Code": "rgb(205,129,38)"},'+
     '{"Binated_Thread_Code": "B-1026","Thread_Discription": "Orange Sorbet","PMS_Code": "149C","RGB_Code": "rgb(242, 188, 138)","Customer ": "Columbia","Cust_Thread_Code": "149C","Cust_Thread_Discription": "Orange Sorbet","Cust_RGB_Code": "rgb(244,188,139)"},'+
     '{"Binated_Thread_Code": "B-1027","Thread_Discription": "Dolphin","PMS_Code": "544C","RGB_Code": "rgb(155, 187, 202)","Customer ": "Columbia","Cust_Thread_Code": "544C","Cust_Thread_Discription": "Dolphin","Cust_RGB_Code": "rgb(154,186,202)"},'+
     '{"Binated_Thread_Code": "B-1028","Thread_Discription": "Country Kitchen Blue","PMS_Code": "278C","RGB_Code": "rgb(90, 137, 169)","Customer ": "Columbia","Cust_Thread_Code": "278C","Cust_Thread_Discription": "Country Kitchen Blue","Cust_RGB_Code": "rgb(90,137,170)"},'+
     '{"Binated_Thread_Code": "B-1029","Thread_Discription": "Blue Jay","PMS_Code": "279C","RGB_Code": "rgb(50, 138, 189)","Customer ": "Columbia","Cust_Thread_Code": "279C","Cust_Thread_Discription": "Blue Jay","Cust_RGB_Code": "rgb(46,137,189)"},'+
     '{"Binated_Thread_Code": "B-1030","Thread_Discription": "Light Periwinkle","PMS_Code": "2708C","RGB_Code": "rgb(147, 168, 193)","Customer ": "Columbia","Cust_Thread_Code": "2708C","Cust_Thread_Discription": "Light Periwinkle","Cust_RGB_Code": "rgb(148,169,194)"},'+
     '{"Binated_Thread_Code": "B-1031","Thread_Discription": "Frosted Lavender","PMS_Code": "243C","RGB_Code": "rgb(200, 162, 192)","Customer ": "Columbia","Cust_Thread_Code": "243C","Cust_Thread_Discription": "Frosted Lavender","Cust_RGB_Code": "rgb(199,161,191)"},'+
     '{"Binated_Thread_Code": "B-1032","Thread_Discription": "Velvet Violet","PMS_Code": "2080C","RGB_Code": "rgb(129, 109, 158)","Customer ": "Columbia","Cust_Thread_Code": "2080C","Cust_Thread_Discription": "Velvet Violet","Cust_RGB_Code": "rgb(129,108,157)"},'+
     '{"Binated_Thread_Code": "B-1033","Thread_Discription": "Purple Pansy","PMS_Code": "526C","RGB_Code": "rgb(111, 74, 130)","Customer ": "Columbia","Cust_Thread_Code": "526C","Cust_Thread_Discription": "Purple Pansy","Cust_RGB_Code": "rgb(110,73,129)"},'+
     '{"Binated_Thread_Code": "B-1034","Thread_Discription": "Vintage Rose","PMS_Code": "7433C","RGB_Code": "rgb(155, 67, 100)","Customer ": "Columbia","Cust_Thread_Code": "7433C","Cust_Thread_Discription": "Vintage Rose","Cust_RGB_Code": "rgb(153,66,98)"},'+
     '{"Binated_Thread_Code": "B-1035","Thread_Discription": "Burgundy","PMS_Code": "505C","RGB_Code": "rgb(101, 49, 63)","Customer ": "Columbia","Cust_Thread_Code": "505C","Cust_Thread_Discription": "Burgundy","Cust_RGB_Code": "rgb(99,47,61)"},'+
     '{"Binated_Thread_Code": "B-1036","Thread_Discription": "Raisin","PMS_Code": "1817C","RGB_Code": "rgb(89, 49, 51)","Customer ": "Columbia","Cust_Thread_Code": "1817C","Cust_Thread_Discription": "Raisin","Cust_RGB_Code": "rgb(119,77,77)"},'+
     '{"Binated_Thread_Code": "B-1037","Thread_Discription": "Tango","PMS_Code": "2035C","RGB_Code": "rgb(189, 34, 39)","Customer ": "Columbia","Cust_Thread_Code": "2035C","Cust_Thread_Discription": "Tango","Cust_RGB_Code": "rgb(190,20,34)"},'+
     '{"Binated_Thread_Code": "B-1038","Thread_Discription": "Barn Red","PMS_Code": "201C","RGB_Code": "rgb(141, 47, 52)","Customer ": "Columbia","Cust_Thread_Code": "201C","Cust_Thread_Discription": "Barn Red","Cust_RGB_Code": "rgb(140,47,51)"},'+
     '{"Binated_Thread_Code": "B-1039","Thread_Discription": "Brick Red","PMS_Code": "200C","RGB_Code": "rgb(162, 40, 50)","Customer ": "Columbia","Cust_Thread_Code": "200C","Cust_Thread_Discription": "Brick Red","Cust_RGB_Code": "rgb(161,40,49)"},'+
     '{"Binated_Thread_Code": "B-1040","Thread_Discription": "Weimaraner","PMS_Code": "410C","RGB_Code": "rgb(139, 135, 138)","Customer ": "Columbia","Cust_Thread_Code": "410C","Cust_Thread_Discription": "Weimaraner","Cust_RGB_Code": "rgb(138,134,137)"},'+
     '{"Binated_Thread_Code": "B-1041","Thread_Discription": "Polished Pewter","PMS_Code": "431C","RGB_Code": "rgb(112, 117, 124)","Customer ": "Columbia","Cust_Thread_Code": "431C","Cust_Thread_Discription": "Polished Pewter","Cust_RGB_Code": "rgb(110,116,123)"},'+
     '{"Binated_Thread_Code": "B-1042","Thread_Discription": "Lapis","PMS_Code": "8184C","RGB_Code": "rgb(33, 81, 121)","Customer ": "Columbia","Cust_Thread_Code": "8184C","Cust_Thread_Discription": "Lapis","Cust_RGB_Code": "rgb(33,79,119)"},'+
     '{"Binated_Thread_Code": "B-1043","Thread_Discription": "Navy","PMS_Code": "289C","RGB_Code": "rgb(45, 52, 69)","Customer ": "Columbia","Cust_Thread_Code": "289C","Cust_Thread_Discription": "Navy","Cust_RGB_Code": "rgb(44,52,69)"},'+
     '{"Binated_Thread_Code": "B-1044","Thread_Discription": "Indigo","PMS_Code": "289C","RGB_Code": "rgb(46, 50, 63)","Customer ": "Columbia","Cust_Thread_Code": "289C","Cust_Thread_Discription": "Indigo","Cust_RGB_Code": "rgb(44,52,69)"},'+
     '{"Binated_Thread_Code": "B-1045","Thread_Discription": "Light Mint","PMS_Code": "7471C","RGB_Code": "rgb(136, 203, 190)","Customer ": "Columbia","Cust_Thread_Code": "7471C","Cust_Thread_Discription": "Light Mint","Cust_RGB_Code": "rgb(134,204,191)"},'+
     '{"Binated_Thread_Code": "B-1046","Thread_Discription": "Eucalyptus","PMS_Code": "7465C","RGB_Code": "rgb(77, 172, 153)","Customer ": "Columbia","Cust_Thread_Code": "7465C","Cust_Thread_Discription": "Eucalyptus","Cust_RGB_Code": "rgb(79,172,152)"},'+
     '{"Binated_Thread_Code": "B-1047","Thread_Discription": "Celadon","PMS_Code": "345C","RGB_Code": "rgb(159, 190, 163)","Customer ": "Columbia","Cust_Thread_Code": "345C","Cust_Thread_Discription": "Celadon","Cust_RGB_Code": "rgb(158,189,162)"},'+
     '{"Binated_Thread_Code": "B-1048","Thread_Discription": "Aloe","PMS_Code": "7490C","RGB_Code": "rgb(123, 149, 83)","Customer ": "Columbia","Cust_Thread_Code": "7490C","Cust_Thread_Discription": "Aloe","Cust_RGB_Code": "rgb(123,149,83)"},'+
     '{"Binated_Thread_Code": "B-1049","Thread_Discription": "Lime Green","PMS_Code": "360C","RGB_Code": "rgb(110, 160, 76)","Customer ": "Columbia","Cust_Thread_Code": "360C","Cust_Thread_Discription": "Lime Green","Cust_RGB_Code": "rgb(111,160,77)"},'+
     '{"Binated_Thread_Code": "B-1050","Thread_Discription": "Green Thumb","PMS_Code": "361C","RGB_Code": "rgb(68, 150, 69)","Customer ": "Columbia","Cust_Thread_Code": "361C","Cust_Thread_Discription": "Green Thumb","Cust_RGB_Code": "rgb(69,150,69)"},'+
     '{"Binated_Thread_Code": "B-1051","Thread_Discription": "Bell Pepper","PMS_Code": "2252C","RGB_Code": "rgb(0, 136, 70)","Customer ": "Columbia","Cust_Thread_Code": "2252C","Cust_Thread_Discription": "Bell Pepper","Cust_RGB_Code": "rgb(0,135,69)"},'+
     '{"Binated_Thread_Code": "B-1052","Thread_Discription": "Mermaid","PMS_Code": "2236C","RGB_Code": "rgb(59, 117, 117)","Customer ": "Columbia","Cust_Thread_Code": "2236C","Cust_Thread_Discription": "Mermaid","Cust_RGB_Code": "rgb(57,116,116)"},'+
     '{"Binated_Thread_Code": "B-1053","Thread_Discription": "Light Coral","PMS_Code": "488C","RGB_Code": "rgb(231, 183, 165)","Customer ": "Columbia","Cust_Thread_Code": "488C","Cust_Thread_Discription": "Light Coral","Cust_RGB_Code": "rgb(244,188,172)"},'+
     '{"Binated_Thread_Code": "B-1054","Thread_Discription": "Tawny","PMS_Code": "7613C","RGB_Code": "rgb(172, 131, 123)","Customer ": "Columbia","Cust_Thread_Code": "7613C","Cust_Thread_Discription": "Tawny","Cust_RGB_Code": "rgb(172,131,122)"},'+
     '{"Binated_Thread_Code": "B-1055","Thread_Discription": "Latte","PMS_Code": "155C","RGB_Code": "rgb(212, 177, 144)","Customer ": "Columbia","Cust_Thread_Code": "155C","Cust_Thread_Discription": "Latte","Cust_RGB_Code": "rgb(212,177,143)"},'+
     '{"Binated_Thread_Code": "B-1056","Thread_Discription": "Golden Oak","PMS_Code": "2313C","RGB_Code": "rgb(158, 106, 72)","Customer ": "Columbia","Cust_Thread_Code": "2313C","Cust_Thread_Discription": "Golden Oak","Cust_RGB_Code": "rgb(158,105,71)"},'+
     '{"Binated_Thread_Code": "B-1057","Thread_Discription": "Caramel","PMS_Code": "4645C","RGB_Code": "rgb(161, 114, 87)","Customer ": "Columbia","Cust_Thread_Code": "4645C","Cust_Thread_Discription": "Caramel","Cust_RGB_Code": "rgb(160,113,85)"},'+
     '{"Binated_Thread_Code": "B-1058","Thread_Discription": "Sienna","PMS_Code": "175C","RGB_Code": "rgb(114, 71, 61)","Customer ": "Columbia","Cust_Thread_Code": "175C","Cust_Thread_Discription": "Sienna","Cust_RGB_Code": "rgb(113,70,59)"},'+
     '{"Binated_Thread_Code": "B-1059","Thread_Discription": "Dark Chocolate","PMS_Code": " Black 5 C","RGB_Code": "rgb(67, 56, 53)","Customer ": "Columbia","Cust_Thread_Code": " Black 5 C","Cust_Thread_Discription": "Dark Chocolate","Cust_RGB_Code": "rgb(66,55,52)"},'+
     '{"Binated_Thread_Code": "B-1060","Thread_Discription": "Pussywillow","PMS_Code": "7527C","RGB_Code": "rgb(180, 166, 152)","Customer ": "Columbia","Cust_Thread_Code": "7527C","Cust_Thread_Discription": "Pussywillow","Cust_RGB_Code": "rgb(179,166,151)"},'+
     '{"Binated_Thread_Code": "B-1061","Thread_Discription": "Vanilla Pudding","PMS_Code": "9160C","RGB_Code": "rgb(244, 218, 171)","Customer ": "Columbia","Cust_Thread_Code": "9160C","Cust_Thread_Discription": "Vanilla Pudding","Cust_RGB_Code": "rgb(244,218,171)"},'+
     '{"Binated_Thread_Code": "B-1062","Thread_Discription": "Rhino","PMS_Code": "7536C","RGB_Code": "rgb(142, 135, 122)","Customer ": "Columbia","Cust_Thread_Code": "7536C","Cust_Thread_Discription": "Rhino","Cust_RGB_Code": "rgb(141,134,122)"},'+
     '{"Binated_Thread_Code": "B-1063","Thread_Discription": "Elephant","PMS_Code": "7497C","RGB_Code": "rgb(124, 119, 107)","Customer ": "Columbia","Cust_Thread_Code": "7497C","Cust_Thread_Discription": "Elephant","Cust_RGB_Code": "rgb(124,118,105)"},'+
     '{"Binated_Thread_Code": "B-1064","Thread_Discription": "Goldenrod","PMS_Code": "109C","RGB_Code": "rgb(255, 201, 30)","Customer ": "Columbia","Cust_Thread_Code": "109C","Cust_Thread_Discription": "Goldenrod","Cust_RGB_Code": "rgb(255,199,29)"},'+
     '{"Binated_Thread_Code": "B-1065","Thread_Discription": "Copper","PMS_Code": "151C","RGB_Code": "rgb(227, 120, 38)","Customer ": "Columbia","Cust_Thread_Code": "151C","Cust_Thread_Discription": "Copper","Cust_RGB_Code": "rgb(229,120,33)"},'+
     '{"Binated_Thread_Code": "B-1066","Thread_Discription": "Cornmeal","PMS_Code": "7401C","RGB_Code": "rgb(245, 214, 161)","Customer ": "Columbia","Cust_Thread_Code": "7401C","Cust_Thread_Discription": "Cornmeal","Cust_RGB_Code": "rgb(245,214,161)"},'+
     '{"Binated_Thread_Code": "B-1068","Thread_Discription": "Canary","PMS_Code": "116C","RGB_Code": "rgb(253, 187, 28)","Customer ": "Columbia","Cust_Thread_Code": "116C","Cust_Thread_Discription": "Canary","Cust_RGB_Code": "rgb(255,188,22)"},'+
     '{"Binated_Thread_Code": "B-1069","Thread_Discription": "Sunshine Yellow","PMS_Code": "123C","RGB_Code": "rgb(251, 177, 24)","Customer ": "Columbia","Cust_Thread_Code": "123C","Cust_Thread_Discription": "Sunshine Yellow","Cust_RGB_Code": "rgb(255,177,4)"},'+
     '{"Binated_Thread_Code": "B-1070","Thread_Discription": "Tawny Tan","PMS_Code": "141C","RGB_Code": "rgb(210, 170, 114)","Customer ": "Columbia","Cust_Thread_Code": "141C","Cust_Thread_Discription": "Tawny Tan","Cust_RGB_Code": "rgb(210,169,112)"},'+
     '{"Binated_Thread_Code": "B-1071","Thread_Discription": "Baby’s Breath","PMS_Code": "9285C","RGB_Code": "rgb(233, 228, 219)","Customer ": "Columbia","Cust_Thread_Code": "9285C","Cust_Thread_Discription": "Babys Breath","Cust_RGB_Code": "rgb(233,229,220)"},'+
     '{"Binated_Thread_Code": "B-1072","Thread_Discription": "Coconut Cream","PMS_Code": "9180C","RGB_Code": "rgb(221, 212, 190)","Customer ": "Columbia","Cust_Thread_Code": "9180C","Cust_Thread_Discription": "Coconut Cream","Cust_RGB_Code": "rgb(220,210,189)"},'+
     '{"Binated_Thread_Code": "B-1074","Thread_Discription": "Powder Blue","PMS_Code": "2708C","RGB_Code": "rgb(151, 182, 208)","Customer ": "Columbia","Cust_Thread_Code": "2708C","Cust_Thread_Discription": "Powder Blue","Cust_RGB_Code": "rgb(148,169,194)"},'+
     '{"Binated_Thread_Code": "B-1075","Thread_Discription": "Baby Blue","PMS_Code": "2717C","RGB_Code": "rgb(131, 167, 199)","Customer ": "Columbia","Cust_Thread_Code": "2717C","Cust_Thread_Discription": "Baby Blue","Cust_RGB_Code": "rgb(132,168,200)"},'+
     '{"Binated_Thread_Code": "B-1076","Thread_Discription": "True Blue","PMS_Code": "2728C","RGB_Code": "rgb(0, 88, 151)","Customer ": "Columbia","Cust_Thread_Code": "2728C","Cust_Thread_Discription": "True Blue","Cust_RGB_Code": "rgb(0,87,150)"},'+
     '{"Binated_Thread_Code": "B-1078","Thread_Discription": "Pumpkin","PMS_Code": "Orange 021 C","RGB_Code": "rgb(235, 86, 40)","Customer ": "Columbia","Cust_Thread_Code": "Orange 021 C","Cust_Thread_Discription": "Pumpkin","Cust_RGB_Code": "rgb(237,83,42)"},'+
     '{"Binated_Thread_Code": "B-1079","Thread_Discription": "Celtic Green","PMS_Code": "347C","RGB_Code": "rgb(0, 136, 80)","Customer ": "Columbia","Cust_Thread_Code": "347C","Cust_Thread_Discription": "Celtic Green","Cust_RGB_Code": "rgb(0,135,79)"},'+
     '{"Binated_Thread_Code": "B-1080","Thread_Discription": "Lilac","PMS_Code": "2066C","RGB_Code": "rgb(166, 125, 169)","Customer ": "Columbia","Cust_Thread_Code": "2066C","Cust_Thread_Discription": "Lilac","Cust_RGB_Code": "rgb(166,125,169)"},'+
     '{"Binated_Thread_Code": "B-1081","Thread_Discription": "Azalea","PMS_Code": "1925C","RGB_Code": "rgb(186, 50, 83)","Customer ": "Columbia","Cust_Thread_Code": "1925C","Cust_Thread_Discription": "Azalea","Cust_RGB_Code": "rgb(186,48,81)"},'+
     '{"Binated_Thread_Code": "B-1082","Thread_Discription": "Antique Ecru","PMS_Code": "2316C ","RGB_Code": "rgb(205, 186, 167)","Customer ": "Columbia","Cust_Thread_Code": "2316C ","Cust_Thread_Discription": "Antique Ecru","Cust_RGB_Code": "rgb(205,186,166)"},'+
     '{"Binated_Thread_Code": "B-1083","Thread_Discription": "Daisy","PMS_Code": "121C","RGB_Code": "rgb(250, 207, 90)","Customer ": "Columbia","Cust_Thread_Code": "121C","Cust_Thread_Discription": "Daisy","Cust_RGB_Code": "rgb(250,206,90)"},'+
     '{"Binated_Thread_Code": "B-1084","Thread_Discription": "Sandy Shores","PMS_Code": "9182C","RGB_Code": "rgb(210, 185, 157)","Customer ": "Columbia","Cust_Thread_Code": "9182C","Cust_Thread_Discription": "Sandy Shores","Cust_RGB_Code": "rgb(210,185,157)"},'+
     '{"Binated_Thread_Code": "B-1085","Thread_Discription": "Cement","PMS_Code": "2330C","RGB_Code": "rgb(184, 181, 175)","Customer ": "Columbia","Cust_Thread_Code": "2330C","Cust_Thread_Discription": "Cement","Cust_RGB_Code": "rgb(184,181,175)"},'+
     '{"Binated_Thread_Code": "B-1086","Thread_Discription": "Sterling Silver","PMS_Code": "427C","RGB_Code": "rgb(199, 200, 197)","Customer ": "Columbia","Cust_Thread_Code": "427C","Cust_Thread_Discription": "Sterling Silver","Cust_RGB_Code": "rgb(199,201,198)"},'+
     '{"Binated_Thread_Code": "B-1087","Thread_Discription": "Silver Birch","PMS_Code": "2330C","RGB_Code": "rgb(189, 188, 184)","Customer ": "Columbia","Cust_Thread_Code": "2330C","Cust_Thread_Discription": "Silver Birch","Cust_RGB_Code": "rgb(184,181,175)"},'+
     '{"Binated_Thread_Code": "B-1088","Thread_Discription": "Robin’s Egg","PMS_Code": "2227C","RGB_Code": "rgb(97, 169, 172)","Customer ": "Columbia","Cust_Thread_Code": "2227C","Cust_Thread_Discription": "Robin’s Egg","Cust_RGB_Code": "rgb(97,169,172)"},'+
     '{"Binated_Thread_Code": "B-1089","Thread_Discription": "Sea Frost","PMS_Code": "636C","RGB_Code": "rgb(109, 169, 177)","Customer ": "Columbia","Cust_Thread_Code": "636C","Cust_Thread_Discription": "Sea Frost","Cust_RGB_Code": "rgb(108,169,178)"},'+
     '{"Binated_Thread_Code": "B-1090","Thread_Discription": "Deep Sky Blue","PMS_Code": "2235C","RGB_Code": "rgb(22, 134, 138)","Customer ": "Columbia","Cust_Thread_Code": "2235C","Cust_Thread_Discription": "Deep Sky Blue","Cust_RGB_Code": "rgb(20,133,137)"},'+
     '{"Binated_Thread_Code": "B-1091","Thread_Discription": "Teal Blue","PMS_Code": "632C","RGB_Code": "rgb(8, 113, 129)","Customer ": "Columbia","Cust_Thread_Code": "632C","Cust_Thread_Discription": "Teal Blue","Cust_RGB_Code": "rgb(0,112,128)"},'+
     '{"Binated_Thread_Code": "B-1092","Thread_Discription": "Summer Sky","PMS_Code": "550C","RGB_Code": "rgb(148, 194, 208)","Customer ": "Columbia","Cust_Thread_Code": "550C","Cust_Thread_Discription": "Summer Sky","Cust_RGB_Code": "rgb(147,194,209)"},'+
     '{"Binated_Thread_Code": "B-1093","Thread_Discription": "Azure Sea","PMS_Code": "305C","RGB_Code": "rgb(36, 187, 201)","Customer ": "Columbia","Cust_Thread_Code": "305C","Cust_Thread_Discription": "Azure Sea","Cust_RGB_Code": "rgb(27,187,201)"},'+
     '{"Binated_Thread_Code": "B-1094","Thread_Discription": "Caribbean Blue","PMS_Code": "306C","RGB_Code": "rgb(9, 178, 200)","Customer ": "Columbia","Cust_Thread_Code": "306C","Cust_Thread_Discription": "Caribbean Blue","Cust_RGB_Code": "rgb(0,179,201)"},'+
     '{"Binated_Thread_Code": "B-1095","Thread_Discription": "Larimar","PMS_Code": "638C","RGB_Code": "rgb(0, 169, 194)","Customer ": "Columbia","Cust_Thread_Code": "638C","Cust_Thread_Discription": "Larimar","Cust_RGB_Code": "rgb(0,169,194)"},'+
     '{"Binated_Thread_Code": "B-1096","Thread_Discription": "Cobalt","PMS_Code": "7461C","RGB_Code": "rgb(11, 126, 155)","Customer ": "Columbia","Cust_Thread_Code": "7461C","Cust_Thread_Discription": "Cobalt","Cust_RGB_Code": "rgb(0,125,155)"},'+
     '{"Binated_Thread_Code": "B-1097","Thread_Discription": "Honeydew Melon","PMS_Code": "558C ","RGB_Code": "rgb(174, 209, 191)","Customer ": "Columbia","Cust_Thread_Code": "558C ","Cust_Thread_Discription": "Honeydew Melon","Cust_RGB_Code": "rgb(175,210,192)"},'+
     '{"Binated_Thread_Code": "B-1098","Thread_Discription": "Blue Grass","PMS_Code": "8284C","RGB_Code": "rgb(90, 135, 115)","Customer ": "Columbia","Cust_Thread_Code": "8284C","Cust_Thread_Discription": "Blue Grass","Cust_RGB_Code": "rgb(88,135,115)"},'+
     '{"Binated_Thread_Code": "B-1099","Thread_Discription": "Leek","PMS_Code": "7485C","RGB_Code": "rgb(187, 193, 159)","Customer ": "Columbia","Cust_Thread_Code": "7485C","Cust_Thread_Discription": "Leek","Cust_RGB_Code": "rgb(186,193,159)"},'+
     '{"Binated_Thread_Code": "B-1100","Thread_Discription": "Cucumber","PMS_Code": "7486C","RGB_Code": "rgb(189, 208, 178)","Customer ": "Columbia","Cust_Thread_Code": "7486C","Cust_Thread_Discription": "Cucumber","Cust_RGB_Code": "rgb(190,209,178)"},'+
     '{"Binated_Thread_Code": "B-1101","Thread_Discription": "Wintergreen","PMS_Code": "2257C","RGB_Code": "rgb(70, 144, 83)","Customer ": "Columbia","Cust_Thread_Code": "2257C","Cust_Thread_Discription": "Wintergreen","Cust_RGB_Code": "rgb(72,143,82)"},'+
     '{"Binated_Thread_Code": "B-1102","Thread_Discription": "Light Moss Green","PMS_Code": "7492C","RGB_Code": "rgb(182, 176, 125)","Customer ": "Columbia","Cust_Thread_Code": "7492C","Cust_Thread_Discription": "Light Moss Green","Cust_RGB_Code": "rgb(182,175,124)"},'+
     '{"Binated_Thread_Code": "B-1103","Thread_Discription": "Hunter Green","PMS_Code": "3435C","RGB_Code": "rgb(53, 78, 60)","Customer ": "Columbia","Cust_Thread_Code": "3435C","Cust_Thread_Discription": "Hunter Green","Cust_RGB_Code": "rgb(52,77,59)"},'+
     '{"Binated_Thread_Code": "B-1104","Thread_Discription": "Scallion","PMS_Code": "580C","RGB_Code": "rgb(193, 196, 150)","Customer ": "Columbia","Cust_Thread_Code": "580C","Cust_Thread_Discription": "Scallion","Cust_RGB_Code": "rgb(193,197,150)"},'+
     '{"Binated_Thread_Code": "B-1105","Thread_Discription": "Weeping Willow","PMS_Code": "452C","RGB_Code": "rgb(170, 162, 125)","Customer ": "Columbia","Cust_Thread_Code": "452C","Cust_Thread_Discription": "Weeping Willow","Cust_RGB_Code": "rgb(171,163,126)"},'+
     '{"Binated_Thread_Code": "B-1106","Thread_Discription": "Guacamole","PMS_Code": "10107C","RGB_Code": "rgb(151, 140, 84)","Customer ": "Columbia","Cust_Thread_Code": "10107C","Cust_Thread_Discription": "Guacamole","Cust_RGB_Code": "rgb(151,140,84)"},'+
     '{"Binated_Thread_Code": "B-1107","Thread_Discription": "Honeysuckle","PMS_Code": "1777C","RGB_Code": "rgb(231, 99, 119)","Customer ": "Columbia","Cust_Thread_Code": "1777C","Cust_Thread_Discription": "Honeysuckle","Cust_RGB_Code": "rgb(232,98,118)"},'+
     '{"Binated_Thread_Code": "B-1109","Thread_Discription": "Pink Rose","PMS_Code": "212C","RGB_Code": "rgb(208, 79, 137)","Customer ": "Columbia","Cust_Thread_Code": "212C","Cust_Thread_Discription": "Pink Rose","Cust_RGB_Code": "rgb(207,77,136)"},'+
     '{"Binated_Thread_Code": "B-1110","Thread_Discription": "Fuchsia","PMS_Code": "219C","RGB_Code": "rgb(192, 48, 110)","Customer ": "Columbia","Cust_Thread_Code": "219C","Cust_Thread_Discription": "Fuchsia","Cust_RGB_Code": "rgb(191,47,110)"},'+
     '{"Binated_Thread_Code": "B-1111","Thread_Discription": "Evening Mist","PMS_Code": "531C","RGB_Code": "rgb(197, 174, 197)","Customer ": "Columbia","Cust_Thread_Code": "531C","Cust_Thread_Discription": "Evening Mist","Cust_RGB_Code": "rgb(197,173,197)"},'+
     '{"Binated_Thread_Code": "B-1112","Thread_Discription": "Majestic Purple","PMS_Code": "2090C","RGB_Code": "rgb(84, 72, 129)","Customer ": "Columbia","Cust_Thread_Code": "2090C","Cust_Thread_Discription": "Majestic Purple","Cust_RGB_Code": "rgb(83,70,128)"},'+
     '{"Binated_Thread_Code": "B-1114","Thread_Discription": "Pink Petal","PMS_Code": "7422C","RGB_Code": "rgb(234, 186, 185)","Customer ": "Columbia","Cust_Thread_Code": "7422C","Cust_Thread_Discription": "Pink Petal","Cust_RGB_Code": "rgb(234,186,186)"},'+
     '{"Binated_Thread_Code": "B-1115","Thread_Discription": "Powder Puff","PMS_Code": "176C","RGB_Code": "rgb(238, 187, 192)","Customer ": "Columbia","Cust_Thread_Code": "176C","Cust_Thread_Discription": "Powder Puff","Cust_RGB_Code": "rgb(239,187,193)"},'+
     '{"Binated_Thread_Code": "B-1116","Thread_Discription": "Cotton Candy","PMS_Code": "189C","RGB_Code": "rgb(234, 173, 191)","Customer ": "Columbia","Cust_Thread_Code": "189C","Cust_Thread_Discription": "Cotton Candy","Cust_RGB_Code": "rgb(235,173,191)"},'+
     '{"Binated_Thread_Code": "B-1117","Thread_Discription": "Flamingo Pink","PMS_Code": "205C","RGB_Code": "rgb(214, 97, 142)","Customer ": "Columbia","Cust_Thread_Code": "205C","Cust_Thread_Discription": "Flamingo Pink","Cust_RGB_Code": "rgb(212,98,142)"},'+
     '{"Binated_Thread_Code": "B-1118","Thread_Discription": "Overcast Gray","PMS_Code": "429C","RGB_Code": "rgb(137, 145, 146)","Customer ": "Columbia","Cust_Thread_Code": "429C","Cust_Thread_Discription": "Overcast Gray","Cust_RGB_Code": "rgb(163,175,179)"},'+
     '{"Binated_Thread_Code": "B-1119","Thread_Discription": "English Rose","PMS_Code": "7634C","RGB_Code": "rgb(158, 81, 101)","Customer ": "Columbia","Cust_Thread_Code": "7634C","Cust_Thread_Discription": "English Rose","Cust_RGB_Code": "rgb(156,79,100)"},'+
     '{"Binated_Thread_Code": "B-1120","Thread_Discription": "Baby Pink","PMS_Code": "707C","RGB_Code": "rgb(230, 185, 200)","Customer ": "Columbia","Cust_Thread_Code": "707C","Cust_Thread_Discription": "Baby Pink","Cust_RGB_Code": "rgb(230,186,201)"},'+
     '{"Binated_Thread_Code": "B-1121","Thread_Discription": "Candy Heart","PMS_Code": "203C","RGB_Code": "rgb(226, 174, 197)","Customer ": "Columbia","Cust_Thread_Code": "203C","Cust_Thread_Discription": "Candy Heart","Cust_RGB_Code": "rgb(226,175,197)"},'+
     '{"Binated_Thread_Code": "B-1122","Thread_Discription": "Deep Lilac","PMS_Code": "7664C","RGB_Code": "rgb(79, 54, 105)","Customer ": "Columbia","Cust_Thread_Code": "7664C","Cust_Thread_Discription": "Deep Lilac","Cust_RGB_Code": "rgb(78,53,104)"},'+
     '{"Binated_Thread_Code": "B-1123","Thread_Discription": "Parchment","PMS_Code": "7499C","RGB_Code": "rgb(236, 224, 191)","Customer ": "Columbia","Cust_Thread_Code": "7499C","Cust_Thread_Discription": "Parchment","Cust_RGB_Code": "rgb(237,224,191)"},'+
     '{"Binated_Thread_Code": "B-1124","Thread_Discription": "Buttercup","PMS_Code": "116C","RGB_Code": "rgb(250, 199, 76)","Customer ": "Columbia","Cust_Thread_Code": "116C","Cust_Thread_Discription": "Buttercup","Cust_RGB_Code": "rgb(255,188,22)"},'+
     '{"Binated_Thread_Code": "B-1125","Thread_Discription": "Saffron","PMS_Code": "1225C","RGB_Code": "rgb(241, 177, 61)","Customer ": "Columbia","Cust_Thread_Code": "1225C","Cust_Thread_Discription": "Saffron","Cust_RGB_Code": "rgb(241,177,60)"},'+
     '{"Binated_Thread_Code": "B-1126","Thread_Discription": "Light Brown Sugar","PMS_Code": "10143C","RGB_Code": "rgb(174, 126, 91)","Customer ": "Columbia","Cust_Thread_Code": "10143C","Cust_Thread_Discription": "Light Brown Sugar","Cust_RGB_Code": "rgb(174,125,90)"},'+
     '{"Binated_Thread_Code": "B-1127","Thread_Discription": "Loofah","PMS_Code": "474C","RGB_Code": "rgb(219, 186, 166)","Customer ": "Columbia","Cust_Thread_Code": "474C","Cust_Thread_Discription": "Loofah","Cust_RGB_Code": "rgb(220,186,165)"},'+
     '{"Binated_Thread_Code": "B-1128","Thread_Discription": "Taupe","PMS_Code": "10136C","RGB_Code": "rgb(163, 144, 130)","Customer ": "Columbia","Cust_Thread_Code": "10136C","Cust_Thread_Discription": "Taupe","Cust_RGB_Code": "rgb(162,144,130)"},'+
     '{"Binated_Thread_Code": "B-1129","Thread_Discription": "Mud Pie","PMS_Code": "412C","RGB_Code": "rgb(73, 58, 52)","Customer ": "Columbia","Cust_Thread_Code": "412C","Cust_Thread_Discription": "Mud Pie","Cust_RGB_Code": "rgb(72,57,51)"},'+
     '{"Binated_Thread_Code": "B-1130","Thread_Discription": "Chocolate Chip","PMS_Code": "476C","RGB_Code": "rgb(74, 58, 55)","Customer ": "Columbia","Cust_Thread_Code": "476C ","Cust_Thread_Discription": "Chocolate Chip","Cust_RGB_Code": "rgb(73,57,55)"},'+
     '{"Binated_Thread_Code": "B-1131","Thread_Discription": "Espresso","PMS_Code": "Black C","RGB_Code": "rgb(60, 53, 50)","Customer ": "Columbia","Cust_Thread_Code": "Black C","Cust_Thread_Discription": "Espresso","Cust_RGB_Code": "rgb(59,52,49)"},'+
     '{"Binated_Thread_Code": "B-1132","Thread_Discription": "Clear Blue","PMS_Code": "291C","RGB_Code": "rgb(138, 187, 207)","Customer ": "Columbia","Cust_Thread_Code": "291C","Cust_Thread_Discription": "Clear Blue","Cust_RGB_Code": "rgb(136,187,207)"},'+
     '{"Binated_Thread_Code": "B-1133","Thread_Discription": "Forget-Me-Not","PMS_Code": "279C","RGB_Code": "rgb(41, 127, 184)","Customer ": "Columbia","Cust_Thread_Code": "279C","Cust_Thread_Discription": "Forget-Me-Not","Cust_RGB_Code": "rgb(46,137,189)"},'+
     '{"Binated_Thread_Code": "B-1134","Thread_Discription": "Royal Blue","PMS_Code": "2132C","RGB_Code": "rgb(0, 86, 147)","Customer ": "Columbia","Cust_Thread_Code": "2132C","Cust_Thread_Discription": "Royal Blue","Cust_RGB_Code": "rgb(0,85,146)"},'+
     '{"Binated_Thread_Code": "B-1135","Thread_Discription": "Baby Chick","PMS_Code": "1205C","RGB_Code": "rgb(245, 215, 119)","Customer ": "Columbia","Cust_Thread_Code": "1205C","Cust_Thread_Discription": "Baby Chick","Cust_RGB_Code": "rgb(245,215,119)"},'+
     '{"Binated_Thread_Code": "B-1136","Thread_Discription": "Dark Taupe","PMS_Code": "7531C","RGB_Code": "rgb(140, 122, 109)","Customer ": "Columbia","Cust_Thread_Code": "7531C","Cust_Thread_Discription": "Dark Taupe","Cust_RGB_Code": "rgb(139,121,108)"},'+
     '{"Binated_Thread_Code": "B-1137","Thread_Discription": "Citrus Burst","PMS_Code": "137C","RGB_Code": "rgb(243, 141, 33)","Customer ": "Columbia","Cust_Thread_Code": "137C","Cust_Thread_Discription": "Citrus Burst","Cust_RGB_Code": "rgb(244,140,13)"},'+
     '{"Binated_Thread_Code": "B-1138","Thread_Discription": "Doe Skin","PMS_Code": "9183C","RGB_Code": "rgb(205, 186, 165)","Customer ": "Columbia","Cust_Thread_Code": "9183C","Cust_Thread_Discription": "Doe Skin","Cust_RGB_Code": "rgb(204,186,164)"},'+
     '{"Binated_Thread_Code": "B-1140","Thread_Discription": "Avocado Green","PMS_Code": "2304C","RGB_Code": "rgb(128, 129, 52)","Customer ": "Columbia","Cust_Thread_Code": "2304C","Cust_Thread_Discription": "Avocado Green","Cust_RGB_Code": "rgb(128,128,51)"},'+
     '{"Binated_Thread_Code": "B-1141","Thread_Discription": "Mauve","PMS_Code": "5005C","RGB_Code": "rgb(157, 114, 121)","Customer ": "Columbia","Cust_Thread_Code": "5005C","Cust_Thread_Discription": "Mauve","Cust_RGB_Code": "rgb(156,113,120)"},'+
     '{"Binated_Thread_Code": "B-1142","Thread_Discription": "Peach Puff","PMS_Code": "4735C","RGB_Code": "rgb(182, 154, 142)","Customer ": "Columbia","Cust_Thread_Code": "4735C","Cust_Thread_Discription": "Peach Puff","Cust_RGB_Code": "rgb(183,155,143)"},'+
     '{"Binated_Thread_Code": "B-1143","Thread_Discription": "China Blue","PMS_Code": "2130C","RGB_Code": "rgb(75, 108, 154)","Customer ": "Columbia","Cust_Thread_Code": "2130C","Cust_Thread_Discription": "China Blue","Cust_RGB_Code": "rgb(75,107,153)"},'+
     '{"Binated_Thread_Code": "B-1144","Thread_Discription": "Bark","PMS_Code": "7504C","RGB_Code": "rgb(133, 107, 89)","Customer ": "Columbia","Cust_Thread_Code": "7504C","Cust_Thread_Discription": "Bark","Cust_RGB_Code": "rgb(132,106,87)"},'+
     '{"Binated_Thread_Code": "B-1145","Thread_Discription": "Coffee Bean","PMS_Code": "7603C","RGB_Code": "rgb(95, 64, 54)","Customer ": "Columbia","Cust_Thread_Code": "7603C","Cust_Thread_Discription": "Coffee Bean","Cust_RGB_Code": "rgb(94,62,53)"},'+
     '{"Binated_Thread_Code": "B-1146","Thread_Discription": "Tomato Red","PMS_Code": "485C","RGB_Code": "rgb(211, 41, 40)","Customer ": "Columbia","Cust_Thread_Code": "485C","Cust_Thread_Discription": "Tomato Red","Cust_RGB_Code": "rgb(212,39,39)"},'+
     '{"Binated_Thread_Code": "B-1147","Thread_Discription": "Christmas Red","PMS_Code": "1795C","RGB_Code": "rgb(182, 31, 49)","Customer ": "Columbia","Cust_Thread_Code": "1795C","Cust_Thread_Discription": "Christmas Red","Cust_RGB_Code": "rgb(182,15,47)"},'+
     '{"Binated_Thread_Code": "B-1148","Thread_Discription": "Rustic Pink","PMS_Code": "183C","RGB_Code": "rgb(219, 139, 154)","Customer ": "Columbia","Cust_Thread_Code": "183C","Cust_Thread_Discription": "Rustic Pink","Cust_RGB_Code": "rgb(220,139,154)"},'+
     '{"Binated_Thread_Code": "B-1149","Thread_Discription": "Tusk","PMS_Code": "9202C","RGB_Code": "rgb(220, 198, 180)","Customer ": "Columbia","Cust_Thread_Code": "9202C","Cust_Thread_Discription": "Tusk","Cust_RGB_Code": "rgb(220,199,179)"},'+
     '{"Binated_Thread_Code": "B-1150","Thread_Discription": "Chartreuse","PMS_Code": "937C","RGB_Code": "rgb(219, 223, 139)","Customer ": "Columbia","Cust_Thread_Code": "937C","Cust_Thread_Discription": "Chartreuse","Cust_RGB_Code": "rgb(219,224,140)"},'+
     '{"Binated_Thread_Code": "B-1151","Thread_Discription": "Silver Moon","PMS_Code": "9381C","RGB_Code": "rgb(187, 197, 206)","Customer ": "Columbia","Cust_Thread_Code": "9381C","Cust_Thread_Discription": "Silver Moon","Cust_RGB_Code": "rgb(187,197,206)"},'+
     '{"Binated_Thread_Code": "B-1152","Thread_Discription": "Peach Tea","PMS_Code": "1635C","RGB_Code": "rgb(245, 138, 116)","Customer ": "Columbia","Cust_Thread_Code": "1635C","Cust_Thread_Discription": "Peach Tea","Cust_RGB_Code": "rgb(244,123,99)"},'+
     '{"Binated_Thread_Code": "B-1153","Thread_Discription": "Frosted Glass","PMS_Code": "643C","RGB_Code": "rgb(172, 191, 203)","Customer ": "Columbia","Cust_Thread_Code": "643C","Cust_Thread_Discription": "Frosted Glass","Cust_RGB_Code": "rgb(172,191,203)"},'+
     '{"Binated_Thread_Code": "B-1154","Thread_Discription": "Lipstick Rose","PMS_Code": "1785C","RGB_Code": "rgb(216, 70, 97)","Customer ": "Columbia","Cust_Thread_Code": "1785C","Cust_Thread_Discription": "Lipstick Rose","Cust_RGB_Code": "rgb(216,70,96)"},'+
     '{"Binated_Thread_Code": "B-1155","Thread_Discription": "Marmalade","PMS_Code": "714C","RGB_Code": "rgb(245, 159, 103)","Customer ": "Columbia","Cust_Thread_Code": "714C","Cust_Thread_Discription": "Marmalade","Cust_RGB_Code": "rgb(245,158,101)"},'+
     '{"Binated_Thread_Code": "B-1156","Thread_Discription": "Palm Frond","PMS_Code": "5767C","RGB_Code": "rgb(121, 117, 72)","Customer ": "Columbia","Cust_Thread_Code": "5767C","Cust_Thread_Discription": "Palm Frond","Cust_RGB_Code": "rgb(120,115,70)"},'+
     '{"Binated_Thread_Code": "B-1157","Thread_Discription": "Marsh","PMS_Code": "7757C","RGB_Code": "rgb(120, 108, 77)","Customer ": "Columbia","Cust_Thread_Code": "7757C","Cust_Thread_Discription": "Marsh","Cust_RGB_Code": "rgb(119,107,76)"},'+
     '{"Binated_Thread_Code": "B-1158","Thread_Discription": "Chestnut","PMS_Code": "7594C","RGB_Code": "rgb(123, 69, 57)","Customer ": "Columbia","Cust_Thread_Code": "7594C","Cust_Thread_Discription": "Chestnut","Cust_RGB_Code": "rgb(121,67,55)"},'+
     '{"Binated_Thread_Code": "B-1159","Thread_Discription": "Mustard","PMS_Code": "117C","RGB_Code": "rgb(210, 162, 67)","Customer ": "Columbia","Cust_Thread_Code": "117C","Cust_Thread_Discription": "Mustard","Cust_RGB_Code": "rgb(210,161,66)"},'+
     '{"Binated_Thread_Code": "B-1160","Thread_Discription": "Antique Blue","PMS_Code": "7698C","RGB_Code": "rgb(76, 115, 132)","Customer ": "Columbia","Cust_Thread_Code": "7698C","Cust_Thread_Discription": "Antique Blue","Cust_RGB_Code": "rgb(76,114,131)"},'+
     '{"Binated_Thread_Code": "B-1161","Thread_Discription": "Twilight","PMS_Code": "2181C","RGB_Code": "rgb(47, 73, 82)","Customer ": "Columbia","Cust_Thread_Code": "2181C","Cust_Thread_Discription": "Twilight","Cust_RGB_Code": "rgb(45,72,81)"},'+
     '{"Binated_Thread_Code": "B-1162","Thread_Discription": "Admiral Blue","PMS_Code": "2210C","RGB_Code": "rgb(33, 64, 75)","Customer ": "Columbia","Cust_Thread_Code": "2210C","Cust_Thread_Discription": "Admiral Blue","Cust_RGB_Code": "rgb(31,63,74)"},'+
     '{"Binated_Thread_Code": "B-1163","Thread_Discription": "Steel Green","PMS_Code": "8201C","RGB_Code": "rgb(128, 151, 158)","Customer ": "Columbia","Cust_Thread_Code": "8201C","Cust_Thread_Discription": "Steel Green","Cust_RGB_Code": "rgb(128,151,158)"},'+
     '{"Binated_Thread_Code": "B-1164","Thread_Discription": "Twister","PMS_Code": "8605C","RGB_Code": "rgb(85, 91, 100)","Customer ": "Columbia","Cust_Thread_Code": "8605C","Cust_Thread_Discription": "Twister","Cust_RGB_Code": "rgb(83,90,99)"},'+
     '{"Binated_Thread_Code": "B-1166","Thread_Discription": "Hanukkah Blue","PMS_Code": "2747C","RGB_Code": "rgb(32, 69, 131)","Customer ": "Columbia","Cust_Thread_Code": "2747C","Cust_Thread_Discription": "Hanukkah Blue","Cust_RGB_Code": "rgb(30,68,130)"},'+
     '{"Binated_Thread_Code": "B-1167","Thread_Discription": "Blue Ink","PMS_Code": "7687C","RGB_Code": "rgb(35, 74, 121)","Customer ": "Columbia","Cust_Thread_Code": "7687C","Cust_Thread_Discription": "Blue Ink","Cust_RGB_Code": "rgb(35,72,119)"},'+
     '{"Binated_Thread_Code": "B-1169","Thread_Discription": "Split Pea","PMS_Code": "377C","RGB_Code": "rgb(141, 153, 70)","Customer ": "Columbia","Cust_Thread_Code": "377C","Cust_Thread_Discription": "Split Pea","Cust_RGB_Code": "rgb(141,153,73)"},'+
     '{"Binated_Thread_Code": "B-1170","Thread_Discription": "Fern","PMS_Code": "370C","RGB_Code": "rgb(93, 111, 49)","Customer ": "Columbia","Cust_Thread_Code": "370C","Cust_Thread_Discription": "Fern","Cust_RGB_Code": "rgb(90,110,41)"},'+
     '{"Binated_Thread_Code": "B-1171","Thread_Discription": "Lemon Drop","PMS_Code": "135C","RGB_Code": "rgb(240, 221, 167)","Customer ": "Columbia","Cust_Thread_Code": "135C","Cust_Thread_Discription": "Lemon Drop","Cust_RGB_Code": "rgb(240,175,69)"},'+
     '{"Binated_Thread_Code": "B-1172","Thread_Discription": "Egg Yolk","PMS_Code": "130C","RGB_Code": "rgb(233, 154, 40)","Customer ": "Columbia","Cust_Thread_Code": "130C","Cust_Thread_Discription": "Egg Yolk","Cust_RGB_Code": "rgb(231,152,45)"},'+
     '{"Binated_Thread_Code": "B-1173","Thread_Discription": "Autumn Gold","PMS_Code": "7412C","RGB_Code": "rgb(194, 121, 61)","Customer ": "Columbia","Cust_Thread_Code": "7412C","Cust_Thread_Discription": "Autumn Gold","Cust_RGB_Code": "rgb(194,121,63)"},'+
     '{"Binated_Thread_Code": "B-1174","Thread_Discription": "Cinnamon Stick","PMS_Code": "1807C","RGB_Code": "rgb(133, 59, 57)","Customer ": "Columbia","Cust_Thread_Code": "1807C","Cust_Thread_Discription": "Cinnamon Stick","Cust_RGB_Code": "rgb(132,58,55)"},'+
     '{"Binated_Thread_Code": "B-1175","Thread_Discription": "Dark Federal Blue","PMS_Code": "653C","RGB_Code": "rgb(61, 105, 141)","Customer ": "Columbia","Cust_Thread_Code": "653C","Cust_Thread_Discription": "Dark Federal Blue","Cust_RGB_Code": "rgb(59,104,141)"},'+
     '{"Binated_Thread_Code": "B-1176","Thread_Discription": "Navajo Blue","PMS_Code": "2143C","RGB_Code": "rgb(16, 130, 183)","Customer ": "Columbia","Cust_Thread_Code": "2143C","Cust_Thread_Discription": "Navajo Blue","Cust_RGB_Code": "rgb(0,129,182)"},'+
     '{"Binated_Thread_Code": "B-1177","Thread_Discription": "Blue Bird","PMS_Code": "2935C","RGB_Code": "rgb(0, 110, 169)","Customer ": "Columbia","Cust_Thread_Code": "2935C","Cust_Thread_Discription": "Blue Bird","Cust_RGB_Code": "rgb(0,109,167)"},'+
     '{"Binated_Thread_Code": "B-1178","Thread_Discription": "Carrot","PMS_Code": "1645C","RGB_Code": "rgb(241, 106, 70)","Customer ": "Columbia","Cust_Thread_Code": "1645C","Cust_Thread_Discription": "Carrot","Cust_RGB_Code": "rgb(246,105,67)"},'+
     '{"Binated_Thread_Code": "B-1179","Thread_Discription": "Sweet Potato","PMS_Code": "2348C","RGB_Code": "rgb(202, 82, 76)","Customer ": "Columbia","Cust_Thread_Code": "2348C","Cust_Thread_Discription": "Sweet Potato","Cust_RGB_Code": "rgb(201,82,75)"},'+
     '{"Binated_Thread_Code": "B-1180","Thread_Discription": "Daffodil","PMS_Code": "7404C","RGB_Code": "rgb(230, 195, 71)","Customer ": "Columbia","Cust_Thread_Code": "7404C","Cust_Thread_Discription": "Daffodil","Cust_RGB_Code": "rgb(230,196,74)"},'+
     '{"Binated_Thread_Code": "B-1181","Thread_Discription": "Candy Apple Red","PMS_Code": "7427C","RGB_Code": "rgb(139, 37, 53)","Customer ": "Columbia","Cust_Thread_Code": "7427C","Cust_Thread_Discription": "Candy Apple Red","Cust_RGB_Code": "rgb(137,37,51)"},'+
     '{"Binated_Thread_Code": "B-1182","Thread_Discription": "Mulberry","PMS_Code": "7637C","RGB_Code": "rgb(121, 44, 61)","Customer ": "Columbia","Cust_Thread_Code": "7637C","Cust_Thread_Discription": "Mulberry","Cust_RGB_Code": "rgb(120,43,60)"},'+
     '{"Binated_Thread_Code": "B-1183","Thread_Discription": "Cranberry","PMS_Code": "2041C","RGB_Code": "rgb(143, 51, 84)","Customer ": "Columbia","Cust_Thread_Code": "2041C","Cust_Thread_Discription": "Cranberry","Cust_RGB_Code": "rgb(141,49,82)"},'+
     '{"Binated_Thread_Code": "B-1184","Thread_Discription": "Scarlet Rose","PMS_Code": "1935C","RGB_Code": "rgb(189, 32, 71)","Customer ": "Columbia","Cust_Thread_Code": "1935C","Cust_Thread_Discription": "Scarlet Rose","Cust_RGB_Code": "rgb(189,29,68)"},'+
     '{"Binated_Thread_Code": "B-1185","Thread_Discription": "Dark Teal","PMS_Code": "7719C","RGB_Code": "rgb(4, 100, 95)","Customer ": "Columbia","Cust_Thread_Code": "7719C","Cust_Thread_Discription": "Dark Teal","Cust_RGB_Code": "rgb(0,98,94)"},'+
     '{"Binated_Thread_Code": "B-1186","Thread_Discription": "Ruby Slipper","PMS_Code": "Rubin Red C","RGB_Code": "rgb(169, 30, 70)","Customer ": "Columbia","Cust_Thread_Code": "Rubin Red C","Cust_Thread_Discription": "Ruby Slipper","Cust_RGB_Code": "rgb(169,0,66)"},'+
     '{"Binated_Thread_Code": "B-1187","Thread_Discription": "Orchid","PMS_Code": "2040C","RGB_Code": "rgb(183, 31, 87)","Customer ": "Columbia","Cust_Thread_Code": "2040C","Cust_Thread_Discription": "Orchid","Cust_RGB_Code": "rgb(183,24,85)"},'+
     '{"Binated_Thread_Code": "B-1188","Thread_Discription": "Chokecherry","PMS_Code": "249C","RGB_Code": "rgb(123, 61, 110)","Customer ": "Columbia","Cust_Thread_Code": "249C","Cust_Thread_Discription": "Chokecherry","Cust_RGB_Code": "rgb(122,59,109)"},'+
     '{"Binated_Thread_Code": "B-1189","Thread_Discription": "Moss Green","PMS_Code": "7743C","RGB_Code": "rgb(65, 85, 54)","Customer ": "Columbia","Cust_Thread_Code": "7743C","Cust_Thread_Discription": "Moss Green","Cust_RGB_Code": "rgb(63,84,53)"},'+
     '{"Binated_Thread_Code": "B-1190","Thread_Discription": "Sea Weed","PMS_Code": "3985C","RGB_Code": "rgb(150, 128, 61)","Customer ": "Columbia","Cust_Thread_Code": "3985C","Cust_Thread_Discription": "Sea Weed","Cust_RGB_Code": "rgb(156,144,63)"},'+
     '{"Binated_Thread_Code": "B-1191","Thread_Discription": "Gold Coin","PMS_Code": "7557C","RGB_Code": "rgb(147, 113, 55)","Customer ": "Columbia","Cust_Thread_Code": "7557C","Cust_Thread_Discription": "Gold Coin","Cust_RGB_Code": "rgb(146,112,56)"},'+
     '{"Binated_Thread_Code": "B-1192","Thread_Discription": "Honey Mustard","PMS_Code": "125C","RGB_Code": "rgb(169, 122, 43)","Customer ": "Columbia","Cust_Thread_Code": "125C","Cust_Thread_Discription": "Honey Mustard","Cust_RGB_Code": "rgb(169,121,42)"},'+
     '{"Binated_Thread_Code": "B-1193","Thread_Discription": "Peridot","PMS_Code": "617C","RGB_Code": "rgb(179, 159, 84)","Customer ": "Columbia","Cust_Thread_Code": "617C","Cust_Thread_Discription": "Peridot","Cust_RGB_Code": "rgb(180,159,85)"},'+
     '{"Binated_Thread_Code": "B-1194","Thread_Discription": "Dark Olive","PMS_Code": "133C","RGB_Code": "rgb(115, 93, 45)","Customer ": "Columbia","Cust_Thread_Code": "133C","Cust_Thread_Discription": "Dark Olive","Cust_RGB_Code": "rgb(113,92,45)"},'+
     '{"Binated_Thread_Code": "B-1195","Thread_Discription": "Menthol","PMS_Code": "566C","RGB_Code": "rgb(145, 196, 181)","Customer ": "Columbia","Cust_Thread_Code": "566C","Cust_Thread_Discription": "Menthol","Cust_RGB_Code": "rgb(143,195,180)"},'+
     '{"Binated_Thread_Code": "B-1196","Thread_Discription": "Medium Camo Green","PMS_Code": "456C","RGB_Code": "rgb(161, 131, 46)","Customer ": "Columbia","Cust_Thread_Code": "456C","Cust_Thread_Discription": "Medium Camo Green","Cust_RGB_Code": "rgb(161,130,42)"},'+
     '{"Binated_Thread_Code": "B-1198","Thread_Discription": "Moonstone","PMS_Code": "2707C","RGB_Code": "rgb(180, 197, 213)","Customer ": "Columbia","Cust_Thread_Code": "2707C","Cust_Thread_Discription": "Moonstone","Cust_RGB_Code": "rgb(181,198,214)"},'+
     '{"Binated_Thread_Code": "B-1199","Thread_Discription": "Onyx","PMS_Code": "8604C","RGB_Code": "rgb(43, 48, 55)","Customer ": "Columbia","Cust_Thread_Code": "8604C","Cust_Thread_Discription": "Onyx","Cust_RGB_Code": "rgb(42,46,54)"},'+
     '{"Binated_Thread_Code": "B-1212","Thread_Discription": "Stainless Steel","PMS_Code": "7543C","RGB_Code": "rgb(163, 176, 181)","Customer ": "Columbia","Cust_Thread_Code": "7543C","Cust_Thread_Discription": "Stainless Steel","Cust_RGB_Code": "rgb(163,175,179)"},'+
     '{"Binated_Thread_Code": "B-1219","Thread_Discription": "Hint of Mint","PMS_Code": "621C ","RGB_Code": "rgb(163, 188, 184)","Customer ": "Columbia","Cust_Thread_Code": "621C","Cust_Thread_Discription": "Hint of Mint","Cust_RGB_Code": "rgb(163,188,184)"},'+
     '{"Binated_Thread_Code": "B-1220","Thread_Discription": "Conch Shell","PMS_Code": "2029C","RGB_Code": "rgb(225, 117, 121)","Customer ": "Columbia","Cust_Thread_Code": "2029C","Cust_Thread_Discription": "Conch Shell","Cust_RGB_Code": "rgb(225,117,120)"},'+
     '{"Binated_Thread_Code": "B-1221","Thread_Discription": "Terra Cotta","PMS_Code": "7598C","RGB_Code": "rgb(171, 66, 52)","Customer ": "Columbia","Cust_Thread_Code": "7598C","Cust_Thread_Discription": "Terra Cotta","Cust_RGB_Code": "rgb(170,65,52)"},'+
     '{"Binated_Thread_Code": "B-1223","Thread_Discription": "Lemon Tart","PMS_Code": "Yellow C","RGB_Code": "rgb(238, 199, 39)","Customer ": "Columbia","Cust_Thread_Code": "Yellow C","Cust_Thread_Discription": "Lemon Tart","Cust_RGB_Code": "rgb(239,200,44)"},'+
     '{"Binated_Thread_Code": "B-1224","Thread_Discription": "Lemonade","PMS_Code": "2003C","RGB_Code": "rgb(225, 188, 79)","Customer ": "Columbia","Cust_Thread_Code": "2003C","Cust_Thread_Discription": "Lemonade","Cust_RGB_Code": "rgb(226,188,81)"},'+
     '{"Binated_Thread_Code": "B-1225","Thread_Discription": "Liquid Gold","PMS_Code": "7563C","RGB_Code": "rgb(200, 141, 70)","Customer ": "Columbia","Cust_Thread_Code": "7563C","Cust_Thread_Discription": "Liquid Gold","Cust_RGB_Code": "rgb(201,141,71)"},'+
     '{"Binated_Thread_Code": "B-1226","Thread_Discription": "Amber","PMS_Code": "714C","RGB_Code": "rgb(211, 140, 99)","Customer ": "Columbia","Cust_Thread_Code": "714C","Cust_Thread_Discription": "Amber","Cust_RGB_Code": "rgb(245,158,101)"},'+
     '{"Binated_Thread_Code": "B-1227","Thread_Discription": "Mint Jubilee","PMS_Code": "564C","RGB_Code": "rgb(122, 156, 151)","Customer ": "Columbia","Cust_Thread_Code": "564C","Cust_Thread_Discription": "Mint Jubilee","Cust_RGB_Code": "rgb(121,156,151)"},'+
     '{"Binated_Thread_Code": "B-1228","Thread_Discription": "Mink","PMS_Code": "warmgrey 11C","RGB_Code": "rgb(110, 99, 89)","Customer ": "Columbia","Cust_Thread_Code": "warmgrey 11C","Cust_Thread_Discription": "Mink","Cust_RGB_Code": "rgb(109,98,88)"},'+
     '{"Binated_Thread_Code": "B-1229","Thread_Discription": "Clove","PMS_Code": "8601C","RGB_Code": "rgb(94, 82, 72)","Customer ": "Columbia","Cust_Thread_Code": "8601C","Cust_Thread_Discription": "Clove","Cust_RGB_Code": "rgb(93,81,71)"},'+
     '{"Binated_Thread_Code": "B-1230","Thread_Discription": "Root Beer","PMS_Code": "8621C","RGB_Code": "rgb(99, 79, 64)","Customer ": "Columbia","Cust_Thread_Code": "8621C","Cust_Thread_Discription": "Root Beer","Cust_RGB_Code": "rgb(97,78,63)"},'+
     '{"Binated_Thread_Code": "B-1232","Thread_Discription": "Lavender","PMS_Code": "Violet 0631C","RGB_Code": "rgb(166, 153, 186)","Customer ": "Columbia","Cust_Thread_Code": "Violet 0631C","Cust_Thread_Discription": "Lavender","Cust_RGB_Code": "rgb(167,153,187)"},'+
     '{"Binated_Thread_Code": "B-1233","Thread_Discription": "Blackberry Purple","PMS_Code": "668C","RGB_Code": "rgb(79, 70, 100)","Customer ": "Columbia","Cust_Thread_Code": "668C","Cust_Thread_Discription": "Blackberry Purple","Cust_RGB_Code": "rgb(78,69,100)"},'+
     '{"Binated_Thread_Code": "B-1234","Thread_Discription": "Hibiscus","PMS_Code": "7425C","RGB_Code": "rgb(191, 58, 100)","Customer ": "Columbia","Cust_Thread_Code": "7425C","Cust_Thread_Discription": "Hibiscus","Cust_RGB_Code": "rgb(190,55,99)"},'+
     '{"Binated_Thread_Code": "B-1235","Thread_Discription": "Crocus","PMS_Code": "2058C","RGB_Code": "rgb(155, 105, 142)","Customer ": "Columbia","Cust_Thread_Code": "2058C","Cust_Thread_Discription": "Crocus","Cust_RGB_Code": "rgb(154,104,142)"},'+
     '{"Binated_Thread_Code": "B-1236","Thread_Discription": "Plum Brandy","PMS_Code": "505C","RGB_Code": "rgb(78, 43, 54)","Customer ": "Columbia","Cust_Thread_Code": "505C","Cust_Thread_Discription": "Plum Brandy","Cust_RGB_Code": "rgb(99,47,61)"},'+
     '{"Binated_Thread_Code": "B-1238","Thread_Discription": "Sangria","PMS_Code": "201C","RGB_Code": "rgb(130, 42, 53)","Customer ": "Columbia","Cust_Thread_Code": "201C","Cust_Thread_Discription": "Sangria","Cust_RGB_Code": "rgb(140,47,51)"},'+
     '{"Binated_Thread_Code": "B-1239","Thread_Discription": "Charcoal","PMS_Code": "10385C","RGB_Code": "rgb(88, 83, 82)","Customer ": "Columbia","Cust_Thread_Code": "10385C","Cust_Thread_Discription": "Charcoal","Cust_RGB_Code": "rgb(87,82,81)"},'+
     '{"Binated_Thread_Code": "B-1240","Thread_Discription": "Stone","PMS_Code": "409C","RGB_Code": "rgb(115, 106, 105)","Customer ": "Columbia","Cust_Thread_Code": "409C","Cust_Thread_Discription": "Stone","Cust_RGB_Code": "rgb(114,105,103)"},'+
     '{"Binated_Thread_Code": "B-1241","Thread_Discription": "Obsidian","PMS_Code": "432C","RGB_Code": "rgb(60, 64, 70)","Customer ": "Columbia","Cust_Thread_Code": "432C","Cust_Thread_Discription": "Obsidian","Cust_RGB_Code": "rgb(59,63,69)"},'+
     '{"Binated_Thread_Code": "B-1242","Thread_Discription": "Dark Denim","PMS_Code": "654C","RGB_Code": "rgb(35, 62, 92)","Customer ": "Columbia","Cust_Thread_Code": "654C","Cust_Thread_Discription": "Dark Denim","Cust_RGB_Code": "rgb(35,61,91)"},'+
     '{"Binated_Thread_Code": "B-1243","Thread_Discription": "Star-kissed Night","PMS_Code": "2768C","RGB_Code": "rgb(52, 61, 83)","Customer ": "Columbia","Cust_Thread_Code": "2768C","Cust_Thread_Discription": "Star-kissed Night","Cust_RGB_Code": "rgb(51,60,83)"},'+
     '{"Binated_Thread_Code": "B-1244","Thread_Discription": "Darkest Night","PMS_Code": "Black 6 C","RGB_Code": "rgb(45, 49, 57)","Customer ": "Columbia","Cust_Thread_Code": "Black 6 C","Cust_Thread_Discription": "Darkest Night","Cust_RGB_Code": "rgb(45,48,56)"},'+
     '{"Binated_Thread_Code": "B-1245","Thread_Discription": "Sea Foam Green","PMS_Code": "339C","RGB_Code": "rgb(41, 160, 133)","Customer ": "Columbia","Cust_Thread_Code": "339C","Cust_Thread_Discription": "Sea Foam Green","Cust_RGB_Code": "rgb(43,159,132)"},'+
     '{"Binated_Thread_Code": "B-1246","Thread_Discription": "Teal Green","PMS_Code": "326C","RGB_Code": "rgb(0, 140, 135)","Customer ": "Columbia","Cust_Thread_Code": "326C","Cust_Thread_Discription": "Teal Green","Cust_RGB_Code": "rgb(0,139,135)"},'+
     '{"Binated_Thread_Code": "B-1247","Thread_Discription": "Bottle Green","PMS_Code": "340C","RGB_Code": "rgb(2, 148, 110)","Customer ": "Columbia","Cust_Thread_Code": "340C","Cust_Thread_Discription": "Bottle Green","Cust_RGB_Code": "rgb(0,147,109)"},'+
     '{"Binated_Thread_Code": "B-1248","Thread_Discription": "Margarita Lime","PMS_Code": "2283C","RGB_Code": "rgb(155, 205, 106)","Customer ": "Columbia","Cust_Thread_Code": "2283C","Cust_Thread_Discription": "Margarita Lime","Cust_RGB_Code": "rgb(154,206,105)"},'+
     '{"Binated_Thread_Code": "B-1249","Thread_Discription": "Shamrock","PMS_Code": "802C ","RGB_Code": "rgb(18, 162, 74)","Customer ": "Columbia","Cust_Thread_Code": "802C","Cust_Thread_Discription": "Shamrock","Cust_RGB_Code": "rgb(105,189,77)"},'+
     '{"Binated_Thread_Code": "B-1250","Thread_Discription": "Christmas Green","PMS_Code": "3415C","RGB_Code": "rgb(0, 114, 73)","Customer ": "Columbia","Cust_Thread_Code": "3415C","Cust_Thread_Discription": "Christmas Green","Cust_RGB_Code": "rgb(0,112,71)"},'+
     '{"Binated_Thread_Code": "B-1251","Thread_Discription": "Kelly Green","PMS_Code": "7481C","RGB_Code": "rgb(5, 146, 75)","Customer ": "Columbia","Cust_Thread_Code": "7481C","Cust_Thread_Discription": "Kelly Green","Cust_RGB_Code": "rgb(0,145,76)"},'+
     '{"Binated_Thread_Code": "B-1252","Thread_Discription": "Neptune","PMS_Code": "5473C","RGB_Code": "rgb(56, 93, 100)","Customer ": "Columbia","Cust_Thread_Code": "5473C","Cust_Thread_Discription": "Neptune","Cust_RGB_Code": "rgb(55,91,99)"},'+
     '{"Binated_Thread_Code": "B-1253","Thread_Discription": "Penny","PMS_Code": "7576C","RGB_Code": "rgb(204, 122, 78)","Customer ": "Columbia","Cust_Thread_Code": "7576C","Cust_Thread_Discription": "Penny","Cust_RGB_Code": "rgb(205,122,78)"},'+
     '{"Binated_Thread_Code": "B-1254","Thread_Discription": "Dark Salmon","PMS_Code": "170C","RGB_Code": "rgb(227, 141, 128)","Customer ": "Columbia","Cust_Thread_Code": "170C","Cust_Thread_Discription": "Dark Salmon","Cust_RGB_Code": "rgb(247,136,125)"},'+
     '{"Binated_Thread_Code": "B-1255","Thread_Discription": "Khaki","PMS_Code": "7407C","RGB_Code": "rgb(192, 148, 107)","Customer ": "Columbia","Cust_Thread_Code": "7407C","Cust_Thread_Discription": "Khaki","Cust_RGB_Code": "rgb(193,149,108)"},'+
     '{"Binated_Thread_Code": "B-1256","Thread_Discription": "Teddy Bear","PMS_Code": "874C","RGB_Code": "rgb(175, 128, 86)","Customer ": "Columbia","Cust_Thread_Code": "874C","Cust_Thread_Discription": "Teddy Bear","Cust_RGB_Code": "rgb(175,127,86)"},'+
     '{"Binated_Thread_Code": "B-1257","Thread_Discription": "Bronze","PMS_Code": "7566C","RGB_Code": "rgb(157, 87, 46)","Customer ": "Columbia","Cust_Thread_Code": "7566C","Cust_Thread_Discription": "Bronze","Cust_RGB_Code": "rgb(156,86,47)"},'+
     '{"Binated_Thread_Code": "B-1258","Thread_Discription": "Grizzley Bear","PMS_Code": "7587C","RGB_Code": "rgb(128, 74, 53)","Customer ": "Columbia","Cust_Thread_Code": "7587C","Cust_Thread_Discription": "Grizzley Bear","Cust_RGB_Code": "rgb(126,72,51)"},'+
     '{"Binated_Thread_Code": "B-1259","Thread_Discription": "Cocoa","PMS_Code": "8561C","RGB_Code": "rgb(121, 89, 85)","Customer ": "Columbia","Cust_Thread_Code": "8561C","Cust_Thread_Discription": "Cocoa","Cust_RGB_Code": "rgb(119,88,84)"},'+
     '{"Binated_Thread_Code": "B-1260","Thread_Discription": "Canvas","PMS_Code": "4545C","RGB_Code": "rgb(191, 176, 133)","Customer ": "Columbia","Cust_Thread_Code": "4545C","Cust_Thread_Discription": "Canvas","Cust_RGB_Code": "rgb(192,176,133)"},'+
     '{"Binated_Thread_Code": "B-1261","Thread_Discription": "Lavendula","PMS_Code": "2716C","RGB_Code": "rgb(147, 157, 195)","Customer ": "Columbia","Cust_Thread_Code": "2716C","Cust_Thread_Discription": "Lavendula","Cust_RGB_Code": "rgb(147,157,195)"},'+
     '{"Binated_Thread_Code": "B-1263","Thread_Discription": "Dusty Lilac","PMS_Code": "666C","RGB_Code": "rgb(126, 120, 150)","Customer ": "Columbia","Cust_Thread_Code": "666C","Cust_Thread_Discription": "Dusty Lilac","Cust_RGB_Code": "rgb(126,120,151)"},'+
     '{"Binated_Thread_Code": "B-1264","Thread_Discription": "Lavender Ice","PMS_Code": "8100C","RGB_Code": "rgb(148, 140, 158)","Customer ": "Columbia","Cust_Thread_Code": "8100C","Cust_Thread_Discription": "Lavender Ice","Cust_RGB_Code": "rgb(147,140,158)"},'+
     '{"Binated_Thread_Code": "B-1266","Thread_Discription": "Regal Blue","PMS_Code": "2726C","RGB_Code": "rgb(43, 85, 148)","Customer ": "Columbia","Cust_Thread_Code": "2726C","Cust_Thread_Discription": "Regal Blue","Cust_RGB_Code": "rgb(43,83,146)"},'+
     '{"Binated_Thread_Code": "B-1270","Thread_Discription": "Sawdust","PMS_Code": "7401C","RGB_Code": "rgb(228, 185, 131)","Customer ": "Columbia","Cust_Thread_Code": "7401C","Cust_Thread_Discription": "Sawdust","Cust_RGB_Code": "rgb(245,214,161)"},'+
     '{"Binated_Thread_Code": "B-1272","Thread_Discription": "Golden Retriever","PMS_Code": "149C","RGB_Code": "rgb(220, 163, 115)","Customer ": "Columbia","Cust_Thread_Code": "149C","Cust_Thread_Discription": "Golden Retriever","Cust_RGB_Code": "rgb(244,188,139)"},'+
     '{"Binated_Thread_Code": "B-1273","Thread_Discription": "Peanut Brittle","PMS_Code": "7562C","RGB_Code": "rgb(167, 140, 97)","Customer ": "Columbia","Cust_Thread_Code": "7562C","Cust_Thread_Discription": "Peanut Brittle","Cust_RGB_Code": "rgb(167,140,97)"},'+
     '{"Binated_Thread_Code": "B-1274","Thread_Discription": "Porcelain Blue","PMS_Code": "292C","RGB_Code": "rgb(112, 168, 198)","Customer ": "Columbia","Cust_Thread_Code": "292C","Cust_Thread_Discription": "Porcelain Blue","Cust_RGB_Code": "rgb(112,168,198)"},'+
     '{"Binated_Thread_Code": "B-1275","Thread_Discription": "Periwinkle","PMS_Code": "2122C","RGB_Code": "rgb(121, 146, 184)","Customer ": "Columbia","Cust_Thread_Code": "2122C","Cust_Thread_Discription": "Periwinkle","Cust_RGB_Code": "rgb(121,145,183)"},'+
     '{"Binated_Thread_Code": "B-1276","Thread_Discription": "Light Denim","PMS_Code": "646C","RGB_Code": "rgb(65, 117, 152)","Customer ": "Columbia","Cust_Thread_Code": "646C","Cust_Thread_Discription": "Light Denim","Cust_RGB_Code": "rgb(64,116,151)"},'+
     '{"Binated_Thread_Code": "B-1277","Thread_Discription": "Blueberry Smash","PMS_Code": "534C","RGB_Code": "rgb(41, 61, 82)","Customer ": "Columbia","Cust_Thread_Code": "534C","Cust_Thread_Discription": "Blueberry Smash","Cust_RGB_Code": "rgb(39,60,82)"},'+
     '{"Binated_Thread_Code": "B-1278","Thread_Discription": "Orange Icing","PMS_Code": "1505C","RGB_Code": "rgb(241, 104, 36)","Customer ": "Columbia","Cust_Thread_Code": "1505C","Cust_Thread_Discription": "Orange Icing","Cust_RGB_Code": "rgb(255,102,22)"},'+
     '{"Binated_Thread_Code": "B-1279","Thread_Discription": "Tropical Teal","PMS_Code": "3282C","RGB_Code": "rgb(3, 130, 116)","Customer ": "Columbia","Cust_Thread_Code": "3282C","Cust_Thread_Discription": "Tropical Teal","Cust_RGB_Code": "rgb(0,129,115)"},'+
     '{"Binated_Thread_Code": "B-1280","Thread_Discription": "Oregon Green","PMS_Code": "3288C","RGB_Code": "rgb(2, 120, 100)","Customer ": "Columbia","Cust_Thread_Code": "3288C","Cust_Thread_Discription": "Oregon Green","Cust_RGB_Code": "rgb(0,119,99)"},'+
     '{"Binated_Thread_Code": "B-1281","Thread_Discription": "Radish","PMS_Code": "193C","RGB_Code": "rgb(161, 35, 65)","Customer ": "Columbia","Cust_Thread_Code": "193C","Cust_Thread_Discription": "Radish","Cust_RGB_Code": "rgb(159,35,63)"},'+
     '{"Binated_Thread_Code": "B-1284","Thread_Discription": "Emerald Sea","PMS_Code": "3288C","RGB_Code": "rgb(4, 99, 84)","Customer ": "Columbia","Cust_Thread_Code": "3288C","Cust_Thread_Discription": "Emerald Sea","Cust_RGB_Code": "rgb(0,119,99)"},'+
     '{"Binated_Thread_Code": "B-1286","Thread_Discription": "Mist","PMS_Code": "Cool Grey 1C","RGB_Code": "rgb(208, 206, 202)","Customer ": "Columbia","Cust_Thread_Code": "Cool Grey 1C","Cust_Thread_Discription": "Mist","Cust_RGB_Code": "rgb(207,205,202)"},'+
     '{"Binated_Thread_Code": "B-1287","Thread_Discription": "Gun Metal","PMS_Code": "10190C","RGB_Code": "rgb(107, 106, 106)","Customer ": "Columbia","Cust_Thread_Code": "10190C","Cust_Thread_Discription": "Gun Metal","Cust_RGB_Code": "rgb(107,104,105)"},'+
     '{"Binated_Thread_Code": "B-1288","Thread_Discription": "Shark","PMS_Code": "423C","RGB_Code": "rgb(123, 122, 119)","Customer ": "Columbia","Cust_Thread_Code": "423C","Cust_Thread_Discription": "Shark","Cust_RGB_Code": "rgb(122,121,118)"},'+
     '{"Binated_Thread_Code": "B-1289","Thread_Discription": "Silver Mound","PMS_Code": "631C","RGB_Code": "rgb(73, 152, 164)","Customer ": "Columbia","Cust_Thread_Code": "631C","Cust_Thread_Discription": "Silver Mound","Cust_RGB_Code": "rgb(70,152,165)"},'+
     '{"Binated_Thread_Code": "B-1290","Thread_Discription": "Mallard Teal","PMS_Code": "3165C","RGB_Code": "rgb(23, 75, 76)","Customer ": "Columbia","Cust_Thread_Code": "3165C","Cust_Thread_Discription": "Mallard Teal","Cust_RGB_Code": "rgb(21,75,75)"},'+
     '{"Binated_Thread_Code": "B-1291","Thread_Discription": "Marlin","PMS_Code": "315C","RGB_Code": "rgb(9, 102, 116)","Customer ": "Columbia","Cust_Thread_Code": "315C","Cust_Thread_Discription": "Marlin","Cust_RGB_Code": "rgb(0,100,115)"},'+
     '{"Binated_Thread_Code": "B-1292","Thread_Discription": "Limestone","PMS_Code": "317C","RGB_Code": "rgb(143, 196, 196)","Customer ": "Columbia","Cust_Thread_Code": "317C","Cust_Thread_Discription": "Limestone","Cust_RGB_Code": "rgb(142,196,195)"},'+
     '{"Binated_Thread_Code": "B-1293","Thread_Discription": "Malachite","PMS_Code": "322C","RGB_Code": "rgb(2, 110, 113)","Customer ": "Columbia","Cust_Thread_Code": "322C","Cust_Thread_Discription": "Malachite","Cust_RGB_Code": "rgb(0,109,112)"},'+
     '{"Binated_Thread_Code": "B-1294","Thread_Discription": "Liberty","PMS_Code": "&nbsp;633C","RGB_Code": "rgb(7, 130, 155)","Customer ": "Columbia","Cust_Thread_Code": "&nbsp;633C","Cust_Thread_Discription": "Liberty","Cust_RGB_Code": "rgb(0,129,155)"},'+
     '{"Binated_Thread_Code": "B-1295","Thread_Discription": "Cyan","PMS_Code": "7460C","RGB_Code": "rgb(5, 141, 173)","Customer ": "Columbia","Cust_Thread_Code": "7460C","Cust_Thread_Discription": "Cyan","Cust_RGB_Code": "rgb(0,140,172)"},'+
     '{"Binated_Thread_Code": "B-1296","Thread_Discription": "Deep Ocean","PMS_Code": "7469C","RGB_Code": "rgb(10, 97, 128)","Customer ": "Columbia","Cust_Thread_Code": "7469C","Cust_Thread_Discription": "Deep Ocean","Cust_RGB_Code": "rgb(0,95,126)"},'+
     '{"Binated_Thread_Code": "B-1297","Thread_Discription": "Calypso Blue","PMS_Code": "2193C","RGB_Code": "rgb(7, 114, 163)","Customer ": "Columbia","Cust_Thread_Code": "2193C","Cust_Thread_Discription": "Calypso Blue","Cust_RGB_Code": "rgb(0,113,163)"},'+
     '{"Binated_Thread_Code": "B-1298","Thread_Discription": "Tree Frog","PMS_Code": "3272C","RGB_Code": "rgb(5, 135, 123)","Customer ": "Columbia","Cust_Thread_Code": "3272C","Cust_Thread_Discription": "Tree Frog","Cust_RGB_Code": "rgb(0,134,122)"},'+
     '{"Binated_Thread_Code": "B-1299","Thread_Discription": "Green Turquoise","PMS_Code": "326C","RGB_Code": "rgb(0, 185, 172)","Customer ": "Columbia","Cust_Thread_Code": "326C","Cust_Thread_Discription": "Green Turquoise","Cust_RGB_Code": "rgb(0,139,135)"},'+
     '{"Binated_Thread_Code": "B-1301","Thread_Discription": "Jade","PMS_Code": "2413C","RGB_Code": "rgb(53, 168, 125)","Customer ": "Columbia","Cust_Thread_Code": "2413C","Cust_Thread_Discription": "Jade","Cust_RGB_Code": "rgb(56,168,125)"},'+
     '{"Binated_Thread_Code": "B-1302","Thread_Discription": "Spearmint","PMS_Code": "353C","RGB_Code": "rgb(126, 200, 149)","Customer ": "Columbia","Cust_Thread_Code": "353C","Cust_Thread_Discription": "Spearmint","Cust_RGB_Code": "rgb(122,206,150)"},'+
     '{"Binated_Thread_Code": "B-1303","Thread_Discription": "Fresh Oregano","PMS_Code": "5605C","RGB_Code": "rgb(55, 65, 52)","Customer ": "Columbia","Cust_Thread_Code": "5605C","Cust_Thread_Discription": "Fresh Oregano","Cust_RGB_Code": "rgb(54,64,51)"},'+
     '{"Binated_Thread_Code": "B-1304","Thread_Discription": "Ivy","PMS_Code": "7729C","RGB_Code": "rgb(18, 80, 65)","Customer ": "Columbia","Cust_Thread_Code": "7729C","Cust_Thread_Discription": "Ivy","Cust_RGB_Code": "rgb(14,78,63)"},'+
     '{"Binated_Thread_Code": "B-1305","Thread_Discription": "Chamois","PMS_Code": "4545C","RGB_Code": "rgb(194, 182, 152)","Customer ": "Columbia","Cust_Thread_Code": "4545C","Cust_Thread_Discription": "Chamois","Cust_RGB_Code": "rgb(192,176,133)"},'+
     '{"Binated_Thread_Code": "B-1306","Thread_Discription": "Army Green","PMS_Code": "2327C","RGB_Code": "rgb(125, 122, 103)","Customer ": "Columbia","Cust_Thread_Code": "2327C ","Cust_Thread_Discription": "Army Green","Cust_RGB_Code": "rgb(123,121,102)"},'+
     '{"Binated_Thread_Code": "B-1307","Thread_Discription": "Raspberry Punch","PMS_Code": "Red 032 C","RGB_Code": "rgb(218, 71, 82)","Customer ": "Columbia","Cust_Thread_Code": "Red 032 C","Cust_Thread_Discription": "Raspberry Punch","Cust_RGB_Code": "rgb(218,71,81)"},'+
     '{"Binated_Thread_Code": "B-1308","Thread_Discription": "Army Fatigues","PMS_Code": "5753C ","RGB_Code": "rgb(108, 110, 91)","Customer ": "Columbia","Cust_Thread_Code": "5753C","Cust_Thread_Discription": "Army Fatigues","Cust_RGB_Code": "rgb(123,121,102)"},'+
     '{"Binated_Thread_Code": "B-1309","Thread_Discription": "Dahlia","PMS_Code": "211C","RGB_Code": "rgb(215, 99, 154)","Customer ": "Columbia","Cust_Thread_Code": "211C","Cust_Thread_Discription": "Dahlia","Cust_RGB_Code": "rgb(214,99,153)"},'+
     '{"Binated_Thread_Code": "B-1310","Thread_Discription": "Magenta","PMS_Code": "2062C","RGB_Code": "rgb(151, 61, 116)","Customer ": "Columbia","Cust_Thread_Code": "2062C","Cust_Thread_Discription": "Magenta","Cust_RGB_Code": "rgb(149,60,115)"},'+
     '{"Binated_Thread_Code": "B-1311","Thread_Discription": "Mystic Lavender","PMS_Code": "2073C","RGB_Code": "rgb(142, 140, 184)","Customer ": "Columbia","Cust_Thread_Code": "2073C","Cust_Thread_Discription": "Mystic Lavender","Cust_RGB_Code": "rgb(142,139,184)"},'+
     '{"Binated_Thread_Code": "B-1312","Thread_Discription": "Purple Grape","PMS_Code": "7677C","RGB_Code": "rgb(89, 74, 112)","Customer ": "Columbia","Cust_Thread_Code": "7677C","Cust_Thread_Discription": "Purple Grape","Cust_RGB_Code": "rgb(88,73,111)"},'+
     '{"Binated_Thread_Code": "B-1313","Thread_Discription": "Berry Blast","PMS_Code": "2627C","RGB_Code": "rgb(69, 54, 85)","Customer ": "Columbia","Cust_Thread_Code": "2627C","Cust_Thread_Discription": "Berry Blast","Cust_RGB_Code": "rgb(68,53,85)"},'+
     '{"Binated_Thread_Code": "B-1315","Thread_Discription": "Pink Grapefruit","PMS_Code": "1765C ","RGB_Code": "rgb(229, 157, 167)","Customer ": "Columbia","Cust_Thread_Code": "1765C ","Cust_Thread_Discription": "Pink Grapefruit","Cust_RGB_Code": "rgb(228,156,167)"},'+
     '{"Binated_Thread_Code": "B-1317","Thread_Discription": "Blush Pink","PMS_Code": "5035C ","RGB_Code": "rgb(234, 160, 156)","Customer ": "Columbia","Cust_Thread_Code": "5035C ","Cust_Thread_Discription": "Blush Pink","Cust_RGB_Code": "rgb(233,160,155)"},'+
     '{"Binated_Thread_Code": "B-1318","Thread_Discription": "Graphite","PMS_Code": "Black C","RGB_Code": "rgb(67, 66, 72)","Customer ": "Columbia","Cust_Thread_Code": "Black C","Cust_Thread_Discription": "Graphite","Cust_RGB_Code": "rgb(59,52,49)"},'+
     '{"Binated_Thread_Code": "B-1319","Thread_Discription": "Iris","PMS_Code": "2060C","RGB_Code": "rgb(163, 103, 138)","Customer ": "Columbia","Cust_Thread_Code": "2060C","Cust_Thread_Discription": "Iris","Cust_RGB_Code": "rgb(162,102,137)"},'+
     '{"Binated_Thread_Code": "B-1320","Thread_Discription": "Purple Heart","PMS_Code": "519C","RGB_Code": "rgb(91, 65, 92)","Customer ": "Columbia","Cust_Thread_Code": "519C","Cust_Thread_Discription": "Purple Heart","Cust_RGB_Code": "rgb(90,64,92)"},'+
     '{"Binated_Thread_Code": "B-1321","Thread_Discription": "Bubble Gum Pink","PMS_Code": "2037C","RGB_Code": "rgb(225, 147, 184)","Customer ": "Columbia","Cust_Thread_Code": "2037C","Cust_Thread_Discription": "Bubble Gum Pink","Cust_RGB_Code": "rgb(225,146,184)"},'+
     '{"Binated_Thread_Code": "B-1322","Thread_Discription": "Royal Purple","PMS_Code": "2685C","RGB_Code": "rgb(66, 64, 122)","Customer ": "Columbia","Cust_Thread_Code": "2685C","Cust_Thread_Discription": "Royal Purple","Cust_RGB_Code": "rgb(65,63,121)"},'+
     '{"Binated_Thread_Code": "B-1323","Thread_Discription": "Golden Wheat","PMS_Code": "458C","RGB_Code": "rgb(206, 175, 77)","Customer ": "Columbia","Cust_Thread_Code": "458C","Cust_Thread_Discription": "Golden Wheat","Cust_RGB_Code": "rgb(205,175,76)"},'+
     '{"Binated_Thread_Code": "B-1328","Thread_Discription": "Buckskin","PMS_Code": "4725C","RGB_Code": "rgb(153, 126, 111)","Customer ": "Columbia","Cust_Thread_Code": "4725C","Cust_Thread_Discription": "Buckskin","Cust_RGB_Code": "rgb(152,125,110)"},'+
     '{"Binated_Thread_Code": "B-1329","Thread_Discription": "Toasted Marshmellow","PMS_Code": "7614C","RGB_Code": "rgb(126, 97, 85)","Customer ": "Columbia","Cust_Thread_Code": "7614C","Cust_Thread_Discription": "Toasted Marshmellow","Cust_RGB_Code": "rgb(124,96,84)"},'+
     '{"Binated_Thread_Code": "B-1330","Thread_Discription": "Bahamas Blue","PMS_Code": "2725C","RGB_Code": "rgb(82, 95, 153)","Customer ": "Columbia","Cust_Thread_Code": "2725C","Cust_Thread_Discription": "Bahamas Blue","Cust_RGB_Code": "rgb(81,94,151)"},'+
     '{"Binated_Thread_Code": "B-1334","Thread_Discription": "Purple Passion","PMS_Code": "255C","RGB_Code": "rgb(98, 51, 103)","Customer ": "Columbia","Cust_Thread_Code": "255C","Cust_Thread_Discription": "Purple Passion","Cust_RGB_Code": "rgb(97,50,103)"},'+
     '{"Binated_Thread_Code": "B-1335","Thread_Discription": "Dark Periwinkle","PMS_Code": "7456C","RGB_Code": "rgb(70, 102, 163)","Customer ": "Columbia","Cust_Thread_Code": "7456C","Cust_Thread_Discription": "Dark Periwinkle","Cust_RGB_Code": "rgb(69,101,162)"},'+
     '{"Binated_Thread_Code": "B-1336","Thread_Discription": "Saddle Brown","PMS_Code": "10379C","RGB_Code": "rgb(111, 90, 83)","Customer ": "Columbia","Cust_Thread_Code": "10379C","Cust_Thread_Discription": "Saddle Brown","Cust_RGB_Code": "rgb(110,88,81)"},'+
     '{"Binated_Thread_Code": "B-1337","Thread_Discription": "Gray Mist","PMS_Code": 1337,"RGB_Code": "rgb(152, 154, 135)","Customer ": "Columbia","Cust_Thread_Code": 1337,"Cust_Thread_Discription": "Gray Mist","Cust_RGB_Code": "rgb(153,154,135)"},'+
     '{"Binated_Thread_Code": "B-1338","Thread_Discription": "Nutmeg","PMS_Code": "872C","RGB_Code": "rgb(171, 143, 106)","Customer ": "Columbia","Cust_Thread_Code": "872C","Cust_Thread_Discription": "Nutmeg","Cust_RGB_Code": "rgb(171,143,106)"},'+
     '{"Binated_Thread_Code": "B-1339","Thread_Discription": "Spanish Moss","PMS_Code": "7535C","RGB_Code": "rgb(166, 164, 148)","Customer ": "Columbia","Cust_Thread_Code": "7535C","Cust_Thread_Discription": "Spanish Moss","Cust_RGB_Code": "rgb(167,165,149)"},'+
     '{"Binated_Thread_Code": "B-1342","Thread_Discription": "Fawn","PMS_Code": "7514C","RGB_Code": "rgb(191, 153, 136)","Customer ": "Columbia","Cust_Thread_Code": "7514C","Cust_Thread_Discription": "Fawn","Cust_RGB_Code": "rgb(193,153,136)"},'+
     '{"Binated_Thread_Code": "B-1343","Thread_Discription": "Grape Juice","PMS_Code": "2755C","RGB_Code": "rgb(54, 57, 99)","Customer ": "Columbia","Cust_Thread_Code": "2755C","Cust_Thread_Discription": "Grape Juice","Cust_RGB_Code": "rgb(53,56,98)"},'+
     '{"Binated_Thread_Code": "B-1344","Thread_Discription": "Camel","PMS_Code": "10356C","RGB_Code": "rgb(144, 114, 86)","Customer ": "Columbia","Cust_Thread_Code": "10356C","Cust_Thread_Discription": "Camel","Cust_RGB_Code": "rgb(143,113,84)"},'+
     '{"Binated_Thread_Code": "B-1348","Thread_Discription": "Antique Bronze","PMS_Code": "872C","RGB_Code": "rgb(122, 95, 62)","Customer ": "Columbia","Cust_Thread_Code": "872C","Cust_Thread_Discription": "Antique Bronze","Cust_RGB_Code": "rgb(171,143,106)"},'+
     '{"Binated_Thread_Code": "B-1349","Thread_Discription": "Palomino","PMS_Code": "127C","RGB_Code": "rgb(238, 206, 135)","Customer ": "Columbia","Cust_Thread_Code": "127C","Cust_Thread_Discription": "Palomino","Cust_RGB_Code": "rgb(237,206,136)"},'+
     '{"Binated_Thread_Code": "B-1350","Thread_Discription": "Citrus Green","PMS_Code": "10109C","RGB_Code": "rgb(180, 162, 68)","Customer ": "Columbia","Cust_Thread_Code": "10109C","Cust_Thread_Discription": "Citrus Green","Cust_RGB_Code": "rgb(181,163,72)"},'+
     '{"Binated_Thread_Code": "B-1351","Thread_Discription": "Alligator","PMS_Code": "3298C","RGB_Code": "rgb(23, 91, 75)","Customer ": "Columbia","Cust_Thread_Code": "3298C","Cust_Thread_Discription": "Alligator","Cust_RGB_Code": "rgb(20,90,74)"},'+
     '{"Binated_Thread_Code": "B-1352","Thread_Discription": "Old Gold","PMS_Code": "7753C","RGB_Code": "rgb(183, 139, 45)","Customer ": "Columbia","Cust_Thread_Code": "7753C","Cust_Thread_Discription": "Old Gold","Cust_RGB_Code": "rgb(184,139,48)"},'+
     '{"Binated_Thread_Code": "B-1353","Thread_Discription": "Blue Spruce","PMS_Code": "646C","RGB_Code": "rgb(81, 109, 129)","Customer ": "Columbia","Cust_Thread_Code": "646C","Cust_Thread_Discription": "Blue Spruce","Cust_RGB_Code": "rgb(64,116,151)"},'+
     '{"Binated_Thread_Code": "B-1354","Thread_Discription": "Watermelon","PMS_Code": "191C","RGB_Code": "rgb(204, 77, 109)","Customer ": "Columbia","Cust_Thread_Code": "191C","Cust_Thread_Discription": "Watermelon","Cust_RGB_Code": "rgb(204,75,109)"},'+
     '{"Binated_Thread_Code": "B-1356","Thread_Discription": "Pink Pearl","PMS_Code": "&nbsp;685C","RGB_Code": "rgb(181, 153, 161)","Customer ": "Columbia","Cust_Thread_Code": "&nbsp;685C","Cust_Thread_Discription": "Pink Pearl","Cust_RGB_Code": "rgb(181,153,161)"},'+
     '{"Binated_Thread_Code": "B-1357","Thread_Discription": "Dark Seaweed","PMS_Code": "7498C","RGB_Code": "rgb(73, 71, 53)","Customer ": "Columbia","Cust_Thread_Code": "7498C","Cust_Thread_Discription": "Dark Seaweed","Cust_RGB_Code": "rgb(72,70,52)"},'+
     '{"Binated_Thread_Code": "B-1358","Thread_Discription": "Cedar Bark","PMS_Code": "1817C","RGB_Code": "rgb(120, 79, 79)","Customer ": "Columbia","Cust_Thread_Code": "1817C","Cust_Thread_Discription": "Cedar Bark","Cust_RGB_Code": "rgb(119,77,77)"},'+
     '{"Binated_Thread_Code": "B-1359","Thread_Discription": "Golden Nugget","PMS_Code": "7409C","RGB_Code": "rgb(204, 150, 44)","Customer ": "Columbia","Cust_Thread_Code": "7409C","Cust_Thread_Discription": "Golden Nugget","Cust_RGB_Code": "rgb(207,152,45)"},'+
     '{"Binated_Thread_Code": "B-1360","Thread_Discription": "Dusty Blue","PMS_Code": "5415C","RGB_Code": "rgb(118, 145, 161)","Customer ": "Columbia","Cust_Thread_Code": "5415C","Cust_Thread_Discription": "Dusty Blue","Cust_RGB_Code": "rgb(118,145,161)"},'+
     '{"Binated_Thread_Code": "B-1361","Thread_Discription": "Moody Gray","PMS_Code": "447C","RGB_Code": "rgb(95, 97, 95)","Customer ": "Columbia","Cust_Thread_Code": "447C","Cust_Thread_Discription": "Moody Gray","Cust_RGB_Code": "rgb(94,96,94)"},'+
     '{"Binated_Thread_Code": "B-1362","Thread_Discription": "Slate Purple","PMS_Code": "2363C","RGB_Code": "rgb(83, 77, 96)","Customer ": "Columbia","Cust_Thread_Code": "2363C","Cust_Thread_Discription": "Slate Purple","Cust_RGB_Code": "rgb(81,76,94)"},'+
     '{"Binated_Thread_Code": "B-1363","Thread_Discription": "Steel Lavender","PMS_Code": "10251C","RGB_Code": "rgb(122, 129, 146)","Customer ": "Columbia","Cust_Thread_Code": "10251C","Cust_Thread_Discription": "Steel Lavender","Cust_RGB_Code": "rgb(121,129,145)"},'+
     '{"Binated_Thread_Code": "B-1364","Thread_Discription": "Storm Sky Blue","PMS_Code": "2139C","RGB_Code": "rgb(73, 90, 110)","Customer ": "Columbia","Cust_Thread_Code": "2139C","Cust_Thread_Discription": "Storm Sky Blue","Cust_RGB_Code": "rgb(71,89,110)"},'+
     '{"Binated_Thread_Code": "B-1365","Thread_Discription": "Dusty Plum","PMS_Code": "2111C","RGB_Code": "rgb(66, 74, 96)","Customer ": "Columbia","Cust_Thread_Code": "2111C","Cust_Thread_Discription": "Dusty Plum","Cust_RGB_Code": "rgb(64,73,95)"},'+
     '{"Binated_Thread_Code": "B-1366","Thread_Discription": "Dark Purple Iris","PMS_Code": "2755C","RGB_Code": "rgb(43, 54, 107)","Customer ": "Columbia","Cust_Thread_Code": "2755C","Cust_Thread_Discription": "Dark Purple Iris","Cust_RGB_Code": "rgb(53,56,98)"},'+
     '{"Binated_Thread_Code": "B-1367","Thread_Discription": "Black Pearl","PMS_Code": "533C","RGB_Code": "rgb(45, 48, 56)","Customer ": "Columbia","Cust_Thread_Code": "533C","Cust_Thread_Discription": "Black Pearl","Cust_RGB_Code": "rgb(45,47,55)"},'+
     '{"Binated_Thread_Code": "B-1368","Thread_Discription": "Night Sky","PMS_Code": "533C","RGB_Code": "rgb(43, 56, 75)","Customer ": "Columbia","Cust_Thread_Code": "533C","Cust_Thread_Discription": "Night Sky","Cust_RGB_Code": "rgb(45,47,55)"},'+
     '{"Binated_Thread_Code": "B-1369","Thread_Discription": "Fresh Pine","PMS_Code": "7740C","RGB_Code": "rgb(60, 123, 63)","Customer ": "Columbia","Cust_Thread_Code": "7740C","Cust_Thread_Discription": "Fresh Pine","Cust_RGB_Code": "rgb(58,121,62)"},'+
     '{"Binated_Thread_Code": "B-1370","Thread_Discription": "Fir","PMS_Code": "7484C","RGB_Code": "rgb(37, 80, 60)","Customer ": "Columbia","Cust_Thread_Code": "7484C","Cust_Thread_Discription": "Fir","Cust_RGB_Code": "rgb(35,79,59)"},'+
     '{"Binated_Thread_Code": "B-1371","Thread_Discription": "Deep Sea","PMS_Code": "3292C","RGB_Code": "rgb(35, 85, 79)","Customer ": "Columbia","Cust_Thread_Code": "3292C","Cust_Thread_Discription": "Deep Sea","Cust_RGB_Code": "rgb(32,84,78)"},'+
     '{"Binated_Thread_Code": "B-1372","Thread_Discription": "Honey","PMS_Code": "1355C","RGB_Code": "rgb(240, 167, 85)","Customer ": "Columbia","Cust_Thread_Code": "1355C","Cust_Thread_Discription": "Honey","Cust_RGB_Code": "rgb(240,166,83)"},'+
     '{"Binated_Thread_Code": "B-1374","Thread_Discription": "Maroon","PMS_Code": "1817C","RGB_Code": "rgb(97, 46, 50)","Customer ": "Columbia","Cust_Thread_Code": "1817C","Cust_Thread_Discription": "Maroon","Cust_RGB_Code": "rgb(119,77,77)"},'+
     '{"Binated_Thread_Code": "B-1375","Thread_Discription": "Work Shirt","PMS_Code": "7688C","RGB_Code": "rgb(64, 126, 159)","Customer ": "Columbia","Cust_Thread_Code": "7688C","Cust_Thread_Discription": "Work Shirt","Cust_RGB_Code": "rgb(60,125,158)"},'+
     '{"Binated_Thread_Code": "B-1376","Thread_Discription": "Space Blue","PMS_Code": "302C","RGB_Code": "rgb(36, 79, 104)","Customer ": "Columbia","Cust_Thread_Code": "302C","Cust_Thread_Discription": "Space Blue","Cust_RGB_Code": "rgb(35,77,103)"},'+
     '{"Binated_Thread_Code": "B-1377","Thread_Discription": "Kiwi","PMS_Code": "361C","RGB_Code": "rgb(113, 172, 107)","Customer ": "Columbia","Cust_Thread_Code": "361C","Cust_Thread_Discription": "Kiwi","Cust_RGB_Code": "rgb(69,150,69)"},'+
     '{"Binated_Thread_Code": "B-1378","Thread_Discription": "Paprika","PMS_Code": "2028C","RGB_Code": "rgb(221, 59, 39)","Customer ": "Columbia","Cust_Thread_Code": "2028C","Cust_Thread_Discription": "Paprika","Cust_RGB_Code": "rgb(221,56,35)"},'+
     '{"Binated_Thread_Code": "B-1379","Thread_Discription": "Mandarin","PMS_Code": "179C","RGB_Code": "rgb(225, 85, 68)","Customer ": "Columbia","Cust_Thread_Code": "179C","Cust_Thread_Discription": "Mandarin","Cust_RGB_Code": "rgb(225,84,69)"},'+
     '{"Binated_Thread_Code": "B-1380","Thread_Discription": "Oasis","PMS_Code": "2399C","RGB_Code": "rgb(0, 154, 135)","Customer ": "Columbia","Cust_Thread_Code": "2399C","Cust_Thread_Discription": "Oasis","Cust_RGB_Code": "rgb(0,153,134)"},'+
     '{"Binated_Thread_Code": "B-1381","Thread_Discription": "Ripe Raspberry","PMS_Code": "7420C","RGB_Code": "rgb(141, 41, 67)","Customer ": "Columbia","Cust_Thread_Code": "7420C","Cust_Thread_Discription": "Ripe Raspberry","Cust_RGB_Code": "rgb(140,40,66)"},'+
     '{"Binated_Thread_Code": "B-1382","Thread_Discription": "Colonial Rose","PMS_Code": "7428C","RGB_Code": "rgb(101, 62, 72)","Customer ": "Columbia","Cust_Thread_Code": "7428C","Cust_Thread_Discription": "Colonial Rose","Cust_RGB_Code": "rgb(101,61,71)"},'+
     '{"Binated_Thread_Code": "B-1383","Thread_Discription": "Pink Pansy","PMS_Code": "220C","RGB_Code": "rgb(157, 30, 85)","Customer ": "Columbia","Cust_Thread_Code": "220C","Cust_Thread_Discription": "Pink Pansy","Cust_RGB_Code": "rgb(156,31,84)"},'+
     '{"Binated_Thread_Code": "B-1384","Thread_Discription": "Merlot","PMS_Code": "7638C","RGB_Code": "rgb(112, 45, 57)","Customer ": "Columbia","Cust_Thread_Code": "7638C","Cust_Thread_Discription": "Merlot","Cust_RGB_Code": "rgb(110,43,56)"},'+
     '{"Binated_Thread_Code": "B-1385","Thread_Discription": "Garnet","PMS_Code": "209C","RGB_Code": "rgb(97, 38, 52)","Customer ": "Columbia","Cust_Thread_Code": "209C","Cust_Thread_Discription": "Garnet","Cust_RGB_Code": "rgb(97,37,51)"},'+
     '{"Binated_Thread_Code": "B-1386","Thread_Discription": "Eggplant","PMS_Code": "7644C","RGB_Code": "rgb(77, 49, 61)","Customer ": "Columbia","Cust_Thread_Code": "7644C","Cust_Thread_Discription": "Eggplant","Cust_RGB_Code": "rgb(77,48,61)"},'+
     '{"Binated_Thread_Code": "B-1387","Thread_Discription": "Berry Frost","PMS_Code": "667C","RGB_Code": "rgb(117, 105, 127)","Customer ": "Columbia","Cust_Thread_Code": "667C","Cust_Thread_Discription": "Berry Frost","Cust_RGB_Code": "rgb(116,103,126)"},'+
     '{"Binated_Thread_Code": "B-1388","Thread_Discription": "Plum","PMS_Code": "7652C","RGB_Code": "rgb(93, 55, 82)","Customer ": "Columbia","Cust_Thread_Code": "7652C","Cust_Thread_Discription": "Plum","Cust_RGB_Code": "rgb(92,53,81)"},'+
     '{"Binated_Thread_Code": "B-1389","Thread_Discription": "Bordeaux","PMS_Code": "7435C","RGB_Code": "rgb(117, 47, 75)","Customer ": "Columbia","Cust_Thread_Code": "7435C","Cust_Thread_Discription": "Bordeaux","Cust_RGB_Code": "rgb(115,46,74)"},'+
     '{"Binated_Thread_Code": "B-1390","Thread_Discription": "Forest Green","PMS_Code": "3305C","RGB_Code": "rgb(45, 70, 62)","Customer ": "Columbia","Cust_Thread_Code": "3305C","Cust_Thread_Discription": "Forest Green","Cust_RGB_Code": "rgb(44,69,61)"},'+
     '{"Binated_Thread_Code": "B-1391","Thread_Discription": "Spruce Green","PMS_Code": "5545C","RGB_Code": "rgb(80, 108, 99)","Customer ": "Columbia","Cust_Thread_Code": "5545C","Cust_Thread_Discription": "Spruce Green","Cust_RGB_Code": "rgb(78,107,97)"},'+
     '{"Binated_Thread_Code": "B-1392","Thread_Discription": "Silver Sage","PMS_Code": "5626C","RGB_Code": "rgb(108, 123, 107)","Customer ": "Columbia","Cust_Thread_Code": "5626C","Cust_Thread_Discription": "Silver Sage","Cust_RGB_Code": "rgb(106,122,106)"},'+
     '{"Binated_Thread_Code": "B-1393","Thread_Discription": "Bass Green","PMS_Code": "5747C","RGB_Code": "rgb(66, 66, 55)","Customer ": "Columbia","Cust_Thread_Code": "5747C","Cust_Thread_Discription": "Bass Green","Cust_RGB_Code": "rgb(65,65,55)"},'+
     '{"Binated_Thread_Code": "B-1394","Thread_Discription": "Kale","PMS_Code": "5743C","RGB_Code": "rgb(81, 85, 69)","Customer ": "Columbia","Cust_Thread_Code": "5743C","Cust_Thread_Discription": "Kale","Cust_RGB_Code": "rgb(80,84,67)"},'+
     '{"Binated_Thread_Code": "B-1395","Thread_Discription": "Rosemary","PMS_Code": "5535C","RGB_Code": "rgb(62, 74, 64)","Customer ": "Columbia","Cust_Thread_Code": "5535C","Cust_Thread_Discription": "Rosemary","Cust_RGB_Code": "rgb(61,73,63)"},'+
     '{"Binated_Thread_Code": "B-1396","Thread_Discription": "Dark Sage","PMS_Code": "5615C","RGB_Code": "rgb(82, 98, 81)","Customer ": "Columbia","Cust_Thread_Code": "5615C","Cust_Thread_Discription": "Dark Sage","Cust_RGB_Code": "rgb(81,97,80)"},'+
     '{"Binated_Thread_Code": "B-1397","Thread_Discription": "Evergreen","PMS_Code": "3305C","RGB_Code": "rgb(35, 70, 60)","Customer ": "Columbia","Cust_Thread_Code": "3305C","Cust_Thread_Discription": "Evergreen","Cust_RGB_Code": "rgb(44,69,61)"},'+
     '{"Binated_Thread_Code": "B-1405","Thread_Discription": "Goose Gray","PMS_Code": "10102C","RGB_Code": "rgb(176, 179, 166)","Customer ": "Columbia","Cust_Thread_Code": "10102C","Cust_Thread_Discription": "Goose Gray","Cust_RGB_Code": "rgb(176,179,166)"},'+
     '{"Binated_Thread_Code": "B-1406","Thread_Discription": "Dark Camo Green","PMS_Code": "7764C","RGB_Code": "rgb(79, 79, 55)","Customer ": "Columbia","Cust_Thread_Code": "7764C","Cust_Thread_Discription": "Dark Camo Green","Cust_RGB_Code": "rgb(79,79,55)"},'+
     '{"Binated_Thread_Code": "B-1410","Thread_Discription": "Ivory","PMS_Code": "Cool Grey 1C","RGB_Code": "rgb(218, 219, 212)","Customer ": "Columbia","Cust_Thread_Code": "Cool Grey 1C","Cust_Thread_Discription": "Ivory","Cust_RGB_Code": "rgb(207,205,202)"},'+
     '{"Binated_Thread_Code": "B-1411","Thread_Discription": "Silver","PMS_Code": "429C","RGB_Code": "rgb(184, 192, 195)","Customer ": "Columbia","Cust_Thread_Code": "429C","Cust_Thread_Discription": "Silver","Cust_RGB_Code": "rgb(163,175,179)"},'+
     '{"Binated_Thread_Code": "B-1412","Thread_Discription": "Violet","PMS_Code": "268C","RGB_Code": "rgb(59, 46, 97)","Customer ": "Columbia","Cust_Thread_Code": "268C","Cust_Thread_Discription": "Violet","Cust_RGB_Code": "rgb(59,46,97)"},'+
     '{"Binated_Thread_Code": "B-1415","Thread_Discription": "Battleship","PMS_Code": "430C","RGB_Code": "rgb(104, 113, 112)","Customer ": "Columbia","Cust_Thread_Code": "430C","Cust_Thread_Discription": "Battleship","Cust_RGB_Code": "rgb(104,113,112)"},'+
     '{"Binated_Thread_Code": "B-1421","Thread_Discription": "Basket Ball","PMS_Code": "7580C","RGB_Code": "rgb(166, 70, 36)","Customer ": "Columbia","Cust_Thread_Code": "7580C","Cust_Thread_Discription": "Basket Ball","Cust_RGB_Code": "rgb(166,70,36)"},'+
     '{"Binated_Thread_Code": "B-1422","Thread_Discription": "African Violet","PMS_Code": "268C","RGB_Code": "rgb(74, 53, 121)","Customer ": "Columbia","Cust_Thread_Code": "268C","Cust_Thread_Discription": "African Violet","Cust_RGB_Code": "rgb(59,46,97)"},'+
     '{"Binated_Thread_Code": "B-1425","Thread_Discription": "Pumpkin Spice","PMS_Code": "2012C","RGB_Code": "rgb(201, 125, 41)","Customer ": "Columbia","Cust_Thread_Code": "2012C","Cust_Thread_Discription": "Pumpkin Spice","Cust_RGB_Code": "rgb(201,125,41)"},'+
     '{"Binated_Thread_Code": "B-1428","Thread_Discription": "Rice","PMS_Code": "2324C","RGB_Code": "rgb(145, 133, 112)","Customer ": "Columbia","Cust_Thread_Code": "2324C","Cust_Thread_Discription": "Rice","Cust_RGB_Code": "rgb(145,133,112)"},'+
     '{"Binated_Thread_Code": "B-1430","Thread_Discription": "Dusky Mauve","PMS_Code": "438C","RGB_Code": "rgb(65, 58, 57)","Customer ": "Columbia","Cust_Thread_Code": "438C","Cust_Thread_Discription": "Dusky Mauve","Cust_RGB_Code": "rgb(65,58,57)"},'+
     '{"Binated_Thread_Code": "B-1431","Thread_Discription": "Bittersweet Chocolate","PMS_Code": "440C","RGB_Code": "rgb(43, 44, 43)","Customer ": "Columbia","Cust_Thread_Code": "440C","Cust_Thread_Discription": "Bittersweet Chocolate","Cust_RGB_Code": "rgb(43,44,43)"},'+
     '{"Binated_Thread_Code": "B-1437","Thread_Discription": "Summer Sun","PMS_Code": "2010C","RGB_Code": "rgb(250, 167, 27)","Customer ": "Columbia","Cust_Thread_Code": "2010C","Cust_Thread_Discription": "Summer Sun","Cust_RGB_Code": "rgb(250,167,27)"},'+
     '{"Binated_Thread_Code": "B-1445","Thread_Discription": "Cappuccino","PMS_Code": "497C","RGB_Code": "rgb(66, 46, 41)","Customer ": "Columbia","Cust_Thread_Code": "497C","Cust_Thread_Discription": "Cappuccino","Cust_RGB_Code": "rgb(66,46,41)"},'+
     '{"Binated_Thread_Code": "B-1447","Thread_Discription": "Cinnamon Candy","PMS_Code": "199C","RGB_Code": "rgb(175, 35, 37)","Customer ": "Columbia","Cust_Thread_Code": "199C","Cust_Thread_Discription": "Cinnamon Candy","Cust_RGB_Code": "rgb(175,35,37)"},'+
     '{"Binated_Thread_Code": "B-1448","Thread_Discription": "Julep","PMS_Code": "2281C","RGB_Code": "rgb(202, 217, 134)","Customer ": "Columbia","Cust_Thread_Code": "2281C","Cust_Thread_Discription": "Julep","Cust_RGB_Code": "rgb(202,217,134)"},'+
     '{"Binated_Thread_Code": "B-1451","Thread_Discription": "Celery","PMS_Code": "577C","RGB_Code": "rgb(139, 160, 92)","Customer ": "Columbia","Cust_Thread_Code": "577C","Cust_Thread_Discription": "Celery","Cust_RGB_Code": "rgb(139,160,92)"},'+
     '{"Binated_Thread_Code": "B-1460","Thread_Discription": "Ecru","PMS_Code": "&nbsp;7632C","RGB_Code": "rgb(206, 201, 192)","Customer ": "Columbia","Cust_Thread_Code": "&nbsp;7632C","Cust_Thread_Discription": "Ecru","Cust_RGB_Code": "rgb(206,201,192)"},'+
     '{"Binated_Thread_Code": "B-1461","Thread_Discription": "Iron Gray","PMS_Code": "444C","RGB_Code": "rgb(98, 112, 111)","Customer ": "Columbia","Cust_Thread_Code": "444C","Cust_Thread_Discription": "Iron Gray","Cust_RGB_Code": "rgb(98,112,111)"},'+
     '{"Binated_Thread_Code": "B-1463","Thread_Discription": "Willow","PMS_Code": "7537C","RGB_Code": "rgb(135, 139, 128)","Customer ": "Columbia","Cust_Thread_Code": "7537C","Cust_Thread_Discription": "Willow","Cust_RGB_Code": "rgb(135,139,128)"},'+
     '{"Binated_Thread_Code": "B-1469","Thread_Discription": "Granny Smith","PMS_Code": "376C","RGB_Code": "rgb(122, 159, 62)","Customer ": "Columbia","Cust_Thread_Code": "376C","Cust_Thread_Discription": "Granny Smith","Cust_RGB_Code": "rgb(122,159,62)"},'+
     '{"Binated_Thread_Code": "B-1470","Thread_Discription": "Vegas Gold","PMS_Code": "7508C","RGB_Code": "rgb(213, 173, 105)","Customer ": "Columbia","Cust_Thread_Code": "7508C","Cust_Thread_Discription": "Vegas Gold","Cust_RGB_Code": "rgb(213,173,105)"},'+
     '{"Binated_Thread_Code": "B-1476","Thread_Discription": "Independence Blue","PMS_Code": "7692C","RGB_Code": "rgb(0, 68, 102)","Customer ": "Columbia","Cust_Thread_Code": "7692C","Cust_Thread_Discription": "Independence Blue","Cust_RGB_Code": "rgb(0,68,102)"},'+
     '{"Binated_Thread_Code": "B-1477","Thread_Discription": "Salsa","PMS_Code": "2034C","RGB_Code": "rgb(188, 55, 39)","Customer ": "Columbia","Cust_Thread_Code": "2034C","Cust_Thread_Discription": "Salsa","Cust_RGB_Code": "rgb(188,55,39)"},'+
     '{"Binated_Thread_Code": "B-1478","Thread_Discription": "Orange Peel","PMS_Code": "2018C","RGB_Code": "rgb(242, 110, 36)","Customer ": "Columbia","Cust_Thread_Code": "2018C","Cust_Thread_Discription": "Orange Peel","Cust_RGB_Code": "rgb(242,110,36)"},'+
     '{"Binated_Thread_Code": "B-1479","Thread_Discription": "Emerald Isle","PMS_Code": "7732C","RGB_Code": "rgb(32, 106, 60)","Customer ": "Columbia","Cust_Thread_Code": "7732C","Cust_Thread_Discription": "Emerald Isle","Cust_RGB_Code": "rgb(32,106,60)"},'+
     '{"Binated_Thread_Code": "B-1480","Thread_Discription": "Rain Forest","PMS_Code": "341C","RGB_Code": "rgb(0, 107, 72)","Customer ": "Columbia","Cust_Thread_Code": "341C","Cust_Thread_Discription": "Rain Forest","Cust_RGB_Code": "rgb(0,107,72)"},'+
     '{"Binated_Thread_Code": "B-1484","Thread_Discription": "Rhubarb","PMS_Code": "206C","RGB_Code": "rgb(183, 32, 50)","Customer ": "Columbia","Cust_Thread_Code": "206C","Cust_Thread_Discription": "Rhubarb","Cust_RGB_Code": "rgb(183,32,50)"},'+
     '{"Binated_Thread_Code": "B-1485","Thread_Discription": "Electric Red","PMS_Code": "185C","RGB_Code": "rgb(200, 37, 45)","Customer ": "Columbia","Cust_Thread_Code": "185C","Cust_Thread_Discription": "Electric Red","Cust_RGB_Code": "rgb(200,37,45)"},'+
     '{"Binated_Thread_Code": "B-1488","Thread_Discription": "Dark Magenta","PMS_Code": "7650C","RGB_Code": "rgb(96, 39, 79)","Customer ": "Columbia","Cust_Thread_Code": "7650C","Cust_Thread_Discription": "Dark Magenta","Cust_RGB_Code": "rgb(96,39,79)"},'+
     '{"Binated_Thread_Code": "B-1489","Thread_Discription": "Clover","PMS_Code": "575C","RGB_Code": "rgb(84, 102, 46)","Customer ": "Columbia","Cust_Thread_Code": "575C","Cust_Thread_Discription": "Clover","Cust_RGB_Code": "rgb(84,102,46)"},'+
     '{"Binated_Thread_Code": "B-1491","Thread_Discription": "Brass","PMS_Code": "7509C","RGB_Code": "rgb(167, 120, 48)","Customer ": "Columbia","Cust_Thread_Code": "7509C","Cust_Thread_Discription": "Brass","Cust_RGB_Code": "rgb(167,120,48)"},'+
     '{"Binated_Thread_Code": "B-1494","Thread_Discription": "Olive Green","PMS_Code": "7760C","RGB_Code": "rgb(124, 111, 55)","Customer ": "Columbia","Cust_Thread_Code": "7760C","Cust_Thread_Discription": "Olive Green","Cust_RGB_Code": "rgb(124,111,55)"},'+
     '{"Binated_Thread_Code": "B-1495","Thread_Discription": "Safari","PMS_Code": "574C","RGB_Code": "rgb(76, 84, 44)","Customer ": "Columbia","Cust_Thread_Code": "574C","Cust_Thread_Discription": "Safari","Cust_RGB_Code": "rgb(76,84,44)"},'+
     '{"Binated_Thread_Code": "B-1497","Thread_Discription": "Peacock Blue","PMS_Code": "2192C","RGB_Code": "rgb(6, 128, 175)","Customer ": "Columbia","Cust_Thread_Code": "2192C","Cust_Thread_Discription": "Peacock Blue","Cust_RGB_Code": "rgb(6,128,175)"},'+
     '{"Binated_Thread_Code": "B-1610","Thread_Discription": "Silver","PMS_Code": "5455C","RGB_Code": "rgb(183, 195, 197)","Customer ": "Columbia","Cust_Thread_Code": "5455C","Cust_Thread_Discription": "Silver","Cust_RGB_Code": "rgb(183,195,197)"},'+
     '{"Binated_Thread_Code": "B-1613","Thread_Discription": "Gull Gray","PMS_Code": "443C","RGB_Code": "rgb(147, 158, 158)","Customer ": "Columbia","Cust_Thread_Code": "443C","Cust_Thread_Discription": "Gull Gray","Cust_RGB_Code": "rgb(147,158,158)"},'+
     '{"Binated_Thread_Code": "B-1614","Thread_Discription": "Twister","PMS_Code": "425C","RGB_Code": "rgb(100, 104, 104)","Customer ": "Columbia","Cust_Thread_Code": "425C","Cust_Thread_Discription": "Twister","Cust_RGB_Code": "rgb(100,104,104)"},'+
     '{"Binated_Thread_Code": "B-1615","Thread_Discription": "Battleship","PMS_Code": "Cool Grey 10C","RGB_Code": "rgb(112, 118, 118)","Customer ": "Columbia","Cust_Thread_Code": "Cool Grey 10C","Cust_Thread_Discription": "Battleship","Cust_RGB_Code": "rgb(112,118,118)"},'+
     '{"Binated_Thread_Code": "B-1616","Thread_Discription": "Conch Shell","PMS_Code": "178C","RGB_Code": "rgb(225, 114, 117)","Customer ": "Columbia","Cust_Thread_Code": "178C","Cust_Thread_Discription": "Conch Shell","Cust_RGB_Code": "rgb(225,114,117)"},'+
     '{"Binated_Thread_Code": "B-1617","Thread_Discription": "Slate Purple","PMS_Code": "7448C","RGB_Code": "rgb(91, 87, 97)","Customer ": "Columbia","Cust_Thread_Code": "7448C","Cust_Thread_Discription": "Slate Purple","Cust_RGB_Code": "rgb(91,87,97)"},'+
     '{"Binated_Thread_Code": "B-1618","Thread_Discription": "Gun Powder","PMS_Code": "2706C","RGB_Code": "rgb(114, 115, 126)","Customer ": "Columbia","Cust_Thread_Code": "2706C","Cust_Thread_Discription": "Gun Powder","Cust_RGB_Code": "rgb(114,115,126)"},'+
     '{"Binated_Thread_Code": "B-1620","Thread_Discription": "Light Salmon","PMS_Code": "177C","RGB_Code": "rgb(244, 140, 152)","Customer ": "Columbia","Cust_Thread_Code": "177C","Cust_Thread_Discription": "Light Salmon","Cust_RGB_Code": "rgb(244,140,152)"},'+
     '{"Binated_Thread_Code": "B-1622","Thread_Discription": "Parchment","PMS_Code": "7401C","RGB_Code": "rgb(238, 223, 188)","Customer ": "Columbia","Cust_Thread_Code": "7401C","Cust_Thread_Discription": "Parchment","Cust_RGB_Code": "rgb(245,214,161)"},'+
     '{"Binated_Thread_Code": "B-1624","Thread_Discription": "Egg Yolk","PMS_Code": "130C","RGB_Code": "rgb(244, 168, 49)","Customer ": "Columbia","Cust_Thread_Code": "130C","Cust_Thread_Discription": "Egg Yolk","Cust_RGB_Code": "rgb(231,152,45)"},'+
     '{"Binated_Thread_Code": "B-1627","Thread_Discription": "Dusty Lilac","PMS_Code": "667C","RGB_Code": "rgb(122, 117, 139)","Customer ": "Columbia","Cust_Thread_Code": "667C","Cust_Thread_Discription": "Dusty Lilac","Cust_RGB_Code": "rgb(116,103,126)"},'+
     '{"Binated_Thread_Code": "B-1628","Thread_Discription": "Worn Denim","PMS_Code": "292C","RGB_Code": "rgb(126, 168, 191)","Customer ": "Columbia","Cust_Thread_Code": "292C","Cust_Thread_Discription": "Worn Denim","Cust_RGB_Code": "rgb(112,168,198)"},'+
     '{"Binated_Thread_Code": "B-1631","Thread_Discription": "Velvet Violet","PMS_Code": "2577C","RGB_Code": "rgb(142, 104, 157)","Customer ": "Columbia","Cust_Thread_Code": "2577C","Cust_Thread_Discription": "Velvet Violet","Cust_RGB_Code": "rgb(142,104,157)"},'+
     '{"Binated_Thread_Code": "B-1633","Thread_Discription": "Purple Passion","PMS_Code": "2613C","RGB_Code": "rgb(94, 42, 101)","Customer ": "Columbia","Cust_Thread_Code": "2613C","Cust_Thread_Discription": "Purple Passion","Cust_RGB_Code": "rgb(94,42,101)"},'+
     '{"Binated_Thread_Code": "B-1638","Thread_Discription": "Barn Red","PMS_Code": "7427C","RGB_Code": "rgb(134, 46, 51)","Customer ": "Columbia","Cust_Thread_Code": "7427C","Cust_Thread_Discription": "Barn Red","Cust_RGB_Code": "rgb(137,37,51)"},'+
     '{"Binated_Thread_Code": "B-1641","Thread_Discription": "Obsidian","PMS_Code": "432C","RGB_Code": "rgb(54, 58, 61)","Customer ": "Columbia","Cust_Thread_Code": "432C","Cust_Thread_Discription": "Obsidian","Cust_RGB_Code": "rgb(59,63,69)"},'+
     '{"Binated_Thread_Code": "B-1648","Thread_Discription": "Celery","PMS_Code": "576C","RGB_Code": "rgb(137, 155, 99)","Customer ": "Columbia","Cust_Thread_Code": "576C","Cust_Thread_Discription": "Celery","Cust_RGB_Code": "rgb(137,155,99)"},'+
     '{"Binated_Thread_Code": "B-1649","Thread_Discription": "Granny Smith","PMS_Code": "376C","RGB_Code": "rgb(116, 150, 61)","Customer ": "Columbia","Cust_Thread_Code": "376C","Cust_Thread_Discription": "Granny Smith","Cust_RGB_Code": "rgb(122,159,62)"},'+
     '{"Binated_Thread_Code": "B-1652","Thread_Discription": "Mermaid","PMS_Code": "323C","RGB_Code": "rgb(61, 122, 123)","Customer ": "Columbia","Cust_Thread_Code": "323C","Cust_Thread_Discription": "Mermaid","Cust_RGB_Code": "rgb(61,122,123)"},'+
     '{"Binated_Thread_Code": "B-1657","Thread_Discription": "Golden Oak","PMS_Code": "731C","RGB_Code": "rgb(136, 92, 68)","Customer ": "Columbia","Cust_Thread_Code": "731C","Cust_Thread_Discription": "Golden Oak","Cust_RGB_Code": "rgb(136,92,68)"},'+
     '{"Binated_Thread_Code": "B-1664","Thread_Discription": "Graphite","PMS_Code": "405C","RGB_Code": "rgb(98, 94, 87)","Customer ": "Columbia","Cust_Thread_Code": "405C","Cust_Thread_Discription": "Graphite","Cust_RGB_Code": "rgb(98,94,87)"},'+
     '{"Binated_Thread_Code": "B-1668","Thread_Discription": "Silver Sage","PMS_Code": "5615C","RGB_Code": "rgb(100, 119, 107)","Customer ": "Columbia","Cust_Thread_Code": "5615C","Cust_Thread_Discription": "Silver Sage","Cust_RGB_Code": "rgb(81,97,80)"},'+
     '{"Binated_Thread_Code": "B-1669","Thread_Discription": "Rosemary","PMS_Code": "553C","RGB_Code": "rgb(65, 77, 67)","Customer ": "Columbia","Cust_Thread_Code": "553C","Cust_Thread_Discription": "Rosemary","Cust_RGB_Code": "rgb(65,77,67)"},'+
     '{"Binated_Thread_Code": "B-1677","Thread_Discription": "Mallard Teal","PMS_Code": "309C","RGB_Code": "rgb(3, 78, 82)","Customer ": "Columbia","Cust_Thread_Code": "309C","Cust_Thread_Discription": "Mallard Teal","Cust_RGB_Code": "rgb(3,78,82)"},'+
     '{"Binated_Thread_Code": "B-1681","Thread_Discription": "Azalea","PMS_Code": "1945C","RGB_Code": "rgb(189, 57, 86)","Customer ": "Columbia","Cust_Thread_Code": "1945C","Cust_Thread_Discription": "Azalea","Cust_RGB_Code": "rgb(189,57,86)"},'+
     '{"Binated_Thread_Code": "B-1684","Thread_Discription": "Wheat","PMS_Code": "466C","RGB_Code": "rgb(190, 162, 114)","Customer ": "Columbia","Cust_Thread_Code": "466C","Cust_Thread_Discription": "Wheat","Cust_RGB_Code": "rgb(190,162,114)"},'+
     '{"Binated_Thread_Code": "B-1689","Thread_Discription": "Shark","PMS_Code": "425C","RGB_Code": "rgb(109, 111, 109)","Customer ": "Columbia","Cust_Thread_Code": "425C","Cust_Thread_Discription": "Shark","Cust_RGB_Code": "rgb(100,104,104)"},'+
     '{"Binated_Thread_Code": "B-1701","Thread_Discription": "Spring Green","PMS_Code": "361C","RGB_Code": "rgb(73, 159, 70)","Customer ": "Columbia","Cust_Thread_Code": "361C","Cust_Thread_Discription": "Spring Green","Cust_RGB_Code": "rgb(69,150,69)"},'+
     '{"Binated_Thread_Code": "B-1702","Thread_Discription": "Spearmint","PMS_Code": "7478C","RGB_Code": "rgb(105, 186, 133)","Customer ": "Columbia","Cust_Thread_Code": "7478C","Cust_Thread_Discription": "Spearmint","Cust_RGB_Code": "rgb(105,186,133)"},'+
     '{"Binated_Thread_Code": "B-1704","Thread_Discription": "Evergreen","PMS_Code": "3302C","RGB_Code": "rgb(27, 75, 64)","Customer ": "Columbia","Cust_Thread_Code": "3302C","Cust_Thread_Discription": "Evergreen","Cust_RGB_Code": "rgb(27,75,64)"},'+
     '{"Binated_Thread_Code": "B-1705","Thread_Discription": "Fresh Oregano","PMS_Code": "5605C","RGB_Code": "rgb(56, 61, 50)","Customer ": "Columbia","Cust_Thread_Code": "5605C","Cust_Thread_Discription": "Fresh Oregano","Cust_RGB_Code": "rgb(54,64,51)"},'+
     '{"Binated_Thread_Code": "B-1707","Thread_Discription": "Honeysuckle","PMS_Code": "187C","RGB_Code": "rgb(198, 75, 92)","Customer ": "Columbia","Cust_Thread_Code": "187C","Cust_Thread_Discription": "Honeysuckle","Cust_RGB_Code": "rgb(198,75,92)"},'+
     '{"Binated_Thread_Code": "B-1709","Thread_Discription": "Shocking Pink","PMS_Code": "240C","RGB_Code": "rgb(206, 58, 147)","Customer ": "Columbia","Cust_Thread_Code": "240C","Cust_Thread_Discription": "Shocking Pink","Cust_RGB_Code": "rgb(206,58,147)"},'+
     '{"Binated_Thread_Code": "B-1710","Thread_Discription": "Magenta","PMS_Code": "2415C","RGB_Code": "rgb(151, 49, 114)","Customer ": "Columbia","Cust_Thread_Code": "2415C","Cust_Thread_Discription": "Magenta","Cust_RGB_Code": "rgb(151,49,114)"},'+
     '{"Binated_Thread_Code": "B-1720","Thread_Discription": "Plum","PMS_Code": "511C","RGB_Code": "rgb(109, 57, 92)","Customer ": "Columbia","Cust_Thread_Code": "511C","Cust_Thread_Discription": "Plum","Cust_RGB_Code": "rgb(109,57,92)"},'+
     '{"Binated_Thread_Code": "B-1721","Thread_Discription": "Flamingo Pink","PMS_Code": "190C","RGB_Code": "rgb(235, 101, 146)","Customer ": "Columbia","Cust_Thread_Code": "190C","Cust_Thread_Discription": "Flamingo Pink","Cust_RGB_Code": "rgb(235,101,146)"},'+
     '{"Binated_Thread_Code": "B-1722","Thread_Discription": "Royal Purple","PMS_Code": "2685C","RGB_Code": "rgb(68, 56, 124)","Customer ": "Columbia","Cust_Thread_Code": "2685C","Cust_Thread_Discription": "Royal Purple","Cust_RGB_Code": "rgb(65,63,121)"},'+
     '{"Binated_Thread_Code": "B-1726","Thread_Discription": "Light Brown Sugar","PMS_Code": "722C","RGB_Code": "rgb(180, 128, 90)","Customer ": "Columbia","Cust_Thread_Code": "722C","Cust_Thread_Discription": "Light Brown Sugar","Cust_RGB_Code": "rgb(180,128,90)"},'+
     '{"Binated_Thread_Code": "B-1728","Thread_Discription": "Bark","PMS_Code": "7504C","RGB_Code": "rgb(153, 129, 107)","Customer ": "Columbia","Cust_Thread_Code": "7504C","Cust_Thread_Discription": "Bark","Cust_RGB_Code": "rgb(132,106,87)"},'+
     '{"Binated_Thread_Code": "B-1733","Thread_Discription": "Blue Jay","PMS_Code": "2143C","RGB_Code": "rgb(62, 124, 177)","Customer ": "Columbia","Cust_Thread_Code": "2143C","Cust_Thread_Discription": "Blue Jay","Cust_RGB_Code": "rgb(0,129,182)"},'+
     '{"Binated_Thread_Code": "B-1739","Thread_Discription": "Charcoal","PMS_Code": "425C","RGB_Code": "rgb(79, 75, 75)","Customer ": "Columbia","Cust_Thread_Code": "425C","Cust_Thread_Discription": "Charcoal","Cust_RGB_Code": "rgb(100,104,104)"},'+
     '{"Binated_Thread_Code": "B-1740","Thread_Discription": "Weimaraner","PMS_Code": "423C","RGB_Code": "rgb(123, 121, 126)","Customer ": "Columbia","Cust_Thread_Code": "423C","Cust_Thread_Discription": "Weimaraner","Cust_RGB_Code": "rgb(122,121,118)"},'+
     '{"Binated_Thread_Code": "B-1751","Thread_Discription": "Emerald Isle","PMS_Code": "7482C","RGB_Code": "rgb(1, 125, 74)","Customer ": "Columbia","Cust_Thread_Code": "7482C","Cust_Thread_Discription": "Emerald Isle","Cust_RGB_Code": "rgb(1,125,74)"},'+
     '{"Binated_Thread_Code": "B-1752","Thread_Discription": "Cantalope","PMS_Code": "1565C","RGB_Code": "rgb(249, 173, 136)","Customer ": "Columbia","Cust_Thread_Code": "1565C","Cust_Thread_Discription": "Cantalope","Cust_RGB_Code": "rgb(249,173,136)"},'+
     '{"Binated_Thread_Code": "B-1755","Thread_Discription": "Marmalade","PMS_Code": "1375C","RGB_Code": "rgb(247, 144, 74)","Customer ": "Columbia","Cust_Thread_Code": "1375C","Cust_Thread_Discription": "Marmalade","Cust_RGB_Code": "rgb(247,144,74)"},'+
     '{"Binated_Thread_Code": "B-1756","Thread_Discription": "Pea Green","PMS_Code": "378C","RGB_Code": "rgb(92, 91, 47)","Customer ": "Columbia","Cust_Thread_Code": "378C","Cust_Thread_Discription": "Pea Green","Cust_RGB_Code": "rgb(92,91,47)"},'+
     '{"Binated_Thread_Code": "B-1757","Thread_Discription": "Dark Olive","PMS_Code": "455C","RGB_Code": "rgb(99, 83, 48)","Customer ": "Columbia","Cust_Thread_Code": "455C","Cust_Thread_Discription": "Dark Olive","Cust_RGB_Code": "rgb(99,83,48)"},'+
     '{"Binated_Thread_Code": "B-1758","Thread_Discription": "Grizzly Bear","PMS_Code": "731C","RGB_Code": "rgb(111, 75, 54)","Customer ": "Columbia","Cust_Thread_Code": "731C","Cust_Thread_Discription": "Grizzly Bear","Cust_RGB_Code": "rgb(136,92,68)"},'+
     '{"Binated_Thread_Code": "B-1760","Thread_Discription": "Antique Blue","PMS_Code": "8202C","RGB_Code": "rgb(75, 113, 127)","Customer ": "Columbia","Cust_Thread_Code": "8202C","Cust_Thread_Discription": "Antique Blue","Cust_RGB_Code": "rgb(75,113,127)"},'+
     '{"Binated_Thread_Code": "B-1763","Thread_Discription": "Copper","PMS_Code": "144C","RGB_Code": "rgb(220, 123, 43)","Customer ": "Columbia","Cust_Thread_Code": "144C","Cust_Thread_Discription": "Copper","Cust_RGB_Code": "rgb(220,123,43)"},'+
     '{"Binated_Thread_Code": "B-1764","Thread_Discription": "Denim","PMS_Code": "534C","RGB_Code": "rgb(45, 73, 93)","Customer ": "Columbia","Cust_Thread_Code": "534C","Cust_Thread_Discription": "Denim","Cust_RGB_Code": "rgb(39,60,82)"},'+
     '{"Binated_Thread_Code": "B-1766","Thread_Discription": "Sailor Blue","PMS_Code": "2735C","RGB_Code": "rgb(54, 60, 127)","Customer ": "Columbia","Cust_Thread_Code": "2735C","Cust_Thread_Discription": "Sailor Blue","Cust_RGB_Code": "rgb(54,60,127)"},'+
     '{"Binated_Thread_Code": "B-1773","Thread_Discription": "Autumn Gold","PMS_Code": "1385C","RGB_Code": "rgb(177, 103, 49)","Customer ": "Columbia","Cust_Thread_Code": "1385C","Cust_Thread_Discription": "Autumn Gold","Cust_RGB_Code": "rgb(177,103,49)"},'+
     '{"Binated_Thread_Code": "B-1776","Thread_Discription": "Independence Blue","PMS_Code": "647C","RGB_Code": "rgb(30, 79, 104)","Customer ": "Columbia","Cust_Thread_Code": "647C","Cust_Thread_Discription": "Independence Blue","Cust_RGB_Code": "rgb(30,79,104)"},'+
     '{"Binated_Thread_Code": "B-1777","Thread_Discription": "Bright Peach","PMS_Code": "170C","RGB_Code": "rgb(238, 135, 126)","Customer ": "Columbia","Cust_Thread_Code": "170C","Cust_Thread_Discription": "Bright Peach","Cust_RGB_Code": "rgb(247,136,125)"},'+
     '{"Binated_Thread_Code": "B-1779","Thread_Discription": "Sweet Potato","PMS_Code": "179C","RGB_Code": "rgb(203, 83, 76)","Customer ": "Columbia","Cust_Thread_Code": "179C","Cust_Thread_Discription": "Sweet Potato","Cust_RGB_Code": "rgb(225,84,69)"},'+
     '{"Binated_Thread_Code": "B-1783","Thread_Discription": "Dark Raspberry","PMS_Code": "234C","RGB_Code": "rgb(134, 45, 89)","Customer ": "Columbia","Cust_Thread_Code": "234C","Cust_Thread_Discription": "Dark Raspberry","Cust_RGB_Code": "rgb(134,45,89)"},'+
     '{"Binated_Thread_Code": "B-1787","Thread_Discription": "Fuchsia","PMS_Code": "215C","RGB_Code": "rgb(181, 52, 108)","Customer ": "Columbia","Cust_Thread_Code": "215C","Cust_Thread_Discription": "Fuchsia","Cust_RGB_Code": "rgb(181,52,108)"},'+
     '{"Binated_Thread_Code": "B-1788","Thread_Discription": "Dark Magenta","PMS_Code": "512C","RGB_Code": "rgb(120, 51, 106)","Customer ": "Columbia","Cust_Thread_Code": "512C","Cust_Thread_Discription": "Dark Magenta","Cust_RGB_Code": "rgb(120,51,106)"},'+
     '{"Binated_Thread_Code": "B-1789","Thread_Discription": "Plum Drop","PMS_Code": "511C","RGB_Code": "rgb(101, 63, 89)","Customer ": "Columbia","Cust_Thread_Code": "511C","Cust_Thread_Discription": "Plum Drop","Cust_RGB_Code": "rgb(109,57,92)"},'+
     '{"Binated_Thread_Code": "B-1794","Thread_Discription": "Field Gear","PMS_Code": "5815C","RGB_Code": "rgb(87, 78, 49)","Customer ": "Columbia","Cust_Thread_Code": "5815C","Cust_Thread_Discription": "Field Gear","Cust_RGB_Code": "rgb(87,78,49)"},'+
     '{"Binated_Thread_Code": "B-1795","Thread_Discription": "Dark Camo Green","PMS_Code": "5743C","RGB_Code": "rgb(74, 72, 54)","Customer ": "Columbia","Cust_Thread_Code": "5743C","Cust_Thread_Discription": "Dark Camo Green","Cust_RGB_Code": "rgb(80,84,67)"},'+
     '{"Binated_Thread_Code": "B-1809","Thread_Discription": "Brushed Bronze","PMS_Code": "618C","RGB_Code": "rgb(182, 161, 84)","Customer ": "Columbia","Cust_Thread_Code": "618C","Cust_Thread_Discription": "Brushed Bronze","Cust_RGB_Code": "rgb(182,161,84)"},'+
     '{"Binated_Thread_Code": "B-1816","Thread_Discription": "Rustic Pink","PMS_Code": "1767C","RGB_Code": "rgb(247, 173, 191)","Customer ": "Columbia","Cust_Thread_Code": "1767C","Cust_Thread_Discription": "Rustic Pink","Cust_RGB_Code": "rgb(238,178,188)"},'+
     '{"Binated_Thread_Code": "B-1818","Thread_Discription": "Powder Pink","PMS_Code": "691C","RGB_Code": "rgb(228, 189, 185)","Customer ": "Columbia","Cust_Thread_Code": "691C","Cust_Thread_Discription": "Powder Pink","Cust_RGB_Code": "rgb(228,189,185)"},'+
     '{"Binated_Thread_Code": "B-1819","Thread_Discription": "Blush Pink","PMS_Code": "169C","RGB_Code": "rgb(246, 158, 157)","Customer ": "Columbia","Cust_Thread_Code": "169C","Cust_Thread_Discription": "Blush Pink","Cust_RGB_Code": "rgb(233,179,177)"},'+
     '{"Binated_Thread_Code": "B-1826","Thread_Discription": "Peach Pie","PMS_Code": "1355C","RGB_Code": "rgb(254, 199, 125)","Customer ": "Columbia","Cust_Thread_Code": "1355C","Cust_Thread_Discription": "Peach Pie","Cust_RGB_Code": "rgb(240,166,83)"},'+
     '{"Binated_Thread_Code": "B-1828","Thread_Discription": "Work Shirt","PMS_Code": "2915C","RGB_Code": "rgb(66, 140, 175)","Customer ": "Columbia","Cust_Thread_Code": "2915C","Cust_Thread_Discription": "Work Shirt","Cust_RGB_Code": "rgb(66,140,175)"},'+
     '{"Binated_Thread_Code": "B-1829","Thread_Discription": "Blue Bird","PMS_Code": "285C","RGB_Code": "rgb(2, 103, 162)","Customer ": "Columbia","Cust_Thread_Code": "285C","Cust_Thread_Discription": "Blue Bird","Cust_RGB_Code": "rgb(2,103,162)"},'+
     '{"Binated_Thread_Code": "B-1830","Thread_Discription": "China Blue","PMS_Code": "7453C","RGB_Code": "rgb(101, 134, 188)","Customer ": "Columbia","Cust_Thread_Code": "7453C","Cust_Thread_Discription": "China Blue","Cust_RGB_Code": "rgb(101,134,188)"},'+
     '{"Binated_Thread_Code": "B-1831","Thread_Discription": "Purple Pansy","PMS_Code": "528C","RGB_Code": "rgb(155, 100, 156)","Customer ": "Columbia","Cust_Thread_Code": "528C","Cust_Thread_Discription": "Purple Pansy","Cust_RGB_Code": "rgb(155,100,156)"},'+
     '{"Binated_Thread_Code": "B-1832","Thread_Discription": "Majestic Purple","PMS_Code": "2665C","RGB_Code": "rgb(106, 86, 150)","Customer ": "Columbia","Cust_Thread_Code": "2665C","Cust_Thread_Discription": "Majestic Purple","Cust_RGB_Code": "rgb(106,86,150)"},'+
     '{"Binated_Thread_Code": "B-1833","Thread_Discription": "Heliotrope","PMS_Code": "259C","RGB_Code": "rgb(120, 46, 116)","Customer ": "Columbia","Cust_Thread_Code": "259C","Cust_Thread_Discription": "Heliotrope","Cust_RGB_Code": "rgb(120,46,116)"},'+
     '{"Binated_Thread_Code": "B-1837","Thread_Discription": "Fluorescent Red Orange","PMS_Code": "Hexa OrangeC","RGB_Code": "rgb(239, 68, 48)","Customer ": "Columbia","Cust_Thread_Code": "Hexa OrangeC","Cust_Thread_Discription": "Fluorescent Red Orange","Cust_RGB_Code": "rgb(239,68,48)"},'+
     '{"Binated_Thread_Code": "B-1840","Thread_Discription": "Cadet Gray","PMS_Code": "7544C","RGB_Code": "rgb(117, 125, 136)","Customer ": "Columbia","Cust_Thread_Code": "7544C","Cust_Thread_Discription": "Cadet Gray","Cust_RGB_Code": "rgb(117,125,136)"},'+
     '{"Binated_Thread_Code": "B-1841","Thread_Discription": "Pewter","PMS_Code": "7545C","RGB_Code": "rgb(80, 87, 93)","Customer ": "Columbia","Cust_Thread_Code": "7545C","Cust_Thread_Discription": "Pewter","Cust_RGB_Code": "rgb(80,87,93)"},'+
     '{"Binated_Thread_Code": "B-1845","Thread_Discription": "Mint","PMS_Code": "3375C","RGB_Code": "rgb(111, 195, 159)","Customer ": "Columbia","Cust_Thread_Code": "3375C","Cust_Thread_Discription": "Mint","Cust_RGB_Code": "rgb(111,195,159)"},'+
     '{"Binated_Thread_Code": "B-1849","Thread_Discription": "Tropical Teal","PMS_Code": "3295C","RGB_Code": "rgb(35, 124, 105)","Customer ": "Columbia","Cust_Thread_Code": "3295C","Cust_Thread_Discription": "Tropical Teal","Cust_RGB_Code": "rgb(35,124,105)"},'+
     '{"Binated_Thread_Code": "B-1850","Thread_Discription": "Fluorescent Green","PMS_Code": "802C","RGB_Code": "rgb(105, 189, 77)","Customer ": "Columbia","Cust_Thread_Code": "802C","Cust_Thread_Discription": "Fluorescent Green","Cust_RGB_Code": "rgb(105,189,77)"},'+
     '{"Binated_Thread_Code": "B-1851","Thread_Discription": "Cadmium Green","PMS_Code": "3425C","RGB_Code": "rgb(0, 95, 57)","Customer ": "Columbia","Cust_Thread_Code": "3425C","Cust_Thread_Discription": "Cadmium Green","Cust_RGB_Code": "rgb(0,95,57)"},'+
     '{"Binated_Thread_Code": "B-1852","Thread_Discription": "Cobalt","PMS_Code": "7468C","RGB_Code": "rgb(53, 125, 146)","Customer ": "Columbia","Cust_Thread_Code": "7468C","Cust_Thread_Discription": "Cobalt","Cust_RGB_Code": "rgb(53,125,146)"},'+
     '{"Binated_Thread_Code": "B-1854","Thread_Discription": "Rain Barrel","PMS_Code": "8440C","RGB_Code": "rgb(156, 132, 128)","Customer ": "Columbia","Cust_Thread_Code": "8440C","Cust_Thread_Discription": "Rain Barrel","Cust_RGB_Code": "rgb(156,132,128)"},'+
     '{"Binated_Thread_Code": "B-1855","Thread_Discription": "Coffee with Cream","PMS_Code": "874C","RGB_Code": "rgb(179, 147, 113)","Customer ": "Columbia","Cust_Thread_Code": "874C","Cust_Thread_Discription": "Coffee with Cream","Cust_RGB_Code": "rgb(175,127,86)"},'+
     '{"Binated_Thread_Code": "B-1856","Thread_Discription": "Burnt Orange","PMS_Code": "1605C","RGB_Code": "rgb(159, 85, 57)","Customer ": "Columbia","Cust_Thread_Code": "1605C","Cust_Thread_Discription": "Burnt Orange","Cust_RGB_Code": "rgb(159,85,57)"},'+
     '{"Binated_Thread_Code": "B-1858","Thread_Discription": "Chestnut","PMS_Code": "168C","RGB_Code": "rgb(102, 56, 49)","Customer ": "Columbia","Cust_Thread_Code": "168C","Cust_Thread_Discription": "Chestnut","Cust_RGB_Code": "rgb(102,56,49)"},'+
     '{"Binated_Thread_Code": "B-1859","Thread_Discription": "Dark Chocolate","PMS_Code": "412C","RGB_Code": "rgb(76, 64, 63)","Customer ": "Columbia","Cust_Thread_Code": "412C","Cust_Thread_Discription": "Dark Chocolate","Cust_RGB_Code": "rgb(72,57,51)"},'+
     '{"Binated_Thread_Code": "B-1866","Thread_Discription": "Buff","PMS_Code": "938C","RGB_Code": "rgb(240, 221, 145)","Customer ": "Columbia","Cust_Thread_Code": "938C","Cust_Thread_Discription": "Buff","Cust_RGB_Code": "rgb(240,221,145)"},'+
     '{"Binated_Thread_Code": "B-1868","Thread_Discription": "Bottle Green","PMS_Code": "3278C","RGB_Code": "rgb(2, 105, 83)","Customer ": "Columbia","Cust_Thread_Code": "3278C","Cust_Thread_Discription": "Bottle Green","Cust_RGB_Code": "rgb(2,105,83)"},'+
     '{"Binated_Thread_Code": "B-1870","Thread_Discription": "Orange Sorbet","PMS_Code": "149C","RGB_Code": "rgb(235, 167, 110)","Customer ": "Columbia","Cust_Thread_Code": "149C","Cust_Thread_Discription": "Orange Sorbet","Cust_RGB_Code": "rgb(244,188,139)"},'+
     '{"Binated_Thread_Code": "B-1872","Thread_Discription": "Brunette","PMS_Code": "7519C","RGB_Code": "rgb(100, 82, 67)","Customer ": "Columbia","Cust_Thread_Code": "7519C","Cust_Thread_Discription": "Brunette","Cust_RGB_Code": "rgb(100,82,67)"},'+
     '{"Binated_Thread_Code": "B-1874","Thread_Discription": "Baby Blue","PMS_Code": "283C","RGB_Code": "rgb(144, 179, 216)","Customer ": "Columbia","Cust_Thread_Code": "283C","Cust_Thread_Discription": "Baby Blue","Cust_RGB_Code": "rgb(144,179,216)"},'+
     '{"Binated_Thread_Code": "B-1878","Thread_Discription": "Tomato Red","PMS_Code": "485C","RGB_Code": "rgb(200, 48 ,43)","Customer ": "Columbia","Cust_Thread_Code": "485C","Cust_Thread_Discription": "Tomato Red","Cust_RGB_Code": "rgb(212,39,39)"},'+
     '{"Binated_Thread_Code": "B-1879","Thread_Discription": "Oregon Green","PMS_Code": "3298C","RGB_Code": "rgb(0, 121, 102)","Customer ": "Columbia","Cust_Thread_Code": "3298C","Cust_Thread_Discription": "Oregon Green","Cust_RGB_Code": "rgb(20,90,74)"},'+
     '{"Binated_Thread_Code": "B-1883","Thread_Discription": "Fluorescent Yellow","PMS_Code": "803C","RGB_Code": "rgb(249, 237, 35)","Customer ": "Columbia","Cust_Thread_Code": "803C","Cust_Thread_Discription": "Fluorescent Yellow","Cust_RGB_Code": "rgb(249,237,35)"},'+
     '{"Binated_Thread_Code": "B-1884","Thread_Discription": "Burly Wood","PMS_Code": "726C","RGB_Code": "rgb(198, 170, 142)","Customer ": "Columbia","Cust_Thread_Code": "726C","Cust_Thread_Discription": "Burly Wood","Cust_RGB_Code": "rgb(198,170,142)"},'+
     '{"Binated_Thread_Code": "B-1886","Thread_Discription": "Light Steel","PMS_Code": "406C","RGB_Code": "rgb(191, 185, 186)","Customer ": "Columbia","Cust_Thread_Code": "406C","Cust_Thread_Discription": "Light Steel","Cust_RGB_Code": "rgb(191,185,186)"},'+
     '{"Binated_Thread_Code": "B-1893","Thread_Discription": "Sky Blue","PMS_Code": "637C","RGB_Code": "rgb(46, 173, 200)","Customer ": "Columbia","Cust_Thread_Code": "637C","Cust_Thread_Discription": "Sky Blue","Cust_RGB_Code": "rgb(46,173,200)"},'+
     '{"Binated_Thread_Code": "B-1898","Thread_Discription": "Auburn","PMS_Code": "1675C","RGB_Code": "rgb(158, 76, 57)","Customer ": "Columbia","Cust_Thread_Code": "1675C","Cust_Thread_Discription": "Auburn","Cust_RGB_Code": "rgb(158,76,57)"},'+
     '{"Binated_Thread_Code": "B-1899","Thread_Discription": "Henna","PMS_Code": "174C","RGB_Code": "rgb(136, 60, 50)","Customer ": "Columbia","Cust_Thread_Code": "174C","Cust_Thread_Discription": "Henna","Cust_RGB_Code": "rgb(136,60,50)"},'+
     '{"Binated_Thread_Code": "B-1900","Thread_Discription": "Celadon","PMS_Code": "558C","RGB_Code": "rgb(155, 187, 156)","Customer ": "Columbia","Cust_Thread_Code": "558C","Cust_Thread_Discription": "Celadon","Cust_RGB_Code": "rgb(155,187,156)"},'+
     '{"Binated_Thread_Code": "B-1902","Thread_Discription": "Hunter Green","PMS_Code": "3435C","RGB_Code": "rgb(46, 75, 56)","Customer ": "Columbia","Cust_Thread_Code": "3435C","Cust_Thread_Discription": "Hunter Green","Cust_RGB_Code": "rgb(52,77,59)"},'+
     '{"Binated_Thread_Code": "B-1907","Thread_Discription": "Fluorescent Pink","PMS_Code": "1785C","RGB_Code": "rgb(239, 66, 105)","Customer ": "Columbia","Cust_Thread_Code": "1785C","Cust_Thread_Discription": "Fluorescent Pink","Cust_RGB_Code": "rgb(216,70,96)"},'+
     '{"Binated_Thread_Code": "B-1908","Thread_Discription": "Fluorescent Pink","PMS_Code": "1787C","RGB_Code": "rgb(239, 71, 106)","Customer ": "Columbia","Cust_Thread_Code": "1787C","Cust_Thread_Discription": "Fluorescent Pink","Cust_RGB_Code": "rgb(239,71,106)"},'+
     '{"Binated_Thread_Code": "B-1910","Thread_Discription": "Electric Magenta","PMS_Code": "812C","RGB_Code": "rgb(218, 26, 93)","Customer ": "Columbia","Cust_Thread_Code": "812C","Cust_Thread_Discription": "Electric Magenta","Cust_RGB_Code": "rgb(218,26,93)"},'+
     '{"Binated_Thread_Code": "B-1915","Thread_Discription": "Bermuda Sand","PMS_Code": "176C","RGB_Code": "rgb(247, 174, 183)","Customer ": "Columbia","Cust_Thread_Code": "176C","Cust_Thread_Discription": "Bermuda Sand","Cust_RGB_Code": "rgb(239,187,193)"},'+
     '{"Binated_Thread_Code": "B-1917","Thread_Discription": "Dusty Rose","PMS_Code": "493C","RGB_Code": "rgb(204, 116, 136)","Customer ": "Columbia","Cust_Thread_Code": "493C","Cust_Thread_Discription": "Dusty Rose","Cust_RGB_Code": "rgb(204,116,136)"},'+
     '{"Binated_Thread_Code": "B-1919","Thread_Discription": "English Rose","PMS_Code": "7434C","RGB_Code": "rgb(161, 86, 103)","Customer ": "Columbia","Cust_Thread_Code": "7434C","Cust_Thread_Discription": "English Rose","Cust_RGB_Code": "rgb(161,86,103)"},'+
     '{"Binated_Thread_Code": "B-1920","Thread_Discription": "Light Khaki","PMS_Code": "461C","RGB_Code": "rgb(206, 196, 137)","Customer ": "Columbia","Cust_Thread_Code": "461C","Cust_Thread_Discription": "Light Khaki","Cust_RGB_Code": "rgb(206,196,137)"},'+
     '{"Binated_Thread_Code": "B-1927","Thread_Discription": "Shiny Penny","PMS_Code": "727C","RGB_Code": "rgb(220, 177, 147)","Customer ": "Columbia","Cust_Thread_Code": "727C","Cust_Thread_Discription": "Shiny Penny","Cust_RGB_Code": "rgb(220,177,147)"},'+
     '{"Binated_Thread_Code": "B-1929","Thread_Discription": "Brown Hare","PMS_Code": "7519C","RGB_Code": "rgb(106, 92, 84)","Customer ": "Columbia","Cust_Thread_Code": "7519C","Cust_Thread_Discription": "Brown Hare","Cust_RGB_Code": "rgb(100,82,67)"},'+
     '{"Binated_Thread_Code": "B-1930","Thread_Discription": "Bahamas Blue","PMS_Code": "2746C","RGB_Code": "rgb(74, 82, 145)","Customer ": "Columbia","Cust_Thread_Code": "2746C","Cust_Thread_Discription": "Bahamas Blue","Cust_RGB_Code": "rgb(74,82,145)"},'+
     '{"Binated_Thread_Code": "B-1932","Thread_Discription": "Summer Sky","PMS_Code": "2975C","RGB_Code": "rgb(126, 197, 220)","Customer ": "Columbia","Cust_Thread_Code": "2975C","Cust_Thread_Discription": "Summer Sky","Cust_RGB_Code": "rgb(126,197,220)"},'+
     '{"Binated_Thread_Code": "B-1937","Thread_Discription": "Fluorescent Orange","PMS_Code": "804C","RGB_Code": "rgb(251, 170, 25)","Customer ": "Columbia","Cust_Thread_Code": "804C","Cust_Thread_Discription": "Fluorescent Orange","Cust_RGB_Code": "rgb(251,170,25)"},'+
     '{"Binated_Thread_Code": "B-1938","Thread_Discription": "Doe Skin","PMS_Code": "8003C","RGB_Code": "rgb(186, 170, 154)","Customer ": "Columbia","Cust_Thread_Code": "8003C","Cust_Thread_Discription": "Doe Skin","Cust_RGB_Code": "rgb(186,170,154)"},'+
     '{"Binated_Thread_Code": "B-1940","Thread_Discription": "Key Lime","PMS_Code": "389C","RGB_Code": "rgb(204, 203, 76)","Customer ": "Columbia","Cust_Thread_Code": "389C","Cust_Thread_Discription": "Key Lime","Cust_RGB_Code": "rgb(204,203,76)"},'+
     '{"Binated_Thread_Code": "B-1941","Thread_Discription": "Mauve","PMS_Code": "5005C","RGB_Code": "rgb(188, 139, 143)","Customer ": "Columbia","Cust_Thread_Code": "5005C","Cust_Thread_Discription": "Mauve","Cust_RGB_Code": "rgb(156,113,120)"},'+
     '{"Binated_Thread_Code": "B-1942","Thread_Discription": "Rose Gold","PMS_Code": "499C","RGB_Code": "rgb(143, 87, 84)","Customer ": "Columbia","Cust_Thread_Code": "499C","Cust_Thread_Discription": "Rose Gold","Cust_RGB_Code": "rgb(143,87,84)"},'+
     '{"Binated_Thread_Code": "B-1945","Thread_Discription": "Sienna","PMS_Code": "477C","RGB_Code": "rgb(115, 80, 71)","Customer ": "Columbia","Cust_Thread_Code": "477C","Cust_Thread_Discription": "Sienna","Cust_RGB_Code": "rgb(115,80,71)"},'+
     '{"Binated_Thread_Code": "B-1946","Thread_Discription": "Fluorescent Orange","PMS_Code": "811C","RGB_Code": "rgb(242, 99, 34)","Customer ": "Columbia","Cust_Thread_Code": "811C","Cust_Thread_Discription": "Fluorescent Orange","Cust_RGB_Code": "rgb(242,99,34)"},'+
     '{"Binated_Thread_Code": "B-1952","Thread_Discription": "Melon Burst","PMS_Code": "1635C","RGB_Code": "rgb(244, 123, 99)","Customer ": "Columbia","Cust_Thread_Code": "1635C","Cust_Thread_Discription": "Melon Burst","Cust_RGB_Code": "rgb(244,123,99)"},'+
     '{"Binated_Thread_Code": "B-1956","Thread_Discription": "Olive Green","PMS_Code": "105C","RGB_Code": "rgb(140, 128, 86)","Customer ": "Columbia","Cust_Thread_Code": "105C","Cust_Thread_Discription": "Olive Green","Cust_RGB_Code": "rgb(140,128,86)"},'+
     '{"Binated_Thread_Code": "B-1957","Thread_Discription": "Burnt Taupe","PMS_Code": "7533C","RGB_Code": "rgb(75, 65, 51)","Customer ": "Columbia","Cust_Thread_Code": "7533C","Cust_Thread_Discription": "Burnt Taupe","Cust_RGB_Code": "rgb(75,65,51)"},'+
     '{"Binated_Thread_Code": "B-1960","Thread_Discription": "Dusty Blue","PMS_Code": "5425C","RGB_Code": "rgb(115, 140, 158)","Customer ": "Columbia","Cust_Thread_Code": "5425C","Cust_Thread_Discription": "Dusty Blue","Cust_RGB_Code": "rgb(115,140,158)"},'+
     '{"Binated_Thread_Code": "B-1961","Thread_Discription": "Blue Spruce","PMS_Code": "5405C","RGB_Code": "rgb(80, 110, 132)","Customer ": "Columbia","Cust_Thread_Code": "5405C","Cust_Thread_Discription": "Blue Spruce","Cust_RGB_Code": "rgb(80,110,132)"},'+
     '{"Binated_Thread_Code": "B-1962","Thread_Discription": "Admiral Blue","PMS_Code": "548C","RGB_Code": "rgb(38, 69, 83)","Customer ": "Columbia","Cust_Thread_Code": "548C","Cust_Thread_Discription": "Admiral Blue","Cust_RGB_Code": "rgb(38,69,83)"},'+
     '{"Binated_Thread_Code": "B-1964","Thread_Discription": "Stormy Sky Blue","PMS_Code": "5405C","RGB_Code": "rgb(73, 91, 114)","Customer ": "Columbia","Cust_Thread_Code": "5405C","Cust_Thread_Discription": "Stormy Sky Blue","Cust_RGB_Code": "rgb(80,110,132)"},'+
     '{"Binated_Thread_Code": "B-1969","Thread_Discription": "Army Green","PMS_Code": "5743C","RGB_Code": "rgb(108, 109, 89)","Customer ": "Columbia","Cust_Thread_Code": "5743C","Cust_Thread_Discription": "Army Green","Cust_RGB_Code": "rgb(80,84,67)"},'+
     '{"Binated_Thread_Code": "B-1970","Thread_Discription": "Emerald Ink","PMS_Code": "555C","RGB_Code": "rgb(53, 93, 63)","Customer ": "Columbia","Cust_Thread_Code": "555C","Cust_Thread_Discription": "Emerald Ink","Cust_RGB_Code": "rgb(53,93,63)"},'+
     '{"Binated_Thread_Code": "B-1971","Thread_Discription": "Saffron","PMS_Code": "7408C","RGB_Code": "rgb(248, 179, 32)","Customer ": "Columbia","Cust_Thread_Code": "7408C","Cust_Thread_Discription": "Saffron","Cust_RGB_Code": "rgb(248,179,32)"},'+
     '{"Binated_Thread_Code": "B-1972","Thread_Discription": "Fluorescent Yellow Orange","PMS_Code": "1235C","RGB_Code": "rgb(254, 187, 18)","Customer ": "Columbia","Cust_Thread_Code": "1235C","Cust_Thread_Discription": "Fluorescent Yellow Orange","Cust_RGB_Code": "rgb(254,187,18)"},'+
     '{"Binated_Thread_Code": "B-1973","Thread_Discription": "Bronze","PMS_Code": "154C","RGB_Code": "rgb(148, 94, 53)","Customer ": "Columbia","Cust_Thread_Code": "154C","Cust_Thread_Discription": "Bronze","Cust_RGB_Code": "rgb(148,94,53)"},'+
     '{"Binated_Thread_Code": "B-1980","Thread_Discription": "Sunflower","PMS_Code": "115C","RGB_Code": "rgb(250, 193, 28)","Customer ": "Columbia","Cust_Thread_Code": "115C","Cust_Thread_Discription": "Sunflower","Cust_RGB_Code": "rgb(250,193,28)"},'+
     '{"Binated_Thread_Code": "B-1985","Thread_Discription": "Deep Rain Forest","PMS_Code": "3292C","RGB_Code": "rgb(1, 92, 80)","Customer ": "Columbia","Cust_Thread_Code": "3292C","Cust_Thread_Discription": "Deep Rain Forest","Cust_RGB_Code": "rgb(32,84,78)"},'+
     '{"Binated_Thread_Code": "B-1988","Thread_Discription": "Kelly Green","PMS_Code": "356C","RGB_Code": "rgb(7, 140, 69)","Customer ": "Columbia","Cust_Thread_Code": "356C","Cust_Thread_Discription": "Kelly Green","Cust_RGB_Code": "rgb(7,140,69)"},'+
     '{"Binated_Thread_Code": "B-1990","Thread_Discription": "Pink Rose","PMS_Code": "212C","RGB_Code": "rgb(216, 96, 150)","Customer ": "Columbia","Cust_Thread_Code": "212C","Cust_Thread_Discription": "Pink Rose","Cust_RGB_Code": "rgb(207,77,136)"},'+
     '{"Binated_Thread_Code": "B-1991","Thread_Discription": "Malachite","PMS_Code": "3145C","RGB_Code": "rgb(7, 115, 121)","Customer ": "Columbia","Cust_Thread_Code": "3145C","Cust_Thread_Discription": "Malachite","Cust_RGB_Code": "rgb(7,115,121)"},'+
     '{"Binated_Thread_Code": "B-1992","Thread_Discription": "Rough Caribbean Sea","PMS_Code": "308C","RGB_Code": "rgb(7, 96, 119)","Customer ": "Columbia","Cust_Thread_Code": "308C","Cust_Thread_Discription": "Rough Caribbean Sea","Cust_RGB_Code": "rgb(7,96,119)"},'+
     '{"Binated_Thread_Code": "B-1993","Thread_Discription": "Watermelon","PMS_Code": "1925C","RGB_Code": "rgb(215, 51, 93)","Customer ": "Columbia","Cust_Thread_Code": "1925C","Cust_Thread_Discription": "Watermelon","Cust_RGB_Code": "rgb(186,48,81)"},'+
     '{"Binated_Thread_Code": "B-1994","Thread_Discription": "Lipstick Rose","PMS_Code": "184C","RGB_Code": "rgb(235, 78, 113)","Customer ": "Columbia","Cust_Thread_Code": "184C","Cust_Thread_Discription": "Lipstick Rose","Cust_RGB_Code": "rgb(235,78,113)"},'+
     '{"Binated_Thread_Code": "B-1996","Thread_Discription": "Deep Emerald","PMS_Code": "560C","RGB_Code": "rgb(43, 67, 65)","Customer ": "Columbia","Cust_Thread_Code": "560C","Cust_Thread_Discription": "Deep Emerald","Cust_RGB_Code": "rgb(43,67,65)"},'+
     '{"Binated_Thread_Code": "B-1998","Thread_Discription": "Dark Mauve","PMS_Code": "8061C","RGB_Code": "rgb(127, 97, 101)","Customer ": "Columbia","Cust_Thread_Code": "8061C","Cust_Thread_Discription": "Dark Mauve","Cust_RGB_Code": "rgb(127,97,101)"},'+
     '{"Binated_Thread_Code": "B-1999","Thread_Discription": "Raisin","PMS_Code": "1817C","RGB_Code": "rgb(103, 50, 50)","Customer ": "Columbia","Cust_Thread_Code": "1817C","Cust_Thread_Discription": "Raisin","Cust_RGB_Code": "rgb(119,77,77)"},'+
     '{"Binated_Thread_Code": "B-1986","Thread_Discription": "Ripe Raspberry","PMS_Code": "207C","RGB_Code": "rgb(172, 35, 70)","Customer ": "Columbia","Cust_Thread_Code": "207C","Cust_Thread_Discription": "Ripe Raspberry","Cust_RGB_Code": "rgb(172,35,70)"},'+
     '{"Binated_Thread_Code": "B-1682","Thread_Discription": "Tusk","PMS_Code": "9183C","RGB_Code": "rgb(205, 191, 172)","Customer ": "Columbia","Cust_Thread_Code": "9183C","Cust_Thread_Discription": "Tusk","Cust_RGB_Code": "rgb(204,186,164)"}]}';
    
 
     let text5='{"data5":['+
     '{"Binated_Thread_Code": "B-1800","Thread_Discription": "Emerald Black","PMS_Code": "Process Black C","RGB_Code": "rgb(48, 49, 50)","Customer ": "aramark","Cust_Thread_Code": "1800","Cust_Thread_Discription": "Black","Cust_RGB_Code": "rgb(48, 49, 50)"},'+
     '{"Binated_Thread_Code": "B-1800","Thread_Discription": "Emerald Black","PMS_Code": "Process Black C","RGB_Code": "rgb(48, 49, 50)","Customer ": "aramark","Cust_Thread_Code": "N1800","Cust_Thread_Discription": "FR Black","Cust_RGB_Code": "rgb(48, 49, 50)"},'+
     '{"Binated_Thread_Code": "B-1801","Thread_Discription": "Super White","PMS_Code": "663C","RGB_Code": "rgb(229, 231, 244)","Customer ": "aramark","Cust_Thread_Code": "1801","Cust_Thread_Discription": "White","Cust_RGB_Code": "rgb(229, 231, 244)"},'+
     '{"Binated_Thread_Code": "B-1801","Thread_Discription": "Super White","PMS_Code": "663C","RGB_Code": "rgb(229, 231, 244)","Customer ": "aramark","Cust_Thread_Code": "1802","Cust_Thread_Discription": "Snow White","Cust_RGB_Code": "rgb(236, 237, 255)"},'+
     '{"Binated_Thread_Code": "B-1801","Thread_Discription": "Super White","PMS_Code": "663C","RGB_Code": "rgb(229, 231, 244)","Customer ": "aramark","Cust_Thread_Code": "1803","Cust_Thread_Discription": "Natural White","Cust_RGB_Code": "rgb(237, 236, 223)"},'+
     '{"Binated_Thread_Code": "B-1801","Thread_Discription": "Super White","PMS_Code": "663C","RGB_Code": "rgb(229, 231, 244)","Customer ": "aramark","Cust_Thread_Code": "1804","Cust_Thread_Discription": "Natural White","Cust_RGB_Code": "rgb(235, 236, 230)"},'+
     '{"Binated_Thread_Code": "B-1801","Thread_Discription": "Super White","PMS_Code": "663C","RGB_Code": "rgb(229, 231, 244)","Customer ": "aramark","Cust_Thread_Code": "N1803","Cust_Thread_Discription": "FR White","Cust_RGB_Code": "rgb(237, 236, 223)"},'+
     '{"Binated_Thread_Code": "B-1005","Thread_Discription": "Fluorescent White","PMS_Code": "663C","RGB_Code": "rgb(225, 227, 242)","Customer ": "aramark","Cust_Thread_Code": "1805","Cust_Thread_Discription": "Fluorescent White","Cust_RGB_Code": "rgb(222, 224, 241)"},'+
     '{"Binated_Thread_Code": "B-1010","Thread_Discription": "Gray Haze","PMS_Code": "&nbsp;441C","RGB_Code": "rgb(195, 196, 191)","Customer ": "aramark","Cust_Thread_Code": "1810","Cust_Thread_Discription": "Gray Haze","Cust_RGB_Code": "rgb(174, 176, 175)"},'+
     '{"Binated_Thread_Code": "B-1011","Thread_Discription": "Chrome","PMS_Code": "421C ","RGB_Code": "rgb(171, 176, 178)","Customer ": "aramark","Cust_Thread_Code": "1811","Cust_Thread_Discription": "Mercedes Grey","Cust_RGB_Code": "rgb(170, 177, 178)"},'+
     '{"Binated_Thread_Code": "B-1012","Thread_Discription": "Smoke","PMS_Code": "429C","RGB_Code": "rgb(163, 176, 181)","Customer ": "aramark","Cust_Thread_Code": "1611","Cust_Thread_Discription": "Smoke","Cust_RGB_Code": "rgb(158, 169, 177)"},'+
     '{"Binated_Thread_Code": "B-1012","Thread_Discription": "Smoke","PMS_Code": "429C","RGB_Code": "rgb(163, 176, 181)","Customer ": "aramark","Cust_Thread_Code": "1612","Cust_Thread_Discription": "Steel","Cust_RGB_Code": "rgb(151, 166, 180)"},'+
     '{"Binated_Thread_Code": "B-1012","Thread_Discription": "Smoke","PMS_Code": "429C","RGB_Code": "rgb(163, 176, 181)","Customer ": "aramark","Cust_Thread_Code": "1886","Cust_Thread_Discription": "Pearl Grey","Cust_RGB_Code": "rgb(191, 185, 186)"},'+
     '{"Binated_Thread_Code": "B-1014","Thread_Discription": "Bermuda Sand","PMS_Code": "1767C","RGB_Code": "rgb(238, 178, 188)","Customer ": "aramark","Cust_Thread_Code": "1915","Cust_Thread_Discription": "Bermuda Sand","Cust_RGB_Code": "rgb(247, 174, 183)"},'+
     '{"Binated_Thread_Code": "B-1015","Thread_Discription": "Desert Bloom","PMS_Code": "169C","RGB_Code": "rgb(233, 180, 177)","Customer ": "aramark","Cust_Thread_Code": "1818","Cust_Thread_Discription": "Powder Pink","Cust_RGB_Code": "rgb(228, 189, 185)"},'+
     '{"Binated_Thread_Code": "B-1017","Thread_Discription": "Orange Wisp","PMS_Code": "488C","RGB_Code": "rgb(242, 187, 171)","Customer ": "aramark","Cust_Thread_Code": "1882","Cust_Thread_Discription": "Peach Blossom","Cust_RGB_Code": "rgb(250, 198, 174)"},'+
     '{"Binated_Thread_Code": "B-1018","Thread_Discription": "Light Salmon","PMS_Code": "919C","RGB_Code": "rgb(239, 179, 168)","Customer ": "aramark","Cust_Thread_Code": "1817","Cust_Thread_Discription": "Peach","Cust_RGB_Code": "rgb(246, 166, 150)"},'+
     '{"Binated_Thread_Code": "B-1021","Thread_Discription": "Rust","PMS_Code": "167C","RGB_Code": "rgb(188, 84, 47)","Customer ": "aramark","Cust_Thread_Code": "1021","Cust_Thread_Discription": "Rust","Cust_RGB_Code": "rgb(186, 82 , 47)"},'+
     '{"Binated_Thread_Code": "B-1021","Thread_Discription": "Rust","PMS_Code": "167C","RGB_Code": "rgb(188, 84, 47)","Customer ": "aramark","Cust_Thread_Code": "1621","Cust_Thread_Discription": "Rust","Cust_RGB_Code": "rgb(197, 87, 44)"},'+
     '{"Binated_Thread_Code": "B-1022","Thread_Discription": "Corn Silk","PMS_Code": "9140C","RGB_Code": "rgb(235, 227, 185)","Customer ": "aramark","Cust_Thread_Code": "1666","Cust_Thread_Discription": "Maize","Cust_RGB_Code": "rgb(244, 229, 178)"},'+
     '{"Binated_Thread_Code": "B-1024","Thread_Discription": "Gold Rush","PMS_Code": "7549C","RGB_Code": "rgb(250, 166, 31)","Customer ": "aramark","Cust_Thread_Code": "1624","Cust_Thread_Discription": "Marigold","Cust_RGB_Code": "rgb(244, 168, 49)"},'+
     '{"Binated_Thread_Code": "B-1024","Thread_Discription": "Gold Rush","PMS_Code": "7549C","RGB_Code": "rgb(250, 166, 31)","Customer ": "aramark","Cust_Thread_Code": "N1624","Cust_Thread_Discription": "FR Marigold","Cust_RGB_Code": "rgb(244, 168, 49)"},'+
     '{"Binated_Thread_Code": "B-1025","Thread_Discription": "Military Gold","PMS_Code": "131C","RGB_Code": "rgb(204, 129, 41)","Customer ": "aramark","Cust_Thread_Code": "1772","Cust_Thread_Discription": "Scottsdale Gold","Cust_RGB_Code": "rgb(215, 150, 40)"},'+
     '{"Binated_Thread_Code": "B-1026","Thread_Discription": "Orange Sorbet","PMS_Code": "149C","RGB_Code": "rgb(242, 188, 138)","Customer ": "aramark","Cust_Thread_Code": "1723","Cust_Thread_Discription": "Flan ","Cust_RGB_Code": "rgb(245, 209, 168)"},'+
     '{"Binated_Thread_Code": "B-1027","Thread_Discription": "Dolphin","PMS_Code": "544C","RGB_Code": "rgb(155, 187, 202)","Customer ": "aramark","Cust_Thread_Code": "1761","Cust_Thread_Discription": "Dolphin","Cust_RGB_Code": "rgb(136, 166, 180)"},'+
     '{"Binated_Thread_Code": "B-1028","Thread_Discription": "Country Kitchen Blue","PMS_Code": "278C","RGB_Code": "rgb(90, 137, 169)","Customer ": "aramark","Cust_Thread_Code": "1671","Cust_Thread_Discription": "Dusk Blue","Cust_RGB_Code": "rgb(92, 133, 162)"},'+
     '{"Binated_Thread_Code": "B-1028","Thread_Discription": "Country Kitchen Blue","PMS_Code": "278C","RGB_Code": "rgb(90, 137, 169)","Customer ": "aramark","Cust_Thread_Code": "1672","Cust_Thread_Discription": "Bronze","Cust_RGB_Code": "rgb(167, 121, 62)"},'+
     '{"Binated_Thread_Code": "B-1032","Thread_Discription": "Velvet Violet","PMS_Code": "2080C","RGB_Code": "rgb(129, 109, 158)","Customer ": "aramark","Cust_Thread_Code": "1834","Cust_Thread_Discription": "Amethyst","Cust_RGB_Code": "rgb(150, 122, 162)"},'+
     '{"Binated_Thread_Code": "B-1036","Thread_Discription": "Raisin","PMS_Code": "1817C","RGB_Code": "rgb(89, 49, 51)","Customer ": "aramark","Cust_Thread_Code": "1999","Cust_Thread_Discription": "Raisin","Cust_RGB_Code": "rgb(103, 50, 50)"},'+
     '{"Binated_Thread_Code": "B-1039","Thread_Discription": "Brick Red","PMS_Code": "200C","RGB_Code": "rgb(162, 40, 50)","Customer ": "aramark","Cust_Thread_Code": "1639","Cust_Thread_Discription": "Cinnabar","Cust_RGB_Code": "rgb(173, 64, 66)"},'+
     '{"Binated_Thread_Code": "B-1039","Thread_Discription": "Brick Red","PMS_Code": "200C","RGB_Code": "rgb(162, 40, 50)","Customer ": "aramark","Cust_Thread_Code": "1838","Cust_Thread_Discription": "Dollar Red","Cust_RGB_Code": "rgb(180, 35, 51)"},'+
     '{"Binated_Thread_Code": "B-1039","Thread_Discription": "Brick Red","PMS_Code": "200C","RGB_Code": "rgb(162, 40, 50)","Customer ": "aramark","Cust_Thread_Code": "1839","Cust_Thread_Discription": "Domino Red","Cust_RGB_Code": "rgb(173, 31, 51)"},'+
     '{"Binated_Thread_Code": "B-1041","Thread_Discription": "Polished Pewter","PMS_Code": "431C","RGB_Code": "rgb(112, 117, 124)","Customer ": "aramark","Cust_Thread_Code": "1840","Cust_Thread_Discription": "Cadet Grey","Cust_RGB_Code": "rgb(117, 125, 136)"},'+
     '{"Binated_Thread_Code": "B-1042","Thread_Discription": "Lapis","PMS_Code": "8184C","RGB_Code": "rgb(33, 81, 121)","Customer ": "aramark","Cust_Thread_Code": "1642","Cust_Thread_Discription": "Jay Blue","Cust_RGB_Code": "rgb(43, 91, 149)"},'+
     '{"Binated_Thread_Code": "B-1043","Thread_Discription": "Navy","PMS_Code": "289C","RGB_Code": "rgb(45, 52, 69)","Customer ": "aramark","Cust_Thread_Code": "1643","Cust_Thread_Discription": "Dark Navy","Cust_RGB_Code": "rgb(46, 54, 65)"},'+
     '{"Binated_Thread_Code": "B-1043","Thread_Discription": "Navy","PMS_Code": "289C","RGB_Code": "rgb(45, 52, 69)","Customer ": "aramark","Cust_Thread_Code": "N1643","Cust_Thread_Discription": "FR Navy","Cust_RGB_Code": "rgb(46, 54, 65)"},'+
     '{"Binated_Thread_Code": "B-1043","Thread_Discription": "Navy","PMS_Code": "289C","RGB_Code": "rgb(45, 52, 69)","Customer ": "aramark","Cust_Thread_Code": "1944","Cust_Thread_Discription": "Blueberry Smash","Cust_RGB_Code": "rgb(46, 61, 74)"},'+
     '{"Binated_Thread_Code": "B-1044","Thread_Discription": "Indigo","PMS_Code": "289C","RGB_Code": "rgb(46, 50, 63)","Customer ": "aramark","Cust_Thread_Code": "1844","Cust_Thread_Discription": "Navy","Cust_RGB_Code": "rgb(49, 52, 63)"},'+
     '{"Binated_Thread_Code": "B-1045","Thread_Discription": "Light Mint","PMS_Code": "7471C","RGB_Code": "rgb(136, 203, 190)","Customer ": "aramark","Cust_Thread_Code": "1645","Cust_Thread_Discription": "Light Turquoise","Cust_RGB_Code": "rgb(119, 199, 187)"},'+
     '{"Binated_Thread_Code": "B-1045","Thread_Discription": "Light Mint","PMS_Code": "7471C","RGB_Code": "rgb(136, 203, 190)","Customer ": "aramark","Cust_Thread_Code": "1647","Cust_Thread_Discription": "Mantis","Cust_RGB_Code": "rgb(136, 187, 157)"},'+
     '{"Binated_Thread_Code": "B-1047","Thread_Discription": "Celadon","PMS_Code": "345C","RGB_Code": "rgb(159, 190, 163)","Customer ": "aramark","Cust_Thread_Code": "1900","Cust_Thread_Discription": "Mint","Cust_RGB_Code": "rgb(155, 187, 156)"},'+
     '{"Binated_Thread_Code": "B-1048","Thread_Discription": "Aloe","PMS_Code": "7490C","RGB_Code": "rgb(123, 149, 83)","Customer ": "aramark","Cust_Thread_Code": "1848","Cust_Thread_Discription": "Dark Lime","Cust_RGB_Code": "rgb(118, 159, 86)"},'+
     '{"Binated_Thread_Code": "B-1048","Thread_Discription": "Aloe","PMS_Code": "7490C","RGB_Code": "rgb(123, 149, 83)","Customer ": "aramark","Cust_Thread_Code": "1968","Cust_Thread_Discription": "Lime Green","Cust_RGB_Code": "rgb(108, 150, 89)"},'+
     '{"Binated_Thread_Code": "B-1050","Thread_Discription": "Green Thumb","PMS_Code": "361C","RGB_Code": "rgb(68, 150, 69)","Customer ": "aramark","Cust_Thread_Code": "1749","Cust_Thread_Discription": "Green Thumb","Cust_RGB_Code": "rgb(57, 163, 72)"},'+
     '{"Binated_Thread_Code": "B-1051","Thread_Discription": "Bell Pepper","PMS_Code": "2252C","RGB_Code": "rgb(0, 136, 70)","Customer ": "aramark","Cust_Thread_Code": "N1651","Cust_Thread_Discription": "FR Kelly","Cust_RGB_Code": "rgb(0,132 , 69)"},'+
     '{"Binated_Thread_Code": "B-1053","Thread_Discription": "Light Coral","PMS_Code": "488C","RGB_Code": "rgb(231, 183, 165)","Customer ": "aramark","Cust_Thread_Code": "1653","Cust_Thread_Discription": "Light Coral","Cust_RGB_Code": "rgb(239, 187, 169)"},'+
     '{"Binated_Thread_Code": "B-1053","Thread_Discription": "Light Coral","PMS_Code": "488C","RGB_Code": "rgb(231, 183, 165)","Customer ": "aramark","Cust_Thread_Code": "1658","Cust_Thread_Discription": "Mocha","Cust_RGB_Code": "rgb(122, 71, 58)"},'+
     '{"Binated_Thread_Code": "B-1058","Thread_Discription": "Sienna","PMS_Code": "175C","RGB_Code": "rgb(114, 71, 61)","Customer ": "aramark","Cust_Thread_Code": "1945","Cust_Thread_Discription": "Sienna","Cust_RGB_Code": "rgb(115, 80, 71)"},'+
     '{"Binated_Thread_Code": "B-1060","Thread_Discription": "Pussywillow","PMS_Code": "7527C","RGB_Code": "rgb(180, 166, 152)","Customer ": "aramark","Cust_Thread_Code": "1860","Cust_Thread_Discription": "Pussy Willow","Cust_RGB_Code": "rgb(176, 166, 152)"},'+
     '{"Binated_Thread_Code": "B-1061","Thread_Discription": "Vanilla Pudding","PMS_Code": "9160C","RGB_Code": "rgb(244, 218, 171)","Customer ": "aramark","Cust_Thread_Code": "1629","Cust_Thread_Discription": "Old Silver","Cust_RGB_Code": "rgb(194, 199, 218)"},'+
     '{"Binated_Thread_Code": "B-1062","Thread_Discription": "Rhino","PMS_Code": "7536C","RGB_Code": "rgb(142, 135, 122)","Customer ": "aramark","Cust_Thread_Code": "1662","Cust_Thread_Discription": "Taupe","Cust_RGB_Code": "rgb(139, 132, 118)"},'+
     '{"Binated_Thread_Code": "B-1062","Thread_Discription": "Rhino","PMS_Code": "7536C","RGB_Code": "rgb(142, 135, 122)","Customer ": "aramark","Cust_Thread_Code": "1862","Cust_Thread_Discription": "Rhino","Cust_RGB_Code": "rgb(149, 144, 131)"},'+
     '{"Binated_Thread_Code": "B-1065","Thread_Discription": "Copper","PMS_Code": "151C","RGB_Code": "rgb(227, 120, 38)","Customer ": "aramark","Cust_Thread_Code": "1869","Cust_Thread_Discription": "Pumpkin Spice","Cust_RGB_Code": "rgb(221, 135, 57)"},'+
     '{"Binated_Thread_Code": "B-1069","Thread_Discription": "Sunshine Yellow","PMS_Code": "123C","RGB_Code": "rgb(251, 177, 24)","Customer ": "aramark","Cust_Thread_Code": "1971","Cust_Thread_Discription": "Goldenrod","Cust_RGB_Code": "rgb(248, 179, 32)"},'+
     '{"Binated_Thread_Code": "B-1071","Thread_Discription": "Baby’s Breath","PMS_Code": "9285C","RGB_Code": "rgb(233, 228, 219)","Customer ": "aramark","Cust_Thread_Code": "1949","Cust_Thread_Discription": "Ivory","Cust_RGB_Code": "rgb(240, 231, 212)"},'+
     '{"Binated_Thread_Code": "B-1072","Thread_Discription": "Coconut Cream","PMS_Code": "9180C","RGB_Code": "rgb(221, 212, 190)","Customer ": "aramark","Cust_Thread_Code": "1822","Cust_Thread_Discription": "Coconut Cream","Cust_RGB_Code": "rgb(226, 220, 198)"},'+
     '{"Binated_Thread_Code": "B-1074","Thread_Discription": "Powder Blue","PMS_Code": "2708C","RGB_Code": "rgb(151, 182, 208)","Customer ": "aramark","Cust_Thread_Code": "1953","Cust_Thread_Discription": "Ice Blue","Cust_RGB_Code": "rgb(162, 196, 220)"},'+
     '{"Binated_Thread_Code": "B-1074","Thread_Discription": "Powder Blue","PMS_Code": "2708C","RGB_Code": "rgb(151, 182, 208)","Customer ": "aramark","Cust_Thread_Code": "N1874","Cust_Thread_Discription": "LT Blue","Cust_RGB_Code": "rgb(144, 179, 216)"},'+
     '{"Binated_Thread_Code": "B-1076","Thread_Discription": "True Blue","PMS_Code": "2728C","RGB_Code": "rgb(0, 88, 151)","Customer ": "aramark","Cust_Thread_Code": "1842","Cust_Thread_Discription": "Lake Blue","Cust_RGB_Code": "rgb(0, 86, 149)"},'+
     '{"Binated_Thread_Code": "B-1078","Thread_Discription": "Pumpkin","PMS_Code": "Orange 021 C","RGB_Code": "rgb(235, 86, 40)","Customer ": "aramark","Cust_Thread_Code": "1678","Cust_Thread_Discription": "Paprika","Cust_RGB_Code": "rgb(236, 86, 46)"},'+
     '{"Binated_Thread_Code": "B-1078","Thread_Discription": "Pumpkin","PMS_Code": "Orange 021 C","RGB_Code": "rgb(235, 86, 40)","Customer ": "aramark","Cust_Thread_Code": "1946","Cust_Thread_Discription": "Flrsct Orange","Cust_RGB_Code": "rgb(242, 99, 34)"},'+
     '{"Binated_Thread_Code": "B-1079","Thread_Discription": "Celtic Green","PMS_Code": "347C","RGB_Code": "rgb(0, 136, 80)","Customer ": "aramark","Cust_Thread_Code": "1651","Cust_Thread_Discription": "Kelly","Cust_RGB_Code": "rgb(7, 133, 69)"},'+
     '{"Binated_Thread_Code": "B-1079","Thread_Discription": "Celtic Green","PMS_Code": "347C","RGB_Code": "rgb(0, 136, 80)","Customer ": "aramark","Cust_Thread_Code": "1079","Cust_Thread_Discription": "Kelly Green","Cust_RGB_Code": "rgb(0, 135, 79)"},'+
     '{"Binated_Thread_Code": "B-1081","Thread_Discription": "Azalea","PMS_Code": "1925C","RGB_Code": "rgb(186, 50, 83)","Customer ": "aramark","Cust_Thread_Code": "1984","Cust_Thread_Discription": "Orchid","Cust_RGB_Code": "rgb(182, 42, 98)"},'+
     '{"Binated_Thread_Code": "B-1084","Thread_Discription": "Sandy Shores","PMS_Code": "9182C","RGB_Code": "rgb(210, 185, 157)","Customer ": "aramark","Cust_Thread_Code": "1738","Cust_Thread_Discription": "Champagne","Cust_RGB_Code": "rgb(197, 184, 157)"},'+
     '{"Binated_Thread_Code": "B-1085","Thread_Discription": "Cement","PMS_Code": "2330C","RGB_Code": "rgb(184, 181, 175)","Customer ": "aramark","Cust_Thread_Code": "1812","Cust_Thread_Discription": "Cement","Cust_RGB_Code": "rgb(170, 171, 165)"},'+
     '{"Binated_Thread_Code": "B-1086","Thread_Discription": "Sterling Silver","PMS_Code": "427C","RGB_Code": "rgb(199, 200, 197)","Customer ": "aramark","Cust_Thread_Code": "1687","Cust_Thread_Discription": "Sterling Silver","Cust_RGB_Code": "rgb(189, 197, 195)"},'+
    // '{"Binated_Thread_Code": "B-1087","Thread_Discription": "Silver Birch","PMS_Code": "2330C","RGB_Code": "rgb(189, 188, 184)","Customer ": "aramark","Cust_Thread_Code": "MS","Cust_RGB_Code":"rgb()","Cust_Thread_Discription": "Metalic Silver"},'+
     '{"Binated_Thread_Code": "B-1088","Thread_Discription": "Robin s Egg","PMS_Code": "2227C","RGB_Code": "rgb(97, 169, 172)","Customer ": "aramark","Cust_Thread_Code": "1892","Cust_Thread_Discription": "Robins Egg","Cust_RGB_Code": "rgb(121, 200, 204)"},'+
     '{"Binated_Thread_Code": "B-1091","Thread_Discription": "Teal Blue","PMS_Code": "632C","RGB_Code": "rgb(8, 113, 129)","Customer ": "aramark","Cust_Thread_Code": "1895","Cust_Thread_Discription": "Aquamarint","Cust_RGB_Code": "rgb(4, 149, 170)"},'+
     '{"Binated_Thread_Code": "B-1092","Thread_Discription": "Summer Sky","PMS_Code": "550C","RGB_Code": "rgb(148, 194, 208)","Customer ": "aramark","Cust_Thread_Code": "1932","Cust_Thread_Discription": "Summer Sky","Cust_RGB_Code": "rgb(126, 197, 220)"},'+
     '{"Binated_Thread_Code": "B-1093","Thread_Discription": "Azure Sea","PMS_Code": "305C","RGB_Code": "rgb(36, 187, 201)","Customer ": "aramark","Cust_Thread_Code": "1827","Cust_Thread_Discription": "Swimming Pool","Cust_RGB_Code": "rgb(87, 186, 214)"},'+
     '{"Binated_Thread_Code": "B-1094","Thread_Discription": "Caribbean Blue","PMS_Code": "306C","RGB_Code": "rgb(9, 178, 200)","Customer ": "aramark","Cust_Thread_Code": "1694","Cust_Thread_Discription": "Perwinkle","Cust_RGB_Code": "rgb(7, 161, 175)"},'+
     '{"Binated_Thread_Code": "B-1094","Thread_Discription": "Caribbean Blue","PMS_Code": "306C","RGB_Code": "rgb(9, 178, 200)","Customer ": "aramark","Cust_Thread_Code": "1893","Cust_Thread_Discription": "Caribbean Blue","Cust_RGB_Code": "rgb(46, 173, 200)"},'+
     '{"Binated_Thread_Code": "B-1103","Thread_Discription": "Hunter Green","PMS_Code": "3435C","RGB_Code": "rgb(53, 78, 60)","Customer ": "aramark","Cust_Thread_Code": "1902","Cust_Thread_Discription": "Field Green","Cust_RGB_Code": "rgb(46, 75, 56)"},'+
     '{"Binated_Thread_Code": "B-1103","Thread_Discription": "Hunter Green","PMS_Code": "3435C","RGB_Code": "rgb(53, 78, 60)","Customer ": "aramark","Cust_Thread_Code": "1970","Cust_Thread_Discription": "Emerald Ink","Cust_RGB_Code": "rgb(53, 93, 63)"},'+
     '{"Binated_Thread_Code": "B-1106","Thread_Discription": "Guacamole","PMS_Code": "10107C","RGB_Code": "rgb(151, 140, 84)","Customer ": "aramark","Cust_Thread_Code": "1706","Cust_Thread_Discription": "Tamarack","Cust_RGB_Code": "rgb(148, 137, 73)"},'+
     '{"Binated_Thread_Code": "B-1109","Thread_Discription": "Pink Rose","PMS_Code": "212C","RGB_Code": "rgb(208, 79, 137)","Customer ": "aramark","Cust_Thread_Code": "1948","Cust_Thread_Discription": "Pink Carnation","Cust_RGB_Code": "rgb(244, 139, 166)"},'+
     '{"Binated_Thread_Code": "B-1109","Thread_Discription": "Pink Rose","PMS_Code": "212C","RGB_Code": "rgb(208, 79, 137)","Customer ": "aramark","Cust_Thread_Code": "1990","Cust_Thread_Discription": "Hot Pink","Cust_RGB_Code": "rgb(216, 96, 150)"},'+
     '{"Binated_Thread_Code": "B-1111","Thread_Discription": "Evening Mist","PMS_Code": "531C","RGB_Code": "rgb(197, 174, 197)","Customer ": "aramark","Cust_Thread_Code": "1911","Cust_Thread_Discription": "Evening Mist","Cust_RGB_Code": "rgb(204, 174, 207)"},'+
     '{"Binated_Thread_Code": "B-1112","Thread_Discription": "Majestic Purple","PMS_Code": "2090C","RGB_Code": "rgb(84, 72, 129)","Customer ": "aramark","Cust_Thread_Code": "1832","Cust_Thread_Discription": "Purple","Cust_RGB_Code": "rgb(106, 86, 150)"},'+
     '{"Binated_Thread_Code": "B-1117","Thread_Discription": "Flamingo Pink","PMS_Code": "205C","RGB_Code": "rgb(214, 97, 142)","Customer ": "aramark","Cust_Thread_Code": "1909","Cust_Thread_Discription": "Electric Pink","Cust_RGB_Code": "rgb(242, 133, 182)"},'+
     '{"Binated_Thread_Code": "B-1118","Thread_Discription": "Overcast Gray","PMS_Code": "429C","RGB_Code": "rgb(137, 145, 146)","Customer ": "aramark","Cust_Thread_Code": "1718","Cust_Thread_Discription": "Smoke Grey","Cust_RGB_Code": "rgb(145, 155, 162)"},'+
     '{"Binated_Thread_Code": "B-1118","Thread_Discription": "Overcast Gray","PMS_Code": "429C","RGB_Code": "rgb(137, 145, 146)","Customer ": "aramark","Cust_Thread_Code": "1918","Cust_Thread_Discription": "Silver Grey","Cust_RGB_Code": "rgb(138, 140, 142)"},'+
     '{"Binated_Thread_Code": "B-1118","Thread_Discription": "Overcast Gray","PMS_Code": "429C","RGB_Code": "rgb(137, 145, 146)","Customer ": "aramark","Cust_Thread_Code": "N1918","Cust_Thread_Discription": "FR Grey","Cust_RGB_Code": "rgb(138, 140, 142)"},'+
     '{"Binated_Thread_Code": "B-1120","Thread_Discription": "Baby Pink","PMS_Code": "707C","RGB_Code": "rgb(230, 185, 200)","Customer ": "aramark","Cust_Thread_Code": "1777","Cust_Thread_Discription": "Melon","Cust_RGB_Code": "rgb(238, 135, 126)"},'+
     '{"Binated_Thread_Code": "B-1120","Thread_Discription": "Baby Pink","PMS_Code": "707C","RGB_Code": "rgb(230, 185, 200)","Customer ": "aramark","Cust_Thread_Code": "1815","Cust_Thread_Discription": "Lavender","Cust_RGB_Code": "rgb(248, 190, 209)"},'+
     '{"Binated_Thread_Code": "B-1122","Thread_Discription": "Deep Lilac","PMS_Code": "7664C","RGB_Code": "rgb(79, 54, 105)","Customer ": "aramark","Cust_Thread_Code": "1880","Cust_Thread_Discription": "Raspberry","Cust_RGB_Code": "rgb(121, 64, 133)"},'+
     //'{"Binated_Thread_Code": "B-1125","Thread_Discription": "Saffron","PMS_Code": "1225C","RGB_Code": "rgb(241, 177, 61)","Customer ": "aramark","Cust_Thread_Code": "MG","Cust_RGB_Code":"rgb()","Cust_Thread_Discription": "Metalic Gold"},'+
     '{"Binated_Thread_Code": "B-1125","Thread_Discription": "Saffron","PMS_Code": "1225C","RGB_Code": "rgb(241, 177, 61)","Customer ": "aramark","Cust_Thread_Code": "N1725","Cust_Thread_Discription": "FR Gold","Cust_RGB_Code": "rgb(202, 240 , 63)"},'+
     '{"Binated_Thread_Code": "B-1126","Thread_Discription": "Light Brown Sugar","PMS_Code": "10143C","RGB_Code": "rgb(174, 126, 91)","Customer ": "aramark","Cust_Thread_Code": "1926","Cust_Thread_Discription": "Dark Champagne","Cust_RGB_Code": "rgb(174, 132, 108)"},'+
     '{"Binated_Thread_Code": "B-1127","Thread_Discription": "Loofah","PMS_Code": "474C","RGB_Code": "rgb(219, 186, 166)","Customer ": "aramark","Cust_Thread_Code": "1927","Cust_Thread_Discription": "Shiny Penny","Cust_RGB_Code": "rgb(220, 177, 147)"},'+
     '{"Binated_Thread_Code": "B-1129","Thread_Discription": "Mud Pie","PMS_Code": "412C","RGB_Code": "rgb(73, 58, 52)","Customer ": "aramark","Cust_Thread_Code": "1929","Cust_Thread_Discription": "Brown Hare","Cust_RGB_Code": "rgb(106, 92, 84)"},'+
     '{"Binated_Thread_Code": "B-1131","Thread_Discription": "Espresso","PMS_Code": "Black C","RGB_Code": "rgb(60, 53, 50)","Customer ": "aramark","Cust_Thread_Code": "1931","Cust_Thread_Discription": "Bittersweet Chocolate","Cust_RGB_Code": "rgb(64, 58, 61)"},'+
     '{"Binated_Thread_Code": "B-1135","Thread_Discription": "Baby Chick","PMS_Code": "1205C","RGB_Code": "rgb(245, 215, 119)","Customer ": "aramark","Cust_Thread_Code": "1727","Cust_Thread_Discription": "Baby Chick","Cust_RGB_Code": "rgb(238, 212, 116)"},'+
     '{"Binated_Thread_Code": "B-1136","Thread_Discription": "Dark Taupe","PMS_Code": "7531C","RGB_Code": "rgb(140, 122, 109)","Customer ": "aramark","Cust_Thread_Code": "1736","Cust_Thread_Discription": "Dark Taupe","Cust_RGB_Code": "rgb(146, 134, 122)"},'+
     '{"Binated_Thread_Code": "B-1136","Thread_Discription": "Dark Taupe","PMS_Code": "7531C","RGB_Code": "rgb(140, 122, 109)","Customer ": "aramark","Cust_Thread_Code": "1928","Cust_Thread_Discription": "Natural Suede","Cust_RGB_Code": "rgb(142, 119, 102)"},'+
     '{"Binated_Thread_Code": "B-1137","Thread_Discription": "Citrus Burst","PMS_Code": "137C","RGB_Code": "rgb(243, 141, 33)","Customer ": "aramark","Cust_Thread_Code": "1137","Cust_Thread_Discription": "ATH Gold","Cust_RGB_Code": "rgb(243, 141, 13)"},'+
     '{"Binated_Thread_Code": "B-1137","Thread_Discription": "Citrus Burst","PMS_Code": "137C","RGB_Code": "rgb(243, 141, 33)","Customer ": "aramark","Cust_Thread_Code": "1951","Cust_Thread_Discription": "Gold","Cust_RGB_Code": "rgb(247, 154, 44)"},'+
     '{"Binated_Thread_Code": "B-1137","Thread_Discription": "Citrus Burst","PMS_Code": "137C","RGB_Code": "rgb(243, 141, 33)","Customer ": "aramark","Cust_Thread_Code": "1955","Cust_Thread_Discription": "Honey Dew","Cust_RGB_Code": "rgb(243, 139, 32)"},'+
     '{"Binated_Thread_Code": "B-1137","Thread_Discription": "Citrus Burst","PMS_Code": "137C","RGB_Code": "rgb(243, 141, 33)","Customer ": "aramark","Cust_Thread_Code": "1972","Cust_Thread_Discription": "Fluorescent Yellow Orange","Cust_RGB_Code": "rgb(254, 187, 18)"},'+
     '{"Binated_Thread_Code": "B-1138","Thread_Discription": "Doe Skin","PMS_Code": "9183C","RGB_Code": "rgb(205, 186, 165)","Customer ": "aramark","Cust_Thread_Code": "1938","Cust_Thread_Discription": "Medium Beige","Cust_RGB_Code": "rgb(186, 170, 154)"},'+
     '{"Binated_Thread_Code": "B-1142","Thread_Discription": "Peach Puff","PMS_Code": "4735C","RGB_Code": "rgb(182, 154, 142)","Customer ": "aramark","Cust_Thread_Code": "1660","Cust_Thread_Discription": "Sand Castle","Cust_RGB_Code": "rgb(177, 164, 160)"},'+
     '{"Binated_Thread_Code": "B-1143","Thread_Discription": "China Blue","PMS_Code": "2130C","RGB_Code": "rgb(75, 108, 154)","Customer ": "aramark","Cust_Thread_Code": "1830","Cust_Thread_Discription": "China Blue","Cust_RGB_Code": "rgb(101, 134, 188)"},'+
     '{"Binated_Thread_Code": "B-1145","Thread_Discription": "Coffee Bean","PMS_Code": "7603C","RGB_Code": "rgb(95, 64, 54)","Customer ": "aramark","Cust_Thread_Code": "1659","Cust_Thread_Discription": "Dark Brown","Cust_RGB_Code": "rgb(83, 57, 53)"},'+
     '{"Binated_Thread_Code": "B-1146","Thread_Discription": "Tomato Red","PMS_Code": "485C","RGB_Code": "rgb(211, 41, 40)","Customer ": "aramark","Cust_Thread_Code": "1878","Cust_Thread_Discription": "Dark Red","Cust_RGB_Code": "rgb(200, 48 ,43)"},'+
     '{"Binated_Thread_Code": "B-1147","Thread_Discription": "Christmas Red","PMS_Code": "1795C","RGB_Code": "rgb(182, 31, 49)","Customer ": "aramark","Cust_Thread_Code": "1947","Cust_Thread_Discription": "Flrsct Coral","Cust_RGB_Code": "rgb(240, 78, 73)"},'+
     '{"Binated_Thread_Code": "B-1147","Thread_Discription": "Christmas Red","PMS_Code": "1795C","RGB_Code": "rgb(182, 31, 49)","Customer ": "aramark","Cust_Thread_Code": "N1747","Cust_Thread_Discription": "FR Red","Cust_RGB_Code": "rgb(164, 30, 53)"},'+
     '{"Binated_Thread_Code": "B-1148","Thread_Discription": "Rustic Pink","PMS_Code": "183C","RGB_Code": "rgb(219, 139, 154)","Customer ": "aramark","Cust_Thread_Code": "1917","Cust_Thread_Discription": "Dusty Rose","Cust_RGB_Code": "rgb(204, 116, 136)"},'+
     '{"Binated_Thread_Code": "B-1149","Thread_Discription": "Tusk","PMS_Code": "9202C","RGB_Code": "rgb(220, 198, 180)","Customer ": "aramark","Cust_Thread_Code": "1682","Cust_Thread_Discription": "Beige","Cust_RGB_Code": "rgb(205, 191, 172)"},'+
     '{"Binated_Thread_Code": "B-1154","Thread_Discription": "Lipstick Rose","PMS_Code": "1785C","RGB_Code": "rgb(216, 70, 97)","Customer ": "aramark","Cust_Thread_Code": "1994","Cust_Thread_Discription": "Lipstick Rose","Cust_RGB_Code": "rgb(235, 78, 113)"},'+
     '{"Binated_Thread_Code": "B-1162","Thread_Discription": "Admiral Blue","PMS_Code": "2210C","RGB_Code": "rgb(33, 64, 75)","Customer ": "aramark","Cust_Thread_Code": "1962","Cust_Thread_Discription": "Admiral Blue","Cust_RGB_Code": "rgb(38, 69, 83)"},'+
     '{"Binated_Thread_Code": "B-1166","Thread_Discription": "Hanukkah Blue","PMS_Code": "2747C","RGB_Code": "rgb(32, 69, 131)","Customer ": "aramark","Cust_Thread_Code": "1676","Cust_Thread_Discription": "Blue","Cust_RGB_Code": "rgb(48, 76, 135)"},'+
     '{"Binated_Thread_Code": "B-1166","Thread_Discription": "Hanukkah Blue","PMS_Code": "2747C","RGB_Code": "rgb(32, 69, 131)","Customer ": "aramark","Cust_Thread_Code": "1767","Cust_Thread_Discription": "Dollar Blue","Cust_RGB_Code": "rgb(38, 62, 118)"},'+
     '{"Binated_Thread_Code": "B-1167","Thread_Discription": "Blue Ink","PMS_Code": "7687C","RGB_Code": "rgb(35, 74, 121)","Customer ": "aramark","Cust_Thread_Code": "1843","Cust_Thread_Discription": "Royal Blue","Cust_RGB_Code": "rgb(16, 71, 120)"},'+
     '{"Binated_Thread_Code": "B-1167","Thread_Discription": "Blue Ink","PMS_Code": "7687C","RGB_Code": "rgb(35, 74, 121)","Customer ": "aramark","Cust_Thread_Code": "N1843","Cust_Thread_Discription": "FR Royal","Cust_RGB_Code": "rgb(16, 71, 120)"},'+
     '{"Binated_Thread_Code": "B-1171","Thread_Discription": "Lemon Drop","PMS_Code": "135C","RGB_Code": "rgb(240, 221, 167)","Customer ": "aramark","Cust_Thread_Code": "1683","Cust_Thread_Discription": "Lemon Drop","Cust_RGB_Code": "rgb(254, 198, 88)"},'+
     '{"Binated_Thread_Code": "B-1172","Thread_Discription": "Egg Yolk","PMS_Code": "130C","RGB_Code": "rgb(233, 154, 40)","Customer ": "aramark","Cust_Thread_Code": "1771","Cust_Thread_Discription": "Mustard","Cust_RGB_Code": "rgb(225, 166, 66)"},'+
     '{"Binated_Thread_Code": "B-1172","Thread_Discription": "Egg Yolk","PMS_Code": "130C","RGB_Code": "rgb(233, 154, 40)","Customer ": "aramark","Cust_Thread_Code": "1625","Cust_Thread_Discription": "Butterscotch","Cust_RGB_Code": "rgb(194, 127, 42)"},'+
     '{"Binated_Thread_Code": "B-1172","Thread_Discription": "Egg Yolk","PMS_Code": "130C","RGB_Code": "rgb(233, 154, 40)","Customer ": "aramark","Cust_Thread_Code": "1626","Cust_Thread_Discription": "Glow","Cust_RGB_Code": "rgb(247, 198, 120)"},'+
     '{"Binated_Thread_Code": "B-1174","Thread_Discription": "Cinnamon Stick","PMS_Code": "1807C","RGB_Code": "rgb(133, 59, 57)","Customer ": "aramark","Cust_Thread_Code": "1898","Cust_Thread_Discription": "Auburn","Cust_RGB_Code": "rgb(158, 76, 57)"},'+
     '{"Binated_Thread_Code": "B-1174","Thread_Discription": "Cinnamon Stick","PMS_Code": "1807C","RGB_Code": "rgb(133, 59, 57)","Customer ": "aramark","Cust_Thread_Code": "1974","Cust_Thread_Discription": "Cinnamon Stick","Cust_RGB_Code": "rgb(139, 64, 65)"},'+
     '{"Binated_Thread_Code": "B-1175","Thread_Discription": "Dark Federal Blue","PMS_Code": "653C","RGB_Code": "rgb(61, 105, 141)","Customer ": "aramark","Cust_Thread_Code": "1775","Cust_Thread_Discription": "Smokey Blue","Cust_RGB_Code": "rgb(66, 124, 158)"},'+
     '{"Binated_Thread_Code": "B-1177","Thread_Discription": "Blue Bird","PMS_Code": "2935C","RGB_Code": "rgb(0, 110, 169)","Customer ": "aramark","Cust_Thread_Code": "1829","Cust_Thread_Discription": "Flrsct Blue","Cust_RGB_Code": "rgb(2, 103, 162)"},'+
     '{"Binated_Thread_Code": "B-1178","Thread_Discription": "Carrot","PMS_Code": "1645C","RGB_Code": "rgb(241, 106, 70)","Customer ": "aramark","Cust_Thread_Code": "1778","Cust_Thread_Discription": "Golden Poppy","Cust_RGB_Code": "rgb(230, 96, 62)"},'+
     '{"Binated_Thread_Code": "B-1180","Thread_Discription": "Daffodil","PMS_Code": "7404C","RGB_Code": "rgb(230, 195, 71)","Customer ": "aramark","Cust_Thread_Code": "1623","Cust_Thread_Discription": "Daffodil","Cust_RGB_Code": "rgb(244, 225, 84)"},'+
     '{"Binated_Thread_Code": "B-1180","Thread_Discription": "Daffodil","PMS_Code": "7404C","RGB_Code": "rgb(230, 195, 71)","Customer ": "aramark","Cust_Thread_Code": "1883","Cust_Thread_Discription": "Flrsct Yello","Cust_RGB_Code": "rgb(249, 237, 35)"},'+
     '{"Binated_Thread_Code": "B-1181","Thread_Discription": "Candy Apple Red","PMS_Code": "7427C","RGB_Code": "rgb(139, 37, 53)","Customer ": "aramark","Cust_Thread_Code": "1747","Cust_Thread_Discription": "Red","Cust_RGB_Code": "rgb(165, 29, 54)"},'+
     '{"Binated_Thread_Code": "B-1181","Thread_Discription": "Candy Apple Red","PMS_Code": "7427C","RGB_Code": "rgb(139, 37, 53)","Customer ": "aramark","Cust_Thread_Code": "1981","Cust_Thread_Discription": "Wine","Cust_RGB_Code": "rgb(136, 42, 58)"},'+
     '{"Binated_Thread_Code": "B-1181","Thread_Discription": "Candy Apple Red","PMS_Code": "7427C","RGB_Code": "rgb(139, 37, 53)","Customer ": "aramark","Cust_Thread_Code": "1982","Cust_Thread_Discription": "Sangria","Cust_RGB_Code": "rgb(128, 38, 50)"},'+
     '{"Binated_Thread_Code": "B-1182","Thread_Discription": "Mulberry","PMS_Code": "7637C","RGB_Code": "rgb(121, 44, 61)","Customer ": "aramark","Cust_Thread_Code": "1782","Cust_Thread_Discription": "Mulberry","Cust_RGB_Code": "rgb(134, 53, 73)"},'+
     '{"Binated_Thread_Code": "B-1183","Thread_Discription": "Cranberry","PMS_Code": "2041C","RGB_Code": "rgb(143, 51, 84)","Customer ": "aramark","Cust_Thread_Code": "1835","Cust_Thread_Discription": "Perfect Ruby","Cust_RGB_Code": "rgb(135, 50, 74)"},'+
     '{"Binated_Thread_Code": "B-1185","Thread_Discription": "Dark Teal","PMS_Code": "7719C","RGB_Code": "rgb(4, 100, 95)","Customer ": "aramark","Cust_Thread_Code": "1846","Cust_Thread_Discription": "Dark Teal","Cust_RGB_Code": "rgb(0, 146, 144)"},'+
     '{"Binated_Thread_Code": "B-1186","Thread_Discription": "Ruby Slipper","PMS_Code": "Rubin Red C","RGB_Code": "rgb(169, 30, 70)","Customer ": "aramark","Cust_Thread_Code": "1986","Cust_Thread_Discription": "Berry","Cust_RGB_Code": "rgb(172, 35, 70)"},'+
     '{"Binated_Thread_Code": "B-1188","Thread_Discription": "Chokecherry","PMS_Code": "249C","RGB_Code": "rgb(123, 61, 110)","Customer ": "aramark","Cust_Thread_Code": "1719","Cust_Thread_Discription": "MD Purple","Cust_RGB_Code": "rgb(111, 63, 101)"},'+
     '{"Binated_Thread_Code": "B-1189","Thread_Discription": "Moss Green","PMS_Code": "7743C","RGB_Code": "rgb(65, 85, 54)","Customer ": "aramark","Cust_Thread_Code": "1770","Cust_Thread_Discription": "Olive","Cust_RGB_Code": "rgb(71, 114, 62)"},'+
     '{"Binated_Thread_Code": "B-1196","Thread_Discription": "Medium Camo Green","PMS_Code": "456C","RGB_Code": "rgb(161, 131, 46)","Customer ": "aramark","Cust_Thread_Code": "1759","Cust_Thread_Discription": "Medium Camo Green","Cust_RGB_Code": "rgb(150, 125, 57)"},'+
     '{"Binated_Thread_Code": "B-1221","Thread_Discription": "Terra Cotta","PMS_Code": "7598C","RGB_Code": "rgb(171, 66, 52)","Customer ": "aramark","Cust_Thread_Code": "1821","Cust_Thread_Discription": "Dark Rust","Cust_RGB_Code": "rgb(164, 60, 53)"},'+
     '{"Binated_Thread_Code": "B-1223","Thread_Discription": "Lemon Tart","PMS_Code": "Yellow C","RGB_Code": "rgb(238, 199, 39)","Customer ": "aramark","Cust_Thread_Code": "1924","Cust_Thread_Discription": "Canary ","Cust_RGB_Code": "rgb(250, 212, 6)"},'+
     '{"Binated_Thread_Code": "B-1223","Thread_Discription": "Lemon Tart","PMS_Code": "Yellow C","RGB_Code": "rgb(238, 199, 39)","Customer ": "aramark","Cust_Thread_Code": "N1924","Cust_Thread_Discription": "FR Yellow","Cust_RGB_Code": "rgb(250, 212, 0)"},'+
     '{"Binated_Thread_Code": "B-1224","Thread_Discription": "Lemonade","PMS_Code": "2003C","RGB_Code": "rgb(225, 188, 79)","Customer ": "aramark","Cust_Thread_Code": "1735","Cust_Thread_Discription": "MD Yellow","Cust_RGB_Code": "rgb(242, 211, 99)"},'+
     '{"Binated_Thread_Code": "B-1225","Thread_Discription": "Liquid Gold","PMS_Code": "7563C","RGB_Code": "rgb(200, 141, 70)","Customer ": "aramark","Cust_Thread_Code": "1725","Cust_Thread_Discription": "Liquid Gold","Cust_RGB_Code": "rgb(202, 140, 61)"},'+
     '{"Binated_Thread_Code": "B-1226","Thread_Discription": "Amber","PMS_Code": "714C","RGB_Code": "rgb(211, 140, 99)","Customer ": "aramark","Cust_Thread_Code": "1753","Cust_Thread_Discription": "Penny","Cust_RGB_Code": "rgb(185, 108, 69)"},'+
     '{"Binated_Thread_Code": "B-1229","Thread_Discription": "Clove","PMS_Code": "8601C","RGB_Code": "rgb(94, 82, 72)","Customer ": "aramark","Cust_Thread_Code": "1663","Cust_Thread_Discription": "Clove","Cust_RGB_Code": "rgb(111, 100, 86)"},'+
     '{"Binated_Thread_Code": "B-1229","Thread_Discription": "Clove","PMS_Code": "8601C","RGB_Code": "rgb(94, 82, 72)","Customer ": "aramark","Cust_Thread_Code": "1936","Cust_Thread_Discription": "Mink","Cust_RGB_Code": "rgb(125, 112, 98)"},'+
     '{"Binated_Thread_Code": "B-1232","Thread_Discription": "Lavender","PMS_Code": "Violet 0631C","RGB_Code": "rgb(166, 153, 186)","Customer ": "aramark","Cust_Thread_Code": "1711","Cust_Thread_Discription": "Tulip","Cust_RGB_Code": "rgb(161, 140, 177)"},'+
     '{"Binated_Thread_Code": "B-1233","Thread_Discription": "Blackberry Purple","PMS_Code": "668C","RGB_Code": "rgb(79, 70, 100)","Customer ": "aramark","Cust_Thread_Code": "1632","Cust_Thread_Discription": "Blueberry Purple","Cust_RGB_Code": "rgb(65, 54, 79)"},'+
     '{"Binated_Thread_Code": "B-1234","Thread_Discription": "Hibiscus","PMS_Code": "7425C","RGB_Code": "rgb(191, 58, 100)","Customer ": "aramark","Cust_Thread_Code": "1786","Cust_Thread_Discription": "Hibiscus","Cust_RGB_Code": "rgb(177, 47, 85)"},'+
     '{"Binated_Thread_Code": "B-1235","Thread_Discription": "Crocus","PMS_Code": "2058C","RGB_Code": "rgb(155, 105, 142)","Customer ": "aramark","Cust_Thread_Code": "1831","Cust_Thread_Discription": "Plum","Cust_RGB_Code": "rgb(155, 100, 156)"},'+
     '{"Binated_Thread_Code": "B-1239","Thread_Discription": "Charcoal","PMS_Code": "10385C","RGB_Code": "rgb(88, 83, 82)","Customer ": "aramark","Cust_Thread_Code": "1640","Cust_Thread_Discription": "Lead","Cust_RGB_Code": "rgb(95, 98, 99)"},'+
     '{"Binated_Thread_Code": "B-1239","Thread_Discription": "Charcoal","PMS_Code": "10385C","RGB_Code": "rgb(88, 83, 82)","Customer ": "aramark","Cust_Thread_Code": "1739","Cust_Thread_Discription": "Charcoal","Cust_RGB_Code": "rgb(79, 75, 75)"},'+
     '{"Binated_Thread_Code": "B-1242","Thread_Discription": "Dark Denim","PMS_Code": "654C","RGB_Code": "rgb(35, 62, 92)","Customer ": "aramark","Cust_Thread_Code": "1742","Cust_Thread_Discription": "Blue Ink","Cust_RGB_Code": "rgb(35, 61, 92)"},'+
     '{"Binated_Thread_Code": "B-1242","Thread_Discription": "Dark Denim","PMS_Code": "654C","RGB_Code": "rgb(35, 62, 92)","Customer ": "aramark","Cust_Thread_Code": "1743","Cust_Thread_Discription": "Blue Ink","Cust_RGB_Code": "rgb(48, 56, 92)"},'+
     '{"Binated_Thread_Code": "B-1242","Thread_Discription": "Dark Denim","PMS_Code": "654C","RGB_Code": "rgb(35, 62, 92)","Customer ": "aramark","Cust_Thread_Code": "1967","Cust_Thread_Discription": "Light Navy","Cust_RGB_Code": "rgb(36, 58, 88)"},'+
     '{"Binated_Thread_Code": "B-1245","Thread_Discription": "Sea Foam Green","PMS_Code": "339C","RGB_Code": "rgb(41, 160, 133)","Customer ": "aramark","Cust_Thread_Code": "1845","Cust_Thread_Discription": "Mint","Cust_RGB_Code": "rgb(111, 195, 159)"},'+
     '{"Binated_Thread_Code": "B-1245","Thread_Discription": "Sea Foam Green","PMS_Code": "339C","RGB_Code": "rgb(41, 160, 133)","Customer ": "aramark","Cust_Thread_Code": "1847","Cust_Thread_Discription": "Sea Foam","Cust_RGB_Code": "rgb(67, 171, 147)"},'+
     '{"Binated_Thread_Code": "B-1246","Thread_Discription": "Teal Green","PMS_Code": "326C","RGB_Code": "rgb(0, 140, 135)","Customer ": "aramark","Cust_Thread_Code": "1746","Cust_Thread_Discription": "Light Turquoise","Cust_RGB_Code": "rgb(41, 163, 157)"},'+
     '{"Binated_Thread_Code": "B-1247","Thread_Discription": "Bottle Green","PMS_Code": "340C","RGB_Code": "rgb(2, 148, 110)","Customer ": "aramark","Cust_Thread_Code": "1989","Cust_Thread_Discription": "Leaf","Cust_RGB_Code": "rgb(7, 154, 103)"},'+
     '{"Binated_Thread_Code": "B-1248","Thread_Discription": "Margarita Lime","PMS_Code": "2283C","RGB_Code": "rgb(155, 205, 106)","Customer ": "aramark","Cust_Thread_Code": "1748","Cust_Thread_Discription": "Margarita Lime","Cust_RGB_Code": "rgb(172, 211, 120)"},'+
     '{"Binated_Thread_Code": "B-1249","Thread_Discription": "Shamrock","PMS_Code": "802C 2270C","RGB_Code": "rgb(18, 162, 74)","Customer ": "aramark","Cust_Thread_Code": "1950","Cust_Thread_Discription": "Erin Green","Cust_RGB_Code": "rgb(129, 195, 65)"},'+
     '{"Binated_Thread_Code": "B-1249","Thread_Discription": "Shamrock","PMS_Code": "802C 2270C","RGB_Code": "rgb(18, 162, 74)","Customer ": "aramark","Cust_Thread_Code": "1901","Cust_Thread_Discription": "Fluorescent Green","Cust_RGB_Code": "rgb(96, 172, 69)"},'+
     '{"Binated_Thread_Code": "B-1250","Thread_Discription": "Christmas Green","PMS_Code": "3415C","RGB_Code": "rgb(0, 114, 73)","Customer ": "aramark","Cust_Thread_Code": "1750","Cust_Thread_Discription": "Christmas Green","Cust_RGB_Code": "rgb(4, 114, 75)"},'+
     '{"Binated_Thread_Code": "B-1251","Thread_Discription": "Kelly Green","PMS_Code": "7481C","RGB_Code": "rgb(5, 146, 75)","Customer ": "aramark","Cust_Thread_Code": "1988","Cust_Thread_Discription": "Kelly Green","Cust_RGB_Code": "rgb(7, 140, 69)"},'+
     '{"Binated_Thread_Code": "B-1255","Thread_Discription": "Khaki","PMS_Code": "7407C","RGB_Code": "rgb(192, 148, 107)","Customer ": "aramark","Cust_Thread_Code": "1673","Cust_Thread_Discription": "Penny","Cust_RGB_Code": "rgb(173, 142, 94)"},'+
     '{"Binated_Thread_Code": "B-1257","Thread_Discription": "Bronze","PMS_Code": "7566C","RGB_Code": "rgb(157, 87, 46)","Customer ": "aramark","Cust_Thread_Code": "1857","Cust_Thread_Discription": "Date","Cust_RGB_Code": "rgb(138, 83, 54)"},'+
     '{"Binated_Thread_Code": "B-1257","Thread_Discription": "Bronze","PMS_Code": "7566C","RGB_Code": "rgb(157, 87, 46)","Customer ": "aramark","Cust_Thread_Code": "1973","Cust_Thread_Discription": "Bronze","Cust_RGB_Code": "rgb(148, 94, 53)"},'+
     '{"Binated_Thread_Code": "B-1259","Thread_Discription": "Cocoa","PMS_Code": "8561C","RGB_Code": "rgb(121, 89, 85)","Customer ": "aramark","Cust_Thread_Code": "1654","Cust_Thread_Discription": "Cocoa","Cust_RGB_Code": "rgb(102, 80, 77)"},'+
     '{"Binated_Thread_Code": "B-1260","Thread_Discription": "Canvas","PMS_Code": "4545C","RGB_Code": "rgb(191, 176, 133)","Customer ": "aramark","Cust_Thread_Code": "1661","Cust_Thread_Discription": "Moon Beam","Cust_RGB_Code": "rgb(240, 234, 201)"},'+
     '{"Binated_Thread_Code": "B-1273","Thread_Discription": "Peanut Brittle","PMS_Code": "7562C","RGB_Code": "rgb(167, 140, 97)","Customer ": "aramark","Cust_Thread_Code": "1939","Cust_Thread_Discription": "Cork","Cust_RGB_Code": "rgb(160, 138, 97)"},'+
     '{"Binated_Thread_Code": "B-1274","Thread_Discription": "Porcelain Blue","PMS_Code": "292C","RGB_Code": "rgb(112, 168, 198)","Customer ": "aramark","Cust_Thread_Code": "1871","Cust_Thread_Discription": "Sky Blue","Cust_RGB_Code": "rgb(120, 172, 200)"},'+
     '{"Binated_Thread_Code": "B-1276","Thread_Discription": "Light Denim","PMS_Code": "646C","RGB_Code": "rgb(65, 117, 152)","Customer ": "aramark","Cust_Thread_Code": "1674","Cust_Thread_Discription": "Light Denim","Cust_RGB_Code": "rgb(142, 188, 220)"},'+
     '{"Binated_Thread_Code": "B-1276","Thread_Discription": "Light Denim","PMS_Code": "646C","RGB_Code": "rgb(65, 117, 152)","Customer ": "aramark","Cust_Thread_Code": "1675","Cust_Thread_Discription": "Nordic Blue","Cust_RGB_Code": "rgb(122, 174, 213)"},'+
     '{"Binated_Thread_Code": "B-1278","Thread_Discription": "Orange Icing","PMS_Code": "1505C","RGB_Code": "rgb(241, 104, 36)","Customer ": "aramark","Cust_Thread_Code": "1765","Cust_Thread_Discription": "Tiger","Cust_RGB_Code": "rgb(236, 113, 35)"},'+
     '{"Binated_Thread_Code": "B-1278","Thread_Discription": "Orange Icing","PMS_Code": "1505C","RGB_Code": "rgb(241, 104, 36)","Customer ": "aramark","Cust_Thread_Code": "1965","Cust_Thread_Discription": "Burnt Orange","Cust_RGB_Code": "rgb(242, 105, 39)"},'+
     '{"Binated_Thread_Code": "B-1278","Thread_Discription": "Orange Icing","PMS_Code": "1505C","RGB_Code": "rgb(241, 104, 36)","Customer ": "aramark","Cust_Thread_Code": "N1965","Cust_Thread_Discription": "FR Orange","Cust_RGB_Code": "rgb(249,103, 34)"},'+
     '{"Binated_Thread_Code": "B-1279","Thread_Discription": "Tropical Teal","PMS_Code": "3282C","RGB_Code": "rgb(3, 130, 116)","Customer ": "aramark","Cust_Thread_Code": "1849","Cust_Thread_Discription": "Tropical Teal","Cust_RGB_Code": "rgb(35, 124, 105)"},'+
     '{"Binated_Thread_Code": "B-1280","Thread_Discription": "Oregon Green","PMS_Code": "3288C","RGB_Code": "rgb(2, 120, 100)","Customer ": "aramark","Cust_Thread_Code": "1879","Cust_Thread_Discription": "Pine Green","Cust_RGB_Code": "rgb(0, 121, 102)"},'+
     '{"Binated_Thread_Code": "B-1281","Thread_Discription": "Radish","PMS_Code": "193C","RGB_Code": "rgb(161, 35, 65)","Customer ": "aramark","Cust_Thread_Code": "1781","Cust_Thread_Discription": "Burgundy","Cust_RGB_Code": "rgb(154, 32, 60)"},'+
     '{"Binated_Thread_Code": "B-1286","Thread_Discription": "Mist","PMS_Code": "Cool Grey 1C","RGB_Code": "rgb(208, 206, 202)","Customer ": "aramark","Cust_Thread_Code": "1686","Cust_Thread_Discription": "Mist","Cust_RGB_Code": "rgb(210, 211, 210)"},'+
     '{"Binated_Thread_Code": "B-1287","Thread_Discription": "Gun Metal","PMS_Code": "10190C","RGB_Code": "rgb(107, 106, 106)","Customer ": "aramark","Cust_Thread_Code": "1741","Cust_Thread_Discription": "Gun Metal ","Cust_RGB_Code": "rgb(117, 118, 116)"},'+
     '{"Binated_Thread_Code": "B-1289","Thread_Discription": "Silver Mound","PMS_Code": "631C","RGB_Code": "rgb(73, 152, 164)","Customer ": "aramark","Cust_Thread_Code": "1888","Cust_Thread_Discription": "Turquoise","Cust_RGB_Code": "rgb(1, 161, 163)"},'+
     '{"Binated_Thread_Code": "B-1291","Thread_Discription": "Marlin","PMS_Code": "315C","RGB_Code": "rgb(9, 102, 116)","Customer ": "aramark","Cust_Thread_Code": "1891","Cust_Thread_Discription": "Dark Teal","Cust_RGB_Code": "rgb(4, 86, 97)"},'+
     '{"Binated_Thread_Code": "B-1292","Thread_Discription": "Limestone","PMS_Code": "317C","RGB_Code": "rgb(143, 196, 196)","Customer ": "aramark","Cust_Thread_Code": "1692","Cust_Thread_Discription": "Sprite","Cust_RGB_Code": "rgb(159, 199, 195)"},'+
     '{"Binated_Thread_Code": "B-1293","Thread_Discription": "Malachite","PMS_Code": "322C","RGB_Code": "rgb(2, 110, 113)","Customer ": "aramark","Cust_Thread_Code": "1890","Cust_Thread_Discription": "Midnight Green","Cust_RGB_Code": "rgb(0, 125, 129)"},'+
     '{"Binated_Thread_Code": "B-1294","Thread_Discription": "Liberty","PMS_Code": "&nbsp;633C","RGB_Code": "rgb(7, 130, 155)","Customer ": "aramark","Cust_Thread_Code": "1896","Cust_Thread_Discription": "Liberty","Cust_RGB_Code": "rgb(6, 113, 137)"},'+
     '{"Binated_Thread_Code": "B-1295","Thread_Discription": "Cyan","PMS_Code": "7460C","RGB_Code": "rgb(5, 141, 173)","Customer ": "aramark","Cust_Thread_Code": "1695","Cust_Thread_Discription": "Sea Blue","Cust_RGB_Code": "rgb(7, 138, 163)"},'+
     '{"Binated_Thread_Code": "B-1295","Thread_Discription": "Cyan","PMS_Code": "7460C","RGB_Code": "rgb(5, 141, 173)","Customer ": "aramark","Cust_Thread_Code": "1977","Cust_Thread_Discription": "Pacific Blue","Cust_RGB_Code": "rgb(11, 129, 175)"},'+
     '{"Binated_Thread_Code": "B-1295","Thread_Discription": "Cyan","PMS_Code": "7460C","RGB_Code": "rgb(5, 141, 173)","Customer ": "aramark","Cust_Thread_Code": "N1977","Cust_Thread_Discription": "Peacock Blue","Cust_RGB_Code": "rgb(0, 129, 175)"},'+
     '{"Binated_Thread_Code": "B-1296","Thread_Discription": "Deep Ocean","PMS_Code": "7469C","RGB_Code": "rgb(10, 97, 128)","Customer ": "aramark","Cust_Thread_Code": "1762","Cust_Thread_Discription": "Deep Ocean","Cust_RGB_Code": "rgb(23, 84, 105)"},'+
     '{"Binated_Thread_Code": "B-1297","Thread_Discription": "Calypso Blue","PMS_Code": "2193C","RGB_Code": "rgb(7, 114, 163)","Customer ": "aramark","Cust_Thread_Code": "1797","Cust_Thread_Discription": "Thrifty Blue","Cust_RGB_Code": "rgb(3, 105, 155)"},'+
     '{"Binated_Thread_Code": "B-1298","Thread_Discription": "Tree Frog","PMS_Code": "3272C","RGB_Code": "rgb(5, 135, 123)","Customer ": "aramark","Cust_Thread_Code": "1685","Cust_Thread_Discription": "Tree Frog","Cust_RGB_Code": "rgb(0, 135, 130)"},'+
     '{"Binated_Thread_Code": "B-1299","Thread_Discription": "Green Turquoise","PMS_Code": "326C","RGB_Code": "rgb(0, 185, 172)","Customer ": "aramark","Cust_Thread_Code": "1799","Cust_Thread_Discription": "Green Turquoise","Cust_RGB_Code": "rgb(6, 176, 158)"},'+
     '{"Binated_Thread_Code": "B-1305","Thread_Discription": "Chamois","PMS_Code": "4545C","RGB_Code": "rgb(194, 182, 152)","Customer ": "aramark","Cust_Thread_Code": "1863","Cust_Thread_Discription": "Chamois","Cust_RGB_Code": "rgb(219, 211, 178)"},'+
     '{"Binated_Thread_Code": "B-1307","Thread_Discription": "Raspberry Punch","PMS_Code": "Red 032 C","RGB_Code": "rgb(218, 71, 82)","Customer ": "aramark","Cust_Thread_Code": "1754","Cust_Thread_Discription": "Persimmon","Cust_RGB_Code": "rgb(216, 59, 75)"},'+
     '{"Binated_Thread_Code": "B-1317","Thread_Discription": "Blush Pink","PMS_Code": "5035C ","RGB_Code": "rgb(234, 160, 156)","Customer ": "aramark","Cust_Thread_Code": "1819","Cust_Thread_Discription": "Blush Pink","Cust_RGB_Code": "rgb(246, 158, 157)"},'+
     '{"Binated_Thread_Code": "B-1318","Thread_Discription": "Graphite","PMS_Code": "Black C","RGB_Code": "rgb(67, 66, 72)","Customer ": "aramark","Cust_Thread_Code": "1619","Cust_Thread_Discription": "Granite","Cust_RGB_Code": "rgb(100, 102, 109)"},'+
     '{"Binated_Thread_Code": "B-1318","Thread_Discription": "Graphite","PMS_Code": "Black C","RGB_Code": "rgb(67, 66, 72)","Customer ": "aramark","Cust_Thread_Code": "1620","Cust_Thread_Discription": "Shrimp","Cust_RGB_Code": "rgb(244, 140, 152)"},'+
     '{"Binated_Thread_Code": "B-1320","Thread_Discription": "Purple Heart","PMS_Code": "519C","RGB_Code": "rgb(91, 65, 92)","Customer ": "aramark","Cust_Thread_Code": "1680","Cust_Thread_Discription": "Purple Heart","Cust_RGB_Code": "rgb(93, 61, 92)"},'+
     '{"Binated_Thread_Code": "B-1321","Thread_Discription": "Bubble Gum Pink","PMS_Code": "2037C","RGB_Code": "rgb(225, 147, 184)","Customer ": "aramark","Cust_Thread_Code": "1921","Cust_Thread_Discription": "Wild Pink","Cust_RGB_Code": "rgb(244, 148, 184)"},'+
     '{"Binated_Thread_Code": "B-1322","Thread_Discription": "Royal Purple","PMS_Code": "2685C","RGB_Code": "rgb(66, 64, 122)","Customer ": "aramark","Cust_Thread_Code": "1922","Cust_Thread_Discription": "Purple Accent","Cust_RGB_Code": "rgb(78, 51, 118)"},'+
     '{"Binated_Thread_Code": "B-1328","Thread_Discription": "Buckskin","PMS_Code": "4725C","RGB_Code": "rgb(153, 126, 111)","Customer ": "aramark","Cust_Thread_Code": "1729","Cust_Thread_Discription": "Buckskin","Cust_RGB_Code": "rgb(150, 124, 109)"},'+
     '{"Binated_Thread_Code": "B-1329","Thread_Discription": "Toasted Marshmellow","PMS_Code": "7614C","RGB_Code": "rgb(126, 97, 85)","Customer ": "aramark","Cust_Thread_Code": "1745","Cust_Thread_Discription": "Toasted Marshmellow","Cust_RGB_Code": "rgb(119, 94, 84)"},'+
     '{"Binated_Thread_Code": "B-1330","Thread_Discription": "Bahamas Blue","PMS_Code": "2725C","RGB_Code": "rgb(82, 95, 153)","Customer ": "aramark","Cust_Thread_Code": "1933","Cust_Thread_Discription": "Lavendar Lilac","Cust_RGB_Code": "rgb(122, 129, 179)"},'+
     '{"Binated_Thread_Code": "B-1334","Thread_Discription": "Purple Passion","PMS_Code": "255C","RGB_Code": "rgb(98, 51, 103)","Customer ": "aramark","Cust_Thread_Code": "1833","Cust_Thread_Discription": "Heliotrope","Cust_RGB_Code": "rgb(120, 46, 116)"},'+
     '{"Binated_Thread_Code": "B-1334","Thread_Discription": "Purple Passion","PMS_Code": "255C","RGB_Code": "rgb(98, 51, 103)","Customer ": "aramark","Cust_Thread_Code": "1634","Cust_Thread_Discription": "Dark Purple","Cust_RGB_Code": "rgb(64, 53, 90)"},'+
     '{"Binated_Thread_Code": "B-1334","Thread_Discription": "Purple Passion","PMS_Code": "255C","RGB_Code": "rgb(98, 51, 103)","Customer ": "aramark","Cust_Thread_Code": "1635","Cust_Thread_Discription": "Dark Maroon","Cust_RGB_Code": "rgb(109, 48, 66)"},'+
     '{"Binated_Thread_Code": "B-1334","Thread_Discription": "Purple Passion","PMS_Code": "255C","RGB_Code": "rgb(98, 51, 103)","Customer ": "aramark","Cust_Thread_Code": "1836","Cust_Thread_Discription": "Cappuccino","Cust_RGB_Code": "rgb(77, 56, 57)"},'+
     '{"Binated_Thread_Code": "B-1335","Thread_Discription": "Dark Periwinkle","PMS_Code": "7456C","RGB_Code": "rgb(70, 102, 163)","Customer ": "aramark","Cust_Thread_Code": "1930","Cust_Thread_Discription": "Bahamas Blue","Cust_RGB_Code": "rgb(74, 82, 145)"},'+
     '{"Binated_Thread_Code": "B-1335","Thread_Discription": "Dark Periwinkle","PMS_Code": "7456C","RGB_Code": "rgb(70, 102, 163)","Customer ": "aramark","Cust_Thread_Code": "1943","Cust_Thread_Discription": "Dark Periwinkle","Cust_RGB_Code": "rgb(92, 113, 173)"},'+
     '{"Binated_Thread_Code": "B-1336","Thread_Discription": "Saddle Brown","PMS_Code": "10379C","RGB_Code": "rgb(111, 90, 83)","Customer ": "aramark","Cust_Thread_Code": "1744","Cust_Thread_Discription": "Siamese Cat","Cust_RGB_Code": "rgb(105, 88, 77)"},'+
     '{"Binated_Thread_Code": "B-1342","Thread_Discription": "Fawn","PMS_Code": "7514C","RGB_Code": "rgb(191, 153, 136)","Customer ": "aramark","Cust_Thread_Code": "1656","Cust_Thread_Discription": "Amber Beige","Cust_RGB_Code": "rgb(190, 154, 136)"},'+
     '{"Binated_Thread_Code": "B-1344","Thread_Discription": "Camel","PMS_Code": "10356C","RGB_Code": "rgb(144, 114, 86)","Customer ": "aramark","Cust_Thread_Code": "1730","Cust_Thread_Discription": "Cumin ","Cust_RGB_Code": "rgb(126, 93, 58)"},'+
     '{"Binated_Thread_Code": "B-1344","Thread_Discription": "Camel","PMS_Code": "10356C","RGB_Code": "rgb(144, 114, 86)","Customer ": "aramark","Cust_Thread_Code": "1885","Cust_Thread_Discription": "Camel","Cust_RGB_Code": "rgb(160, 127, 98)"},'+
     '{"Binated_Thread_Code": "B-1348","Thread_Discription": "Antique Bronze","PMS_Code": "872C","RGB_Code": "rgb(122, 95, 62)","Customer ": "aramark","Cust_Thread_Code": "1906","Cust_Thread_Discription": "Antique Bronze","Cust_RGB_Code": "rgb(107, 87, 65)"},'+
     '{"Binated_Thread_Code": "B-1349","Thread_Discription": "Palomino","PMS_Code": "127C","RGB_Code": "rgb(238, 206, 135)","Customer ": "aramark","Cust_Thread_Code": "1861","Cust_Thread_Discription": "Palamino","Cust_RGB_Code": "rgb(241, 204, 124)"},'+
     '{"Binated_Thread_Code": "B-1351","Thread_Discription": "Alligator","PMS_Code": "3298C","RGB_Code": "rgb(23, 91, 75)","Customer ": "aramark","Cust_Thread_Code": "1979","Cust_Thread_Discription": "TWRA Green","Cust_RGB_Code": "rgb(2, 95, 68)"},'+
     '{"Binated_Thread_Code": "B-1352","Thread_Discription": "Old Gold","PMS_Code": "7753C","RGB_Code": "rgb(183, 139, 45)","Customer ": "aramark","Cust_Thread_Code": "1792","Cust_Thread_Discription": "Ginger","Cust_RGB_Code": "rgb(178, 137, 54)"},'+
     '{"Binated_Thread_Code": "B-1354","Thread_Discription": "Watermelon","PMS_Code": "191C","RGB_Code": "rgb(204, 77, 109)","Customer ": "aramark","Cust_Thread_Code": "1993","Cust_Thread_Discription": "Watermelon","Cust_RGB_Code": "rgb(215, 51, 93)"},'+
     '{"Binated_Thread_Code": "B-1356","Thread_Discription": "Pink Pearl","PMS_Code": "&nbsp;685C","RGB_Code": "rgb(181, 153, 161)","Customer ": "aramark","Cust_Thread_Code": "1731","Cust_Thread_Discription": "Satin Wine","Cust_RGB_Code": "rgb(158, 126, 147)"},'+
     '{"Binated_Thread_Code": "B-1358","Thread_Discription": "Cedar Bark","PMS_Code": "1817C","RGB_Code": "rgb(120, 79, 79)","Customer ": "aramark","Cust_Thread_Code": "1941","Cust_Thread_Discription": "Heather","Cust_RGB_Code": "rgb(188, 139, 143)"},'+
     '{"Binated_Thread_Code": "B-1358","Thread_Discription": "Cedar Bark","PMS_Code": "1817C","RGB_Code": "rgb(120, 79, 79)","Customer ": "aramark","Cust_Thread_Code": "1942","Cust_Thread_Discription": "Rose Gold","Cust_RGB_Code": "rgb(143, 87, 84)"},'+
     '{"Binated_Thread_Code": "B-1358","Thread_Discription": "Cedar Bark","PMS_Code": "1817C","RGB_Code": "rgb(120, 79, 79)","Customer ": "aramark","Cust_Thread_Code": "1958","Cust_Thread_Discription": "Coffee Bean","Cust_RGB_Code": "rgb(113, 74, 75)"},'+
     '{"Binated_Thread_Code": "B-1359","Thread_Discription": "Golden Nugget","PMS_Code": "7409C","RGB_Code": "rgb(204, 150, 44)","Customer ": "aramark","Cust_Thread_Code": "1724","Cust_Thread_Discription": "Gold Nugget","Cust_RGB_Code": "rgb(223, 174, 55)"},'+
     '{"Binated_Thread_Code": "B-1360","Thread_Discription": "Dusty Blue","PMS_Code": "5415C","RGB_Code": "rgb(118, 145, 161)","Customer ": "aramark","Cust_Thread_Code": "1960","Cust_Thread_Discription": "Twilight Blue","Cust_RGB_Code": "rgb(115, 140, 158)"},'+
     '{"Binated_Thread_Code": "B-1364","Thread_Discription": "Storm Sky Blue","PMS_Code": "2139C","RGB_Code": "rgb(73, 90, 110)","Customer ": "aramark","Cust_Thread_Code": "1964","Cust_Thread_Discription": "Slate Blue","Cust_RGB_Code": "rgb(73, 91, 114)"},'+
     '{"Binated_Thread_Code": "B-1365","Thread_Discription": "Dusty Plum","PMS_Code": "2111C","RGB_Code": "rgb(66, 74, 96)","Customer ": "aramark","Cust_Thread_Code": "1963","Cust_Thread_Discription": "Dusty Plum","Cust_RGB_Code": "rgb(76, 88, 109)"},'+
     '{"Binated_Thread_Code": "B-1368","Thread_Discription": "Night Sky","PMS_Code": "533C","RGB_Code": "rgb(43, 56, 75)","Customer ": "aramark","Cust_Thread_Code": "1976","Cust_Thread_Discription": "Ash","Cust_RGB_Code": "rgb(45, 55, 70)"},'+
     '{"Binated_Thread_Code": "B-1369","Thread_Discription": "Fresh Pine","PMS_Code": "7740C","RGB_Code": "rgb(60, 123, 63)","Customer ": "aramark","Cust_Thread_Code": "1650","Cust_Thread_Discription": "Fresh Pine","Cust_RGB_Code": "rgb(56, 122, 59)"},'+
     '{"Binated_Thread_Code": "B-1371","Thread_Discription": "Deep Sea","PMS_Code": "3292C","RGB_Code": "rgb(35, 85, 79)","Customer ": "aramark","Cust_Thread_Code": "1690","Cust_Thread_Discription": "Blue Spruce","Cust_RGB_Code": "rgb(25, 76, 76)"},'+
     '{"Binated_Thread_Code": "B-1376","Thread_Discription": "Space Blue","PMS_Code": "302C","RGB_Code": "rgb(36, 79, 104)","Customer ": "aramark","Cust_Thread_Code": "1975","Cust_Thread_Discription": "Colonial Blue","Cust_RGB_Code": "rgb(41, 86, 121)"},'+
     '{"Binated_Thread_Code": "B-1378","Thread_Discription": "Paprika","PMS_Code": "2028C","RGB_Code": "rgb(221, 59, 39)","Customer ": "aramark","Cust_Thread_Code": "1987","Cust_Thread_Discription": "Dark Orange","Cust_RGB_Code": "rgb(227, 63, 38)"},'+
     '{"Binated_Thread_Code": "B-1384","Thread_Discription": "Merlot","PMS_Code": "7638C","RGB_Code": "rgb(112, 45, 57)","Customer ": "aramark","Cust_Thread_Code": "1784","Cust_Thread_Discription": "Russet","Cust_RGB_Code": "rgb(117, 45, 59)"},'+
     '{"Binated_Thread_Code": "B-1384","Thread_Discription": "Merlot","PMS_Code": "7638C","RGB_Code": "rgb(112, 45, 57)","Customer ": "aramark","Cust_Thread_Code": "N1784","Cust_Thread_Discription": "FR Burgundy","Cust_RGB_Code": "rgb(117, 45, 59)"},'+
     '{"Binated_Thread_Code": "B-1389","Thread_Discription": "Bordeaux","PMS_Code": "7435C","RGB_Code": "rgb(117, 47, 75)","Customer ": "aramark","Cust_Thread_Code": "1785","Cust_Thread_Discription": "Bordeaux","Cust_RGB_Code": "rgb(105, 44, 69)"},'+
     '{"Binated_Thread_Code": "B-1391","Thread_Discription": "Spruce Green","PMS_Code": "5545C","RGB_Code": "rgb(80, 108, 99)","Customer ": "aramark","Cust_Thread_Code": "1903","Cust_Thread_Discription": "Hunter Green","Cust_RGB_Code": "rgb(59, 90, 79)"},'+
     '{"Binated_Thread_Code": "B-1394","Thread_Discription": "Kale","PMS_Code": "5743C","RGB_Code": "rgb(81, 85, 69)","Customer ": "aramark","Cust_Thread_Code": "1969","Cust_Thread_Discription": "Army Green","Cust_RGB_Code": "rgb(108, 109, 89)"},'+
     '{"Binated_Thread_Code": "B-1396","Thread_Discription": "Dark Sage","PMS_Code": "5615C","RGB_Code": "rgb(82, 98, 81)","Customer ": "aramark","Cust_Thread_Code": "1904","Cust_Thread_Discription": "Dark Sage","Cust_RGB_Code": "rgb(72, 92, 75)"},'+
     '{"Binated_Thread_Code": "B-1397","Thread_Discription": "Evergreen","PMS_Code": "3305C","RGB_Code": "rgb(35, 70, 60)","Customer ": "aramark","Cust_Thread_Code": "1704","Cust_Thread_Discription": "Evergreen","Cust_RGB_Code": "rgb(27, 75, 64)"},'+
     '{"Binated_Thread_Code": "B-1397","Thread_Discription": "Evergreen","PMS_Code": "3305C","RGB_Code": "rgb(35, 70, 60)","Customer ": "aramark","Cust_Thread_Code": "1996","Cust_Thread_Discription": "Deep Emerald","Cust_RGB_Code": "rgb(43, 67, 65)"},'+
     '{"Binated_Thread_Code": "B-1406","Thread_Discription": "Dark Camo Green","PMS_Code": "7764C","RGB_Code": "rgb(79, 79, 55)","Customer ": "aramark","Cust_Thread_Code": "1796","Cust_Thread_Discription": "Aged Moss","Cust_RGB_Code": "rgb(96, 88, 47)"},'+
     '{"Binated_Thread_Code": "B-1437","Thread_Discription": "Summer Sun","PMS_Code": "2010C","RGB_Code": "rgb(250, 167, 27)","Customer ": "aramark","Cust_Thread_Code": "1825","Cust_Thread_Discription": "Flrsct Gold","Cust_RGB_Code": "rgb(247, 178, 25)"},'+
     '{"Binated_Thread_Code": "B-1447","Thread_Discription": "Cinnamon Candy","PMS_Code": "199C","RGB_Code": "rgb(175, 35, 37)","Customer ": "aramark","Cust_Thread_Code": "1637","Cust_Thread_Discription": "Foxy Red","Cust_RGB_Code": "rgb(188, 35, 49)"},'+
     '{"Binated_Thread_Code": "B-1451","Thread_Discription": "Celery","PMS_Code": "577C","RGB_Code": "rgb(139, 160, 92)","Customer ": "aramark","Cust_Thread_Code": "1768","Cust_Thread_Discription": "Bamboo Green","Cust_RGB_Code": "rgb(170, 185, 131)"},'+
     '{"Binated_Thread_Code": "B-1470","Thread_Discription": "Vegas Gold","PMS_Code": "7508C","RGB_Code": "rgb(213, 173, 105)","Customer ": "aramark","Cust_Thread_Code": "1670","Cust_Thread_Discription": "Gold Khaki","Cust_RGB_Code": "rgb(213, 167, 104)"},'+
     '{"Binated_Thread_Code": "B-1480","Thread_Discription": "Rain Forest","PMS_Code": "341C","RGB_Code": "rgb(0, 107, 72)","Customer ": "aramark","Cust_Thread_Code": "1780","Cust_Thread_Discription": "Rain Forrest","Cust_RGB_Code": "rgb(2, 105, 83)"},'+
     '{"Binated_Thread_Code": "B-1485","Thread_Discription": "Electric Red","PMS_Code": "185C","RGB_Code": "rgb(200, 37, 45)","Customer ": "aramark","Cust_Thread_Code": "1734","Cust_Thread_Discription": "Saffron","Cust_RGB_Code": "rgb(229, 55, 71)"},'+
     '{"Binated_Thread_Code": "B-1488","Thread_Discription": "Dark Magenta","PMS_Code": "7650C","RGB_Code": "rgb(96, 39, 79)","Customer ": "aramark","Cust_Thread_Code": "1788","Cust_Thread_Discription": "Dark Magenta","Cust_RGB_Code": "rgb(120, 51, 106)"},'+
     '{"Binated_Thread_Code": "B-1489","Thread_Discription": "Clover","PMS_Code": "575C","RGB_Code": "rgb(84, 102, 46)","Customer ": "aramark","Cust_Thread_Code": "1769","Cust_Thread_Discription": "Clover","Cust_RGB_Code": "rgb(93, 120, 53)"},'+
     '{"Binated_Thread_Code": "B-1491","Thread_Discription": "Brass","PMS_Code": "7509C","RGB_Code": "rgb(167, 120, 48)","Customer ": "aramark","Cust_Thread_Code": "1791","Cust_Thread_Discription": "Old Gold","Cust_RGB_Code": "rgb(176, 122, 64)"},'+
     '{"Binated_Thread_Code": "B-1494","Thread_Discription": "Olive Green","PMS_Code": "7760C","RGB_Code": "rgb(124, 111, 55)","Customer ": "aramark","Cust_Thread_Code": "1790","Cust_Thread_Discription": "Dill Pickle","Cust_RGB_Code": "rgb(127, 112, 49)"},'+
     '{"Binated_Thread_Code": "B-1495","Thread_Discription": "Safari","PMS_Code": "574C","RGB_Code": "rgb(76, 84, 44)","Customer ": "aramark","Cust_Thread_Code": "1905","Cust_Thread_Discription": "Moss Green","Cust_RGB_Code": "rgb(60, 75, 56)"},'+
     '{"Binated_Thread_Code": "B-1610","Thread_Discription": "Silver","PMS_Code": "5455C","RGB_Code": "rgb(183, 195, 197)","Customer ": "aramark","Cust_Thread_Code": "1610","Cust_Thread_Discription": "Silver","Cust_RGB_Code": "rgb(183, 195, 197)"},'+
     '{"Binated_Thread_Code": "B-1610","Thread_Discription": "Silver","PMS_Code": "5455C","RGB_Code": "rgb(183, 195, 197)","Customer ": "aramark","Cust_Thread_Code": "N1610","Cust_Thread_Discription": "FR Silver","Cust_RGB_Code": "rgb(183, 195, 197)"},'+
     '{"Binated_Thread_Code": "B-1613","Thread_Discription": "Gull Gray","PMS_Code": "443C","RGB_Code": "rgb(147, 158, 158)","Customer ": "aramark","Cust_Thread_Code": "1613","Cust_Thread_Discription": "Corn Grey","Cust_RGB_Code": "rgb(147, 158, 158)"},'+
     '{"Binated_Thread_Code": "B-1614","Thread_Discription": "Twister","PMS_Code": "425C","RGB_Code": "rgb(100, 104, 104)","Customer ": "aramark","Cust_Thread_Code": "1614","Cust_Thread_Discription": "Smokey Grey","Cust_RGB_Code": "rgb(100, 104, 104)"},'+
     '{"Binated_Thread_Code": "B-1615","Thread_Discription": "Battleship","PMS_Code": "Cool Grey 10C","RGB_Code": "rgb(112, 118, 118)","Customer ": "aramark","Cust_Thread_Code": "1615","Cust_Thread_Discription": "Battleship","Cust_RGB_Code": "rgb(112, 118, 118)"},'+
     '{"Binated_Thread_Code": "B-1616","Thread_Discription": "Conch Shell","PMS_Code": "178C","RGB_Code": "rgb(225, 114, 117)","Customer ": "aramark","Cust_Thread_Code": "1616","Cust_Thread_Discription": "Conch Shell","Cust_RGB_Code": "rgb(225, 114, 117)"},'+
     '{"Binated_Thread_Code": "B-1617","Thread_Discription": "Slate Purple","PMS_Code": "7448C","RGB_Code": "rgb(91, 87, 97)","Customer ": "aramark","Cust_Thread_Code": "1617","Cust_Thread_Discription": "Eggplant","Cust_RGB_Code": "rgb(91, 87, 97)"},'+
     '{"Binated_Thread_Code": "B-1618","Thread_Discription": "Gun Powder","PMS_Code": "2706C","RGB_Code": "rgb(114, 115, 126)","Customer ": "aramark","Cust_Thread_Code": "1618","Cust_Thread_Discription": "Gun Powder","Cust_RGB_Code": "rgb(114, 115, 126)"},'+
     '{"Binated_Thread_Code": "B-1620","Thread_Discription": "Light Salmon","PMS_Code": "177C","RGB_Code": "rgb(244, 140, 152)","Customer ": "aramark","Cust_Thread_Code": "1620","Cust_Thread_Discription": "Shrimp","Cust_RGB_Code": "rgb(244, 140, 152)"},'+
     '{"Binated_Thread_Code": "B-1622","Thread_Discription": "Parchment","PMS_Code": "7401C","RGB_Code": "rgb(238, 223, 188)","Customer ": "aramark","Cust_Thread_Code": "1622","Cust_Thread_Discription": "Ivory","Cust_RGB_Code": "rgb(238, 223, 188)"},'+
     '{"Binated_Thread_Code": "B-1627","Thread_Discription": "Dusty Lilac","PMS_Code": "667C","RGB_Code": "rgb(122, 117, 139)","Customer ": "aramark","Cust_Thread_Code": "1627","Cust_Thread_Discription": "Dusty Lilac","Cust_RGB_Code": "rgb(122, 117, 139)"},'+
     '{"Binated_Thread_Code": "B-1628","Thread_Discription": "Worn Denim","PMS_Code": "292C","RGB_Code": "rgb(126, 168, 191)","Customer ": "aramark","Cust_Thread_Code": "1628","Cust_Thread_Discription": "Light Blue","Cust_RGB_Code": "rgb(126, 168, 191)"},'+
     '{"Binated_Thread_Code": "B-1631","Thread_Discription": "Velvet Violet","PMS_Code": "2577C","RGB_Code": "rgb(142, 104, 157)","Customer ": "aramark","Cust_Thread_Code": "1631","Cust_Thread_Discription": "Iris","Cust_RGB_Code": "rgb(142, 104, 157)"},'+
     '{"Binated_Thread_Code": "B-1633","Thread_Discription": "Purple Passion","PMS_Code": "2613C","RGB_Code": "rgb(94, 42, 101)","Customer ": "aramark","Cust_Thread_Code": "1633","Cust_Thread_Discription": "Purple Shadow","Cust_RGB_Code": "rgb(94, 42, 101)"},'+
     '{"Binated_Thread_Code": "B-1638","Thread_Discription": "Barn Red","PMS_Code": "7427C","RGB_Code": "rgb(134, 46, 51)","Customer ": "aramark","Cust_Thread_Code": "1638","Cust_Thread_Discription": "Terra Cotta","Cust_RGB_Code": "rgb(134, 46, 51)"},'+
     '{"Binated_Thread_Code": "B-1641","Thread_Discription": "Obsidian","PMS_Code": "432C","RGB_Code": "rgb(54, 58, 61)","Customer ": "aramark","Cust_Thread_Code": "1641","Cust_Thread_Discription": "Obsidian","Cust_RGB_Code": "rgb(54, 58, 61)"},'+
     '{"Binated_Thread_Code": "B-1648","Thread_Discription": "Celery","PMS_Code": "576C","RGB_Code": "rgb(137, 155, 99)","Customer ": "aramark","Cust_Thread_Code": "1648","Cust_Thread_Discription": "Celery","Cust_RGB_Code": "rgb(137, 155, 99)"},'+
     '{"Binated_Thread_Code": "B-1649","Thread_Discription": "Granny Smith","PMS_Code": "376C","RGB_Code": "rgb(116, 150, 61)","Customer ": "aramark","Cust_Thread_Code": "1649","Cust_Thread_Discription": "Peapod","Cust_RGB_Code": "rgb(116, 150, 61)"},'+
     '{"Binated_Thread_Code": "B-1652","Thread_Discription": "Mermaid","PMS_Code": "323C","RGB_Code": "rgb(61, 122, 123)","Customer ": "aramark","Cust_Thread_Code": "1652","Cust_Thread_Discription": "Teal","Cust_RGB_Code": "rgb(61, 122, 123)"},'+
     '{"Binated_Thread_Code": "B-1657","Thread_Discription": "Golden Oak","PMS_Code": "731C","RGB_Code": "rgb(136, 92, 68)","Customer ": "aramark","Cust_Thread_Code": "1657","Cust_Thread_Discription": "Chocolate","Cust_RGB_Code": "rgb(136, 92, 68)"},'+
     '{"Binated_Thread_Code": "B-1664","Thread_Discription": "Graphite","PMS_Code": "405C","RGB_Code": "rgb(98, 94, 87)","Customer ": "aramark","Cust_Thread_Code": "1664","Cust_Thread_Discription": "Charcoal","Cust_RGB_Code": "rgb(98, 94, 87)"},'+
     '{"Binated_Thread_Code": "B-1668","Thread_Discription": "Silver Sage","PMS_Code": "5615C","RGB_Code": "rgb(100, 119, 107)","Customer ": "aramark","Cust_Thread_Code": "1668","Cust_Thread_Discription": "Spring Green","Cust_RGB_Code": "rgb(100, 119, 107)"},'+
     '{"Binated_Thread_Code": "B-1669","Thread_Discription": "Rosemary","PMS_Code": "553C","RGB_Code": "rgb(65, 77, 67)","Customer ": "aramark","Cust_Thread_Code": "1669","Cust_Thread_Discription": "Rosemary","Cust_RGB_Code": "rgb(65, 77, 67)"},'+
     '{"Binated_Thread_Code": "B-1677","Thread_Discription": "Mallard Teal","PMS_Code": "309C","RGB_Code": "rgb(3, 78, 82)","Customer ": "aramark","Cust_Thread_Code": "1677","Cust_Thread_Discription": "Mallard Teal","Cust_RGB_Code": "rgb(3, 78, 82)"},'+
     '{"Binated_Thread_Code": "B-1681","Thread_Discription": "Azalea","PMS_Code": "1945C","RGB_Code": "rgb(189, 57, 86)","Customer ": "aramark","Cust_Thread_Code": "1681","Cust_Thread_Discription": "Azalea","Cust_RGB_Code": "rgb(189, 57, 86)"},'+
     '{"Binated_Thread_Code": "B-1684","Thread_Discription": "Wheat","PMS_Code": "466C","RGB_Code": "rgb(190, 162, 114)","Customer ": "aramark","Cust_Thread_Code": "1684","Cust_Thread_Discription": "Pistachio","Cust_RGB_Code": "rgb(190, 162, 114)"},'+
     '{"Binated_Thread_Code": "B-1689","Thread_Discription": "Shark","PMS_Code": "425C","RGB_Code": "rgb(109, 111, 109)","Customer ": "aramark","Cust_Thread_Code": "1689","Cust_Thread_Discription": "Cinder","Cust_RGB_Code": "rgb(109, 111, 109)"},'+
     '{"Binated_Thread_Code": "B-1701","Thread_Discription": "Spring Green","PMS_Code": "361C","RGB_Code": "rgb(73, 159, 70)","Customer ": "aramark","Cust_Thread_Code": "1701","Cust_Thread_Discription": "Light Green","Cust_RGB_Code": "rgb(73, 159, 70)"},'+
     '{"Binated_Thread_Code": "B-1702","Thread_Discription": "Spearmint","PMS_Code": "7478C","RGB_Code": "rgb(105, 186, 133)","Customer ": "aramark","Cust_Thread_Code": "1702","Cust_Thread_Discription": "Nile","Cust_RGB_Code": "rgb(105, 186, 133)"},'+
     '{"Binated_Thread_Code": "B-1704","Thread_Discription": "Evergreen","PMS_Code": "3302C","RGB_Code": "rgb(27, 75, 64)","Customer ": "aramark","Cust_Thread_Code": "1703","Cust_Thread_Discription": "Evergreen","Cust_RGB_Code": "rgb(15, 94, 67)"},'+
     '{"Binated_Thread_Code": "B-1707","Thread_Discription": "Honeysuckle","PMS_Code": "187C","RGB_Code": "rgb(198, 75, 92)","Customer ": "aramark","Cust_Thread_Code": "1707","Cust_Thread_Discription": "Honeysuckle","Cust_RGB_Code": "rgb(198, 75, 92)"},'+
     '{"Binated_Thread_Code": "B-1709","Thread_Discription": "Shocking Pink","PMS_Code": "240C","RGB_Code": "rgb(206, 58, 147)","Customer ": "aramark","Cust_Thread_Code": "1709","Cust_Thread_Discription": "Shocking Pink","Cust_RGB_Code": "rgb(206, 58, 147)"},'+
     '{"Binated_Thread_Code": "B-1710","Thread_Discription": "Magenta","PMS_Code": "2415C","RGB_Code": "rgb(151, 49, 114)","Customer ": "aramark","Cust_Thread_Code": "1710","Cust_Thread_Discription": "Magenta","Cust_RGB_Code": "rgb(151, 49, 114)"},'+
     '{"Binated_Thread_Code": "B-1720","Thread_Discription": "Plum","PMS_Code": "511C","RGB_Code": "rgb(109, 57, 92)","Customer ": "aramark","Cust_Thread_Code": "1720","Cust_Thread_Discription": "Plum","Cust_RGB_Code": "rgb(109, 57, 92)"},'+
     '{"Binated_Thread_Code": "B-1721","Thread_Discription": "Flamingo Pink","PMS_Code": "190C","RGB_Code": "rgb(235, 101, 146)","Customer ": "aramark","Cust_Thread_Code": "1721","Cust_Thread_Discription": "Bashful Pink","Cust_RGB_Code": "rgb(235, 101, 146)"},'+
     '{"Binated_Thread_Code": "B-1722","Thread_Discription": "Royal Purple","PMS_Code": "2685C","RGB_Code": "rgb(68, 56, 124)","Customer ": "aramark","Cust_Thread_Code": "1722","Cust_Thread_Discription": "Royal Purple","Cust_RGB_Code": "rgb(68, 56, 124)"},'+
     '{"Binated_Thread_Code": "B-1726","Thread_Discription": "Light Brown Sugar","PMS_Code": "722C","RGB_Code": "rgb(180, 128, 90)","Customer ": "aramark","Cust_Thread_Code": "1726","Cust_Thread_Discription": "Light Toast","Cust_RGB_Code": "rgb(180, 128, 90)"},'+
     '{"Binated_Thread_Code": "B-1728","Thread_Discription": "Bark","PMS_Code": "7504C","RGB_Code": "rgb(153, 129, 107)","Customer ": "aramark","Cust_Thread_Code": "1728","Cust_Thread_Discription": "Sand Dune","Cust_RGB_Code": "rgb(153, 129, 107)"},'+
     '{"Binated_Thread_Code": "B-1733","Thread_Discription": "Blue Jay","PMS_Code": "2143C","RGB_Code": "rgb(62, 124, 177)","Customer ": "aramark","Cust_Thread_Code": "1733","Cust_Thread_Discription": "Copen","Cust_RGB_Code": "rgb(62, 124, 177)"},'+
     '{"Binated_Thread_Code": "B-1739","Thread_Discription": "Charcoal","PMS_Code": "425C","RGB_Code": "rgb(79, 75, 75)","Customer ": "aramark","Cust_Thread_Code": "1665","Cust_Thread_Discription": "Dark Charcoal","Cust_RGB_Code": "rgb(74, 74, 68)"},'+
     '{"Binated_Thread_Code": "B-1740","Thread_Discription": "Weimaraner","PMS_Code": "423C","RGB_Code": "rgb(123, 121, 126)","Customer ": "aramark","Cust_Thread_Code": "1740","Cust_Thread_Discription": "Button Grey","Cust_RGB_Code": "rgb(123, 121, 126)"},'+
     '{"Binated_Thread_Code": "B-1751","Thread_Discription": "Emerald Isle","PMS_Code": "7482C","RGB_Code": "rgb(1, 125, 74)","Customer ": "aramark","Cust_Thread_Code": "1751","Cust_Thread_Discription": "Emerald Isle","Cust_RGB_Code": "rgb(1, 125, 74)"},'+
     '{"Binated_Thread_Code": "B-1752","Thread_Discription": "Cantalope","PMS_Code": "1565C","RGB_Code": "rgb(249, 173, 136)","Customer ": "aramark","Cust_Thread_Code": "1752","Cust_Thread_Discription": "Cantalope","Cust_RGB_Code": "rgb(249, 173, 136)"},'+
     '{"Binated_Thread_Code": "B-1755","Thread_Discription": "Marmalade","PMS_Code": "1375C","RGB_Code": "rgb(247, 144, 74)","Customer ": "aramark","Cust_Thread_Code": "1755","Cust_Thread_Discription": "Marmalade","Cust_RGB_Code": "rgb(247, 144, 74)"},'+
     '{"Binated_Thread_Code": "B-1756","Thread_Discription": "Pea Green","PMS_Code": "378C","RGB_Code": "rgb(92, 91, 47)","Customer ": "aramark","Cust_Thread_Code": "1756","Cust_Thread_Discription": "Palmetto","Cust_RGB_Code": "rgb(92, 91, 47)"},'+
     '{"Binated_Thread_Code": "B-1757","Thread_Discription": "Dark Olive","PMS_Code": "455C","RGB_Code": "rgb(99, 83, 48)","Customer ": "aramark","Cust_Thread_Code": "1757","Cust_Thread_Discription": "Dark Olive","Cust_RGB_Code": "rgb(99, 83, 48)"},'+
     '{"Binated_Thread_Code": "B-1758","Thread_Discription": "Grizzly Bear","PMS_Code": "731C","RGB_Code": "rgb(111, 75, 54)","Customer ": "aramark","Cust_Thread_Code": "1758","Cust_Thread_Discription": "Grizzly Bear","Cust_RGB_Code": "rgb(111, 75, 54)"},'+
     '{"Binated_Thread_Code": "B-1763","Thread_Discription": "Copper","PMS_Code": "144C","RGB_Code": "rgb(220, 123, 43)","Customer ": "aramark","Cust_Thread_Code": "1763","Cust_Thread_Discription": "Copper","Cust_RGB_Code": "rgb(220, 123, 43)"},'+
     '{"Binated_Thread_Code": "B-1764","Thread_Discription": "Denim","PMS_Code": "534C","RGB_Code": "rgb(45, 73, 93)","Customer ": "aramark","Cust_Thread_Code": "1764","Cust_Thread_Discription": "Denim","Cust_RGB_Code": "rgb(45, 73, 93)"},'+
     '{"Binated_Thread_Code": "B-1766","Thread_Discription": "Sailor Blue","PMS_Code": "2735C","RGB_Code": "rgb(54, 60, 127)","Customer ": "aramark","Cust_Thread_Code": "1766","Cust_Thread_Discription": "Purple Twist","Cust_RGB_Code": "rgb(54, 60, 127)"},'+
     '{"Binated_Thread_Code": "B-1773","Thread_Discription": "Autumn Gold","PMS_Code": "1385C","RGB_Code": "rgb(177, 103, 49)","Customer ": "aramark","Cust_Thread_Code": "1773","Cust_Thread_Discription": "Toast","Cust_RGB_Code": "rgb(177, 103, 49)"},'+
     '{"Binated_Thread_Code": "B-1776","Thread_Discription": "Independence Blue","PMS_Code": "647C","RGB_Code": "rgb(30, 79, 104)","Customer ": "aramark","Cust_Thread_Code": "1776","Cust_Thread_Discription": "Blue Teal","Cust_RGB_Code": "rgb(30, 79, 104)"},'+
     '{"Binated_Thread_Code": "B-1777","Thread_Discription": "Bright Peach","PMS_Code": "170C","RGB_Code": "rgb(238, 135, 126)","Customer ": "aramark","Cust_Thread_Code": "1777","Cust_Thread_Discription": "Melon","Cust_RGB_Code": "rgb(238, 135, 126)"},'+
     '{"Binated_Thread_Code": "B-1779","Thread_Discription": "Sweet Potato","PMS_Code": "179C","RGB_Code": "rgb(203, 83, 76)","Customer ": "aramark","Cust_Thread_Code": "1779","Cust_Thread_Discription": "Sweet Potato","Cust_RGB_Code": "rgb(203, 83, 76)"},'+
     '{"Binated_Thread_Code": "B-1783","Thread_Discription": "Dark Raspberry","PMS_Code": "234C","RGB_Code": "rgb(134, 45, 89)","Customer ": "aramark","Cust_Thread_Code": "1783","Cust_Thread_Discription": "Dark Magenta","Cust_RGB_Code": "rgb(134, 45, 89)"},'+
     '{"Binated_Thread_Code": "B-1787","Thread_Discription": "Fuchsia","PMS_Code": "215C","RGB_Code": "rgb(181, 52, 108)","Customer ": "aramark","Cust_Thread_Code": "1787","Cust_Thread_Discription": "Ruby Glint","Cust_RGB_Code": "rgb(181, 52, 108)"},'+
     '{"Binated_Thread_Code": "B-1795","Thread_Discription": "Dark Camo Green","PMS_Code": "5743C","RGB_Code": "rgb(74, 72, 54)","Customer ": "aramark","Cust_Thread_Code": "1795","Cust_Thread_Discription": "Olive Green","Cust_RGB_Code": "rgb(74, 72, 54)"},'+
     '{"Binated_Thread_Code": "B-1809","Thread_Discription": "Brushed Bronze","PMS_Code": "618C","RGB_Code": "rgb(182, 161, 84)","Customer ": "aramark","Cust_Thread_Code": "1809","Cust_Thread_Discription": "Brushed Bronze","Cust_RGB_Code": "rgb(182, 161, 84)"},'+
     '{"Binated_Thread_Code": "B-1816","Thread_Discription": "Rustic Pink","PMS_Code": "1767C","RGB_Code": "rgb(247, 173, 191)","Customer ": "aramark","Cust_Thread_Code": "1816","Cust_Thread_Discription": "Pink","Cust_RGB_Code": "rgb(247, 173, 191)"},'+
     '{"Binated_Thread_Code": "B-1828","Thread_Discription": "Work Shirt","PMS_Code": "2915C","RGB_Code": "rgb(66, 140, 175)","Customer ": "aramark","Cust_Thread_Code": "1828","Cust_Thread_Discription": "Oriental Blue","Cust_RGB_Code": "rgb(66, 140, 175)"},'+
     '{"Binated_Thread_Code": "B-1841","Thread_Discription": "Pewter","PMS_Code": "7545C","RGB_Code": "rgb(80, 87, 93)","Customer ": "aramark","Cust_Thread_Code": "1841","Cust_Thread_Discription": "Metal","Cust_RGB_Code": "rgb(80, 87, 93)"},'+
     '{"Binated_Thread_Code": "B-1850","Thread_Discription": "Fluorescent Green","PMS_Code": "802C","RGB_Code": "rgb(105, 189, 77)","Customer ": "aramark","Cust_Thread_Code": "1850","Cust_Thread_Discription": "Flrsct Green","Cust_RGB_Code": "rgb(105, 189, 77)"},'+
     '{"Binated_Thread_Code": "B-1851","Thread_Discription": "Cadmium Green","PMS_Code": "3425C","RGB_Code": "rgb(0, 95, 57)","Customer ": "aramark","Cust_Thread_Code": "1851","Cust_Thread_Discription": "Kirby Green","Cust_RGB_Code": "rgb(0, 95, 57)"},'+
     '{"Binated_Thread_Code": "B-1851","Thread_Discription": "Cadmium Green","PMS_Code": "3425C","RGB_Code": "rgb(0, 95, 57)","Customer ": "aramark","Cust_Thread_Code": "N1851","Cust_Thread_Discription": "FR Hunter","Cust_RGB_Code": "rgb(0, 95, 57)"},'+
     '{"Binated_Thread_Code": "B-1852","Thread_Discription": "Cobalt","PMS_Code": "7468C","RGB_Code": "rgb(53, 125, 146)","Customer ": "aramark","Cust_Thread_Code": "1852","Cust_Thread_Discription": "Cobalt","Cust_RGB_Code": "rgb(53, 125, 146)"},'+
     '{"Binated_Thread_Code": "B-1854","Thread_Discription": "Rain Barrel","PMS_Code": "8440C","RGB_Code": "rgb(156, 132, 128)","Customer ": "aramark","Cust_Thread_Code": "1854","Cust_Thread_Discription": "Rain Barrel","Cust_RGB_Code": "rgb(156, 132, 128)"},'+
     '{"Binated_Thread_Code": "B-1855","Thread_Discription": "Coffee with Cream","PMS_Code": "874C","RGB_Code": "rgb(179, 147, 113)","Customer ": "aramark","Cust_Thread_Code": "1855","Cust_Thread_Discription": "Coffee w\/ Cream","Cust_RGB_Code": "rgb(179, 147, 113)"},'+
     '{"Binated_Thread_Code": "B-1856","Thread_Discription": "Burnt Orange","PMS_Code": "1605C","RGB_Code": "rgb(159, 85, 57)","Customer ": "aramark","Cust_Thread_Code": "1856","Cust_Thread_Discription": "Burnt Orange","Cust_RGB_Code": "rgb(159, 85, 57)"},'+
     '{"Binated_Thread_Code": "B-1858","Thread_Discription": "Chestnut","PMS_Code": "168C","RGB_Code": "rgb(102, 56, 49)","Customer ": "aramark","Cust_Thread_Code": "1858","Cust_Thread_Discription": "Chestnut","Cust_RGB_Code": "rgb(102, 56, 49)"},'+
     '{"Binated_Thread_Code": "B-1859","Thread_Discription": "Dark Chocolate","PMS_Code": "412C","RGB_Code": "rgb(76, 64, 63)","Customer ": "aramark","Cust_Thread_Code": "1859","Cust_Thread_Discription": "Egyptian Brown","Cust_RGB_Code": "rgb(76, 64, 63)"},'+
     '{"Binated_Thread_Code": "B-1866","Thread_Discription": "Buff","PMS_Code": "938C","RGB_Code": "rgb(240, 221, 145)","Customer ": "aramark","Cust_Thread_Code": "1866","Cust_Thread_Discription": "Buff","Cust_RGB_Code": "rgb(240, 221, 145)"},'+
     '{"Binated_Thread_Code": "B-1868","Thread_Discription": "Bottle Green","PMS_Code": "3278C","RGB_Code": "rgb(2, 105, 83)","Customer ": "aramark","Cust_Thread_Code": "1868","Cust_Thread_Discription": "Isle Green","Cust_RGB_Code": "rgb(2, 105, 83)"},'+
     '{"Binated_Thread_Code": "B-1870","Thread_Discription": "Orange Sorbet","PMS_Code": "149C","RGB_Code": "rgb(235, 167, 110)","Customer ": "aramark","Cust_Thread_Code": "1870","Cust_Thread_Discription": "Yogi","Cust_RGB_Code": "rgb(235, 167, 110)"},'+
     '{"Binated_Thread_Code": "B-1872","Thread_Discription": "Brunette","PMS_Code": "7519C","RGB_Code": "rgb(100, 82, 67)","Customer ": "aramark","Cust_Thread_Code": "1872","Cust_Thread_Discription": "Medium Brown","Cust_RGB_Code": "rgb(100, 82, 67)"},'+
     '{"Binated_Thread_Code": "B-1874","Thread_Discription": "Baby Blue","PMS_Code": "283C","RGB_Code": "rgb(144, 179, 216)","Customer ": "aramark","Cust_Thread_Code": "1874","Cust_Thread_Discription": "Sun Blue","Cust_RGB_Code": "rgb(144, 179, 216)"},'+
     '{"Binated_Thread_Code": "B-1874","Thread_Discription": "Baby Blue","PMS_Code": "283C","RGB_Code": "rgb(144, 179, 216)","Customer ": "aramark","Cust_Thread_Code": "N1874","Cust_Thread_Discription": "FR Light Blue","Cust_RGB_Code": "rgb(144, 179, 216)"},'+
     '{"Binated_Thread_Code": "B-1884","Thread_Discription": "Burly Wood","PMS_Code": "726C","RGB_Code": "rgb(198, 170, 142)","Customer ": "aramark","Cust_Thread_Code": "1884","Cust_Thread_Discription": "Tan","Cust_RGB_Code": "rgb(198, 170, 142)"},'+
     '{"Binated_Thread_Code": "B-1884","Thread_Discription": "Burly Wood","PMS_Code": "726C","RGB_Code": "rgb(198, 170, 142)","Customer ": "aramark","Cust_Thread_Code": "N1884","Cust_Thread_Discription": "FR Tan","Cust_RGB_Code": "rgb(198, 170, 142)"},'+
     '{"Binated_Thread_Code": "B-1899","Thread_Discription": "Henna","PMS_Code": "174C","RGB_Code": "rgb(136, 60, 50)","Customer ": "aramark","Cust_Thread_Code": "1899","Cust_Thread_Discription": "Burnt Orange","Cust_RGB_Code": "rgb(136, 60, 50)"},'+
     '{"Binated_Thread_Code": "B-1907","Thread_Discription": "Fluorescent Pink","PMS_Code": "1785C","RGB_Code": "rgb(239, 66, 105)","Customer ": "aramark","Cust_Thread_Code": "1907","Cust_Thread_Discription": "Flrsct Pink","Cust_RGB_Code": "rgb(239, 66, 105)"},'+
     '{"Binated_Thread_Code": "B-1920","Thread_Discription": "Light Khaki","PMS_Code": "461C","RGB_Code": "rgb(206, 196, 137)","Customer ": "aramark","Cust_Thread_Code": "1920","Cust_Thread_Discription": "Light Khaki","Cust_RGB_Code": "rgb(206, 196, 137)"},'+
     '{"Binated_Thread_Code": "B-1927","Thread_Discription": "Shiny Penny","PMS_Code": "727C","RGB_Code": "rgb(220, 177, 147)","Customer ": "aramark","Cust_Thread_Code": "1853","Cust_Thread_Discription": "Light Peach","Cust_RGB_Code": "rgb(239, 188, 154)"},'+
     '{"Binated_Thread_Code": "B-1940","Thread_Discription": "Key Lime","PMS_Code": "389C","RGB_Code": "rgb(204, 203, 76)","Customer ": "aramark","Cust_Thread_Code": "1940","Cust_Thread_Discription": "Electric Lime","Cust_RGB_Code": "rgb(204, 203, 76)"},'+
     '{"Binated_Thread_Code": "B-1956","Thread_Discription": "Olive Green","PMS_Code": "105C","RGB_Code": "rgb(140, 128, 86)","Customer ": "aramark","Cust_Thread_Code": "1956","Cust_Thread_Discription": "Olive Green","Cust_RGB_Code": "rgb(140, 128, 86)"},'+
     '{"Binated_Thread_Code": "B-1957","Thread_Discription": "Burnt Taupe","PMS_Code": "7533C","RGB_Code": "rgb(75, 65, 51)","Customer ": "aramark","Cust_Thread_Code": "1957","Cust_Thread_Discription": "Burnt Taupe","Cust_RGB_Code": "rgb(75, 65, 51)"},'+
     '{"Binated_Thread_Code": "B-1957","Thread_Discription": "Burnt Taupe","PMS_Code": "7533C","RGB_Code": "rgb(75, 65, 51)","Customer ": "aramark","Cust_Thread_Code": "N1957","Cust_Thread_Discription": "FR Brown","Cust_RGB_Code": "rgb(75, 65, 51)"},'+
     '{"Binated_Thread_Code": "B-1961","Thread_Discription": "Blue Spruce","PMS_Code": "5405C","RGB_Code": "rgb(80, 110, 132)","Customer ": "aramark","Cust_Thread_Code": "1961","Cust_Thread_Discription": "Blue Spruce","Cust_RGB_Code": "rgb(80, 110, 132)"},'+
     '{"Binated_Thread_Code": "B-1980","Thread_Discription": "Sunflower","PMS_Code": "115C","RGB_Code": "rgb(250, 193, 28)","Customer ": "aramark","Cust_Thread_Code": "1980","Cust_Thread_Discription": "Sunflower","Cust_RGB_Code": "rgb(250, 193, 28)"},'+
     '{"Binated_Thread_Code": "B-1985","Thread_Discription": "Deep Rain Forest","PMS_Code": "3292C","RGB_Code": "rgb(1, 92, 80)","Customer ": "aramark","Cust_Thread_Code": "1985","Cust_Thread_Discription": "Deep Rain Forest","Cust_RGB_Code": "rgb(1, 92, 80)"},'+
     '{"Binated_Thread_Code": "B-1991","Thread_Discription": "Malachite","PMS_Code": "3145C","RGB_Code": "rgb(7, 115, 121)","Customer ": "aramark","Cust_Thread_Code": "1991","Cust_Thread_Discription": "Malachite","Cust_RGB_Code": "rgb(7, 115, 121)"},'+
     '{"Binated_Thread_Code": "B-1992","Thread_Discription": "Rough Caribbean Sea","PMS_Code": "308C","RGB_Code": "rgb(7, 96, 119)","Customer ": "aramark","Cust_Thread_Code": "1992","Cust_Thread_Discription": "Rough Caribbean Sea","Cust_RGB_Code": "rgb(7, 96, 119)"}]}';
 
 
     let text6='{"data6":['+
     '{"Cust_Thread_Code": "1388","Cust_RGB_Code": "rgb(93,55,82)","Cust_Thread_Discription": "Grape"},'+
     '{"Cust_Thread_Code": "1122","Cust_RGB_Code": "rgb(79,54,105)","Cust_Thread_Discription": "Dark Purple"},'+
     '{"Cust_Thread_Code": "1330","Cust_RGB_Code": "rgb(82,95,153)","Cust_Thread_Discription": "Light Purple"},'+
     '{"Cust_Thread_Code": "1311","Cust_RGB_Code": "rgb(142,140,184)","Cust_Thread_Discription": "Pale Purple"},'+
     '{"Cust_Thread_Code": "1387","Cust_RGB_Code": "rgb(117,105,127)","Cust_Thread_Discription": "Lavender"},'+
     '{"Cust_Thread_Code": "1188","Cust_RGB_Code": "rgb(123,61,110)","Cust_Thread_Discription": "Dk Fuchsia"},'+
     '{"Cust_Thread_Code": "1112","Cust_RGB_Code": "rgb(84,72,129)","Cust_Thread_Discription": "Pantone Violet"},'+
     '{"Cust_Thread_Code": "1033","Cust_RGB_Code": "rgb(111,74,130)","Cust_Thread_Discription": "Lilac"},'+
     '{"Cust_Thread_Code": "1080","Cust_RGB_Code": "rgb(166,125,169)","Cust_Thread_Discription": "Pale Lilac"},'+
     '{"Cust_Thread_Code": "1783","Cust_RGB_Code": "rgb(134,45,89)","Cust_Thread_Discription": "Dk Raspberry"},'+
     '{"Cust_Thread_Code": "1310","Cust_RGB_Code": "rgb(151,61,116)","Cust_Thread_Discription": "Magenta"},'+
     '{"Cust_Thread_Code": "1343","Cust_RGB_Code": "rgb(54,57,99)","Cust_Thread_Discription": "Blue Ink"},'+
     '{"Cust_Thread_Code": "1233","Cust_RGB_Code": "rgb(79,70,100)","Cust_Thread_Discription": "Midnight purple"},'+
     '{"Cust_Thread_Code": "1079","Cust_RGB_Code": "rgb(0,136,80)","Cust_Thread_Discription": "Kelly Green"},'+
     '{"Cust_Thread_Code": "1250","Cust_RGB_Code": "rgb(0,114,73)","Cust_Thread_Discription": "Dk Kelly Green"},'+
     '{"Cust_Thread_Code": "1103","Cust_RGB_Code": "rgb(53,78,60)","Cust_Thread_Discription": "Dk Green Hunter"},'+
     '{"Cust_Thread_Code": "1101","Cust_RGB_Code": "rgb(70,144,83)","Cust_Thread_Discription": "Lt Kelly Green"},'+
     '{"Cust_Thread_Code": "1140","Cust_RGB_Code": "rgb(128,129,52)","Cust_Thread_Discription": "Olive Green"},'+
     '{"Cust_Thread_Code": "1391","Cust_RGB_Code": "rgb(80,108,99)","Cust_Thread_Discription": "Colonial Gren"},'+
     '{"Cust_Thread_Code": "1301","Cust_RGB_Code": "rgb(53,168,125)","Cust_Thread_Discription": "Light Green"},'+
     '{"Cust_Thread_Code": "1049","Cust_RGB_Code": "rgb(110,160,76)","Cust_Thread_Discription": "Lime Green"},'+
     '{"Cust_Thread_Code": "1045","Cust_RGB_Code": "rgb(136,203,190)","Cust_Thread_Discription": "Light Mint Green"},'+
     '{"Cust_Thread_Code": "1950","Cust_RGB_Code": "rgb(151,215,0)","Cust_Thread_Discription": "Flour. Green"},'+
     '{"Cust_Thread_Code": "1247","Cust_RGB_Code": "rgb(2,148,110)","Cust_Thread_Discription": "Bright Green"},'+
     '{"Cust_Thread_Code": "1156","Cust_RGB_Code": "rgb(121,117,72)","Cust_Thread_Discription": "Army Green"},'+
     '{"Cust_Thread_Code": "1249","Cust_RGB_Code": "rgb(18,162,74)","Cust_Thread_Discription": "Veggie Green"},'+
     '{"Cust_Thread_Code": "1157","Cust_RGB_Code": "rgb(120,108,77)","Cust_Thread_Discription": "Woodland"},'+
     '{"Cust_Thread_Code": "1227","Cust_RGB_Code": "rgb(122,156,151)","Cust_Thread_Discription": "Mint Green"},'+
     '{"Cust_Thread_Code": "1390","Cust_RGB_Code": "rgb(45,70,62)","Cust_Thread_Discription": "Very Dk Green"},'+
     '{"Cust_Thread_Code": "1308","Cust_RGB_Code": "rgb(108,110,91)","Cust_Thread_Discription": "Military Green"},'+
     '{"Cust_Thread_Code": "1377","Cust_RGB_Code": "rgb(113,172,107)","Cust_Thread_Discription": "Nile Green"},'+
     '{"Cust_Thread_Code": "1248","Cust_RGB_Code": "rgb(155,205,106)","Cust_Thread_Discription": "Spring Green"},'+
     '{"Cust_Thread_Code": "1050","Cust_RGB_Code": "rgb(68,150,69)","Cust_Thread_Discription": "Grass Green"},'+
     '{"Cust_Thread_Code": "1350","Cust_RGB_Code": "rgb(180,162,68)","Cust_Thread_Discription": "Pale Olive"},'+
     '{"Cust_Thread_Code": "1940","Cust_RGB_Code": "rgb(204,203,76)","Cust_Thread_Discription": "Melon Green"},'+
     '{"Cust_Thread_Code": "1170","Cust_RGB_Code": "rgb(93,111,49)","Cust_Thread_Discription": "Green"},'+
     '{"Cust_Thread_Code": "1099","Cust_RGB_Code": "rgb(187,193,160)","Cust_Thread_Discription": "Cucumber"},'+
     '{"Cust_Thread_Code": "1305","Cust_RGB_Code": "rgb(194,182,152)","Cust_Thread_Discription": "Digital Green"},'+
     '{"Cust_Thread_Code": "1047","Cust_RGB_Code": "rgb(159,190,163)","Cust_Thread_Discription": "Celadon Green"},'+
     '{"Cust_Thread_Code": "1351","Cust_RGB_Code": "rgb(23,91,75)","Cust_Thread_Discription": "Aligator Green"},'+
     '{"Cust_Thread_Code": "1046","Cust_RGB_Code": "rgb(77,172,153)","Cust_Thread_Discription": "Eucalyptus"},'+
     '{"Cust_Thread_Code": "1648","Cust_RGB_Code": "rgb(137,155,99)","Cust_Thread_Discription": "Celery"},'+
     '{"Cust_Thread_Code": "1245","Cust_RGB_Code": "rgb(41,160,133)","Cust_Thread_Discription": "Seafoam Green"},'+
     '{"Cust_Thread_Code": "1251","Cust_RGB_Code": "rgb(5,146,75)","Cust_Thread_Discription": "MAD Kelly Green"},'+
     '{"Cust_Thread_Code": "1370","Cust_RGB_Code": "rgb(37,80,60)","Cust_Thread_Discription": "Fir Green"},'+
     '{"Cust_Thread_Code": "1051","Cust_RGB_Code": "rgb(0,136,70)","Cust_Thread_Discription": "Med Kelly Green"},'+
     '{"Cust_Thread_Code": "1649","Cust_RGB_Code": "rgb(116,150,61)","Cust_Thread_Discription": "Granny Smith"},'+
     '{"Cust_Thread_Code": "1392","Cust_RGB_Code": "rgb(108,123,107)","Cust_Thread_Discription": "Silver Sage"},'+
     '{"Cust_Thread_Code": "1195","Cust_RGB_Code": "rgb(145,196,181)","Cust_Thread_Discription": "Menthol"},'+
     '{"Cust_Thread_Code": "1645","Cust_RGB_Code": "rgb(241,106,70)","Cust_Thread_Discription": "Light Mint"},'+
     '{"Cust_Thread_Code": "1799","Cust_RGB_Code": "rgb(0,0,0)","Cust_Thread_Discription": "Green Turquoise"},'+
     '{"Cust_Thread_Code": "1748","Cust_RGB_Code": "rgb(181,189,0)","Cust_Thread_Discription": "Margarita Lime"},'+
     '{"Cust_Thread_Code": "1651","Cust_RGB_Code": "rgb(0,130,174)","Cust_Thread_Discription": "Celtic Green"},'+
     '{"Cust_Thread_Code": "1692","Cust_RGB_Code": "rgb(175,205,215)","Cust_Thread_Discription": "Limestone"},'+
     '{"Cust_Thread_Code": "1189","Cust_RGB_Code": "rgb(65,85,54)","Cust_Thread_Discription": "Moss Green"},'+
     '{"Cust_Thread_Code": "1749","Cust_RGB_Code": "rgb(100,167,11)","Cust_Thread_Discription": "Green Thumb"},'+
     '{"Cust_Thread_Code": "1048","Cust_RGB_Code": "rgb(123,149,83)","Cust_Thread_Discription": "Aloe"},'+
     '{"Cust_Thread_Code": "1056","Cust_RGB_Code": "rgb(158,106,72)","Cust_Thread_Discription": "Light Brown"},'+
     '{"Cust_Thread_Code": "1145","Cust_RGB_Code": "rgb(95,64,54)","Cust_Thread_Discription": "Dark Brown"},'+
     '{"Cust_Thread_Code": "1128","Cust_RGB_Code": "rgb(163,144,130)","Cust_Thread_Discription": "Khaki Tan"},'+
     '{"Cust_Thread_Code": "1062","Cust_RGB_Code": "rgb(171,143,106)","Cust_Thread_Discription": "Dark Khaki"},'+
     '{"Cust_Thread_Code": "1144","Cust_RGB_Code": "rgb(133,107,89)","Cust_Thread_Discription": "Dark Straw"},'+
     '{"Cust_Thread_Code": "1173","Cust_RGB_Code": "rgb(194,121,61)","Cust_Thread_Discription": "Sienna"},'+
     '{"Cust_Thread_Code": "1158","Cust_RGB_Code": "rgb(123,69,57)","Cust_Thread_Discription": "Reddish Brown"},'+
     '{"Cust_Thread_Code": "1218","Cust_RGB_Code": "rgb(184,115,51)","Cust_Thread_Discription": "Copper"},'+
     '{"Cust_Thread_Code": "1229","Cust_RGB_Code": "rgb(74,56,38)","Cust_Thread_Discription": "Organic Brown"},'+
     '{"Cust_Thread_Code": "1072","Cust_RGB_Code": "rgb(223,209,167)","Cust_Thread_Discription": "Natural"},'+
     '{"Cust_Thread_Code": "1059","Cust_RGB_Code": "rgb(101,67,37)","Cust_Thread_Discription": "Very Dark Brown"},'+
     '{"Cust_Thread_Code": "1036","Cust_RGB_Code": "rgb(128,100,63)","Cust_Thread_Discription": "Raisin Brown"},'+
     '{"Cust_Thread_Code": "1257","Cust_RGB_Code": "rgb(241,134,67)","Cust_Thread_Discription": "Bronze"},'+
     '{"Cust_Thread_Code": "1682","Cust_RGB_Code": "rgb(224,214,181)","Cust_Thread_Discription": "Tusk"},'+
     '{"Cust_Thread_Code": "1255","Cust_RGB_Code": "rgb(186,158,102)","Cust_Thread_Discription": "Khaki"},'+
     '{"Cust_Thread_Code": "1884","Cust_RGB_Code": "rgb(214,171,130)","Cust_Thread_Discription": "Burly Wood"},'+
     '{"Cust_Thread_Code": "1885","Cust_RGB_Code": "rgb(196,143,96)","Cust_Thread_Discription": "Camel"},'+
     '{"Cust_Thread_Code": "1076","Cust_RGB_Code": "rgb(0,71,186)","Cust_Thread_Discription": "Royal blue"},'+
     '{"Cust_Thread_Code": "1166","Cust_RGB_Code": "rgb(32,69,131)","Cust_Thread_Discription": "Blue"},'+
     '{"Cust_Thread_Code": "1177","Cust_RGB_Code": "rgb(0,110,169)","Cust_Thread_Discription": "Process blue"},'+
     '{"Cust_Thread_Code": "1242","Cust_RGB_Code": "rgb(35,62,92)","Cust_Thread_Discription": "Navy Blue"},'+
     '{"Cust_Thread_Code": "1243","Cust_RGB_Code": "rgb(52,61,83)","Cust_Thread_Discription": "Dk Navy"},'+
     '{"Cust_Thread_Code": "1042","Cust_RGB_Code": "rgb(33,81,121)","Cust_Thread_Discription": "Lt Navy"},'+
     '{"Cust_Thread_Code": "1367","Cust_RGB_Code": "rgb(45,48,56)","Cust_Thread_Discription": "Black Pearl"},'+
     '{"Cust_Thread_Code": "1075","Cust_RGB_Code": "rgb(131,167,199)","Cust_Thread_Discription": "Sky Bue"},'+
     '{"Cust_Thread_Code": "1028","Cust_RGB_Code": "rgb(90,137,169)","Cust_Thread_Discription": "Lt Blue Carolina"},'+
     '{"Cust_Thread_Code": "1162","Cust_RGB_Code": "rgb(33,64,75)","Cust_Thread_Discription": "Colonial Blue"},'+
     '{"Cust_Thread_Code": "1977","Cust_RGB_Code": "rgb(0,130,186)","Cust_Thread_Discription": "Electric Blue"},'+
     '{"Cust_Thread_Code": "1175","Cust_RGB_Code": "rgb(61,105,141)","Cust_Thread_Discription": "Dusty Blue"},'+
     '{"Cust_Thread_Code": "1176","Cust_RGB_Code": "rgb(16,130,186)","Cust_Thread_Discription": "Medium Blue"},'+
     '{"Cust_Thread_Code": "1364","Cust_RGB_Code": "rgb(73,90,110)","Cust_Thread_Discription": "Country Blue"},'+
     '{"Cust_Thread_Code": "1096","Cust_RGB_Code": "rgb(11,126,155)","Cust_Thread_Discription": "Surf Blue"},'+
     '{"Cust_Thread_Code": "1143","Cust_RGB_Code": "rgb(75,108,154)","Cust_Thread_Discription": "Tropic Blue"},'+
     '{"Cust_Thread_Code": "1343","Cust_RGB_Code": "rgb(54,57,99)","Cust_Thread_Discription": "Blue Ink"},'+
     '{"Cust_Thread_Code": "1093","Cust_RGB_Code": "rgb(36,187,201)","Cust_Thread_Discription": "Pale Blue"},'+
     '{"Cust_Thread_Code": "1368","Cust_RGB_Code": "rgb(43,56,75)","Cust_Thread_Discription": "Midnight Navy"},'+
     '{"Cust_Thread_Code": "1827","Cust_RGB_Code": "rgb(87,181,124)","Cust_Thread_Discription": "lime green"},'+
     '{"Cust_Thread_Code": "1675","Cust_RGB_Code": "rgb(120,179,224)","Cust_Thread_Discription": "Ultra Blue"},'+
     '{"Cust_Thread_Code": "1376","Cust_RGB_Code": "rgb(36,79,104)","Cust_Thread_Discription": "Imperial Blue"},'+
     '{"Cust_Thread_Code": "1797","Cust_RGB_Code": "rgb(0,102,158)","Cust_Thread_Discription": "Solar Blue"},'+
     '{"Cust_Thread_Code": "1133","Cust_RGB_Code": "rgb(41,127,184)","Cust_Thread_Discription": "China Blue"},'+
     '{"Cust_Thread_Code": "1943","Cust_RGB_Code": "rgb(111,123,212)","Cust_Thread_Discription": "Periwinkle"},'+
     '{"Cust_Thread_Code": "1934","Cust_RGB_Code": "rgb(0,110,119)","Cust_Thread_Discription": "Blue"},'+
     '{"Cust_Thread_Code": "1446","Cust_RGB_Code": "rgb(54,15,143)","Cust_Thread_Discription": "Sailor Blue"},'+
     '{"Cust_Thread_Code": "1373","Cust_RGB_Code": "rgb(158,201,227)","Cust_Thread_Discription": "Cerulean Blue"},'+
     '{"Cust_Thread_Code": "1960","Cust_RGB_Code": "rgb(115,140,158)","Cust_Thread_Discription": "Blue Grey"},'+
     '{"Cust_Thread_Code": "1296","Cust_RGB_Code": "rgb(10,97,128)","Cust_Thread_Discription": "Deep Ocean"},'+
     '{"Cust_Thread_Code": "1289","Cust_RGB_Code": "rgb(73,152,164)","Cust_Thread_Discription": "Sea Frost"},'+
     '{"Cust_Thread_Code": "1132","Cust_RGB_Code": "rgb(138,187,207)","Cust_Thread_Discription": "Clear Blue"},'+
     '{"Cust_Thread_Code": "1167","Cust_RGB_Code": "rgb(35,74,121)","Cust_Thread_Discription": "Lt Blue Ink"},'+
     '{"Cust_Thread_Code": "1593","Cust_RGB_Code": "rgb(0,163,224)","Cust_Thread_Discription": "Blue McCaw"},'+
     '{"Cust_Thread_Code": "1695","Cust_RGB_Code": "rgb(0,115,150)","Cust_Thread_Discription": "Cyan"},'+
     '{"Cust_Thread_Code": "1643","Cust_RGB_Code": "rgb(0,115,150)","Cust_Thread_Discription": "Poly Navy"},'+
     '{"Cust_Thread_Code": "1829","Cust_RGB_Code": "rgb(0,38,62)","Cust_Thread_Discription": "Blue Bird"},'+
     '{"Cust_Thread_Code": "1975","Cust_RGB_Code": "rgb(120,39,48)","Cust_Thread_Discription": "Dk Colonial Blue"},'+
     '{"Cust_Thread_Code": "1967","Cust_RGB_Code": "rgb(10,33,73)","Cust_Thread_Discription": "Dk Denim"},'+
     '{"Cust_Thread_Code": "1733","Cust_RGB_Code": "rgb(62,124,177)","Cust_Thread_Discription": "Blue Jay"},'+
     '{"Cust_Thread_Code": "1953","Cust_RGB_Code": "rgb(141,200,232)","Cust_Thread_Discription": "Powered Blue"},'+
     '{"Cust_Thread_Code": "1762","Cust_RGB_Code": "rgb(0,69,87)","Cust_Thread_Discription": "Deep DK Ocean"},'+
     '{"Cust_Thread_Code": "1078","Cust_RGB_Code": "rgb(235,86,40)","Cust_Thread_Discription": "Orange"},'+
     '{"Cust_Thread_Code": "1278","Cust_RGB_Code": "rgb(241,104,36)","Cust_Thread_Discription": "Pumpkin"},'+
     '{"Cust_Thread_Code": "1065","Cust_RGB_Code": "rgb(227,120,38)","Cust_Thread_Discription": "Sunset Orange"},'+
     '{"Cust_Thread_Code": "1946","Cust_RGB_Code": "rgb(242,99,34)","Cust_Thread_Discription": "Flour. Orange"},'+
     '{"Cust_Thread_Code": "1020","Cust_RGB_Code": "rgb(245,137,127)","Cust_Thread_Discription": "Light Coral"},'+
     '{"Cust_Thread_Code": "1221","Cust_RGB_Code": "rgb(171,66,52)","Cust_Thread_Discription": "Rust"},'+
     '{"Cust_Thread_Code": "1021","Cust_RGB_Code": "rgb(188,84,47)","Cust_Thread_Discription": "Light Rust"},'+
     '{"Cust_Thread_Code": "1174","Cust_RGB_Code": "rgb(133,59,57)","Cust_Thread_Discription": "Dk Rust"},'+
     '{"Cust_Thread_Code": "1155","Cust_RGB_Code": "rgb(245,159,103)","Cust_Thread_Discription": "Light Amber"},'+
     '{"Cust_Thread_Code": "1127","Cust_RGB_Code": "rgb(219,186,166)","Cust_Thread_Discription": "Flesh"},'+
     '{"Cust_Thread_Code": "1342","Cust_RGB_Code": "rgb(191,153,136)","Cust_Thread_Discription": "Fawn"},'+
     '{"Cust_Thread_Code": "1379","Cust_RGB_Code": "rgb(225,85,68)","Cust_Thread_Discription": "Mandarin"},'+
     '{"Cust_Thread_Code": "1856","Cust_RGB_Code": "rgb(159,85,57)","Cust_Thread_Discription": "Burnt Orange"},'+
     '{"Cust_Thread_Code": "1765","Cust_RGB_Code": "rgb(229,157,167)","Cust_Thread_Discription": "Tiger"},'+
     '{"Cust_Thread_Code": "1637","Cust_RGB_Code": "rgb(207,20,43)","Cust_Thread_Discription": "Cinnamon Candy"},'+
     '{"Cust_Thread_Code": "1951","Cust_RGB_Code": "rgb(235,173,20)","Cust_Thread_Discription": "Pumpkin Chi?on"},'+
     '{"Cust_Thread_Code": "1178","Cust_RGB_Code": "rgb(241,106,70)","Cust_Thread_Discription": "Carrot"},'+
     '{"Cust_Thread_Code": "1765","Cust_RGB_Code": "rgb(229,157,167)","Cust_Thread_Discription": "Tiger"},'+
     '{"Cust_Thread_Code": "1223","Cust_RGB_Code": "rgb(238,199,39)","Cust_Thread_Discription": "ProcessYellow"},'+
     '{"Cust_Thread_Code": "1067","Cust_RGB_Code": "rgb(248,224,142)","Cust_Thread_Discription": "Pale Yellow"},'+
     '{"Cust_Thread_Code": "1025","Cust_RGB_Code": "rgb(204,129,41)","Cust_Thread_Discription": "Old Gold"},'+
     '{"Cust_Thread_Code": "1137","Cust_RGB_Code": "rgb(243,141,33)","Cust_Thread_Discription": "Athletic Gold"},'+
     '{"Cust_Thread_Code": "1125","Cust_RGB_Code": "rgb(241,177,61)","Cust_Thread_Discription": "Yelllow Gold"},'+
     '{"Cust_Thread_Code": "1070","Cust_RGB_Code": "rgb(210,170,114)","Cust_Thread_Discription": "Pale Gold"},'+
     '{"Cust_Thread_Code": "1172","Cust_RGB_Code": "rgb(233,154,40)","Cust_Thread_Discription": "Karat Gold"},'+
     '{"Cust_Thread_Code": "1024","Cust_RGB_Code": "rgb(250,166,31)","Cust_Thread_Discription": "Sunshine Gold"},'+
     '{"Cust_Thread_Code": "1995","Cust_RGB_Code": "rgb(227,232,41)","Cust_Thread_Discription": "Flour. Yellow"},'+
     '{"Cust_Thread_Code": "1225","Cust_RGB_Code": "rgb(200,141,70)","Cust_Thread_Discription": "Vegas Gold"},'+
     '{"Cust_Thread_Code": "1670","Cust_RGB_Code": "rgb(214,164,97)","Cust_Thread_Discription": "Lt Vegas Gold"},'+
     '{"Cust_Thread_Code": "1273","Cust_RGB_Code": "rgb(167,140,97)","Cust_Thread_Discription": "Faux Gold"},'+
     '{"Cust_Thread_Code": "1192","Cust_RGB_Code": "rgb(169,122,43)","Cust_Thread_Discription": "Deep Gold"},'+
     '{"Cust_Thread_Code": "1171","Cust_RGB_Code": "rgb(240,221,167)","Cust_Thread_Discription": "Lemon Drop"},'+
     '{"Cust_Thread_Code": "1064","Cust_RGB_Code": "rgb(255,201,30)","Cust_Thread_Discription": "Goldenrod"},'+
     '{"Cust_Thread_Code": "1359","Cust_RGB_Code": "rgb(204,150,44)","Cust_Thread_Discription": "Gold"},'+
     '{"Cust_Thread_Code": "1124","Cust_RGB_Code": "rgb(250,199,76)","Cust_Thread_Discription": "Buttercup"},'+
     '{"Cust_Thread_Code": "1064","Cust_RGB_Code": "rgb(255,201,30)","Cust_Thread_Discription": "Buttercup"},'+
     '{"Cust_Thread_Code": "1352","Cust_RGB_Code": "rgb(183,139,45)","Cust_Thread_Discription": "Ginger"},'+
     '{"Cust_Thread_Code": "1150","Cust_RGB_Code": "rgb(219,223,139)","Cust_Thread_Discription": "Yellow Green"},'+
     '{"Cust_Thread_Code": "1091","Cust_RGB_Code": "rgb(8,113,129)","Cust_Thread_Discription": "Dark Teal"},'+
     '{"Cust_Thread_Code": "1095","Cust_RGB_Code": "rgb(0,169,194)","Cust_Thread_Discription": "Turquoise"},'+
     '{"Cust_Thread_Code": "1088","Cust_RGB_Code": "rgb(97,169,172)","Cust_Thread_Discription": "Lt Turquoise"},'+
     '{"Cust_Thread_Code": "1295","Cust_RGB_Code": "rgb(5,141,173)","Cust_Thread_Discription": "Bright Turquoise"},'+
     '{"Cust_Thread_Code": "1246","Cust_RGB_Code": "rgb(0,140,135)","Cust_Thread_Discription": "Teal Green"},'+
     '{"Cust_Thread_Code": "1185","Cust_RGB_Code": "rgb(4,100,95)","Cust_Thread_Discription": "Dk Teal Green"},'+
     '{"Cust_Thread_Code": "1295","Cust_RGB_Code": "rgb(5,135,123)","Cust_Thread_Discription": "Lt Teal Green"},'+
     '{"Cust_Thread_Code": "1380","Cust_RGB_Code": "rgb(0,154,135)","Cust_Thread_Discription": "Teal Blue"},'+
     '{"Cust_Thread_Code": "1297","Cust_RGB_Code": "rgb(7,114,163)","Cust_Thread_Discription": "Calypso Blue"},'+
     '{"Cust_Thread_Code": "1289","Cust_RGB_Code": "rgb(73,152,164)","Cust_Thread_Discription": "Sea Frost"},'+
     '{"Cust_Thread_Code": "1290","Cust_RGB_Code": "rgb(23,75,76)","Cust_Thread_Discription": "Mallard Teal"},'+
     '{"Cust_Thread_Code": "1146","Cust_RGB_Code": "rgb(211,41,40)","Cust_Thread_Discription": "Warm Red"},'+
     '{"Cust_Thread_Code": "1035","Cust_RGB_Code": "rgb(101,49,63)","Cust_Thread_Discription": "Cardinal/Maroon/Burgundy"},'+
     '{"Cust_Thread_Code": "1181","Cust_RGB_Code": "rgb(139,37,53)","Cust_Thread_Discription": "Brick Red"},'+
     '{"Cust_Thread_Code": "1183","Cust_RGB_Code": "rgb(143,51,84)","Cust_Thread_Discription": "Dk Rose"},'+
     '{"Cust_Thread_Code": "1186","Cust_RGB_Code": "rgb(169,30,70)","Cust_Thread_Discription": "Rubine Red"},'+
     '{"Cust_Thread_Code": "1109","Cust_RGB_Code": "rgb(208,79,137)","Cust_Thread_Discription": "Pink"},'+
     '{"Cust_Thread_Code": "1110","Cust_RGB_Code": "rgb(192,48,110)","Cust_Thread_Discription": "Hot Pink"},'+
     '{"Cust_Thread_Code": "1108","Cust_RGB_Code": "rgb(147,117,148)","Cust_Thread_Discription": "Light Pink"},'+
     '{"Cust_Thread_Code": "1115","Cust_RGB_Code": "rgb(238,187,192)","Cust_Thread_Discription": "Shell Pink"},'+
     '{"Cust_Thread_Code": "1154","Cust_RGB_Code": "rgb(216,70,97)","Cust_Thread_Discription": "Dark Coral"},'+
     '{"Cust_Thread_Code": "1037","Cust_RGB_Code": "rgb(189,34,39)","Cust_Thread_Discription": "Nascar Red"},'+
     '{"Cust_Thread_Code": "1039","Cust_RGB_Code": "rgb(162,40,50)","Cust_Thread_Discription": "Xmas Red"},'+
     '{"Cust_Thread_Code": "1187","Cust_RGB_Code": "rgb(183,31,87)","Cust_Thread_Discription": "Deep Pink"},'+
     '{"Cust_Thread_Code": "1182","Cust_RGB_Code": "rgb(121,44,61)","Cust_Thread_Discription": "Wine"},'+
     '{"Cust_Thread_Code": "1485","Cust_RGB_Code": "rgb(200,37,45)","Cust_Thread_Discription": "Electric Red"},'+
     '{"Cust_Thread_Code": "1926","Cust_RGB_Code": "rgb(170,128,102)","Cust_Thread_Discription": "Dk Champagne"},'+
     '{"Cust_Thread_Code": "1747","Cust_RGB_Code": "rgb(158,43,47)","Cust_Thread_Discription": "Candy Apple Red"},'+
     '{"Cust_Thread_Code": "1982","Cust_RGB_Code": "rgb(120,31,28)","Cust_Thread_Discription": "Sangria"},'+
     '{"Cust_Thread_Code": "1041","Cust_RGB_Code": "rgb(112,117,124)","Cust_Thread_Discription": "Dark Grey"},'+
     '{"Cust_Thread_Code": "1087","Cust_RGB_Code": "rgb(189,188,184)","Cust_Thread_Discription": "Light Grey"},'+
     '{"Cust_Thread_Code": "1011","Cust_RGB_Code": "rgb(171,176,178)","Cust_Thread_Discription": "Silver"},'+
     '{"Cust_Thread_Code": "1118","Cust_RGB_Code": "rgb(137,145,146)","Cust_Thread_Discription": "Silver\/Grey"},'+
     '{"Cust_Thread_Code": "1361","Cust_RGB_Code": "rgb(95,97,95)","Cust_Thread_Discription": "Pewter"},'+
     '{"Cust_Thread_Code": "1240","Cust_RGB_Code": "rgb(115,106,105)","Cust_Thread_Discription": "Charcoal"},'+
     '{"Cust_Thread_Code": "1640","Cust_RGB_Code": "rgb(117,120,123)","Cust_Thread_Discription": "Lead"},'+
     '{"Cust_Thread_Code": "1461","Cust_RGB_Code": "rgb(98,112,111)","Cust_Thread_Discription": "Iron Grey"},'+
     '{"Cust_Thread_Code": "1464","Cust_RGB_Code": "rgb(135,139,128)","Cust_Thread_Discription": "Willow"},'+
     '{"Cust_Thread_Code": "1415","Cust_RGB_Code": "rgb(104,113,112)","Cust_Thread_Discription": "Battleship"},'+
     '{"Cust_Thread_Code": "1164","Cust_RGB_Code": "rgb(85,91,100)","Cust_Thread_Discription": "Dk Charcoal"},'+
     '{"Cust_Thread_Code": "1000","Cust_RGB_Code": "rgb(41,41,42)","Cust_Thread_Discription": "Black"},'+
     '{"Cust_Thread_Code": "1005","Cust_RGB_Code": "rgb(225,227,242)","Cust_Thread_Discription": "White"},'+
     '{"Cust_Thread_Code": "1071","Cust_RGB_Code": "rgb(233,228,219)","Cust_Thread_Discription": "Off White"}]}';
 
 
     let text7='{"data7":['+
     '{"Binated_Thread_Code": "B-1800","Thread_Discription": "Emerald Black","PMS_Code": "Process Black C","RGB_Code": "rgb(48, 49, 50)"},'+
     '{"Binated_Thread_Code": "B-1801","Thread_Discription": "Super White","PMS_Code": "663C","RGB_Code": "rgb(229, 231, 244)"},'+
     '{"Binated_Thread_Code": "B-1000","Thread_Discription": "Emerald Black","PMS_Code": "426C","RGB_Code": "rgb(41, 41, 42)"},'+
     '{"Binated_Thread_Code": "B-1005","Thread_Discription": "Fluorescent White","PMS_Code": "663C","RGB_Code": "rgb(225, 227, 242)"},'+
     '{"Binated_Thread_Code": "B-1010","Thread_Discription": "Gray Haze","PMS_Code": "&nbsp;441C","RGB_Code": "rgb(195, 196, 191)"},'+
     '{"Binated_Thread_Code": "B-1011","Thread_Discription": "Chrome","PMS_Code": "421C ","RGB_Code": "rgb(171, 176, 178)"},'+
     '{"Binated_Thread_Code": "B-1012","Thread_Discription": "Smoke","PMS_Code": "429C","RGB_Code": "rgb(163, 176, 181)"},'+
     '{"Binated_Thread_Code": "B-1013","Thread_Discription": "Peach Blush","PMS_Code": "5035C ","RGB_Code": "rgb(239, 210, 203)"},'+
     '{"Binated_Thread_Code": "B-1014","Thread_Discription": "Bermuda Sand","PMS_Code": "1767C","RGB_Code": "rgb(238, 178, 188)"},'+
     '{"Binated_Thread_Code": "B-1015","Thread_Discription": "Desert Bloom","PMS_Code": "169C","RGB_Code": "rgb(233, 180, 177)"},'+
     '{"Binated_Thread_Code": "B-1017","Thread_Discription": "Orange Wisp","PMS_Code": "488C","RGB_Code": "rgb(242, 187, 171)"},'+
     '{"Binated_Thread_Code": "B-1018","Thread_Discription": "Light Salmon","PMS_Code": "919C","RGB_Code": "rgb(239, 179, 168)"},'+
     '{"Binated_Thread_Code": "B-1020","Thread_Discription": "Bright Peach","PMS_Code": "170C","RGB_Code": "rgb(245, 137, 127)"},'+
     '{"Binated_Thread_Code": "B-1021","Thread_Discription": "Rust","PMS_Code": "167C","RGB_Code": "rgb(188, 84, 47)"},'+
     '{"Binated_Thread_Code": "B-1022","Thread_Discription": "Corn Silk","PMS_Code": "9140C","RGB_Code": "rgb(235, 227, 185)"},'+
     '{"Binated_Thread_Code": "B-1023","Thread_Discription": "Lemon","PMS_Code": "100C","RGB_Code": "rgb(244, 219, 106)"},'+
     '{"Binated_Thread_Code": "B-1024","Thread_Discription": "Gold Rush","PMS_Code": "7549C","RGB_Code": "rgb(250, 166, 31)"},'+
     '{"Binated_Thread_Code": "B-1025","Thread_Discription": "Military Gold","PMS_Code": "131C","RGB_Code": "rgb(204, 129, 41)"},'+
     '{"Binated_Thread_Code": "B-1026","Thread_Discription": "Orange Sorbet","PMS_Code": "149C","RGB_Code": "rgb(242, 188, 138)"},'+
     '{"Binated_Thread_Code": "B-1027","Thread_Discription": "Dolphin","PMS_Code": "544C","RGB_Code": "rgb(155, 187, 202)"},'+
     '{"Binated_Thread_Code": "B-1028","Thread_Discription": "Country Kitchen Blue","PMS_Code": "278C","RGB_Code": "rgb(90, 137, 169)"},'+
     '{"Binated_Thread_Code": "B-1029","Thread_Discription": "Blue Jay","PMS_Code": "279C","RGB_Code": "rgb(50, 138, 189)"},'+
     '{"Binated_Thread_Code": "B-1030","Thread_Discription": "Light Periwinkle","PMS_Code": "2708C","RGB_Code": "rgb(147, 168, 193)"},'+
     '{"Binated_Thread_Code": "B-1031","Thread_Discription": "Frosted Lavender","PMS_Code": "243C","RGB_Code": "rgb(200, 162, 192)"},'+
     '{"Binated_Thread_Code": "B-1032","Thread_Discription": "Velvet Violet","PMS_Code": "2080C","RGB_Code": "rgb(129, 109, 158)"},'+
     '{"Binated_Thread_Code": "B-1033","Thread_Discription": "Purple Pansy","PMS_Code": "526C","RGB_Code": "rgb(111, 74, 130)"},'+
     '{"Binated_Thread_Code": "B-1034","Thread_Discription": "Vintage Rose","PMS_Code": "7433C","RGB_Code": "rgb(155, 67, 100)"},'+
     '{"Binated_Thread_Code": "B-1035","Thread_Discription": "Burgundy","PMS_Code": "505C","RGB_Code": "rgb(101, 49, 63)"},'+
     '{"Binated_Thread_Code": "B-1036","Thread_Discription": "Raisin","PMS_Code": "1817C","RGB_Code": "rgb(89, 49, 51)"},'+
     '{"Binated_Thread_Code": "B-1037","Thread_Discription": "Tango","PMS_Code": "2035C","RGB_Code": "rgb(189, 34, 39)"},'+
     '{"Binated_Thread_Code": "B-1038","Thread_Discription": "Barn Red","PMS_Code": "201C","RGB_Code": "rgb(141, 47, 52)"},'+
     '{"Binated_Thread_Code": "B-1039","Thread_Discription": "Brick Red","PMS_Code": "200C","RGB_Code": "rgb(162, 40, 50)"},'+
     '{"Binated_Thread_Code": "B-1040","Thread_Discription": "Weimaraner","PMS_Code": "410C","RGB_Code": "rgb(139, 135, 138)"},'+
     '{"Binated_Thread_Code": "B-1041","Thread_Discription": "Polished Pewter","PMS_Code": "431C","RGB_Code": "rgb(112, 117, 124)"},'+
     '{"Binated_Thread_Code": "B-1042","Thread_Discription": "Lapis","PMS_Code": "8184C","RGB_Code": "rgb(33, 81, 121)"},'+
     '{"Binated_Thread_Code": "B-1043","Thread_Discription": "Navy","PMS_Code": "289C","RGB_Code": "rgb(45, 52, 69)"},'+
     '{"Binated_Thread_Code": "B-1044","Thread_Discription": "Indigo","PMS_Code": "289C","RGB_Code": "rgb(46, 50, 63)"},'+
     '{"Binated_Thread_Code": "B-1045","Thread_Discription": "Light Mint","PMS_Code": "7471C","RGB_Code": "rgb(136, 203, 190)"},'+
     '{"Binated_Thread_Code": "B-1046","Thread_Discription": "Eucalyptus","PMS_Code": "7465C","RGB_Code": "rgb(77, 172, 153)"},'+
     '{"Binated_Thread_Code": "B-1047","Thread_Discription": "Celadon","PMS_Code": "345C","RGB_Code": "rgb(159, 190, 163)"},'+
     '{"Binated_Thread_Code": "B-1048","Thread_Discription": "Aloe","PMS_Code": "7490C","RGB_Code": "rgb(123, 149, 83)"},'+
     '{"Binated_Thread_Code": "B-1049","Thread_Discription": "Lime Green","PMS_Code": "360C","RGB_Code": "rgb(110, 160, 76)"},'+
     '{"Binated_Thread_Code": "B-1050","Thread_Discription": "Green Thumb","PMS_Code": "361C","RGB_Code": "rgb(68, 150, 69)"},'+
     '{"Binated_Thread_Code": "B-1051","Thread_Discription": "Bell Pepper","PMS_Code": "2252C","RGB_Code": "rgb(0, 136, 70)"},'+
     '{"Binated_Thread_Code": "B-1052","Thread_Discription": "Mermaid","PMS_Code": "2236C","RGB_Code": "rgb(59, 117, 117)"},'+
     '{"Binated_Thread_Code": "B-1053","Thread_Discription": "Light Coral","PMS_Code": "488C","RGB_Code": "rgb(231, 183, 165)"},'+
     '{"Binated_Thread_Code": "B-1054","Thread_Discription": "Tawny","PMS_Code": "7613C","RGB_Code": "rgb(172, 131, 123)"},'+
     '{"Binated_Thread_Code": "B-1055","Thread_Discription": "Latte","PMS_Code": "155C","RGB_Code": "rgb(212, 177, 144)"},'+
     '{"Binated_Thread_Code": "B-1056","Thread_Discription": "Golden Oak","PMS_Code": "2313C","RGB_Code": "rgb(158, 106, 72)"},'+
     '{"Binated_Thread_Code": "B-1057","Thread_Discription": "Caramel","PMS_Code": "4645C","RGB_Code": "rgb(161, 114, 87)"},'+
     '{"Binated_Thread_Code": "B-1058","Thread_Discription": "Sienna","PMS_Code": "175C","RGB_Code": "rgb(114, 71, 61)"},'+
     '{"Binated_Thread_Code": "B-1059","Thread_Discription": "Dark Chocolate","PMS_Code": " Black 5 C","RGB_Code": "rgb(67, 56, 53)"},'+
     '{"Binated_Thread_Code": "B-1060","Thread_Discription": "Pussywillow","PMS_Code": "7527C","RGB_Code": "rgb(180, 166, 152)"},'+
     '{"Binated_Thread_Code": "B-1061","Thread_Discription": "Vanilla Pudding","PMS_Code": "9160C","RGB_Code": "rgb(244, 218, 171)"},'+
     '{"Binated_Thread_Code": "B-1062","Thread_Discription": "Rhino","PMS_Code": "7536C","RGB_Code": "rgb(142, 135, 122)"},'+
     '{"Binated_Thread_Code": "B-1063","Thread_Discription": "Elephant","PMS_Code": "7497C","RGB_Code": "rgb(124, 119, 107)"},'+
     '{"Binated_Thread_Code": "B-1064","Thread_Discription": "Goldenrod","PMS_Code": "109C","RGB_Code": "rgb(255, 201, 30)"},'+
     '{"Binated_Thread_Code": "B-1065","Thread_Discription": "Copper","PMS_Code": "151C","RGB_Code": "rgb(227, 120, 38)"},'+
     '{"Binated_Thread_Code": "B-1066","Thread_Discription": "Cornmeal","PMS_Code": "7401C","RGB_Code": "rgb(245, 214, 161)"},'+
     '{"Binated_Thread_Code": "B-1068","Thread_Discription": "Canary","PMS_Code": "116C","RGB_Code": "rgb(253, 187, 28)"},'+
     '{"Binated_Thread_Code": "B-1069","Thread_Discription": "Sunshine Yellow","PMS_Code": "123C","RGB_Code": "rgb(251, 177, 24)"},'+
     '{"Binated_Thread_Code": "B-1070","Thread_Discription": "Tawny Tan","PMS_Code": "141C","RGB_Code": "rgb(210, 170, 114)"},'+
     '{"Binated_Thread_Code": "B-1071","Thread_Discription": "Baby’s Breath","PMS_Code": "9285C","RGB_Code": "rgb(233, 228, 219)"},'+
     '{"Binated_Thread_Code": "B-1072","Thread_Discription": "Coconut Cream","PMS_Code": "9180C","RGB_Code": "rgb(221, 212, 190)"},'+
     '{"Binated_Thread_Code": "B-1074","Thread_Discription": "Powder Blue","PMS_Code": "2708C","RGB_Code": "rgb(151, 182, 208)"},'+
     '{"Binated_Thread_Code": "B-1075","Thread_Discription": "Baby Blue","PMS_Code": "2717C","RGB_Code": "rgb(131, 167, 199)"},'+
     '{"Binated_Thread_Code": "B-1076","Thread_Discription": "True Blue","PMS_Code": "2728C","RGB_Code": "rgb(0, 88, 151)"},'+
     '{"Binated_Thread_Code": "B-1078","Thread_Discription": "Pumpkin","PMS_Code": "Orange 021 C","RGB_Code": "rgb(235, 86, 40)"},'+
     '{"Binated_Thread_Code": "B-1079","Thread_Discription": "Celtic Green","PMS_Code": "347C","RGB_Code": "rgb(0, 136, 80)"},'+
     '{"Binated_Thread_Code": "B-1080","Thread_Discription": "Lilac","PMS_Code": "2066C","RGB_Code": "rgb(166, 125, 169)"},'+
     '{"Binated_Thread_Code": "B-1081","Thread_Discription": "Azalea","PMS_Code": "1925C","RGB_Code": "rgb(186, 50, 83)"},'+
     '{"Binated_Thread_Code": "B-1082","Thread_Discription": "Antique Ecru","PMS_Code": "2316C","RGB_Code": "rgb(205, 186, 167)"},'+
     '{"Binated_Thread_Code": "B-1083","Thread_Discription": "Daisy","PMS_Code": "121C","RGB_Code": "rgb(250, 207, 90)"},'+
     '{"Binated_Thread_Code": "B-1084","Thread_Discription": "Sandy Shores","PMS_Code": "9182C","RGB_Code": "rgb(210, 185, 157)"},'+
     '{"Binated_Thread_Code": "B-1085","Thread_Discription": "Cement","PMS_Code": "2330C","RGB_Code": "rgb(184, 181, 175)"},'+
     '{"Binated_Thread_Code": "B-1086","Thread_Discription": "Sterling Silver","PMS_Code": "427C","RGB_Code": "rgb(199, 200, 197)"},'+
     '{"Binated_Thread_Code": "B-1087","Thread_Discription": "Silver Birch","PMS_Code": "2330C","RGB_Code": "rgb(189, 188, 184)"},'+
     '{"Binated_Thread_Code": "B-1088","Thread_Discription": "Robin’s Egg","PMS_Code": "2227C","RGB_Code": "rgb(97, 169, 172)"},'+
     '{"Binated_Thread_Code": "B-1089","Thread_Discription": "Sea Frost","PMS_Code": "636C","RGB_Code": "rgb(109, 169, 177)"},'+
     '{"Binated_Thread_Code": "B-1090","Thread_Discription": "Deep Sky Blue","PMS_Code": "2235C","RGB_Code": "rgb(22, 134, 138)"},'+
     '{"Binated_Thread_Code": "B-1091","Thread_Discription": "Teal Blue","PMS_Code": "632C","RGB_Code": "rgb(8, 113, 129)"},'+
     '{"Binated_Thread_Code": "B-1092","Thread_Discription": "Summer Sky","PMS_Code": "550C","RGB_Code": "rgb(148, 194, 208)"},'+
     '{"Binated_Thread_Code": "B-1093","Thread_Discription": "Azure Sea","PMS_Code": "305C","RGB_Code": "rgb(36, 187, 201)"},'+
     '{"Binated_Thread_Code": "B-1094","Thread_Discription": "Caribbean Blue","PMS_Code": "306C","RGB_Code": "rgb(9, 178, 200)"},'+
     '{"Binated_Thread_Code": "B-1095","Thread_Discription": "Larimar","PMS_Code": "638C","RGB_Code": "rgb(0, 169, 194)"},'+
     '{"Binated_Thread_Code": "B-1096","Thread_Discription": "Cobalt","PMS_Code": "7461C","RGB_Code": "rgb(11, 126, 155)"},'+
     '{"Binated_Thread_Code": "B-1097","Thread_Discription": "Honeydew Melon","PMS_Code": "558C ","RGB_Code": "rgb(174, 209, 191)"},'+
     '{"Binated_Thread_Code": "B-1098","Thread_Discription": "Blue Grass","PMS_Code": "8284C","RGB_Code": "rgb(90, 135, 115)"},'+
     '{"Binated_Thread_Code": "B-1099","Thread_Discription": "Leek","PMS_Code": "7485C","RGB_Code": "rgb(187, 193, 159)"},'+
     '{"Binated_Thread_Code": "B-1100","Thread_Discription": "Cucumber","PMS_Code": "7486C","RGB_Code": "rgb(189, 208, 178)"},'+
     '{"Binated_Thread_Code": "B-1101","Thread_Discription": "Wintergreen","PMS_Code": "2257C","RGB_Code": "rgb(70, 144, 83)"},'+
     '{"Binated_Thread_Code": "B-1102","Thread_Discription": "Light Moss Green","PMS_Code": "7492C","RGB_Code": "rgb(182, 176, 125)"},'+
     '{"Binated_Thread_Code": "B-1103","Thread_Discription": "Hunter Green","PMS_Code": "3435C","RGB_Code": "rgb(53, 78, 60)"},'+
     '{"Binated_Thread_Code": "B-1104","Thread_Discription": "Scallion","PMS_Code": "580C","RGB_Code": "rgb(193, 196, 150)"},'+
     '{"Binated_Thread_Code": "B-1105","Thread_Discription": "Weeping Willow","PMS_Code": "452C","RGB_Code": "rgb(170, 162, 125)"},'+
     '{"Binated_Thread_Code": "B-1106","Thread_Discription": "Guacamole","PMS_Code": "10107C","RGB_Code": "rgb(151, 140, 84)"},'+
     '{"Binated_Thread_Code": "B-1107","Thread_Discription": "Honeysuckle","PMS_Code": "1777C","RGB_Code": "rgb(231, 99, 119)"},'+
     '{"Binated_Thread_Code": "B-1109","Thread_Discription": "Pink Rose","PMS_Code": "212C","RGB_Code": "rgb(208, 79, 137)"},'+
     '{"Binated_Thread_Code": "B-1110","Thread_Discription": "Fuchsia","PMS_Code": "219C","RGB_Code": "rgb(192, 48, 110)"},'+
     '{"Binated_Thread_Code": "B-1111","Thread_Discription": "Evening Mist","PMS_Code": "531C","RGB_Code": "rgb(197, 174, 197)"},'+
     '{"Binated_Thread_Code": "B-1112","Thread_Discription": "Majestic Purple","PMS_Code": "2090C","RGB_Code": "rgb(84, 72, 129)"},'+
     '{"Binated_Thread_Code": "B-1114","Thread_Discription": "Pink Petal","PMS_Code": "7422C","RGB_Code": "rgb(234, 186, 185)"},'+
     '{"Binated_Thread_Code": "B-1115","Thread_Discription": "Powder Puff","PMS_Code": "176C","RGB_Code": "rgb(238, 187, 192)"},'+
     '{"Binated_Thread_Code": "B-1116","Thread_Discription": "Cotton Candy","PMS_Code": "189C","RGB_Code": "rgb(234, 173, 191)"},'+
     '{"Binated_Thread_Code": "B-1117","Thread_Discription": "Flamingo Pink","PMS_Code": "205C","RGB_Code": "rgb(214, 97, 142)"},'+
     '{"Binated_Thread_Code": "B-1118","Thread_Discription": "Overcast Gray","PMS_Code": "429C","RGB_Code": "rgb(137, 145, 146)"},'+
     '{"Binated_Thread_Code": "B-1119","Thread_Discription": "English Rose","PMS_Code": "7634C","RGB_Code": "rgb(158, 81, 101)"},'+
     '{"Binated_Thread_Code": "B-1120","Thread_Discription": "Baby Pink","PMS_Code": "707C","RGB_Code": "rgb(230, 185, 200)"},'+
     '{"Binated_Thread_Code": "B-1121","Thread_Discription": "Candy Heart","PMS_Code": "203C","RGB_Code": "rgb(226, 174, 197)"},'+
     '{"Binated_Thread_Code": "B-1122","Thread_Discription": "Deep Lilac","PMS_Code": "7664C","RGB_Code": "rgb(79, 54, 105)"},'+
     '{"Binated_Thread_Code": "B-1123","Thread_Discription": "Parchment","PMS_Code": "7499C","RGB_Code": "rgb(236, 224, 191)"},'+
     '{"Binated_Thread_Code": "B-1124","Thread_Discription": "Buttercup","PMS_Code": "116C","RGB_Code": "rgb(250, 199, 76)"},'+
     '{"Binated_Thread_Code": "B-1125","Thread_Discription": "Saffron","PMS_Code": "1225C","RGB_Code": "rgb(241, 177, 61)"},'+
     '{"Binated_Thread_Code": "B-1126","Thread_Discription": "Light Brown Sugar","PMS_Code": "10143C","RGB_Code": "rgb(174, 126, 91)"},'+
     '{"Binated_Thread_Code": "B-1127","Thread_Discription": "Loofah","PMS_Code": "474C","RGB_Code": "rgb(219, 186, 166)"},'+
     '{"Binated_Thread_Code": "B-1128","Thread_Discription": "Taupe","PMS_Code": "10136C","RGB_Code": "rgb(163, 144, 130)"},'+
     '{"Binated_Thread_Code": "B-1129","Thread_Discription": "Mud Pie","PMS_Code": "412C","RGB_Code": "rgb(73, 58, 52)"},'+
     '{"Binated_Thread_Code": "B-1130","Thread_Discription": "Chocolate Chip","PMS_Code": "476C","RGB_Code": "rgb(74, 58, 55)"},'+
     '{"Binated_Thread_Code": "B-1131","Thread_Discription": "Espresso","PMS_Code": "Black C","RGB_Code": "rgb(60, 53, 50)"},'+
     '{"Binated_Thread_Code": "B-1132","Thread_Discription": "Clear Blue","PMS_Code": "291C","RGB_Code": "rgb(138, 187, 207)"},'+
     '{"Binated_Thread_Code": "B-1133","Thread_Discription": "Forget-Me-Not","PMS_Code": "279C","RGB_Code": "rgb(41, 127, 184)"},'+
     '{"Binated_Thread_Code": "B-1134","Thread_Discription": "Royal Blue","PMS_Code": "2132C","RGB_Code": "rgb(0, 86, 147)"},'+
     '{"Binated_Thread_Code": "B-1135","Thread_Discription": "Baby Chick","PMS_Code": "1205C","RGB_Code": "rgb(245, 215, 119)"},'+
     '{"Binated_Thread_Code": "B-1136","Thread_Discription": "Dark Taupe","PMS_Code": "7531C","RGB_Code": "rgb(140, 122, 109)"},'+
     '{"Binated_Thread_Code": "B-1137","Thread_Discription": "Citrus Burst","PMS_Code": "137C","RGB_Code": "rgb(243, 141, 33)"},'+
     '{"Binated_Thread_Code": "B-1138","Thread_Discription": "Doe Skin","PMS_Code": "9183C","RGB_Code": "rgb(205, 186, 165)"},'+
     '{"Binated_Thread_Code": "B-1140","Thread_Discription": "Avocado Green","PMS_Code": "2304C","RGB_Code": "rgb(128, 129, 52)"},'+
     '{"Binated_Thread_Code": "B-1141","Thread_Discription": "Mauve","PMS_Code": "5005C","RGB_Code": "rgb(157, 114, 121)"},'+
     '{"Binated_Thread_Code": "B-1142","Thread_Discription": "Peach Puff","PMS_Code": "4735C","RGB_Code": "rgb(182, 154, 142)"},'+
     '{"Binated_Thread_Code": "B-1143","Thread_Discription": "China Blue","PMS_Code": "2130C","RGB_Code": "rgb(75, 108, 154)"},'+
     '{"Binated_Thread_Code": "B-1144","Thread_Discription": "Bark","PMS_Code": "7504C","RGB_Code": "rgb(133, 107, 89)"},'+
     '{"Binated_Thread_Code": "B-1145","Thread_Discription": "Coffee Bean","PMS_Code": "7603C","RGB_Code": "rgb(95, 64, 54)"},'+
     '{"Binated_Thread_Code": "B-1146","Thread_Discription": "Tomato Red","PMS_Code": "485C","RGB_Code": "rgb(211, 41, 40)"},'+
     '{"Binated_Thread_Code": "B-1147","Thread_Discription": "Christmas Red","PMS_Code": "1795C","RGB_Code": "rgb(182, 31, 49)"},'+
     '{"Binated_Thread_Code": "B-1148","Thread_Discription": "Rustic Pink","PMS_Code": "183C","RGB_Code": "rgb(219, 139, 154)"},'+
     '{"Binated_Thread_Code": "B-1149","Thread_Discription": "Tusk","PMS_Code": "9202C","RGB_Code": "rgb(220, 198, 180)"},'+
     '{"Binated_Thread_Code": "B-1150","Thread_Discription": "Chartreuse","PMS_Code": "937C","RGB_Code": "rgb(219, 223, 139)"},'+
     '{"Binated_Thread_Code": "B-1151","Thread_Discription": "Silver Moon","PMS_Code": "9381C","RGB_Code": "rgb(187, 197, 206)"},'+
     '{"Binated_Thread_Code": "B-1152","Thread_Discription": "Peach Tea","PMS_Code": "1635C","RGB_Code": "rgb(245, 138, 116)"},'+
     '{"Binated_Thread_Code": "B-1153","Thread_Discription": "Frosted Glass","PMS_Code": "643C","RGB_Code": "rgb(172, 191, 203)"},'+
     '{"Binated_Thread_Code": "B-1154","Thread_Discription": "Lipstick Rose","PMS_Code": "1785C","RGB_Code": "rgb(216, 70, 97)"},'+
     '{"Binated_Thread_Code": "B-1155","Thread_Discription": "Marmalade","PMS_Code": "714C","RGB_Code": "rgb(245, 159, 103)"},'+
     '{"Binated_Thread_Code": "B-1156","Thread_Discription": "Palm Frond","PMS_Code": "5767C","RGB_Code": "rgb(121, 117, 72)"},'+
     '{"Binated_Thread_Code": "B-1157","Thread_Discription": "Marsh","PMS_Code": "7757C","RGB_Code": "rgb(120, 108, 77)"},'+
     '{"Binated_Thread_Code": "B-1158","Thread_Discription": "Chestnut","PMS_Code": "7594C","RGB_Code": "rgb(123, 69, 57)"},'+
     '{"Binated_Thread_Code": "B-1159","Thread_Discription": "Mustard","PMS_Code": "117C","RGB_Code": "rgb(210, 162, 67)"},'+
     '{"Binated_Thread_Code": "B-1160","Thread_Discription": "Antique Blue","PMS_Code": "7698C","RGB_Code": "rgb(76, 115, 132)"},'+
     '{"Binated_Thread_Code": "B-1161","Thread_Discription": "Twilight","PMS_Code": "2181C","RGB_Code": "rgb(47, 73, 82)"},'+
     '{"Binated_Thread_Code": "B-1162","Thread_Discription": "Admiral Blue","PMS_Code": "2210C","RGB_Code": "rgb(33, 64, 75)"},'+
     '{"Binated_Thread_Code": "B-1163","Thread_Discription": "Steel Green","PMS_Code": "8201C","RGB_Code": "rgb(128, 151, 158)"},'+
     '{"Binated_Thread_Code": "B-1164","Thread_Discription": "Twister","PMS_Code": "8605C","RGB_Code": "rgb(85, 91, 100)"},'+
     '{"Binated_Thread_Code": "B-1166","Thread_Discription": "Hanukkah Blue","PMS_Code": "2747C","RGB_Code": "rgb(32, 69, 131)"},'+
     '{"Binated_Thread_Code": "B-1167","Thread_Discription": "Blue Ink","PMS_Code": "7687C","RGB_Code": "rgb(35, 74, 121)"},'+
     '{"Binated_Thread_Code": "B-1169","Thread_Discription": "Split Pea","PMS_Code": "377C","RGB_Code": "rgb(141, 153, 70)"},'+
     '{"Binated_Thread_Code": "B-1170","Thread_Discription": "Fern","PMS_Code": "370C","RGB_Code": "rgb(93, 111, 49)"},'+
     '{"Binated_Thread_Code": "B-1171","Thread_Discription": "Lemon Drop","PMS_Code": "135C","RGB_Code": "rgb(240, 221, 167)"},'+
     '{"Binated_Thread_Code": "B-1172","Thread_Discription": "Egg Yolk","PMS_Code": "130C","RGB_Code": "rgb(233, 154, 40)"},'+
     '{"Binated_Thread_Code": "B-1173","Thread_Discription": "Autumn Gold","PMS_Code": "7412C","RGB_Code": "rgb(194, 121, 61)"},'+
     '{"Binated_Thread_Code": "B-1174","Thread_Discription": "Cinnamon Stick","PMS_Code": "1807C","RGB_Code": "rgb(133, 59, 57)"},'+
     '{"Binated_Thread_Code": "B-1175","Thread_Discription": "Dark Federal Blue","PMS_Code": "653C","RGB_Code": "rgb(61, 105, 141)"},'+
     '{"Binated_Thread_Code": "B-1176","Thread_Discription": "Navajo Blue","PMS_Code": "2143C","RGB_Code": "rgb(16, 130, 183)"},'+
     '{"Binated_Thread_Code": "B-1177","Thread_Discription": "Blue Bird","PMS_Code": "2935C","RGB_Code": "rgb(0, 110, 169)"},'+
     '{"Binated_Thread_Code": "B-1178","Thread_Discription": "Carrot","PMS_Code": "1645C","RGB_Code": "rgb(241, 106, 70)"},'+
     '{"Binated_Thread_Code": "B-1179","Thread_Discription": "Sweet Potato","PMS_Code": "2348C","RGB_Code": "rgb(202, 82, 76)"},'+
     '{"Binated_Thread_Code": "B-1180","Thread_Discription": "Daffodil","PMS_Code": "7404C","RGB_Code": "rgb(230, 195, 71)"},'+
     '{"Binated_Thread_Code": "B-1181","Thread_Discription": "Candy Apple Red","PMS_Code": "7427C","RGB_Code": "rgb(139, 37, 53)"},'+
     '{"Binated_Thread_Code": "B-1182","Thread_Discription": "Mulberry","PMS_Code": "7637C","RGB_Code": "rgb(121, 44, 61)"},'+
     '{"Binated_Thread_Code": "B-1183","Thread_Discription": "Cranberry","PMS_Code": "2041C","RGB_Code": "rgb(143, 51, 84)"},'+
     '{"Binated_Thread_Code": "B-1184","Thread_Discription": "Scarlet Rose","PMS_Code": "1935C","RGB_Code": "rgb(189, 32, 71)"},'+
     '{"Binated_Thread_Code": "B-1185","Thread_Discription": "Dark Teal","PMS_Code": "7719C","RGB_Code": "rgb(4, 100, 95)"},'+
     '{"Binated_Thread_Code": "B-1186","Thread_Discription": "Ruby Slipper","PMS_Code": "Rubin Red C","RGB_Code": "rgb(169, 30, 70)"},'+
     '{"Binated_Thread_Code": "B-1187","Thread_Discription": "Orchid","PMS_Code": "2040C","RGB_Code": "rgb(183, 31, 87)"},'+
     '{"Binated_Thread_Code": "B-1188","Thread_Discription": "Chokecherry","PMS_Code": "249C","RGB_Code": "rgb(123, 61, 110)"},'+
     '{"Binated_Thread_Code": "B-1189","Thread_Discription": "Moss Green","PMS_Code": "7743C","RGB_Code": "rgb(65, 85, 54)"},'+
     '{"Binated_Thread_Code": "B-1190","Thread_Discription": "Sea Weed","PMS_Code": "3985C","RGB_Code": "rgb(150, 128, 61)"},'+
     '{"Binated_Thread_Code": "B-1191","Thread_Discription": "Gold Coin","PMS_Code": "7557C","RGB_Code": "rgb(147, 113, 55)"},'+
     '{"Binated_Thread_Code": "B-1192","Thread_Discription": "Honey Mustard","PMS_Code": "125C","RGB_Code": "rgb(169, 122, 43)"},'+
     '{"Binated_Thread_Code": "B-1193","Thread_Discription": "Peridot","PMS_Code": "617C","RGB_Code": "rgb(179, 159, 84)"},'+
     '{"Binated_Thread_Code": "B-1194","Thread_Discription": "Dark Olive","PMS_Code": "133C","RGB_Code": "rgb(115, 93, 45)"},'+
     '{"Binated_Thread_Code": "B-1195","Thread_Discription": "Menthol","PMS_Code": "566C","RGB_Code": "rgb(145, 196, 181)"},'+
     '{"Binated_Thread_Code": "B-1196","Thread_Discription": "Medium Camo Green","PMS_Code": "456C","RGB_Code": "rgb(161, 131, 46)"},'+
     '{"Binated_Thread_Code": "B-1198","Thread_Discription": "Moonstone","PMS_Code": "2707C","RGB_Code": "rgb(180, 197, 213)"},'+
     '{"Binated_Thread_Code": "B-1199","Thread_Discription": "Onyx","PMS_Code": "8604C","RGB_Code": "rgb(43, 48, 55)"},'+
     '{"Binated_Thread_Code": "B-1212","Thread_Discription": "Stainless Steel","PMS_Code": "7543C","RGB_Code": "rgb(163, 176, 181)"},'+
     '{"Binated_Thread_Code": "B-1219","Thread_Discription": "Hint of Mint","PMS_Code": "621C","RGB_Code": "rgb(163, 188, 184)"},'+
     '{"Binated_Thread_Code": "B-1220","Thread_Discription": "Conch Shell","PMS_Code": "2029C","RGB_Code": "rgb(225, 117, 121)"},'+
     '{"Binated_Thread_Code": "B-1221","Thread_Discription": "Terra Cotta","PMS_Code": "7598C","RGB_Code": "rgb(171, 66, 52)"},'+
     '{"Binated_Thread_Code": "B-1223","Thread_Discription": "Lemon Tart","PMS_Code": "Yellow C","RGB_Code": "rgb(238, 199, 39)"},'+
     '{"Binated_Thread_Code": "B-1224","Thread_Discription": "Lemonade","PMS_Code": "2003C","RGB_Code": "rgb(225, 188, 79)"},'+
     '{"Binated_Thread_Code": "B-1225","Thread_Discription": "Liquid Gold","PMS_Code": "7563C","RGB_Code": "rgb(200, 141, 70)"},'+
     '{"Binated_Thread_Code": "B-1226","Thread_Discription": "Amber","PMS_Code": "714C","RGB_Code": "rgb(211, 140, 99)"},'+
     '{"Binated_Thread_Code": "B-1227","Thread_Discription": "Mint Jubilee","PMS_Code": "564C","RGB_Code": "rgb(122, 156, 151)"},'+
     '{"Binated_Thread_Code": "B-1228","Thread_Discription": "Mink","PMS_Code": "warmgrey 11C","RGB_Code": "rgb(110, 99, 89)"},'+
     '{"Binated_Thread_Code": "B-1229","Thread_Discription": "Clove","PMS_Code": "8601C","RGB_Code": "rgb(94, 82, 72)"},'+
     '{"Binated_Thread_Code": "B-1230","Thread_Discription": "Root Beer","PMS_Code": "8621C","RGB_Code": "rgb(99, 79, 64)"},'+
     '{"Binated_Thread_Code": "B-1232","Thread_Discription": "Lavender","PMS_Code": "Violet 0631C","RGB_Code": "rgb(166, 153, 186)"},'+
     '{"Binated_Thread_Code": "B-1233","Thread_Discription": "Blackberry Purple","PMS_Code": "668C","RGB_Code": "rgb(79, 70, 100)"},'+
     '{"Binated_Thread_Code": "B-1234","Thread_Discription": "Hibiscus","PMS_Code": "7425C","RGB_Code": "rgb(191, 58, 100)"},'+
     '{"Binated_Thread_Code": "B-1235","Thread_Discription": "Crocus","PMS_Code": "2058C","RGB_Code": "rgb(155, 105, 142)"},'+
     '{"Binated_Thread_Code": "B-1236","Thread_Discription": "Plum Brandy","PMS_Code": "505C","RGB_Code": "rgb(78, 43, 54)"},'+
     '{"Binated_Thread_Code": "B-1238","Thread_Discription": "Sangria","PMS_Code": "201C","RGB_Code": "rgb(130, 42, 53)"},'+
     '{"Binated_Thread_Code": "B-1239","Thread_Discription": "Charcoal","PMS_Code": "10385C","RGB_Code": "rgb(88, 83, 82)"},'+
     '{"Binated_Thread_Code": "B-1240","Thread_Discription": "Stone","PMS_Code": "409C","RGB_Code": "rgb(115, 106, 105)"},'+
     '{"Binated_Thread_Code": "B-1241","Thread_Discription": "Obsidian","PMS_Code": "432C","RGB_Code": "rgb(60, 64, 70)"},'+
     '{"Binated_Thread_Code": "B-1242","Thread_Discription": "Dark Denim","PMS_Code": "654C","RGB_Code": "rgb(35, 62, 92)"},'+
     '{"Binated_Thread_Code": "B-1243","Thread_Discription": "Star-kissed Night","PMS_Code": "2768C","RGB_Code": "rgb(52, 61, 83)"},'+
     '{"Binated_Thread_Code": "B-1244","Thread_Discription": "Darkest Night","PMS_Code": "Black 6 C","RGB_Code": "rgb(45, 49, 57)"},'+
     '{"Binated_Thread_Code": "B-1245","Thread_Discription": "Sea Foam Green","PMS_Code": "339C","RGB_Code": "rgb(41, 160, 133)"},'+
     '{"Binated_Thread_Code": "B-1246","Thread_Discription": "Teal Green","PMS_Code": "326C","RGB_Code": "rgb(0, 140, 135)"},'+
     '{"Binated_Thread_Code": "B-1247","Thread_Discription": "Bottle Green","PMS_Code": "340C","RGB_Code": "rgb(2, 148, 110)"},'+
     '{"Binated_Thread_Code": "B-1248","Thread_Discription": "Margarita Lime","PMS_Code": "2283C","RGB_Code": "rgb(155, 205, 106)"},'+
     '{"Binated_Thread_Code": "B-1249","Thread_Discription": "Shamrock","PMS_Code": "802C ","RGB_Code": "rgb(18, 162, 74)"},'+
     '{"Binated_Thread_Code": "B-1250","Thread_Discription": "Christmas Green","PMS_Code": "3415C","RGB_Code": "rgb(0, 114, 73)"},'+
     '{"Binated_Thread_Code": "B-1251","Thread_Discription": "Kelly Green","PMS_Code": "7481C","RGB_Code": "rgb(5, 146, 75)"},'+
     '{"Binated_Thread_Code": "B-1252","Thread_Discription": "Neptune","PMS_Code": "5473C","RGB_Code": "rgb(56, 93, 100)"},'+
     '{"Binated_Thread_Code": "B-1253","Thread_Discription": "Penny","PMS_Code": "7576C","RGB_Code": "rgb(204, 122, 78)"},'+
     '{"Binated_Thread_Code": "B-1254","Thread_Discription": "Dark Salmon","PMS_Code": "170C","RGB_Code": "rgb(227, 141, 128)"},'+
     '{"Binated_Thread_Code": "B-1255","Thread_Discription": "Khaki","PMS_Code": "7407C","RGB_Code": "rgb(192, 148, 107)"},'+
     '{"Binated_Thread_Code": "B-1256","Thread_Discription": "Teddy Bear","PMS_Code": "874C","RGB_Code": "rgb(175, 128, 86)"},'+
     '{"Binated_Thread_Code": "B-1257","Thread_Discription": "Bronze","PMS_Code": "7566C","RGB_Code": "rgb(157, 87, 46)"},'+
     '{"Binated_Thread_Code": "B-1258","Thread_Discription": "Grizzley Bear","PMS_Code": "7587C","RGB_Code": "rgb(128, 74, 53)"},'+
     '{"Binated_Thread_Code": "B-1259","Thread_Discription": "Cocoa","PMS_Code": "8561C","RGB_Code": "rgb(121, 89, 85)"},'+
     '{"Binated_Thread_Code": "B-1260","Thread_Discription": "Canvas","PMS_Code": "4545C","RGB_Code": "rgb(191, 176, 133)"},'+
     '{"Binated_Thread_Code": "B-1261","Thread_Discription": "Lavendula","PMS_Code": "2716C","RGB_Code": "rgb(147, 157, 195)"},'+
     '{"Binated_Thread_Code": "B-1263","Thread_Discription": "Dusty Lilac","PMS_Code": "666C","RGB_Code": "rgb(126, 120, 150)"},'+
     '{"Binated_Thread_Code": "B-1264","Thread_Discription": "Lavender Ice","PMS_Code": "8100C","RGB_Code": "rgb(148, 140, 158)"},'+
     '{"Binated_Thread_Code": "B-1266","Thread_Discription": "Regal Blue","PMS_Code": "2726C","RGB_Code": "rgb(43, 85, 148)"},'+
     '{"Binated_Thread_Code": "B-1270","Thread_Discription": "Sawdust","PMS_Code": "7401C","RGB_Code": "rgb(228, 185, 131)"},'+
     '{"Binated_Thread_Code": "B-1272","Thread_Discription": "Golden Retriever","PMS_Code": "149C","RGB_Code": "rgb(220, 163, 115)"},'+
     '{"Binated_Thread_Code": "B-1273","Thread_Discription": "Peanut Brittle","PMS_Code": "7562C","RGB_Code": "rgb(167, 140, 97)"},'+
     '{"Binated_Thread_Code": "B-1274","Thread_Discription": "Porcelain Blue","PMS_Code": "292C","RGB_Code": "rgb(112, 168, 198)"},'+
     '{"Binated_Thread_Code": "B-1275","Thread_Discription": "Periwinkle","PMS_Code": "2122C","RGB_Code": "rgb(121, 146, 184)"},'+
     '{"Binated_Thread_Code": "B-1276","Thread_Discription": "Light Denim","PMS_Code": "646C","RGB_Code": "rgb(65, 117, 152)"},'+
     '{"Binated_Thread_Code": "B-1277","Thread_Discription": "Blueberry Smash","PMS_Code": "534C","RGB_Code": "rgb(41, 61, 82)"},'+
     '{"Binated_Thread_Code": "B-1278","Thread_Discription": "Orange Icing","PMS_Code": "1505C","RGB_Code": "rgb(241, 104, 36)"},'+
     '{"Binated_Thread_Code": "B-1279","Thread_Discription": "Tropical Teal","PMS_Code": "3282C","RGB_Code": "rgb(3, 130, 116)"},'+
     '{"Binated_Thread_Code": "B-1280","Thread_Discription": "Oregon Green","PMS_Code": "3288C","RGB_Code": "rgb(2, 120, 100)"},'+
     '{"Binated_Thread_Code": "B-1281","Thread_Discription": "Radish","PMS_Code": "193C","RGB_Code": "rgb(161, 35, 65)"},'+
     '{"Binated_Thread_Code": "B-1284","Thread_Discription": "Emerald Sea","PMS_Code": "3288C","RGB_Code": "rgb(4, 99, 84)"},'+
     '{"Binated_Thread_Code": "B-1286","Thread_Discription": "Mist","PMS_Code": "Cool Grey 1C","RGB_Code": "rgb(208, 206, 202)"},'+
     '{"Binated_Thread_Code": "B-1287","Thread_Discription": "Gun Metal","PMS_Code": "10190C","RGB_Code": "rgb(107, 106, 106)"},'+
     '{"Binated_Thread_Code": "B-1288","Thread_Discription": "Shark","PMS_Code": "423C","RGB_Code": "rgb(123, 122, 119)"},'+
     '{"Binated_Thread_Code": "B-1289","Thread_Discription": "Silver Mound","PMS_Code": "631C","RGB_Code": "rgb(73, 152, 164)"},'+
     '{"Binated_Thread_Code": "B-1290","Thread_Discription": "Mallard Teal","PMS_Code": "3165C","RGB_Code": "rgb(23, 75, 76)"},'+
     '{"Binated_Thread_Code": "B-1291","Thread_Discription": "Marlin","PMS_Code": "315C","RGB_Code": "rgb(9, 102, 116)"},'+
     '{"Binated_Thread_Code": "B-1292","Thread_Discription": "Limestone","PMS_Code": "317C","RGB_Code": "rgb(143, 196, 196)"},'+
     '{"Binated_Thread_Code": "B-1293","Thread_Discription": "Malachite","PMS_Code": "322C","RGB_Code": "rgb(2, 110, 113)"},'+
     '{"Binated_Thread_Code": "B-1294","Thread_Discription": "Liberty","PMS_Code": "&nbsp;633C","RGB_Code": "rgb(7, 130, 155)"},'+
     '{"Binated_Thread_Code": "B-1295","Thread_Discription": "Cyan","PMS_Code": "7460C","RGB_Code": "rgb(5, 141, 173)"},'+
     '{"Binated_Thread_Code": "B-1296","Thread_Discription": "Deep Ocean","PMS_Code": "7469C","RGB_Code": "rgb(10, 97, 128)"},'+
     '{"Binated_Thread_Code": "B-1297","Thread_Discription": "Calypso Blue","PMS_Code": "2193C","RGB_Code": "rgb(7, 114, 163)"},'+
     '{"Binated_Thread_Code": "B-1298","Thread_Discription": "Tree Frog","PMS_Code": "3272C","RGB_Code": "rgb(5, 135, 123)"},'+
     '{"Binated_Thread_Code": "B-1299","Thread_Discription": "Green Turquoise","PMS_Code": "326C","RGB_Code": "rgb(0, 185, 172)"},'+
     '{"Binated_Thread_Code": "B-1301","Thread_Discription": "Jade","PMS_Code": "2413C","RGB_Code": "rgb(53, 168, 125)"},'+
     '{"Binated_Thread_Code": "B-1302","Thread_Discription": "Spearmint","PMS_Code": "353C","RGB_Code": "rgb(126, 200, 149)"},'+
     '{"Binated_Thread_Code": "B-1303","Thread_Discription": "Fresh Oregano","PMS_Code": "5605C","RGB_Code": "rgb(55, 65, 52)"},'+
     '{"Binated_Thread_Code": "B-1304","Thread_Discription": "Ivy","PMS_Code": "7729C","RGB_Code": "rgb(18, 80, 65)"},'+
     '{"Binated_Thread_Code": "B-1305","Thread_Discription": "Chamois","PMS_Code": "4545C","RGB_Code": "rgb(194, 182, 152)"},'+
     '{"Binated_Thread_Code": "B-1306","Thread_Discription": "Army Green","PMS_Code": "2327C","RGB_Code": "rgb(125, 122, 103)"},'+
     '{"Binated_Thread_Code": "B-1307","Thread_Discription": "Raspberry Punch","PMS_Code": "Red 032 C","RGB_Code": "rgb(218, 71, 82)"},'+
     '{"Binated_Thread_Code": "B-1308","Thread_Discription": "Army Fatigues","PMS_Code": "5753C ","RGB_Code": "rgb(108, 110, 91)"},'+
     '{"Binated_Thread_Code": "B-1309","Thread_Discription": "Dahlia","PMS_Code": "211C","RGB_Code": "rgb(215, 99, 154)"},'+
     '{"Binated_Thread_Code": "B-1310","Thread_Discription": "Magenta","PMS_Code": "2062C","RGB_Code": "rgb(151, 61, 116)"},'+
     '{"Binated_Thread_Code": "B-1311","Thread_Discription": "Mystic Lavender","PMS_Code": "2073C","RGB_Code": "rgb(142, 140, 184)"},'+
     '{"Binated_Thread_Code": "B-1312","Thread_Discription": "Purple Grape","PMS_Code": "7677C","RGB_Code": "rgb(89, 74, 112)"},'+
     '{"Binated_Thread_Code": "B-1313","Thread_Discription": "Berry Blast","PMS_Code": "2627C","RGB_Code": "rgb(69, 54, 85)"},'+
     '{"Binated_Thread_Code": "B-1315","Thread_Discription": "Pink Grapefruit","PMS_Code": "1765C","RGB_Code": "rgb(229, 157, 167)"},'+
     '{"Binated_Thread_Code": "B-1317","Thread_Discription": "Blush Pink","PMS_Code": "5035C ","RGB_Code": "rgb(234, 160, 156)"},'+
     '{"Binated_Thread_Code": "B-1318","Thread_Discription": "Graphite","PMS_Code": "Black C","RGB_Code": "rgb(67, 66, 72)"},'+
     '{"Binated_Thread_Code": "B-1319","Thread_Discription": "Iris","PMS_Code": "2060C","RGB_Code": "rgb(163, 103, 138)"},'+
     '{"Binated_Thread_Code": "B-1320","Thread_Discription": "Purple Heart","PMS_Code": "519C","RGB_Code": "rgb(91, 65, 92)"},'+
     '{"Binated_Thread_Code": "B-1321","Thread_Discription": "Bubble Gum Pink","PMS_Code": "2037C","RGB_Code": "rgb(225, 147, 184)"},'+
     '{"Binated_Thread_Code": "B-1322","Thread_Discription": "Royal Purple","PMS_Code": "2685C","RGB_Code": "rgb(66, 64, 122)"},'+
     '{"Binated_Thread_Code": "B-1323","Thread_Discription": "Golden Wheat","PMS_Code": "458C","RGB_Code": "rgb(206, 175, 77)"},'+
     '{"Binated_Thread_Code": "B-1328","Thread_Discription": "Buckskin","PMS_Code": "4725C","RGB_Code": "rgb(153, 126, 111)"},'+
     '{"Binated_Thread_Code": "B-1329","Thread_Discription": "Toasted Marshmellow","PMS_Code": "7614C","RGB_Code": "rgb(126, 97, 85)"},'+
     '{"Binated_Thread_Code": "B-1330","Thread_Discription": "Bahamas Blue","PMS_Code": "2725C","RGB_Code": "rgb(82, 95, 153)"},'+
     '{"Binated_Thread_Code": "B-1334","Thread_Discription": "Purple Passion","PMS_Code": "255C","RGB_Code": "rgb(98, 51, 103)"},'+
     '{"Binated_Thread_Code": "B-1335","Thread_Discription": "Dark Periwinkle","PMS_Code": "7456C","RGB_Code": "rgb(70, 102, 163)"},'+
     '{"Binated_Thread_Code": "B-1336","Thread_Discription": "Saddle Brown","PMS_Code": "10379C","RGB_Code": "rgb(111, 90, 83)"},'+
     '{"Binated_Thread_Code": "B-1337","Thread_Discription": "Gray Mist","PMS_Code": 1337,"RGB_Code": "rgb(152, 154, 135)"},'+
     '{"Binated_Thread_Code": "B-1338","Thread_Discription": "Nutmeg","PMS_Code": "872C","RGB_Code": "rgb(171, 143, 106)"},'+
     '{"Binated_Thread_Code": "B-1339","Thread_Discription": "Spanish Moss","PMS_Code": "7535C","RGB_Code": "rgb(166, 164, 148)"},'+
     '{"Binated_Thread_Code": "B-1342","Thread_Discription": "Fawn","PMS_Code": "7514C","RGB_Code": "rgb(191, 153, 136)"},'+
     '{"Binated_Thread_Code": "B-1343","Thread_Discription": "Grape Juice","PMS_Code": "2755C","RGB_Code": "rgb(54, 57, 99)"},'+
     '{"Binated_Thread_Code": "B-1344","Thread_Discription": "Camel","PMS_Code": "10356C","RGB_Code": "rgb(144, 114, 86)"},'+
     '{"Binated_Thread_Code": "B-1348","Thread_Discription": "Antique Bronze","PMS_Code": "872C","RGB_Code": "rgb(122, 95, 62)"},'+
     '{"Binated_Thread_Code": "B-1349","Thread_Discription": "Palomino","PMS_Code": "127C","RGB_Code": "rgb(238, 206, 135)"},'+
     '{"Binated_Thread_Code": "B-1350","Thread_Discription": "Citrus Green","PMS_Code": "10109C","RGB_Code": "rgb(180, 162, 68)"},'+
     '{"Binated_Thread_Code": "B-1351","Thread_Discription": "Alligator","PMS_Code": "3298C","RGB_Code": "rgb(23, 91, 75)"},'+
     '{"Binated_Thread_Code": "B-1352","Thread_Discription": "Old Gold","PMS_Code": "7753C","RGB_Code": "rgb(183, 139, 45)"},'+
     '{"Binated_Thread_Code": "B-1353","Thread_Discription": "Blue Spruce","PMS_Code": "646C","RGB_Code": "rgb(81, 109, 129)"},'+
     '{"Binated_Thread_Code": "B-1354","Thread_Discription": "Watermelon","PMS_Code": "191C","RGB_Code": "rgb(204, 77, 109)"},'+
     '{"Binated_Thread_Code": "B-1356","Thread_Discription": "Pink Pearl","PMS_Code": "&nbsp;685C","RGB_Code": "rgb(181, 153, 161)"},'+
     '{"Binated_Thread_Code": "B-1357","Thread_Discription": "Dark Seaweed","PMS_Code": "7498C","RGB_Code": "rgb(73, 71, 53)"},'+
     '{"Binated_Thread_Code": "B-1358","Thread_Discription": "Cedar Bark","PMS_Code": "1817C","RGB_Code": "rgb(120, 79, 79)"},'+
     '{"Binated_Thread_Code": "B-1359","Thread_Discription": "Golden Nugget","PMS_Code": "7409C","RGB_Code": "rgb(204, 150, 44)"},'+
     '{"Binated_Thread_Code": "B-1360","Thread_Discription": "Dusty Blue","PMS_Code": "5415C","RGB_Code": "rgb(118, 145, 161)"},'+
     '{"Binated_Thread_Code": "B-1361","Thread_Discription": "Moody Gray","PMS_Code": "447C","RGB_Code": "rgb(95, 97, 95)"},'+
     '{"Binated_Thread_Code": "B-1362","Thread_Discription": "Slate Purple","PMS_Code": "2363C","RGB_Code": "rgb(83, 77, 96)"},'+
     '{"Binated_Thread_Code": "B-1363","Thread_Discription": "Steel Lavender","PMS_Code": "10251C","RGB_Code": "rgb(122, 129, 146)"},'+
     '{"Binated_Thread_Code": "B-1364","Thread_Discription": "Storm Sky Blue","PMS_Code": "2139C","RGB_Code": "rgb(73, 90, 110)"},'+
     '{"Binated_Thread_Code": "B-1365","Thread_Discription": "Dusty Plum","PMS_Code": "2111C","RGB_Code": "rgb(66, 74, 96)"},'+
     '{"Binated_Thread_Code": "B-1366","Thread_Discription": "Dark Purple Iris","PMS_Code": "2755C","RGB_Code": "rgb(43, 54, 107)"},'+
     '{"Binated_Thread_Code": "B-1367","Thread_Discription": "Black Pearl","PMS_Code": "533C","RGB_Code": "rgb(45, 48, 56)"},'+
     '{"Binated_Thread_Code": "B-1368","Thread_Discription": "Night Sky","PMS_Code": "533C","RGB_Code": "rgb(43, 56, 75)"},'+
     '{"Binated_Thread_Code": "B-1369","Thread_Discription": "Fresh Pine","PMS_Code": "7740C","RGB_Code": "rgb(60, 123, 63)"},'+
     '{"Binated_Thread_Code": "B-1370","Thread_Discription": "Fir","PMS_Code": "7484C","RGB_Code": "rgb(37, 80, 60)"},'+
     '{"Binated_Thread_Code": "B-1371","Thread_Discription": "Deep Sea","PMS_Code": "3292C","RGB_Code": "rgb(35, 85, 79)"},'+
     '{"Binated_Thread_Code": "B-1372","Thread_Discription": "Honey","PMS_Code": "1355C","RGB_Code": "rgb(240, 167, 85)"},'+
     '{"Binated_Thread_Code": "B-1374","Thread_Discription": "Maroon","PMS_Code": "1817C","RGB_Code": "rgb(97, 46, 50)"},'+
     '{"Binated_Thread_Code": "B-1375","Thread_Discription": "Work Shirt","PMS_Code": "7688C","RGB_Code": "rgb(64, 126, 159)"},'+
     '{"Binated_Thread_Code": "B-1376","Thread_Discription": "Space Blue","PMS_Code": "302C","RGB_Code": "rgb(36, 79, 104)"},'+
     '{"Binated_Thread_Code": "B-1377","Thread_Discription": "Kiwi","PMS_Code": "361C","RGB_Code": "rgb(113, 172, 107)"},'+
     '{"Binated_Thread_Code": "B-1378","Thread_Discription": "Paprika","PMS_Code": "2028C","RGB_Code": "rgb(221, 59, 39)"},'+
     '{"Binated_Thread_Code": "B-1379","Thread_Discription": "Mandarin","PMS_Code": "179C","RGB_Code": "rgb(225, 85, 68)"},'+
     '{"Binated_Thread_Code": "B-1380","Thread_Discription": "Oasis","PMS_Code": "2399C","RGB_Code": "rgb(0, 154, 135)"},'+
     '{"Binated_Thread_Code": "B-1381","Thread_Discription": "Ripe Raspberry","PMS_Code": "7420C","RGB_Code": "rgb(141, 41, 67)"},'+
     '{"Binated_Thread_Code": "B-1382","Thread_Discription": "Colonial Rose","PMS_Code": "7428C","RGB_Code": "rgb(101, 62, 72)"},'+
     '{"Binated_Thread_Code": "B-1383","Thread_Discription": "Pink Pansy","PMS_Code": "220C","RGB_Code": "rgb(157, 30, 85)"},'+
     '{"Binated_Thread_Code": "B-1384","Thread_Discription": "Merlot","PMS_Code": "7638C","RGB_Code": "rgb(112, 45, 57)"},'+
     '{"Binated_Thread_Code": "B-1385","Thread_Discription": "Garnet","PMS_Code": "209C","RGB_Code": "rgb(97, 38, 52)"},'+
     '{"Binated_Thread_Code": "B-1386","Thread_Discription": "Eggplant","PMS_Code": "7644C","RGB_Code": "rgb(77, 49, 61)"},'+
     '{"Binated_Thread_Code": "B-1387","Thread_Discription": "Berry Frost","PMS_Code": "667C","RGB_Code": "rgb(117, 105, 127)"},'+
     '{"Binated_Thread_Code": "B-1388","Thread_Discription": "Plum","PMS_Code": "7652C","RGB_Code": "rgb(93, 55, 82)"},'+
     '{"Binated_Thread_Code": "B-1389","Thread_Discription": "Bordeaux","PMS_Code": "7435C","RGB_Code": "rgb(117, 47, 75)"},'+
     '{"Binated_Thread_Code": "B-1390","Thread_Discription": "Forest Green","PMS_Code": "3305C","RGB_Code": "rgb(45, 70, 62)"},'+
     '{"Binated_Thread_Code": "B-1391","Thread_Discription": "Spruce Green","PMS_Code": "5545C","RGB_Code": "rgb(80, 108, 99)"},'+
     '{"Binated_Thread_Code": "B-1392","Thread_Discription": "Silver Sage","PMS_Code": "5626C","RGB_Code": "rgb(108, 123, 107)"},'+
     '{"Binated_Thread_Code": "B-1393","Thread_Discription": "Bass Green","PMS_Code": "5747C","RGB_Code": "rgb(66, 66, 55)"},'+
     '{"Binated_Thread_Code": "B-1394","Thread_Discription": "Kale","PMS_Code": "5743C","RGB_Code": "rgb(81, 85, 69)"},'+
     '{"Binated_Thread_Code": "B-1395","Thread_Discription": "Rosemary","PMS_Code": "5535C","RGB_Code": "rgb(62, 74, 64)"},'+
     '{"Binated_Thread_Code": "B-1396","Thread_Discription": "Dark Sage","PMS_Code": "5615C","RGB_Code": "rgb(82, 98, 81)"},'+
     '{"Binated_Thread_Code": "B-1397","Thread_Discription": "Evergreen","PMS_Code": "3305C","RGB_Code": "rgb(35, 70, 60)"},'+
     '{"Binated_Thread_Code": "B-1405","Thread_Discription": "Goose Gray","PMS_Code": "10102C","RGB_Code": "rgb(176, 179, 166)"},'+
     '{"Binated_Thread_Code": "B-1406","Thread_Discription": "Dark Camo Green","PMS_Code": "7764C","RGB_Code": "rgb(79, 79, 55)"},'+
     '{"Binated_Thread_Code": "B-1410","Thread_Discription": "Ivory","PMS_Code": "Cool Grey 1C","RGB_Code": "rgb(218, 219, 212)"},'+
     '{"Binated_Thread_Code": "B-1411","Thread_Discription": "Silver","PMS_Code": "429C","RGB_Code": "rgb(184, 192, 195)"},'+
     '{"Binated_Thread_Code": "B-1412","Thread_Discription": "Violet","PMS_Code": "268C","RGB_Code": "rgb(59, 46, 97)"},'+
     '{"Binated_Thread_Code": "B-1415","Thread_Discription": "Battleship","PMS_Code": "430C","RGB_Code": "rgb(104, 113, 112)"},'+
     '{"Binated_Thread_Code": "B-1421","Thread_Discription": "Basket Ball","PMS_Code": "7580C","RGB_Code": "rgb(166, 70, 36)"},'+
     '{"Binated_Thread_Code": "B-1422","Thread_Discription": "African Violet","PMS_Code": "268C","RGB_Code": "rgb(74, 53, 121)"},'+
     '{"Binated_Thread_Code": "B-1425","Thread_Discription": "Pumpkin Spice","PMS_Code": "2012C","RGB_Code": "rgb(201, 125, 41)"},'+
     '{"Binated_Thread_Code": "B-1428","Thread_Discription": "Rice","PMS_Code": "2324C","RGB_Code": "rgb(145, 133, 112)"},'+
     '{"Binated_Thread_Code": "B-1430","Thread_Discription": "Dusky Mauve","PMS_Code": "438C","RGB_Code": "rgb(65, 58, 57)"},'+
     '{"Binated_Thread_Code": "B-1431","Thread_Discription": "Bittersweet Chocolate","PMS_Code": "440C","RGB_Code": "rgb(43, 44, 43)"},'+
     '{"Binated_Thread_Code": "B-1437","Thread_Discription": "Summer Sun","PMS_Code": "2010C","RGB_Code": "rgb(250, 167, 27)"},'+
     '{"Binated_Thread_Code": "B-1445","Thread_Discription": "Cappuccino","PMS_Code": "497C","RGB_Code": "rgb(66, 46, 41)"},'+
     '{"Binated_Thread_Code": "B-1447","Thread_Discription": "Cinnamon Candy","PMS_Code": "199C","RGB_Code": "rgb(175, 35, 37)"},'+
     '{"Binated_Thread_Code": "B-1448","Thread_Discription": "Julep","PMS_Code": "2281C","RGB_Code": "rgb(202, 217, 134)"},'+
     '{"Binated_Thread_Code": "B-1451","Thread_Discription": "Celery","PMS_Code": "577C","RGB_Code": "rgb(139, 160, 92)"},'+
     '{"Binated_Thread_Code": "B-1460","Thread_Discription": "Ecru","PMS_Code": "&nbsp;7632C","RGB_Code": "rgb(206, 201, 192)"},'+
     '{"Binated_Thread_Code": "B-1461","Thread_Discription": "Iron Gray","PMS_Code": "444C","RGB_Code": "rgb(98, 112, 111)"},'+
     '{"Binated_Thread_Code": "B-1463","Thread_Discription": "Willow","PMS_Code": "7537C","RGB_Code": "rgb(135, 139, 128)"},'+
     '{"Binated_Thread_Code": "B-1469","Thread_Discription": "Granny Smith","PMS_Code": "376C","RGB_Code": "rgb(122, 159, 62)"},'+
     '{"Binated_Thread_Code": "B-1470","Thread_Discription": "Vegas Gold","PMS_Code": "7508C","RGB_Code": "rgb(213, 173, 105)"},'+
     '{"Binated_Thread_Code": "B-1476","Thread_Discription": "Independence Blue","PMS_Code": "7692C","RGB_Code": "rgb(0, 68, 102)"},'+
     '{"Binated_Thread_Code": "B-1477","Thread_Discription": "Salsa","PMS_Code": "2034C","RGB_Code": "rgb(188, 55, 39)"},'+
     '{"Binated_Thread_Code": "B-1478","Thread_Discription": "Orange Peel","PMS_Code": "2018C","RGB_Code": "rgb(242, 110, 36)"},'+
     '{"Binated_Thread_Code": "B-1479","Thread_Discription": "Emerald Isle","PMS_Code": "7732C","RGB_Code": "rgb(32, 106, 60)"},'+
     '{"Binated_Thread_Code": "B-1480","Thread_Discription": "Rain Forest","PMS_Code": "341C","RGB_Code": "rgb(0, 107, 72)"},'+
     '{"Binated_Thread_Code": "B-1484","Thread_Discription": "Rhubarb","PMS_Code": "206C","RGB_Code": "rgb(183, 32, 50)"},'+
     '{"Binated_Thread_Code": "B-1485","Thread_Discription": "Electric Red","PMS_Code": "185C","RGB_Code": "rgb(200, 37, 45)"},'+
     '{"Binated_Thread_Code": "B-1488","Thread_Discription": "Dark Magenta","PMS_Code": "7650C","RGB_Code": "rgb(96, 39, 79)"},'+
     '{"Binated_Thread_Code": "B-1489","Thread_Discription": "Clover","PMS_Code": "575C","RGB_Code": "rgb(84, 102, 46)"},'+
     '{"Binated_Thread_Code": "B-1491","Thread_Discription": "Brass","PMS_Code": "7509C","RGB_Code": "rgb(167, 120, 48)"},'+
     '{"Binated_Thread_Code": "B-1494","Thread_Discription": "Olive Green","PMS_Code": "7760C","RGB_Code": "rgb(124, 111, 55)"},'+
     '{"Binated_Thread_Code": "B-1495","Thread_Discription": "Safari","PMS_Code": "574C","RGB_Code": "rgb(76, 84, 44)"},'+
     '{"Binated_Thread_Code": "B-1497","Thread_Discription": "Peacock Blue","PMS_Code": "2192C","RGB_Code": "rgb(6, 128, 175)"},'+
     '{"Binated_Thread_Code": "B-1610","Thread_Discription": "Silver","PMS_Code": "5455C","RGB_Code": "rgb(183, 195, 197)"},'+
     '{"Binated_Thread_Code": "B-1613","Thread_Discription": "Gull Gray","PMS_Code": "443C","RGB_Code": "rgb(147, 158, 158)"},'+
     '{"Binated_Thread_Code": "B-1614","Thread_Discription": "Twister","PMS_Code": "425C","RGB_Code": "rgb(100, 104, 104)"},'+
     '{"Binated_Thread_Code": "B-1615","Thread_Discription": "Battleship","PMS_Code": "Cool Grey 10C","RGB_Code": "rgb(112, 118, 118)"},'+
     '{"Binated_Thread_Code": "B-1616","Thread_Discription": "Conch Shell","PMS_Code": "178C","RGB_Code": "rgb(225, 114, 117)"},'+
     '{"Binated_Thread_Code": "B-1617","Thread_Discription": "Slate Purple","PMS_Code": "7448C","RGB_Code": "rgb(91, 87, 97)"},'+
     '{"Binated_Thread_Code": "B-1618","Thread_Discription": "Gun Powder","PMS_Code": "2706C","RGB_Code": "rgb(114, 115, 126)"},'+
     '{"Binated_Thread_Code": "B-1620","Thread_Discription": "Light Salmon","PMS_Code": "177C","RGB_Code": "rgb(244, 140, 152)"},'+
     '{"Binated_Thread_Code": "B-1622","Thread_Discription": "Parchment","PMS_Code": "7401C","RGB_Code": "rgb(238, 223, 188)"},'+
     '{"Binated_Thread_Code": "B-1624","Thread_Discription": "Egg Yolk","PMS_Code": "130C","RGB_Code": "rgb(244, 168, 49)"},'+
     '{"Binated_Thread_Code": "B-1627","Thread_Discription": "Dusty Lilac","PMS_Code": "667C","RGB_Code": "rgb(122, 117, 139)"},'+
     '{"Binated_Thread_Code": "B-1628","Thread_Discription": "Worn Denim","PMS_Code": "292C","RGB_Code": "rgb(126, 168, 191)"},'+
     '{"Binated_Thread_Code": "B-1631","Thread_Discription": "Velvet Violet","PMS_Code": "2577C","RGB_Code": "rgb(142, 104, 157)"},'+
     '{"Binated_Thread_Code": "B-1633","Thread_Discription": "Purple Passion","PMS_Code": "2613C","RGB_Code": "rgb(94, 42, 101)"},'+
     '{"Binated_Thread_Code": "B-1638","Thread_Discription": "Barn Red","PMS_Code": "7427C","RGB_Code": "rgb(134, 46, 51)"},'+
     '{"Binated_Thread_Code": "B-1641","Thread_Discription": "Obsidian","PMS_Code": "432C","RGB_Code": "rgb(54, 58, 61)"},'+
     '{"Binated_Thread_Code": "B-1648","Thread_Discription": "Celery","PMS_Code": "576C","RGB_Code": "rgb(137, 155, 99)"},'+
     '{"Binated_Thread_Code": "B-1649","Thread_Discription": "Granny Smith","PMS_Code": "376C","RGB_Code": "rgb(116, 150, 61)"},'+
     '{"Binated_Thread_Code": "B-1652","Thread_Discription": "Mermaid","PMS_Code": "323C","RGB_Code": "rgb(61, 122, 123)"},'+
     '{"Binated_Thread_Code": "B-1657","Thread_Discription": "Golden Oak","PMS_Code": "731C","RGB_Code": "rgb(136, 92, 68)"},'+
     '{"Binated_Thread_Code": "B-1664","Thread_Discription": "Graphite","PMS_Code": "405C","RGB_Code": "rgb(98, 94, 87)"},'+
     '{"Binated_Thread_Code": "B-1668","Thread_Discription": "Silver Sage","PMS_Code": "5615C","RGB_Code": "rgb(100, 119, 107)"},'+
     '{"Binated_Thread_Code": "B-1669","Thread_Discription": "Rosemary","PMS_Code": "553C","RGB_Code": "rgb(65, 77, 67)"},'+
     '{"Binated_Thread_Code": "B-1677","Thread_Discription": "Mallard Teal","PMS_Code": "309C","RGB_Code": "rgb(3, 78, 82)"},'+
     '{"Binated_Thread_Code": "B-1681","Thread_Discription": "Azalea","PMS_Code": "1945C","RGB_Code": "rgb(189, 57, 86)"},'+
     '{"Binated_Thread_Code": "B-1684","Thread_Discription": "Wheat","PMS_Code": "466C","RGB_Code": "rgb(190, 162, 114)"},'+
     '{"Binated_Thread_Code": "B-1689","Thread_Discription": "Shark","PMS_Code": "425C","RGB_Code": "rgb(109, 111, 109)"},'+
     '{"Binated_Thread_Code": "B-1701","Thread_Discription": "Spring Green","PMS_Code": "361C","RGB_Code": "rgb(73, 159, 70)"},'+
     '{"Binated_Thread_Code": "B-1702","Thread_Discription": "Spearmint","PMS_Code": "7478C","RGB_Code": "rgb(105, 186, 133)"},'+
     '{"Binated_Thread_Code": "B-1704","Thread_Discription": "Evergreen","PMS_Code": "3302C","RGB_Code": "rgb(27, 75, 64)"},'+
     '{"Binated_Thread_Code": "B-1705","Thread_Discription": "Fresh Oregano","PMS_Code": "5605C","RGB_Code": "rgb(56, 61, 50)"},'+
     '{"Binated_Thread_Code": "B-1707","Thread_Discription": "Honeysuckle","PMS_Code": "187C","RGB_Code": "rgb(198, 75, 92)"},'+
     '{"Binated_Thread_Code": "B-1709","Thread_Discription": "Shocking Pink","PMS_Code": "240C","RGB_Code": "rgb(206, 58, 147)"},'+
     '{"Binated_Thread_Code": "B-1710","Thread_Discription": "Magenta","PMS_Code": "2415C","RGB_Code": "rgb(151, 49, 114)"},'+
     '{"Binated_Thread_Code": "B-1720","Thread_Discription": "Plum","PMS_Code": "511C","RGB_Code": "rgb(109, 57, 92)"},'+
     '{"Binated_Thread_Code": "B-1721","Thread_Discription": "Flamingo Pink","PMS_Code": "190C","RGB_Code": "rgb(235, 101, 146)"},'+
     '{"Binated_Thread_Code": "B-1722","Thread_Discription": "Royal Purple","PMS_Code": "2685C","RGB_Code": "rgb(68, 56, 124)"},'+
     '{"Binated_Thread_Code": "B-1726","Thread_Discription": "Light Brown Sugar","PMS_Code": "722C","RGB_Code": "rgb(180, 128, 90)"},'+
     '{"Binated_Thread_Code": "B-1728","Thread_Discription": "Bark","PMS_Code": "7504C","RGB_Code": "rgb(153, 129, 107)"},'+
     '{"Binated_Thread_Code": "B-1733","Thread_Discription": "Blue Jay","PMS_Code": "2143C","RGB_Code": "rgb(62, 124, 177)"},'+
     '{"Binated_Thread_Code": "B-1739","Thread_Discription": "Charcoal","PMS_Code": "425C","RGB_Code": "rgb(79, 75, 75)"},'+
     '{"Binated_Thread_Code": "B-1740","Thread_Discription": "Weimaraner","PMS_Code": "423C","RGB_Code": "rgb(123, 121, 126)"},'+
     '{"Binated_Thread_Code": "B-1751","Thread_Discription": "Emerald Isle","PMS_Code": "7482C","RGB_Code": "rgb(1, 125, 74)"},'+
     '{"Binated_Thread_Code": "B-1752","Thread_Discription": "Cantalope","PMS_Code": "1565C","RGB_Code": "rgb(249, 173, 136)"},'+
     '{"Binated_Thread_Code": "B-1755","Thread_Discription": "Marmalade","PMS_Code": "1375C","RGB_Code": "rgb(247, 144, 74)"},'+
     '{"Binated_Thread_Code": "B-1756","Thread_Discription": "Pea Green","PMS_Code": "378C","RGB_Code": "rgb(92, 91, 47)"},'+
     '{"Binated_Thread_Code": "B-1757","Thread_Discription": "Dark Olive","PMS_Code": "455C","RGB_Code": "rgb(99, 83, 48)"},'+
     '{"Binated_Thread_Code": "B-1758","Thread_Discription": "Grizzly Bear","PMS_Code": "731C","RGB_Code": "rgb(111, 75, 54)"},'+
     '{"Binated_Thread_Code": "B-1760","Thread_Discription": "Antique Blue","PMS_Code": "8202C","RGB_Code": "rgb(75, 113, 127)"},'+
     '{"Binated_Thread_Code": "B-1763","Thread_Discription": "Copper","PMS_Code": "144C","RGB_Code": "rgb(220, 123, 43)"},'+
     '{"Binated_Thread_Code": "B-1764","Thread_Discription": "Denim","PMS_Code": "534C","RGB_Code": "rgb(45, 73, 93)"},'+
     '{"Binated_Thread_Code": "B-1766","Thread_Discription": "Sailor Blue","PMS_Code": "2735C","RGB_Code": "rgb(54, 60, 127)"},'+
     '{"Binated_Thread_Code": "B-1773","Thread_Discription": "Autumn Gold","PMS_Code": "1385C","RGB_Code": "rgb(177, 103, 49)"},'+
     '{"Binated_Thread_Code": "B-1776","Thread_Discription": "Independence Blue","PMS_Code": "647C","RGB_Code": "rgb(30, 79, 104)"},'+
     '{"Binated_Thread_Code": "B-1777","Thread_Discription": "Bright Peach","PMS_Code": "170C","RGB_Code": "rgb(238, 135, 126)"},'+
     '{"Binated_Thread_Code": "B-1779","Thread_Discription": "Sweet Potato","PMS_Code": "179C","RGB_Code": "rgb(203, 83, 76)"},'+
     '{"Binated_Thread_Code": "B-1783","Thread_Discription": "Dark Raspberry","PMS_Code": "234C","RGB_Code": "rgb(134, 45, 89)"},'+
     '{"Binated_Thread_Code": "B-1787","Thread_Discription": "Fuchsia","PMS_Code": "215C","RGB_Code": "rgb(181, 52, 108)"},'+
     '{"Binated_Thread_Code": "B-1788","Thread_Discription": "Dark Magenta","PMS_Code": "512C","RGB_Code": "rgb(120, 51, 106)"},'+
     '{"Binated_Thread_Code": "B-1789","Thread_Discription": "Plum Drop","PMS_Code": "511C","RGB_Code": "rgb(101, 63, 89)"},'+
     '{"Binated_Thread_Code": "B-1794","Thread_Discription": "Field Gear","PMS_Code": "5815C","RGB_Code": "rgb(87, 78, 49)"},'+
     '{"Binated_Thread_Code": "B-1795","Thread_Discription": "Dark Camo Green","PMS_Code": "5743C","RGB_Code": "rgb(74, 72, 54)"},'+
     '{"Binated_Thread_Code": "B-1809","Thread_Discription": "Brushed Bronze","PMS_Code": "618C","RGB_Code": "rgb(182, 161, 84)"},'+
     '{"Binated_Thread_Code": "B-1816","Thread_Discription": "Rustic Pink","PMS_Code": "1767C","RGB_Code": "rgb(247, 173, 191)"},'+
     '{"Binated_Thread_Code": "B-1818","Thread_Discription": "Powder Pink","PMS_Code": "691C","RGB_Code": "rgb(228, 189, 185)"},'+
     '{"Binated_Thread_Code": "B-1819","Thread_Discription": "Blush Pink","PMS_Code": "169C","RGB_Code": "rgb(246, 158, 157)"},'+
     '{"Binated_Thread_Code": "B-1826","Thread_Discription": "Peach Pie","PMS_Code": "1355C","RGB_Code": "rgb(254, 199, 125)"},'+
     '{"Binated_Thread_Code": "B-1828","Thread_Discription": "Work Shirt","PMS_Code": "2915C","RGB_Code": "rgb(66, 140, 175)"},'+
     '{"Binated_Thread_Code": "B-1829","Thread_Discription": "Blue Bird","PMS_Code": "285C","RGB_Code": "rgb(2, 103, 162)"},'+
     '{"Binated_Thread_Code": "B-1830","Thread_Discription": "China Blue","PMS_Code": "7453C","RGB_Code": "rgb(101, 134, 188)"},'+
     '{"Binated_Thread_Code": "B-1831","Thread_Discription": "Purple Pansy","PMS_Code": "528C","RGB_Code": "rgb(155, 100, 156)"},'+
     '{"Binated_Thread_Code": "B-1832","Thread_Discription": "Majestic Purple","PMS_Code": "2665C","RGB_Code": "rgb(106, 86, 150)"},'+
     '{"Binated_Thread_Code": "B-1833","Thread_Discription": "Heliotrope","PMS_Code": "259C","RGB_Code": "rgb(120, 46, 116)"},'+
     '{"Binated_Thread_Code": "B-1837","Thread_Discription": "Fluorescent Red Orange","PMS_Code": "Hexa OrangeC","RGB_Code": "rgb(239, 68, 48)"},'+
     '{"Binated_Thread_Code": "B-1840","Thread_Discription": "Cadet Gray","PMS_Code": "7544C","RGB_Code": "rgb(117, 125, 136)"},'+
     '{"Binated_Thread_Code": "B-1841","Thread_Discription": "Pewter","PMS_Code": "7545C","RGB_Code": "rgb(80, 87, 93)"},'+
     '{"Binated_Thread_Code": "B-1845","Thread_Discription": "Mint","PMS_Code": "3375C","RGB_Code": "rgb(111, 195, 159)"},'+
     '{"Binated_Thread_Code": "B-1849","Thread_Discription": "Tropical Teal","PMS_Code": "3295C","RGB_Code": "rgb(35, 124, 105)"},'+
     '{"Binated_Thread_Code": "B-1850","Thread_Discription": "Fluorescent Green","PMS_Code": "802C","RGB_Code": "rgb(105, 189, 77)"},'+
     '{"Binated_Thread_Code": "B-1851","Thread_Discription": "Cadmium Green","PMS_Code": "3425C","RGB_Code": "rgb(0, 95, 57)"},'+
     '{"Binated_Thread_Code": "B-1852","Thread_Discription": "Cobalt","PMS_Code": "7468C","RGB_Code": "rgb(53, 125, 146)"},'+
     '{"Binated_Thread_Code": "B-1854","Thread_Discription": "Rain Barrel","PMS_Code": "8440C","RGB_Code": "rgb(156, 132, 128)"},'+
     '{"Binated_Thread_Code": "B-1855","Thread_Discription": "Coffee with Cream","PMS_Code": "874C","RGB_Code": "rgb(179, 147, 113)"},'+
     '{"Binated_Thread_Code": "B-1856","Thread_Discription": "Burnt Orange","PMS_Code": "1605C","RGB_Code": "rgb(159, 85, 57)"},'+
     '{"Binated_Thread_Code": "B-1858","Thread_Discription": "Chestnut","PMS_Code": "168C","RGB_Code": "rgb(102, 56, 49)"},'+
     '{"Binated_Thread_Code": "B-1859","Thread_Discription": "Dark Chocolate","PMS_Code": "412C","RGB_Code": "rgb(76, 64, 63)"},'+
     '{"Binated_Thread_Code": "B-1866","Thread_Discription": "Buff","PMS_Code": "938C","RGB_Code": "rgb(240, 221, 145)"},'+
     '{"Binated_Thread_Code": "B-1867","Thread_Discription": "Fluorescent Green","PMS_Code": 0,"RGB_Code": "rgb(226, 232, 130)"},'+
     '{"Binated_Thread_Code": "B-1868","Thread_Discription": "Bottle Green","PMS_Code": "3278C","RGB_Code": "rgb(2, 105, 83)"},'+
     '{"Binated_Thread_Code": "B-1870","Thread_Discription": "Orange Sorbet","PMS_Code": "149C","RGB_Code": "rgb(235, 167, 110)"},'+
     '{"Binated_Thread_Code": "B-1872","Thread_Discription": "Brunette","PMS_Code": "7519C","RGB_Code": "rgb(100, 82, 67)"},'+
     '{"Binated_Thread_Code": "B-1874","Thread_Discription": "Baby Blue","PMS_Code": "283C","RGB_Code": "rgb(144, 179, 216)"},'+
     '{"Binated_Thread_Code": "B-1878","Thread_Discription": "Tomato Red","PMS_Code": "485C","RGB_Code": "rgb(200, 48 ,43)"},'+
     '{"Binated_Thread_Code": "B-1879","Thread_Discription": "Oregon Green","PMS_Code": "3298C","RGB_Code": "rgb(0, 121, 102)"},'+
     '{"Binated_Thread_Code": "B-1883","Thread_Discription": "Fluorescent Yellow","PMS_Code": "803C","RGB_Code": "rgb(249, 237, 35)"},'+
     '{"Binated_Thread_Code": "B-1884","Thread_Discription": "Burly Wood","PMS_Code": "726C","RGB_Code": "rgb(198, 170, 142)"},'+
     '{"Binated_Thread_Code": "B-1886","Thread_Discription": "Light Steel","PMS_Code": "406C","RGB_Code": "rgb(191, 185, 186)"},'+
     '{"Binated_Thread_Code": "B-1893","Thread_Discription": "Sky Blue","PMS_Code": "637C","RGB_Code": "rgb(46, 173, 200)"},'+
     '{"Binated_Thread_Code": "B-1898","Thread_Discription": "Auburn","PMS_Code": "1675C","RGB_Code": "rgb(158, 76, 57)"},'+
     '{"Binated_Thread_Code": "B-1899","Thread_Discription": "Henna","PMS_Code": "174C","RGB_Code": "rgb(136, 60, 50)"},'+
     '{"Binated_Thread_Code": "B-1900","Thread_Discription": "Celadon","PMS_Code": "558C","RGB_Code": "rgb(155, 187, 156)"},'+
     '{"Binated_Thread_Code": "B-1902","Thread_Discription": "Hunter Green","PMS_Code": "3435C","RGB_Code": "rgb(46, 75, 56)"},'+
     '{"Binated_Thread_Code": "B-1907","Thread_Discription": "Fluorescent Pink","PMS_Code": "1785C","RGB_Code": "rgb(239, 66, 105)"},'+
     '{"Binated_Thread_Code": "B-1908","Thread_Discription": "Fluorescent Pink","PMS_Code": "1787C","RGB_Code": "rgb(239, 71, 106)"},'+
     '{"Binated_Thread_Code": "B-1910","Thread_Discription": "Electric Magenta","PMS_Code": "812C","RGB_Code": "rgb(218, 26, 93)"},'+
     '{"Binated_Thread_Code": "B-1915","Thread_Discription": "Bermuda Sand","PMS_Code": "176C","RGB_Code": "rgb(247, 174, 183)"},'+
     '{"Binated_Thread_Code": "B-1917","Thread_Discription": "Dusty Rose","PMS_Code": "493C","RGB_Code": "rgb(204, 116, 136)"},'+
     '{"Binated_Thread_Code": "B-1919","Thread_Discription": "English Rose","PMS_Code": "7434C","RGB_Code": "rgb(161, 86, 103)"},'+
     '{"Binated_Thread_Code": "B-1920","Thread_Discription": "Light Khaki","PMS_Code": "461C","RGB_Code": "rgb(206, 196, 137)"},'+
     '{"Binated_Thread_Code": "B-1927","Thread_Discription": "Shiny Penny","PMS_Code": "727C","RGB_Code": "rgb(220, 177, 147)"},'+
     '{"Binated_Thread_Code": "B-1929","Thread_Discription": "Brown Hare","PMS_Code": "7519C","RGB_Code": "rgb(106, 92, 84)"},'+
     '{"Binated_Thread_Code": "B-1930","Thread_Discription": "Bahamas Blue","PMS_Code": "2746C","RGB_Code": "rgb(74, 82, 145)"},'+
     '{"Binated_Thread_Code": "B-1932","Thread_Discription": "Summer Sky","PMS_Code": "2975C","RGB_Code": "rgb(126, 197, 220)"},'+
     '{"Binated_Thread_Code": "B-1935","Thread_Discription": "Fluorescent Yellow Green","PMS_Code": 0,"RGB_Code": "rgb(227, 228, 25)"},'+
     '{"Binated_Thread_Code": "B-1937","Thread_Discription": "Fluorescent Orange","PMS_Code": "804C","RGB_Code": "rgb(251, 170, 25)"},'+
     '{"Binated_Thread_Code": "B-1938","Thread_Discription": "Doe Skin","PMS_Code": "8003C","RGB_Code": "rgb(186, 170, 154)"},'+
     '{"Binated_Thread_Code": "B-1940","Thread_Discription": "Key Lime","PMS_Code": "389C","RGB_Code": "rgb(204, 203, 76)"},'+
     '{"Binated_Thread_Code": "B-1941","Thread_Discription": "Mauve","PMS_Code": "5005C","RGB_Code": "rgb(188, 139, 143)"},'+
     '{"Binated_Thread_Code": "B-1942","Thread_Discription": "Rose Gold","PMS_Code": "499C","RGB_Code": "rgb(143, 87, 84)"},'+
     '{"Binated_Thread_Code": "B-1945","Thread_Discription": "Sienna","PMS_Code": "477C","RGB_Code": "rgb(115, 80, 71)"},'+
     '{"Binated_Thread_Code": "B-1946","Thread_Discription": "Fluorescent Orange","PMS_Code": "811C","RGB_Code": "rgb(242, 99, 34)"},'+
     '{"Binated_Thread_Code": "B-1947","Thread_Discription": "Fluorescent Orange Pink","PMS_Code": 0,"RGB_Code": "rgb(240, 78, 73)"},'+
     '{"Binated_Thread_Code": "B-1952","Thread_Discription": "Melon Burst","PMS_Code": "1635C","RGB_Code": "rgb(244, 123, 99)"},'+
     '{"Binated_Thread_Code": "B-1956","Thread_Discription": "Olive Green","PMS_Code": "105C","RGB_Code": "rgb(140, 128, 86)"},'+
     '{"Binated_Thread_Code": "B-1957","Thread_Discription": "Burnt Taupe","PMS_Code": "7533C","RGB_Code": "rgb(75, 65, 51)"},'+
     '{"Binated_Thread_Code": "B-1960","Thread_Discription": "Dusty Blue","PMS_Code": "5425C","RGB_Code": "rgb(115, 140, 158)"},'+
     '{"Binated_Thread_Code": "B-1961","Thread_Discription": "Blue Spruce","PMS_Code": "5405C","RGB_Code": "rgb(80, 110, 132)"},'+
     '{"Binated_Thread_Code": "B-1962","Thread_Discription": "Admiral Blue","PMS_Code": "548C","RGB_Code": "rgb(38, 69, 83)"},'+
     '{"Binated_Thread_Code": "B-1964","Thread_Discription": "Stormy Sky Blue","PMS_Code": "5405C","RGB_Code": "rgb(73, 91, 114)"},'+
     '{"Binated_Thread_Code": "B-1969","Thread_Discription": "Army Green","PMS_Code": "5743C","RGB_Code": "rgb(108, 109, 89)"},'+
     '{"Binated_Thread_Code": "B-1970","Thread_Discription": "Emerald Ink","PMS_Code": "555C","RGB_Code": "rgb(53, 93, 63)"},'+
     '{"Binated_Thread_Code": "B-1971","Thread_Discription": "Saffron","PMS_Code": "7408C","RGB_Code": "rgb(248, 179, 32)"},'+
     '{"Binated_Thread_Code": "B-1972","Thread_Discription": "Fluorescent Yellow Orange","PMS_Code": "1235C","RGB_Code": "rgb(254, 187, 18)"},'+
     '{"Binated_Thread_Code": "B-1973","Thread_Discription": "Bronze","PMS_Code": "154C","RGB_Code": "rgb(148, 94, 53)"},'+
     '{"Binated_Thread_Code": "B-1980","Thread_Discription": "Sunflower","PMS_Code": "115C","RGB_Code": "rgb(250, 193, 28)"},'+
     '{"Binated_Thread_Code": "B-1985","Thread_Discription": "Deep Rain Forest","PMS_Code": "3292C","RGB_Code": "rgb(1, 92, 80)"},'+
     '{"Binated_Thread_Code": "B-1988","Thread_Discription": "Kelly Green","PMS_Code": "356C","RGB_Code": "rgb(7, 140, 69)"},'+
     '{"Binated_Thread_Code": "B-1990","Thread_Discription": "Pink Rose","PMS_Code": "212C","RGB_Code": "rgb(216, 96, 150)"},'+
     '{"Binated_Thread_Code": "B-1991","Thread_Discription": "Malachite","PMS_Code": "3145C","RGB_Code": "rgb(7, 115, 121)"},'+
     '{"Binated_Thread_Code": "B-1992","Thread_Discription": "Rough Caribbean Sea","PMS_Code": "308C","RGB_Code": "rgb(7, 96, 119)"},'+
     '{"Binated_Thread_Code": "B-1993","Thread_Discription": "Watermelon","PMS_Code": "1925C","RGB_Code": "rgb(215, 51, 93)"},'+
     '{"Binated_Thread_Code": "B-1994","Thread_Discription": "Lipstick Rose","PMS_Code": "184C","RGB_Code": "rgb(235, 78, 113)"},'+
     '{"Binated_Thread_Code": "B-1995","Thread_Discription": "Fluorescent Yellow","PMS_Code": 0,"RGB_Code": "rgb(246, 235, 22)"},'+
     '{"Binated_Thread_Code": "B-1996","Thread_Discription": "Deep Emerald","PMS_Code": "560C","RGB_Code": "rgb(43, 67, 65)"},'+
     '{"Binated_Thread_Code": "B-1998","Thread_Discription": "Dark Mauve","PMS_Code": "8061C","RGB_Code": "rgb(127, 97, 101)"},'+
     '{"Binated_Thread_Code": "B-1999","Thread_Discription": "Raisin","PMS_Code": "1817C","RGB_Code": "rgb(103, 50, 50)"},'+
     '{"Binated_Thread_Code": "B-1986","Thread_Discription": "Ripe Raspberry","PMS_Code": "207C","RGB_Code": "rgb(172, 35, 70)"},'+
     '{"Binated_Thread_Code": "B-1682","Thread_Discription": "Tusk","PMS_Code": "9183C","RGB_Code": "rgb(205, 191, 172)"}]}';
 
 // on mousemove you get the current color
 canvas.addEventListener("click", function(e) {
   var m = oMousePos(canvas, e);
   var i = (m.x + m.y * cw) * 4;
   var R = pixels[i];
   var G = pixels[i + 1];
   var B = pixels[i + 2];
   thisRGBRy = [R, G, B];
   console.log(thisRGBRy);
   thisRGB = thisRGBRy;
   viewColor.style.backgroundColor = thisRGB;
   viewColor.style.color = getFontColor(thisRGBRy);
   //viewColor.innerHTML =  thisRGB;
   let rgbValue = "rgb(" + thisRGBRy + ")";
 
   const obj1=JSON.parse(text1);
   const obj2=JSON.parse(text2);
   const obj3=JSON.parse(text3);
   const obj4=JSON.parse(text4);
   const obj5=JSON.parse(text5);
   const obj6=JSON.parse(text6);
   if(tenant_id==16){
     let res=[];
      for(let i=0; i<300;i++){
        var rgb = obj1.data1[i].Cust_RGB_Code;
        rgb = rgb.replace(/[^\d,]/g, '').split(',');
        var k=0;
        var rgb1 = rgbValue;
        rgb1 = rgb1.replace(/[^\d,]/g, '').split(',');
        res[i]=Math.sqrt(Math.pow((rgb[k] - rgb1[k]),2) + Math.pow((rgb[k+1] - rgb1[k+1]),2) + Math.pow((rgb[k+2] - rgb1[k+2]),2));
        var minValue = Math.min(...res);
      let last=res.indexOf(minValue);
     // alert(obj1.data1[last].Cust_Thread_Code);
     //pickedColorRef.style.backgroundColor = hexValue
     //pickedColorRef1.style.backgroundColor = obj1.data1[last].Cust_RGB_Code
      //console.log(obj1.data1[last].RGB_Code);
      let eb=document.getElementById("input").value="Selected Color";
      input1.style.backgroundColor = rgbValue;
      input3.style.backgroundColor = obj1.data1[last].Cust_RGB_Code;
      let abc= document.getElementById("input2").value=obj1.data1[last].Cust_Thread_Code+"-"+obj1.data1[last].Cust_Thread_Discription;
      //document.getElementById("picked-color-ref").innerHTML="Input Color"; 
      } 
    }
   if(tenant_id==444||tenant_id==22||tenant_id==447)
    {
      let res1=[];
      for(let i=1; i<551;i++){
        var rgb = obj2.data2[i].Cust_RGB_Code;
        rgb = rgb.replace(/[^\d,]/g, '').split(',');
        var k=0;
        var rgb1 = rgbValue;
        rgb1 = rgb1.replace(/[^\d,]/g, '').split(',');
        res1[i]=Math.sqrt(Math.pow((rgb[k] - rgb1[k]),2) + Math.pow((rgb[k+1] - rgb1[k+1]),2) + Math.pow((rgb[k+2] - rgb1[k+2]),2));
       var minValue = Math.min(...res1);
      let last=res1.indexOf(minValue);
      //console.log(obj2.data2[last].RGB_Code);
      let eb=document.getElementById("input").value="Selected Color";
      input1.style.backgroundColor = rgbValue;
      input3.style.backgroundColor = obj1.data1[last].Cust_RGB_Code;
      let abc= document.getElementById("input2").value=obj1.data1[last].Cust_Thread_Code+"-"+obj1.data1[last].Cust_Thread_Discription;
     // pickedColorRef.style.backgroundColor = hexValue
     // pickedColorRef1.style.backgroundColor = obj2.data2[last].Cust_RGB_Code
     // document.getElementById("picked-color-ref").innerHTML="Input Color";
     // document.getElementById("picked-color-ref1").innerHTML=obj2.data2[last].Cust_Thread_Code+"-"+obj2.data2[last].Cust_Thread_Discription;
      }
    }
     if(tenant_id==59)
    {
      let res2=[];
      for(let i=0; i<551;i++){
        var rgb = obj3.data3[i].Cust_RGB_Code;
        rgb = rgb.replace(/[^\d,]/g, '').split(',');
        var k=0
        var rgb1 = rgbValue;
        rgb1 = rgb1.replace(/[^\d,]/g, '').split(',');
        res2[i]=Math.sqrt(Math.pow((rgb[k] - rgb1[k]),2) + Math.pow((rgb[k+1] - rgb1[k+1]),2) + Math.pow((rgb[k+2] - rgb1[k+2]),2));
       var minValue = Math.min(...res2);
      let last=res2.indexOf(minValue);
     // console.log(obj3.data3[last].RGB_Code);
      let eb=document.getElementById("input").value="Selected Color";
      input1.style.backgroundColor = rgbValue
      input3.style.backgroundColor = obj1.data1[last].Cust_RGB_Code
      let abc= document.getElementById("input2").value=obj1.data1[last].Cust_Thread_Code+"-"+obj1.data1[last].Cust_Thread_Discription;
     // pickedColorRef.style.backgroundColor = hexValue
     // pickedColorRef1.style.backgroundColor = obj3.data3[last].Cust_RGB_Code
     // document.getElementById("picked-color-ref").innerHTML="Input Color";
     // document.getElementById("picked-color-ref1").innerHTML=obj3.data3[last].Cust_Thread_Code+"-"+obj3.data3[last].Cust_Thread_Discription;
      } 
    }
    if(tenant_id==9)
    {
      let res3=[];
      for(let i=0; i<551;i++){
        var rgb = obj4.data4[i].Cust_RGB_Code;
        rgb = rgb.replace(/[^\d,]/g, '').split(',');
        var k=0
        var rgb1 = rgbValue;
        rgb1 = rgb1.replace(/[^\d,]/g, '').split(',');
        res3[i]=Math.sqrt(Math.pow((rgb[k] - rgb1[k]),2) + Math.pow((rgb[k+1] - rgb1[k+1]),2) + Math.pow((rgb[k+2] - rgb1[k+2]),2));
       var minValue = Math.min(...res3);
      let last=res3.indexOf(minValue);
      //console.log(obj4.data4[last].RGB_Code);
      let eb=document.getElementById("input").value="Selected Color";
      input1.style.backgroundColor = rgbValue
      input3.style.backgroundColor = obj1.data1[last].Cust_RGB_Code
      let abc= document.getElementById("input2").value=obj1.data1[last].Cust_Thread_Code+"-"+obj1.data1[last].Cust_Thread_Discription;
     // pickedColorRef.style.backgroundColor = hexValue
     // pickedColorRef1.style.backgroundColor = obj4.data4[last].Cust_RGB_Code
     // document.getElementById("picked-color-ref").innerHTML="Input Color";
     // document.getElementById("picked-color-ref1").innerHTML=obj4.data4[last].Cust_Thread_Code+"-"+obj4.data4[last].Cust_Thread_Discription;  
    }
  }
   if(tenant_id==2)
    {
      let res4=[];
      for(let i=0; i<551;i++){
        var rgb = obj5.data5[i].Cust_RGB_Code;
        rgb = rgb.replace(/[^\d,]/g, '').split(',');
        var k=0
        var rgb1 = rgbValue;
        rgb1 = rgb1.replace(/[^\d,]/g, '').split(',');
        res4[i]=Math.sqrt(Math.pow((rgb[k] - rgb1[k]),2) + Math.pow((rgb[k+1] - rgb1[k+1]),2) + Math.pow((rgb[k+2] - rgb1[k+2]),2));
       var minValue = Math.min(...res4);
      let last=res4.indexOf(minValue);
      //console.log(obj5.data5[last].RGB_Code);
      let eb=document.getElementById("input").value="Selected Color";
      input1.style.backgroundColor = rgbValue
      input3.style.backgroundColor = obj1.data1[last].Cust_RGB_Code
      let abc= document.getElementById("input2").value=obj1.data1[last].Cust_Thread_Code+"-"+obj1.data1[last].Cust_Thread_Discription;
     // pickedColorRef.style.backgroundColor = hexValue
     // pickedColorRef1.style.backgroundColor = obj5.data5[last].Cust_RGB_Code
      //document.getElementById("picked-color-ref").innerHTML="Input Color";
     // document.getElementById("picked-color-ref1").innerHTML=obj5.data5[last].Cust_Thread_Code+"-"+obj5.data5[last].Cust_Thread_Discription;
      } 
    }
   if(tenant_id==61){
      let res5=[];
       for(let i=0; i<551;i++){
         var rgb = obj6.data6[i].Cust_RGB_Code;
         rgb = rgb.replace(/[^\d,]/g, '').split(',');
         var k=0
         var rgb1 = rgbValue;
         rgb1 = rgb1.replace(/[^\d,]/g, '').split(',');
         res5[i]=Math.sqrt(Math.pow((rgb[k] - rgb1[k]),2) + Math.pow((rgb[k+1] - rgb1[k+1]),2) + Math.pow((rgb[k+2] - rgb1[k+2]),2));
        var minValue = Math.min(...res5);
       let last=res5.indexOf(minValue);
      // console.log(obj6.data6[last].RGB_Code);
       let eb=document.getElementById("input").value="Selected Color";
      input1.style.backgroundColor = rgbValue
      input3.style.backgroundColor = obj1.data1[last].Cust_RGB_Code
      let abc= document.getElementById("input2").value=obj1.data1[last].Cust_Thread_Code+"-"+obj1.data1[last].Cust_Thread_Discription;
       //pickedColorRef.style.backgroundColor = hexValue
      // pickedColorRef1.style.backgroundColor = obj6.data6[last].Cust_RGB_Code
      // document.getElementById("picked-color-ref").innerHTML="Input Color";
      //document.getElementById("picked-color-ref1").innerHTML=obj6.data6[last].Cust_Thread_Code+"-"+obj6.data6[last].Cust_Thread_Discription;
       } 
     } 
     else{
      
     }
     
 
 
 }, false);
 
 // You may drag and drop a new image of your choice.
 theBody.addEventListener("dragenter", dragenter, false);
 theBody.addEventListener("dragover", dragover, false);
 theBody.addEventListener("drop", drop, false);
 
 function dragenter(e) {
   e.stopPropagation();
   e.preventDefault();
 }
 
 function dragover(e) {
   e.stopPropagation();
   e.preventDefault();
 }
 
 function drop(e) {
   e.stopPropagation();
   e.preventDefault();
 
   var datos = e.dataTransfer;
   var theFiles = datos.files;
 
   handleFiles(theFiles);
 }
 
 function handleFiles(theFiles) {
   for (var i = 0; i < theFiles.length; i++) {
     var _file = theFiles[i];
     var isImg = /^image\//;
 
     if (!isImg.test(_file.type)) {
       continue;
     }
 
     var img = new Image();
     img.src = window.URL.createObjectURL(_file);
     img.onload = function() {
       var w = imgW;
       var h = imgW * img.height / img.width;
       
       
       // clear canvas & swatches
       ctx.clearRect(0, 0, cw, ch);
       clearSwatches(palette);
       colorsRy.length = 0;
       console.clear();
       
       // resize the canvas
       ch = canvas.height = h,
         cy = ch / 2;
       
       // draw new image
       ctx.drawImage(this, 0, 0, w, h);
       imgData = ctx.getImageData(0, 0, cw, ch);
       pixels = imgData.data;
     }
   }
 }
 
 // END drag and drop new image
 
 
 
 function Swatch(RGBry, parent) {
   this.element = document.createElement("div");
 
   //this.rgb = display_rgb(RGBry);
   //this.hex = display_hex(rgb2hex(RGBry));
   //this.hsl = display_hsl(rgb2hsl(RGBry));
   
   this.att = {}
   this.att.class = "swatch";
   this.att.style = "background-color:" + this.rgb 
   for (var name in this.att) {
     if (this.att.hasOwnProperty(name)) {
       this.element.setAttribute(name, this.att[name]);
     }
   }
 //  this.element.innerHTML = this.hex + "<br>" + this.rgb + "<br>" + this.hsl;
   parent.appendChild(this.element)
 }
 
 canvas.addEventListener("click", function(e) {
   // add swatch on click
   var swatch = new Swatch(thisRGBRy, palette);
   colorsRy.push(swatch);
   // get the colors string
   var colorsStr = getColorsStr(colorsRy);
   //console.clear();
   //console.log(colorsStr);
 
 }, false);
 
 palette.addEventListener("dblclick", function(e) {
   // remove swatch on dblclick
   if (e.target.className == "swatch") {
     for (var i = 0; i < colorsRy.length; i++) {
       if (colorsRy[i].element == e.target) {
         colorsRy.splice(i, 1);
         palette.removeChild(e.target);
         break;
       }
     }
   }
 
   var colorsStr = getColorsStr(colorsRy);
   console.clear();
   //console.log(colorsStr);
 
 }, false);
 
 function clearSwatches(parent) {
   while (parent.firstChild) {
     parent.removeChild(parent.firstChild);
   }
 }
 
 function getColorsStr(colorsRy) {
   var colorsStr = ''
   for (var i = 0; i < colorsRy.length; i++) {
     colorsStr += '['+colorsRy[i].hex + ','+ colorsRy[i].rgb + ','+ colorsRy[i].hsl+']';
     if(i < colorsRy.length-1){colorsStr += ',\n';};
   }
   return colorsStr;
 }
 
 function oMousePos(canvas, evt) {
   var ClientRect = canvas.getBoundingClientRect();
   return { //objeto
     x: Math.round(evt.clientX - ClientRect.left),
     y: Math.round(evt.clientY - ClientRect.top)
   }
 }