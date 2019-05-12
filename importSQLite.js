var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./gestion.sqlite3');


let productos = [{
        "id_producto": "1",
        "barcode": "6933237801789",
        "descripcion": "BATERIAS AAA",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/15b798ff8e6a2686a1b5d80f546eec97.jpg"
    },
    {
        "id_producto": "2",
        "barcode": "7404005960780",
        "descripcion": "LAMPARA RECARGABLE SUSAN 4 LED SULI004",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/0b2b55df43c1fd04f70965a99321254b.jpg"
    },
    {
        "id_producto": "3",
        "barcode": "6932512159713",
        "descripcion": "LAMPARA DE FRENTE JINLIDA 1597",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/a026d517821cd8530602cf479a3ba706.jpg"
    },
    {
        "id_producto": "4",
        "barcode": "6485741785975",
        "descripcion": "LAMPARA DE MANO VARIOS FOCOS JA-1958",
        "porcentaje_utilidad1": "29.87",
        "imagen": "img\/productos\/78244442260132b40f5deea9230dadb1.jpg"
    },
    {
        "id_producto": "5",
        "barcode": "6485741719505",
        "descripcion": "LAMPARA DE MANO SOLAR DOS CANDELAS JA-1950",
        "porcentaje_utilidad1": "29",
        "imagen": ""
    },
    {
        "id_producto": "8",
        "barcode": "6201520152048",
        "descripcion": "RADIO CHALLENGER CH-988\/CH-244",
        "porcentaje_utilidad1": "10.2",
        "imagen": "img\/productos\/a5f30fa69c4252c6de337a9aa7e7f891.jpg"
    },
    {
        "id_producto": "10",
        "barcode": "2013042702106",
        "descripcion": "RADIO CHALLENGER CON MEMORIA CH-10RU",
        "porcentaje_utilidad1": "16.67",
        "imagen": "img\/productos\/bb08bfa0055b23c6820d2e7f542a455b.jpg"
    },
    {
        "id_producto": "11",
        "barcode": "6920170000010",
        "descripcion": "CARGADOR UNIVERSAL SIN PANTALLA S-WQ-01-001",
        "porcentaje_utilidad1": "78",
        "imagen": "img\/productos\/6789314adfe160e8dbbce55cde177a0c.jpg"
    },
    {
        "id_producto": "12",
        "barcode": "8601011010037",
        "descripcion": "CARGADOR UNIVERSAL CON PANTALLA S-WQ-01-003",
        "porcentaje_utilidad1": "66.67",
        "imagen": "img\/productos\/8ecfb49df9f0451b4302fb570159ed62.png"
    },
    {
        "id_producto": "13",
        "barcode": "861833701021",
        "descripcion": "LASER LAPIZ RECARGAGLE",
        "porcentaje_utilidad1": "26.48",
        "imagen": "img\/productos\/4431139979f059378cd66c6ace86b030.jpg"
    },
    {
        "id_producto": "14",
        "barcode": "8618113011404",
        "descripcion": "POWER BANK 3600 mAh S-TY-01-140",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/bcef595a95b6203e6d4ca334298b2026.jpg"
    },
    {
        "id_producto": "15",
        "barcode": "5180121250364",
        "descripcion": "EXTENSION ELECTRICA 25FT 115036-25",
        "porcentaje_utilidad1": "40.05",
        "imagen": "img\/productos\/32933aad96bf4184cd114642bcc24a49.jpg"
    },
    {
        "id_producto": "16",
        "barcode": "5180151150184",
        "descripcion": "EXTENSION ELECTRICA 18FT 115036-18",
        "porcentaje_utilidad1": "31.58",
        "imagen": "img\/productos\/cfda25eb038e731ad2d9b18020d7a858.jpg"
    },
    {
        "id_producto": "17",
        "barcode": "2332566589346",
        "descripcion": "EXTENSION ELECTRICA 6FT APOLO APEA02",
        "porcentaje_utilidad1": "63.63",
        "imagen": "img\/productos\/d8f483bf37e12cb9d3327dd080e70d7e.jpg"
    },
    {
        "id_producto": "19",
        "barcode": "7506086600194",
        "descripcion": "REGLETA EXITOSO",
        "porcentaje_utilidad1": "32.14",
        "imagen": ""
    },
    {
        "id_producto": "20",
        "barcode": "7501892884707",
        "descripcion": "EXTENSION ELECTRICA ROTTER 6M NARANJA RO2724",
        "porcentaje_utilidad1": "28.2",
        "imagen": ""
    },
    {
        "id_producto": "21",
        "barcode": "7453038488105",
        "descripcion": "EXTENSION ELECTRICA TROEN 8M NARANJA",
        "porcentaje_utilidad1": "45.45",
        "imagen": "img\/productos\/d52930fc4c390c03b4d11cff35cd7f7c.jpg"
    },
    {
        "id_producto": "23",
        "barcode": "7501892884738",
        "descripcion": "EXTENSION ELECTRICA FULGORE 15M NARANJA",
        "porcentaje_utilidad1": "3.23",
        "imagen": ""
    },
    {
        "id_producto": "24",
        "barcode": "6943360900211",
        "descripcion": "LAMPARA RECARGABLE LH-404",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/ed96d8179ed7589128eea26158ca5b59.jpg"
    },
    {
        "id_producto": "25",
        "barcode": "6942205288989",
        "descripcion": "LAMPARA REGARGABLE PUNTA DE CRISTAL YJ-0929",
        "porcentaje_utilidad1": "30.4",
        "imagen": "img\/productos\/d6f38009f2b5d8b96be225135bf21a3e.jpg"
    },
    {
        "id_producto": "27",
        "barcode": "6941507400778",
        "descripcion": "LAMPARA RECARGABLE XY-838",
        "porcentaje_utilidad1": "30.4",
        "imagen": "img\/productos\/ba1f455f35a1cb6f42e9ab183068dbeb.jpg"
    },
    {
        "id_producto": "28",
        "barcode": "6942206870268",
        "descripcion": "LAMPARA RECARGABLE BLANCA SY-3726",
        "porcentaje_utilidad1": "38.89",
        "imagen": "img\/productos\/915dff8a0329b1f44ba45c988ef8ff52.jpg"
    },
    {
        "id_producto": "30",
        "barcode": "867408101139",
        "descripcion": "LAMPARA PACHITA RECARGABLE SS-919",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/a7b43970901d536d642d3a5dda187077.jpg"
    },
    {
        "id_producto": "31",
        "barcode": "6922550689891",
        "descripcion": "LAMPARA RECARGABLE TRIANGULO AB-K03",
        "porcentaje_utilidad1": "30",
        "imagen": "img\/productos\/4ec2026d1d9c02c29f7bc989f5b68dd7.jpg"
    },
    {
        "id_producto": "33",
        "barcode": "6944031229242",
        "descripcion": "LAMPARA RECARGABLE SS-853",
        "porcentaje_utilidad1": "30.4",
        "imagen": "img\/productos\/19f8e84540b94cb4e835328c2259a57a.jpg"
    },
    {
        "id_producto": "34",
        "barcode": "6952571851458",
        "descripcion": "LAMPARA RECARGABLE 9001-B",
        "porcentaje_utilidad1": "30.43",
        "imagen": "img\/productos\/93e2ab58b0bf3d052a129c48b2713ee0.jpg"
    },
    {
        "id_producto": "35",
        "barcode": "7404005960766",
        "descripcion": "LAMPARA RECARGABLE SUSAN GRANDE SULI002",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/669f19f07f5af1a0a67e65ca35dbc4d2.jpg"
    },
    {
        "id_producto": "38",
        "barcode": "7404005960414",
        "descripcion": "FOCO LED APOLO 7W APB0002B \/BLISTER\/",
        "porcentaje_utilidad1": "23.45",
        "imagen": "img\/productos\/d4bc767f1700495dc955fbd919974eec.jpg"
    },
    {
        "id_producto": "39",
        "barcode": "7404005960421",
        "descripcion": "FOCO LED APOLO 9W APBO003B \/BLISTER\/",
        "porcentaje_utilidad1": "22.22",
        "imagen": "img\/productos\/9bf01d894d1613868e11312984517c67.jpg"
    },
    {
        "id_producto": "40",
        "barcode": "7501206670019",
        "descripcion": "FOCO APOLO 25W APAH001B",
        "porcentaje_utilidad1": "41",
        "imagen": "img\/productos\/5fe77ac5224785e2f984902c926af517.jpg"
    },
    {
        "id_producto": "41",
        "barcode": "7404005960292",
        "descripcion": "FOCO SUSAN 65W SUAH003B",
        "porcentaje_utilidad1": "25",
        "imagen": ""
    },
    {
        "id_producto": "42",
        "barcode": "7404005960544",
        "descripcion": "FOCO SUSAN 85W SUAH009 ROSCA NORMAL",
        "porcentaje_utilidad1": "34.6",
        "imagen": "img\/productos\/0b2b55df43c1fd04f70965a99321254b.jpg"
    },
    {
        "id_producto": "44",
        "barcode": "7404005960322",
        "descripcion": "FOCO APOLO 65W APAH-003",
        "porcentaje_utilidad1": "34.61",
        "imagen": "img\/productos\/01e947e03915fac2852eb02eed82f3d2.jpg"
    },
    {
        "id_producto": "45",
        "barcode": "7404005960704",
        "descripcion": "FOCO APOLO 45W APAH-004",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/1a60cfd228eb70fac4eafebab487d00c.jpg"
    },
    {
        "id_producto": "46",
        "barcode": "7404005960278",
        "descripcion": "FOCO SUSAN 25W SUAH001",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/6e36bd2352a08471709b69cf80e557a8.jpg"
    },
    {
        "id_producto": "47",
        "barcode": "7404005960520",
        "descripcion": "FOCO SUSAN 28W SUAH007",
        "porcentaje_utilidad1": "26.5",
        "imagen": "img\/productos\/de753b77b4b503efae6a89b02fea851f.jpg"
    },
    {
        "id_producto": "48",
        "barcode": "7404005960094",
        "descripcion": "FOCO CHIYODA 25W",
        "porcentaje_utilidad1": "9.09",
        "imagen": "img\/productos\/8f90c8ed76e3d1a60bc7518850cc3481.jpg"
    },
    {
        "id_producto": "49",
        "barcode": "7404005960285",
        "descripcion": "FOCO SUSAN 15W SUAH002",
        "porcentaje_utilidad1": "9.5",
        "imagen": "img\/productos\/89e47b678af80979d58ab58e4e3bb534.jpg"
    },
    {
        "id_producto": "50",
        "barcode": "7404005960599",
        "descripcion": "FOCO SUSAN 15W T2 SUAH014",
        "porcentaje_utilidad1": "19.04",
        "imagen": "img\/productos\/d66253ac194b5b098f1b641f87d5daa9.jpg"
    },
    {
        "id_producto": "52",
        "barcode": "6484572119522",
        "descripcion": "LAMPARA RECARGABLE DOS CANDELAS JA-1952",
        "porcentaje_utilidad1": "28.21",
        "imagen": "img\/productos\/5ede59947cdf8f318c9385602f37d6c7.jpg"
    },
    {
        "id_producto": "53",
        "barcode": "4710635005177",
        "descripcion": "CONTROL IML BLISTER LARGO ROJO RCR504BR",
        "porcentaje_utilidad1": "32.5",
        "imagen": "img\/productos\/f638e23870f477c597ccc901d61cbbb0.jpg"
    },
    {
        "id_producto": "54",
        "barcode": "7854545464871",
        "descripcion": "CONTROL RCA BLISTER LARGO CELESTE RCU-404",
        "porcentaje_utilidad1": "41.26",
        "imagen": "img\/productos\/2feb800b3e61587b916d72e548bad575.jpg"
    },
    {
        "id_producto": "55",
        "barcode": "861768101003",
        "descripcion": "CONTROL INTELIGENTE PEQUEÑO LCD F-188 XR-01-003",
        "porcentaje_utilidad1": "17.65",
        "imagen": "img\/productos\/928c3d40c29ce9eeaaff6e261a116972.jpg"
    },
    {
        "id_producto": "56",
        "barcode": "6921338610003",
        "descripcion": "CONTROL REMOTO UNIVERSAL AIRE ACONDICIONADO KT-100A XR-01-022",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/82cf4a342eafbbc8929da0dfb0eec9a0.jpg"
    },
    {
        "id_producto": "58",
        "barcode": "1107011611979",
        "descripcion": "CONTROL REMOTO UNIVERSAL TV STANG ST-620",
        "porcentaje_utilidad1": "31.58",
        "imagen": "img\/productos\/05be4de988d47e4d2c13c47095c7fe19.jpg"
    },
    {
        "id_producto": "60",
        "barcode": "8617681010017",
        "descripcion": "CONTROL INTELIGENTE RM-9511",
        "porcentaje_utilidad1": "42.04",
        "imagen": "img\/productos\/140440119367537021eebb084bd06086.jpg"
    },
    {
        "id_producto": "62",
        "barcode": "250777000714",
        "descripcion": "CONTROL COLORES LCD IML HR-N98",
        "porcentaje_utilidad1": "31.58",
        "imagen": "img\/productos\/79b5f4ab7b4539378eb7e4a6e26667fe.jpg"
    },
    {
        "id_producto": "63",
        "barcode": "6921338623003",
        "descripcion": "CONTROL REMOTO UNIVERSAL DVD RM-230E",
        "porcentaje_utilidad1": "57.89",
        "imagen": "img\/productos\/de4d645797c19edc774d19161d0b712b.jpg"
    },
    {
        "id_producto": "64",
        "barcode": "6934086682567",
        "descripcion": "CONTROL INTELIGENTE RM-9513",
        "porcentaje_utilidad1": "31.58",
        "imagen": "img\/productos\/1e2444bd4cfb87b51bfa0f55ebf48914.jpg"
    },
    {
        "id_producto": "65",
        "barcode": "250777000608",
        "descripcion": "CONTROL TV PANASONIC BL\/NE EUR501330 AYLIN-CONTROL-00060",
        "porcentaje_utilidad1": "54",
        "imagen": "img\/productos\/a308dd19ccf1c475df3c1f7ff97ad129.jpg"
    },
    {
        "id_producto": "66",
        "barcode": "250777000684",
        "descripcion": "CONTROL SANYO DINAMICO TV 9370 AYLIN-CONTROL-00068",
        "porcentaje_utilidad1": "88.68",
        "imagen": "img\/productos\/9da10ca4744bc7b99289c02be00bce4a.jpg"
    },
    {
        "id_producto": "67",
        "barcode": "250777000646",
        "descripcion": "CONTROL PANASONIC  TV EUR-7717010 AYLIN-CONTROL-00064",
        "porcentaje_utilidad1": "88.67",
        "imagen": "img\/productos\/af90d91bfe7b5b6d123a1ac151f224c3.jpg"
    },
    {
        "id_producto": "68",
        "barcode": "250777001179",
        "descripcion": "CONTROL PANASONIC BLANCO TV TNQ 4G0401",
        "porcentaje_utilidad1": "88.67",
        "imagen": "img\/productos\/379d918aa5072fc9101f4fba296cef95.jpg"
    },
    {
        "id_producto": "71",
        "barcode": "8617681011120",
        "descripcion": "CONTROL TV SONY RM-969",
        "porcentaje_utilidad1": "54",
        "imagen": "img\/productos\/eece4209cb842f147ad571bc5643c0c5.jpg"
    },
    {
        "id_producto": "73",
        "barcode": "250777001162",
        "descripcion": "CONTROL SANKEY TV OM8370-909 AYLIN-CONTROL-000116",
        "porcentaje_utilidad1": "88.68",
        "imagen": "img\/productos\/50e55cddf7f6b6809bc3e9e17f654fe5.jpg"
    },
    {
        "id_producto": "74",
        "barcode": "250777000547",
        "descripcion": "CONTROL SHARP TV G13224SA CONTROL-00054",
        "porcentaje_utilidad1": "88.7",
        "imagen": "img\/productos\/3a359907443be723bf2cf2de8a46363e.jpg"
    },
    {
        "id_producto": "75",
        "barcode": "2015110616001",
        "descripcion": "RADIO USB CHALLENGER CON CONTROL REMOTO CH-001R",
        "porcentaje_utilidad1": "21.05",
        "imagen": "img\/productos\/f943d3f72c797e10f39637f4c34b9881.jpg"
    },
    {
        "id_producto": "76",
        "barcode": "250111000608",
        "descripcion": "CONTROL PANASONIC BLANCO O NEGRO 501330 AYLIN-CONTROL-00060",
        "porcentaje_utilidad1": "104",
        "imagen": "img\/productos\/fa4e853cf87807fefcef30aa1f859204.jpg"
    },
    {
        "id_producto": "77",
        "barcode": "250777000660",
        "descripcion": "CONTROL TV PRECISION RS17-8895M AYLIN-CONTROL-00066",
        "porcentaje_utilidad1": "88.68",
        "imagen": "img\/productos\/65f59fb955a548095589f4801b9c2d03.jpg"
    },
    {
        "id_producto": "79",
        "barcode": "250777000592",
        "descripcion": "CONTROL TV DAEWOO R-43A01 AYLIN-CONTROL-00059",
        "porcentaje_utilidad1": "53.8",
        "imagen": "img\/productos\/8e33217080319f97c88546043432f602.jpg"
    },
    {
        "id_producto": "80",
        "barcode": "250777000677",
        "descripcion": "CONTROL LG 6710V00090H TV CONTROL-00067",
        "porcentaje_utilidad1": "88.68",
        "imagen": "img\/productos\/27372df1b994cc15e5cb21c82333f012.jpg"
    },
    {
        "id_producto": "81",
        "barcode": "868667101081",
        "descripcion": "AUDIFONO SAMSUNG GALAXY S4  ZDRA-01-081",
        "porcentaje_utilidad1": "31.58",
        "imagen": "img\/productos\/04591ed9312c9b77b4bcbcf706b46069.jpg"
    },
    {
        "id_producto": "82",
        "barcode": "8611681017090",
        "descripcion": "CONTROL TV PHILIPS RC19335010",
        "porcentaje_utilidad1": "54",
        "imagen": "img\/productos\/ab62c8eaf8756ab9416fa49a059ed1a3.jpg"
    },
    {
        "id_producto": "83",
        "barcode": "861768101012",
        "descripcion": "CONTROL TV TOSHIBA CT-90163",
        "porcentaje_utilidad1": "53.8",
        "imagen": "img\/productos\/ecf37b07e584c4955369c65d0ec0dd1b.jpg"
    },
    {
        "id_producto": "84",
        "barcode": "8617681011014",
        "descripcion": "CONTROL TV PHILIPS RC 283501",
        "porcentaje_utilidad1": "88.68",
        "imagen": "img\/productos\/ef251428257822d89cc6eb090d86a2b2.jpg"
    },
    {
        "id_producto": "90",
        "barcode": "8899145010515",
        "descripcion": "BOCINA BLUETOOTH MS-165BT",
        "porcentaje_utilidad1": "17.24",
        "imagen": "img\/productos\/c8b1d6714339299392db9bb268b0de93.jpg"
    },
    {
        "id_producto": "91",
        "barcode": "8657102011002",
        "descripcion": "BOCINA MS-129BT\/MS-244BT\/MS-132BT",
        "porcentaje_utilidad1": "30.95",
        "imagen": "img\/productos\/0dd038711aba49df16ad2ef55887a5ba.jpg"
    },
    {
        "id_producto": "92",
        "barcode": "860314501117",
        "descripcion": "BOCINA BLUETOOTH MS-149BT",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/6de8ceb8d235814f5f236a007e1a58da.jpg"
    },
    {
        "id_producto": "94",
        "barcode": "860314501114",
        "descripcion": "BOCINA BLUETOOTH MS-145BT JHW-01-114",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/6a0474775b1cb696d655240be75dd93e.jpg"
    },
    {
        "id_producto": "95",
        "barcode": "8899145010683",
        "descripcion": "BOCINA BLUETOOTH MS-173BT",
        "porcentaje_utilidad1": "30",
        "imagen": ""
    },
    {
        "id_producto": "97",
        "barcode": "2015012190036",
        "descripcion": "RADIO CHALLENGER CON MEMORIA CH-036TU",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/55234ed33108e3550c02b406b1ceda8d.jpg"
    },
    {
        "id_producto": "104",
        "barcode": "8410755310002",
        "descripcion": "GANCHOS PRENSA ROPA DE MADERA",
        "porcentaje_utilidad1": "38.9",
        "imagen": "img\/productos\/ddf64c7edfd893381d4fc4a7d3ec7979.jpg"
    },
    {
        "id_producto": "106",
        "barcode": "6913028866777",
        "descripcion": "NINTENDO GAME STATION",
        "porcentaje_utilidad1": "12.5",
        "imagen": "img\/productos\/4fd732f21b09b32c7d7e573d3ed28dba.jpg"
    },
    {
        "id_producto": "107",
        "barcode": "6937618360360",
        "descripcion": "SET DE DESARMADORES 31 EN 1  JK-6036",
        "porcentaje_utilidad1": "83.8",
        "imagen": "img\/productos\/6d23b36e14a0164467120640a7e56973.jpg"
    },
    {
        "id_producto": "112",
        "barcode": "7404059612017",
        "descripcion": "CANDELA CIRCULAR SUSAN 32W SUAH019",
        "porcentaje_utilidad1": "20.7",
        "imagen": "img\/productos\/3a7f30393b629990b61536fdb9b1b6ea.jpg"
    },
    {
        "id_producto": "113",
        "barcode": "6970432380046",
        "descripcion": "BATERIAS AA",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/b8da0d12400e76894419700a8d063250.jpg"
    },
    {
        "id_producto": "120",
        "barcode": "861768101028",
        "descripcion": "CONTROL REMOTO TOSHIBA DVD SE-R0047 XR-01-028",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/0aa01f78b6811323ccec4703880f3596.jpg"
    },
    {
        "id_producto": "121",
        "barcode": "861768101030",
        "descripcion": "CONTROL REMOTO COBY DVD JK-2002B XR-01-030",
        "porcentaje_utilidad1": "89",
        "imagen": "img\/productos\/822dea8c073ae1dc9dce9a3aaed0cc1b.jpg"
    },
    {
        "id_producto": "122",
        "barcode": "861768101031",
        "descripcion": "CONTROL REMOTO DVD SANKEY SAN215 XR-01-031",
        "porcentaje_utilidad1": "89",
        "imagen": "img\/productos\/2fb01af6ec16a1f152f6de5245d40713.jpg"
    },
    {
        "id_producto": "124",
        "barcode": "8617681011045",
        "descripcion": "CONTROL TV SANYO DE CORTINA 8859",
        "porcentaje_utilidad1": "53.8",
        "imagen": "img\/productos\/4a5548e5636cee0c5fabfa7e0677b10f.jpg"
    },
    {
        "id_producto": "131",
        "barcode": "6948031102062",
        "descripcion": "CEPILLO NIÑO EN CAJA \/DOCENA\/",
        "porcentaje_utilidad1": "34.57",
        "imagen": "img\/productos\/7133c667f87aa9c73a35f7da8c2892a9.jpg"
    },
    {
        "id_producto": "134",
        "barcode": "6970157240229",
        "descripcion": "CEPILLO ADULTO LANSHARE",
        "porcentaje_utilidad1": "27.8",
        "imagen": "img\/productos\/95156c2cbea381fdc2bd9209a9791d7a.jpg"
    },
    {
        "id_producto": "136",
        "barcode": "6934741706034",
        "descripcion": "CEPILLO ADULTO SAN-A \/DOCENA\/",
        "porcentaje_utilidad1": "9.7",
        "imagen": "img\/productos\/ed0181438dec88342e983d3e74a6d6d6.jpg"
    },
    {
        "id_producto": "137",
        "barcode": "6921700799886",
        "descripcion": "LAMPARA DE EMERGENCIA DOS CANDELAS LL-6808R",
        "porcentaje_utilidad1": "30",
        "imagen": ""
    },
    {
        "id_producto": "138",
        "barcode": "6940326474892",
        "descripcion": "LAMPARA DE HERRAMIENTA SD-898",
        "porcentaje_utilidad1": "14.94",
        "imagen": "img\/productos\/9955265dd06423550cf42ac7729318da.jpg"
    },
    {
        "id_producto": "140",
        "barcode": "6970254115130",
        "descripcion": "PAQUETE DE HISOPOS MEDIANO 60-2",
        "porcentaje_utilidad1": "47.06",
        "imagen": "img\/productos\/f1566bbe0215cb3809d703a432813e0a.jpg"
    },
    {
        "id_producto": "143",
        "barcode": "TY-668",
        "descripcion": "LAMPARA PACHITA DE BATERIA TY-668",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/221fafae689b058ac6b8993b9cb67a85.jpg"
    },
    {
        "id_producto": "145",
        "barcode": "KT-6628",
        "descripcion": "LAMPARA DE BATERIA KT-6628",
        "porcentaje_utilidad1": "22.2",
        "imagen": "img\/productos\/9ce40dcef61ad23bf7bc686e30138db7.jpg"
    },
    {
        "id_producto": "146",
        "barcode": "WF-2218",
        "descripcion": "LAMPARA DE BATERIA WF-2218",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/1a52e64ecd7aeabd3e2658566eb4edf8.jpg"
    },
    {
        "id_producto": "149",
        "barcode": "WBY-956",
        "descripcion": "LAMPARA DE BATERIA WBY-956",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/025a4160ada58bc5b9dfea04a1d9cdfb.jpg"
    },
    {
        "id_producto": "150",
        "barcode": "6941507400129",
        "descripcion": "LAMPARA DE BATERIA SY-0838",
        "porcentaje_utilidad1": "22",
        "imagen": "img\/productos\/2a9a7c374a31ccd88d5d5721fb8a5d43.jpg"
    },
    {
        "id_producto": "151",
        "barcode": "8603168110516",
        "descripcion": "MASAJEADOR MIMO XY3199 WX-03-008",
        "porcentaje_utilidad1": "22.95",
        "imagen": "img\/productos\/f4900af8fd6e3b3b3d49f25bdd77622a.jpg"
    },
    {
        "id_producto": "152",
        "barcode": "6942205288057",
        "descripcion": "LAMPARA DE BATERIA YJ-831",
        "porcentaje_utilidad1": "15.4",
        "imagen": "img\/productos\/f08fdf06b5981880de4134566dd9e03c.jpg"
    },
    {
        "id_producto": "153",
        "barcode": "6926637835195",
        "descripcion": "LAMPARA DE BATERIA A-3519 DON NARCISO",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/a64502375cec8a6cd015c04f65cb39c2.jpg"
    },
    {
        "id_producto": "154",
        "barcode": "7501892828107",
        "descripcion": "NAVAJA WOLFOX DE 5 PULGADAS",
        "porcentaje_utilidad1": "159",
        "imagen": ""
    },
    {
        "id_producto": "155",
        "barcode": "7410010560006",
        "descripcion": "MASCON VERDE DURA MAX",
        "porcentaje_utilidad1": "31.58",
        "imagen": "img\/productos\/4c68bbee1354fbf339c99cdb083f3c15.jpg"
    },
    {
        "id_producto": "159",
        "barcode": "860321302001",
        "descripcion": "CRICO PLASTICO 16 PULGADAS LKS-02-001",
        "porcentaje_utilidad1": "57.89",
        "imagen": "img\/productos\/e677ee7afadb5ebc1b6e46afe04fcd3d.jpg"
    },
    {
        "id_producto": "160",
        "barcode": "860321302002",
        "descripcion": "CRICO PLASTICO 18 PULGADAS LKS-02-002",
        "porcentaje_utilidad1": "57.89",
        "imagen": "img\/productos\/a9f8a5c04b7a91caeac85bce41c9aaac.jpg"
    },
    {
        "id_producto": "161",
        "barcode": "860321302003",
        "descripcion": "CRICO PLASTICO 20 PULGADAS LKS-02-003",
        "porcentaje_utilidad1": "50",
        "imagen": "img\/productos\/79a105a925bbf74071fcd7272a86aded.jpg"
    },
    {
        "id_producto": "162",
        "barcode": "860321302004",
        "descripcion": "CRICO PLASTICO 22 PULGADAS LKS-02-004",
        "porcentaje_utilidad1": "57.89",
        "imagen": "img\/productos\/ef7536d734012951efc3cf44dd77eee0.jpg"
    },
    {
        "id_producto": "169",
        "barcode": "8618106010056",
        "descripcion": "CARGADOR PARA CARRO DOS SALIDAS USB \/BOLSA\/",
        "porcentaje_utilidad1": "15.38",
        "imagen": "img\/productos\/0275d3b281c7f9e35deee859305bc84c.jpg"
    },
    {
        "id_producto": "170",
        "barcode": "861796001043",
        "descripcion": "CARGADOR COCO V8 PARA CARRO YS-01-043",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/4e9a78a19dce91841bc2156f45e6c9f4.jpg"
    },
    {
        "id_producto": "171",
        "barcode": "86179001041",
        "descripcion": "CARGADOR V3 COCO BOLSA",
        "porcentaje_utilidad1": "42.86",
        "imagen": "img\/productos\/c5f6edd4e6dd8b4552bcd618a41d231d.jpg"
    },
    {
        "id_producto": "172",
        "barcode": "250777001216",
        "descripcion": "PULPO NEGRO 10 PUNTAS",
        "porcentaje_utilidad1": "66.67",
        "imagen": "img\/productos\/2a0be78710a89c7eee9a48e45fd43e83.jpg"
    },
    {
        "id_producto": "174",
        "barcode": "17404005960619",
        "descripcion": "ROSETA SUEA001",
        "porcentaje_utilidad1": "67",
        "imagen": "img\/productos\/468bf14064d441f6ad7f04bf84df4ab0.jpg"
    },
    {
        "id_producto": "175",
        "barcode": "7404005960629",
        "descripcion": "SWITCH SENCILLO TORTUGA SUEA002",
        "porcentaje_utilidad1": "108.33",
        "imagen": "img\/productos\/30e480c6aef3655667027883ba77319a.jpg"
    },
    {
        "id_producto": "176",
        "barcode": "6603712c",
        "descripcion": "MEMORIA MICRO SD 4GB KINGSTON",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/21ef2e63d50c510f5d1e3f69e6ed7050.jpg"
    },
    {
        "id_producto": "178",
        "barcode": "6936298950595",
        "descripcion": "LIMPIADOR CD XB-102",
        "porcentaje_utilidad1": "72.41",
        "imagen": "img\/productos\/55d804ab1b0ea018ac60e1ed881373e7.jpg"
    },
    {
        "id_producto": "180",
        "barcode": "6954127863021",
        "descripcion": "DESARMADOR 6 EN 1 G013-1",
        "porcentaje_utilidad1": "72.4",
        "imagen": "img\/productos\/5f786bb74bc4b44141391ea687f85d2b.jpg"
    },
    {
        "id_producto": "186",
        "barcode": "6924494500263",
        "descripcion": "HILO DENTAL CPA04-30",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/3b2ad4b6d77493b19a121fb9404d6391.jpg"
    },
    {
        "id_producto": "188",
        "barcode": "6951295515035",
        "descripcion": "BATERIAS RECARGABLES 4300",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/8e9f5b3a5ca4e176d14ea2feb1cfffff.jpg"
    },
    {
        "id_producto": "190",
        "barcode": "250777000905",
        "descripcion": "CABLE IPHONE 4 SENCILLO DE COLORES AYLIN-CBL-00090",
        "porcentaje_utilidad1": "100",
        "imagen": "img\/productos\/ff2a622e2b359e7ffe47c427ec4c039b.jpg"
    },
    {
        "id_producto": "192",
        "barcode": "6900000061237",
        "descripcion": "AUDIFONO AAA BOLSA 61-23",
        "porcentaje_utilidad1": "96.07",
        "imagen": "img\/productos\/b819e69830056ebb67ca7f01d7d0798c.jpg"
    },
    {
        "id_producto": "193",
        "barcode": "861947012866",
        "descripcion": "CABLE iPHONE 5 COCO HDRZ-01-286",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/a83de045a42789c048c9bb5e05e21321.jpg"
    },
    {
        "id_producto": "194",
        "barcode": "JD-718",
        "descripcion": "LAMPARA DE BATERIA JD-718",
        "porcentaje_utilidad1": "20.9",
        "imagen": "img\/productos\/eaff52a69ef95e4aecf6ba36e0ffc47e.jpg"
    },
    {
        "id_producto": "197",
        "barcode": "250777000462",
        "descripcion": "CADENA PARA PERRO M-2018 AYLIN-CPR-00046",
        "porcentaje_utilidad1": "43",
        "imagen": "img\/productos\/fbe69b2a01e6c33d2efa642a500c64f2.jpg"
    },
    {
        "id_producto": "200",
        "barcode": "250777000479",
        "descripcion": "CADENA PARA PERRO M-2518 AYLIN-CPR-00047",
        "porcentaje_utilidad1": "62.48",
        "imagen": "img\/productos\/22d8f087abf60ec8dfe4a1ab43db8f33.jpg"
    },
    {
        "id_producto": "201",
        "barcode": "8618106010568",
        "descripcion": "CUBO CUADRADO BLANCO",
        "porcentaje_utilidad1": "32",
        "imagen": "img\/productos\/e0a76fa28f729af4b40a78a065fedf2f.jpg"
    },
    {
        "id_producto": "203",
        "barcode": "250777000493",
        "descripcion": "CADENA PARA PERRO M-4518 AYLIN-CPR-00049",
        "porcentaje_utilidad1": "31.57",
        "imagen": "img\/productos\/42373580774da622aa857b56e71196e1.jpg"
    },
    {
        "id_producto": "216",
        "barcode": "250777001476",
        "descripcion": "CABLE IPHONE 5 SENCILLO",
        "porcentaje_utilidad1": "145",
        "imagen": "img\/productos\/4322c86ba2475091e97cd3990b4a1d11.png"
    },
    {
        "id_producto": "218",
        "barcode": "7404005960643",
        "descripcion": "TOMA DOBLE POLARIZADO SUPERFICIAL SUSAN SUEA004",
        "porcentaje_utilidad1": "87.5",
        "imagen": "img\/productos\/0b4b0044eb2092fab092736a81756b8b.jpg"
    },
    {
        "id_producto": "219",
        "barcode": "250777000875",
        "descripcion": "PULPO LARGO 3 PUNTAS\/ CABLE TIPO C \/CBL-00087",
        "porcentaje_utilidad1": "50",
        "imagen": "img\/productos\/a56cb161caccf72e8d8b055858880810.jpg"
    },
    {
        "id_producto": "221",
        "barcode": "6970452860078",
        "descripcion": "PRENSA ROPA PLASTICO",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/be5a36b9c57e3ec60941baabe75345ad.jpg"
    },
    {
        "id_producto": "225",
        "barcode": "6973821978077",
        "descripcion": "CARGADOR SAMSUNG 3 PIEZAS FOR NOTE  GALAXY S3 S4 S5 \/ SJ03",
        "porcentaje_utilidad1": "87.5",
        "imagen": "img\/productos\/afc0045f1aedb482699b78947f9dcbb3.jpg"
    },
    {
        "id_producto": "226",
        "barcode": "8601181060696",
        "descripcion": "CABLE V8 ZIPPER LED XY-01-069",
        "porcentaje_utilidad1": "56.25",
        "imagen": "img\/productos\/f3a2b68ae323061ad64eee220c0f4113.jpg"
    },
    {
        "id_producto": "227",
        "barcode": "4719867213268",
        "descripcion": "CARTON PEGAMENTO SUPER GLUE CHEMMER",
        "porcentaje_utilidad1": "16.28",
        "imagen": "img\/productos\/3a3540fded623bfb28f71c0a91cb7647.jpg"
    },
    {
        "id_producto": "228",
        "barcode": "6932428102599",
        "descripcion": "RASURADORA MANUAL GILITTEY II PLUS",
        "porcentaje_utilidad1": "12.99",
        "imagen": "img\/productos\/c51c0583b1ba58cdd74f39207f1160fb.jpg"
    },
    {
        "id_producto": "230",
        "barcode": "250777001070",
        "descripcion": "CARGADOR BATERIA LAMPARA POLICIAL",
        "porcentaje_utilidad1": "50",
        "imagen": "img\/productos\/4daba0f19a2fc5fd5efc9bd9c61aef8c.jpg"
    },
    {
        "id_producto": "232",
        "barcode": "250777000837",
        "descripcion": "CABLE AUXILIAR PARA DVD IML AYLIN-CBL-00083",
        "porcentaje_utilidad1": "78.57",
        "imagen": "img\/productos\/4991ac17a29682c2f555f2c93a9a2420.jpg"
    },
    {
        "id_producto": "233",
        "barcode": "250777000844",
        "descripcion": "EXTENSION PARA RADIO  AYLIN-CBL-00084",
        "porcentaje_utilidad1": "170.27",
        "imagen": "img\/productos\/745ebd45f4992838e6f4bae799f6c11f.jpg"
    },
    {
        "id_producto": "234",
        "barcode": "250777000417",
        "descripcion": "ANTENA BASE REDONDA CON CABLE COAXIAL A-618C",
        "porcentaje_utilidad1": "56.25",
        "imagen": "img\/productos\/c97046c085b3d35dcd8fa0c26e643740.jpg"
    },
    {
        "id_producto": "237",
        "barcode": "8615523020422",
        "descripcion": "CINTA LED BLANCA 100 CM HD-02-042",
        "porcentaje_utilidad1": "36.2",
        "imagen": "img\/productos\/8b31c9dfc0b7178a72804901021be23d.jpg"
    },
    {
        "id_producto": "238",
        "barcode": "250777000370",
        "descripcion": "KIT REGULADOR DE COCINA DE GAS AYLIN-VLV-00037",
        "porcentaje_utilidad1": "27.84",
        "imagen": "img\/productos\/95e4f70d8f5887025388fbe8d58b25ca.jpg"
    },
    {
        "id_producto": "239",
        "barcode": "250777000455",
        "descripcion": "CADENA PARA PERRO M-3018 AYLIN-CPR-00045",
        "porcentaje_utilidad1": "52.17",
        "imagen": "img\/productos\/706222c31e5b7af2b22ea900eaf107d5.jpg"
    },
    {
        "id_producto": "240",
        "barcode": "250777000486",
        "descripcion": "CADENA PARA PERRO M-4018 AYLIN-CPR-00048",
        "porcentaje_utilidad1": "39.86",
        "imagen": "img\/productos\/da71bd0d384a6dcc2434f1e92005beee.jpg"
    },
    {
        "id_producto": "251",
        "barcode": "250777000400",
        "descripcion": "DOCENA PEINE PLASTICO",
        "porcentaje_utilidad1": "17.65",
        "imagen": "img\/productos\/334f5722a1102575e4a2b51cdc4bf2ca.jpg"
    },
    {
        "id_producto": "261",
        "barcode": "250777000813",
        "descripcion": "CABLE AUXILIAR AUDIO 2 Y 1 IML  AYLIN-CBL-00081",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/778491af8fc9de72b676f5df5527fb93.jpg"
    },
    {
        "id_producto": "265",
        "barcode": "6927799681132",
        "descripcion": "BATERIA BLISTER TIANGIU AG13\/357A",
        "porcentaje_utilidad1": "100",
        "imagen": "img\/productos\/675fe8fdfe0561360c98bcab0aef455d.jpg"
    },
    {
        "id_producto": "266",
        "barcode": "6927799681101",
        "descripcion": "BATERIA BLISTER TIANGIU AG10\/389A",
        "porcentaje_utilidad1": "100",
        "imagen": "img\/productos\/cd637827381f6253d05337d2df790408.jpg"
    },
    {
        "id_producto": "267",
        "barcode": "6927799682160",
        "descripcion": "BATERIA BLISTER TIANGIU CR2032",
        "porcentaje_utilidad1": "100",
        "imagen": "img\/productos\/445c99e821788bcf8e4001fd32abe295.jpg"
    },
    {
        "id_producto": "268",
        "barcode": "6927799682177",
        "descripcion": "BATERIA BLISTER  TIANGIU CR2025",
        "porcentaje_utilidad1": "100",
        "imagen": "img\/productos\/16f5dd7dfaa358b4e9034bc89ebcd8dd.jpg"
    },
    {
        "id_producto": "270",
        "barcode": "6927799681033",
        "descripcion": "BATERIA BLISTER  TIANGIU AG3 392A",
        "porcentaje_utilidad1": "100",
        "imagen": "img\/productos\/a3e4905dc56636f1cc31f5e8421e0522.jpg"
    },
    {
        "id_producto": "279",
        "barcode": "763041030015",
        "descripcion": "POLVO LOLITA BEIGE",
        "porcentaje_utilidad1": "10.62",
        "imagen": "img\/productos\/1bcd4d502a3c847bb1babe2f9340d491.jpg"
    },
    {
        "id_producto": "281",
        "barcode": "6954178407916",
        "descripcion": "LAPIZ MONGOL 482",
        "porcentaje_utilidad1": "30.77",
        "imagen": "img\/productos\/22e2d18bede1d4b2724f968d96925e86.jpg"
    },
    {
        "id_producto": "302",
        "barcode": "6953872580146",
        "descripcion": "CEPILLO ADULTO SANFENG \/DOCENA\/",
        "porcentaje_utilidad1": "35.59",
        "imagen": "img\/productos\/3d20fa0a609ac9ae791f157382dc0632.jpg"
    },
    {
        "id_producto": "303",
        "barcode": "6958750800057",
        "descripcion": "BORRADOR DE MARIPOSAS DOBY",
        "porcentaje_utilidad1": "38",
        "imagen": "img\/productos\/51e1d6aed538b76a15352aa68ed3d8a7.jpg"
    },
    {
        "id_producto": "304",
        "barcode": "860217601007",
        "descripcion": "CARRO SPEAKER YSW-01-007",
        "porcentaje_utilidad1": "42.9",
        "imagen": "img\/productos\/243bd4011554b35562baf7848627efb4.jpg"
    },
    {
        "id_producto": "310",
        "barcode": "6944031219014",
        "descripcion": "LAMPARA DE FRENTE RECARGABLE IML LD-212",
        "porcentaje_utilidad1": "17.65",
        "imagen": "img\/productos\/de4b14a5ea61a52fa09f9940b00e9369.jpg"
    },
    {
        "id_producto": "311",
        "barcode": "6954598110013",
        "descripcion": "RELOJ PARA CARRO NAKO NA-617A",
        "porcentaje_utilidad1": "86.57",
        "imagen": "img\/productos\/94150722bd5981035e8f7f711780f1aa.jpg"
    },
    {
        "id_producto": "313",
        "barcode": "6920709306125",
        "descripcion": "CORTA UÑAS 0757",
        "porcentaje_utilidad1": "23.46",
        "imagen": "img\/productos\/3af1348b13f7a22ced666851d9a18b43.jpg"
    },
    {
        "id_producto": "314",
        "barcode": "250777001001",
        "descripcion": "CALAVERA SUSAN SUEA033 12PCS  GRANEL",
        "porcentaje_utilidad1": "56.25",
        "imagen": "img\/productos\/12dee6a7efd57744476345b744794091.jpg"
    },
    {
        "id_producto": "315",
        "barcode": "8618088010105",
        "descripcion": "ADAPTADOR PARA PSP PP-01-010",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/17a93c0bdeafc741fdc8c6c046bd073e.jpg"
    },
    {
        "id_producto": "318",
        "barcode": "7889865419027",
        "descripcion": "LAMPARA RECARGABLE DOS CANDELAS JA-1901",
        "porcentaje_utilidad1": "15",
        "imagen": ""
    },
    {
        "id_producto": "323",
        "barcode": "6922049100012",
        "descripcion": "MASAJEADOR SUPER LIFE XF-69",
        "porcentaje_utilidad1": "90.47",
        "imagen": "img\/productos\/89455b528f21dd3e3ac81142bd59af82.jpg"
    },
    {
        "id_producto": "326",
        "barcode": "250777000059",
        "descripcion": "ADAPTADOR TOMA CORRIENTE DE 3 A 2 POLARIZADO AYLIN-ADP-005",
        "porcentaje_utilidad1": "317",
        "imagen": "img\/productos\/8c5bda656045e9ee958029550b2277d8.jpg"
    },
    {
        "id_producto": "328",
        "barcode": "6937712700123",
        "descripcion": "LAPICERO GEL JETCO \/CAJA 12 UNIDADES\/",
        "porcentaje_utilidad1": "38.89",
        "imagen": "img\/productos\/76d49550fbf0013c296490ab47142e44.jpg"
    },
    {
        "id_producto": "331",
        "barcode": "4710409897304",
        "descripcion": "RUBOR AMUSE BLUSH",
        "porcentaje_utilidad1": "15",
        "imagen": "img\/productos\/31b69151ae7f609f3d3c4419c308b4de.jpg"
    },
    {
        "id_producto": "337",
        "barcode": "250777000851",
        "descripcion": "CABLE AUXILIAR AUDIO 2 Y 2  AYLIN-CBL-00085",
        "porcentaje_utilidad1": "733.3",
        "imagen": "img\/productos\/a63c8cd80b962a1909495bd97cc6ae7f.jpg"
    },
    {
        "id_producto": "338",
        "barcode": "250777001",
        "descripcion": "TOMA MACHO SENCILLO AYLIN-TM-001",
        "porcentaje_utilidad1": "92.31",
        "imagen": "img\/productos\/4c317202f320cdfed1c7ebaaedc4bc6c.jpg"
    },
    {
        "id_producto": "342",
        "barcode": "250777001117",
        "descripcion": "CONECTOR PARA ANTENA AYLIN-CBL-00111",
        "porcentaje_utilidad1": "50",
        "imagen": "img\/productos\/cf2d27738679e01d438aa2c89ebc0452.jpg"
    },
    {
        "id_producto": "346",
        "barcode": "691686600182",
        "descripcion": "PONCHO DE ADULTO NORMAL H83",
        "porcentaje_utilidad1": "43",
        "imagen": ""
    },
    {
        "id_producto": "377",
        "barcode": "6495741515991",
        "descripcion": "FOCO RECARGABLE CON CONTROL JUNAI JA-599",
        "porcentaje_utilidad1": "31.57",
        "imagen": "img\/productos\/a3c6734d31c011cebb192fa22fd1781d.jpg"
    },
    {
        "id_producto": "406",
        "barcode": "6923550226819",
        "descripcion": "SET DE DESARMADORES PARA RELOJ DE 11 PIEZAS 6226819",
        "porcentaje_utilidad1": "57.9",
        "imagen": "img\/productos\/528a4c1b7d2e6ba5b73f7c1734302df5.jpg"
    },
    {
        "id_producto": "413",
        "barcode": "250777000622",
        "descripcion": "CONTROL REMOTO SAMSUNG TV 10110G BLANCO AYLIN-CONTROL-00062",
        "porcentaje_utilidad1": "88.68",
        "imagen": "img\/productos\/9f287e023f960aa252562bc0986bd329.jpg"
    },
    {
        "id_producto": "414",
        "barcode": "250777000578",
        "descripcion": "CONTROL REMOTO SONY EQUIPO SONIDO RM-SC3 AYLIN-CONTROL-00057",
        "porcentaje_utilidad1": "88.68",
        "imagen": "img\/productos\/f2bab6ca3065f989b0f711a06ea989f0.jpg"
    },
    {
        "id_producto": "415",
        "barcode": "8617681011052",
        "descripcion": "CONTROL REMOTO TV TOSHIBA NEGRO CT-821",
        "porcentaje_utilidad1": "72.41",
        "imagen": "img\/productos\/2adf9c70bebc497857fed27c6ceb0fdf.jpg"
    },
    {
        "id_producto": "417",
        "barcode": "6899468995294",
        "descripcion": "LUZ STROBER MOTO SF-02-2373",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/9fc4b901fa398369e1311ec7fa1b4e80.JPG"
    },
    {
        "id_producto": "421",
        "barcode": "863251202361",
        "descripcion": "LED H4 PARA VEHICULO OY-02-361",
        "porcentaje_utilidad1": "30.76",
        "imagen": "img\/productos\/67e2f3243217b8f74dc30485362912fb.jpg"
    },
    {
        "id_producto": "425",
        "barcode": "250777001148",
        "descripcion": "CINCHO NYLON    AYLIN-CINCHO-00114",
        "porcentaje_utilidad1": "18.4",
        "imagen": "img\/productos\/24b0a31c3c18a79ee4b2fc5cfd31bed8.jpg"
    },
    {
        "id_producto": "429",
        "barcode": "7404005960551",
        "descripcion": "FOCO SUSAN 7W",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/7fcc156aeb011cf762a8d933c0b77768.jpg"
    },
    {
        "id_producto": "431",
        "barcode": "7404005960315",
        "descripcion": "FOCO APOLO 15W \/CAJA INDIVIDUAL\/",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/f03ff4e690ab3bfac923937c4be04adf.jpg"
    },
    {
        "id_producto": "432",
        "barcode": "7404005960407",
        "descripcion": "FOCO LED APOLO 5W APBO001B \/BLISTER\/",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/5c76bcfe262e88b32d7375859f6ee477.jpg"
    },
    {
        "id_producto": "433",
        "barcode": "7404005960575",
        "descripcion": "FOCO SUSAN 13W",
        "porcentaje_utilidad1": "9.5",
        "imagen": "img\/productos\/d8ed19746485520ae7bb1ac17b2ce5b4.jpg"
    },
    {
        "id_producto": "437",
        "barcode": "7404005960971",
        "descripcion": "FOCO LED APOLO 11W APBO004B \/BLISTER\/",
        "porcentaje_utilidad1": "22.54",
        "imagen": "img\/productos\/8ec5bf61432b3644866ff909625a54fc.jpg"
    },
    {
        "id_producto": "449",
        "barcode": "7501892873534",
        "descripcion": "LAMPARA DE NOCHE FULGORE MARIPOSA FU0166",
        "porcentaje_utilidad1": "27.55",
        "imagen": "img\/productos\/d40243ef79c455174e2d8ad698a1a7c8.jpg"
    },
    {
        "id_producto": "455",
        "barcode": "2017030100011",
        "descripcion": "LLORONES LUZ CARRO ART-888",
        "porcentaje_utilidad1": "30",
        "imagen": "img\/productos\/b79e01be8329114c6a1f469447d0a97d.jpg"
    },
    {
        "id_producto": "457",
        "barcode": "6954025670457",
        "descripcion": "LUZ LED TECHO CARRO 12 LED 9484",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/22278f726b43a4d4e7f1fe5c6c70c7dd.jpg"
    },
    {
        "id_producto": "459",
        "barcode": "250777000776",
        "descripcion": "CABLE IML AUXILIAR AUDIO 1 A 1  AYLIN-CBL-00077",
        "porcentaje_utilidad1": "185.7",
        "imagen": "img\/productos\/dedaf8e62482b3056151327bbaf05ed3.jpg"
    },
    {
        "id_producto": "462",
        "barcode": "6970905251040",
        "descripcion": "BATERIA BLISTER AG4 626",
        "porcentaje_utilidad1": "100",
        "imagen": "img\/productos\/e4a67d3b52012d4973970ddb4d3c4d8b.jpg"
    },
    {
        "id_producto": "468",
        "barcode": "250777000974",
        "descripcion": "CARGADOR 2 PIEZAS IPHONE 4\/5  AYLIN-CBL-00097",
        "porcentaje_utilidad1": "34.5",
        "imagen": "img\/productos\/1f6800d60f9b4eb2ba81bd45d1dceeee.jpg"
    },
    {
        "id_producto": "489",
        "barcode": "6899468995751",
        "descripcion": "LUZ DE TECHO 3 PIEZAS LED GRANDE  QT-02-COB36",
        "porcentaje_utilidad1": "34.62",
        "imagen": "img\/productos\/fb4fa436b6abc953c1df43a68a0af0d4.jpg"
    },
    {
        "id_producto": "490",
        "barcode": "6947290630569",
        "descripcion": "CUCHILLO TRAMONTINA MANGO BLANCO WF-404",
        "porcentaje_utilidad1": "21.42",
        "imagen": "img\/productos\/2214a30b2306abfcab238488b1e217ba.jpg"
    },
    {
        "id_producto": "491",
        "barcode": "6940350993413",
        "descripcion": "CUCHILLO CACHA BLANCA INOX KC40698",
        "porcentaje_utilidad1": "13.33",
        "imagen": "img\/productos\/cc016276bd914f49db5ffa28ae33286f.jpg"
    },
    {
        "id_producto": "492",
        "barcode": "2016051002182",
        "descripcion": "LUZ TECHO CARRO UN CUATRO LED",
        "porcentaje_utilidad1": "53.33",
        "imagen": "img\/productos\/472042c0a8c703fe899e88520cca83f0.jpg"
    },
    {
        "id_producto": "495",
        "barcode": "250777000998",
        "descripcion": "CARGADOR PARA CARRO DOS SALIDAS AYLIN-CBL-00099",
        "porcentaje_utilidad1": "56.25",
        "imagen": "img\/productos\/e59a2f0393c772a1ef1980beac38b1ef.jpg"
    },
    {
        "id_producto": "497",
        "barcode": "863665102005",
        "descripcion": "GUANTE MOTO CORTO KTMS-02-001",
        "porcentaje_utilidad1": "34.33",
        "imagen": "img\/productos\/5a5063796d37a43ba96653d1944bd7d8.jpg"
    },
    {
        "id_producto": "499",
        "barcode": "6922550618228",
        "descripcion": "MINI LAMPARA DE EMERGENCIA DE BATERIAS GS-822",
        "porcentaje_utilidad1": "78.6",
        "imagen": "img\/productos\/1f101696b151e82fe5a064b17232b141.jpg"
    },
    {
        "id_producto": "517",
        "barcode": "6941335409752",
        "descripcion": "LAMPARA RECARGABLE UNA CANDELA KM-7638",
        "porcentaje_utilidad1": "42.85",
        "imagen": "img\/productos\/9661078add60a1201b2fbc0323d9b532.jpg"
    },
    {
        "id_producto": "520",
        "barcode": "7501892828800",
        "descripcion": "BOMBA DE MANO PARA INFLAR WF1005",
        "porcentaje_utilidad1": "37.61",
        "imagen": "img\/productos\/4ba6896561af52c17f18d87109612f82.jpg"
    },
    {
        "id_producto": "524",
        "barcode": "202090617049",
        "descripcion": "FOCO PARA MOTO B35 12V\/35W",
        "porcentaje_utilidad1": "37.17",
        "imagen": "img\/productos\/a0a69a3dd0865b5d22db7e5cda6791a9.jpg"
    },
    {
        "id_producto": "526",
        "barcode": "6022015060118",
        "descripcion": "REGLETA GRIS 6 OULET POWER STRIP  \/6 TOMAS SENCILLA\/",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/dd714397d47a28cb171f50d0d0ad58c8.jpg"
    },
    {
        "id_producto": "527",
        "barcode": "8120314214824",
        "descripcion": "REGLETA XTRON XT-21482",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/b0424edde5e31db5b0083af6af1b5615.jpg"
    },
    {
        "id_producto": "528",
        "barcode": "2332566589520",
        "descripcion": "REGLETA SUSAN SUEA037",
        "porcentaje_utilidad1": "32.35",
        "imagen": "img\/productos\/323769abd00668d71b7b2f623d12d77c.jpg"
    },
    {
        "id_producto": "530",
        "barcode": "7401005497889",
        "descripcion": "LAPIZ DELINEADOR EVITA NEGRO",
        "porcentaje_utilidad1": "17.14",
        "imagen": "img\/productos\/e44b0f3c5f6b24b72df01c54add866f0.jpg"
    },
    {
        "id_producto": "532",
        "barcode": "6928002103991",
        "descripcion": "ENCENDEDOR FENIX JS851",
        "porcentaje_utilidad1": "14.16",
        "imagen": "img\/productos\/63d9b2b09d6022fb369a79854892b2b0.jpg"
    },
    {
        "id_producto": "537",
        "barcode": "6958485437191",
        "descripcion": "MAQUINA CORTAR PELO BELLOLINI",
        "porcentaje_utilidad1": "9.09",
        "imagen": "img\/productos\/5b80ab191feaa6b4a6284c644b3bedb3.jpg"
    },
    {
        "id_producto": "539",
        "barcode": "7404005960445",
        "descripcion": "FOCO SUSAN 40W INCANDECENTE SUIN002",
        "porcentaje_utilidad1": "13.63",
        "imagen": "img\/productos\/85bf53ddb2918532ff97036f93accb35.jpg"
    },
    {
        "id_producto": "541",
        "barcode": "860314501110",
        "descripcion": "BOCINA MS-82BT",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/5f854c428afdaf1beea14640a840559e.jpg"
    },
    {
        "id_producto": "542",
        "barcode": "865865102047",
        "descripcion": "VIA PARA MOTO PMGZ-02-047",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/74962d04d9d380d54e8e78b6f04667be.jpg"
    },
    {
        "id_producto": "548",
        "barcode": "7404005960537",
        "descripcion": "FOCO SUSAN 45W FLUORECENTE SUAH008",
        "porcentaje_utilidad1": "23.45",
        "imagen": "img\/productos\/7b1a3d6047c5bd2cb998953f2a192501.jpg"
    },
    {
        "id_producto": "550",
        "barcode": "250777000653",
        "descripcion": "CONTROL SONY B\/N RM-Y173 AYLIN-CONTROL-00065",
        "porcentaje_utilidad1": "53.84",
        "imagen": "img\/productos\/58eb94c750a9357a6932d103412fb4ce.jpg"
    },
    {
        "id_producto": "557",
        "barcode": "250777001049",
        "descripcion": "TIRRO TRANSPARENTE ABRO 300 YARDAS",
        "porcentaje_utilidad1": "24.56",
        "imagen": "img\/productos\/df643d2f4b4a1aef6b9e2c0c01bd5520.jpg"
    },
    {
        "id_producto": "560",
        "barcode": "7404005960308",
        "descripcion": "FOCO APOLO 25W CAJA CARTON",
        "porcentaje_utilidad1": "35.29",
        "imagen": "img\/productos\/b9a7fc0f7048350a5ef6a9f18708e48c.jpg"
    },
    {
        "id_producto": "574",
        "barcode": "8634613020067",
        "descripcion": "LED ROLLO 5M",
        "porcentaje_utilidad1": "22.22",
        "imagen": "img\/productos\/9ddd2342cb7da744bf944548cbac9b87.jpg"
    },
    {
        "id_producto": "582",
        "barcode": "783094060890",
        "descripcion": "FOCO 2U ANEX 13W",
        "porcentaje_utilidad1": "36.36",
        "imagen": "img\/productos\/76be286397bb9ec5f082a668e1a0a71f.jpg"
    },
    {
        "id_producto": "601",
        "barcode": "8555222447659",
        "descripcion": "LLAVERO CARRO",
        "porcentaje_utilidad1": "42.85",
        "imagen": "img\/productos\/fc943dc6be7ea7fb869c7373d6c7f3bf.jpg"
    },
    {
        "id_producto": "604",
        "barcode": "8260000101516",
        "descripcion": "TENSOR MOTO 18-31",
        "porcentaje_utilidad1": "100",
        "imagen": "img\/productos\/8623770941bc645fa66489fbb8f02433.jpg"
    },
    {
        "id_producto": "613",
        "barcode": "7501892828121",
        "descripcion": "NAVAJA WOLFOX DE 6 1\/2 PULGADAS WF1349",
        "porcentaje_utilidad1": "138",
        "imagen": "img\/productos\/223df1cfe073332df81c416cc8eb7e82.jpg"
    },
    {
        "id_producto": "616",
        "barcode": "7501892884479",
        "descripcion": "RO2716 EXTENSION ELECTRICA ROTTER 3 M BLANCA",
        "porcentaje_utilidad1": "36.36",
        "imagen": ""
    },
    {
        "id_producto": "620",
        "barcode": "250777000639",
        "descripcion": "CONTROL REMOTO SAMSUNG TV NEGRO 00104A AYLIN-CONTROL-00063",
        "porcentaje_utilidad1": "54",
        "imagen": "img\/productos\/1ea28cc38b21ec1179fd29deffecc0fc.jpg"
    },
    {
        "id_producto": "621",
        "barcode": "6953889001825",
        "descripcion": "CALCULADORA CIENTIFICA FX-82MS",
        "porcentaje_utilidad1": "86",
        "imagen": "img\/productos\/5ad8a434b71ade651d1609d32c64ab1e.jpg"
    },
    {
        "id_producto": "622",
        "barcode": "8435330674775",
        "descripcion": "RADIO CHALLENGER CH-11UBT",
        "porcentaje_utilidad1": "4",
        "imagen": "img\/productos\/d7f4b23114f22989090c1c33a37981c3.jpg"
    },
    {
        "id_producto": "624",
        "barcode": "6978562461574",
        "descripcion": "RADIO CHALLENGER CH-157U",
        "porcentaje_utilidad1": "4",
        "imagen": "img\/productos\/7027a49acbe9081d517988befd1a192a.jpg"
    },
    {
        "id_producto": "625",
        "barcode": "6232584780113",
        "descripcion": "RADIO CHALLENGER CH-7801UAR",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/669bee71a10acee2232f05adaf0ecf9e.jpg"
    },
    {
        "id_producto": "626",
        "barcode": "6978562463301",
        "descripcion": "RADIO CHALLENGER CH-330U",
        "porcentaje_utilidad1": "5",
        "imagen": "img\/productos\/d671f753a31e3e3d83f039e637e6090b.jpg"
    },
    {
        "id_producto": "627",
        "barcode": "2015012160046",
        "descripcion": "RADIO CHALLENGER CH-046TU",
        "porcentaje_utilidad1": "4",
        "imagen": "img\/productos\/214fdd0321153de0e49cf87ea62b3e64.jpg"
    },
    {
        "id_producto": "629",
        "barcode": "7242205299824",
        "descripcion": "LAMPARA DE MANO RECARGABLE F982",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/5eaa2645fabb2474a0c15f9f84f04144.jpg"
    },
    {
        "id_producto": "631",
        "barcode": "863251202397",
        "descripcion": "HALOGENA MOTO 4 LED OY-02-397",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/43784c7a80006036c01f781614b727ea.jpg"
    },
    {
        "id_producto": "633",
        "barcode": "6954178407892",
        "descripcion": "CORRECTOR \/12 UNIDADES\/",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/df37018fffe580a60b2bd932e5ee56f3.jpg"
    },
    {
        "id_producto": "635",
        "barcode": "6925871645225",
        "descripcion": "CASETERA \/CD PLAYER\/CDX-D4522BT",
        "porcentaje_utilidad1": "61.53",
        "imagen": "img\/productos\/13e2674d9a11a95c9e5fc392086f4fdd.jpg"
    },
    {
        "id_producto": "637",
        "barcode": "6937712707276",
        "descripcion": "LAPICERO YH-168 \/12 UNIDADES\/",
        "porcentaje_utilidad1": "50",
        "imagen": ""
    },
    {
        "id_producto": "638",
        "barcode": "6946848800089",
        "descripcion": "MARCADOR PERMANENTE \/10 UNIDADES\/",
        "porcentaje_utilidad1": "36.36",
        "imagen": "img\/productos\/59b58d44669def74874f148f4c004830.jpg"
    },
    {
        "id_producto": "640",
        "barcode": "6941335410758",
        "descripcion": "LAMPARA LED RECARGABLE DE DOS CANDELA KM-7652",
        "porcentaje_utilidad1": "18.18",
        "imagen": ""
    },
    {
        "id_producto": "641",
        "barcode": "6951227500788",
        "descripcion": "CUCHILLO CACHA AMARILLA",
        "porcentaje_utilidad1": "52.78",
        "imagen": "img\/productos\/40c83eb08c997a464113e258720bb4de.jpg"
    },
    {
        "id_producto": "644",
        "barcode": "6921700720156",
        "descripcion": "LAMPARA DOS CANDELAS SOLAR LL-2015R",
        "porcentaje_utilidad1": "20.48",
        "imagen": "img\/productos\/b75c4f364dc9fefa9a8e29a9106e8ecd.jpg"
    },
    {
        "id_producto": "646",
        "barcode": "8618047010382",
        "descripcion": "LAMPARA POLICIAL CHOQUE ELECTRICO 1101 S-JF-01-038",
        "porcentaje_utilidad1": "48.15",
        "imagen": "img\/productos\/64618fb6a64f60396789cda4c9949acc.jpg"
    },
    {
        "id_producto": "662",
        "barcode": "7800026918258",
        "descripcion": "RADIO PEQUEÑO CON BATERIA K-258",
        "porcentaje_utilidad1": "8.69",
        "imagen": "img\/productos\/7d03e8679c63b258f4eeef345e1ac0fa.jpg"
    },
    {
        "id_producto": "665",
        "barcode": "75743730242",
        "descripcion": "TINTE PARA CABELLO",
        "porcentaje_utilidad1": "17.39",
        "imagen": ""
    },
    {
        "id_producto": "674",
        "barcode": "6932832880182",
        "descripcion": "EXTINTOR FIRE STOP F1-23",
        "porcentaje_utilidad1": "25",
        "imagen": ""
    },
    {
        "id_producto": "676",
        "barcode": "6931453591293",
        "descripcion": "RAQUETA CON LAMPARA ABAJO APRQ-03",
        "porcentaje_utilidad1": "36",
        "imagen": "img\/productos\/f367759c087fe6f673a638e0f5f892de.jpg"
    },
    {
        "id_producto": "677",
        "barcode": "2112345012742",
        "descripcion": "RAQUETA FLOR LUZ A UN LADO APRQ-02",
        "porcentaje_utilidad1": "19.15",
        "imagen": "img\/productos\/3eb0ee862d078102a034508a185b0719.jpg"
    },
    {
        "id_producto": "678",
        "barcode": "6931453591286",
        "descripcion": "RAQUETA FLOR SIN LAMPARA APRQ-01",
        "porcentaje_utilidad1": "13.63",
        "imagen": "img\/productos\/fcce90c148c4be55587926ecfebb0e0d.jpg"
    },
    {
        "id_producto": "690",
        "barcode": "7404005960841",
        "descripcion": "LAMPARA RECARGABLE SULI010",
        "porcentaje_utilidad1": "42.86",
        "imagen": "img\/productos\/6da82e0a69c3537e65e779f61d3a8a07.jpg"
    },
    {
        "id_producto": "694",
        "barcode": "8613212110027",
        "descripcion": "FOCO COCO PEQUEÑO 15 WATT",
        "porcentaje_utilidad1": "0",
        "imagen": ""
    },
    {
        "id_producto": "695",
        "barcode": "861321211010",
        "descripcion": "FOCO COCO GRANDE 24 WATT",
        "porcentaje_utilidad1": "0",
        "imagen": ""
    },
    {
        "id_producto": "696",
        "barcode": "7501892843025",
        "descripcion": "ENCENDEDOR MULTIUSO WOLFOX WF9729",
        "porcentaje_utilidad1": "24.67",
        "imagen": "img\/productos\/7f4b8b483892a23df4fbb587c3e13744.jpg"
    },
    {
        "id_producto": "698",
        "barcode": "6922410273178",
        "descripcion": "MASCON DE ALAMBRE DURAMAX JML5012 \/CARTON 12 UNIDADES\/",
        "porcentaje_utilidad1": "50",
        "imagen": "img\/productos\/62d27a41a15003cd4eb4e8efbbe0a627.jpg"
    },
    {
        "id_producto": "699",
        "barcode": "6922410273192",
        "descripcion": "MASCON DE ALAMBRE DURAMAX JML5024 \/EMPAQUE 6 UNIDADES\/",
        "porcentaje_utilidad1": "50",
        "imagen": "img\/productos\/ebebab9773fedc712c8d79c4e78120d1.jpg"
    },
    {
        "id_producto": "700",
        "barcode": "7501892843339",
        "descripcion": "ROTOMARTILLO WOLFOX WF9654",
        "porcentaje_utilidad1": "23.15",
        "imagen": "img\/productos\/10fd85449bcb438460d2830e00492b7d.png"
    },
    {
        "id_producto": "701",
        "barcode": "7501892873886",
        "descripcion": "CLAVIJA  FU0266 BLANCA",
        "porcentaje_utilidad1": "31.57",
        "imagen": "img\/productos\/71f8f427f5e0badf0054ce6bd937e99c.jpg"
    },
    {
        "id_producto": "704",
        "barcode": "6957153100870",
        "descripcion": "RAQUETA MATA MOSQUITOS IML SIN LUZ HG-MM1",
        "porcentaje_utilidad1": "6.64",
        "imagen": "img\/productos\/30b6cc2cd6cc89c6730797b3d6dc7527.jpg"
    },
    {
        "id_producto": "710",
        "barcode": "6902016103130",
        "descripcion": "FOCO LED 3U 7W LED-ES-3U7W",
        "porcentaje_utilidad1": "21.21",
        "imagen": "img\/productos\/07774c1ec4df50ff54c3d526ff012cc4.jpg"
    },
    {
        "id_producto": "711",
        "barcode": "6902016103116",
        "descripcion": "FOCO LED ESPIRAL 7W LED-ES-7W CFL",
        "porcentaje_utilidad1": "21.43",
        "imagen": "img\/productos\/808b1838ee6c951304f5a638583d1249.jpg"
    },
    {
        "id_producto": "713",
        "barcode": "6920151126029",
        "descripcion": "FOCO LED ESPIRAL 9W LED-ES-9W",
        "porcentaje_utilidad1": "22.58",
        "imagen": ""
    },
    {
        "id_producto": "732",
        "barcode": "6940351100162",
        "descripcion": "RADIO KNSTAR KK-9",
        "porcentaje_utilidad1": "18.18",
        "imagen": "img\/productos\/da1b6c106fee123e7b74ee2467815bf3.png"
    },
    {
        "id_producto": "733",
        "barcode": "6932271700461",
        "descripcion": "VENENO PARA CUCARACHA GREEN LEAF GLE2001",
        "porcentaje_utilidad1": "33.333",
        "imagen": "img\/productos\/9a4b2d86d047e72a5d72a143167a32bb.JPG"
    },
    {
        "id_producto": "734",
        "barcode": "7889865419089",
        "descripcion": "LAMPARA RECARGABLE JUANAI JA-1908",
        "porcentaje_utilidad1": "20.48",
        "imagen": "img\/productos\/b8341abe3324dcbb32aaea7543352c53.jpg"
    },
    {
        "id_producto": "749",
        "barcode": "250777000554",
        "descripcion": "CONTROL DE CAJA CABLE GDRC-400T AYLIN-CONTROL-00055",
        "porcentaje_utilidad1": "16.67",
        "imagen": "img\/productos\/2908cc2bad2ebaf006aafa6cfad8d8cc.jpg"
    },
    {
        "id_producto": "751",
        "barcode": "7501892816661",
        "descripcion": "DESTAPA CAÑOS WOLFOX WF1696",
        "porcentaje_utilidad1": "78.57",
        "imagen": ""
    },
    {
        "id_producto": "753",
        "barcode": "7404005960216",
        "descripcion": "FOCO APOLO 20W 3U APAH-005",
        "porcentaje_utilidad1": "33",
        "imagen": "img\/productos\/66dc7775cd8fb3c4de613403ca36f8be.jpg"
    },
    {
        "id_producto": "756",
        "barcode": "250777000691",
        "descripcion": "CONTROL RCA 7464M AYLIN-CONTROL-00069",
        "porcentaje_utilidad1": "88.68",
        "imagen": "img\/productos\/84bf08557fad9edc47c241a0ceabc29b.jpg"
    },
    {
        "id_producto": "757",
        "barcode": "6934741706065",
        "descripcion": "CEPILLO NIÑO SAN-A E328-2",
        "porcentaje_utilidad1": "28.57",
        "imagen": ""
    },
    {
        "id_producto": "765",
        "barcode": "6911866860629",
        "descripcion": "CUTTER KNIFE",
        "porcentaje_utilidad1": "66.6",
        "imagen": "img\/productos\/bd9db2434b22237b7117cd364cdeb5b0.jpg"
    },
    {
        "id_producto": "769",
        "barcode": "7501892803258",
        "descripcion": "CUCHILLO 8 PULGADAS WOLFOX CACHA NEGRA WF1714",
        "porcentaje_utilidad1": "32.98",
        "imagen": "img\/productos\/6cb74674f5180a78e968850b41fbdc15.jpg"
    },
    {
        "id_producto": "772",
        "barcode": "6944031219328",
        "descripcion": "LAMPARA DE DOS CANDELA SHUNSHI SS-7021 LI021",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/9f5a75c6da8b0c89ffef635e665d04f7.jpg"
    },
    {
        "id_producto": "784",
        "barcode": "6912345678902",
        "descripcion": "CARGADOR FAST CHARGING 2.0 ZY-03",
        "porcentaje_utilidad1": "23.08",
        "imagen": "img\/productos\/b4ee4bf03fb958ec830ca1ef5979e75b.jpg"
    },
    {
        "id_producto": "791",
        "barcode": "6936420900238",
        "descripcion": "CONTROL REMOTO UNIVERSAL JS-6212A",
        "porcentaje_utilidad1": "31.58",
        "imagen": "img\/productos\/39fa59431cc879e13f3c6e12733f9807.jpg"
    },
    {
        "id_producto": "792",
        "barcode": "8618009012089",
        "descripcion": "PROTECTOR PARA TABLET GRANDE FASHION CASE AR-01-208",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/eecf208dd6c66525841a153da1c7dcc9.jpg"
    },
    {
        "id_producto": "797",
        "barcode": "6970157246986",
        "descripcion": "CEPILLO TIRA LANSHARE FOCUS",
        "porcentaje_utilidad1": "26.98",
        "imagen": ""
    },
    {
        "id_producto": "798",
        "barcode": "6899468995713",
        "descripcion": "LED DAYTIME RUNNING LIGHT DOS BARRAS",
        "porcentaje_utilidad1": "63.63",
        "imagen": "img\/productos\/69d8affda4f02a7d24475517a04e9c09.jpg"
    },
    {
        "id_producto": "799",
        "barcode": "6906008259485",
        "descripcion": "MAX III PRESTOBARBA",
        "porcentaje_utilidad1": "53.37",
        "imagen": "img\/productos\/e73aae4339b89f52cdaccbe79f912431.jpg"
    },
    {
        "id_producto": "800",
        "barcode": "6936063817009",
        "descripcion": "MARCADOR FLUORESCENT CT-700",
        "porcentaje_utilidad1": "46.15",
        "imagen": ""
    },
    {
        "id_producto": "801",
        "barcode": "8899145010829",
        "descripcion": "MS-189BT SPEAK JWL-01-082",
        "porcentaje_utilidad1": "21.42",
        "imagen": "img\/productos\/59931173239ea9435ae0dd5461d824c7.jpg"
    },
    {
        "id_producto": "802",
        "barcode": "8899145010751",
        "descripcion": "MS-201BT SPEAK JWL-01-075",
        "porcentaje_utilidad1": "35",
        "imagen": "img\/productos\/84480acd19343ca6993546312a3b1380.jpg"
    },
    {
        "id_producto": "803",
        "barcode": "8657102011058",
        "descripcion": "BOCINA DOS TWITTER MS-185BT DSO-01-058",
        "porcentaje_utilidad1": "9.09",
        "imagen": "img\/productos\/aae706014d4d1a6386a46782d7d679ae.jpg"
    },
    {
        "id_producto": "804",
        "barcode": "6902016019165",
        "descripcion": "PORTABLE MULTI BAND RADIO HY-916BT",
        "porcentaje_utilidad1": "41.66",
        "imagen": "img\/productos\/45213c17f9cd8e33e971df3d65a829da.jpg"
    },
    {
        "id_producto": "805",
        "barcode": "8899145010454",
        "descripcion": "BOCINA BLUETOOTH MS-164BT",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/b4244a2e426aeabd55dc50e3a444729e.jpg"
    },
    {
        "id_producto": "807",
        "barcode": "5999542240126",
        "descripcion": "REGLETA FUSSION PBR-4506",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/b451fbc8bbe76c1f129df59ef4895d71.jpg"
    },
    {
        "id_producto": "808",
        "barcode": "861949701146",
        "descripcion": "CARGADOR SAMSUNG 3 PIEZAS TECHNO STORE \/CAJA\/",
        "porcentaje_utilidad1": "66.67",
        "imagen": "img\/productos\/a8e6f7d11ab54007340ce72a0514fa4f.png"
    },
    {
        "id_producto": "811",
        "barcode": "6936773100101",
        "descripcion": "WEAVING CAP JY37037",
        "porcentaje_utilidad1": "15.38",
        "imagen": "img\/productos\/760331a6d36b4911350d09e68dec059b.jpg"
    },
    {
        "id_producto": "838",
        "barcode": "250777000745",
        "descripcion": "CONTROL PLASMA LG AKB72915208 AYLIN-CONTROL-00074",
        "porcentaje_utilidad1": "34.62",
        "imagen": "img\/productos\/ce38c2a8506d6043f4d9254cfb178167.jpg"
    },
    {
        "id_producto": "839",
        "barcode": "250777001186",
        "descripcion": "CONTROL PANASONIC PLASMA RM-D720  AYLIN-CONTROL-000118",
        "porcentaje_utilidad1": "57.89",
        "imagen": "img\/productos\/f2537075ff2a4ddfd4af999e71665694.jpg"
    },
    {
        "id_producto": "840",
        "barcode": "861796001040",
        "descripcion": "CARGADOR 6101 COCO YS-01-040",
        "porcentaje_utilidad1": "66.67",
        "imagen": "img\/productos\/850928a5a39da8bfe56a82ee2be7f179.jpg"
    },
    {
        "id_producto": "843",
        "barcode": "7404005970093",
        "descripcion": "FOCO APOLO LED EMERGENCIA 9W APBE003",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/cbf67475c2dbd2f2edd6b1aa78d8cf7d.jpg"
    },
    {
        "id_producto": "844",
        "barcode": "8678173070605",
        "descripcion": "POWER BANK  SAMSUNG 20000 TY-01-060",
        "porcentaje_utilidad1": "31.14",
        "imagen": "img\/productos\/3066a337e7116f5d4ea2757027f13335.jpg"
    },
    {
        "id_producto": "845",
        "barcode": "250777001384",
        "descripcion": "ROSCA PARA FOCO EMERGENCIA AYLIN-CBL-000138",
        "porcentaje_utilidad1": "127.27",
        "imagen": "img\/productos\/b178e653e09889b96cae31601a03e4e0.png"
    },
    {
        "id_producto": "848",
        "barcode": "8618051012228",
        "descripcion": "AC ADAPTER D-S LITE XD-01-222",
        "porcentaje_utilidad1": "66.67",
        "imagen": "img\/productos\/e3602935bbb2f4bc3fe5972d67f7eabe.jpg"
    },
    {
        "id_producto": "849",
        "barcode": "7896075701040",
        "descripcion": "MERHEJE BASIC PINZA 12 UNIDADES",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/23d3d2bd11ca3f0e2133f7b45a338f8d.jpg"
    },
    {
        "id_producto": "854",
        "barcode": "6934741705211",
        "descripcion": "CEPILLO NIÑO SAN-A E6501 12 PIEZAS",
        "porcentaje_utilidad1": "31.57",
        "imagen": "img\/productos\/d955ec53f041ec3185727e2468c13198.jpg"
    },
    {
        "id_producto": "856",
        "barcode": "6941797965360",
        "descripcion": "BORN TO HAVE LUZ LED USB",
        "porcentaje_utilidad1": "115",
        "imagen": "img\/productos\/64d0870a896cb5d9f78e2d9032d46dfb.jpg"
    },
    {
        "id_producto": "859",
        "barcode": "86194901171",
        "descripcion": "CABLE V8 COCO HRDZ-01-171",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/af3a00b4faf4a92f7df42c87ed561331.jpg"
    },
    {
        "id_producto": "860",
        "barcode": "250777001223",
        "descripcion": "CABLE GRUESO IPHONE 4 BLANCO AYLIN-CBL-000122",
        "porcentaje_utilidad1": "11.11",
        "imagen": "img\/productos\/4f5ba62402217c7a111cf64866b77c06.jpg"
    },
    {
        "id_producto": "864",
        "barcode": "250777000981",
        "descripcion": "CAR ADAPTER IPHONE 5\/6  AYLIN-CBL-00098",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/f59e5a3a98350c8f21ab5f1660b7807f.jpg"
    },
    {
        "id_producto": "867",
        "barcode": "867667101028",
        "descripcion": "RADIO USB SOEWEL SW-908UT ZDRJ-01-028",
        "porcentaje_utilidad1": "16.07",
        "imagen": "img\/productos\/1144f25d7d56595699652ca27bd7d42a.jpg"
    },
    {
        "id_producto": "868",
        "barcode": "867667101031",
        "descripcion": "RADIO USB SOEWEL SW-9016UT ZDRJ-01-031",
        "porcentaje_utilidad1": "16.07",
        "imagen": "img\/productos\/e565beb54e4f01b82e6f4b881a65e578.jpg"
    },
    {
        "id_producto": "869",
        "barcode": "868667101013",
        "descripcion": "SELFI MINI MONOPOD ZDRA-01-013",
        "porcentaje_utilidad1": "45.35",
        "imagen": "img\/productos\/5b91a30a2726b875c2e729b3a84be3d6.jpg"
    },
    {
        "id_producto": "871",
        "barcode": "6952415765682",
        "descripcion": "LAMPARA DE BATERIA DX-6569",
        "porcentaje_utilidad1": "13.79",
        "imagen": ""
    },
    {
        "id_producto": "873",
        "barcode": "861949701138",
        "descripcion": "CARGADOR INALAMBRICO FANTASY WIRELESS CHARGER HRDZ-01-138",
        "porcentaje_utilidad1": "66.66",
        "imagen": "img\/productos\/14534abfc7d84a3bb8f642e94645fe95.jpg"
    },
    {
        "id_producto": "874",
        "barcode": "6944031229136",
        "descripcion": "LAMPARA RECARGABLE SS-837",
        "porcentaje_utilidad1": "38.89",
        "imagen": "img\/productos\/d81f4571f3c23cb2754e5ae2b99a4f96.jpg"
    },
    {
        "id_producto": "878",
        "barcode": "250777000738",
        "descripcion": "CONTROL PLASMA SAMSUNG URC-77 AYLIN-CONTROL-00073",
        "porcentaje_utilidad1": "53.85",
        "imagen": "img\/productos\/9b1f024cfe2084df069c69fc4aaa4409.JPG"
    },
    {
        "id_producto": "879",
        "barcode": "250117000121",
        "descripcion": "CONTROL PLASMA SONY RM-GA019 AYLIN-CONTROL-00072",
        "porcentaje_utilidad1": "53.85",
        "imagen": "img\/productos\/9337ad3b4be33cba08c0c4a0e4048807.jpg"
    },
    {
        "id_producto": "881",
        "barcode": "861805401016",
        "descripcion": "CABLE HDMI 1.8 M COMPATIBLE CON PS3 ZYT-01-016",
        "porcentaje_utilidad1": "29.03",
        "imagen": "img\/productos\/1d573f12bd37191eb11c5bcf5f987eef.jpg"
    },
    {
        "id_producto": "884",
        "barcode": "7896637626217",
        "descripcion": "TELEFONO CON IDENTIFICADOR DE LLAMADA K 302",
        "porcentaje_utilidad1": "29.41",
        "imagen": "img\/productos\/2aceb70f164d8bdbfe6cffacd916579d.jpg"
    },
    {
        "id_producto": "885",
        "barcode": "6936366693553",
        "descripcion": "TELEFONO CON IDENTIFICADOR DE LLAMADA OHO OHO-5005",
        "porcentaje_utilidad1": "23.52",
        "imagen": "img\/productos\/df7e32d9e9445267b0f2c5d0d17a832d.jpg"
    },
    {
        "id_producto": "891",
        "barcode": "7453078546254",
        "descripcion": "EXTENSION ELECTRICA TROEN 6M CON REGLETA",
        "porcentaje_utilidad1": "23.08",
        "imagen": "img\/productos\/dad2fd6298e6fa00db3a4b56de28aaf6.jpg"
    },
    {
        "id_producto": "897",
        "barcode": "7453038488082",
        "descripcion": "EXTENSION ELECTRICA TROEN 4M",
        "porcentaje_utilidad1": "57.14",
        "imagen": "img\/productos\/2c8ee361ce40cb025554613dcfbc8d34.jpg"
    },
    {
        "id_producto": "898",
        "barcode": "7453038488129",
        "descripcion": "EXTENSION ELECTRICA TROEN 15M",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/5985ab8fbb757dbb3105f9a761f701a8.jpg"
    },
    {
        "id_producto": "899",
        "barcode": "6987021104389",
        "descripcion": "EXTENSION ELECTRICA BLANCA DIESEL TOOLS 25FT DT-25FT-BH",
        "porcentaje_utilidad1": "37.5",
        "imagen": "img\/productos\/2a288bd0b06f74b0043f99cac66736bc.jpg"
    },
    {
        "id_producto": "900",
        "barcode": "8899145010904",
        "descripcion": "BOCINA MEDIANA MS-197BT",
        "porcentaje_utilidad1": "19.31",
        "imagen": ""
    },
    {
        "id_producto": "901",
        "barcode": "759364010087",
        "descripcion": "CEPILLO K-DENT DURO",
        "porcentaje_utilidad1": "14.94",
        "imagen": "img\/productos\/3d9d6ccc15c019f9dab4cbacf4a9e523.jpg"
    },
    {
        "id_producto": "902",
        "barcode": "6941507409191",
        "descripcion": "LAMPARA BATERIA SS-Q959",
        "porcentaje_utilidad1": "20.48",
        "imagen": ""
    },
    {
        "id_producto": "904",
        "barcode": "250777001018",
        "descripcion": "TIRRO BLANCO  AYLIN-TIRRO-00101",
        "porcentaje_utilidad1": "38",
        "imagen": "img\/productos\/b0d189383796965cebac552384a5f537.jpg"
    },
    {
        "id_producto": "906",
        "barcode": "250777002",
        "descripcion": "TOMA MACHO SEMI INDUSTRIAL SUEA039",
        "porcentaje_utilidad1": "194",
        "imagen": "img\/productos\/20641dcb2e856d32520fe7cb7434585d.jpg"
    },
    {
        "id_producto": "907",
        "barcode": "74011811900227",
        "descripcion": "TOMA HEMBRA SEMI INDUSTRIAL SUEA040",
        "porcentaje_utilidad1": "56.25",
        "imagen": "img\/productos\/35163afb7b88203b371be4af53eb9475.jpg"
    },
    {
        "id_producto": "922",
        "barcode": "7453078546278",
        "descripcion": "EXTENSION ELECTRICA TROEN 10M CON REGLETA",
        "porcentaje_utilidad1": "27.78",
        "imagen": "img\/productos\/88a7f3798817387722c7b5951de2a4e0.jpg"
    },
    {
        "id_producto": "925",
        "barcode": "6932623210020",
        "descripcion": "LAMPARA DE FRENTE APLI002",
        "porcentaje_utilidad1": "11.11",
        "imagen": "img\/productos\/12231ef6d09ccd2b789555c7c254a196.jpg"
    },
    {
        "id_producto": "926",
        "barcode": "250777000394",
        "descripcion": "TIJERA TELA SENIOR 8\/12 AYLIN-TJ-00039",
        "porcentaje_utilidad1": "15.38",
        "imagen": "img\/productos\/e3b5695b7db2c89b3619baf9602082a3.jpg"
    },
    {
        "id_producto": "932",
        "barcode": "6920490788278",
        "descripcion": "LAMPARA RECARGABLE APOLO APLI003",
        "porcentaje_utilidad1": "47.06",
        "imagen": "img\/productos\/05fb0d6327a3d0eafc4e61c696e2c34b.jpg"
    },
    {
        "id_producto": "936",
        "barcode": "6941507400617",
        "descripcion": "LAMPARA RECARGABLE AB-A8",
        "porcentaje_utilidad1": "6",
        "imagen": "img\/productos\/162d57a0fc5757f0ed329d172612fd44.jpg"
    },
    {
        "id_producto": "937",
        "barcode": "7501206670156",
        "descripcion": "FOCO APOLO 15W BLISTER APAH-002",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/4761216bba3ad42f888cbc4869643e61.jpg"
    },
    {
        "id_producto": "938",
        "barcode": "6939020458727",
        "descripcion": "LAMPARA APOLO RECARGABLE APLI004",
        "porcentaje_utilidad1": "31.58",
        "imagen": "img\/productos\/cd6ea4ebda0ae40f47df849a44b537d8.jpg"
    },
    {
        "id_producto": "941",
        "barcode": "7501206720028",
        "descripcion": "FOCO APOLO LED EMERGENCIA 7W",
        "porcentaje_utilidad1": "30.95",
        "imagen": "img\/productos\/d31642a53fe52808fefcaa17ff6d4170.jpg"
    },
    {
        "id_producto": "942",
        "barcode": "7501206720011",
        "descripcion": "FOCO APOLO LED EMERGENCIA 5W APBE001",
        "porcentaje_utilidad1": "28.2",
        "imagen": "img\/productos\/04cc5bb105fcd91958e412b1fc0036ec.jpg"
    },
    {
        "id_producto": "943",
        "barcode": "4974680032384",
        "descripcion": "VENTILADOR USB RECARGABLE",
        "porcentaje_utilidad1": "100",
        "imagen": "img\/productos\/26b036c180e47e9ebd42cb5f28c25149.jpg"
    },
    {
        "id_producto": "944",
        "barcode": "7501449801256",
        "descripcion": "FOCO DISCO APLD-01",
        "porcentaje_utilidad1": "7.14",
        "imagen": "img\/productos\/d653e18fef8ef5583279c4a019e49f07.jpg"
    },
    {
        "id_producto": "945",
        "barcode": "6951789500776",
        "descripcion": "PLANCHA ASTOR SM-77",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/aacf6fb08ef33fbfa68b5ec33d31eae0.jpg"
    },
    {
        "id_producto": "946",
        "barcode": "4976790310895",
        "descripcion": "LICUADORA 3B",
        "porcentaje_utilidad1": "21.58",
        "imagen": "img\/productos\/974aad12b902d068b6ca6dda82e26a9b.jpg"
    },
    {
        "id_producto": "966",
        "barcode": "250777000943",
        "descripcion": "CARGADOR V8 CELL HOUSE CAJA  AYLIN-CBL-00094",
        "porcentaje_utilidad1": "38.89",
        "imagen": "img\/productos\/34054cfd66098905c51bd8841838b3b6.jpg"
    },
    {
        "id_producto": "969",
        "barcode": "6900614247775",
        "descripcion": "JUGUETE MOTOCICLETA TOYS  BB-05-F68",
        "porcentaje_utilidad1": "81.81",
        "imagen": "img\/productos\/51eec4a30ce7271b1d807f2ce2686c2a.jpg"
    },
    {
        "id_producto": "974",
        "barcode": "6900904363697",
        "descripcion": "POWER CAR BB-05-A14",
        "porcentaje_utilidad1": "27.77",
        "imagen": ""
    },
    {
        "id_producto": "975",
        "barcode": "6900709363854",
        "descripcion": "MOTO RCYCLE BB-05-C12",
        "porcentaje_utilidad1": "31.57",
        "imagen": ""
    },
    {
        "id_producto": "976",
        "barcode": "6900709364042",
        "descripcion": "SPRINT MOTO CUATRO MOTOS BB-05-C16",
        "porcentaje_utilidad1": "28",
        "imagen": ""
    },
    {
        "id_producto": "977",
        "barcode": "6900709080294",
        "descripcion": "CARRO CAR 95 BB-05-C43",
        "porcentaje_utilidad1": "15.79",
        "imagen": ""
    },
    {
        "id_producto": "979",
        "barcode": "6900690008222",
        "descripcion": "LOVELY HOUSE CASITA JUGUETE BB-05-A47",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/f227e347bba6fd43fef067108c109bde.jpg"
    },
    {
        "id_producto": "980",
        "barcode": "6900709363793",
        "descripcion": "CARRITO BOLSA BB-05-C28",
        "porcentaje_utilidad1": "28.57",
        "imagen": ""
    },
    {
        "id_producto": "989",
        "barcode": "455770502086",
        "descripcion": "CARRO GRANDE CON CONTROL CQ-222-24",
        "porcentaje_utilidad1": "9.2896",
        "imagen": "img\/productos\/f31895abd8690995ed1a6e7295479474.jpg"
    },
    {
        "id_producto": "991",
        "barcode": "250777000615",
        "descripcion": "SINCRONIZADOR BLUETOOTH FM AYLIN-CONTROL-00061",
        "porcentaje_utilidad1": "116.5",
        "imagen": ""
    },
    {
        "id_producto": "997",
        "barcode": "6916885986268",
        "descripcion": "LAMPARA POLICIAL 98626",
        "porcentaje_utilidad1": "39.59",
        "imagen": "img\/productos\/57dcdd683577146e5cb25a773a845900.jpg"
    },
    {
        "id_producto": "1001",
        "barcode": "6899420160807",
        "descripcion": "OSCILLATING FAN\/VENTILADOR PARA CARRO",
        "porcentaje_utilidad1": "35.71",
        "imagen": "img\/productos\/2af116c4ddaa7f65403d8786449d5ae9.jpg"
    },
    {
        "id_producto": "1008",
        "barcode": "6945851441883",
        "descripcion": "FOCO SOLAR YZ-188",
        "porcentaje_utilidad1": "20.48",
        "imagen": "img\/productos\/2816d02ec5d023bacc77b6696a4840aa.jpg"
    },
    {
        "id_producto": "1010",
        "barcode": "6956881470880",
        "descripcion": "CAMPING LIGHT 7088A",
        "porcentaje_utilidad1": "40.5",
        "imagen": "img\/productos\/968cf744e0d55c46d2925cf7c140d8e7.png"
    },
    {
        "id_producto": "1014",
        "barcode": "250777001278",
        "descripcion": "REFINEMENT TYPE LED LAMP 2 CONTACTOS 3 LED AYLIN-ACM-000127",
        "porcentaje_utilidad1": "21.43",
        "imagen": "img\/productos\/408ad45b18d0b03b9ed08395463f3383.png"
    },
    {
        "id_producto": "1016",
        "barcode": "250777001315",
        "descripcion": "5 LED MULTI-FUNCTION CAUTION LIGHT J-RT09 AYLIN-CBL-000131",
        "porcentaje_utilidad1": "57.89",
        "imagen": "img\/productos\/f2abf5650069799f782a80257de8c2fa.jpg"
    },
    {
        "id_producto": "1018",
        "barcode": "6899468995829",
        "descripcion": "ROMPEVIENTO PEQUEÑO SF-320",
        "porcentaje_utilidad1": "47.06",
        "imagen": "img\/productos\/01c6cd5265f1b4fff3b508d34a03b294.jpg"
    },
    {
        "id_producto": "1021",
        "barcode": "2016061102278",
        "descripcion": "LED 12V 102278 TYPE R LED PARA  HALOGENA",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/3955ec82dea5079c592694f199b47500.jpg"
    },
    {
        "id_producto": "1022",
        "barcode": "250777001247",
        "descripcion": "REFINEMENT TYPE LED LAMP 1 CONTACTO 3 LED  AYLIN-ACM-000124",
        "porcentaje_utilidad1": "45.45",
        "imagen": "img\/productos\/5d44109de262896b0a9edd64ffc6a177.jpg"
    },
    {
        "id_producto": "1023",
        "barcode": "250777001254",
        "descripcion": "REFINEMENT TYPE LED LAMP LAGRIMA GRANDE  AYLIN-CBL-000125 AYLIN-ACM-000125",
        "porcentaje_utilidad1": "30.77",
        "imagen": "img\/productos\/a4c0e1eb7f93515ed2fb2142e3b85976.jpg"
    },
    {
        "id_producto": "1034",
        "barcode": "6899468995768",
        "descripcion": "SUJETADOR 123",
        "porcentaje_utilidad1": "33.3",
        "imagen": "img\/productos\/dc3f2a9bb413ed60b0dc277203158dfe.jpg"
    },
    {
        "id_producto": "1041",
        "barcode": "2016061102322",
        "descripcion": "LED 12V 102322 TYPE R H2",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/f56c893c6b0bd84c5e8b3ee687774841.jpg"
    },
    {
        "id_producto": "1044",
        "barcode": "2016061102247",
        "descripcion": "LED 12V 102247 TYPE R H1 3 LED",
        "porcentaje_utilidad1": "30",
        "imagen": "img\/productos\/c3c3f5f4b38dde67db371b8eae66fefb.jpg"
    },
    {
        "id_producto": "1047",
        "barcode": "7501206710043",
        "descripcion": "FOCO LED SUSAN CAJA  6.2W\/SUBO001",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/4e6560fb58f2c2a708afcaf1132abc51.jpg"
    },
    {
        "id_producto": "1048",
        "barcode": "7501206710050",
        "descripcion": "FOCO LED SUSAN 9.5W SUBO002",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/82ca02be88b2b7bae99d9ce362c2aa43.jpg"
    },
    {
        "id_producto": "1049",
        "barcode": "7501206710067",
        "descripcion": "FOCO LED SUSAN CAJA 12W\/SUBO003",
        "porcentaje_utilidad1": "16.8",
        "imagen": "img\/productos\/d86b95ddda347a296e95529d18aa0978.jpg"
    },
    {
        "id_producto": "1050",
        "barcode": "2547896587423",
        "descripcion": "CINTA AISLANTE SUCE001",
        "porcentaje_utilidad1": "85",
        "imagen": "img\/productos\/77f2e3026f4daaccff95d52bbf326420.jpg"
    },
    {
        "id_producto": "1053",
        "barcode": "2332566589391",
        "descripcion": "EXTENSION ELECTRICA BLANCA APOLO 20FT APEA07",
        "porcentaje_utilidad1": "67",
        "imagen": "img\/productos\/a94adcf8f8920aea549a314862c46f9e.jpg"
    },
    {
        "id_producto": "1056",
        "barcode": "2332566589377",
        "descripcion": "EXTENSION ELECTRICA BLANCA APOLO 15FT APEA05",
        "porcentaje_utilidad1": "76",
        "imagen": "img\/productos\/2055a5beb8ad15d080440b355bef713c.jpg"
    },
    {
        "id_producto": "1057",
        "barcode": "2332566589353",
        "descripcion": "EXTENSION ELECTRICA 9FT APOLO APEA03",
        "porcentaje_utilidad1": "40.63",
        "imagen": "img\/productos\/39c93d3bc2409436420c4932a416a5a3.jpg"
    },
    {
        "id_producto": "1058",
        "barcode": "2332566589360",
        "descripcion": "EXTENSION ELECTRICA 12FT APOLO APEA04",
        "porcentaje_utilidad1": "36.99",
        "imagen": "img\/productos\/5d730e143874adf174439d93c2849713.jpg"
    },
    {
        "id_producto": "1059",
        "barcode": "2332566589384",
        "descripcion": "EXTENSION ELECTRICA 18FT APOLO APEA06",
        "porcentaje_utilidad1": "27.77",
        "imagen": ""
    },
    {
        "id_producto": "1060",
        "barcode": "2332566589407",
        "descripcion": "EXTENSION ELECTRICA 6FT ANARANJADO APOLO APEA08",
        "porcentaje_utilidad1": "50",
        "imagen": "img\/productos\/c05e1464a20b2499c986f18ce64cf4cf.jpg"
    },
    {
        "id_producto": "1061",
        "barcode": "2332566589414",
        "descripcion": "EXTENSION ELECTRICA 9FT ANARANJADO APOLO APEA09",
        "porcentaje_utilidad1": "40",
        "imagen": "img\/productos\/5d49e88f2aa2fd7baddc9ee9beec2c7d.jpg"
    },
    {
        "id_producto": "1065",
        "barcode": "2332566589469",
        "descripcion": "EXTENSION ELECTRICA 6FT ANARANJADO CON REGLETA APOLO APEA14",
        "porcentaje_utilidad1": "48.15",
        "imagen": ""
    },
    {
        "id_producto": "1066",
        "barcode": "2332566589476",
        "descripcion": "EXTENSION ELECTRICA 9FT ANARANJADO CON REGLETA APOLO APEA15",
        "porcentaje_utilidad1": "40.63",
        "imagen": "img\/productos\/aa46a094f0b29037d0e33ee89073612a.jpg"
    },
    {
        "id_producto": "1067",
        "barcode": "2332566589483",
        "descripcion": "EXTENSION ELECTRICA 12FT ANARANJADO CON REGLETA APOLO APEA16",
        "porcentaje_utilidad1": "57.89",
        "imagen": "img\/productos\/77f990a181490aabb5acb0b791204084.jpg"
    },
    {
        "id_producto": "1068",
        "barcode": "2332566589490",
        "descripcion": "EXTENSION ELECTRICA 15FT ANARANJADO CON REGLETA APOLO APEA17",
        "porcentaje_utilidad1": "59.09",
        "imagen": "img\/productos\/132e560981b0260adaaccbd48b820a68.jpg"
    },
    {
        "id_producto": "1069",
        "barcode": "2332566589506",
        "descripcion": "EXTENSION ELECTRICA 25FT ANARANJADO CON REGLETA APOLO APEA18",
        "porcentaje_utilidad1": "64",
        "imagen": "img\/productos\/5b82ca14ec1447ae34183c3963d26d91.jpg"
    },
    {
        "id_producto": "1071",
        "barcode": "6949586671089",
        "descripcion": "RASURADORA SAFETY RAZOR AL-877",
        "porcentaje_utilidad1": "42",
        "imagen": "img\/productos\/ebf51e9af0e3a0b10102e79749066645.jpg"
    },
    {
        "id_producto": "1079",
        "barcode": "7453021104449",
        "descripcion": "CORTAUÑAS PONY",
        "porcentaje_utilidad1": "7.89",
        "imagen": "img\/productos\/477f8f5d4d0f81421616163f22f61c89.JPG"
    },
    {
        "id_producto": "1092",
        "barcode": "7865898000470",
        "descripcion": "FOCO OROBAR 12W 800047",
        "porcentaje_utilidad1": "15.38",
        "imagen": "img\/productos\/0642b10e34c80ff639d0d649bf9ffaad.jpg"
    },
    {
        "id_producto": "1094",
        "barcode": "6940350881604",
        "descripcion": "CAUTIN DE 60W TL10362",
        "porcentaje_utilidad1": "2.36",
        "imagen": "img\/productos\/062cb0e6e626cc09655a4a6eb5635180.jpg"
    },
    {
        "id_producto": "1165",
        "barcode": "250777001032",
        "descripcion": "TIRRO CAFE HYSTICK  AYLIN-TIRRO-00103",
        "porcentaje_utilidad1": "28.21",
        "imagen": "img\/productos\/c621e05a2dae5d00f4474d2e987196cb.png"
    },
    {
        "id_producto": "1175",
        "barcode": "7404005970505",
        "descripcion": "FOCO LED APOLO 5W \/CAJA\/APBO001C",
        "porcentaje_utilidad1": "41.67",
        "imagen": ""
    },
    {
        "id_producto": "1176",
        "barcode": "7404005970703",
        "descripcion": "FOCO LED APOLO 7W \/CAJA\/APBO002C",
        "porcentaje_utilidad1": "47.06",
        "imagen": "img\/productos\/feb9f5c6d806136693b5059e8e2ce5ad.jpg"
    },
    {
        "id_producto": "1200",
        "barcode": "7404005970901",
        "descripcion": "FOCO LED APOLO 9W \/CAJA\/APBO003C",
        "porcentaje_utilidad1": "30.68",
        "imagen": "img\/productos\/92deeebe369738e42ddd577dbaed7fe5.jpg"
    },
    {
        "id_producto": "1205",
        "barcode": "8652982835037",
        "descripcion": "TIRA LED 5M AMARILLA\/BLANCA 110V-240V 2835-AC",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/47ab1a0b4a336f2758198682c3b69b23.jpg"
    },
    {
        "id_producto": "1210",
        "barcode": "7506198101237",
        "descripcion": "CANDADO 50MM FORTEK 108304",
        "porcentaje_utilidad1": "20.48",
        "imagen": "img\/productos\/abee7853047252fc65f875ab062f4357.jpg"
    },
    {
        "id_producto": "1221",
        "barcode": "6944031246157",
        "descripcion": "LAMPARA DE FRENTE RECARGABLE LD-4615",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/59fc8f96681027a4fba7a03ddcad6f8b.jpg"
    },
    {
        "id_producto": "1225",
        "barcode": "6944031299931",
        "descripcion": "LAMPARA RECARGABLE LD-9993",
        "porcentaje_utilidad1": "29.31",
        "imagen": "img\/productos\/0ace6c7468e89be9e6e3a2d7a3a42693.jpg"
    },
    {
        "id_producto": "1226",
        "barcode": "6944031291140",
        "descripcion": "LAMPARA RECARGABLE LD-9114",
        "porcentaje_utilidad1": "41.1",
        "imagen": "img\/productos\/6f0e252804d9e501871e2edc9aa2c8aa.jpg"
    },
    {
        "id_producto": "1238",
        "barcode": "868667101049",
        "descripcion": "BATERIA COCO BL-5C ZDRA-01-050",
        "porcentaje_utilidad1": "90",
        "imagen": "img\/productos\/b4496618327238ee0d0642bd5d63301f.jpg"
    },
    {
        "id_producto": "1241",
        "barcode": "250777000561",
        "descripcion": "CONTROL LG PARA DVD 6711R1P089B",
        "porcentaje_utilidad1": "72.41",
        "imagen": "img\/productos\/f7c8fe9491638b24635231bf304c28ab.jpg"
    },
    {
        "id_producto": "1246",
        "barcode": "3216546121506",
        "descripcion": "RADIO GENERAL STAR GS-5700M",
        "porcentaje_utilidad1": "20",
        "imagen": ""
    },
    {
        "id_producto": "1256",
        "barcode": "752754001573",
        "descripcion": "RASURADORA ZORRIK",
        "porcentaje_utilidad1": "14.94",
        "imagen": "img\/productos\/46e2f5ca45de1fa0c6e3a26d4730568d.jpg"
    },
    {
        "id_producto": "1258",
        "barcode": "6913287912048",
        "descripcion": "CARGADOR 2 PIEZAS USB TRAVEL CHARGER SJ02",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/5e4777aa0de4c582698673a699873b25.jpg"
    },
    {
        "id_producto": "1264",
        "barcode": "6560808408193",
        "descripcion": "LAMPARA DE FRENTE SF-558 LI032",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/9b9b61ec0215bbc882e37969ee95f0d6.jpg"
    },
    {
        "id_producto": "1267",
        "barcode": "6942205269902",
        "descripcion": "LAMPARA RECARGABLE YJ-6873R",
        "porcentaje_utilidad1": "60",
        "imagen": "img\/productos\/79be67eb0945c354a1414dd2bbcdc035.jpg"
    },
    {
        "id_producto": "1271",
        "barcode": "9787040509939",
        "descripcion": "CINTA TAPAGOTERA FLASHBAND BLJ-01",
        "porcentaje_utilidad1": "45.83",
        "imagen": "img\/productos\/70d3dc7039df679ea8b38023458118a7.jpg"
    },
    {
        "id_producto": "1275",
        "barcode": "7404005960513",
        "descripcion": "FOCO SUSAN 20W SUAH006",
        "porcentaje_utilidad1": "23",
        "imagen": "img\/productos\/0d6cd15fff97b2f79853fafae4987a07.jpg"
    },
    {
        "id_producto": "1276",
        "barcode": "740617175011",
        "descripcion": "MEMORIA MICRO SD KINGSTON 32GB ORIGINAL",
        "porcentaje_utilidad1": "35.5",
        "imagen": "img\/productos\/090c319b73486646ceba9d8c80b90fa0.jpg"
    },
    {
        "id_producto": "1281",
        "barcode": "864827111004",
        "descripcion": "FOCO DE EMERGENCIA 12W MZYL-11-004",
        "porcentaje_utilidad1": "56.25",
        "imagen": "img\/productos\/75b77f613ee0c8a3a1cfb2566651151c.jpg"
    },
    {
        "id_producto": "1282",
        "barcode": "250777001421",
        "descripcion": "BATERIA LAMPARA POLICIAL",
        "porcentaje_utilidad1": "200",
        "imagen": "img\/productos\/7ed9a111dbdaf257bc4185cdd23817b5.jpg"
    },
    {
        "id_producto": "1286",
        "barcode": "6913287912062",
        "descripcion": "CARGADOR PARA CARRO SJ06",
        "porcentaje_utilidad1": "138.09",
        "imagen": "img\/productos\/065ef820df23881f6054d93d9c715772.jpg"
    },
    {
        "id_producto": "1292",
        "barcode": "861768101050",
        "descripcion": "CONTROL PHILIPS PLASMA PH-17 XR-01-050",
        "porcentaje_utilidad1": "66.67",
        "imagen": "img\/productos\/3c4b4c73eae79fa67f92adbc075f766b.jpg"
    },
    {
        "id_producto": "1302",
        "barcode": "250777001063",
        "descripcion": "ROLLO DE CINTA TEFLON  AYLIN-TIRRO-00106",
        "porcentaje_utilidad1": "75",
        "imagen": "img\/productos\/5a0d0d2e3596889e5bbe94b5f261bb60.jpg"
    },
    {
        "id_producto": "1304",
        "barcode": "740617206395",
        "descripcion": "MEMORIA USB 32GB KINGSTON ORIGINAL",
        "porcentaje_utilidad1": "43.75",
        "imagen": "img\/productos\/88dfe6a4c730f10bdc51b6d651a170ca.jpg"
    },
    {
        "id_producto": "1306",
        "barcode": "250777000509",
        "descripcion": "CADENA PARA PERRO M-5018 AYLIN-CPR-00050",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/6973e64df49ff7454dce93b3e00dc1aa.jpg"
    },
    {
        "id_producto": "1315",
        "barcode": "7501892864259",
        "descripcion": "EXTENSION NARANJA 6M FULGORE FP0068",
        "porcentaje_utilidad1": "19.05",
        "imagen": "img\/productos\/d692fb8e596443344267cf3f6f736c71.jpg"
    },
    {
        "id_producto": "1317",
        "barcode": "7501088401336",
        "descripcion": "AROMA CHICA FRESITA 3 UNIDADES",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/86b9fc1a2e95816c1df56e1b1b230afd.jpg"
    },
    {
        "id_producto": "1319",
        "barcode": "6899468995584",
        "descripcion": "LUZ LED LOVE YOU STAR SF-2433",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/84fbea05e03eb8b082f7066df4c00f08.jpg"
    },
    {
        "id_producto": "1320",
        "barcode": "6899468995577",
        "descripcion": "LUZ LED LOVE YOU STAR SF-2434",
        "porcentaje_utilidad1": "30",
        "imagen": "img\/productos\/31e4b105ce13415c3d4cb7f9fd2825a2.jpg"
    },
    {
        "id_producto": "1329",
        "barcode": "6947551982246",
        "descripcion": "LAMPARA MATA MOSQUITO QL-224",
        "porcentaje_utilidad1": "66.67",
        "imagen": "img\/productos\/0d6266486708950e86386a1a54590e16.jpg"
    },
    {
        "id_producto": "1332",
        "barcode": "7788990003302",
        "descripcion": "BARRA LED HT-282002",
        "porcentaje_utilidad1": "31.25",
        "imagen": "img\/productos\/c8da0dd7ed1c37d5ab2629f0706a757c.jpg"
    },
    {
        "id_producto": "1333",
        "barcode": "6899468995966",
        "descripcion": "PORTA PLACA NEON INDIVIDUAL",
        "porcentaje_utilidad1": "46",
        "imagen": ""
    },
    {
        "id_producto": "1339",
        "barcode": "7693829382834",
        "descripcion": "LUZ PARA TABLERO G-02-508",
        "porcentaje_utilidad1": "20",
        "imagen": "img\/productos\/dc5623a0304cfedc6e5225e3ae699e48.jpg"
    },
    {
        "id_producto": "1350",
        "barcode": "6899468995591",
        "descripcion": "PITO DE RETROCESO HT-1103",
        "porcentaje_utilidad1": "50",
        "imagen": "img\/productos\/cc216fc3411126d059a15ed435f0da7a.jpg"
    },
    {
        "id_producto": "1355",
        "barcode": "250777000950",
        "descripcion": "CARGADOR V3 CELL HOUSE CAJA",
        "porcentaje_utilidad1": "38.89",
        "imagen": "img\/productos\/b1de91bc5533397ff8536fce922f650b.jpg"
    },
    {
        "id_producto": "1375",
        "barcode": "9003175234264",
        "descripcion": "PIEDRA LIMA DUCAS",
        "porcentaje_utilidad1": "50",
        "imagen": "img\/productos\/359c7c98263796a8e94846065b8634e0.jpg"
    },
    {
        "id_producto": "1383",
        "barcode": "69211700760275",
        "descripcion": "LAMPARA RECARGABLE LL-6027",
        "porcentaje_utilidad1": "38.89",
        "imagen": "img\/productos\/31dde1194d850e6327837678580abb5d.jpg"
    },
    {
        "id_producto": "1389",
        "barcode": "7465954424020",
        "descripcion": "MAQUINA PARA CORTAR PELO CHALLENGER",
        "porcentaje_utilidad1": "30",
        "imagen": "img\/productos\/4bd89025fb7f6521e8517f37b401f1dd.jpg"
    },
    {
        "id_producto": "1390",
        "barcode": "50134056584405",
        "descripcion": "GILLETE ZORRIK",
        "porcentaje_utilidad1": "20.69",
        "imagen": "img\/productos\/d9100ce4f7fcc00bbee2a072a1382f7e.jpg"
    },
    {
        "id_producto": "1391",
        "barcode": "861949701368",
        "descripcion": "AUDIFONO JBL",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/994b3cf50f7fb8160e63ffc1499acf5e.jpg"
    },
    {
        "id_producto": "1395",
        "barcode": "7404005961503",
        "descripcion": "FOCO LED APOLO DE 50W  APGA050",
        "porcentaje_utilidad1": "38.46",
        "imagen": "img\/productos\/1194bcb35eff91eadc39d30b9cefb069.jpg"
    },
    {
        "id_producto": "1398",
        "barcode": "7501206670354",
        "descripcion": "FOCO APOLO DE 35W APAH008",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/4d2a28db0c111ce1feea0a32b354e812.jpg"
    },
    {
        "id_producto": "1400",
        "barcode": "8601179600088",
        "descripcion": "CARGADOR V8 SAMSUNG CAJA YS-01-008",
        "porcentaje_utilidad1": "66.67",
        "imagen": "img\/productos\/b866a9ab751bf8264c986ccd4d78d675.jpg"
    },
    {
        "id_producto": "1402",
        "barcode": "861768101027",
        "descripcion": "CONTROL DVD PHILIPS XR-01-027",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/ba9c3d6a4d3037da56aad32b571e4338.jpg"
    },
    {
        "id_producto": "1406",
        "barcode": "7401005496387",
        "descripcion": "BRILLO LABIAL EVITA \/10 UNIDADES\/",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/580e45a814b1301268f31bc9cb20c2e2.jpg"
    },
    {
        "id_producto": "1413",
        "barcode": "6940000080524",
        "descripcion": "REFLECTOR SUSAN 15W SUPAR001",
        "porcentaje_utilidad1": "17.24",
        "imagen": "img\/productos\/4e177b9e667ffc6e087c9469a3fe7369.jpg"
    },
    {
        "id_producto": "1415",
        "barcode": "861949701308",
        "descripcion": "CARGADOR SAMSUNG 3 PIEZAS \/BOLSA\/",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/5f43306e3b4b1a8a59032ec6e73b687c.jpg"
    },
    {
        "id_producto": "1416",
        "barcode": "250777000783",
        "descripcion": "CARGADOR SAMSUNG 2 PIEZAS \/BOLSA\/",
        "porcentaje_utilidad1": "42.85",
        "imagen": "img\/productos\/c57440c536988c3822125d34213ad706.jpg"
    },
    {
        "id_producto": "1421",
        "barcode": "6950616300350",
        "descripcion": "HISOPO CHICO",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/2b1259fdbf5c7bd934c7f7401cd657a3.jpg"
    },
    {
        "id_producto": "1428",
        "barcode": "7404005970116",
        "descripcion": "FOCO DE EMERGENCIA 11W APOLO APBE004",
        "porcentaje_utilidad1": "29.63",
        "imagen": "img\/productos\/0d0805c37aee96bc8405d3f7d08981b5.jpg"
    },
    {
        "id_producto": "1429",
        "barcode": "2332566589513",
        "descripcion": "REGLETA APOLO APEA01",
        "porcentaje_utilidad1": "32.14",
        "imagen": "img\/productos\/0574cc4dafb30b3aa6654e2681327f3c.jpg"
    },
    {
        "id_producto": "1430",
        "barcode": "2332566589421",
        "descripcion": "EXTENSION ELECTRICA 12FT ANARANJADO APOLO APEA10",
        "porcentaje_utilidad1": "56.25",
        "imagen": "img\/productos\/47e84b8956bce82187b7d155a6c34b67.jpg"
    },
    {
        "id_producto": "1431",
        "barcode": "7404005963217",
        "descripcion": "FOCO APOLO LED CON SENSOR 9W APES001",
        "porcentaje_utilidad1": "40",
        "imagen": "img\/productos\/3de1ba8ff95583d4203a7d057757777e.jpg"
    },
    {
        "id_producto": "1432",
        "barcode": "7404005961305",
        "descripcion": "FOCO LED APOLO DE 30W APGA030",
        "porcentaje_utilidad1": "16.67",
        "imagen": "img\/productos\/eae71bcff9ca6ba1875a6aeb49343e91.jpg"
    },
    {
        "id_producto": "1433",
        "barcode": "7404005961404",
        "descripcion": "FOCO LED APOLO CAJA 40W 85V\/265V APGA040",
        "porcentaje_utilidad1": "28.57",
        "imagen": "img\/productos\/f99acf1ec825c0717aaad248b5f2010c.jpg"
    },
    {
        "id_producto": "1434",
        "barcode": "7404005960223",
        "descripcion": "FOCO APOLO 20W ESPIRAL APAH-006",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/3a8cffd93080fce01cf45a40c3dda330.jpg"
    },
    {
        "id_producto": "1436",
        "barcode": "2016051902208",
        "descripcion": "HALOGENA PARA VEHICULO HY-3017",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/4943ae7ff333858f6ba0ce9d705ece99.jpg"
    },
    {
        "id_producto": "1440",
        "barcode": "2017051100427",
        "descripcion": "LUZ DE TAXI GRANDE HR-1907T",
        "porcentaje_utilidad1": "31.42",
        "imagen": "img\/productos\/03867578353f01ae98fdb0bd09a7508b.png"
    },
    {
        "id_producto": "1441",
        "barcode": "2017051100410",
        "descripcion": "LUZ DE TAXI PEQUEÑA HR-1307T",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/61a9c7ee3dbce15b07e43b74ac6220d1.png"
    },
    {
        "id_producto": "1442",
        "barcode": "2017070400133",
        "descripcion": "FAROL DE MOTO MTCD0085",
        "porcentaje_utilidad1": "37.5",
        "imagen": "img\/productos\/e7090c8c56010719a5af5eea8bbe13ef.jpg"
    },
    {
        "id_producto": "1443",
        "barcode": "2017070400171",
        "descripcion": "FAROL DE MOTO MTCD0005A",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/384c39a07c91c37998c3c885d3c0fe48.jpg"
    },
    {
        "id_producto": "1444",
        "barcode": "2017070400256",
        "descripcion": "LUZ LED MOTO MTCD0080",
        "porcentaje_utilidad1": "0",
        "imagen": "img\/productos\/0b54718a3ea933cfb53022f100df92d3.jpg"
    },
    {
        "id_producto": "1445",
        "barcode": "2017070400157",
        "descripcion": "OJO DE ANGELTRANSFORMER L-63",
        "porcentaje_utilidad1": "26.5",
        "imagen": "img\/productos\/81322870b4c2c083969f493f32067196.jpg"
    },
    {
        "id_producto": "1446",
        "barcode": "7453073902628",
        "descripcion": "TIJERA DOBERMAN GRANDE",
        "porcentaje_utilidad1": "32",
        "imagen": "img\/productos\/9928ea79a653ccc23d053a380a80e439.jpg"
    },
    {
        "id_producto": "1449",
        "barcode": "2017051100878",
        "descripcion": "ANTENA PARA CARRO T-03016",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/0d7b3e2b68ba75683956a05e4b7ee9fc.jpg"
    },
    {
        "id_producto": "1450",
        "barcode": "2017072200120",
        "descripcion": "OJO DE GATO LANZHAO",
        "porcentaje_utilidad1": "32.35",
        "imagen": "img\/productos\/e70a7a976ac09c1adc31c8935770ef39.jpg"
    },
    {
        "id_producto": "1451",
        "barcode": "2017072200144",
        "descripcion": "TORNILLO TIPO OJO DC-12V WHITE",
        "porcentaje_utilidad1": "40",
        "imagen": "img\/productos\/2f6dcd7f615708cf1d70a29186fb43a7.jpg"
    },
    {
        "id_producto": "1452",
        "barcode": "2017051100861",
        "descripcion": "ANTENA PARA CARRO TV-RADIO YN-079",
        "porcentaje_utilidad1": "32.81",
        "imagen": "img\/productos\/104319ef27fe5e869ef159a1d089cad5.jpg"
    },
    {
        "id_producto": "1453",
        "barcode": "2016120800053",
        "descripcion": "LODERA MARCA ELEGANT",
        "porcentaje_utilidad1": "60",
        "imagen": "img\/productos\/65ad9f85bafd54e4b35d6f4ccd59ba07.jpg"
    },
    {
        "id_producto": "1454",
        "barcode": "2017072200359",
        "descripcion": "PATA PARA MOTO",
        "porcentaje_utilidad1": "21.7",
        "imagen": "img\/productos\/895850a1510492dfec8fd30ca2e8e538.jpg"
    },
    {
        "id_producto": "1455",
        "barcode": "2017072200298",
        "descripcion": "ALZA RIDE IT",
        "porcentaje_utilidad1": "78.57",
        "imagen": "img\/productos\/38cb80eaa69f4600fceb5922012ee7eb.jpg"
    },
    {
        "id_producto": "1456",
        "barcode": "2017072200458",
        "descripcion": "MANECILLA METALICA RECTA",
        "porcentaje_utilidad1": "25",
        "imagen": "img\/productos\/ea1c84f0b6834ee812264ca2e113c92f.jpg"
    },
    {
        "id_producto": "1457",
        "barcode": "2017051100151",
        "descripcion": "ANTENA PEQUEÑA METALICA PASSWORD JDM",
        "porcentaje_utilidad1": "42.86",
        "imagen": "img\/productos\/8a70cc07d2eb90bc160ebd059fb2142b.jpg"
    },
    {
        "id_producto": "1460",
        "barcode": "6980454000013",
        "descripcion": "LUZ NAVIDEÑA APOLO 9M BLANCA GED-9M-01",
        "porcentaje_utilidad1": "16.67",
        "imagen": ""
    },
    {
        "id_producto": "1473",
        "barcode": "867040901004",
        "descripcion": "RADIO COCO QZZS-01-004",
        "porcentaje_utilidad1": "32.07",
        "imagen": "img\/productos\/71c9ac55909c0c4585f182cffae8b5b8.jpg"
    },
    {
        "id_producto": "1477",
        "barcode": "6955456671868",
        "descripcion": "LAMPARA RECARGABLE YH-186-2",
        "porcentaje_utilidad1": "35.87",
        "imagen": "img\/productos\/395cc54ee8b773e6b4b3c5ad374364b0.jpg"
    },
    {
        "id_producto": "1482",
        "barcode": "6904563110258",
        "descripcion": "LAMPARA DE ESCRITORIO XY-0416 LI025",
        "porcentaje_utilidad1": "92",
        "imagen": "img\/productos\/7a01011d43eecf2d1a150af41653b552.jpg"
    },
    {
        "id_producto": "1485",
        "barcode": "7866681716981",
        "descripcion": "LAMPARA DE BATERIA JPP-169\/GG-169",
        "porcentaje_utilidad1": "44.23",
        "imagen": "img\/productos\/0427821272356843770ab7ffc9277cba.jpg"
    },
    {
        "id_producto": "1490",
        "barcode": "6944031229068",
        "descripcion": "LAMPARA RECARGABLE SULI020",
        "porcentaje_utilidad1": "30.43",
        "imagen": "img\/productos\/9b273c1f39a164986305cd828a3aeacd.jpg"
    },
    {
        "id_producto": "1491",
        "barcode": "7404005960988",
        "descripcion": "LAMPARA RECARGABLE APLI005",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/1b0ce3939e79b1e23019886d123819f1.jpg"
    },
    {
        "id_producto": "1492",
        "barcode": "6904563110241",
        "descripcion": "LAMPARA DE FRENTE GG-228D LI024",
        "porcentaje_utilidad1": "45.83",
        "imagen": "img\/productos\/0ce27a6717504686961bfb8003fc8530.jpg"
    },
    {
        "id_producto": "1493",
        "barcode": "7453021104364",
        "descripcion": "CORTAUÑAS PONY PEQUEÑO",
        "porcentaje_utilidad1": "33.33",
        "imagen": "img\/productos\/f68f640ab55612ebdc27adaaa6408689.jpg"
    },
    {
        "id_producto": "1494",
        "barcode": "6942205269940",
        "descripcion": "LAMPARA RECARGABLE CANDELA YJ-6876 LI035",
        "porcentaje_utilidad1": "56.25",
        "imagen": "img\/productos\/91c3f77e31896685667528a68a29fba4.jpg"
    },
    {
        "id_producto": "1495",
        "barcode": "740617274646",
        "descripcion": "MEMORIA MICRO SD 16GB KINGSTON ORIGINAL",
        "porcentaje_utilidad1": "131.88",
        "imagen": "img\/productos\/79d4a3011b593a25c6230a130b574531.jpg"
    },
    {
        "id_producto": "1499",
        "barcode": "7502239094711",
        "descripcion": "CALENTADOR DE AGUA 900W MAXTOOL",
        "porcentaje_utilidad1": "29.03",
        "imagen": "img\/productos\/a01edbd7998f5e5e48c8bf014f538ce2.jpg"
    },
    {
        "id_producto": "2663",
        "barcode": "123",
        "descripcion": "producto magico",
        "porcentaje_utilidad1": "394",
        "imagen": "\/c\/usersdsd_"
    }
];

