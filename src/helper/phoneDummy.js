const bigPhoneList = [
    {
        "name": "Zebra TC21/26",
        "id": 1,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2002200717/2012441964/zebra_tc21@2x.jpg",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 3,
        "manufacturer": 15,
        "operationArea": 1,
        "price": 600,
        "weight": 100
    },
    {
        "name": "Casio DT-X450",
        "id": 2,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2003011650/2012441964/casio_dt-x400@2x.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 5,
        "manufacturer": 8,
        "operationArea": 5,
        "price": 3300,
        "weight": 1100
    },
    {
        "name": "Zebra MC3300X",
        "id": 3,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2003088216/2012441964/zebra_mc3300@2x.jpeg",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 4,
        "manufacturer": 7,
        "operationArea": 6,
        "price": 2000,
        "weight": 1300
    },
    {
        "name": "CAT S53",
        "id": 4,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2003436729/2012441964/CAT S53.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 2,
        "manufacturer": 18,
        "operationArea": 1,
        "price": 1900,
        "weight": 1000
    },
    {
        "name": "Zebra ET40/45",
        "id": 5,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2004413200/2012441964/Zebra ET45_ET40.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 3,
        "manufacturer": 17,
        "operationArea": 5,
        "price": 600,
        "weight": 300
    },
    {
        "name": "Data logic memory 11",
        "id": 6,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2004895232/2012441964/datalogic_memor10@2x.jpg",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 4,
        "manufacturer": 19,
        "operationArea": 2,
        "price": 1400,
        "weight": 300
    },
    {
        "name": "Bixolon SPP-R310",
        "id": 7,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2011864198/2012441964/Bixolon SPP R310.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 3,
        "manufacturer": 2,
        "operationArea": 1,
        "price": 1900,
        "weight": 1200
    },
    {
        "name": "Point Mobile PM5",
        "id": 8,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2012518994/2012441964/Point Mobile PM5.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 1,
        "manufacturer": 20,
        "operationArea": 3,
        "price": 900,
        "weight": 300
    },
    {
        "name": "Zebra MC2700",
        "id": 9,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2012669047/2012441964/ZebraMC2700.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 2,
        "manufacturer": 12,
        "operationArea": 6,
        "price": 2200,
        "weight": 400
    },
    {
        "name": "Zebra RS6100",
        "id": 10,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2015395946/2012441964/Zebra RS6100.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 1,
        "manufacturer": 7,
        "operationArea": 4,
        "price": 1900,
        "weight": 1300
    },
    {
        "name": "Point Mobile PM75",
        "id": 11,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2015462482/2012441964/PointMobilePM75.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 1,
        "manufacturer": 19,
        "operationArea": 3,
        "price": 2900,
        "weight": 1300
    },
    {
        "name": "Cipherlab RS36",
        "id": 12,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2016244565/2012441964/Cipherlab RS36.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 5,
        "manufacturer": 20,
        "operationArea": 1,
        "price": 1200,
        "weight": 400
    },
    {
        "name": "Zebra WS50",
        "id": 13,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2016631942/2012441964/zebra ws50.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 3,
        "manufacturer": 11,
        "operationArea": 6,
        "price": 1300,
        "weight": 300
    },
    {
        "name": "ACD HasciSE",
        "id": 14,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2017010790/2012441964/ACD HasciSE.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 3,
        "manufacturer": 20,
        "operationArea": 5,
        "price": 3100,
        "weight": 200
    },
    {
        "name": "Casio ET-L10",
        "id": 15,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2017181285/2012441964/casio_et_l10@2x.jpg",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 4,
        "manufacturer": 6,
        "operationArea": 6,
        "price": 2400,
        "weight": 700
    },
    {
        "name": "Honeywell ScanPal EDA10A",
        "id": 16,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2017246317/2012441964/Honeywell ScanPal EDA10A.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 4,
        "manufacturer": 12,
        "operationArea": 3,
        "price": 1400,
        "weight": 600
    },
    {
        "name": "Point Mobile PM30",
        "id": 17,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2017832970/2012441964/ponit_mobilePM30.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 4,
        "manufacturer": 7,
        "operationArea": 4,
        "price": 700,
        "weight": 500
    },
    {
        "name": "Samsung Xcover 5",
        "id": 18,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2018426427/2012441964/Samsung Xcover 5.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 5,
        "manufacturer": 14,
        "operationArea": 5,
        "price": 500,
        "weight": 1000
    },
    {
        "name": "i.Safe Mobile IS530.1",
        "id": 19,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2018904232/2012441964/i.Safe IS530.1 mit Pistolengriff.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 5,
        "manufacturer": 5,
        "operationArea": 6,
        "price": 2400,
        "weight": 1200
    },
    {
        "name": "Honeywell ScanPal EDA61K",
        "id": 20,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2020025177/2012441964/honeywell_scanpal_eda61k@2x.jpg",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 2,
        "manufacturer": 14,
        "operationArea": 4,
        "price": 3400,
        "weight": 1100
    },
    {
        "name": "Samsung Tab Active 3",
        "id": 21,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2022407552/2012441964/Samsung Tab Active 3.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 5,
        "manufacturer": 6,
        "operationArea": 1,
        "price": 2100,
        "weight": 200
    },
    {
        "name": "ProGlove MARK 3",
        "id": 22,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2023937341/2012441964/ProGlove MARK 3.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 3,
        "manufacturer": 17,
        "operationArea": 5,
        "price": 3500,
        "weight": 400
    },
    {
        "name": "Datalogic Memor 20",
        "id": 23,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2025004846/2012441964/datalogic_memor20@2x.jpg",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 4,
        "manufacturer": 7,
        "operationArea": 1,
        "price": 1400,
        "weight": 400
    },
    {
        "name": "Datalogic Memor 10 Healthcare",
        "id": 24,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2028350172/2012441964/datalogic_memor10_healthcare@2x.jpg",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 1,
        "manufacturer": 15,
        "operationArea": 6,
        "price": 1100,
        "weight": 1100
    },
    {
        "name": "Casio IT-G600 / IT-G650",
        "id": 25,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2030145514/2012441964/Casio IT G600_650.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 2,
        "manufacturer": 17,
        "operationArea": 3,
        "price": 300,
        "weight": 1000
    },
    {
        "name": "Point Mobile PM560",
        "id": 26,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2034482939/2012441964/Point Mobile PM560.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 2,
        "manufacturer": 1,
        "operationArea": 5,
        "price": 1400,
        "weight": 1000
    },
    {
        "name": "Gigaset GX290 Plus",
        "id": 27,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2035087401/2012441964/Gigaset GX290 plus.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 1,
        "manufacturer": 20,
        "operationArea": 6,
        "price": 1900,
        "weight": 800
    },
    {
        "name": "Honeywell Dolphin CK65",
        "id": 28,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2035734119/2012441964/Honeywell Dolphin CK65.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 1,
        "manufacturer": 2,
        "operationArea": 1,
        "price": 2800,
        "weight": 500
    },
    {
        "name": "CAT S75",
        "id": 29,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2036388291/2012441964/CAT S75.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 4,
        "manufacturer": 11,
        "operationArea": 3,
        "price": 2900,
        "weight": 900
    },
    {
        "name": "Honeywell ScanPal EDA52 HC",
        "id": 30,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2036806814/2012441964/Honeywell EDA52HC.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 3,
        "manufacturer": 5,
        "operationArea": 4,
        "price": 3400,
        "weight": 1300
    },
    {
        "name": "ProGlove MARK display",
        "id": 31,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2038365215/2012441964/ProGlove Mark Display.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 1,
        "manufacturer": 10,
        "operationArea": 5,
        "price": 400,
        "weight": 400
    },
    {
        "name": "Datalogic Memor K",
        "id": 32,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2038742226/2012441964/Datalogic Memor K.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 4,
        "manufacturer": 20,
        "operationArea": 6,
        "price": 1900,
        "weight": 400
    },
    {
        "name": "Panasonic Toughbook S1",
        "id": 33,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2038944939/2012441964/Panasonic Toughbook S1.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 2,
        "manufacturer": 5,
        "operationArea": 4,
        "price": 3100,
        "weight": 600
    },
    {
        "name": "Honeywell Dolphin CT60 XP",
        "id": 34,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2039480267/2012441964/honeywell_dolphin_ct60@2x.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 3,
        "manufacturer": 6,
        "operationArea": 2,
        "price": 600,
        "weight": 100
    },
    {
        "name": "Keyence BT-A700",
        "id": 35,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2041705648/2012441964/Keyence BT-A700.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 3,
        "manufacturer": 15,
        "operationArea": 4,
        "price": 1800,
        "weight": 200
    },
    {
        "name": "Feig HyWEAR compact xT",
        "id": 36,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2043918401/2012441964/Feig HyWear compact xT.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 4,
        "manufacturer": 10,
        "operationArea": 2,
        "price": 400,
        "weight": 1000
    },
    {
        "name": "Panasonic Toughbook A3",
        "id": 37,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2043949983/2012441964/panasonic_fz-a3@2x.jpg",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 1,
        "manufacturer": 17,
        "operationArea": 6,
        "price": 900,
        "weight": 400
    },
    {
        "name": "Zebra TC8300",
        "id": 38,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2044520301/2012441964/zebra_tc8300@2x.jpg",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 4,
        "manufacturer": 6,
        "operationArea": 3,
        "price": 700,
        "weight": 600
    },
    {
        "name": "Zebra MC9300",
        "id": 39,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2051671743/2012441964/zebra mc9300.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 4,
        "manufacturer": 1,
        "operationArea": 2,
        "price": 3000,
        "weight": 700
    },
    {
        "name": "i.Safe Mobile IS655.2",
        "id": 40,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2052054549/2012441964/i.safe IS655.2.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 5,
        "manufacturer": 2,
        "operationArea": 2,
        "price": 900,
        "weight": 1000
    },
    {
        "name": "Zebra ZQ521",
        "id": 41,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2052768094/2012441964/Zebra ZQ521.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 4,
        "manufacturer": 19,
        "operationArea": 5,
        "price": 1700,
        "weight": 200
    },
    {
        "name": "Point Mobile PM351",
        "id": 42,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2053890576/2012441964/PM351.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 3,
        "manufacturer": 4,
        "operationArea": 2,
        "price": 300,
        "weight": 600
    },
    {
        "name": "Point Mobile PM86",
        "id": 43,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2053950471/2012441964/Point Mobile Pm86.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 5,
        "manufacturer": 20,
        "operationArea": 1,
        "price": 2900,
        "weight": 400
    },
    {
        "name": "Zebra ET60/ET65 tablet",
        "id": 44,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2055003499/2012441964/Zebra ET60.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 1,
        "manufacturer": 9,
        "operationArea": 2,
        "price": 2600,
        "weight": 400
    },
    {
        "name": "Getac ZX70",
        "id": 45,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2056126657/2012441964/getac_zx70@2x.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 2,
        "manufacturer": 15,
        "operationArea": 3,
        "price": 1500,
        "weight": 100
    },
    {
        "name": "Honeywell Dolphin CT40HC",
        "id": 46,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2057675010/2012441964/honeywell_dolphin_ct40_hc@2x.jpg",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 5,
        "manufacturer": 5,
        "operationArea": 5,
        "price": 1000,
        "weight": 1000
    },
    {
        "name": "Honeywell ScanPal EDA51K",
        "id": 47,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2057808709/2012441964/Honeywell ScanPal EDA51K.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 3,
        "manufacturer": 18,
        "operationArea": 6,
        "price": 1000,
        "weight": 800
    },
    {
        "name": "Honeywell ScanPal EDA57",
        "id": 48,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2058590904/2012441964/HoneywellEDA57-_.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 2,
        "manufacturer": 14,
        "operationArea": 5,
        "price": 2100,
        "weight": 1300
    },
    {
        "name": "Point Mobile PM451",
        "id": 49,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2061178735/2012441964/Point Mobile PM451.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 1,
        "manufacturer": 21,
        "operationArea": 4,
        "price": 2900,
        "weight": 900
    },
    {
        "name": "Cipherlab RK95",
        "id": 50,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2065492285/2012441964/cipherlab_rk95@2x.jpg",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 2,
        "manufacturer": 14,
        "operationArea": 3,
        "price": 2100,
        "weight": 100
    },
    {
        "name": "Bixolon XM7-40",
        "id": 51,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2066100301/2012441964/bixolon xm7-40.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 4,
        "manufacturer": 14,
        "operationArea": 4,
        "price": 2800,
        "weight": 1300
    },
    {
        "name": "i.Safe Mobile IS910.1",
        "id": 52,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2067313977/2012441964/i.Safe IS910.1.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 3,
        "manufacturer": 7,
        "operationArea": 6,
        "price": 1700,
        "weight": 700
    },
    {
        "name": "Datalogic memory 1",
        "id": 53,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2068409388/2012441964/datalogic_memor1@2x.jpg",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 4,
        "manufacturer": 20,
        "operationArea": 6,
        "price": 3100,
        "weight": 500
    },
    {
        "name": "Point Mobile PM90",
        "id": 54,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2069151743/2012441964/Point Mobile PM90.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 4,
        "manufacturer": 16,
        "operationArea": 5,
        "price": 3000,
        "weight": 800
    },
    {
        "name": "Zebra MC9400/9450",
        "id": 55,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2069262532/2012441964/Zebra_MC9400u.450.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 2,
        "manufacturer": 14,
        "operationArea": 6,
        "price": 3500,
        "weight": 600
    },
    {
        "name": "Honeywell 8675i",
        "id": 56,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2069644062/2012441964/Honeywell 8675i.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 2,
        "manufacturer": 8,
        "operationArea": 1,
        "price": 1000,
        "weight": 700
    },
    {
        "name": "Zebra DS3678-SR",
        "id": 57,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2070060243/2012441964/Zebra DS3678-SR.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 1,
        "manufacturer": 6,
        "operationArea": 2,
        "price": 1500,
        "weight": 1200
    },
    {
        "name": "Advantech DLT-V72",
        "id": 58,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2070900504/2012441964/advantech_dlt-v72@2x.jpg",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 4,
        "manufacturer": 15,
        "operationArea": 5,
        "price": 1600,
        "weight": 200
    },
    {
        "name": "Zebra ZQ220",
        "id": 59,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2071322289/2012441964/Zebra ZQ220.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 5,
        "manufacturer": 7,
        "operationArea": 3,
        "price": 2000,
        "weight": 200
    },
    {
        "name": "Cipherlab RS51",
        "id": 60,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2072297539/2012441964/cipherlab_rs51@2x.jpg",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 5,
        "manufacturer": 20,
        "operationArea": 5,
        "price": 1000,
        "weight": 1200
    },
    {
        "name": "Point Mobile PM3",
        "id": 61,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2074536714/2012441964/Point Mobile PM3.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 1,
        "manufacturer": 9,
        "operationArea": 1,
        "price": 2400,
        "weight": 100
    },
    {
        "name": "Keyence DX-A400",
        "id": 62,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2075335800/2012441964/Keyence DX-A400 new.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 3,
        "manufacturer": 17,
        "operationArea": 5,
        "price": 300,
        "weight": 800
    },
    {
        "name": "Newland MT90 Orca III",
        "id": 63,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2077544347/2012441964/Newland Orca MT90 III.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 2,
        "manufacturer": 21,
        "operationArea": 3,
        "price": 3200,
        "weight": 1100
    },
    {
        "name": "Zebra MC2200",
        "id": 64,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2077962878/2012441964/Zebra mc 2200.2.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 2,
        "manufacturer": 16,
        "operationArea": 3,
        "price": 400,
        "weight": 500
    },
    {
        "name": "Zebra HC20/50",
        "id": 65,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2079865932/2012441964/Zebra HC20_50.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 4,
        "manufacturer": 13,
        "operationArea": 3,
        "price": 2900,
        "weight": 900
    },
    {
        "name": "ACD M2Smart",
        "id": 66,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2080709885/2012441964/ACD M2 smart.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 3,
        "manufacturer": 5,
        "operationArea": 6,
        "price": 1000,
        "weight": 200
    },
    {
        "name": "Advantech AIM-65",
        "id": 67,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2080815179/2012441964/advantech_aim65@2x.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 4,
        "manufacturer": 19,
        "operationArea": 3,
        "price": 300,
        "weight": 800
    },
    {
        "name": "Samsung XCover Pro",
        "id": 68,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2081180166/2012441964/samsung xcover pro.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 2,
        "manufacturer": 6,
        "operationArea": 4,
        "price": 1400,
        "weight": 900
    },
    {
        "name": "iData T2",
        "id": 69,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2082619295/2012441964/iData T2.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 1,
        "manufacturer": 7,
        "operationArea": 2,
        "price": 2300,
        "weight": 100
    },
    {
        "name": "Keyence DX-A600",
        "id": 70,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2082806452/2012441964/Keyence DX-A600.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 4,
        "manufacturer": 6,
        "operationArea": 2,
        "price": 1500,
        "weight": 200
    },
    {
        "name": "ProGlove MARK LEO",
        "id": 71,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2083456343/2012441964/ProGlove Mark LEO.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 5,
        "manufacturer": 11,
        "operationArea": 6,
        "price": 3100,
        "weight": 1300
    },
    {
        "name": "Zebra TC52ax",
        "id": 72,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2083848334/2012441964/TC52ax.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 5,
        "manufacturer": 7,
        "operationArea": 3,
        "price": 3500,
        "weight": 900
    },
    {
        "name": "Honeywell CW45",
        "id": 73,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2084530641/2012441964/Honeywell CW45.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 1,
        "manufacturer": 20,
        "operationArea": 4,
        "price": 400,
        "weight": 600
    },
    {
        "name": "Zebra TC73/78",
        "id": 74,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2087429470/2012441964/Zebra TC73_78.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 3,
        "manufacturer": 20,
        "operationArea": 6,
        "price": 400,
        "weight": 1000
    },
    {
        "name": "Honeywell ScanPal EDA71",
        "id": 75,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2087505580/2012441964/Scanpal EDA71.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 2,
        "manufacturer": 11,
        "operationArea": 2,
        "price": 800,
        "weight": 500
    },
    {
        "name": "Advantech AIM78S",
        "id": 76,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2088384403/2012441964/Advantech Aim78s.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 3,
        "manufacturer": 19,
        "operationArea": 4,
        "price": 2000,
        "weight": 300
    },
    {
        "name": "Panasonic Toughbook N1",
        "id": 77,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2089030196/2012441964/panasonic_toughbook_fz-n1@2x.jpg",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 3,
        "manufacturer": 18,
        "operationArea": 4,
        "price": 1900,
        "weight": 500
    },
    {
        "name": "Zebra TC53/58",
        "id": 78,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2093602749/2012441964/Zebra TC58und53.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 3,
        "manufacturer": 6,
        "operationArea": 1,
        "price": 2500,
        "weight": 1100
    },
    {
        "name": "KoamTac KDC180H",
        "id": 79,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2093665691/2012441964/KoamTac KDC180H.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 1,
        "manufacturer": 7,
        "operationArea": 2,
        "price": 2200,
        "weight": 200
    },
    {
        "name": "Zebra ZQ511",
        "id": 80,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2093721521/2012441964/Zebra ZQ511.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 3,
        "manufacturer": 1,
        "operationArea": 5,
        "price": 3000,
        "weight": 500
    },
    {
        "name": "Zebra TC22/TC27",
        "id": 81,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2093792001/2012441964/Zebra TC22.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 4,
        "manufacturer": 19,
        "operationArea": 6,
        "price": 700,
        "weight": 700
    },
    {
        "name": "Zebra XSLATE L10",
        "id": 82,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2095159291/2012441964/zebra_xslate_l10@2x.png",
        "isFavorite": true,
        "isRental": true,
        "deviceType": 1,
        "manufacturer": 2,
        "operationArea": 5,
        "price": 2600,
        "weight": 900
    },
    {
        "name": "Honeywell Dolphin CT47",
        "id": 83,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2096350358/2012441964/HoneywellCT47_-.png",
        "isFavorite": false,
        "isRental": false,
        "deviceType": 2,
        "manufacturer": 1,
        "operationArea": 6,
        "price": 300,
        "weight": 1100
    },
    {
        "name": "Zebra TC57x",
        "id": 84,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2097486652/2012441964/zebra_tc57@2x.jpg",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 1,
        "manufacturer": 3,
        "operationArea": 5,
        "price": 3300,
        "weight": 500
    },
    {
        "name": "Newland MT95 Kambur Pro",
        "id": 85,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2097490841/2012441964/Newland MT95.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 3,
        "manufacturer": 16,
        "operationArea": 6,
        "price": 2700,
        "weight": 1100
    },
    {
        "name": "CAT S42",
        "id": 86,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2097708217/2012441964/CAT S42.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 2,
        "manufacturer": 4,
        "operationArea": 1,
        "price": 800,
        "weight": 1000
    },
    {
        "name": "Samsung Tab A SM-T595",
        "id": 87,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2097784761/2012441964/Samsung Tab A SM-T595N.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 5,
        "manufacturer": 6,
        "operationArea": 5,
        "price": 900,
        "weight": 100
    },
    {
        "name": "Point Mobile PM67",
        "id": 88,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2098788192/2012441964/Point Mobile PM67.png",
        "isFavorite": false,
        "isRental": true,
        "deviceType": 3,
        "manufacturer": 12,
        "operationArea": 5,
        "price": 2400,
        "weight": 400
    },
    {
        "name": "Samsung Tab Active 4 Pro",
        "id": 89,
        "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2099471937/2012441964/Samsung tab active 4 pro.png",
        "isFavorite": true,
        "isRental": false,
        "deviceType": 2,
        "manufacturer": 4,
        "operationArea": 3,
        "price": 2600,
        "weight": 300
    }
]

