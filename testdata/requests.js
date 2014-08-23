// JavaScript source code

function getTestRequests(){

    for(var i = 0; i<____reqs.body.requests.length; i++){
        var r = ____reqs.body.requests[i];
        if(r.warning_flag == "default"){
            r.wcolor = "";
        } else if(r.warning_flag == "warning"){
            r.wcolor = "#e67e22";
        } else if (r.warning_flag == "danger"){
                r.wcolor = "#e74c3c";
        }
        r.customer_name = r.customer.name;
        r.engineer_name = r.solution.employee;
    }


    return ____reqs.body.requests;
}

var ____reqs ={
    "body": {
        "requests": [
            {
                "_id": "19947",
                "request_no": "17202/13",
                "description": "Bled otisak",
                "comment": null,
                "date_opened": "9/2/2013 12:38 PM",
                "date_allocated": "9/2/2013 12:38 PM",
                "date_arrived": "-",
                "date_dispatched": "9/2/2013 1:11 PM",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "9/2/2013 4:38 PM",
                "date_to_solve": "9/2/2013 4:38 PM",
                "response_time": "",
                "status": "Dispatched",
                "warning_flag": "default",
                "time_left": 998,
                "solution": {
                    "employee": "Ivan Perković",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "96",
                    "name": "KBC Banka a.d.",
                    "email": "",
                    "address": "Požeška 65b",
                    "contact_person": {
                        "_id": "19947",
                        "name": "Lazar Mitrović",
                        "email": "Lazar.Mitrovic@kbcbanka.rs",
                        "mobile": "066 822 1103",
                        "phone": "011 30 50 405"
                    }
                },
                "agreement": {
                    "_id": "133",
                    "number": "5729/09",
                    "date_start": "10/27/2009 12:00 AM",
                    "date_expire": "10/27/2014 12:00 AM",
                    "description": "Rental",
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "136",
                    "name": "WC5645",
                    "serial_number": "3641345228",
                    "asset_number": "00135",
                    "location": "Beograd, Omladinskih Brigada 90v",
                    "precise_location": "I sprat"
                }
            },
            {
                "_id": "19941",
                "request_no": "17197/13",
                "description": "\"Tray 3 is broken\"\n\nI poceo je da se cuje neki novi zvuk iz masine, ali za sada ne pravi probleme na otisku",
                "comment": null,
                "date_opened": "9/2/2013 12:09 PM",
                "date_allocated": "9/2/2013 12:09 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "9/2/2013 4:09 PM",
                "date_to_solve": "9/2/2013 4:09 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "default",
                "time_left": 969,
                "solution": {
                    "employee": "Vojislav Đurđević",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "29",
                    "name": "Grafomarketing szr",
                    "email": "",
                    "address": "Futoška 65 ",
                    "contact_person": {
                        "_id": "19941",
                        "name": "Veroljub ",
                        "email": "digitalstudio@neobee.net",
                        "mobile": null,
                        "phone": "021 63 68 031"
                    }
                },
                "agreement": {
                    "_id": "45",
                    "number": "UO-1909/06",
                    "date_start": "10/31/2005 12:00 AM",
                    "date_expire": "10/31/2010 12:00 AM",
                    "description": "FSMA",
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "51",
                    "name": "DC5252",
                    "serial_number": "RPG3323649",
                    "asset_number": "00051",
                    "location": "Novi Sad, Futoška 65 ",
                    "precise_location": ""
                }
            },
            {
                "_id": "19940",
                "request_no": "17196/13",
                "description": null,
                "comment": null,
                "date_opened": "9/2/2013 12:07 PM",
                "date_allocated": "9/2/2013 12:08 PM",
                "date_arrived": "-",
                "date_dispatched": "9/2/2013 12:13 PM",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "9/2/2013 4:07 PM",
                "date_to_solve": "9/2/2013 4:07 PM",
                "response_time": "",
                "status": "Dispatched",
                "warning_flag": "default",
                "time_left": 967,
                "solution": {
                    "employee": "Slobodan Stavrić",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": "POST"
                },
                "customer": {
                    "_id": "106",
                    "name": "Gorenje Valjevo d.o.o.",
                    "email": "",
                    "address": "Vladike Nikolaja Nova Pijaca 6/110",
                    "contact_person": {
                        "_id": "19940",
                        "name": "Marko Lekić",
                        "email": "marko.lekic@gorenje.com",
                        "mobile": "",
                        "phone": "064 13 42 060"
                    }
                },
                "agreement": {
                    "_id": "145",
                    "number": "NV-120/12",
                    "date_start": "7/28/2012 12:00 AM",
                    "date_expire": "7/28/2015 12:00 AM",
                    "description": "FSMA",
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "284",
                    "name": "DTNuvera120",
                    "serial_number": "1120500755",
                    "asset_number": "00283",
                    "location": "Valjevo, Bulevar Palih Boraca 91/92 godine broj 5",
                    "precise_location": ""
                }
            },
            {
                "_id": "19938",
                "request_no": "17194/13",
                "description": null,
                "comment": "IN planrana za utorak, 03.09.2013.",
                "date_opened": "9/2/2013 11:53 AM",
                "date_allocated": "9/2/2013 11:53 AM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "9/2/2013 8:03 PM",
                "date_to_solve": "9/2/2013 8:03 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "default",
                "time_left": 1203,
                "solution": {
                    "employee": "Vladimir Lazić",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "2655",
                    "name": "Knez Petrol d.o.o",
                    "email": null,
                    "address": "Carice Jelene 28",
                    "contact_person": {
                        "_id": "19938",
                        "name": "Miloš Pavlović",
                        "email": null,
                        "mobile": "064 859 44 45",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1392",
                    "number": "T&M",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "4019",
                    "name": "WC3315",
                    "serial_number": "3972501360",
                    "asset_number": "03955",
                    "location": "Batajnica, Carice Jelene 28",
                    "precise_location": null
                }
            },
            {
                "_id": "19937",
                "request_no": "17193/13",
                "description": null,
                "comment": null,
                "date_opened": "9/2/2013 11:45 AM",
                "date_allocated": "9/2/2013 11:45 AM",
                "date_arrived": "-",
                "date_dispatched": "9/2/2013 12:12 PM",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "9/2/2013 5:45 PM",
                "date_to_solve": "9/2/2013 5:45 PM",
                "response_time": "",
                "status": "Dispatched",
                "warning_flag": "default",
                "time_left": 1065,
                "solution": {
                    "employee": "Slobodan Stavrić",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "52",
                    "name": "Kosmos d.o.o",
                    "email": "gkreka@kosmosprint.com",
                    "address": "Svetog Save 16-18",
                    "contact_person": {
                        "_id": "19937",
                        "name": "Đorđe Đorić",
                        "email": "kosmos@sbb.rs",
                        "mobile": "",
                        "phone": "011 24 30 510"
                    }
                },
                "agreement": {
                    "_id": "1140",
                    "number": "UO-13020",
                    "date_start": "5/23/2013 12:00 AM",
                    "date_expire": "5/23/2014 12:00 AM",
                    "description": null,
                    "response_target_seconds": 6
                },
                "product": {
                    "_id": "2569",
                    "name": "4112",
                    "serial_number": "3528892905",
                    "asset_number": "02505",
                    "location": "Beograd, Svetog Save 16-18",
                    "precise_location": null
                }
            },
            {
                "_id": "19936",
                "request_no": "17192/13",
                "description": null,
                "comment": null,
                "date_opened": "9/2/2013 11:35 AM",
                "date_allocated": "9/2/2013 11:45 AM",
                "date_arrived": "-",
                "date_dispatched": "9/2/2013 12:10 PM",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "9/2/2013 7:45 PM",
                "date_to_solve": "9/2/2013 7:45 PM",
                "response_time": "",
                "status": "Dispatched",
                "warning_flag": "default",
                "time_left": 1185,
                "solution": {
                    "employee": "Slobodan Stavrić",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "52",
                    "name": "Kosmos d.o.o",
                    "email": "gkreka@kosmosprint.com",
                    "address": "Svetog Save 16-18",
                    "contact_person": {
                        "_id": "19936",
                        "name": "Goran Kreka",
                        "email": "gkreka@kosmosprint.com",
                        "mobile": "063 112 64 43",
                        "phone": "011 2430 510"
                    }
                },
                "agreement": {
                    "_id": "1002",
                    "number": "UO-10016",
                    "date_start": "9/6/2010 12:00 AM",
                    "date_expire": "9/6/2013 12:00 AM",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "2198",
                    "name": "Olympia",
                    "serial_number": "3512813800",
                    "asset_number": "02174",
                    "location": "Beograd, Svetog Save 16-18",
                    "precise_location": null
                }
            },
            {
                "_id": "19934",
                "request_no": "17190/13",
                "description": "mašina ne prihvata papir na srednjem izlazu \nPosle nekoliko otisaka prijavljuje da je tray pun i staje",
                "comment": null,
                "date_opened": "9/2/2013 11:33 AM",
                "date_allocated": "9/2/2013 11:33 AM",
                "date_arrived": "9/2/2013 12:30 PM",
                "date_dispatched": "9/2/2013 11:45 AM",
                "date_finished": "9/2/2013 1:00 PM",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "9/2/2013 5:33 PM",
                "date_to_solve": "9/2/2013 5:33 PM",
                "response_time": "0h:57m:",
                "status": "Dispatched",
                "warning_flag": "default",
                "time_left": 1053,
                "solution": {
                    "employee": "Aleksandar Joseski",
                    "bw_counter": 4597858,
                    "color_counter": 0,
                    "total_counter": 4597858,
                    "a3_counter": null,
                    "comment": "Chk and reconnect stack sensors\r\n\r\nNeed to replace stack sensors"
                },
                "customer": {
                    "_id": "73",
                    "name": "Greenfield",
                    "email": "digitalna@greenfield.rs",
                    "address": "Vojni Put blok I, br 481",
                    "contact_person": {
                        "_id": "19934",
                        "name": "Gradimir Knezević",
                        "email": "gradimir.knezevic@yahoo.com",
                        "mobile": "064 11 74 580",
                        "phone": "011 31 41 296"
                    }
                },
                "agreement": {
                    "_id": "104",
                    "number": "UO-13019",
                    "date_start": "5/12/2013 12:00 AM",
                    "date_expire": "5/12/2015 12:00 AM",
                    "description": "FSMA",
                    "response_target_seconds": 6
                },
                "product": {
                    "_id": "108",
                    "name": "4112",
                    "serial_number": "GYA737228",
                    "asset_number": "00108",
                    "location": "Zemun, Vojni Put blok I, br 481",
                    "precise_location": "lokal 17"
                }
            },
            {
                "_id": "19933",
                "request_no": "17189/13",
                "description": "ne izbacuje papir i glavi ga, prilikom štampanja \npre nego se zaglavi papir čuje se jako krckanje u printeru",
                "comment": null,
                "date_opened": "9/2/2013 11:31 AM",
                "date_allocated": "9/2/2013 11:31 AM",
                "date_arrived": "-",
                "date_dispatched": "9/2/2013 12:28 PM",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "9/2/2013 7:41 PM",
                "date_to_solve": "9/2/2013 7:41 PM",
                "response_time": "",
                "status": "Dispatched",
                "warning_flag": "default",
                "time_left": 1181,
                "solution": {
                    "employee": "Tomislav Andrić",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "442",
                    "name": "Telenor d.o.o.",
                    "email": "",
                    "address": "Omladinskih brigada 90",
                    "contact_person": {
                        "_id": "19933",
                        "name": "Ljubisa Šutanovac",
                        "email": "Ljubisa.Sutanovac@telenor.rs",
                        "mobile": "063 530 393",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1034",
                    "number": "0275/10",
                    "date_start": "10/29/2010 12:00 AM",
                    "date_expire": "10/29/2012 12:00 AM",
                    "description": "Ugovor nije zavrsen",
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "2655",
                    "name": "WC7435",
                    "serial_number": "3900710630",
                    "asset_number": "02591",
                    "location": "Novi Beograd, Omladinskih Brigada 90",
                    "precise_location": "ACB,III sprat, plavo krilo"
                }
            },
            {
                "_id": "19932",
                "request_no": "17188/13",
                "description": null,
                "comment": "Plaćeno po PF: 13-010-231\n\nKontakt; Nešić",
                "date_opened": "9/2/2013 11:29 AM",
                "date_allocated": "9/2/2013 11:29 AM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "9/2/2013 7:39 PM",
                "date_to_solve": "9/2/2013 7:39 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "default",
                "time_left": 1179,
                "solution": {
                    "employee": "Ivan Stanić",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "172",
                    "name": "ClipArt",
                    "email": "",
                    "address": "Borivoja Velimanovića 65",
                    "contact_person": {
                        "_id": "19932",
                        "name": "Aleksandar  Krstic",
                        "email": null,
                        "mobile": null,
                        "phone": "035 475 716"
                    }
                },
                "agreement": {
                    "_id": "1060",
                    "number": "T&M",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "2316",
                    "name": "DC12",
                    "serial_number": "2480395002",
                    "asset_number": "02270",
                    "location": "Ćuprija, Borivoja Velimanovića 65\n",
                    "precise_location": null
                }
            },
            {
                "_id": "19927",
                "request_no": "17183/13",
                "description": "hvali plava boja na otisku",
                "comment": null,
                "date_opened": "9/2/2013 10:41 AM",
                "date_allocated": "9/2/2013 10:41 AM",
                "date_arrived": "9/2/2013 10:46 AM",
                "date_dispatched": "9/2/2013 10:41 AM",
                "date_finished": "9/2/2013 10:46 AM",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "9/2/2013 4:41 PM",
                "date_to_solve": "9/2/2013 4:41 PM",
                "response_time": "0h:4m:",
                "status": "Dispatched",
                "warning_flag": "default",
                "time_left": 1001,
                "solution": {
                    "employee": "Veselin Bulatovic",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "120",
                    "name": "Nikić-Digital d.o.o.",
                    "email": "",
                    "address": "Bulevar Ivana Crnojevića 107",
                    "contact_person": {
                        "_id": "19927",
                        "name": "Srdjan Nikić",
                        "email": "srdja@fotonikic.com",
                        "mobile": "00 382 67 513 516",
                        "phone": "00 382 20 664 104"
                    }
                },
                "agreement": {
                    "_id": "1382",
                    "number": "PG_13007",
                    "date_start": "7/24/2013 3:32 PM",
                    "date_expire": "7/24/2016 3:32 PM",
                    "description": null,
                    "response_target_seconds": 6
                },
                "product": {
                    "_id": "3981",
                    "name": "C75",
                    "serial_number": "3914822075",
                    "asset_number": "03917",
                    "location": "Nikšić, Bulevar Ivana Crnojevića 107",
                    "precise_location": null
                }
            },
            {
                "_id": "19922",
                "request_no": "17179/13",
                "description": null,
                "comment": "Prenos: 13-234-08",
                "date_opened": "9/2/2013 9:25 AM",
                "date_allocated": "9/2/2013 9:25 AM",
                "date_arrived": "9/2/2013 9:30 AM",
                "date_dispatched": "9/2/2013 9:25 AM",
                "date_finished": "9/2/2013 9:35 AM",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "9/2/2013 5:35 PM",
                "date_to_solve": "9/2/2013 5:35 PM",
                "response_time": "0h:5m:",
                "status": "Dispatched",
                "warning_flag": "default",
                "time_left": 1055,
                "solution": {
                    "employee": "Marko Milić",
                    "bw_counter": 13,
                    "color_counter": 0,
                    "total_counter": 13,
                    "a3_counter": null,
                    "comment": "Uninstallation."
                },
                "customer": {
                    "_id": "677",
                    "name": "Xpro d.o.o",
                    "email": "office@xpro.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19922",
                        "name": "Marko Milić",
                        "email": null,
                        "mobile": "062 805 44 12",
                        "phone": "062 805 44 12"
                    }
                },
                "agreement": {
                    "_id": "1138",
                    "number": "Show Room",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "3980",
                    "name": "P4620",
                    "serial_number": "3883972529",
                    "asset_number": "03916",
                    "location": "",
                    "precise_location": null
                }
            },
            {
                "_id": "19920",
                "request_no": "17177/13",
                "description": "osencen otisak",
                "comment": null,
                "date_opened": "9/2/2013 8:37 AM",
                "date_allocated": "9/2/2013 12:23 PM",
                "date_arrived": "-",
                "date_dispatched": "9/2/2013 12:24 PM",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "9/2/2013 4:47 PM",
                "date_to_solve": "9/2/2013 4:47 PM",
                "response_time": "",
                "status": "Dispatched",
                "warning_flag": "default",
                "time_left": 1007,
                "solution": {
                    "employee": "PC Servis PC Servis",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "471",
                    "name": "XPro PC d.o.o.",
                    "email": "produkcija@alfadigital.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19920",
                        "name": "Dejan Jovanović",
                        "email": "dejan.jovanovic@monfort.ts",
                        "mobile": "062 805 44 03",
                        "phone": "011 34 70 008"
                    }
                },
                "agreement": {
                    "_id": "857",
                    "number": "Claude",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "2473",
                    "name": "4590",
                    "serial_number": "3524892226",
                    "asset_number": "02409",
                    "location": "Beograd, Pirandjelova 6b",
                    "precise_location": "11"
                }
            },
            {
                "_id": "19916",
                "request_no": "17161/13-a",
                "description": "Previous request solution comment: Nece da se inicijalizuje masina! Probano sa force uppgrade, dodje do data encryption i tu stane!",
                "comment": null,
                "date_opened": "8/30/2013 4:00 PM",
                "date_allocated": "-",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/31/2013 12:10 AM",
                "date_to_solve": "8/31/2013 12:10 AM",
                "response_time": "",
                "status": "Opened",
                "warning_flag": "warning",
                "time_left": -2870,
                "solution": {
                    "employee": "",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "1528",
                    "name": "Fiat Automobili Srbija",
                    "email": null,
                    "address": "Kosovska 4",
                    "contact_person": {
                        "_id": "19916",
                        "name": "Danijel Marjanović",
                        "email": "danijel.marjanovic@fiat.com",
                        "mobile": "060 33 21 537",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1228",
                    "number": "120605-SC-01",
                    "date_start": "2/1/2012 1:00 AM",
                    "date_expire": "2/1/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "3424",
                    "name": "WC75XX",
                    "serial_number": "3905924671",
                    "asset_number": "03360",
                    "location": "Kragujevac, Kosovska 4",
                    "precise_location": "CEO"
                }
            },
            {
                "_id": "19904",
                "request_no": "17169/13",
                "description": null,
                "comment": "IN planirana za utorak, 03.09.2013.\nRevers: 13-3D2-43",
                "date_opened": "8/30/2013 3:38 PM",
                "date_allocated": "8/30/2013 3:38 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 7:38 PM",
                "date_to_solve": "8/30/2013 7:38 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "warning",
                "time_left": -3141,
                "solution": {
                    "employee": "Marko Stojanović",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19904",
                        "name": "Zlatko Rogošić",
                        "email": "Zlatko.Rogosic@socgen.com",
                        "mobile": "063 10 488 07",
                        "phone": "011 30 11 454"
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "3988",
                    "name": "P3300",
                    "serial_number": "3251122554",
                    "asset_number": "03924",
                    "location": "Vlasotince, Lole Ribara 2\n",
                    "precise_location": "KBC_Vlasotince\n"
                }
            },
            {
                "_id": "19903",
                "request_no": "17168/13",
                "description": null,
                "comment": "IN planirana za utorak, 03.09.2013.\nRevers: 13-3D2-43",
                "date_opened": "8/30/2013 3:35 PM",
                "date_allocated": "8/30/2013 3:35 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 7:35 PM",
                "date_to_solve": "8/30/2013 7:35 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "warning",
                "time_left": -3144,
                "solution": {
                    "employee": "Marko Stojanović",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19903",
                        "name": "Zlatko Rogošić",
                        "email": "Zlatko.Rogosic@socgen.com",
                        "mobile": "063 10 488 07",
                        "phone": "011 30 11 454"
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "4017",
                    "name": "Sheeta",
                    "serial_number": "3322222881",
                    "asset_number": "03953",
                    "location": "Vlasotince, Lole Ribara 2\n",
                    "precise_location": "KBC_Vlasotince\n"
                }
            },
            {
                "_id": "19902",
                "request_no": "17167/13",
                "description": null,
                "comment": "IN planirana za utorak, 03.09.2013.\nRevers: 13-3D2-42",
                "date_opened": "8/30/2013 3:33 PM",
                "date_allocated": "8/30/2013 3:33 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 7:33 PM",
                "date_to_solve": "8/30/2013 7:33 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "warning",
                "time_left": -3146,
                "solution": {
                    "employee": "Marko Stojanović",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19902",
                        "name": "Zlatko Rogošić",
                        "email": "Zlatko.Rogosic@socgen.com",
                        "mobile": "063 10 488 07",
                        "phone": "011 30 11 454"
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "4016",
                    "name": "Sheeta",
                    "serial_number": "3251122503",
                    "asset_number": "03952",
                    "location": "Lebane, Cara Dušana 93\n",
                    "precise_location": "KBC_Lebane\n"
                }
            },
            {
                "_id": "19901",
                "request_no": "17166/13",
                "description": null,
                "comment": "IN planirana za utorak, 03.09.2013.\nRevers: 13-3D2-42",
                "date_opened": "8/30/2013 3:33 PM",
                "date_allocated": "8/30/2013 3:33 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 7:33 PM",
                "date_to_solve": "8/30/2013 7:33 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "warning",
                "time_left": -3146,
                "solution": {
                    "employee": "Marko Stojanović",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19901",
                        "name": "Zlatko Rogošić",
                        "email": "Zlatko.Rogosic@socgen.com",
                        "mobile": "063 10 488 07",
                        "phone": "011 30 11 454"
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "4015",
                    "name": "Sheeta",
                    "serial_number": "3322741749",
                    "asset_number": "03951",
                    "location": "Lebane, Cara Dušana 93\n",
                    "precise_location": "KBC_Lebane\n"
                }
            },
            {
                "_id": "19898",
                "request_no": "17163/13",
                "description": null,
                "comment": "IN planirana za ponedejak, 02.09.2013.\nRevers: 13-3D2-41",
                "date_opened": "8/30/2013 3:25 PM",
                "date_allocated": "8/30/2013 3:25 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 7:25 PM",
                "date_to_solve": "8/30/2013 7:25 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "warning",
                "time_left": -3154,
                "solution": {
                    "employee": "Marko Stojanović",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19898",
                        "name": "Zlatko Rogošić",
                        "email": "Zlatko.Rogosic@socgen.com",
                        "mobile": "063 10 488 07",
                        "phone": "011 30 11 454"
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "4014",
                    "name": "P3300",
                    "serial_number": "3251122465",
                    "asset_number": "03950",
                    "location": "Bujanovac, Karađorđa Petrovića bb\n",
                    "precise_location": "KBC_Bujanovac\n"
                }
            },
            {
                "_id": "19897",
                "request_no": "17162/13",
                "description": null,
                "comment": "IN planirana za ponedejak, 02.09.2013.\nRevers: 13-3D2-41",
                "date_opened": "8/30/2013 3:22 PM",
                "date_allocated": "8/30/2013 3:22 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 7:22 PM",
                "date_to_solve": "8/30/2013 7:22 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "warning",
                "time_left": -3157,
                "solution": {
                    "employee": "Marko Stojanović",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19897",
                        "name": "Zlatko Rogošić",
                        "email": "Zlatko.Rogosic@socgen.com",
                        "mobile": "063 10 488 07",
                        "phone": "011 30 11 454"
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "4013",
                    "name": "Sheeta",
                    "serial_number": "3322741765",
                    "asset_number": "03949",
                    "location": "Bujanovac, Karađorđa Petrovića bb\n",
                    "precise_location": "KBC_Bujanovac\n"
                }
            },
            {
                "_id": "19896",
                "request_no": "17161/13",
                "description": "Nece da se inicijaliyuje",
                "comment": null,
                "date_opened": "8/30/2013 3:15 PM",
                "date_allocated": "8/30/2013 3:15 PM",
                "date_arrived": "8/30/2013 3:20 PM",
                "date_dispatched": "8/30/2013 3:15 PM",
                "date_finished": "8/30/2013 4:00 PM",
                "date_finished_entered": "-",
                "date_return_to_fit": "9/2/2013 7:55 AM",
                "date_solved": "8/30/2013 7:15 PM",
                "date_to_solve": "8/30/2013 7:15 PM",
                "response_time": "0h:5m:",
                "status": "Dispatched",
                "warning_flag": "warning",
                "time_left": -3164,
                "solution": {
                    "employee": "Nikola Stojanović",
                    "bw_counter": 1,
                    "color_counter": 1,
                    "total_counter": 2,
                    "a3_counter": null,
                    "comment": "Nece da se inicijalizuje masina! Probano sa force uppgrade, dodje do data encryption i tu stane!"
                },
                "customer": {
                    "_id": "1528",
                    "name": "Fiat Automobili Srbija",
                    "email": null,
                    "address": "Kosovska 4",
                    "contact_person": {
                        "_id": "19896",
                        "name": "Danijel Marjanović",
                        "email": "danijel.marjanovic@fiat.com",
                        "mobile": "060 33 21 537",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1228",
                    "number": "120605-SC-01",
                    "date_start": "2/1/2012 1:00 AM",
                    "date_expire": "2/1/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "3424",
                    "name": "WC75XX",
                    "serial_number": "3905924671",
                    "asset_number": "03360",
                    "location": "Kragujevac, Kosovska 4",
                    "precise_location": "CEO"
                }
            },
            {
                "_id": "19895",
                "request_no": "17160/13",
                "description": null,
                "comment": "DI planirana za 02.09.2013.\nPov.rev. 13-3D9-52\nMasina povucena sa lokacije od strane nosaca",
                "date_opened": "8/30/2013 3:13 PM",
                "date_allocated": "8/30/2013 3:13 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 7:13 PM",
                "date_to_solve": "8/30/2013 7:13 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "warning",
                "time_left": -3166,
                "solution": {
                    "employee": "Marko Stojanović",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19895",
                        "name": "Vladimir Glišić",
                        "email": null,
                        "mobile": "066 822 11 61",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "589",
                    "name": "WC5230",
                    "serial_number": "3315877937",
                    "asset_number": "00588",
                    "location": "",
                    "precise_location": null
                }
            },
            {
                "_id": "19891",
                "request_no": "17156/13",
                "description": null,
                "comment": "DI planirana za 02.09.2013.\nPov.rev. 13-3D9-51\nMasina povucena sa lokacije od strane nosaca",
                "date_opened": "8/30/2013 2:59 PM",
                "date_allocated": "8/30/2013 3:06 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 6:59 PM",
                "date_to_solve": "8/30/2013 6:59 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "warning",
                "time_left": -3180,
                "solution": {
                    "employee": "Marko Stojanović",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19891",
                        "name": "Vladimir Glišić",
                        "email": null,
                        "mobile": "066 822 11 61",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "563",
                    "name": "WC5230",
                    "serial_number": "3315787601",
                    "asset_number": "00562",
                    "location": "",
                    "precise_location": null
                }
            },
            {
                "_id": "19911",
                "request_no": "17142/13-a",
                "description": "Previous request solution comment: usisana masina, potrebno zameniti fuser \n(u dogovoru sa klijentom za ponedeljak)",
                "comment": null,
                "date_opened": "8/30/2013 2:15 PM",
                "date_allocated": "9/2/2013 9:48 AM",
                "date_arrived": "-",
                "date_dispatched": "9/2/2013 10:17 AM",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 10:25 PM",
                "date_to_solve": "8/30/2013 10:25 PM",
                "response_time": "",
                "status": "Dispatched",
                "warning_flag": "warning",
                "time_left": -2975,
                "solution": {
                    "employee": "Vladimir Lazić",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "1302",
                    "name": "Ludan Engineering d.o.o",
                    "email": null,
                    "address": "Kozjačka 2",
                    "contact_person": {
                        "_id": "19911",
                        "name": "Aleksandra Rakočević",
                        "email": "aleksandra@ludan.rs",
                        "mobile": "065 856 60 53",
                        "phone": "011 41 23 178"
                    }
                },
                "agreement": {
                    "_id": "1190",
                    "number": "UO-11022",
                    "date_start": "10/21/2011 2:24 PM",
                    "date_expire": "10/21/2013 2:24 PM",
                    "description": null,
                    "response_target_seconds": 6
                },
                "product": {
                    "_id": "1928",
                    "name": "WC7425",
                    "serial_number": "3900506391",
                    "asset_number": "01927",
                    "location": "Beograd, Kozjačka 2",
                    "precise_location": null
                }
            },
            {
                "_id": "19886",
                "request_no": "17151/13",
                "description": null,
                "comment": "DI planirana za 02.09.2013.\nPov.rev. 13-3D9-50\nMasina povucena sa lokacije od strane nosaca",
                "date_opened": "8/30/2013 2:13 PM",
                "date_allocated": "8/30/2013 2:13 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 6:13 PM",
                "date_to_solve": "8/30/2013 6:13 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "warning",
                "time_left": -3226,
                "solution": {
                    "employee": "Marko Stojanović",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19886",
                        "name": "Vladimir Glišić",
                        "email": null,
                        "mobile": "066 822 11 61",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "2271",
                    "name": "Sheeta",
                    "serial_number": "3315771110",
                    "asset_number": "02232",
                    "location": "",
                    "precise_location": null
                }
            },
            {
                "_id": "19885",
                "request_no": "17150/13",
                "description": null,
                "comment": "DI planirana za 02.09.2013.\nPov.rev. 13-3D7-118_AD\nMasina povucena sa lokacije od strane nosaca",
                "date_opened": "8/30/2013 2:05 PM",
                "date_allocated": "8/30/2013 2:05 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 6:05 PM",
                "date_to_solve": "8/30/2013 6:05 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "warning",
                "time_left": -3234,
                "solution": {
                    "employee": "Marko Stojanović",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "96",
                    "name": "KBC Banka a.d.",
                    "email": "",
                    "address": "Požeška 65b",
                    "contact_person": {
                        "_id": "19885",
                        "name": "Gordana Zlatković",
                        "email": "gordana.zlatkovic@kbcbanka.rs",
                        "mobile": "066 822 10 62",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1213",
                    "number": "238/2011",
                    "date_start": "1/1/2012 12:00 AM",
                    "date_expire": "10/31/2014 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "2973",
                    "name": "WC4250",
                    "serial_number": "3846245854",
                    "asset_number": "02909",
                    "location": "",
                    "precise_location": null
                }
            },
            {
                "_id": "19884",
                "request_no": "17149/13",
                "description": null,
                "comment": "Pov.rev. 13-3D9-53",
                "date_opened": "8/30/2013 1:59 PM",
                "date_allocated": "8/30/2013 1:59 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 5:59 PM",
                "date_to_solve": "8/30/2013 5:59 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "warning",
                "time_left": -3240,
                "solution": {
                    "employee": "Aleksandar Branković",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19884",
                        "name": "Zlatko Rogošić",
                        "email": "Zlatko.Rogosic@socgen.com",
                        "mobile": "063 10 488 07",
                        "phone": "011 30 11 454"
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "3222",
                    "name": "P3160",
                    "serial_number": "3960252925",
                    "asset_number": "03158",
                    "location": "Novi Sad, Rumenacka 150",
                    "precise_location": "Novi Sad IV_Merkur"
                }
            },
            {
                "_id": "19883",
                "request_no": "17148/13",
                "description": null,
                "comment": "Pov.rev. 13-3D9-53",
                "date_opened": "8/30/2013 1:59 PM",
                "date_allocated": "8/30/2013 1:59 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 5:59 PM",
                "date_to_solve": "8/30/2013 5:59 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "warning",
                "time_left": -3240,
                "solution": {
                    "employee": "Aleksandar Branković",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19883",
                        "name": "Zlatko Rogošić",
                        "email": "Zlatko.Rogosic@socgen.com",
                        "mobile": "063 10 488 07",
                        "phone": "011 30 11 454"
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "3220",
                    "name": "P3300",
                    "serial_number": "3251185106",
                    "asset_number": "03156",
                    "location": "",
                    "precise_location": null
                }
            },
            {
                "_id": "19915",
                "request_no": "17140/13-a",
                "description": "Previous request solution comment: za zamenu:",
                "comment": "Uređaj je u Kragujevcu, ",
                "date_opened": "8/30/2013 1:40 PM",
                "date_allocated": "-",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 9:50 PM",
                "date_to_solve": "8/30/2013 9:50 PM",
                "response_time": "",
                "status": "Opened",
                "warning_flag": "warning",
                "time_left": -3010,
                "solution": {
                    "employee": "",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "1528",
                    "name": "Fiat Automobili Srbija",
                    "email": null,
                    "address": "Kosovska 4",
                    "contact_person": {
                        "_id": "19915",
                        "name": "Miroljub Jocić",
                        "email": "miroljub.jocic@fiat.com",
                        "mobile": "069 2000 245",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1228",
                    "number": "120605-SC-01",
                    "date_start": "2/1/2012 1:00 AM",
                    "date_expire": "2/1/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "4012",
                    "name": "P4620",
                    "serial_number": "3883944185",
                    "asset_number": "03948",
                    "location": "Kragujevac, Kosovska 4",
                    "precise_location": null
                }
            },
            {
                "_id": "19913",
                "request_no": "17138/13-a",
                "description": "Previous request solution comment: Za zamenu:",
                "comment": null,
                "date_opened": "8/30/2013 1:30 PM",
                "date_allocated": "-",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 9:40 PM",
                "date_to_solve": "8/30/2013 9:40 PM",
                "response_time": "",
                "status": "Opened",
                "warning_flag": "warning",
                "time_left": -3020,
                "solution": {
                    "employee": "",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "1528",
                    "name": "Fiat Automobili Srbija",
                    "email": null,
                    "address": "Kosovska 4",
                    "contact_person": {
                        "_id": "19913",
                        "name": "Miroljub Jocić",
                        "email": "miroljub.jocic@fiat.com",
                        "mobile": "069 2000 245",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1228",
                    "number": "120605-SC-01",
                    "date_start": "2/1/2012 1:00 AM",
                    "date_expire": "2/1/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "3915",
                    "name": "P4620",
                    "serial_number": "3883968998",
                    "asset_number": "03851",
                    "location": "Kragujevac, Kosovska 4",
                    "precise_location": null
                }
            },
            {
                "_id": "19912",
                "request_no": "17137/13-a",
                "description": "Previous request solution comment: No paper sensor polomljen! ",
                "comment": null,
                "date_opened": "8/30/2013 1:20 PM",
                "date_allocated": "-",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 9:30 PM",
                "date_to_solve": "8/30/2013 9:30 PM",
                "response_time": "",
                "status": "Opened",
                "warning_flag": "warning",
                "time_left": -3030,
                "solution": {
                    "employee": "",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "1528",
                    "name": "Fiat Automobili Srbija",
                    "email": null,
                    "address": "Kosovska 4",
                    "contact_person": {
                        "_id": "19912",
                        "name": "Miroljub Jocić",
                        "email": "miroljub.jocic@fiat.com",
                        "mobile": "069 2000 245",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1228",
                    "number": "120605-SC-01",
                    "date_start": "2/1/2012 1:00 AM",
                    "date_expire": "2/1/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "3679",
                    "name": "P4620",
                    "serial_number": "3883970879",
                    "asset_number": "03615",
                    "location": "Kragujevac, Kosovska 4",
                    "precise_location": null
                }
            },
            {
                "_id": "19868",
                "request_no": "17133/13",
                "description": null,
                "comment": null,
                "date_opened": "8/30/2013 11:47 AM",
                "date_allocated": "8/30/2013 11:47 AM",
                "date_arrived": "-",
                "date_dispatched": "8/30/2013 1:24 PM",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/30/2013 7:57 PM",
                "date_to_solve": "8/30/2013 7:57 PM",
                "response_time": "",
                "status": "Dispatched",
                "warning_flag": "warning",
                "time_left": -3122,
                "solution": {
                    "employee": "Ivan Stanić",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "677",
                    "name": "Xpro d.o.o",
                    "email": "office@xpro.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19868",
                        "name": "Marko Milić",
                        "email": null,
                        "mobile": "062 805 44 12",
                        "phone": "062 805 44 12"
                    }
                },
                "agreement": {
                    "_id": "1103",
                    "number": "Magacin_Back  Up",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "305",
                    "name": "WC7665",
                    "serial_number": "3815789287",
                    "asset_number": "00304",
                    "location": "Beograd, Viline Vode 47",
                    "precise_location": "Magacin"
                }
            },
            {
                "_id": "19814",
                "request_no": "17081/13",
                "description": "Masina ostala u ekspozituri\n\nNIJE POVUCENA",
                "comment": "Pov.rev. 13-3D7-117_AD\n",
                "date_opened": "8/28/2013 11:00 AM",
                "date_allocated": "-",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/28/2013 3:00 PM",
                "date_to_solve": "8/28/2013 3:00 PM",
                "response_time": "",
                "status": "Opened",
                "warning_flag": "warning",
                "time_left": -6299,
                "solution": {
                    "employee": "",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "96",
                    "name": "KBC Banka a.d.",
                    "email": "",
                    "address": "Požeška 65b",
                    "contact_person": {
                        "_id": "19814",
                        "name": "Zorica Novaković",
                        "email": "zorica.novakovic@kbcbanka.rs",
                        "mobile": "063 84 15 195",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1213",
                    "number": "238/2011",
                    "date_start": "1/1/2012 12:00 AM",
                    "date_expire": "10/31/2014 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "2996",
                    "name": "WC4250",
                    "serial_number": "3846245064",
                    "asset_number": "02932",
                    "location": "",
                    "precise_location": null
                }
            },
            {
                "_id": "19665",
                "request_no": "16945/13",
                "description": "Install drivers and command workstation for MAC users",
                "comment": null,
                "date_opened": "8/22/2013 9:53 AM",
                "date_allocated": "8/22/2013 9:53 AM",
                "date_arrived": "8/22/2013 10:30 AM",
                "date_dispatched": "8/22/2013 9:53 AM",
                "date_finished": "8/22/2013 11:00 AM",
                "date_finished_entered": "-",
                "date_return_to_fit": "8/22/2013 9:54 PM",
                "date_solved": "8/22/2013 3:53 PM",
                "date_to_solve": "8/22/2013 3:53 PM",
                "response_time": "0h:37m:",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -14886,
                "solution": {
                    "employee": "Ilija Popovic",
                    "bw_counter": 225,
                    "color_counter": 59310,
                    "total_counter": 59535,
                    "a3_counter": null,
                    "comment": "client didnt know admin pass on his mac.\nservice postponed for tomorrow."
                },
                "customer": {
                    "_id": "2178",
                    "name": "Vapor d.o.o",
                    "email": "vapor@t-com.me",
                    "address": "Kragujevačka 5",
                    "contact_person": {
                        "_id": "19665",
                        "name": "Antun (Toni) Heber",
                        "email": "antun.heber@vapor.me",
                        "mobile": "00 382 69 051 510",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1310",
                    "number": "PG_12005",
                    "date_start": "6/21/2012 10:48 AM",
                    "date_expire": "6/21/2015 10:48 AM",
                    "description": null,
                    "response_target_seconds": 6
                },
                "product": {
                    "_id": "3725",
                    "name": "Chandon",
                    "serial_number": "3514513715",
                    "asset_number": "03661",
                    "location": "Podgorica, Kragujevačka 5",
                    "precise_location": "I sprat"
                }
            },
            {
                "_id": "19607",
                "request_no": "16879/13-a",
                "description": "Previous request solution comment: ",
                "comment": null,
                "date_opened": "8/20/2013 9:30 AM",
                "date_allocated": "8/28/2013 2:00 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/20/2013 5:40 PM",
                "date_to_solve": "8/20/2013 5:40 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "danger",
                "time_left": -17660,
                "solution": {
                    "employee": "PC Servis PC Servis",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "471",
                    "name": "XPro PC d.o.o.",
                    "email": "produkcija@alfadigital.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19607",
                        "name": "Dejan Jovanović",
                        "email": "dejan.jovanovic@monfort.ts",
                        "mobile": "062 805 44 03",
                        "phone": "011 34 70 008"
                    }
                },
                "agreement": {
                    "_id": "857",
                    "number": "Claude",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "2903",
                    "name": "4590",
                    "serial_number": "AKF488927",
                    "asset_number": "02839",
                    "location": "Beograd, Pirandjelova 6b",
                    "precise_location": "8"
                }
            },
            {
                "_id": "19582",
                "request_no": "16873/13",
                "description": "Čuje se neprijatan, jak zvuk (kao da zupčanici kače o nešto). ",
                "comment": null,
                "date_opened": "8/19/2013 12:41 PM",
                "date_allocated": "8/19/2013 12:41 PM",
                "date_arrived": "8/19/2013 1:15 PM",
                "date_dispatched": "8/19/2013 12:41 PM",
                "date_finished": "8/19/2013 2:15 PM",
                "date_finished_entered": "-",
                "date_return_to_fit": "8/19/2013 2:47 PM",
                "date_solved": "8/19/2013 8:51 PM",
                "date_to_solve": "8/19/2013 8:51 PM",
                "response_time": "0h:34m:",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -18908,
                "solution": {
                    "employee": "Nikola Stojanović",
                    "bw_counter": 72985,
                    "color_counter": 146985,
                    "total_counter": 219970,
                    "a3_counter": null,
                    "comment": "Potrebno zameniti:\n"
                },
                "customer": {
                    "_id": "442",
                    "name": "Telenor d.o.o.",
                    "email": "",
                    "address": "Omladinskih brigada 90",
                    "contact_person": {
                        "_id": "19582",
                        "name": "Vladimir Panic",
                        "email": "Vladimir.Panic@telenor.rs",
                        "mobile": "063 430 231",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1034",
                    "number": "0275/10",
                    "date_start": "10/29/2010 12:00 AM",
                    "date_expire": "10/29/2012 12:00 AM",
                    "description": "Ugovor nije zavrsen",
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "3041",
                    "name": "WC7435",
                    "serial_number": "3900710347",
                    "asset_number": "02977",
                    "location": "Novi Beograd, Omladinskih Brigada 90",
                    "precise_location": "HQACB1 2nd Floor_Red\n\n"
                }
            },
            {
                "_id": "19578",
                "request_no": "16869/13",
                "description": "Needed: Post fuser jam clearance latch",
                "comment": "Deo skinut za Ispitni Centar, MNE_vidi mail od Xpro MNE od 23.07.2013. @ 11:52 ",
                "date_opened": "8/19/2013 10:11 AM",
                "date_allocated": "8/19/2013 10:13 AM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/19/2013 6:21 PM",
                "date_to_solve": "8/19/2013 6:21 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "danger",
                "time_left": -19058,
                "solution": {
                    "employee": "Marko Milić",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "677",
                    "name": "Xpro d.o.o",
                    "email": "office@xpro.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19578",
                        "name": "Marko Stojanović",
                        "email": null,
                        "mobile": "062 805 44 06",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1103",
                    "number": "Magacin_Back  Up",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "594",
                    "name": "WC5645",
                    "serial_number": "3633064813",
                    "asset_number": "00593",
                    "location": "Beograd, Viline Vode 47",
                    "precise_location": "Magacin"
                }
            },
            {
                "_id": "19552",
                "request_no": "16850/13",
                "description": "Pri štampi, ostaje trag na papiru",
                "comment": "Kontakt: Zlatko 063 8694 603.",
                "date_opened": "8/16/2013 12:55 PM",
                "date_allocated": "8/16/2013 12:55 PM",
                "date_arrived": "8/16/2013 2:00 PM",
                "date_dispatched": "8/16/2013 1:14 PM",
                "date_finished": "8/16/2013 2:40 PM",
                "date_finished_entered": "-",
                "date_return_to_fit": "8/18/2013 11:14 PM",
                "date_solved": "8/16/2013 9:05 PM",
                "date_to_solve": "8/16/2013 9:05 PM",
                "response_time": "1h:5m:",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -23214,
                "solution": {
                    "employee": "Marko Stojanović",
                    "bw_counter": 16869,
                    "color_counter": 207094,
                    "total_counter": 223963,
                    "a3_counter": 0,
                    "comment": "potrebno zameniti sledece delove:\n\nPREDAT NALOG 30.08.2013."
                },
                "customer": {
                    "_id": "442",
                    "name": "Telenor d.o.o.",
                    "email": "",
                    "address": "Omladinskih brigada 90",
                    "contact_person": {
                        "_id": "19552",
                        "name": "Vladimir Panic",
                        "email": "Vladimir.Panic@telenor.rs",
                        "mobile": "063 430 231",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1034",
                    "number": "0275/10",
                    "date_start": "10/29/2010 12:00 AM",
                    "date_expire": "10/29/2012 12:00 AM",
                    "description": "Ugovor nije zavrsen",
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "2290",
                    "name": "WC7435",
                    "serial_number": "3900710304",
                    "asset_number": "02248",
                    "location": "Dobanovci, Zemunska  174",
                    "precise_location": "Magacin Interevrope"
                }
            },
            {
                "_id": "19500",
                "request_no": "16804/13",
                "description": null,
                "comment": null,
                "date_opened": "8/14/2013 3:06 PM",
                "date_allocated": "8/14/2013 3:07 PM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/14/2013 11:16 PM",
                "date_to_solve": "8/14/2013 11:16 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "danger",
                "time_left": -25963,
                "solution": {
                    "employee": "Vladimir Lazić",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "677",
                    "name": "Xpro d.o.o",
                    "email": "office@xpro.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19500",
                        "name": "Vladimir Lazic",
                        "email": null,
                        "mobile": "062 805 44 23",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1103",
                    "number": "Magacin_Back  Up",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "579",
                    "name": "Sheeta",
                    "serial_number": "3315877848",
                    "asset_number": "00578",
                    "location": "Beograd, Viline Vode 47",
                    "precise_location": "Magaci"
                }
            },
            {
                "_id": "19487",
                "request_no": "16792/13",
                "description": "zaglavljuje papir",
                "comment": null,
                "date_opened": "8/14/2013 12:12 PM",
                "date_allocated": "8/14/2013 12:12 PM",
                "date_arrived": "8/14/2013 12:20 PM",
                "date_dispatched": "8/14/2013 12:12 PM",
                "date_finished": "8/14/2013 12:30 PM",
                "date_finished_entered": "-",
                "date_return_to_fit": "8/14/2013 12:37 PM",
                "date_solved": "8/14/2013 4:12 PM",
                "date_to_solve": "8/14/2013 4:12 PM",
                "response_time": "0h:8m:",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -26387,
                "solution": {
                    "employee": "Aleksandar Branković",
                    "bw_counter": 180533,
                    "color_counter": 0,
                    "total_counter": 180533,
                    "a3_counter": null,
                    "comment": "potrebno je zameniti fuser,roller pickup i pad holder"
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19487",
                        "name": "Zlatko Rogošić",
                        "email": "Zlatko.Rogosic@socgen.com",
                        "mobile": "063 10 488 07",
                        "phone": "011 30 11 454"
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "3038",
                    "name": "P3300",
                    "serial_number": "3251137420",
                    "asset_number": "02974",
                    "location": "Beograd, Bulevar Zorana Đinđića 50a/b",
                    "precise_location": "Arena"
                }
            },
            {
                "_id": "19442",
                "request_no": "16760/13",
                "description": "Needed: md pwb",
                "comment": "Veza: Ticket16717/13_rn.otp. 107/AD_Telenor\nZa ponedeljak, 02.09.2013.",
                "date_opened": "8/12/2013 10:36 AM",
                "date_allocated": "8/28/2013 4:03 PM",
                "date_arrived": "-",
                "date_dispatched": "9/2/2013 10:25 AM",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/12/2013 6:46 PM",
                "date_to_solve": "8/12/2013 6:46 PM",
                "response_time": "",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -29113,
                "solution": {
                    "employee": "Ivan Perković",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "677",
                    "name": "Xpro d.o.o",
                    "email": "office@xpro.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19442",
                        "name": "Ivan Perković",
                        "email": null,
                        "mobile": "062 805 44 34",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1103",
                    "number": "Magacin_Back  Up",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "2422",
                    "name": "WC7435",
                    "serial_number": "3900710185",
                    "asset_number": "02358",
                    "location": "Beograd, Viline Vode 47",
                    "precise_location": null
                }
            },
            {
                "_id": "19422",
                "request_no": "16749/13",
                "description": null,
                "comment": null,
                "date_opened": "8/9/2013 9:23 PM",
                "date_allocated": "8/9/2013 9:24 PM",
                "date_arrived": "8/9/2013 9:28 PM",
                "date_dispatched": "8/9/2013 9:24 PM",
                "date_finished": "8/9/2013 9:28 PM",
                "date_finished_entered": "-",
                "date_return_to_fit": "8/9/2013 9:25 PM",
                "date_solved": "8/10/2013 5:33 AM",
                "date_to_solve": "8/10/2013 5:33 AM",
                "response_time": "0h:4m:",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -32786,
                "solution": {
                    "employee": "PC Servis PC Servis",
                    "bw_counter": 8333610,
                    "color_counter": 0,
                    "total_counter": 8333610,
                    "a3_counter": null,
                    "comment": "stavljen laser sa prinera 10 i sada nejevlja gresk al je otisak zadebljan (pretoniran)"
                },
                "customer": {
                    "_id": "471",
                    "name": "XPro PC d.o.o.",
                    "email": "produkcija@alfadigital.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19422",
                        "name": "Dejan Jovanović",
                        "email": "dejan.jovanovic@monfort.ts",
                        "mobile": "062 805 44 03",
                        "phone": "011 34 70 008"
                    }
                },
                "agreement": {
                    "_id": "857",
                    "number": "Claude",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "2473",
                    "name": "4590",
                    "serial_number": "3524892226",
                    "asset_number": "02409",
                    "location": "Beograd, Pirandjelova 6b",
                    "precise_location": "11"
                }
            },
            {
                "_id": "19404",
                "request_no": "16732/13",
                "description": "vertiklana linija na otsku",
                "comment": "Aparat kod nas na servisu",
                "date_opened": "8/9/2013 1:58 PM",
                "date_allocated": "8/9/2013 1:58 PM",
                "date_arrived": "8/12/2013 10:00 AM",
                "date_dispatched": "8/12/2013 8:38 AM",
                "date_finished": "8/13/2013 10:50 AM",
                "date_finished_entered": "-",
                "date_return_to_fit": "8/13/2013 10:58 AM",
                "date_solved": "8/9/2013 10:08 PM",
                "date_to_solve": "8/9/2013 10:08 PM",
                "response_time": "4h:2m:",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -33231,
                "solution": {
                    "employee": "Vladimir Lazić",
                    "bw_counter": 18868,
                    "color_counter": 0,
                    "total_counter": 18868,
                    "a3_counter": null,
                    "comment": "staklo ocisceno\nprilikom testiranja nije bilo vertikalnih linija\nprilikom skeniranja i kopiranja\n\niz istorije se vidi da treba poruciti deo za skener ali su klijenti odustali od toga"
                },
                "customer": {
                    "_id": "463",
                    "name": "MK Group",
                    "email": "",
                    "address": "Bul.Mihaila Pupina 115E",
                    "contact_person": {
                        "_id": "19404",
                        "name": "Ljubica Ravić",
                        "email": null,
                        "mobile": null,
                        "phone": "011 35 39 539"
                    }
                },
                "agreement": {
                    "_id": "850",
                    "number": "T&M",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": "T&M",
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "1945",
                    "name": "P3300",
                    "serial_number": "3250915828",
                    "asset_number": "01943",
                    "location": "Novi Beograd, Bulevar Mihajla Pupina 115e",
                    "precise_location": ""
                }
            },
            {
                "_id": "19435",
                "request_no": "16721/13-a",
                "description": "Previous request solution comment: 115r00070 zamenjen maint.kit ,\nmasina i dalje lupa",
                "comment": null,
                "date_opened": "8/9/2013 1:00 PM",
                "date_allocated": "8/29/2013 8:54 AM",
                "date_arrived": "8/30/2013 10:30 AM",
                "date_dispatched": "8/30/2013 9:10 AM",
                "date_finished": "8/30/2013 11:00 AM",
                "date_finished_entered": "-",
                "date_return_to_fit": "9/2/2013 7:40 AM",
                "date_solved": "8/9/2013 9:10 PM",
                "date_to_solve": "8/9/2013 9:10 PM",
                "response_time": "4d:21h:30m:",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -33290,
                "solution": {
                    "employee": "Nikola Stojanović",
                    "bw_counter": 147269,
                    "color_counter": 0,
                    "total_counter": 147269,
                    "a3_counter": null,
                    "comment": "Zamenjen main drive, resen problem sa lupamjem, ali masina sad izbacuje fault Jam in area 1! Papir stane kod registracije!\notp.13-351-156"
                },
                "customer": {
                    "_id": "1528",
                    "name": "Fiat Automobili Srbija",
                    "email": null,
                    "address": "Kosovska 4",
                    "contact_person": {
                        "_id": "19435",
                        "name": "Miroljub Jocić",
                        "email": "miroljub.jocic@fiat.com",
                        "mobile": "069 2000 245",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1228",
                    "number": "120605-SC-01",
                    "date_start": "2/1/2012 1:00 AM",
                    "date_expire": "2/1/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "3692",
                    "name": "P4620",
                    "serial_number": "3883943871",
                    "asset_number": "03628",
                    "location": "Kragujevac, Kosovska 4",
                    "precise_location": "Montaža"
                }
            },
            {
                "_id": "19308",
                "request_no": "16649/13",
                "description": null,
                "comment": null,
                "date_opened": "8/7/2013 5:00 AM",
                "date_allocated": "8/7/2013 5:00 AM",
                "date_arrived": "8/7/2013 5:01 AM",
                "date_dispatched": "8/7/2013 5:00 AM",
                "date_finished": "8/7/2013 5:01 AM",
                "date_finished_entered": "-",
                "date_return_to_fit": "8/7/2013 5:02 AM",
                "date_solved": "8/7/2013 1:10 PM",
                "date_to_solve": "8/7/2013 1:10 PM",
                "response_time": "",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -36649,
                "solution": {
                    "employee": "PC Servis PC Servis",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "471",
                    "name": "XPro PC d.o.o.",
                    "email": "produkcija@alfadigital.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19308",
                        "name": null,
                        "email": null,
                        "mobile": null,
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "857",
                    "number": "Claude",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "1761",
                    "name": "4590",
                    "serial_number": "AKF488740",
                    "asset_number": "01760",
                    "location": "Beograd, Pirandjelova 6b",
                    "precise_location": "5"
                }
            },
            {
                "_id": "19295",
                "request_no": "16638/13",
                "description": "nece da stampa",
                "comment": null,
                "date_opened": "8/6/2013 2:52 PM",
                "date_allocated": "8/6/2013 2:53 PM",
                "date_arrived": "8/6/2013 3:00 PM",
                "date_dispatched": "8/6/2013 2:53 PM",
                "date_finished": "8/6/2013 3:15 PM",
                "date_finished_entered": "-",
                "date_return_to_fit": "8/6/2013 3:22 PM",
                "date_solved": "8/6/2013 6:52 PM",
                "date_to_solve": "8/6/2013 6:52 PM",
                "response_time": "0h:8m:",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -37747,
                "solution": {
                    "employee": "Aleksandar Branković",
                    "bw_counter": 78431,
                    "color_counter": 0,
                    "total_counter": 78431,
                    "a3_counter": null,
                    "comment": "neispravan fuser.\nstampac ce biti deinstaliran"
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19295",
                        "name": "Zlatko Rogošić",
                        "email": "Zlatko.Rogosic@socgen.com",
                        "mobile": "063 10 488 07",
                        "phone": "011 30 11 454"
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "2438",
                    "name": "P3160",
                    "serial_number": "3960095722",
                    "asset_number": "02374",
                    "location": "",
                    "precise_location": null
                }
            },
            {
                "_id": "19289",
                "request_no": "16633/13",
                "description": "Needed: post fuser jam clearance latch",
                "comment": "Veza: Ticket: 16632/13_rn.otp. 105/AD_Francuska ambasada",
                "date_opened": "8/6/2013 11:36 AM",
                "date_allocated": "8/6/2013 11:40 AM",
                "date_arrived": "-",
                "date_dispatched": "-",
                "date_finished": "-",
                "date_finished_entered": "-",
                "date_return_to_fit": "-",
                "date_solved": "8/6/2013 7:46 PM",
                "date_to_solve": "8/6/2013 7:46 PM",
                "response_time": "",
                "status": "Allocated",
                "warning_flag": "danger",
                "time_left": -37693,
                "solution": {
                    "employee": "Marko Milić",
                    "bw_counter": null,
                    "color_counter": null,
                    "total_counter": null,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "677",
                    "name": "Xpro d.o.o",
                    "email": "office@xpro.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19289",
                        "name": "Ivan Perković",
                        "email": null,
                        "mobile": "062 805 44 34",
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "1103",
                    "number": "Magacin_Back  Up",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "629",
                    "name": "WC5645",
                    "serial_number": "3640012314",
                    "asset_number": "00628",
                    "location": "Beograd, Viline Vode 47",
                    "precise_location": "Magacin"
                }
            },
            {
                "_id": "19279",
                "request_no": "16499/13-a-a",
                "description": "Previous request solution comment: Los otisak",
                "comment": null,
                "date_opened": "8/6/2013 7:00 AM",
                "date_allocated": "8/6/2013 5:02 AM",
                "date_arrived": "8/6/2013 5:06 AM",
                "date_dispatched": "8/6/2013 5:02 AM",
                "date_finished": "8/6/2013 7:06 AM",
                "date_finished_entered": "8/6/2013 5:08 AM",
                "date_return_to_fit": "-",
                "date_solved": "8/6/2013 3:10 PM",
                "date_to_solve": "8/6/2013 3:10 PM",
                "response_time": "",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -37970,
                "solution": {
                    "employee": "PC Servis PC Servis",
                    "bw_counter": 26095411,
                    "color_counter": 0,
                    "total_counter": 26095411,
                    "a3_counter": null,
                    "comment": "zamena delova"
                },
                "customer": {
                    "_id": "471",
                    "name": "XPro PC d.o.o.",
                    "email": "produkcija@alfadigital.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19279",
                        "name": null,
                        "email": null,
                        "mobile": null,
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "857",
                    "number": "Claude",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "1760",
                    "name": "4590",
                    "serial_number": "AKF488755",
                    "asset_number": "01759",
                    "location": "Beograd, Pirandjelova 6b",
                    "precise_location": "6"
                }
            },
            {
                "_id": "19152",
                "request_no": "16503/13",
                "description": "ne povlaci papir",
                "comment": null,
                "date_opened": "7/31/2013 11:24 AM",
                "date_allocated": "7/31/2013 11:24 AM",
                "date_arrived": "7/31/2013 11:30 AM",
                "date_dispatched": "7/31/2013 11:24 AM",
                "date_finished": "7/31/2013 11:45 AM",
                "date_finished_entered": "-",
                "date_return_to_fit": "7/31/2013 1:14 PM",
                "date_solved": "7/31/2013 3:24 PM",
                "date_to_solve": "7/31/2013 3:24 PM",
                "response_time": "0h:6m:",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -46595,
                "solution": {
                    "employee": "Aleksandar Branković",
                    "bw_counter": 28713,
                    "color_counter": 0,
                    "total_counter": 28713,
                    "a3_counter": null,
                    "comment": "potrebno zameniti PH 3160 base pick up ass"
                },
                "customer": {
                    "_id": "184",
                    "name": "Societe Generale Banka Srbija AD",
                    "email": "",
                    "address": "Bulevar Zorana Djindjica 50 a/b",
                    "contact_person": {
                        "_id": "19152",
                        "name": "Zlatko Rogošić",
                        "email": "Zlatko.Rogosic@socgen.com",
                        "mobile": "063 10 488 07",
                        "phone": "011 30 11 454"
                    }
                },
                "agreement": {
                    "_id": "1224",
                    "number": "180112-SC-01",
                    "date_start": "1/18/2012 12:00 AM",
                    "date_expire": "1/18/2017 12:00 AM",
                    "description": null,
                    "response_target_seconds": 4
                },
                "product": {
                    "_id": "2953",
                    "name": "P3160",
                    "serial_number": "3960185667",
                    "asset_number": "02889",
                    "location": "Beograd, Bul Mihajla Pupina 115 D",
                    "precise_location": "Grawe, IV sprat_CBO support"
                }
            },
            {
                "_id": "19148",
                "request_no": "16499/13-a",
                "description": "Previous request solution comment: zamena dela",
                "comment": null,
                "date_opened": "7/31/2013 10:40 AM",
                "date_allocated": "8/2/2013 3:45 PM",
                "date_arrived": "8/6/2013 5:00 AM",
                "date_dispatched": "8/6/2013 4:58 AM",
                "date_finished": "8/6/2013 7:00 AM",
                "date_finished_entered": "-",
                "date_return_to_fit": "8/6/2013 5:02 AM",
                "date_solved": "7/31/2013 6:50 PM",
                "date_to_solve": "7/31/2013 6:50 PM",
                "response_time": "1d:5h:50m:",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -46390,
                "solution": {
                    "employee": "PC Servis PC Servis",
                    "bw_counter": 26095411,
                    "color_counter": 0,
                    "total_counter": 26095411,
                    "a3_counter": null,
                    "comment": null
                },
                "customer": {
                    "_id": "471",
                    "name": "XPro PC d.o.o.",
                    "email": "produkcija@alfadigital.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19148",
                        "name": null,
                        "email": null,
                        "mobile": null,
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "857",
                    "number": "Claude",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "1760",
                    "name": "4590",
                    "serial_number": "AKF488755",
                    "asset_number": "01759",
                    "location": "Beograd, Pirandjelova 6b",
                    "precise_location": "6"
                }
            },
            {
                "_id": "19147",
                "request_no": "16499/13",
                "description": "glavi papir u registraciji",
                "comment": null,
                "date_opened": "7/31/2013 10:32 AM",
                "date_allocated": "7/31/2013 10:32 AM",
                "date_arrived": "7/31/2013 10:35 AM",
                "date_dispatched": "7/31/2013 10:33 AM",
                "date_finished": "7/31/2013 10:40 AM",
                "date_finished_entered": "-",
                "date_return_to_fit": "7/31/2013 10:38 AM",
                "date_solved": "7/31/2013 6:42 PM",
                "date_to_solve": "7/31/2013 6:42 PM",
                "response_time": "0h:2m:",
                "status": "Dispatched",
                "warning_flag": "danger",
                "time_left": -46397,
                "solution": {
                    "employee": "PC Servis PC Servis",
                    "bw_counter": 25958250,
                    "color_counter": 0,
                    "total_counter": 25958250,
                    "a3_counter": null,
                    "comment": "zamena dela"
                },
                "customer": {
                    "_id": "471",
                    "name": "XPro PC d.o.o.",
                    "email": "produkcija@alfadigital.rs",
                    "address": "Baje Pivljanina 53a",
                    "contact_person": {
                        "_id": "19147",
                        "name": null,
                        "email": null,
                        "mobile": null,
                        "phone": null
                    }
                },
                "agreement": {
                    "_id": "857",
                    "number": "Claude",
                    "date_start": "-",
                    "date_expire": "-",
                    "description": null,
                    "response_target_seconds": null
                },
                "product": {
                    "_id": "1760",
                    "name": "4590",
                    "serial_number": "AKF488755",
                    "asset_number": "01759",
                    "location": "Beograd, Pirandjelova 6b",
                    "precise_location": "6"
                }
            }
        ]
    },
    "error_code": 0,
    "success": true,
    "message": "here are requests"
}