let stocks = [{
        "id_stock": "3",
        "id_producto": "55",
        "existencia": "6",
        "costo_promedio": "0.9945"
    },
    {
        "id_stock": "4",
        "id_producto": "65",
        "existencia": "55",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "6",
        "id_producto": "103",
        "existencia": "2",
        "costo_promedio": "0.9009"
    },
    {
        "id_stock": "8",
        "id_producto": "114",
        "existencia": "1921",
        "costo_promedio": "0.1872"
    },
    {
        "id_stock": "9",
        "id_producto": "115",
        "existencia": "279",
        "costo_promedio": "0.1989"
    },
    {
        "id_stock": "12",
        "id_producto": "120",
        "existencia": "23.25",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "14",
        "id_producto": "135",
        "existencia": "1",
        "costo_promedio": "2.1645"
    },
    {
        "id_stock": "15",
        "id_producto": "148",
        "existencia": "2635",
        "costo_promedio": "0.5382"
    },
    {
        "id_stock": "16",
        "id_producto": "113",
        "existencia": "205033",
        "costo_promedio": "0.0468"
    },
    {
        "id_stock": "17",
        "id_producto": "155",
        "existencia": "96",
        "costo_promedio": "0.8892"
    },
    {
        "id_stock": "18",
        "id_producto": "156",
        "existencia": "1",
        "costo_promedio": "1.5795"
    },
    {
        "id_stock": "19",
        "id_producto": "157",
        "existencia": "10",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "20",
        "id_producto": "158",
        "existencia": "52",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "21",
        "id_producto": "159",
        "existencia": "86",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "22",
        "id_producto": "160",
        "existencia": "278",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "23",
        "id_producto": "161",
        "existencia": "117",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "24",
        "id_producto": "162",
        "existencia": "47",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "25",
        "id_producto": "163",
        "existencia": "12",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "26",
        "id_producto": "408",
        "existencia": "32",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "27",
        "id_producto": "164",
        "existencia": "91",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "28",
        "id_producto": "167",
        "existencia": "1",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "29",
        "id_producto": "184",
        "existencia": "120",
        "costo_promedio": "3.51"
    },
    {
        "id_stock": "30",
        "id_producto": "179",
        "existencia": "11",
        "costo_promedio": "5.85"
    },
    {
        "id_stock": "31",
        "id_producto": "190",
        "existencia": "429",
        "costo_promedio": "0.2925"
    },
    {
        "id_stock": "32",
        "id_producto": "191",
        "existencia": "21",
        "costo_promedio": "0.2574"
    },
    {
        "id_stock": "34",
        "id_producto": "196",
        "existencia": "33",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "36",
        "id_producto": "140",
        "existencia": "111",
        "costo_promedio": "1.989"
    },
    {
        "id_stock": "37",
        "id_producto": "200",
        "existencia": "10",
        "costo_promedio": "1.0764"
    },
    {
        "id_stock": "39",
        "id_producto": "97",
        "existencia": "24",
        "costo_promedio": "17.55"
    },
    {
        "id_stock": "40",
        "id_producto": "75",
        "existencia": "5",
        "costo_promedio": "22.23"
    },
    {
        "id_stock": "41",
        "id_producto": "202",
        "existencia": "1.5",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "42",
        "id_producto": "203",
        "existencia": "9",
        "costo_promedio": "2.0007"
    },
    {
        "id_stock": "43",
        "id_producto": "216",
        "existencia": "243",
        "costo_promedio": "0.117"
    },
    {
        "id_stock": "44",
        "id_producto": "219",
        "existencia": "351",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "45",
        "id_producto": "221",
        "existencia": "83",
        "costo_promedio": "0.5616"
    },
    {
        "id_stock": "47",
        "id_producto": "229",
        "existencia": "3",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "48",
        "id_producto": "231",
        "existencia": "122",
        "costo_promedio": "0.9945"
    },
    {
        "id_stock": "49",
        "id_producto": "232",
        "existencia": "154",
        "costo_promedio": "0.6552"
    },
    {
        "id_stock": "50",
        "id_producto": "233",
        "existencia": "405",
        "costo_promedio": "0.4329"
    },
    {
        "id_stock": "51",
        "id_producto": "234",
        "existencia": "13",
        "costo_promedio": "1.1232"
    },
    {
        "id_stock": "52",
        "id_producto": "236",
        "existencia": "3",
        "costo_promedio": "18.72"
    },
    {
        "id_stock": "53",
        "id_producto": "238",
        "existencia": "41",
        "costo_promedio": "4.1184"
    },
    {
        "id_stock": "54",
        "id_producto": "239",
        "existencia": "32",
        "costo_promedio": "1.3455"
    },
    {
        "id_stock": "55",
        "id_producto": "240",
        "existencia": "5",
        "costo_promedio": "1.6731"
    },
    {
        "id_stock": "56",
        "id_producto": "242",
        "existencia": "1",
        "costo_promedio": "1.2402"
    },
    {
        "id_stock": "59",
        "id_producto": "247",
        "existencia": "138",
        "costo_promedio": "0.8424"
    },
    {
        "id_stock": "60",
        "id_producto": "248",
        "existencia": "1",
        "costo_promedio": "3.8025"
    },
    {
        "id_stock": "61",
        "id_producto": "249",
        "existencia": "8642.34",
        "costo_promedio": "0.6318"
    },
    {
        "id_stock": "62",
        "id_producto": "250",
        "existencia": "9782",
        "costo_promedio": "0.9711"
    },
    {
        "id_stock": "63",
        "id_producto": "251",
        "existencia": "1",
        "costo_promedio": "1.989"
    },
    {
        "id_stock": "65",
        "id_producto": "253",
        "existencia": "13",
        "costo_promedio": "1.6965"
    },
    {
        "id_stock": "66",
        "id_producto": "254",
        "existencia": "8",
        "costo_promedio": "1.755"
    },
    {
        "id_stock": "67",
        "id_producto": "255",
        "existencia": "2",
        "costo_promedio": "2.574"
    },
    {
        "id_stock": "70",
        "id_producto": "409",
        "existencia": "31",
        "costo_promedio": "2.223"
    },
    {
        "id_stock": "72",
        "id_producto": "260",
        "existencia": "71",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "73",
        "id_producto": "261",
        "existencia": "1",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "74",
        "id_producto": "264",
        "existencia": "72",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "75",
        "id_producto": "168",
        "existencia": "2",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "76",
        "id_producto": "273",
        "existencia": "265",
        "costo_promedio": "2.7378"
    },
    {
        "id_stock": "77",
        "id_producto": "269",
        "existencia": "23",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "78",
        "id_producto": "270",
        "existencia": "22",
        "costo_promedio": "0.0585"
    },
    {
        "id_stock": "79",
        "id_producto": "266",
        "existencia": "2797",
        "costo_promedio": "0.0585"
    },
    {
        "id_stock": "80",
        "id_producto": "265",
        "existencia": "73",
        "costo_promedio": "0.0585"
    },
    {
        "id_stock": "81",
        "id_producto": "267",
        "existencia": "25",
        "costo_promedio": "0.0585"
    },
    {
        "id_stock": "84",
        "id_producto": "337",
        "existencia": "7",
        "costo_promedio": "0.0351"
    },
    {
        "id_stock": "86",
        "id_producto": "338",
        "existencia": "80",
        "costo_promedio": "0.1521"
    },
    {
        "id_stock": "87",
        "id_producto": "282",
        "existencia": "582",
        "costo_promedio": "0.9711"
    },
    {
        "id_stock": "89",
        "id_producto": "29",
        "existencia": "19",
        "costo_promedio": "1.2636"
    },
    {
        "id_stock": "92",
        "id_producto": "300",
        "existencia": "102",
        "costo_promedio": "2.7144"
    },
    {
        "id_stock": "93",
        "id_producto": "344",
        "existencia": "2",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "94",
        "id_producto": "301",
        "existencia": "126",
        "costo_promedio": "3.276"
    },
    {
        "id_stock": "95",
        "id_producto": "343",
        "existencia": "20",
        "costo_promedio": "0.0468"
    },
    {
        "id_stock": "96",
        "id_producto": "342",
        "existencia": "18",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "97",
        "id_producto": "27",
        "existencia": "55",
        "costo_promedio": "1.3455"
    },
    {
        "id_stock": "99",
        "id_producto": "411",
        "existencia": "4",
        "costo_promedio": "3.8025"
    },
    {
        "id_stock": "100",
        "id_producto": "417",
        "existencia": "3",
        "costo_promedio": "2.34"
    },
    {
        "id_stock": "102",
        "id_producto": "419",
        "existencia": "1",
        "costo_promedio": "5.148"
    },
    {
        "id_stock": "104",
        "id_producto": "421",
        "existencia": "5",
        "costo_promedio": "15.21"
    },
    {
        "id_stock": "106",
        "id_producto": "305",
        "existencia": "1",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "108",
        "id_producto": "314",
        "existencia": "2332",
        "costo_promedio": "0.5616"
    },
    {
        "id_stock": "109",
        "id_producto": "324",
        "existencia": "110.2",
        "costo_promedio": "2.925"
    },
    {
        "id_stock": "110",
        "id_producto": "325",
        "existencia": "177",
        "costo_promedio": "1.638"
    },
    {
        "id_stock": "111",
        "id_producto": "327",
        "existencia": "7",
        "costo_promedio": "11.115"
    },
    {
        "id_stock": "112",
        "id_producto": "329",
        "existencia": "1",
        "costo_promedio": "0.351"
    },
    {
        "id_stock": "113",
        "id_producto": "332",
        "existencia": "5",
        "costo_promedio": "0.1872"
    },
    {
        "id_stock": "114",
        "id_producto": "333",
        "existencia": "341",
        "costo_promedio": "4.0365"
    },
    {
        "id_stock": "115",
        "id_producto": "335",
        "existencia": "52",
        "costo_promedio": "5.265"
    },
    {
        "id_stock": "116",
        "id_producto": "336",
        "existencia": "5",
        "costo_promedio": "7.1604"
    },
    {
        "id_stock": "117",
        "id_producto": "244",
        "existencia": "79.5",
        "costo_promedio": "7.4295"
    },
    {
        "id_stock": "118",
        "id_producto": "435",
        "existencia": "120",
        "costo_promedio": "1.053"
    },
    {
        "id_stock": "120",
        "id_producto": "436",
        "existencia": "2",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "122",
        "id_producto": "346",
        "existencia": "80",
        "costo_promedio": "0.819"
    },
    {
        "id_stock": "124",
        "id_producto": "349",
        "existencia": "260",
        "costo_promedio": "0.5031"
    },
    {
        "id_stock": "125",
        "id_producto": "298",
        "existencia": "2",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "126",
        "id_producto": "412",
        "existencia": "215",
        "costo_promedio": "2.34"
    },
    {
        "id_stock": "127",
        "id_producto": "413",
        "existencia": "86",
        "costo_promedio": "0.6201"
    },
    {
        "id_stock": "128",
        "id_producto": "414",
        "existencia": "239",
        "costo_promedio": "0.6201"
    },
    {
        "id_stock": "129",
        "id_producto": "415",
        "existencia": "101",
        "costo_promedio": "0.6786"
    },
    {
        "id_stock": "130",
        "id_producto": "426",
        "existencia": "45",
        "costo_promedio": "0.2691"
    },
    {
        "id_stock": "131",
        "id_producto": "427",
        "existencia": "1",
        "costo_promedio": "8.19"
    },
    {
        "id_stock": "132",
        "id_producto": "428",
        "existencia": "8",
        "costo_promedio": "0.2574"
    },
    {
        "id_stock": "133",
        "id_producto": "429",
        "existencia": "19",
        "costo_promedio": "1.2285"
    },
    {
        "id_stock": "134",
        "id_producto": "430",
        "existencia": "26",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "135",
        "id_producto": "50",
        "existencia": "84",
        "costo_promedio": "1.2285"
    },
    {
        "id_stock": "136",
        "id_producto": "51",
        "existencia": "25",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "138",
        "id_producto": "431",
        "existencia": "742",
        "costo_promedio": "0.9945"
    },
    {
        "id_stock": "139",
        "id_producto": "437",
        "existencia": "206",
        "costo_promedio": "1.1934"
    },
    {
        "id_stock": "140",
        "id_producto": "432",
        "existencia": "1573",
        "costo_promedio": "0.8307"
    },
    {
        "id_stock": "141",
        "id_producto": "38",
        "existencia": "1031",
        "costo_promedio": "0.9477"
    },
    {
        "id_stock": "142",
        "id_producto": "39",
        "existencia": "64",
        "costo_promedio": "1.053"
    },
    {
        "id_stock": "143",
        "id_producto": "433",
        "existencia": "5",
        "costo_promedio": "1.2285"
    },
    {
        "id_stock": "145",
        "id_producto": "227",
        "existencia": "16",
        "costo_promedio": "1.0062"
    },
    {
        "id_stock": "148",
        "id_producto": "100",
        "existencia": "8",
        "costo_promedio": "6.786"
    },
    {
        "id_stock": "149",
        "id_producto": "16",
        "existencia": "54",
        "costo_promedio": "0.8892"
    },
    {
        "id_stock": "150",
        "id_producto": "438",
        "existencia": "86",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "152",
        "id_producto": "440",
        "existencia": "105",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "153",
        "id_producto": "441",
        "existencia": "14",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "159",
        "id_producto": "17",
        "existencia": "650",
        "costo_promedio": "0.6435"
    },
    {
        "id_stock": "160",
        "id_producto": "15",
        "existencia": "60",
        "costo_promedio": "1.0413"
    },
    {
        "id_stock": "161",
        "id_producto": "18",
        "existencia": "6",
        "costo_promedio": "2.925"
    },
    {
        "id_stock": "163",
        "id_producto": "58",
        "existencia": "19",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "165",
        "id_producto": "61",
        "existencia": "19",
        "costo_promedio": "2.457"
    },
    {
        "id_stock": "166",
        "id_producto": "9",
        "existencia": "22",
        "costo_promedio": "7.4295"
    },
    {
        "id_stock": "167",
        "id_producto": "66",
        "existencia": "154",
        "costo_promedio": "0.6201"
    },
    {
        "id_stock": "168",
        "id_producto": "67",
        "existencia": "21",
        "costo_promedio": "0.6201"
    },
    {
        "id_stock": "169",
        "id_producto": "192",
        "existencia": "29",
        "costo_promedio": "0.5967"
    },
    {
        "id_stock": "170",
        "id_producto": "172",
        "existencia": "537",
        "costo_promedio": "0.702"
    },
    {
        "id_stock": "171",
        "id_producto": "85",
        "existencia": "159",
        "costo_promedio": "1.053"
    },
    {
        "id_stock": "172",
        "id_producto": "106",
        "existencia": "5",
        "costo_promedio": "9.36"
    },
    {
        "id_stock": "173",
        "id_producto": "313",
        "existencia": "115",
        "costo_promedio": "0.3159"
    },
    {
        "id_stock": "174",
        "id_producto": "186",
        "existencia": "7",
        "costo_promedio": "0.702"
    },
    {
        "id_stock": "175",
        "id_producto": "63",
        "existencia": "8",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "176",
        "id_producto": "151",
        "existencia": "486",
        "costo_promedio": "1.4274"
    },
    {
        "id_stock": "178",
        "id_producto": "224",
        "existencia": "4",
        "costo_promedio": "3.51"
    },
    {
        "id_stock": "179",
        "id_producto": "228",
        "existencia": "16.5",
        "costo_promedio": "3.10635"
    },
    {
        "id_stock": "180",
        "id_producto": "230",
        "existencia": "10",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "181",
        "id_producto": "449",
        "existencia": "1",
        "costo_promedio": "1.1466"
    },
    {
        "id_stock": "182",
        "id_producto": "307",
        "existencia": "42",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "185",
        "id_producto": "309",
        "existencia": "13",
        "costo_promedio": "2.5389"
    },
    {
        "id_stock": "187",
        "id_producto": "187",
        "existencia": "949",
        "costo_promedio": "1.1466"
    },
    {
        "id_stock": "188",
        "id_producto": "452",
        "existencia": "963",
        "costo_promedio": "1.1466"
    },
    {
        "id_stock": "189",
        "id_producto": "317",
        "existencia": "3",
        "costo_promedio": "4.446"
    },
    {
        "id_stock": "191",
        "id_producto": "322",
        "existencia": "34",
        "costo_promedio": "2.9133"
    },
    {
        "id_stock": "192",
        "id_producto": "454",
        "existencia": "1",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "193",
        "id_producto": "326",
        "existencia": "159",
        "costo_promedio": "0.1404"
    },
    {
        "id_stock": "194",
        "id_producto": "334",
        "existencia": "260",
        "costo_promedio": "0.5265"
    },
    {
        "id_stock": "195",
        "id_producto": "455",
        "existencia": "5",
        "costo_promedio": "1.755"
    },
    {
        "id_stock": "196",
        "id_producto": "347",
        "existencia": "3",
        "costo_promedio": "4.68"
    },
    {
        "id_stock": "197",
        "id_producto": "173",
        "existencia": "12",
        "costo_promedio": "2.34"
    },
    {
        "id_stock": "198",
        "id_producto": "311",
        "existencia": "517",
        "costo_promedio": "0.7839"
    },
    {
        "id_stock": "199",
        "id_producto": "153",
        "existencia": "336",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "200",
        "id_producto": "32",
        "existencia": "86",
        "costo_promedio": "1.0062"
    },
    {
        "id_stock": "201",
        "id_producto": "31",
        "existencia": "153",
        "costo_promedio": "1.3455"
    },
    {
        "id_stock": "202",
        "id_producto": "457",
        "existencia": "8",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "203",
        "id_producto": "323",
        "existencia": "714",
        "costo_promedio": "1.2285"
    },
    {
        "id_stock": "205",
        "id_producto": "3",
        "existencia": "66",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "206",
        "id_producto": "1",
        "existencia": "22946",
        "costo_promedio": "0.0468"
    },
    {
        "id_stock": "207",
        "id_producto": "64",
        "existencia": "67",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "208",
        "id_producto": "117",
        "existencia": "1007",
        "costo_promedio": "1.872"
    },
    {
        "id_stock": "209",
        "id_producto": "116",
        "existencia": "995",
        "costo_promedio": "1.872"
    },
    {
        "id_stock": "210",
        "id_producto": "136",
        "existencia": "18",
        "costo_promedio": "4.797"
    },
    {
        "id_stock": "215",
        "id_producto": "150",
        "existencia": "611",
        "costo_promedio": "0.6318"
    },
    {
        "id_stock": "216",
        "id_producto": "131",
        "existencia": "16",
        "costo_promedio": "1.9539"
    },
    {
        "id_stock": "217",
        "id_producto": "132",
        "existencia": "4",
        "costo_promedio": "2.0592"
    },
    {
        "id_stock": "218",
        "id_producto": "133",
        "existencia": "7",
        "costo_promedio": "2.0592"
    },
    {
        "id_stock": "219",
        "id_producto": "138",
        "existencia": "79",
        "costo_promedio": "2.0358"
    },
    {
        "id_stock": "220",
        "id_producto": "28",
        "existencia": "144",
        "costo_promedio": "1.2636"
    },
    {
        "id_stock": "221",
        "id_producto": "24",
        "existencia": "6",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "222",
        "id_producto": "310",
        "existencia": "149",
        "costo_promedio": "1.989"
    },
    {
        "id_stock": "223",
        "id_producto": "33",
        "existencia": "1034",
        "costo_promedio": "1.3455"
    },
    {
        "id_stock": "224",
        "id_producto": "30",
        "existencia": "243",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "225",
        "id_producto": "26",
        "existencia": "91",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "227",
        "id_producto": "183",
        "existencia": "2.5",
        "costo_promedio": "4.095"
    },
    {
        "id_stock": "228",
        "id_producto": "34",
        "existencia": "67",
        "costo_promedio": "1.3455"
    },
    {
        "id_stock": "229",
        "id_producto": "302",
        "existencia": "10",
        "costo_promedio": "3.4515"
    },
    {
        "id_stock": "230",
        "id_producto": "303",
        "existencia": "125.5",
        "costo_promedio": "2.1177"
    },
    {
        "id_stock": "231",
        "id_producto": "281",
        "existencia": "32",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "233",
        "id_producto": "73",
        "existencia": "20.75",
        "costo_promedio": "0.6201"
    },
    {
        "id_stock": "235",
        "id_producto": "48",
        "existencia": "721",
        "costo_promedio": "1.287"
    },
    {
        "id_stock": "237",
        "id_producto": "306",
        "existencia": "14",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "238",
        "id_producto": "278",
        "existencia": "12",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "239",
        "id_producto": "280",
        "existencia": "61",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "240",
        "id_producto": "276",
        "existencia": "8",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "241",
        "id_producto": "277",
        "existencia": "17",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "242",
        "id_producto": "46",
        "existencia": "1",
        "costo_promedio": "1.638"
    },
    {
        "id_stock": "243",
        "id_producto": "47",
        "existencia": "477",
        "costo_promedio": "1.755"
    },
    {
        "id_stock": "244",
        "id_producto": "201",
        "existencia": "470",
        "costo_promedio": "0.4446"
    },
    {
        "id_stock": "245",
        "id_producto": "44",
        "existencia": "80",
        "costo_promedio": "3.042"
    },
    {
        "id_stock": "246",
        "id_producto": "43",
        "existencia": "2",
        "costo_promedio": "8.775"
    },
    {
        "id_stock": "247",
        "id_producto": "178",
        "existencia": "3",
        "costo_promedio": "0.3393"
    },
    {
        "id_stock": "248",
        "id_producto": "42",
        "existencia": "28",
        "costo_promedio": "8.6931"
    },
    {
        "id_stock": "249",
        "id_producto": "174",
        "existencia": "7",
        "costo_promedio": "0.351"
    },
    {
        "id_stock": "250",
        "id_producto": "175",
        "existencia": "454",
        "costo_promedio": "0.2808"
    },
    {
        "id_stock": "252",
        "id_producto": "45",
        "existencia": "185.5",
        "costo_promedio": "2.925"
    },
    {
        "id_stock": "253",
        "id_producto": "35",
        "existencia": "61",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "254",
        "id_producto": "468",
        "existencia": "121",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "257",
        "id_producto": "2",
        "existencia": "80",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "259",
        "id_producto": "176",
        "existencia": "77",
        "costo_promedio": "4.68"
    },
    {
        "id_stock": "260",
        "id_producto": "472",
        "existencia": "1",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "261",
        "id_producto": "177",
        "existencia": "263",
        "costo_promedio": "5.382"
    },
    {
        "id_stock": "262",
        "id_producto": "182",
        "existencia": "4",
        "costo_promedio": "6.435"
    },
    {
        "id_stock": "263",
        "id_producto": "129",
        "existencia": "1",
        "costo_promedio": "4.68"
    },
    {
        "id_stock": "264",
        "id_producto": "40",
        "existencia": "131",
        "costo_promedio": "0.9945"
    },
    {
        "id_stock": "265",
        "id_producto": "166",
        "existencia": "12.5",
        "costo_promedio": "0.2106"
    },
    {
        "id_stock": "266",
        "id_producto": "259",
        "existencia": "50",
        "costo_promedio": "1.3221"
    },
    {
        "id_stock": "267",
        "id_producto": "154",
        "existencia": "27",
        "costo_promedio": "0.3159"
    },
    {
        "id_stock": "270",
        "id_producto": "111",
        "existencia": "1",
        "costo_promedio": "4.2237"
    },
    {
        "id_stock": "271",
        "id_producto": "23",
        "existencia": "32",
        "costo_promedio": "9.0675"
    },
    {
        "id_stock": "272",
        "id_producto": "125",
        "existencia": "7",
        "costo_promedio": "1.3455"
    },
    {
        "id_stock": "273",
        "id_producto": "128",
        "existencia": "3",
        "costo_promedio": "1.3455"
    },
    {
        "id_stock": "276",
        "id_producto": "76",
        "existencia": "54",
        "costo_promedio": "0.5733"
    },
    {
        "id_stock": "278",
        "id_producto": "77",
        "existencia": "91",
        "costo_promedio": "0.6201"
    },
    {
        "id_stock": "279",
        "id_producto": "62",
        "existencia": "11",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "280",
        "id_producto": "79",
        "existencia": "27",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "281",
        "id_producto": "8",
        "existencia": "12",
        "costo_promedio": "7.4295"
    },
    {
        "id_stock": "282",
        "id_producto": "81",
        "existencia": "4323.75",
        "costo_promedio": "0.8892"
    },
    {
        "id_stock": "284",
        "id_producto": "99",
        "existencia": "1",
        "costo_promedio": "25.74"
    },
    {
        "id_stock": "285",
        "id_producto": "12",
        "existencia": "5",
        "costo_promedio": "1.053"
    },
    {
        "id_stock": "286",
        "id_producto": "304",
        "existencia": "1",
        "costo_promedio": "8.19"
    },
    {
        "id_stock": "287",
        "id_producto": "87",
        "existencia": "85",
        "costo_promedio": "12.168"
    },
    {
        "id_stock": "291",
        "id_producto": "78",
        "existencia": "1",
        "costo_promedio": "25.74"
    },
    {
        "id_stock": "294",
        "id_producto": "94",
        "existencia": "6",
        "costo_promedio": "14.976"
    },
    {
        "id_stock": "296",
        "id_producto": "96",
        "existencia": "7",
        "costo_promedio": "26.91"
    },
    {
        "id_stock": "297",
        "id_producto": "476",
        "existencia": "50",
        "costo_promedio": "9.36"
    },
    {
        "id_stock": "300",
        "id_producto": "84",
        "existencia": "31",
        "costo_promedio": "0.6201"
    },
    {
        "id_stock": "301",
        "id_producto": "220",
        "existencia": "6.5",
        "costo_promedio": "1.3338"
    },
    {
        "id_stock": "302",
        "id_producto": "237",
        "existencia": "3",
        "costo_promedio": "3.0069"
    },
    {
        "id_stock": "303",
        "id_producto": "235",
        "existencia": "814",
        "costo_promedio": "0.2925"
    },
    {
        "id_stock": "305",
        "id_producto": "56",
        "existencia": "11",
        "costo_promedio": "3.276"
    },
    {
        "id_stock": "306",
        "id_producto": "121",
        "existencia": "41.5",
        "costo_promedio": "0.6201"
    },
    {
        "id_stock": "307",
        "id_producto": "122",
        "existencia": "28.25",
        "costo_promedio": "0.6201"
    },
    {
        "id_stock": "308",
        "id_producto": "124",
        "existencia": "52",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "309",
        "id_producto": "80",
        "existencia": "129",
        "costo_promedio": "0.6201"
    },
    {
        "id_stock": "310",
        "id_producto": "68",
        "existencia": "81",
        "costo_promedio": "0.6201"
    },
    {
        "id_stock": "312",
        "id_producto": "54",
        "existencia": "71",
        "costo_promedio": "0.8307"
    },
    {
        "id_stock": "313",
        "id_producto": "71",
        "existencia": "1030",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "314",
        "id_producto": "171",
        "existencia": "410",
        "costo_promedio": "0.819"
    },
    {
        "id_stock": "315",
        "id_producto": "241",
        "existencia": "437",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "316",
        "id_producto": "170",
        "existencia": "427",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "317",
        "id_producto": "11",
        "existencia": "840",
        "costo_promedio": "0.819"
    },
    {
        "id_stock": "318",
        "id_producto": "198",
        "existencia": "199",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "319",
        "id_producto": "72",
        "existencia": "4",
        "costo_promedio": "6.7275"
    },
    {
        "id_stock": "322",
        "id_producto": "321",
        "existencia": "1",
        "costo_promedio": "7.605"
    },
    {
        "id_stock": "323",
        "id_producto": "185",
        "existencia": "13",
        "costo_promedio": "0.819"
    },
    {
        "id_stock": "324",
        "id_producto": "211",
        "existencia": "15",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "326",
        "id_producto": "213",
        "existencia": "12",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "329",
        "id_producto": "212",
        "existencia": "7",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "333",
        "id_producto": "206",
        "existencia": "20",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "338",
        "id_producto": "210",
        "existencia": "6",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "340",
        "id_producto": "207",
        "existencia": "53",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "363",
        "id_producto": "315",
        "existencia": "1",
        "costo_promedio": "1.755"
    },
    {
        "id_stock": "364",
        "id_producto": "181",
        "existencia": "73",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "365",
        "id_producto": "169",
        "existencia": "195",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "366",
        "id_producto": "225",
        "existencia": "267",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "367",
        "id_producto": "14",
        "existencia": "49",
        "costo_promedio": "1.755"
    },
    {
        "id_stock": "368",
        "id_producto": "13",
        "existencia": "2",
        "costo_promedio": "7.8624"
    },
    {
        "id_stock": "371",
        "id_producto": "316",
        "existencia": "1",
        "costo_promedio": "1.755"
    },
    {
        "id_stock": "372",
        "id_producto": "215",
        "existencia": "18",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "373",
        "id_producto": "407",
        "existencia": "6",
        "costo_promedio": "2.8197"
    },
    {
        "id_stock": "375",
        "id_producto": "147",
        "existencia": "391",
        "costo_promedio": "0.536211"
    },
    {
        "id_stock": "376",
        "id_producto": "145",
        "existencia": "408",
        "costo_promedio": "0.6318"
    },
    {
        "id_stock": "378",
        "id_producto": "149",
        "existencia": "25",
        "costo_promedio": "0.6435"
    },
    {
        "id_stock": "379",
        "id_producto": "146",
        "existencia": "45",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "380",
        "id_producto": "142",
        "existencia": "250",
        "costo_promedio": "0.5382"
    },
    {
        "id_stock": "381",
        "id_producto": "139",
        "existencia": "340",
        "costo_promedio": "0.6318"
    },
    {
        "id_stock": "382",
        "id_producto": "406",
        "existencia": "5",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "383",
        "id_producto": "416",
        "existencia": "9",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "384",
        "id_producto": "423",
        "existencia": "2",
        "costo_promedio": "1.053"
    },
    {
        "id_stock": "385",
        "id_producto": "424",
        "existencia": "201",
        "costo_promedio": "0.76752"
    },
    {
        "id_stock": "386",
        "id_producto": "425",
        "existencia": "106",
        "costo_promedio": "0.4446"
    },
    {
        "id_stock": "388",
        "id_producto": "52",
        "existencia": "39",
        "costo_promedio": "2.2815"
    },
    {
        "id_stock": "390",
        "id_producto": "4",
        "existencia": "132",
        "costo_promedio": "1.8018"
    },
    {
        "id_stock": "391",
        "id_producto": "377",
        "existencia": "641",
        "costo_promedio": "2.223"
    },
    {
        "id_stock": "393",
        "id_producto": "368",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "394",
        "id_producto": "405",
        "existencia": "2",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "395",
        "id_producto": "370",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "396",
        "id_producto": "357",
        "existencia": "6",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "397",
        "id_producto": "293",
        "existencia": "34",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "398",
        "id_producto": "393",
        "existencia": "79",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "399",
        "id_producto": "382",
        "existencia": "2",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "400",
        "id_producto": "371",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "401",
        "id_producto": "363",
        "existencia": "5",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "402",
        "id_producto": "297",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "403",
        "id_producto": "367",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "404",
        "id_producto": "385",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "405",
        "id_producto": "384",
        "existencia": "6",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "406",
        "id_producto": "378",
        "existencia": "2",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "407",
        "id_producto": "386",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "408",
        "id_producto": "373",
        "existencia": "57",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "409",
        "id_producto": "392",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "410",
        "id_producto": "388",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "411",
        "id_producto": "381",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "412",
        "id_producto": "291",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "413",
        "id_producto": "395",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "414",
        "id_producto": "404",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "415",
        "id_producto": "372",
        "existencia": "10",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "416",
        "id_producto": "296",
        "existencia": "8",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "417",
        "id_producto": "391",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "418",
        "id_producto": "389",
        "existencia": "5",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "419",
        "id_producto": "356",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "420",
        "id_producto": "397",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "421",
        "id_producto": "402",
        "existencia": "3",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "422",
        "id_producto": "359",
        "existencia": "2",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "423",
        "id_producto": "390",
        "existencia": "11",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "424",
        "id_producto": "396",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "425",
        "id_producto": "383",
        "existencia": "5",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "426",
        "id_producto": "369",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "427",
        "id_producto": "376",
        "existencia": "4",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "428",
        "id_producto": "394",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "429",
        "id_producto": "401",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "430",
        "id_producto": "299",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "432",
        "id_producto": "380",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "433",
        "id_producto": "374",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "434",
        "id_producto": "400",
        "existencia": "5",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "435",
        "id_producto": "286",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "436",
        "id_producto": "399",
        "existencia": "2",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "437",
        "id_producto": "351",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "439",
        "id_producto": "398",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "440",
        "id_producto": "358",
        "existencia": "2",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "441",
        "id_producto": "294",
        "existencia": "8",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "442",
        "id_producto": "284",
        "existencia": "11",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "443",
        "id_producto": "361",
        "existencia": "3",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "444",
        "id_producto": "292",
        "existencia": "5",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "446",
        "id_producto": "360",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "447",
        "id_producto": "364",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "448",
        "id_producto": "365",
        "existencia": "4",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "449",
        "id_producto": "295",
        "existencia": "15",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "451",
        "id_producto": "352",
        "existencia": "3",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "452",
        "id_producto": "403",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "453",
        "id_producto": "355",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "454",
        "id_producto": "354",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "455",
        "id_producto": "350",
        "existencia": "9",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "457",
        "id_producto": "353",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "458",
        "id_producto": "375",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "459",
        "id_producto": "379",
        "existencia": "16",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "460",
        "id_producto": "387",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "461",
        "id_producto": "362",
        "existencia": "3",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "462",
        "id_producto": "180",
        "existencia": "1",
        "costo_promedio": "1.0179"
    },
    {
        "id_stock": "464",
        "id_producto": "19",
        "existencia": "506",
        "costo_promedio": "1.638"
    },
    {
        "id_stock": "467",
        "id_producto": "193",
        "existencia": "91",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "470",
        "id_producto": "465",
        "existencia": "316",
        "costo_promedio": "1.9305"
    },
    {
        "id_stock": "471",
        "id_producto": "481",
        "existencia": "5",
        "costo_promedio": "8.19"
    },
    {
        "id_stock": "473",
        "id_producto": "483",
        "existencia": "1",
        "costo_promedio": "7.605"
    },
    {
        "id_stock": "475",
        "id_producto": "485",
        "existencia": "1",
        "costo_promedio": "1.638"
    },
    {
        "id_stock": "476",
        "id_producto": "486",
        "existencia": "2",
        "costo_promedio": "8.19"
    },
    {
        "id_stock": "478",
        "id_producto": "488",
        "existencia": "1",
        "costo_promedio": "8.775"
    },
    {
        "id_stock": "479",
        "id_producto": "490",
        "existencia": "70",
        "costo_promedio": "0.819"
    },
    {
        "id_stock": "480",
        "id_producto": "489",
        "existencia": "14",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "481",
        "id_producto": "491",
        "existencia": "11",
        "costo_promedio": "0.9945"
    },
    {
        "id_stock": "482",
        "id_producto": "492",
        "existencia": "2",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "483",
        "id_producto": "493",
        "existencia": "27",
        "costo_promedio": "4.68"
    },
    {
        "id_stock": "484",
        "id_producto": "494",
        "existencia": "2",
        "costo_promedio": "3.51"
    },
    {
        "id_stock": "485",
        "id_producto": "495",
        "existencia": "131",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "486",
        "id_producto": "496",
        "existencia": "3",
        "costo_promedio": "4.68"
    },
    {
        "id_stock": "487",
        "id_producto": "497",
        "existencia": "21",
        "costo_promedio": "3.9195"
    },
    {
        "id_stock": "489",
        "id_producto": "499",
        "existencia": "46",
        "costo_promedio": "0.819"
    },
    {
        "id_stock": "490",
        "id_producto": "500",
        "existencia": "70",
        "costo_promedio": "5.85"
    },
    {
        "id_stock": "491",
        "id_producto": "501",
        "existencia": "79",
        "costo_promedio": "0.468"
    },
    {
        "id_stock": "493",
        "id_producto": "502",
        "existencia": "20",
        "costo_promedio": "2.7378"
    },
    {
        "id_stock": "496",
        "id_producto": "505",
        "existencia": "12",
        "costo_promedio": "0.302211"
    },
    {
        "id_stock": "497",
        "id_producto": "506",
        "existencia": "4",
        "costo_promedio": "3.51"
    },
    {
        "id_stock": "498",
        "id_producto": "507",
        "existencia": "32",
        "costo_promedio": "0.6435"
    },
    {
        "id_stock": "499",
        "id_producto": "515",
        "existencia": "39",
        "costo_promedio": "4.68"
    },
    {
        "id_stock": "500",
        "id_producto": "516",
        "existencia": "40",
        "costo_promedio": "5.265"
    },
    {
        "id_stock": "501",
        "id_producto": "517",
        "existencia": "24",
        "costo_promedio": "4.5045"
    },
    {
        "id_stock": "502",
        "id_producto": "467",
        "existencia": "22",
        "costo_promedio": "3.042"
    },
    {
        "id_stock": "503",
        "id_producto": "518",
        "existencia": "118",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "504",
        "id_producto": "519",
        "existencia": "30",
        "costo_promedio": "0.1989"
    },
    {
        "id_stock": "505",
        "id_producto": "520",
        "existencia": "3",
        "costo_promedio": "3.8259"
    },
    {
        "id_stock": "509",
        "id_producto": "525",
        "existencia": "1",
        "costo_promedio": "62.127"
    },
    {
        "id_stock": "510",
        "id_producto": "526",
        "existencia": "721",
        "costo_promedio": "1.5795"
    },
    {
        "id_stock": "511",
        "id_producto": "527",
        "existencia": "759",
        "costo_promedio": "1.638"
    },
    {
        "id_stock": "512",
        "id_producto": "528",
        "existencia": "105",
        "costo_promedio": "1.989"
    },
    {
        "id_stock": "513",
        "id_producto": "529",
        "existencia": "1",
        "costo_promedio": "8.424"
    },
    {
        "id_stock": "514",
        "id_producto": "530",
        "existencia": "27",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "515",
        "id_producto": "109",
        "existencia": "184",
        "costo_promedio": "5.1246"
    },
    {
        "id_stock": "516",
        "id_producto": "110",
        "existencia": "22",
        "costo_promedio": "5.0661"
    },
    {
        "id_stock": "517",
        "id_producto": "531",
        "existencia": "6",
        "costo_promedio": "1.9422"
    },
    {
        "id_stock": "518",
        "id_producto": "532",
        "existencia": "3",
        "costo_promedio": "5.1246"
    },
    {
        "id_stock": "519",
        "id_producto": "533",
        "existencia": "53",
        "costo_promedio": "6.435"
    },
    {
        "id_stock": "520",
        "id_producto": "534",
        "existencia": "39",
        "costo_promedio": "0.234"
    },
    {
        "id_stock": "521",
        "id_producto": "535",
        "existencia": "251",
        "costo_promedio": "0.351"
    },
    {
        "id_stock": "522",
        "id_producto": "536",
        "existencia": "5.28",
        "costo_promedio": "12.636"
    },
    {
        "id_stock": "524",
        "id_producto": "538",
        "existencia": "1",
        "costo_promedio": "17.55"
    },
    {
        "id_stock": "525",
        "id_producto": "447",
        "existencia": "37",
        "costo_promedio": "1.287"
    },
    {
        "id_stock": "527",
        "id_producto": "541",
        "existencia": "18",
        "costo_promedio": "11.7"
    },
    {
        "id_stock": "528",
        "id_producto": "53",
        "existencia": "17",
        "costo_promedio": "1.7667"
    },
    {
        "id_stock": "529",
        "id_producto": "263",
        "existencia": "942",
        "costo_promedio": "0.2223"
    },
    {
        "id_stock": "530",
        "id_producto": "542",
        "existencia": "38",
        "costo_promedio": "2.925"
    },
    {
        "id_stock": "531",
        "id_producto": "543",
        "existencia": "4",
        "costo_promedio": "1.5795"
    },
    {
        "id_stock": "534",
        "id_producto": "547",
        "existencia": "12",
        "costo_promedio": "1.0179"
    },
    {
        "id_stock": "535",
        "id_producto": "548",
        "existencia": "17",
        "costo_promedio": "4.7385"
    },
    {
        "id_stock": "536",
        "id_producto": "550",
        "existencia": "24",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "538",
        "id_producto": "308",
        "existencia": "170",
        "costo_promedio": "0.351"
    },
    {
        "id_stock": "540",
        "id_producto": "552",
        "existencia": "4",
        "costo_promedio": "10.296"
    },
    {
        "id_stock": "542",
        "id_producto": "554",
        "existencia": "829",
        "costo_promedio": "0.3978"
    },
    {
        "id_stock": "543",
        "id_producto": "555",
        "existencia": "963.5",
        "costo_promedio": "0.3978"
    },
    {
        "id_stock": "544",
        "id_producto": "514",
        "existencia": "2",
        "costo_promedio": "42.12"
    },
    {
        "id_stock": "546",
        "id_producto": "557",
        "existencia": "11",
        "costo_promedio": "3.2877"
    },
    {
        "id_stock": "547",
        "id_producto": "539",
        "existencia": "2",
        "costo_promedio": "0.2574"
    },
    {
        "id_stock": "548",
        "id_producto": "544",
        "existencia": "8",
        "costo_promedio": "1.3923"
    },
    {
        "id_stock": "549",
        "id_producto": "456",
        "existencia": "6",
        "costo_promedio": "0.702"
    },
    {
        "id_stock": "550",
        "id_producto": "460",
        "existencia": "1",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "551",
        "id_producto": "463",
        "existencia": "200",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "552",
        "id_producto": "462",
        "existencia": "25",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "553",
        "id_producto": "558",
        "existencia": "671",
        "costo_promedio": "0.1989"
    },
    {
        "id_stock": "554",
        "id_producto": "459",
        "existencia": "207",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "555",
        "id_producto": "559",
        "existencia": "68",
        "costo_promedio": "0.2691"
    },
    {
        "id_stock": "556",
        "id_producto": "560",
        "existencia": "541",
        "costo_promedio": "0.9945"
    },
    {
        "id_stock": "557",
        "id_producto": "549",
        "existencia": "1",
        "costo_promedio": "7.605"
    },
    {
        "id_stock": "559",
        "id_producto": "561",
        "existencia": "3",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "560",
        "id_producto": "562",
        "existencia": "3",
        "costo_promedio": "4.8555"
    },
    {
        "id_stock": "564",
        "id_producto": "566",
        "existencia": "237",
        "costo_promedio": "0.0585"
    },
    {
        "id_stock": "565",
        "id_producto": "567",
        "existencia": "2",
        "costo_promedio": "2.1645"
    },
    {
        "id_stock": "566",
        "id_producto": "568",
        "existencia": "15",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "567",
        "id_producto": "569",
        "existencia": "21",
        "costo_promedio": "2.0475"
    },
    {
        "id_stock": "569",
        "id_producto": "572",
        "existencia": "1",
        "costo_promedio": "5.265"
    },
    {
        "id_stock": "571",
        "id_producto": "574",
        "existencia": "1",
        "costo_promedio": "5.85"
    },
    {
        "id_stock": "572",
        "id_producto": "575",
        "existencia": "140",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "573",
        "id_producto": "576",
        "existencia": "109",
        "costo_promedio": "2.34"
    },
    {
        "id_stock": "575",
        "id_producto": "577",
        "existencia": "21",
        "costo_promedio": "2.34"
    },
    {
        "id_stock": "576",
        "id_producto": "578",
        "existencia": "44",
        "costo_promedio": "0.9945"
    },
    {
        "id_stock": "578",
        "id_producto": "579",
        "existencia": "66",
        "costo_promedio": "0.0351"
    },
    {
        "id_stock": "579",
        "id_producto": "582",
        "existencia": "300",
        "costo_promedio": "0.5148"
    },
    {
        "id_stock": "580",
        "id_producto": "581",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "581",
        "id_producto": "583",
        "existencia": "100",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "583",
        "id_producto": "585",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "584",
        "id_producto": "586",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "585",
        "id_producto": "587",
        "existencia": "6",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "586",
        "id_producto": "588",
        "existencia": "6",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "587",
        "id_producto": "589",
        "existencia": "1",
        "costo_promedio": "5.85"
    },
    {
        "id_stock": "588",
        "id_producto": "590",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "589",
        "id_producto": "591",
        "existencia": "63",
        "costo_promedio": "0.4797"
    },
    {
        "id_stock": "590",
        "id_producto": "592",
        "existencia": "2",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "591",
        "id_producto": "593",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "592",
        "id_producto": "594",
        "existencia": "3",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "593",
        "id_producto": "596",
        "existencia": "24",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "594",
        "id_producto": "595",
        "existencia": "106",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "595",
        "id_producto": "597",
        "existencia": "6",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "596",
        "id_producto": "598",
        "existencia": "2",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "597",
        "id_producto": "599",
        "existencia": "1",
        "costo_promedio": "1.287"
    },
    {
        "id_stock": "598",
        "id_producto": "600",
        "existencia": "6",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "599",
        "id_producto": "601",
        "existencia": "10",
        "costo_promedio": "0.819"
    },
    {
        "id_stock": "600",
        "id_producto": "602",
        "existencia": "16",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "601",
        "id_producto": "603",
        "existencia": "3",
        "costo_promedio": "3.51"
    },
    {
        "id_stock": "602",
        "id_producto": "604",
        "existencia": "4",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "603",
        "id_producto": "605",
        "existencia": "17",
        "costo_promedio": "2.5155"
    },
    {
        "id_stock": "604",
        "id_producto": "606",
        "existencia": "3",
        "costo_promedio": "3.51"
    },
    {
        "id_stock": "605",
        "id_producto": "607",
        "existencia": "24",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "606",
        "id_producto": "608",
        "existencia": "3",
        "costo_promedio": "5.265"
    },
    {
        "id_stock": "608",
        "id_producto": "610",
        "existencia": "13",
        "costo_promedio": "4.563"
    },
    {
        "id_stock": "610",
        "id_producto": "612",
        "existencia": "39",
        "costo_promedio": "5.265"
    },
    {
        "id_stock": "613",
        "id_producto": "613",
        "existencia": "1",
        "costo_promedio": "0.4914"
    },
    {
        "id_stock": "618",
        "id_producto": "618",
        "existencia": "294",
        "costo_promedio": "0.2925"
    },
    {
        "id_stock": "619",
        "id_producto": "620",
        "existencia": "10",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "621",
        "id_producto": "623",
        "existencia": "40",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "622",
        "id_producto": "622",
        "existencia": "3",
        "costo_promedio": "14.625"
    },
    {
        "id_stock": "623",
        "id_producto": "624",
        "existencia": "1",
        "costo_promedio": "14.625"
    },
    {
        "id_stock": "624",
        "id_producto": "625",
        "existencia": "1",
        "costo_promedio": "14.625"
    },
    {
        "id_stock": "625",
        "id_producto": "626",
        "existencia": "10",
        "costo_promedio": "14.04"
    },
    {
        "id_stock": "629",
        "id_producto": "630",
        "existencia": "16",
        "costo_promedio": "2.808"
    },
    {
        "id_stock": "630",
        "id_producto": "631",
        "existencia": "86",
        "costo_promedio": "1.755"
    },
    {
        "id_stock": "632",
        "id_producto": "634",
        "existencia": "15748",
        "costo_promedio": "4.9725"
    },
    {
        "id_stock": "633",
        "id_producto": "633",
        "existencia": "745",
        "costo_promedio": "2.925"
    },
    {
        "id_stock": "634",
        "id_producto": "635",
        "existencia": "6",
        "costo_promedio": "15.21"
    },
    {
        "id_stock": "635",
        "id_producto": "636",
        "existencia": "1",
        "costo_promedio": "11.7"
    },
    {
        "id_stock": "636",
        "id_producto": "637",
        "existencia": "38",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "637",
        "id_producto": "638",
        "existencia": "5",
        "costo_promedio": "1.287"
    },
    {
        "id_stock": "640",
        "id_producto": "641",
        "existencia": "30",
        "costo_promedio": "0.4212"
    },
    {
        "id_stock": "641",
        "id_producto": "642",
        "existencia": "1",
        "costo_promedio": "21.06"
    },
    {
        "id_stock": "642",
        "id_producto": "643",
        "existencia": "76",
        "costo_promedio": "0.702"
    },
    {
        "id_stock": "643",
        "id_producto": "644",
        "existencia": "24",
        "costo_promedio": "3.8844"
    },
    {
        "id_stock": "645",
        "id_producto": "646",
        "existencia": "76",
        "costo_promedio": "4.7385"
    },
    {
        "id_stock": "646",
        "id_producto": "647",
        "existencia": "43",
        "costo_promedio": "5.85"
    },
    {
        "id_stock": "647",
        "id_producto": "648",
        "existencia": "178",
        "costo_promedio": "4.3758"
    },
    {
        "id_stock": "651",
        "id_producto": "652",
        "existencia": "85",
        "costo_promedio": "2.2815"
    },
    {
        "id_stock": "652",
        "id_producto": "653",
        "existencia": "75",
        "costo_promedio": "1.9305"
    },
    {
        "id_stock": "653",
        "id_producto": "654",
        "existencia": "80",
        "costo_promedio": "1.638"
    },
    {
        "id_stock": "654",
        "id_producto": "655",
        "existencia": "76",
        "costo_promedio": "1.3455"
    },
    {
        "id_stock": "655",
        "id_producto": "656",
        "existencia": "247",
        "costo_promedio": "0.819"
    },
    {
        "id_stock": "656",
        "id_producto": "657",
        "existencia": "84",
        "costo_promedio": "2.106"
    },
    {
        "id_stock": "657",
        "id_producto": "658",
        "existencia": "962",
        "costo_promedio": "1.872"
    },
    {
        "id_stock": "658",
        "id_producto": "659",
        "existencia": "24",
        "costo_promedio": "1.5795"
    },
    {
        "id_stock": "659",
        "id_producto": "660",
        "existencia": "15",
        "costo_promedio": "1.287"
    },
    {
        "id_stock": "660",
        "id_producto": "661",
        "existencia": "51",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "661",
        "id_producto": "662",
        "existencia": "548",
        "costo_promedio": "4.3056"
    },
    {
        "id_stock": "662",
        "id_producto": "663",
        "existencia": "2",
        "costo_promedio": "5.85"
    },
    {
        "id_stock": "663",
        "id_producto": "664",
        "existencia": "228",
        "costo_promedio": "1.3455"
    },
    {
        "id_stock": "665",
        "id_producto": "666",
        "existencia": "81",
        "costo_promedio": "2.106"
    },
    {
        "id_stock": "666",
        "id_producto": "667",
        "existencia": "2",
        "costo_promedio": "2.925"
    },
    {
        "id_stock": "667",
        "id_producto": "668",
        "existencia": "6",
        "costo_promedio": "1.755"
    },
    {
        "id_stock": "668",
        "id_producto": "669",
        "existencia": "222",
        "costo_promedio": "0.468"
    },
    {
        "id_stock": "669",
        "id_producto": "670",
        "existencia": "15",
        "costo_promedio": "2.925"
    },
    {
        "id_stock": "672",
        "id_producto": "673",
        "existencia": "1",
        "costo_promedio": "1.7901"
    },
    {
        "id_stock": "673",
        "id_producto": "674",
        "existencia": "55",
        "costo_promedio": "1.872"
    },
    {
        "id_stock": "675",
        "id_producto": "676",
        "existencia": "60",
        "costo_promedio": "2.925"
    },
    {
        "id_stock": "676",
        "id_producto": "677",
        "existencia": "328",
        "costo_promedio": "2.7495"
    },
    {
        "id_stock": "677",
        "id_producto": "678",
        "existencia": "18",
        "costo_promedio": "2.574"
    },
    {
        "id_stock": "678",
        "id_producto": "466",
        "existencia": "15",
        "costo_promedio": "4.095"
    },
    {
        "id_stock": "679",
        "id_producto": "679",
        "existencia": "28",
        "costo_promedio": "10.1205"
    },
    {
        "id_stock": "680",
        "id_producto": "680",
        "existencia": "11",
        "costo_promedio": "7.605"
    },
    {
        "id_stock": "681",
        "id_producto": "681",
        "existencia": "15",
        "costo_promedio": "10.1205"
    },
    {
        "id_stock": "682",
        "id_producto": "682",
        "existencia": "14",
        "costo_promedio": "6.7275"
    },
    {
        "id_stock": "683",
        "id_producto": "683",
        "existencia": "59",
        "costo_promedio": "8.19"
    },
    {
        "id_stock": "684",
        "id_producto": "684",
        "existencia": "2",
        "costo_promedio": "1.2636"
    },
    {
        "id_stock": "685",
        "id_producto": "685",
        "existencia": "99",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "687",
        "id_producto": "688",
        "existencia": "1",
        "costo_promedio": "8.775"
    },
    {
        "id_stock": "688",
        "id_producto": "689",
        "existencia": "156.89",
        "costo_promedio": "1.0296"
    },
    {
        "id_stock": "689",
        "id_producto": "690",
        "existencia": "304",
        "costo_promedio": "1.2285"
    },
    {
        "id_stock": "690",
        "id_producto": "691",
        "existencia": "4",
        "costo_promedio": "9.0675"
    },
    {
        "id_stock": "692",
        "id_producto": "693",
        "existencia": "8",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "693",
        "id_producto": "694",
        "existencia": "320",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "694",
        "id_producto": "695",
        "existencia": "126",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "695",
        "id_producto": "697",
        "existencia": "24",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "696",
        "id_producto": "696",
        "existencia": "152",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "697",
        "id_producto": "698",
        "existencia": "53",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "698",
        "id_producto": "699",
        "existencia": "83",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "700",
        "id_producto": "701",
        "existencia": "7",
        "costo_promedio": "0.4446"
    },
    {
        "id_stock": "701",
        "id_producto": "702",
        "existencia": "200",
        "costo_promedio": "0.2925"
    },
    {
        "id_stock": "702",
        "id_producto": "703",
        "existencia": "5",
        "costo_promedio": "14.04"
    },
    {
        "id_stock": "705",
        "id_producto": "706",
        "existencia": "68",
        "costo_promedio": "0.6435"
    },
    {
        "id_stock": "706",
        "id_producto": "707",
        "existencia": "3",
        "costo_promedio": "5.85"
    },
    {
        "id_stock": "707",
        "id_producto": "708",
        "existencia": "78",
        "costo_promedio": "4.9725"
    },
    {
        "id_stock": "709",
        "id_producto": "710",
        "existencia": "88",
        "costo_promedio": "1.5444"
    },
    {
        "id_stock": "710",
        "id_producto": "711",
        "existencia": "23",
        "costo_promedio": "1.638"
    },
    {
        "id_stock": "711",
        "id_producto": "713",
        "existencia": "87",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "712",
        "id_producto": "714",
        "existencia": "101",
        "costo_promedio": "1.1232"
    },
    {
        "id_stock": "713",
        "id_producto": "715",
        "existencia": "61",
        "costo_promedio": "1.2636"
    },
    {
        "id_stock": "714",
        "id_producto": "716",
        "existencia": "56",
        "costo_promedio": "5.0661"
    },
    {
        "id_stock": "715",
        "id_producto": "712",
        "existencia": "166",
        "costo_promedio": "2.9952"
    },
    {
        "id_stock": "716",
        "id_producto": "717",
        "existencia": "36",
        "costo_promedio": "5.148"
    },
    {
        "id_stock": "717",
        "id_producto": "718",
        "existencia": "49",
        "costo_promedio": "3.159"
    },
    {
        "id_stock": "718",
        "id_producto": "719",
        "existencia": "4",
        "costo_promedio": "0.234"
    },
    {
        "id_stock": "719",
        "id_producto": "720",
        "existencia": "18",
        "costo_promedio": "1.5912"
    },
    {
        "id_stock": "720",
        "id_producto": "721",
        "existencia": "28",
        "costo_promedio": "2.1177"
    },
    {
        "id_stock": "721",
        "id_producto": "722",
        "existencia": "28",
        "costo_promedio": "3.1824"
    },
    {
        "id_stock": "722",
        "id_producto": "723",
        "existencia": "6",
        "costo_promedio": "4.095"
    },
    {
        "id_stock": "723",
        "id_producto": "724",
        "existencia": "90",
        "costo_promedio": "0.1053"
    },
    {
        "id_stock": "724",
        "id_producto": "725",
        "existencia": "13",
        "costo_promedio": "4.7151"
    },
    {
        "id_stock": "725",
        "id_producto": "726",
        "existencia": "15",
        "costo_promedio": "7.605"
    },
    {
        "id_stock": "726",
        "id_producto": "727",
        "existencia": "0.6",
        "costo_promedio": "0.702"
    },
    {
        "id_stock": "727",
        "id_producto": "728",
        "existencia": "17",
        "costo_promedio": "8.424"
    },
    {
        "id_stock": "728",
        "id_producto": "729",
        "existencia": "9",
        "costo_promedio": "8.19"
    },
    {
        "id_stock": "729",
        "id_producto": "732",
        "existencia": "25",
        "costo_promedio": "6.435"
    },
    {
        "id_stock": "730",
        "id_producto": "733",
        "existencia": "1",
        "costo_promedio": "7.02"
    },
    {
        "id_stock": "732",
        "id_producto": "735",
        "existencia": "14",
        "costo_promedio": "8.19"
    },
    {
        "id_stock": "733",
        "id_producto": "736",
        "existencia": "2",
        "costo_promedio": "8.775"
    },
    {
        "id_stock": "734",
        "id_producto": "737",
        "existencia": "1",
        "costo_promedio": "1.2285"
    },
    {
        "id_stock": "735",
        "id_producto": "739",
        "existencia": "193",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "736",
        "id_producto": "738",
        "existencia": "39",
        "costo_promedio": "4.563"
    },
    {
        "id_stock": "737",
        "id_producto": "740",
        "existencia": "3",
        "costo_promedio": "3.978"
    },
    {
        "id_stock": "738",
        "id_producto": "741",
        "existencia": "8",
        "costo_promedio": "4.095"
    },
    {
        "id_stock": "739",
        "id_producto": "742",
        "existencia": "99",
        "costo_promedio": "0.0936"
    },
    {
        "id_stock": "742",
        "id_producto": "745",
        "existencia": "4",
        "costo_promedio": "20.592"
    },
    {
        "id_stock": "744",
        "id_producto": "747",
        "existencia": "14",
        "costo_promedio": "7.02"
    },
    {
        "id_stock": "745",
        "id_producto": "748",
        "existencia": "3",
        "costo_promedio": "4.914"
    },
    {
        "id_stock": "747",
        "id_producto": "750",
        "existencia": "5",
        "costo_promedio": "3.51"
    },
    {
        "id_stock": "749",
        "id_producto": "752",
        "existencia": "5",
        "costo_promedio": "0.4446"
    },
    {
        "id_stock": "750",
        "id_producto": "753",
        "existencia": "36",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "867",
        "id_producto": "754",
        "existencia": "3",
        "costo_promedio": "10.062"
    },
    {
        "id_stock": "873",
        "id_producto": "755",
        "existencia": "91",
        "costo_promedio": "0.487492"
    },
    {
        "id_stock": "874",
        "id_producto": "756",
        "existencia": "17",
        "costo_promedio": "0.6201"
    },
    {
        "id_stock": "875",
        "id_producto": "757",
        "existencia": "504",
        "costo_promedio": "4.095"
    },
    {
        "id_stock": "876",
        "id_producto": "758",
        "existencia": "24",
        "costo_promedio": "0.6084"
    },
    {
        "id_stock": "877",
        "id_producto": "759",
        "existencia": "27",
        "costo_promedio": "1.3689"
    },
    {
        "id_stock": "878",
        "id_producto": "760",
        "existencia": "20",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "879",
        "id_producto": "761",
        "existencia": "11",
        "costo_promedio": "1.3689"
    },
    {
        "id_stock": "880",
        "id_producto": "765",
        "existencia": "20",
        "costo_promedio": "0.702"
    },
    {
        "id_stock": "881",
        "id_producto": "763",
        "existencia": "28",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "882",
        "id_producto": "764",
        "existencia": "2",
        "costo_promedio": "1.053"
    },
    {
        "id_stock": "885",
        "id_producto": "768",
        "existencia": "5",
        "costo_promedio": "1.7667"
    },
    {
        "id_stock": "886",
        "id_producto": "769",
        "existencia": "49",
        "costo_promedio": "1.0998"
    },
    {
        "id_stock": "887",
        "id_producto": "770",
        "existencia": "3",
        "costo_promedio": "1.2402"
    },
    {
        "id_stock": "888",
        "id_producto": "772",
        "existencia": "114",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "889",
        "id_producto": "773",
        "existencia": "122",
        "costo_promedio": "2.4804"
    },
    {
        "id_stock": "890",
        "id_producto": "774",
        "existencia": "3",
        "costo_promedio": "0.6318"
    },
    {
        "id_stock": "893",
        "id_producto": "777",
        "existencia": "24",
        "costo_promedio": "0.6786"
    },
    {
        "id_stock": "894",
        "id_producto": "778",
        "existencia": "86.667",
        "costo_promedio": "0.6786"
    },
    {
        "id_stock": "895",
        "id_producto": "779",
        "existencia": "3464",
        "costo_promedio": "0.3861"
    },
    {
        "id_stock": "896",
        "id_producto": "780",
        "existencia": "1",
        "costo_promedio": "14.04"
    },
    {
        "id_stock": "897",
        "id_producto": "781",
        "existencia": "88",
        "costo_promedio": "0.7254"
    },
    {
        "id_stock": "898",
        "id_producto": "782",
        "existencia": "9",
        "costo_promedio": "0.6435"
    },
    {
        "id_stock": "900",
        "id_producto": "784",
        "existencia": "36",
        "costo_promedio": "7.605"
    },
    {
        "id_stock": "901",
        "id_producto": "785",
        "existencia": "1",
        "costo_promedio": "4.2705"
    },
    {
        "id_stock": "902",
        "id_producto": "786",
        "existencia": "10",
        "costo_promedio": "1.2168"
    },
    {
        "id_stock": "903",
        "id_producto": "787",
        "existencia": "298",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "904",
        "id_producto": "788",
        "existencia": "987",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "905",
        "id_producto": "790",
        "existencia": "30",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "906",
        "id_producto": "789",
        "existencia": "33",
        "costo_promedio": "5.85"
    },
    {
        "id_stock": "907",
        "id_producto": "791",
        "existencia": "71",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "908",
        "id_producto": "793",
        "existencia": "41",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "910",
        "id_producto": "792",
        "existencia": "9",
        "costo_promedio": "5.265"
    },
    {
        "id_stock": "911",
        "id_producto": "795",
        "existencia": "10",
        "costo_promedio": "2.925"
    },
    {
        "id_stock": "912",
        "id_producto": "762",
        "existencia": "41",
        "costo_promedio": "3.51"
    },
    {
        "id_stock": "913",
        "id_producto": "796",
        "existencia": "7",
        "costo_promedio": "0.2925"
    },
    {
        "id_stock": "914",
        "id_producto": "797",
        "existencia": "2",
        "costo_promedio": "1.4742"
    },
    {
        "id_stock": "915",
        "id_producto": "798",
        "existencia": "5",
        "costo_promedio": "3.2175"
    },
    {
        "id_stock": "916",
        "id_producto": "799",
        "existencia": "15.5",
        "costo_promedio": "1.9071"
    },
    {
        "id_stock": "917",
        "id_producto": "800",
        "existencia": "120",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "918",
        "id_producto": "801",
        "existencia": "3",
        "costo_promedio": "16.38"
    },
    {
        "id_stock": "919",
        "id_producto": "802",
        "existencia": "5",
        "costo_promedio": "11.7"
    },
    {
        "id_stock": "920",
        "id_producto": "803",
        "existencia": "2",
        "costo_promedio": "12.87"
    },
    {
        "id_stock": "922",
        "id_producto": "805",
        "existencia": "37",
        "costo_promedio": "15.21"
    },
    {
        "id_stock": "950",
        "id_producto": "806",
        "existencia": "18",
        "costo_promedio": "12.9168"
    },
    {
        "id_stock": "951",
        "id_producto": "808",
        "existencia": "445",
        "costo_promedio": "1.053"
    },
    {
        "id_stock": "952",
        "id_producto": "809",
        "existencia": "19",
        "costo_promedio": "3.042"
    },
    {
        "id_stock": "954",
        "id_producto": "811",
        "existencia": "3",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "955",
        "id_producto": "812",
        "existencia": "12",
        "costo_promedio": "4.3875"
    },
    {
        "id_stock": "956",
        "id_producto": "813",
        "existencia": "49",
        "costo_promedio": "0.2691"
    },
    {
        "id_stock": "957",
        "id_producto": "814",
        "existencia": "14",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "958",
        "id_producto": "815",
        "existencia": "36",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "959",
        "id_producto": "816",
        "existencia": "47",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "960",
        "id_producto": "818",
        "existencia": "21",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "961",
        "id_producto": "819",
        "existencia": "28",
        "costo_promedio": "0.819"
    },
    {
        "id_stock": "962",
        "id_producto": "820",
        "existencia": "57",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "963",
        "id_producto": "821",
        "existencia": "51",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "964",
        "id_producto": "822",
        "existencia": "13",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "965",
        "id_producto": "823",
        "existencia": "45",
        "costo_promedio": "0.702"
    },
    {
        "id_stock": "966",
        "id_producto": "824",
        "existencia": "29",
        "costo_promedio": "0.702"
    },
    {
        "id_stock": "967",
        "id_producto": "825",
        "existencia": "48",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "968",
        "id_producto": "826",
        "existencia": "45",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "969",
        "id_producto": "827",
        "existencia": "37",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "970",
        "id_producto": "828",
        "existencia": "50",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "971",
        "id_producto": "829",
        "existencia": "58",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "972",
        "id_producto": "830",
        "existencia": "145",
        "costo_promedio": "0.819"
    },
    {
        "id_stock": "973",
        "id_producto": "831",
        "existencia": "44",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "974",
        "id_producto": "832",
        "existencia": "58",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "975",
        "id_producto": "833",
        "existencia": "48",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "976",
        "id_producto": "834",
        "existencia": "55",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "977",
        "id_producto": "835",
        "existencia": "55",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "978",
        "id_producto": "836",
        "existencia": "53",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "979",
        "id_producto": "837",
        "existencia": "58",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "980",
        "id_producto": "838",
        "existencia": "73",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "981",
        "id_producto": "839",
        "existencia": "86",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "982",
        "id_producto": "840",
        "existencia": "73",
        "costo_promedio": "0.702"
    },
    {
        "id_stock": "983",
        "id_producto": "841",
        "existencia": "257",
        "costo_promedio": "0.7956"
    },
    {
        "id_stock": "984",
        "id_producto": "842",
        "existencia": "10",
        "costo_promedio": "3.627"
    },
    {
        "id_stock": "985",
        "id_producto": "843",
        "existencia": "79",
        "costo_promedio": "2.808"
    },
    {
        "id_stock": "986",
        "id_producto": "844",
        "existencia": "42",
        "costo_promedio": "8.775"
    },
    {
        "id_stock": "987",
        "id_producto": "845",
        "existencia": "66",
        "costo_promedio": "0.1287"
    },
    {
        "id_stock": "988",
        "id_producto": "846",
        "existencia": "39",
        "costo_promedio": "1.9188"
    },
    {
        "id_stock": "989",
        "id_producto": "847",
        "existencia": "13",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "990",
        "id_producto": "848",
        "existencia": "21",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "991",
        "id_producto": "849",
        "existencia": "159",
        "costo_promedio": "1.872"
    },
    {
        "id_stock": "992",
        "id_producto": "850",
        "existencia": "9.5",
        "costo_promedio": "5.85"
    },
    {
        "id_stock": "993",
        "id_producto": "851",
        "existencia": "547",
        "costo_promedio": "1.287"
    },
    {
        "id_stock": "994",
        "id_producto": "852",
        "existencia": "14",
        "costo_promedio": "4.68"
    },
    {
        "id_stock": "995",
        "id_producto": "853",
        "existencia": "66",
        "costo_promedio": "0.6318"
    },
    {
        "id_stock": "996",
        "id_producto": "817",
        "existencia": "95",
        "costo_promedio": "0.702"
    },
    {
        "id_stock": "997",
        "id_producto": "854",
        "existencia": "289",
        "costo_promedio": "2.223"
    },
    {
        "id_stock": "998",
        "id_producto": "855",
        "existencia": "1",
        "costo_promedio": "0.5265"
    },
    {
        "id_stock": "999",
        "id_producto": "856",
        "existencia": "98",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "1000",
        "id_producto": "857",
        "existencia": "49",
        "costo_promedio": "1.755"
    },
    {
        "id_stock": "1001",
        "id_producto": "858",
        "existencia": "24",
        "costo_promedio": "0.7371"
    },
    {
        "id_stock": "1003",
        "id_producto": "860",
        "existencia": "74.5",
        "costo_promedio": "1.053"
    },
    {
        "id_stock": "1004",
        "id_producto": "861",
        "existencia": "1",
        "costo_promedio": "5.7915"
    },
    {
        "id_stock": "1005",
        "id_producto": "862",
        "existencia": "18",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "1007",
        "id_producto": "864",
        "existencia": "75",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "1008",
        "id_producto": "865",
        "existencia": "6",
        "costo_promedio": "1.5912"
    },
    {
        "id_stock": "1009",
        "id_producto": "866",
        "existencia": "28",
        "costo_promedio": "3.1824"
    },
    {
        "id_stock": "1013",
        "id_producto": "867",
        "existencia": "17.03",
        "costo_promedio": "6.552"
    },
    {
        "id_stock": "1017",
        "id_producto": "869",
        "existencia": "157",
        "costo_promedio": "1.287"
    },
    {
        "id_stock": "1018",
        "id_producto": "870",
        "existencia": "41",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "1019",
        "id_producto": "871",
        "existencia": "335",
        "costo_promedio": "0.6786"
    },
    {
        "id_stock": "1020",
        "id_producto": "872",
        "existencia": "3",
        "costo_promedio": "3.6855"
    },
    {
        "id_stock": "1021",
        "id_producto": "873",
        "existencia": "12",
        "costo_promedio": "10.53"
    },
    {
        "id_stock": "1098",
        "id_producto": "874",
        "existencia": "155",
        "costo_promedio": "1.2636"
    },
    {
        "id_stock": "1099",
        "id_producto": "875",
        "existencia": "178",
        "costo_promedio": "2.6325"
    },
    {
        "id_stock": "1100",
        "id_producto": "876",
        "existencia": "1",
        "costo_promedio": "44.46"
    },
    {
        "id_stock": "1172",
        "id_producto": "880",
        "existencia": "1",
        "costo_promedio": "3.276"
    },
    {
        "id_stock": "1177",
        "id_producto": "882",
        "existencia": "3",
        "costo_promedio": "4.095"
    },
    {
        "id_stock": "1179",
        "id_producto": "883",
        "existencia": "1",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "1182",
        "id_producto": "885",
        "existencia": "3",
        "costo_promedio": "9.945"
    },
    {
        "id_stock": "1184",
        "id_producto": "886",
        "existencia": "1",
        "costo_promedio": "9.36"
    },
    {
        "id_stock": "1185",
        "id_producto": "887",
        "existencia": "2",
        "costo_promedio": "11.7"
    },
    {
        "id_stock": "1186",
        "id_producto": "888",
        "existencia": "192",
        "costo_promedio": "0.7722"
    },
    {
        "id_stock": "1188",
        "id_producto": "889",
        "existencia": "174",
        "costo_promedio": "0.8658"
    },
    {
        "id_stock": "1204",
        "id_producto": "879",
        "existencia": "10",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "1206",
        "id_producto": "877",
        "existencia": "485",
        "costo_promedio": "2.1645"
    },
    {
        "id_stock": "1217",
        "id_producto": "891",
        "existencia": "15",
        "costo_promedio": "3.8025"
    },
    {
        "id_stock": "1218",
        "id_producto": "892",
        "existencia": "121",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "1219",
        "id_producto": "893",
        "existencia": "2",
        "costo_promedio": "5.265"
    },
    {
        "id_stock": "1220",
        "id_producto": "894",
        "existencia": "13",
        "costo_promedio": "1.5795"
    },
    {
        "id_stock": "1234",
        "id_producto": "895",
        "existencia": "931",
        "costo_promedio": "0.351"
    },
    {
        "id_stock": "1235",
        "id_producto": "896",
        "existencia": "16",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "1236",
        "id_producto": "890",
        "existencia": "5",
        "costo_promedio": "11.583"
    },
    {
        "id_stock": "1240",
        "id_producto": "899",
        "existencia": "71",
        "costo_promedio": "2.34"
    },
    {
        "id_stock": "1252",
        "id_producto": "901",
        "existencia": "35",
        "costo_promedio": "2.0358"
    },
    {
        "id_stock": "1253",
        "id_producto": "902",
        "existencia": "226",
        "costo_promedio": "0.9711"
    },
    {
        "id_stock": "1254",
        "id_producto": "903",
        "existencia": "325",
        "costo_promedio": "0.8307"
    },
    {
        "id_stock": "1257",
        "id_producto": "904",
        "existencia": "12",
        "costo_promedio": "0.2925"
    },
    {
        "id_stock": "1259",
        "id_producto": "905",
        "existencia": "21",
        "costo_promedio": "5.5575"
    },
    {
        "id_stock": "1263",
        "id_producto": "906",
        "existencia": "100",
        "costo_promedio": "0.1989"
    },
    {
        "id_stock": "1264",
        "id_producto": "907",
        "existencia": "21",
        "costo_promedio": "0.3744"
    },
    {
        "id_stock": "1265",
        "id_producto": "908",
        "existencia": "36",
        "costo_promedio": "7.605"
    },
    {
        "id_stock": "1266",
        "id_producto": "909",
        "existencia": "31",
        "costo_promedio": "7.605"
    },
    {
        "id_stock": "1267",
        "id_producto": "910",
        "existencia": "62",
        "costo_promedio": "7.605"
    },
    {
        "id_stock": "1282",
        "id_producto": "878",
        "existencia": "37",
        "costo_promedio": "1.521"
    },
    {
        "id_stock": "1290",
        "id_producto": "914",
        "existencia": "104",
        "costo_promedio": "1.755"
    },
    {
        "id_stock": "1292",
        "id_producto": "913",
        "existencia": "23",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "1301",
        "id_producto": "915",
        "existencia": "909",
        "costo_promedio": "2.5155"
    },
    {
        "id_stock": "1302",
        "id_producto": "916",
        "existencia": "164",
        "costo_promedio": "1.0296"
    },
    {
        "id_stock": "1314",
        "id_producto": "922",
        "existencia": "2",
        "costo_promedio": "5.265"
    },
    {
        "id_stock": "1323",
        "id_producto": "923",
        "existencia": "59",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "1324",
        "id_producto": "924",
        "existencia": "189",
        "costo_promedio": "1.6965"
    },
    {
        "id_stock": "1325",
        "id_producto": "925",
        "existencia": "926",
        "costo_promedio": "1.053"
    },
    {
        "id_stock": "1330",
        "id_producto": "926",
        "existencia": "219",
        "costo_promedio": "0.7605"
    },
    {
        "id_stock": "1331",
        "id_producto": "927",
        "existencia": "6",
        "costo_promedio": "0.351"
    },
    {
        "id_stock": "1333",
        "id_producto": "929",
        "existencia": "30",
        "costo_promedio": "16.38"
    },
    {
        "id_stock": "1334",
        "id_producto": "930",
        "existencia": "5",
        "costo_promedio": "8.775"
    },
    {
        "id_stock": "1335",
        "id_producto": "931",
        "existencia": "75",
        "costo_promedio": "13.455"
    },
    {
        "id_stock": "1336",
        "id_producto": "932",
        "existencia": "520",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "1337",
        "id_producto": "933",
        "existencia": "8",
        "costo_promedio": "0.4797"
    },
    {
        "id_stock": "1338",
        "id_producto": "934",
        "existencia": "33",
        "costo_promedio": "0.2808"
    },
    {
        "id_stock": "1339",
        "id_producto": "935",
        "existencia": "1",
        "costo_promedio": "1.17"
    },
    {
        "id_stock": "1340",
        "id_producto": "936",
        "existencia": "20",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "1341",
        "id_producto": "937",
        "existencia": "156",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "1342",
        "id_producto": "938",
        "existencia": "378",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "1343",
        "id_producto": "939",
        "existencia": "10",
        "costo_promedio": "0.2808"
    },
    {
        "id_stock": "1345",
        "id_producto": "941",
        "existencia": "17",
        "costo_promedio": "2.457"
    },
    {
        "id_stock": "1346",
        "id_producto": "942",
        "existencia": "87",
        "costo_promedio": "2.2815"
    },
    {
        "id_stock": "1348",
        "id_producto": "944",
        "existencia": "766",
        "costo_promedio": "1.638"
    },
    {
        "id_stock": "1365",
        "id_producto": "945",
        "existencia": "2",
        "costo_promedio": "7.02"
    },
    {
        "id_stock": "1366",
        "id_producto": "946",
        "existencia": "1",
        "costo_promedio": "11.5479"
    },
    {
        "id_stock": "1367",
        "id_producto": "947",
        "existencia": "16",
        "costo_promedio": "5.85"
    },
    {
        "id_stock": "1368",
        "id_producto": "948",
        "existencia": "25",
        "costo_promedio": "11.115"
    },
    {
        "id_stock": "1370",
        "id_producto": "900",
        "existencia": "4",
        "costo_promedio": "10.296"
    },
    {
        "id_stock": "1371",
        "id_producto": "949",
        "existencia": "84.5",
        "costo_promedio": "0.9711"
    },
    {
        "id_stock": "1374",
        "id_producto": "953",
        "existencia": "5",
        "costo_promedio": "13.338"
    },
    {
        "id_stock": "1375",
        "id_producto": "955",
        "existencia": "119",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "1376",
        "id_producto": "954",
        "existencia": "199",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "1377",
        "id_producto": "957",
        "existencia": "11",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "1379",
        "id_producto": "959",
        "existencia": "3",
        "costo_promedio": "2.808"
    },
    {
        "id_stock": "1380",
        "id_producto": "958",
        "existencia": "13",
        "costo_promedio": "3.276"
    },
    {
        "id_stock": "1381",
        "id_producto": "960",
        "existencia": "1",
        "costo_promedio": "0.5616"
    },
    {
        "id_stock": "1382",
        "id_producto": "961",
        "existencia": "39",
        "costo_promedio": "1.9656"
    },
    {
        "id_stock": "1383",
        "id_producto": "962",
        "existencia": "5",
        "costo_promedio": "2.2464"
    },
    {
        "id_stock": "1384",
        "id_producto": "963",
        "existencia": "59",
        "costo_promedio": "5.616"
    },
    {
        "id_stock": "1385",
        "id_producto": "964",
        "existencia": "0.5",
        "costo_promedio": "6.318"
    },
    {
        "id_stock": "1386",
        "id_producto": "965",
        "existencia": "0.2501",
        "costo_promedio": "8.424"
    },
    {
        "id_stock": "1393",
        "id_producto": "951",
        "existencia": "98.78",
        "costo_promedio": "2.1645"
    },
    {
        "id_stock": "1399",
        "id_producto": "966",
        "existencia": "101",
        "costo_promedio": "1.053"
    },
    {
        "id_stock": "1401",
        "id_producto": "967",
        "existencia": "18",
        "costo_promedio": "0.1404"
    },
    {
        "id_stock": "1403",
        "id_producto": "968",
        "existencia": "256",
        "costo_promedio": "0.6786"
    },
    {
        "id_stock": "1415",
        "id_producto": "969",
        "existencia": "88",
        "costo_promedio": "0.6435"
    },
    {
        "id_stock": "1418",
        "id_producto": "970",
        "existencia": "19",
        "costo_promedio": "0.4095"
    },
    {
        "id_stock": "1419",
        "id_producto": "971",
        "existencia": "9",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "1420",
        "id_producto": "972",
        "existencia": "2",
        "costo_promedio": "0.6786"
    },
    {
        "id_stock": "1421",
        "id_producto": "973",
        "existencia": "13",
        "costo_promedio": "0.8775"
    },
    {
        "id_stock": "1422",
        "id_producto": "974",
        "existencia": "5",
        "costo_promedio": "1.053"
    },
    {
        "id_stock": "1423",
        "id_producto": "975",
        "existencia": "1",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "1424",
        "id_producto": "976",
        "existencia": "4",
        "costo_promedio": "1.4625"
    },
    {
        "id_stock": "1425",
        "id_producto": "977",
        "existencia": "15",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "1427",
        "id_producto": "979",
        "existencia": "12",
        "costo_promedio": "0.936"
    },
    {
        "id_stock": "1428",
        "id_producto": "980",
        "existencia": "47",
        "costo_promedio": "0.819"
    },
    {
        "id_stock": "1429",
        "id_producto": "981",
        "existencia": "3",
        "costo_promedio": "1.755"
    },
    {
        "id_stock": "1430",
        "id_producto": "982",
        "existencia": "7",
        "costo_promedio": "0.6786"
    },
    {
        "id_stock": "1431",
        "id_producto": "983",
        "existencia": "131",
        "costo_promedio": "0.351"
    },
    {
        "id_stock": "1432",
        "id_producto": "984",
        "existencia": "5",
        "costo_promedio": "1.1115"
    },
    {
        "id_stock": "1433",
        "id_producto": "985",
        "existencia": "50",
        "costo_promedio": "1.2285"
    },
    {
        "id_stock": "1434",
        "id_producto": "986",
        "existencia": "9",
        "costo_promedio": "0.5616"
    },
    {
        "id_stock": "1435",
        "id_producto": "987",
        "existencia": "14",
        "costo_promedio": "0.9945"
    },
    {
        "id_stock": "1436",
        "id_producto": "988",
        "existencia": "10",
        "costo_promedio": "6.7275"
    },
    {
        "id_stock": "1437",
        "id_producto": "989",
        "existencia": "18",
        "costo_promedio": "10.7055"
    },
    {
        "id_stock": "1438",
        "id_producto": "990",
        "existencia": "17",
        "costo_promedio": "7.722"
    },
    {
        "id_stock": "1445",
        "id_producto": "992",
        "existencia": "12",
        "costo_promedio": "0.7371"
    },
    {
        "id_stock": "1446",
        "id_producto": "993",
        "existencia": "1341",
        "costo_promedio": "0.6318"
    },
    {
        "id_stock": "1447",
        "id_producto": "994",
        "existencia": "9",
        "costo_promedio": "0.585"
    },
    {
        "id_stock": "1449",
        "id_producto": "996",
        "existencia": "1382",
        "costo_promedio": "0.5616"
    },
    {
        "id_stock": "1462",
        "id_producto": "1000",
        "existencia": "175",
        "costo_promedio": "1.3455"
    },
    {
        "id_stock": "1621",
        "id_producto": "464",
        "existencia": "8",
        "costo_promedio": "7.02"
    },
    {
        "id_stock": "1932",
        "id_producto": "991",
        "existencia": "2",
        "costo_promedio": "3.51"
    },
    {
        "id_stock": "1980",
        "id_producto": "952",
        "existencia": "15",
        "costo_promedio": "4.095"
    },
    {
        "id_stock": "1983",
        "id_producto": "921",
        "existencia": "12",
        "costo_promedio": "6.318"
    },
    {
        "id_stock": "1991",
        "id_producto": "807",
        "existencia": "634",
        "costo_promedio": "1.404"
    },
    {
        "id_stock": "2281",
        "id_producto": "919",
        "existencia": "1",
        "costo_promedio": "10.53"
    }
];