const litePhoneList =[{
    "name": "Zebra TC21/26",
    "id": 1,
    "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2002200717/2012441964/zebra_tc21@2x.jpg",
    "isFavorite": true,
    "isRental": true,
    "deviceType": 3,
    "manufacturer": 15,
    "operationArea": 1,
    "price": 600,
    "weight": 100
},
{
    "name": "Casio DT-X450",
    "id": 2,
    "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2003011650/2012441964/casio_dt-x400@2x.png",
    "isFavorite": true,
    "isRental": true,
    "deviceType": 5,
    "manufacturer": 8,
    "operationArea": 5,
    "price": 3300,
    "weight": 1100
},
{
    "name": "Zebra MC3300X",
    "id": 3,
    "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2003088216/2012441964/zebra_mc3300@2x.jpeg",
    "isFavorite": true,
    "isRental": true,
    "deviceType": 4,
    "manufacturer": 7,
    "operationArea": 6,
    "price": 2000,
    "weight": 1300
},
{
    "name": "CAT S53",
    "id": 4,
    "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2003436729/2012441964/CAT S53.png",
    "isFavorite": false,
    "isRental": true,
    "deviceType": 2,
    "manufacturer": 18,
    "operationArea": 1,
    "price": 1900,
    "weight": 1000
},
{
    "name": "Zebra ET40/45",
    "id": 5,
    "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2004413200/2012441964/Zebra ET45_ET40.png",
    "isFavorite": true,
    "isRental": false,
    "deviceType": 3,
    "manufacturer": 17,
    "operationArea": 5,
    "price": 600,
    "weight": 300
},
{
    "name": "Data logic memory 11",
    "id": 6,
    "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2004895232/2012441964/datalogic_memor10@2x.jpg",
    "isFavorite": false,
    "isRental": false,
    "deviceType": 4,
    "manufacturer": 19,
    "operationArea": 2,
    "price": 1400,
    "weight": 300
},
{
    "name": "Bixolon SPP-R310",
    "id": 7,
    "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2011864198/2012441964/Bixolon SPP R310.png",
    "isFavorite": false,
    "isRental": false,
    "deviceType": 3,
    "manufacturer": 2,
    "operationArea": 1,
    "price": 1900,
    "weight": 1200
},
{
    "name": "Point Mobile PM5",
    "id": 8,
    "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2012518994/2012441964/Point Mobile PM5.png",
    "isFavorite": true,
    "isRental": true,
    "deviceType": 1,
    "manufacturer": 20,
    "operationArea": 3,
    "price": 900,
    "weight": 300
},
{
    "name": "Zebra MC2700",
    "id": 9,
    "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2012669047/2012441964/ZebraMC2700.png",
    "isFavorite": false,
    "isRental": false,
    "deviceType": 2,
    "manufacturer": 12,
    "operationArea": 6,
    "price": 2200,
    "weight": 400
},
{
    "name": "Zebra RS6100",
    "id": 10,
    "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2015395946/2012441964/Zebra RS6100.png",
    "isFavorite": true,
    "isRental": true,
    "deviceType": 1,
    "manufacturer": 7,
    "operationArea": 4,
    "price": 1900,
    "weight": 1300
},
{
    "name": "Point Mobile PM75",
    "id": 11,
    "imgUrl": "https://skystatic08.atmos.id/11018/2049634327/2015462482/2012441964/PointMobilePM75.png",
    "isFavorite": true,
    "isRental": false,
    "deviceType": 1,
    "manufacturer": 19,
    "operationArea": 3,
    "price": 2900,
    "weight": 1300
},]

const PhoneList = {
    bigPhoneList,
    litePhoneList,
}


export default PhoneList