let clientes = [{
    "id": "-1",
    "nombre": "General .",
    "direccion": "",
    "telefono": ""
}, {
    "id": "9",
    "nombre": "Fredi Alexander Zelaya",
    "direccion": "",
    "telefono": ""
}, {
    "id": "16",
    "nombre": "Virgilio Reyes",
    "direccion": "",
    "telefono": ""
}, {
    "id": "25",
    "nombre": "William Gutierrez",
    "direccion": "",
    "telefono": ""
}, {
    "id": "47",
    "nombre": "HIPOLITO TORRES HERNANDEZ",
    "direccion": "SANTA ROSA, LA UNION",
    "telefono": ""
}, {
    "id": "126",
    "nombre": "Cesar Requeno SAN MIGUEL",
    "direccion": "",
    "telefono": "7916-7996"
}, {
    "id": "194",
    "nombre": "Bonerje Guevara",
    "direccion": "",
    "telefono": ""
}, {
    "id": "209",
    "nombre": "Godofredo Cortez Escobar",
    "direccion": "",
    "telefono": "7280-4035"
}, {
    "id": "219",
    "nombre": "Manuel Alcides Garc\u00eda S\u00e1nchez",
    "direccion": "El Amate, San Miguel",
    "telefono": "6008-1254"
}, {
    "id": "225",
    "nombre": "Josu\u00e9 Arqu\u00edmides Alvarado Molina",
    "direccion": "Col. Via Satelite Calle San Carlos #2, San Miguel",
    "telefono": "7278-7592"
}, {
    "id": "264",
    "nombre": "RODOLFO MAARTINEZ",
    "direccion": "OSICALA, MORAZAN",
    "telefono": "77201896"
}, {
    "id": "265",
    "nombre": "PABLO HIM HERNANDEZ ",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": "70463348"
}, {
    "id": "266",
    "nombre": "JOSE BONILLA",
    "direccion": "SN FRANCISCO GOTERA, MORAZAN.",
    "telefono": "73385757"
}, {
    "id": "267",
    "nombre": "Rubio -",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "268",
    "nombre": "AGUSTIN -",
    "direccion": "",
    "telefono": ""
}, {
    "id": "269",
    "nombre": "OBED SALMERON",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "270",
    "nombre": "NAPOLEON MARTINEZ",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "271",
    "nombre": "JUAN HERNANDEZ ",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "272",
    "nombre": "SERGIO -",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "273",
    "nombre": "SANTIAGO- -",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "274",
    "nombre": "LUIS MARTINEZ",
    "direccion": "",
    "telefono": "75600871"
}, {
    "id": "275",
    "nombre": "ALFREDO MARTINEZ",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": "75666824"
}, {
    "id": "276",
    "nombre": "ADONIS GUEBARA ",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "277",
    "nombre": "SONIA -",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "278",
    "nombre": "MARGOT SOSA",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": "70280956"
}, {
    "id": "279",
    "nombre": "JAIME GUEBARA ",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": "60095251"
}, {
    "id": "280",
    "nombre": "ROBERTO ALVARADO CHICAZ",
    "direccion": "LA UNION (EMBARCADERO)",
    "telefono": "71549014"
}, {
    "id": "281",
    "nombre": "PEDRO RAM\u00cdREZ",
    "direccion": "LA UNION ",
    "telefono": "."
}, {
    "id": "282",
    "nombre": "ALEX RIVAS",
    "direccion": "LA UNION",
    "telefono": "."
}, {
    "id": "283",
    "nombre": "SIMON RODRIGUEZ",
    "direccion": "LA UNION (CANCHA EL RAPIDO)",
    "telefono": "."
}, {
    "id": "284",
    "nombre": "ALFREDO LOPEZ",
    "direccion": ".",
    "telefono": "."
}, {
    "id": "285",
    "nombre": "CRISTIAN RODRIGUEZ",
    "direccion": "LA UNION (CANCHA EL RAPIDO)",
    "telefono": "71009051"
}, {
    "id": "286",
    "nombre": "DINORA RODRIGUEZ",
    "direccion": "LA UNION (CANCHA EL RAPIDO)",
    "telefono": "."
}, {
    "id": "287",
    "nombre": "SERVITEC SHOP",
    "direccion": "LA UNION",
    "telefono": "."
}, {
    "id": "288",
    "nombre": "TIENDA JHOANA",
    "direccion": ".",
    "telefono": "."
}, {
    "id": "289",
    "nombre": "ALEXIS LA UNION",
    "direccion": ".",
    "telefono": "60141580"
}, {
    "id": "290",
    "nombre": "1 Y MAS SUPER",
    "direccion": "LA UNION",
    "telefono": "."
}, {
    "id": "291",
    "nombre": "PABLO HUMANZOR",
    "direccion": "SANTA ROSA DE LIMA",
    "telefono": ""
}, {
    "id": "292",
    "nombre": "GUALBERTO FERNANDEZ",
    "direccion": ".",
    "telefono": "."
}, {
    "id": "293",
    "nombre": "manuel funes",
    "direccion": "",
    "telefono": ""
}, {
    "id": "294",
    "nombre": "ANGEL MAURICIO PINEDA",
    "direccion": "USULUTAN",
    "telefono": ""
}, {
    "id": "295",
    "nombre": "Ingrid Vaquerano",
    "direccion": "USULUTAN",
    "telefono": "."
}, {
    "id": "296",
    "nombre": "NICOLAS ARIAS",
    "direccion": "USULUTAN",
    "telefono": "."
}, {
    "id": "297",
    "nombre": "MANUEL DE JESUS GONZALES ",
    "direccion": "USULUTAN",
    "telefono": "."
}, {
    "id": "298",
    "nombre": "ANA USULUTAN",
    "direccion": "USULUTAN",
    "telefono": "."
}, {
    "id": "299",
    "nombre": "ALEXIS ANTONIO ESCOBAR",
    "direccion": "SANTA ROSA DE LIMA",
    "telefono": ""
}, {
    "id": "300",
    "nombre": "ALEXIS JOSUE ESCOBAR",
    "direccion": "SANTA ROSA DE LIMA",
    "telefono": "."
}, {
    "id": "301",
    "nombre": "ROSMERY SANTA ROSA DE LIMA",
    "direccion": "SANTA ROSA DE LIMA",
    "telefono": ""
}, {
    "id": "302",
    "nombre": "SARA SANTA ROSA DE LIMA",
    "direccion": "SANTA ROSA DE LIMA",
    "telefono": ""
}, {
    "id": "303",
    "nombre": "LOIDA DE RIOS",
    "direccion": "SANTA ROSA",
    "telefono": ""
}, {
    "id": "304",
    "nombre": "IRIS SANTA ROSA",
    "direccion": "SANTA ROSA",
    "telefono": ""
}, {
    "id": "305",
    "nombre": "MIRIAN XIOMARA",
    "direccion": "SANTA ROSA",
    "telefono": "."
}, {
    "id": "306",
    "nombre": "GABRIEL ENOC SANTA ROSA",
    "direccion": "SANTA ROSA",
    "telefono": ""
}, {
    "id": "307",
    "nombre": "Otoniel Chavarria",
    "direccion": "USULUTAN\/USULUTAN",
    "telefono": ""
}, {
    "id": "308",
    "nombre": "JULIO SALAZAR",
    "direccion": "CIUDAD BARRIOS, MERCADO",
    "telefono": ""
}, {
    "id": "309",
    "nombre": "LUIS -",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": "75438569"
}, {
    "id": "310",
    "nombre": "SANTOS -",
    "direccion": "",
    "telefono": "72068810"
}, {
    "id": "311",
    "nombre": "CARLOS L\u00d3PEZ.",
    "direccion": "SANTIAGO DE MARIA",
    "telefono": ""
}, {
    "id": "312",
    "nombre": "RIGOBERTO PEREZ",
    "direccion": "SANTIAGO DE MARIA",
    "telefono": ""
}, {
    "id": "313",
    "nombre": "ISABEL MARROQU\u00cdN",
    "direccion": "SANTIAGO DE MARIA",
    "telefono": ""
}, {
    "id": "314",
    "nombre": "ERICK GARC\u00cdA",
    "direccion": "SANTIAGO DE MARIA",
    "telefono": ""
}, {
    "id": "315",
    "nombre": "RONAL GARCIA",
    "direccion": "SANTIAGO DE MARIA",
    "telefono": ""
}, {
    "id": "316",
    "nombre": "ALEX ZAPATA ",
    "direccion": "SANTIAGO DE MARIA",
    "telefono": ""
}, {
    "id": "317",
    "nombre": "LUIS ALONZO",
    "direccion": "SANTIAGO DE MARIA",
    "telefono": ""
}, {
    "id": "318",
    "nombre": "WALTER ALEXANDER PINEDA",
    "direccion": "VILLA EL TRIUNFO",
    "telefono": ""
}, {
    "id": "319",
    "nombre": "Oscar Argueta",
    "direccion": "El Triunfo",
    "telefono": ""
}, {
    "id": "320",
    "nombre": "ALTA GRACIA RODR\u00cdGUEZ",
    "direccion": "VILLA EL TRIUNFO",
    "telefono": ""
}, {
    "id": "321",
    "nombre": "GABRIEL USULUTAN",
    "direccion": "",
    "telefono": ""
}, {
    "id": "322",
    "nombre": "ROBERTO ZELAYA",
    "direccion": "USULUTAN",
    "telefono": ""
}, {
    "id": "323",
    "nombre": "DIMAS GUEBARA ",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "324",
    "nombre": "LORENZO -",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "325",
    "nombre": "RODOLFO APARICIO",
    "direccion": "",
    "telefono": ""
}, {
    "id": "326",
    "nombre": "ALEX HERRERA",
    "direccion": "Santa rosa",
    "telefono": ""
}, {
    "id": "327",
    "nombre": "ISIDRO HERN\u00c1NDEZ",
    "direccion": "Santa rosa.",
    "telefono": ""
}, {
    "id": "328",
    "nombre": "EUGENIA SANTA ROSA ",
    "direccion": "Santa rosa",
    "telefono": ""
}, {
    "id": "329",
    "nombre": "SANDRA LAINEZ DE FUENTES",
    "direccion": "",
    "telefono": "7007-6262"
}, {
    "id": "330",
    "nombre": "TIENDA LA NUEVA EVER GRIN",
    "direccion": "LA UNION",
    "telefono": ""
}, {
    "id": "331",
    "nombre": "CARMEN PALACIO",
    "direccion": "SANTA ROSA",
    "telefono": ""
}, {
    "id": "332",
    "nombre": "NOE ALVAREZ",
    "direccion": "LA UNION \/ LA UNION",
    "telefono": ""
}, {
    "id": "333",
    "nombre": "MARIA DEL CARMEN PINEDA SUPER DOLAR",
    "direccion": "LA UNION \/ LA UNION",
    "telefono": ""
}, {
    "id": "334",
    "nombre": "GEOVANI L\u00d3PEZ",
    "direccion": "LA UNION",
    "telefono": ""
}, {
    "id": "335",
    "nombre": "ERICK RAFAEL HENRIQUEZ HERNANDEZ",
    "direccion": "",
    "telefono": "6113-5871"
}, {
    "id": "336",
    "nombre": "ALCALDIA EL CARMEN ",
    "direccion": "BARRIO EL CENTRO, EL CARMEN",
    "telefono": ""
}, {
    "id": "337",
    "nombre": "MARVIN CAMPOS",
    "direccion": "CIUDAD BARRIOS, MERCADO",
    "telefono": ""
}, {
    "id": "338",
    "nombre": "ISIDRO PORTILLO",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "339",
    "nombre": "JOSE PEREZ",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "340",
    "nombre": "GERSON -",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "341",
    "nombre": "OVIDIO -",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "342",
    "nombre": "BERTA -",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "343",
    "nombre": "PLASTICOS Y PRODUCTOS VARIOS",
    "direccion": "LA UNION",
    "telefono": ""
}, {
    "id": "344",
    "nombre": "ALFREDO FLORES",
    "direccion": "USULUTAN",
    "telefono": ""
}, {
    "id": "345",
    "nombre": "ANTONIO USULUTAN",
    "direccion": "USULUTAN \/ USULUTAN",
    "telefono": ""
}, {
    "id": "346",
    "nombre": "MARTHA GUSMAN",
    "direccion": "JUCUAPA",
    "telefono": ""
}, {
    "id": "347",
    "nombre": "DINORA VARIEDADES Y PAPELERIA",
    "direccion": "VILLA EL TRIUNFO",
    "telefono": ""
}, {
    "id": "348",
    "nombre": "XAVIER SANTA ROSA DE LIMA",
    "direccion": "SANTA ROSA DE LIMA",
    "telefono": ""
}, {
    "id": "349",
    "nombre": "PAPITO SANTA ROSA DE LIMA",
    "direccion": "",
    "telefono": ""
}, {
    "id": "350",
    "nombre": "CHELE SANTA ROSA DE LIMA",
    "direccion": "",
    "telefono": ""
}, {
    "id": "351",
    "nombre": "FERRETER\u00cdA EL NI\u00d1O MARISOL ",
    "direccion": "",
    "telefono": ""
}, {
    "id": "352",
    "nombre": "CELL PRO",
    "direccion": "",
    "telefono": ""
}, {
    "id": "353",
    "nombre": "EDWIN PORTILLO USULUTAN",
    "direccion": "",
    "telefono": ""
}, {
    "id": "354",
    "nombre": "ALEX JIQUILISCO",
    "direccion": "JIQUILISCO",
    "telefono": ""
}, {
    "id": "355",
    "nombre": "DORCA JUCUAPA ",
    "direccion": "",
    "telefono": ""
}, {
    "id": "356",
    "nombre": "UBENCE ALEGRIA",
    "direccion": "USULUTAN",
    "telefono": "70803224"
}, {
    "id": "357",
    "nombre": "MARCOS SANCHEZ",
    "direccion": "JIQUILISCO",
    "telefono": "77708969"
}, {
    "id": "358",
    "nombre": "SANDRA -",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "359",
    "nombre": "barbudo la union",
    "direccion": "",
    "telefono": ""
}, {
    "id": "360",
    "nombre": "ROSA EMILIA V\u00c1ZQUEZ \/ FERRETER\u00cdA EL TODITO",
    "direccion": "LOLOTIQUE",
    "telefono": ""
}, {
    "id": "361",
    "nombre": "LORENZO LOBO \/ SUPER SAN ANTONIO",
    "direccion": "LOLOTIQUE",
    "telefono": ""
}, {
    "id": "362",
    "nombre": "DON BETO -",
    "direccion": "",
    "telefono": ""
}, {
    "id": "363",
    "nombre": "ESTEBAN MARTINES USULUTAN",
    "direccion": "",
    "telefono": ""
}, {
    "id": "364",
    "nombre": "Aquilino Aguirre",
    "direccion": "USULUTAN\/USULUTAN",
    "telefono": ""
}, {
    "id": "365",
    "nombre": "ALEX CAMPOS SANTIAGO DE MARIA",
    "direccion": "",
    "telefono": ""
}, {
    "id": "366",
    "nombre": "ELMER SANTIAGO DE MARIA",
    "direccion": "",
    "telefono": ""
}, {
    "id": "367",
    "nombre": "ELMER TORRES \/ FERRETERIA TORRES",
    "direccion": "",
    "telefono": ""
}, {
    "id": "368",
    "nombre": "HILSIA REYES",
    "direccion": "OSICALA\/MORAZAN",
    "telefono": "76534754"
}, {
    "id": "369",
    "nombre": "ULICES MARTINEZ",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "370",
    "nombre": "LUIS ANTONIO -",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "371",
    "nombre": "YUDITH \/",
    "direccion": "OSICALA\/MORAZAN",
    "telefono": "62010878"
}, {
    "id": "372",
    "nombre": "COMERCIAL FUENTES",
    "direccion": "",
    "telefono": ""
}, {
    "id": "373",
    "nombre": "ROBERTO S\u00c1NCHEZ",
    "direccion": "",
    "telefono": ""
}, {
    "id": "374",
    "nombre": "CARLOS GOMEZ",
    "direccion": "VILLA EL TRIUNFO",
    "telefono": ""
}, {
    "id": "375",
    "nombre": "TIENDA ANTONI PUERTO EL TRIUNFO",
    "direccion": "PUERTO EL TRIUNFO",
    "telefono": ""
}, {
    "id": "376",
    "nombre": "CARMEN .",
    "direccion": "SAN TRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "377",
    "nombre": "DELMI GUEVARA",
    "direccion": "SANTA ROSA DE LIMA, LA UNION ",
    "telefono": ""
}, {
    "id": "378",
    "nombre": "PATY RODRIGUEZ",
    "direccion": "",
    "telefono": ""
}, {
    "id": "379",
    "nombre": "MANUEL MARTINEZ",
    "direccion": "",
    "telefono": "7721-6202"
}, {
    "id": "380",
    "nombre": "LETICIA UMANZOR",
    "direccion": "USULUTAN",
    "telefono": ""
}, {
    "id": "381",
    "nombre": "DEISI DE ROMERO",
    "direccion": "VILLA EL TRIUNFO",
    "telefono": ""
}, {
    "id": "382",
    "nombre": "LOLY .",
    "direccion": "ANAMOROZ, LA UNION",
    "telefono": ""
}, {
    "id": "383",
    "nombre": "MIGUEL ZELAYA",
    "direccion": "ANAMOROZ, LA UNION",
    "telefono": ""
}, {
    "id": "384",
    "nombre": "PEDRO -",
    "direccion": "ANAMOROZ, LA UNION",
    "telefono": ""
}, {
    "id": "385",
    "nombre": "FERRETER\u00cdA SHAIDAI",
    "direccion": "ANAMOROZ, LA UNION",
    "telefono": ""
}, {
    "id": "386",
    "nombre": "OSCAR HERNANDEZ ",
    "direccion": "ANAMOROZ, LA UNION",
    "telefono": ""
}, {
    "id": "387",
    "nombre": "IGNACIO HERNANDEZ ",
    "direccion": "ANAMOROZ, LA UNION",
    "telefono": ""
}, {
    "id": "388",
    "nombre": "TIENDA ROSITA \/ ROSA ELVIRA GUEVARA",
    "direccion": "LOLOTIQUE",
    "telefono": ""
}, {
    "id": "389",
    "nombre": "JUAN CARLOS G\u00d3MEZ",
    "direccion": "JIQUILISCO",
    "telefono": ""
}, {
    "id": "390",
    "nombre": "HIM 2 -",
    "direccion": "",
    "telefono": ""
}, {
    "id": "391",
    "nombre": "PELUQUERIA GUZMAN",
    "direccion": "",
    "telefono": ""
}, {
    "id": "392",
    "nombre": "AMINTA HERNANDEZ ",
    "direccion": "",
    "telefono": ""
}, {
    "id": "393",
    "nombre": "TIENDA ORIENTAL \/ CARMEN CA\u00d1AS",
    "direccion": "SAN RAFAEL ORIENTE",
    "telefono": ""
}, {
    "id": "394",
    "nombre": "AGROSERVICIO RUBIO \/ CARMEN JULIA CAMPOS DE RUIZ",
    "direccion": "SAN RAFAEL ORIENTE",
    "telefono": ""
}, {
    "id": "395",
    "nombre": "AGROSERVICIO LA ESPUELA \/ JAIME AMAYA",
    "direccion": "SAN JORGE ",
    "telefono": ""
}, {
    "id": "396",
    "nombre": "AGROFERRETERIA RAMOS FLORES \/ JUAN RAMON RAMOS FLORES",
    "direccion": "SAN JORGE",
    "telefono": ""
}, {
    "id": "397",
    "nombre": "FARMACIA ACUARIO \/ IMELDA CAMPOS",
    "direccion": "SAN JORGE",
    "telefono": ""
}, {
    "id": "398",
    "nombre": "FERRETERIA LOS 5 HERMANOS",
    "direccion": "USULUTAN \/ ALEGRIA",
    "telefono": ""
}, {
    "id": "399",
    "nombre": "TIENDA CRISTIAN \/ ALEGRIA",
    "direccion": "USULUTAN \/ ALEGRIA",
    "telefono": ""
}, {
    "id": "400",
    "nombre": "CRISTINA DE JESUS ALVARENGA \/ VARIEDADES ESTEFANY ",
    "direccion": "USULUTAN \/ BERLIN",
    "telefono": ""
}, {
    "id": "401",
    "nombre": "AIDA SOFIA AVILES DE RUBIO \/ J.A AGUILA FERRETERIA INSUMOS AGRICOLAS",
    "direccion": "USULUTAN \/ BERLIN",
    "telefono": ""
}, {
    "id": "402",
    "nombre": "Pedro Mejia",
    "direccion": "",
    "telefono": ""
}, {
    "id": "403",
    "nombre": "JOSE ZOLORSANO",
    "direccion": "MONCAGUA, SAN MIGUEL.",
    "telefono": "71108255"
}, {
    "id": "404",
    "nombre": "JOSE RAFAEL COLATO",
    "direccion": "MONCAGUA, SAN MIGUEL.",
    "telefono": "7086-3072"
}, {
    "id": "405",
    "nombre": "TERESA CASTRO",
    "direccion": "MONCAGUA, SAN MIGUEL.",
    "telefono": ""
}, {
    "id": "406",
    "nombre": "ORLANDO ZORTO. LACTEOS ROSA",
    "direccion": "GUATAGIAGUA, SAN MIGUEL.",
    "telefono": ""
}, {
    "id": "407",
    "nombre": "JAIRO FLORES",
    "direccion": "GUATAGIAGUA, SAN MIGUEL.",
    "telefono": ""
}, {
    "id": "408",
    "nombre": "COMERCIAL MIGUEL",
    "direccion": "GUATAGIAGUA, SAN MIGUEL.",
    "telefono": ""
}, {
    "id": "409",
    "nombre": "FRANCISCO BENITES",
    "direccion": "GUATAGIAGUA, SAN MIGUEL.",
    "telefono": "7732-9347"
}, {
    "id": "410",
    "nombre": "JOSE ZARAVIA",
    "direccion": "SOCIEDAD, LA UNION",
    "telefono": "7040-0956"
}, {
    "id": "411",
    "nombre": "UMBERTO BERRIOS. NEGOCIOS BERLUZ",
    "direccion": "SOCIEDAD, LA UNION",
    "telefono": ""
}, {
    "id": "412",
    "nombre": "OSCAR YASSER FLORES",
    "direccion": "SOCIEDAD, LA UNION",
    "telefono": "7921-6350"
}, {
    "id": "413",
    "nombre": "NEHEMIAS SEGOVIA",
    "direccion": "SOCIEDAD, LA UNION",
    "telefono": ""
}, {
    "id": "414",
    "nombre": "GERVER ORELLANA",
    "direccion": "CHAPELTIQUE, SAN MIGUEL",
    "telefono": "7480-4909"
}, {
    "id": "415",
    "nombre": "MIGUEL SANCHEZ",
    "direccion": "CHAPELTIQUE, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "416",
    "nombre": "YAMILEHT BARRIOS",
    "direccion": "CIUDAD BARRIOS, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "417",
    "nombre": "HEIDY DIAZ",
    "direccion": "CIUDAD BARRIOS, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "418",
    "nombre": "ESTER PORTILLO",
    "direccion": "CIUDAD BARRIOS, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "419",
    "nombre": "FLOR MARTINEZ",
    "direccion": "CIUDAD BARRIOS, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "420",
    "nombre": "MAURICIO BENITEZ",
    "direccion": "CIUDAD BARRIOS, SAN MIGUEL",
    "telefono": "7676-0959"
}, {
    "id": "421",
    "nombre": "LUCIO MARTINEZ",
    "direccion": "CIUDAD BARRIOS, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "422",
    "nombre": "MIRIAN ZAPATA",
    "direccion": "CIUDAD BARRIOS, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "423",
    "nombre": "HERNESTO PORTILLO",
    "direccion": "CIUDAD BARRIOS, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "424",
    "nombre": "MARLENE RODRIGUEZ",
    "direccion": "CIUDAD BARRIOS, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "425",
    "nombre": "GERTRUDIS MELENDEZ",
    "direccion": "SAN LUIS DE LA REINA, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "426",
    "nombre": "ANA YAMILEHT RIVERA. FERRETERIA REQUENO",
    "direccion": "SAN LUIS DE LA REINA, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "427",
    "nombre": "SANTOS CRUZ",
    "direccion": "ANAMOROZ, LA UNION",
    "telefono": ""
}, {
    "id": "428",
    "nombre": "GEOVANY GARCIA",
    "direccion": "ANAMOROZ, LA UNION",
    "telefono": ""
}, {
    "id": "429",
    "nombre": "MARILY BONILLA",
    "direccion": "",
    "telefono": ""
}, {
    "id": "430",
    "nombre": "ANGEL MATEO HERNANDEZ ",
    "direccion": "ANAMOROZ, LA UNION",
    "telefono": ""
}, {
    "id": "431",
    "nombre": "JOSE ROMERO",
    "direccion": "SANTA ROSA DE LIMA, LA UNION",
    "telefono": ""
}, {
    "id": "432",
    "nombre": "MARVIN HERNANDEZ ",
    "direccion": "SANTA ROSA DE LIMA, LA UNION",
    "telefono": ""
}, {
    "id": "433",
    "nombre": "AGROFERRETERIA CUBIAS",
    "direccion": "CHINAMECA",
    "telefono": "2665-0982"
}, {
    "id": "434",
    "nombre": "JOSE ANIBAL PEREZ",
    "direccion": "JIQUILISCO",
    "telefono": ""
}, {
    "id": "435",
    "nombre": "PRIMO CHINO",
    "direccion": "",
    "telefono": ""
}, {
    "id": "436",
    "nombre": "HENRRY HERNANDEZ",
    "direccion": "SESORI, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "437",
    "nombre": "MILTON VENTURA",
    "direccion": "SESORI, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "438",
    "nombre": "ADILSON AYALA",
    "direccion": "SESORI, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "439",
    "nombre": "SANTOS ISAIAS DEL SICD",
    "direccion": "SESORI, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "440",
    "nombre": "RITO ADAN PRUDENCIO",
    "direccion": "JOCORO, MORAZAN",
    "telefono": ""
}, {
    "id": "441",
    "nombre": "IMELDA FLORES",
    "direccion": "JOCORO, MORAZAN",
    "telefono": ""
}, {
    "id": "442",
    "nombre": "MARCOS JOSE MARTINEZ TIENDA SAN ANTONIO ",
    "direccion": "JOCORO, MORAZAN",
    "telefono": ""
}, {
    "id": "443",
    "nombre": "ELSI BONILLA",
    "direccion": "SOCIEDAD, MORAZAN",
    "telefono": ""
}, {
    "id": "444",
    "nombre": "DAVID ZARAVIA",
    "direccion": "SOCIEDAD, MORAZAN",
    "telefono": ""
}, {
    "id": "445",
    "nombre": "REINA BERRIOS FERRETERIA ZARAVIA",
    "direccion": "SOCIEDAD, MORAZAN",
    "telefono": ""
}, {
    "id": "446",
    "nombre": "RAUL ORTEZ TIENDA ROXANA",
    "direccion": "CORINTO, MORAZAN",
    "telefono": ""
}, {
    "id": "447",
    "nombre": "CRISTELA MOLINA",
    "direccion": "CORINTO, MORAZAN",
    "telefono": ""
}, {
    "id": "448",
    "nombre": "STEVEN GUTIERREZ",
    "direccion": "CORINTO, MORAZAN",
    "telefono": ""
}, {
    "id": "449",
    "nombre": "GILBERTO ANTONIO SORTO ",
    "direccion": "CORINTO, MORAZAN",
    "telefono": ""
}, {
    "id": "450",
    "nombre": "EDWIN NORBERTO VILLATORO FERRETERIA SALVADORE\u00d1A",
    "direccion": "CHAPELTIQUE, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "451",
    "nombre": "ROMAN MARTINEZ",
    "direccion": "CIUDAD BARRIOS, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "452",
    "nombre": "FRANCISCA SOREANO",
    "direccion": "CIUDAD BARRIOS, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "453",
    "nombre": "ANTONIO MARQUEZ",
    "direccion": "CIUDAD BARRIOS, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "454",
    "nombre": "GERLY SORTO",
    "direccion": "CHAPELTIQUE, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "455",
    "nombre": "EL\u00cdAS V\u00c1SQUEZ",
    "direccion": "USULUTAN",
    "telefono": ""
}, {
    "id": "456",
    "nombre": "JOSE FAUSTINO CARRANZA COREA ",
    "direccion": "",
    "telefono": ""
}, {
    "id": "457",
    "nombre": "RAMON ANTONIO BONILLA",
    "direccion": "BERLIN",
    "telefono": ""
}, {
    "id": "458",
    "nombre": "AGROFERRETERIA EL BUEN AMIGO \/ DAMARIS ELIZABETH MARQUEZ",
    "direccion": "USULUTAN \/ BERLIN",
    "telefono": ""
}, {
    "id": "459",
    "nombre": "CYBER ESPACIO DIGITAL \/ JUAN CARLOS GARCIA VASQUEZ",
    "direccion": "USULUTAN \/ BERLIN",
    "telefono": ""
}, {
    "id": "460",
    "nombre": "GLORIA ISABEL SALGADO",
    "direccion": "USULUTAN \/ MERCEDES UMA\u00d1A",
    "telefono": ""
}, {
    "id": "461",
    "nombre": "ELMER ZAPATA",
    "direccion": "SANTIAGO DE MARIA",
    "telefono": ""
}, {
    "id": "462",
    "nombre": "CARLOS RODRIGUEZ",
    "direccion": "BERLIN",
    "telefono": ""
}, {
    "id": "463",
    "nombre": "CANDELARIO JOYA",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "464",
    "nombre": "RUT AIDA RUBIO PARADA \/ AGROFERRETERIA LA FE",
    "direccion": "SAN JORGE",
    "telefono": ""
}, {
    "id": "465",
    "nombre": "JAIRO ANTONIO NATIVI ZELAYA \/ TIENDA NUEVA",
    "direccion": "",
    "telefono": ""
}, {
    "id": "466",
    "nombre": "JESUS NOEL RUBIO",
    "direccion": "SAN JORGE",
    "telefono": ""
}, {
    "id": "467",
    "nombre": "MANUEL QUINTANILLA",
    "direccion": "SESORI, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "468",
    "nombre": "UMBERTO VILLACORTA",
    "direccion": "SESORI, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "469",
    "nombre": "NUBIA DE MORAN (TIENDA REMANENTE)",
    "direccion": "SESORI, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "470",
    "nombre": "LUCY MACHADO",
    "direccion": "CHAPELTIQUE, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "471",
    "nombre": "YANETH CARRANZA (TIENDA YANET)",
    "direccion": "SESORI, SAN MIGUEL",
    "telefono": ""
}, {
    "id": "472",
    "nombre": "LUIS BENITEZ",
    "direccion": "GUATAGIAGUA, SAN MIGUEL.",
    "telefono": ""
}, {
    "id": "473",
    "nombre": "SUPER TIENDA \/DON PEDRO\/",
    "direccion": "GUATAGIAGUA, SAN MIGUEL.",
    "telefono": ""
}, {
    "id": "474",
    "nombre": "ANTONIO MALDONADO",
    "direccion": "CORINTO\/MORAZAN ***A LA PAR DEL RESTAURANTE ALAMEDA***",
    "telefono": ""
}, {
    "id": "475",
    "nombre": "MARIA ESTHER ALVAREZ",
    "direccion": "CORINTO\/MORAZAN ***MEDIA CUADRA DESPUES DE TIENDA ROXANA***",
    "telefono": ""
}, {
    "id": "476",
    "nombre": "VILMA EVELYN VASQUEZ (TIENDA KEYLI)",
    "direccion": "CORINTO\/MORAZAN ***COSTADO IZQUIERDO DE FARMACIA BRASIL***",
    "telefono": ""
}, {
    "id": "477",
    "nombre": "ELVA MEDRANO",
    "direccion": "CORINTO\/MORAZAN ***A LA PAR DE LA POLICIA NACIONAL CIVIL***",
    "telefono": ""
}, {
    "id": "478",
    "nombre": "DUGLAS ISMAEL ARGUETA",
    "direccion": "CORINTO\/MORAZAN ***A LA PAR DE LA CASA DE LA JUVENTUD***",
    "telefono": ""
}, {
    "id": "479",
    "nombre": "FRANCIS CHAVEZ (TIENDA ENMANUEL)",
    "direccion": "SOCIEDAD\/MORAZAN ***UNA CUADRA AL PONIENTE FERRETERIA SARAVIA ***",
    "telefono": ""
}, {
    "id": "480",
    "nombre": "JOSE ARTURO IGLESIAS",
    "direccion": "",
    "telefono": ""
}, {
    "id": "481",
    "nombre": "SALOMON FIGEROA",
    "direccion": "BERLIN",
    "telefono": ""
}, {
    "id": "482",
    "nombre": "JOSE ROGELIO CALDERON",
    "direccion": "BERLIN",
    "telefono": ""
}, {
    "id": "483",
    "nombre": "EVER CAMPOS",
    "direccion": "CAROLINA\/ SAN MIGUEL",
    "telefono": "72582721"
}, {
    "id": "484",
    "nombre": "JUAN ORELLANA",
    "direccion": "CIUDAD BARRIOS",
    "telefono": ""
}, {
    "id": "485",
    "nombre": "RICHARD CAMPOS",
    "direccion": "CIUDAD BARRIOS",
    "telefono": ""
}, {
    "id": "486",
    "nombre": "GERBERTH ORELLANA \/PICHON\/",
    "direccion": "CHAPELTIQUE",
    "telefono": ""
}, {
    "id": "487",
    "nombre": "JORGE LA UNION",
    "direccion": "LA UNION, LA UNION",
    "telefono": ""
}, {
    "id": "488",
    "nombre": "MILAGRO ROSARIO",
    "direccion": "SANTIAGO DE MARIA",
    "telefono": ""
}, {
    "id": "489",
    "nombre": "JUAN RAMON CRUZ",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "490",
    "nombre": "ROSA ESPERANZA DE JOYA",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "491",
    "nombre": "ALBA H",
    "direccion": "OSICALA\/MORAZAN",
    "telefono": ""
}, {
    "id": "492",
    "nombre": "MIGUEL FRANCISCO HERNANDEZ",
    "direccion": "USULUTAN \/ MERCEDES UMA\u00d1A",
    "telefono": ""
}, {
    "id": "493",
    "nombre": "DEISI BRIOSO",
    "direccion": "BERLIN",
    "telefono": ""
}, {
    "id": "494",
    "nombre": "ELVIRA TREJO",
    "direccion": "BERLIN",
    "telefono": ""
}, {
    "id": "495",
    "nombre": "JOSE ANTONIO CABRERA",
    "direccion": "CORINTO\/MORAZAN ***COSTADO IZQUIERDO DE FARMACIA BRASIL***",
    "telefono": ""
}, {
    "id": "496",
    "nombre": "FERRETERIA SAN JOSE .",
    "direccion": "CORINTO\/MORAZAN ***MEDIA CUADRA ANTES DE TIENDA ROXANA***",
    "telefono": ""
}, {
    "id": "497",
    "nombre": "FLORENTINO VILLATORO",
    "direccion": "CORINTO, MORAZAN ",
    "telefono": ""
}, {
    "id": "498",
    "nombre": "MAURICIO CRUZ",
    "direccion": "",
    "telefono": ""
}, {
    "id": "499",
    "nombre": "ELSI DE CARDONA",
    "direccion": "USULUTAN",
    "telefono": ""
}, {
    "id": "500",
    "nombre": "NORMA VASQUEZ",
    "direccion": "VILLA EL TRIUNFO",
    "telefono": ""
}, {
    "id": "501",
    "nombre": "JUANA ARANDA",
    "direccion": "VILLA EL TRIUNFO",
    "telefono": ""
}, {
    "id": "502",
    "nombre": "MERCEDES CAMPOS",
    "direccion": "USULUTAN \/ SANTIAGO DE MARIA",
    "telefono": ""
}, {
    "id": "503",
    "nombre": "ANA VILMA PEREZ",
    "direccion": "",
    "telefono": ""
}, {
    "id": "504",
    "nombre": "MARIO JUCUAPA",
    "direccion": "",
    "telefono": ""
}, {
    "id": "505",
    "nombre": "ESPERANZA BONILLA",
    "direccion": "",
    "telefono": ""
}, {
    "id": "506",
    "nombre": "OSWALDO CANT\u00d3N",
    "direccion": "",
    "telefono": ""
}, {
    "id": "507",
    "nombre": "JOSE RAMON ARTOLA",
    "direccion": "LA UNION, LA UNION",
    "telefono": ""
}, {
    "id": "508",
    "nombre": "ELSA SONIA MENDOSA",
    "direccion": "YUCUAQUIN",
    "telefono": ""
}, {
    "id": "509",
    "nombre": "LIBRERIA ELISITA",
    "direccion": "YUCUAQUIN",
    "telefono": ""
}, {
    "id": "510",
    "nombre": "TIENDA ALCIDA YANET \/ SALVADOR GALVES",
    "direccion": "YUCUAQUIN",
    "telefono": ""
}, {
    "id": "511",
    "nombre": "ROSA ISELA PINEDA",
    "direccion": "YUCUAQUIN",
    "telefono": ""
}, {
    "id": "512",
    "nombre": "ALVINA ESCOLAR DE PEREZ",
    "direccion": "YUCUAQUIN",
    "telefono": ""
}, {
    "id": "513",
    "nombre": "NEHEMIAS MENDOSA",
    "direccion": "YUCUAQUIN",
    "telefono": ""
}, {
    "id": "514",
    "nombre": "ALEXIS GRANADOS",
    "direccion": "COMACARAN",
    "telefono": ""
}, {
    "id": "515",
    "nombre": "RICARDO ALFARO",
    "direccion": "SESORI, SN MIGUEL",
    "telefono": ""
}, {
    "id": "516",
    "nombre": "TELMA JANDRES",
    "direccion": "SESORI, SN MIGUEL",
    "telefono": ""
}, {
    "id": "517",
    "nombre": "HECTOR ANTONIO MENBRE\u00d1O",
    "direccion": "SESORI, SN MIGUEL",
    "telefono": ""
}, {
    "id": "518",
    "nombre": "MARIA CELIA GALDAMES ",
    "direccion": "SESORI, SN MIGUEL",
    "telefono": ""
}, {
    "id": "519",
    "nombre": "Ni\u00f1a maria -",
    "direccion": "SANTA ROSA DE LIMA, LA UNION",
    "telefono": ""
}, {
    "id": "520",
    "nombre": "Maria Felix",
    "direccion": "SANTA ROSA DE LIMA, LA UNION",
    "telefono": ""
}, {
    "id": "521",
    "nombre": "Marlon MARTINEZ",
    "direccion": "Poloroz, la union",
    "telefono": ""
}, {
    "id": "522",
    "nombre": "Tienda Leiba",
    "direccion": "Poloroz, la union",
    "telefono": ""
}, {
    "id": "523",
    "nombre": "Tienda Marina",
    "direccion": "Poloroz, la union",
    "telefono": ""
}, {
    "id": "524",
    "nombre": "El da rubidia Yanes",
    "direccion": "Poloroz, la union",
    "telefono": ""
}, {
    "id": "525",
    "nombre": "Edilda alfaro Farmacia la vid",
    "direccion": "Poloroz, la union",
    "telefono": ""
}, {
    "id": "526",
    "nombre": "CIBER LOS ANGELES ",
    "direccion": "SOCIEDAD, MORAZAN",
    "telefono": ""
}, {
    "id": "527",
    "nombre": "MARIA HERNADEZ \/VARIEDADES ISABEL",
    "direccion": "CHINAMECA",
    "telefono": ""
}, {
    "id": "528",
    "nombre": "ALICIA A",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "529",
    "nombre": "Dani Rico",
    "direccion": "SANTA ROSA DE LIMA, LA UNION",
    "telefono": ""
}, {
    "id": "530",
    "nombre": "Variedades Amaya",
    "direccion": "CORINTO, MORAZAN",
    "telefono": ""
}, {
    "id": "531",
    "nombre": "Rigo Reyes",
    "direccion": "CORINTO, MORAZAN",
    "telefono": ""
}, {
    "id": "532",
    "nombre": "Cesar Torres",
    "direccion": "CORINTO, MORAZAN",
    "telefono": ""
}, {
    "id": "533",
    "nombre": "MARITZA MELENDEZ",
    "direccion": "BERLIN",
    "telefono": ""
}, {
    "id": "534",
    "nombre": "CELSA ELISA SANDOBAL",
    "direccion": "BERLIN",
    "telefono": ""
}, {
    "id": "535",
    "nombre": "FERRETERIA JOSSELIN",
    "direccion": "SAN MIGUEL",
    "telefono": ""
}, {
    "id": "536",
    "nombre": "ECTOR GOMEZ \/ ELECTRONICA GOMEZ",
    "direccion": "",
    "telefono": ""
}, {
    "id": "537",
    "nombre": "OMAR ADAN",
    "direccion": "CIUDAD PACIFICA",
    "telefono": ""
}, {
    "id": "538",
    "nombre": "GRISELDA QUINTANILLA APARICIO",
    "direccion": "SAN JORGUE",
    "telefono": ""
}, {
    "id": "539",
    "nombre": "Tienda Marlon Josue ",
    "direccion": "CORINTO, MORAZAN",
    "telefono": ""
}, {
    "id": "540",
    "nombre": "Juan Carlos Joya",
    "direccion": "CORINTO, MORAZAN",
    "telefono": ""
}, {
    "id": "541",
    "nombre": "Roxana Valladares",
    "direccion": "SANTA ROSA DE LIMA, LA UNION",
    "telefono": ""
}, {
    "id": "542",
    "nombre": "Marta Estela",
    "direccion": "SANTA ROSA DE LIMA, LA UNION",
    "telefono": ""
}, {
    "id": "543",
    "nombre": "Iris HERNANDEZ ",
    "direccion": "ANAMOROZ, LA UNION",
    "telefono": ""
}, {
    "id": "544",
    "nombre": "MIGUEL ANGEL GUEVARA HERNANDEZ",
    "direccion": "",
    "telefono": "7582-1667"
}, {
    "id": "545",
    "nombre": "MAURICIO CASTELLON",
    "direccion": "",
    "telefono": ""
}, {
    "id": "546",
    "nombre": "Maria juana Geron de Galdamez ",
    "direccion": "SESORI, SN MIGUEL",
    "telefono": ""
}, {
    "id": "547",
    "nombre": "Beatr\u00edz Carranza",
    "direccion": "SESORI, SN MIGUEL",
    "telefono": ""
}, {
    "id": "548",
    "nombre": "Carmen Mongaras",
    "direccion": "Usulutan",
    "telefono": ""
}, {
    "id": "549",
    "nombre": "Elizabeth Gomez",
    "direccion": "Usulutan",
    "telefono": ""
}, {
    "id": "550",
    "nombre": "Mariana Ca\u00f1as",
    "direccion": "USULUTAN\/USULUTAN",
    "telefono": ""
}, {
    "id": "551",
    "nombre": "Manuel Gonzales",
    "direccion": "Usulutan",
    "telefono": ""
}, {
    "id": "552",
    "nombre": "Rene Leiva",
    "direccion": "Usulutan",
    "telefono": "7126-5931"
}, {
    "id": "553",
    "nombre": "Carmen Diaz",
    "direccion": "Usulutan",
    "telefono": "7467-8098"
}, {
    "id": "554",
    "nombre": "JOSUE ROMERO",
    "direccion": ".",
    "telefono": "."
}, {
    "id": "555",
    "nombre": "Dinora de Gir\u00f3n",
    "direccion": "El Triunfo",
    "telefono": ""
}, {
    "id": "556",
    "nombre": "Walter Villal",
    "direccion": "Nueva Granada",
    "telefono": ""
}, {
    "id": "557",
    "nombre": "Antonio Diaz",
    "direccion": "Nueva Granada",
    "telefono": ""
}, {
    "id": "558",
    "nombre": "Carlos Lopez",
    "direccion": "",
    "telefono": ""
}, {
    "id": "559",
    "nombre": "MIGUEL HERNANDEZ",
    "direccion": "Mercedes Uma\u00f1a",
    "telefono": ""
}, {
    "id": "560",
    "nombre": "Guillermo Alejandro Pozo",
    "direccion": "Usulutan\/Alegria",
    "telefono": "26281074"
}, {
    "id": "561",
    "nombre": "Manuel Herrera",
    "direccion": "La Uni\u00f3n\/Yucuaiquin",
    "telefono": ""
}, {
    "id": "562",
    "nombre": "Alvina Escobar",
    "direccion": "La Union\/Yucuaiquin",
    "telefono": ""
}, {
    "id": "563",
    "nombre": "Rosalia Avilet",
    "direccion": "La Union\/Yucuaiquin",
    "telefono": ""
}, {
    "id": "564",
    "nombre": "Salvador Galvez",
    "direccion": "La Union\/Yucuaiquin",
    "telefono": ""
}, {
    "id": "565",
    "nombre": "Moises Lopez",
    "direccion": "San Miguel\/Comacaran",
    "telefono": ""
}, {
    "id": "566",
    "nombre": "Lelis Benites",
    "direccion": "Guatagiagua sn miguel",
    "telefono": "70485504"
}, {
    "id": "567",
    "nombre": "Antonia Benites",
    "direccion": "Guatagiagua sn miguel",
    "telefono": ""
}, {
    "id": "568",
    "nombre": "Cornelio Medrano",
    "direccion": "CORINTO, MORAZAN",
    "telefono": ""
}, {
    "id": "569",
    "nombre": "Maria Petronila ZELAYA",
    "direccion": "SANTA ROSA DE LIMA, LA UNION",
    "telefono": ""
}, {
    "id": "570",
    "nombre": "ana dinora perez de robles",
    "direccion": "",
    "telefono": ""
}, {
    "id": "571",
    "nombre": "JUAN CHAVES",
    "direccion": "SANTA ROSA DE LIMA, LA UNION",
    "telefono": ""
}, {
    "id": "573",
    "nombre": "Eliseo Flores",
    "direccion": "USULUTAN\/USULUTAN",
    "telefono": "7427-0329"
}, {
    "id": "574",
    "nombre": "Jose Gonzales",
    "direccion": "USULUTAN\/USULUTAN",
    "telefono": ""
}, {
    "id": "575",
    "nombre": "Martir Villatoro",
    "direccion": "ANAMOROZ, LA UNION",
    "telefono": ""
}, {
    "id": "576",
    "nombre": "Gerson Franco",
    "direccion": "Usulutan\/El Triunfo",
    "telefono": ""
}, {
    "id": "577",
    "nombre": "Dorca Ayala",
    "direccion": "USULUTAN\/JUCUAPA",
    "telefono": ""
}, {
    "id": "578",
    "nombre": "Mauricio Parada",
    "direccion": "",
    "telefono": ""
}, {
    "id": "579",
    "nombre": "Max Hernandez",
    "direccion": "USULUTAN\/JUCUAPA",
    "telefono": "7718-0962"
}, {
    "id": "580",
    "nombre": "GLENDA ESMERALDA SANDOVAL",
    "direccion": "USULUTAN\/JUCUAPA",
    "telefono": ""
}, {
    "id": "581",
    "nombre": "Rosibel Viuda de bonilla",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "582",
    "nombre": "Victoria Chicas",
    "direccion": "SAN FRANCISCO GOTERA, MORAZAN",
    "telefono": ""
}, {
    "id": "583",
    "nombre": "Maria De Escobar ",
    "direccion": "LA UNION, LA UNION",
    "telefono": ""
}, {
    "id": "584",
    "nombre": "JOSE FREDY BRIOSO",
    "direccion": "BERLIN",
    "telefono": ""
}]

db.serialize(function () {
    // productos.forEach(producto => {
    //   var stmt = db.run("INSERT INTO producto (id_producto, barcode, descripcion" +
    //   ", precio, imagen) VALUES ($id_producto, $barcode, $descripcion, $precio" +
    //   ", $imagen)", {
    //     $id_producto: producto.id_producto,
    //     $barcode: producto.barcode,
    //     $descripcion: producto.descripcion,
    //     $precio: producto.porcentaje_utilidad1,
    //     $imagen: producto.imagen
    //   });
    // });

    // stocks.forEach(stock => {
    //     var stmt = db.run("INSERT INTO stock (id_stock, id_producto, existencia" +
    //         ", costo_promedio) VALUES ($id_stock, $id_producto, $existencia, $costo_promedio)", {
    //             $id_stock: stock.id_producto,
    //             $id_producto: stock.id_producto,
    //             $existencia: stock.existencia,
    //             $costo_promedio: stock.costo_promedio
    //         });
    // });

    clientes.forEach(cliente => {
        var stmt = db.run("INSERT INTO cliente (nombre, direccion" +
            ", telefono) VALUES ($nombre, $direccion, $telefono)", {
                $nombre: cliente.nombre,
                $direccion: cliente.direccion,
                $telefono: cliente.telefono
            });
    });





    /*for (var i = 0; i < 10; i++) {
      stmt.run('Ipsum ' + i)
    }*/



    /*db.each('SELECT * FROM producto', function (err, row) {
      console.log(row.id_producto)
    })*/
})

db.close();