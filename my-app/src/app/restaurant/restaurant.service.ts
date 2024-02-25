import { Injectable } from "@angular/core";
import { restaurant_model } from "./restaurant_model";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import * as Papa from 'papaparse';
import { Observable } from "rxjs";
import { filter_model } from "./filter_model";


@Injectable({
    providedIn: 'root'
  })
  export class RestaurantService {
    public myData = [
      {
        "name": "WEST 94TH ST PUB",
        "phone_number": "(919) 403-0025",
        "address": "4711 HOPE VALLEY RD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "LOS TRES MEXICAN RESTAURANT",
        "phone_number": "(919) 544-9247",
        "address": "6905 FAYETTEVILLE ROAD",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "BLUE RIDGE DELI AND CAFE",
        "phone_number": "(919) 361-0414",
        "address": "3530 S ALSTON AVENUE",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "TOKYO EXPRESS",
        "phone_number": "(919) 477-4488",
        "address": "3225 GUESS RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "PIZZA HUT DELIVERY",
        "phone_number": "(919) 477-7377",
        "address": "3808 GUESS ROAD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "WAFFLE HOUSE",
        "phone_number": "(919) 382-3355",
        "address": "3500 HILLSBOROUGH RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "SITAR INDIAN CUISINE",
        "phone_number": "(919) 490-1326",
        "address": "3630 CHAPEL HILL BLVD.",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Indian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "WENDY'S 6316",
        "phone_number": "(919) 471-3401",
        "address": "3814 N DUKE ST",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CHEF'S HOUSE",
        "phone_number": "(919) 660-6318",
        "address": "1058 W CLUB BLVD SUITE 564",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "STARBUCK'S",
        "phone_number": "(919) 293-0232",
        "address": "4834 NC HWY 55",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "TOKYO EXPRESS",
        "phone_number": "(919) 477-4488",
        "address": "3225 GUESS RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "MELO TRATORIA & TAPAS",
        "phone_number": "(919) 384-9080",
        "address": "1821 HILLANDALE ROAD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY AT WOODCROFT",
        "phone_number": "(919) 419-0078",
        "address": "4711 HOPE VALLEY RD.",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "JERSEY MIKES SUBS",
        "phone_number": "(919) 484-7788",
        "address": "2945 S MIAMI BLVD UNIT 101",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "LILI'S KITCHEN",
        "phone_number": "(919) 600-2285",
        "address": "2104 ANGIER AVE JOE’S COMMISSARY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BO'S KITCHEN",
        "phone_number": "(919) 793-5493",
        "address": "2945 S MIAMI BLVD STE 127 V'S KITCHEN",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "JC'S KITCHEN",
        "phone_number": "(919) 477-8830",
        "address": "706 E. MAIN ST.",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "FREDDY'S FROZEN CUSTARD AND STEAKBURGERS",
        "phone_number": "(919) 680-2111",
        "address": "3303 WATKINS ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "CHINA CAFE",
        "phone_number": "(919) 544-5561",
        "address": "247 W HWY 54",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "BURGER KING 9653",
        "phone_number": "(919) 403-1741",
        "address": "4829 HOPE VALLEY RD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "DANISH MEXICAN RESTAURANT",
        "phone_number": "(919) 627-3715",
        "address": "902 FAYETTEVILLE ST, STE 205",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "FRESH FROM THE KITCHEN",
        "phone_number": "(919) 740-3656",
        "address": "1101 W CHAPEL HILL ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CRISPY GYOZA",
        "phone_number": "(919) 455-5537",
        "address": "1102 HOLLOWAY ST",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "EL CUSCATLECO",
        "phone_number": "(919) 401-5245",
        "address": "4212 GARRETT ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "QUIZNO'S SUBS #1756",
        "phone_number": "(919) 941-7700",
        "address": "5311 E SOUTH MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "M & K'S COFFEE AND CAFE",
        "phone_number": "(919) 219-2734",
        "address": "5108 WAKE FOREST HWY",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "THE REFECTORY CAFE",
        "phone_number": "(919) 908-6797",
        "address": "2726 CHAPEL HILL BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "BAJA SHACK",
        "phone_number": "(919) 908-9468",
        "address": "1058 CLUB BLVD SUITE 540",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TACOLANDIA",
        "phone_number": "(919) 986-5670",
        "address": "2104 ANGIER AVE JOE’S COMMISSARY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CHICK-FIL-A",
        "phone_number": "(919) 620-0897",
        "address": "3912 N ROXBORO ROAD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BARNES & NOBLE BOOKSELLERS,INC",
        "phone_number": "(919) 806-1930",
        "address": "8030 RENAISSANCE PRKWAY",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "RANDY'S PIZZA",
        "phone_number": "(919) 286-7272",
        "address": "1720 GUESS RD",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TWISTED NOODLES",
        "phone_number": "(919) 489-9888",
        "address": "4201 UNIVERSITY DR #112",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "STARBUCK'S  9715",
        "phone_number": "(919) 493-2471",
        "address": "5319 NEW HOPE COMMONS EXTENS",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "ERWIN SQUARE CAFE",
        "phone_number": "(919) 416-9191",
        "address": "2200 W MAIN ST STE B100",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "BOWL OF PHO",
        "phone_number": "(904) 415-9368",
        "address": "2806 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "BLACK TWIG CIDER HOUSE",
        "phone_number": "(919) 321-0203",
        "address": "2812 ERWIN ROAD SUITE 104",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "KWIK WOK",
        "phone_number": "(919) 569-0868",
        "address": "3723 WAKE FOREST HWY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TABERNA TAPAS DINER",
        "phone_number": "(919) 797-1457",
        "address": "325 W MAIN ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY, TRIANGLE 12718",
        "phone_number": "(919) 220-5171",
        "address": "1534 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "KANKI JAPANESE HOUSE OF STEAKS",
        "phone_number": "(919) 401-6908",
        "address": "3504 MT MORIAH ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "LONE STAR STEAKHOUSE & SALOON",
        "phone_number": "(919) 530-8119",
        "address": "5307 NEW HOPE COMMONS DRIVE",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "AMANTE PIZZA",
        "phone_number": "(919) 493-0904",
        "address": "6209 FALCONBRIDGE RD",
        "zip_code": 27514,
        "city": "CHAPEL HILL",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "THRILLS FROM THE GRILL",
        "phone_number": "(919) 220-5787",
        "address": "2827 N ROXBORO ROAD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "KOUMI JAPANESE RESTURANT",
        "phone_number": "(980) 322-6174",
        "address": "3550 N. ROXBORO RD.",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "STARBUCKS",
        "phone_number": "(919) 668-3815",
        "address": "DUKE HOSPITAL NORTH",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "BOJANGLES #6",
        "phone_number": "(919) 471-0581",
        "address": "4525 N. ROXBORO ROAD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "RANDY'S PIZZA",
        "phone_number": "(919) 490-6850",
        "address": "1813 MLK PARKWAY",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CHICK-FIL-A EXPRESS",
        "phone_number": "(919) 684-3741",
        "address": "DUKE SOUTH CLINIC",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "HOLIDAY INN EXPRESS BREAKFAST BAR",
        "phone_number": "(919) 596-5340",
        "address": "6119 FARRINGTON RD",
        "zip_code": 27517,
        "city": "CHAPEL HILL",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "POMEGRANATE KITCHEN",
        "phone_number": "(919) 886-0356",
        "address": "5504 CHAPEL HILL BLVD. SUITE 102",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "DOMINO'S",
        "phone_number": "(919) 682-3030",
        "address": "1209 W. MAIN ST.",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CHINA EXPRESS",
        "phone_number": "(919) 544-7013",
        "address": "2223 NC 54 HWY",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "BISCUITVILLE  160",
        "phone_number": "(919) 383-9174",
        "address": "3201 HILLSBOROUGH RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "PAPA JOHNS",
        "phone_number": "(919) 402-9900",
        "address": "5318 NEW HOPE COMMONS EXT",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "MCDONALDS #368",
        "phone_number": "",
        "address": "2010 N ROXBORO ROAD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "WE BEA GRILLIN",
        "phone_number": "(919) 440-2440",
        "address": "1102 HOLLOWAY ST",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "BURGER KING #944",
        "phone_number": "(919) 596-9184",
        "address": "1605 US 70 E",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "HARRIS TEETER STARBUCKS",
        "phone_number": "(919) 286-1500",
        "address": "2107 HILLSBOROUGH ROAD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 544-0220",
        "address": "6910 FAYETTEVILLE ROAD  236",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "WOK N GRILL",
        "phone_number": "(919) 474-8100",
        "address": "5311 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "CHUBBYS TACOS",
        "phone_number": "(919) 286-4499",
        "address": "748 NINTH STREET",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "LITTLE CAESARS PIZZA",
        "phone_number": "(919) 797-0463",
        "address": "923 N. MIAMI BLVD.",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "WAFFLE HOUSE",
        "phone_number": "(919) 382-3355",
        "address": "3500 HILLSBOROUGH RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "WENDY S   #15",
        "phone_number": "(919) 957-4887",
        "address": "1808 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BURGER KING",
        "phone_number": "(919) 682-7546",
        "address": "1601 HWY. 55",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "GG THE TASTE OF CHICAGO & FISH CHICKEN",
        "phone_number": "(919) 682-9145",
        "address": "826 FAYETTEVILLE ST SUITE 103",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 477-5389",
        "address": "5300 N ROXBORO RD",
        "zip_code": 27712,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "MAMA'S HOT CHICKEN",
        "phone_number": "(919) 323-9172",
        "address": "900 W MAIN ST ALIVIA'S",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY, COFFEE WORLD, ICE CREAM",
        "phone_number": "(919) 477-8558",
        "address": "3799 GUESS RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 572-0902",
        "address": "8128 RENAISSANCE PKWY SUITE 113",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TOP'S CHINA",
        "phone_number": "(919) 401-8406",
        "address": "5324 NEW HOPE COMMONS DR. STE 301",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "MCALISTER'S DELI",
        "phone_number": "(919) 419-9083",
        "address": "5318 NEW HOPE COMMONS DRIVE",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TAQUERIA JALISCO",
        "phone_number": "(919) 358-7824",
        "address": "3808 GUESS RD SUITE 1",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "FAY STREET GROCERY AND GRILL",
        "phone_number": "(919) 491-0595",
        "address": "1302 FAY STREET",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "PUPUSERIA LA METAPANECA",
        "phone_number": "(919) 596-2763",
        "address": "2405 HOLLOWAY ST",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "EL CORRAL MEXICAN RESTAURANT INC",
        "phone_number": "(919) 309-4543",
        "address": "1821 HILLANDALE RD #8",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "YAMAZUSHI",
        "phone_number": "(919) 493-7748",
        "address": "4711 HOPE VALLEY RD SUITE 6A",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 493-4116",
        "address": "4600 CHAPEL HILL BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CARRABBAS Italian GRILL",
        "phone_number": "(919) 401-5950",
        "address": "5312 NEW HOPE COMMONS EXTENS",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 286-9681",
        "address": "1058 W CLUB",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "EL CHAPIN",
        "phone_number": "(919) 308-2440",
        "address": "4600 DURHAM CHAPEL HILL BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "ROMA PIZZA",
        "phone_number": "(919) 641-0675",
        "address": "121 SHERRON RD 302",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "WENDY'S #2390",
        "phone_number": "(919) 474-0017",
        "address": "5402 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TACO BELL",
        "phone_number": "(919) 419-1896",
        "address": "3509 WESTGATE DR",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "NEW JAPAN EXPRESS",
        "phone_number": "(919) 220-4074",
        "address": "1800 STRAUSS DR.",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "COSINA MEXICANA LA PENA DE HOREB",
        "phone_number": "(919) 592-1796",
        "address": "2300 CHAPEL HILL ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "FOOD DELICIOUS",
        "phone_number": "(888) 512-3343",
        "address": "1102 HOLLOWAY STREET",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "LUCKY'S DELICATESSEN",
        "phone_number": "(919) 864-8841",
        "address": "107 WEST CHAPEL HILL STREET",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TAQUERIA OAXAQUENA",
        "phone_number": "(919) 358-2952",
        "address": "821 N MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "STARICO EL TACO",
        "phone_number": "(919) 309-5826",
        "address": "308 S DRIVER ST DURHAM COMMISSARY",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BORICUA SOUL",
        "phone_number": "(561) 512-8881",
        "address": "1102 HOLLOWAY STREET",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "THE EGG HOUSE",
        "phone_number": "(919) 813-9749",
        "address": "308 S DRIVER STREET",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "WENDY'S 6310",
        "phone_number": "(620) 231-3390",
        "address": "3527 HILLSBOROUGH RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "DOMINO'S-WOODCROFT",
        "phone_number": "(919) 493-4077",
        "address": "4711 HOPE VALLEY ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "EL RODEO",
        "phone_number": "(919) 470-4289",
        "address": "3404 WESTGATE DR",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY 29857",
        "phone_number": "(919) 544-6500",
        "address": "3825 S ROXBORO RD",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "PAPA JOHNS PIZZA",
        "phone_number": "(919) 484-7766",
        "address": "4901 HIGHWAY 55",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "ONLY BURGER MFU DC #21",
        "phone_number": "(919) 937-9377",
        "address": "3710 SHANNON RD. SUITE 118",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "SITAR INDIAN CUISINE",
        "phone_number": "(919) 490-1326",
        "address": "3630 CHAPEL HILL BLVD.",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Indian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "CHINA KING",
        "phone_number": "(919) 688-0102",
        "address": "1418 AVONDALE DR.",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "ASIAN KITCHEN",
        "phone_number": "(919) 490-5678",
        "address": "1125 W. NC HWY 54 SUITE 801",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "DUBOSE HOUSE AND BAR",
        "phone_number": "(919) 682-0228",
        "address": "150 DUBOSE HOUSE LN",
        "zip_code": 27517,
        "city": "CHAPEL HILL",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "CHUBBY'S TACOS WOODCROFT",
        "phone_number": "(919) 489-4636",
        "address": "4711 HOPE VALLEY RD. SUITE C-1",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "PUPUSERIA & TAQUERIA DC #31",
        "phone_number": "(919) 471-3299",
        "address": "TAQUERIA ORELLANA 5300 N ROXBORO RD",
        "zip_code": 27712,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "ONLY BURGER",
        "phone_number": "(919) 724-1622",
        "address": "3710 SHANNON RD., SUITE 118",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "HAPPY CHINA SICHUAN CUISINE",
        "phone_number": "(919) 237-2021",
        "address": "2505 DURHAM CHAPEL HILL RD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "RANDY'S PIZZA",
        "phone_number": "(919) 403-6850",
        "address": "4810 HOPE VALLEY RD, SUITE 112",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "THAI CAFE",
        "phone_number": "(919) 493-9794",
        "address": "2501 UNIVERSITY DRIVE",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "MCDONALDS",
        "phone_number": "(919) 806-1345",
        "address": "204 WEST HWY 54",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "PIZZA HUT",
        "phone_number": "(919) 361-2728",
        "address": "2107 E. HWY. 54",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "LI MING'S GLOBAL MART (CAFE)",
        "phone_number": "(919) 489-9888",
        "address": "3400 WESTGATE DRIVE SUITE 14A",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "BULL CITY BURGER AND BREWERY",
        "phone_number": "(919) 680-2333",
        "address": "107 E. PARRISH STREET",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "WELLSPRING CAFE",
        "phone_number": "(919) 572-1210",
        "address": "621 BROAD ST",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "ANOTHER BROKEN EGG CAFE",
        "phone_number": "(919) 381-5172",
        "address": "2608 ERWIN RD SUITE 120",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "TAQUERIA LA ESPERANZA",
        "phone_number": "(919) 672-7010",
        "address": "1028 HOLLOWAY ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "BONEFISH GRILL",
        "phone_number": "(919) 248-2906",
        "address": "7820 NC 751 HWY",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "JAPAN EXPRESS",
        "phone_number": "(919) 598-6817",
        "address": "3409 HILLSBOROUGH RD.",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "LILLY'S PIZZA",
        "phone_number": "(919) 797-2554",
        "address": "810 W PEABODY ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "VINE JAPANESE AND THAI",
        "phone_number": "(919) 294-8224",
        "address": "607 BROAD ST",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY 49175",
        "phone_number": "(919) 401-4962",
        "address": "5450 NEW HOPE COMMONS DR",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TACOS SANJUAN",
        "phone_number": "(919) 455-8661",
        "address": "2104 ANGIER AVE JOE’S COMISSARY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TOWN HALL BURGER AND BEER",
        "phone_number": "(919) 973-0506",
        "address": "7830 751 HWY SUITE 100",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "EL TORITO BRAVO",
        "phone_number": "(919) 806-9353",
        "address": "2104 ANGIER AVE JOE’S COMMISSARY",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TACOS TAMAULIPAS",
        "phone_number": "(919) 267-0025",
        "address": "2104 ANGIER AVE JOE’S COMMISSARY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "HIBACHI GRILL & SUPREME BUFFET",
        "phone_number": "(919) 596-8936",
        "address": "4600 DURHAM-CHAPEL HILL BLVD.",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TOP'S CHINA RESTAURANT",
        "phone_number": "(919) 425-0001",
        "address": "1919 HOLLOWAY ST",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BISCUITVILLE 158",
        "phone_number": "(919) 419-8246",
        "address": "2822 CHAPEL HILL BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "INTERNATIONAL DELIGHTS",
        "phone_number": "(919) 286-2884",
        "address": "740 NINTH ST",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BURGER KING RESTAURANT #399",
        "phone_number": "(919) 286-0020",
        "address": "1200 WEST CLUB BLVD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "THE CAFE AT THE PLAZA",
        "phone_number": "",
        "address": "4820 EMPEROR BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "BOJANGLE'S TRIARC FOOD SYSTEMS INC",
        "phone_number": "(919) 237-2378",
        "address": "176 STRATFORD LAKES DR",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "RUTH'S CHRIS STEAK HOUSE",
        "phone_number": "(919) 361-0123",
        "address": "7007 FAYETTEVILLE RD.",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "VICEROY PUB",
        "phone_number": "(919) 797-0413",
        "address": "335 W MAIN STREET",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "DUNKIN DONUTS",
        "phone_number": "(919) 819-7039",
        "address": "3457 HILLSBOROUGH ROAD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "GOLDEN PIZZA",
        "phone_number": "(919) 638-3711",
        "address": "2300 CHAPEL HILL ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "PAGE ROAD GRILL",
        "phone_number": "(919) 908-8900",
        "address": "5416 PAGE RD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TACOS COSTA GRANDE",
        "phone_number": "(919) 422-7372",
        "address": "2945 S MIAMI BLVD SUITE 127",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "JERSEY MIKE'S SUBS",
        "phone_number": "(919) 248-8300",
        "address": "7001 FAYETTEVILLE ROAD",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "THE DOG HOUSE",
        "phone_number": "(419) 314-7661",
        "address": "5279 N ROXBORO RD",
        "zip_code": 27712,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BOJANGLES #8",
        "phone_number": "(919) 383-6797",
        "address": "3558 HILLSBOROUGH ROAD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BURGER KING #217",
        "phone_number": "(919) 493-6664",
        "address": "3400 WESTGATE DRIVE",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "THE GROVE CAFE",
        "phone_number": "(919) 458-9264",
        "address": "110 CLAYTON ROAD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "MCDONALDS  19805",
        "phone_number": "(919) 624-7099",
        "address": "1708 NEW RALEIGH HWY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "EPA CAFETERIA",
        "phone_number": "",
        "address": "109 T W ALEXANDER DRIVE",
        "zip_code": 27709,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "DOMINOS PIZZA",
        "phone_number": "(919) 598-1111",
        "address": "3001 E HOLLOWAY ST",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CHARROS MEXICAN RESTAURANT",
        "phone_number": "(919) 937-9825",
        "address": "3511 WITHERSPOON BLVD SUITE 107",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "COUNTING HOUSE",
        "phone_number": "(919) 956-6700",
        "address": "111 NORTH CORCORAN STREET",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "FIVE GUYS BURGERS AND FRIES",
        "phone_number": "(919) 489-3555",
        "address": "5332 MCFARLAND DR,  SUITE 110",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "STARBUCKS #13656",
        "phone_number": "(919) 471-2957",
        "address": "3801 GUESS RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "TROPICAL SMOOTHIE CAFE",
        "phone_number": "(919) 474-2233",
        "address": "5311 S MIAMI BLVD, SUITE F",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 493-3152",
        "address": "2405 CHAPEL HILL BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SPROUT CAFE",
        "phone_number": "(919) 220-5429",
        "address": "433 MURRAY AVE",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "PERKY'S PIZZA",
        "phone_number": "(919) 688-8782",
        "address": "3422 RED MILL ROAD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BISCUITVILLE",
        "phone_number": "(919) 682-3658",
        "address": "1806 HOLLOWAY ST",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "TEXAS ROADHOUSE",
        "phone_number": "(919) 471-8738",
        "address": "1809 NORTH POINT DR",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "THAI CHINA BUFFET",
        "phone_number": "(919) 361-8881",
        "address": "4900 HWY 55",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "DELI-ICIOUS DC #102",
        "phone_number": "(919) 410-8849",
        "address": "2401-303 OLD WORLD PLACE",
        "zip_code": 27612,
        "city": "RALEIGH",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BOCCI TRATTORIA & PIZZERIA",
        "phone_number": "(919) 206-4067",
        "address": "5850 FAYETTEVILLE RD",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "THE DOG HOUSE",
        "phone_number": "(919) 682-3109",
        "address": "931 N MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CAJUN CAFE AND GRILL",
        "phone_number": "(917) 302-7977",
        "address": "1058 W CLUB BLVD. SUITE 548",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "RISE BISCUITS & DONUTS",
        "phone_number": "",
        "address": "401 A FOSTER ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "FIREHOUSE SUBS",
        "phone_number": "(919) 489-2900",
        "address": "5319 NEW HOPE COMMONS",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "O SO GOOD KURBSIDE KITCHEN",
        "phone_number": "(919) 251-9763",
        "address": "1102 HOLLOWAY ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TAQUERIA LA ESPERANZA  DC #3",
        "phone_number": "(919) 949-0920",
        "address": "1028 HOLLOWAY ST.",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "SAM'S CLUB 4831 CLUB CAFE",
        "phone_number": "(919) 489-8160",
        "address": "4005 CHAPEL HILL BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "LUCKY CHICKEN",
        "phone_number": "(919) 338-4325",
        "address": "1720 GUESS RD",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SATISFACTION RESTAURANT AND BAR",
        "phone_number": "(919) 682-7397",
        "address": "905 W MAIN ST STE 37",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "CHIPOTLE MEXICAN GRILL",
        "phone_number": "(919) 309-2901",
        "address": "2608 ERWIN ROAD # 17",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "CHICK FIL A @ SOUTH SQUARE",
        "phone_number": "(919) 419-6219",
        "address": "4120 UNIVERSITY DRIVE",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "MCDONALDS",
        "phone_number": "(919) 688-3070",
        "address": "102 MORGAN ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "STAYBRIDGE SUITES BREAKFAST BA",
        "phone_number": "(919) 401-9800",
        "address": "3704 MT. MORIAH ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "SALADELIA",
        "phone_number": "(919) 416-1400",
        "address": "2424 ERWIN RD. SUITE 303",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 286-3030",
        "address": "705 NINTH ST.",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "PIZZA INN",
        "phone_number": "(919) 294-6700",
        "address": "3906 N DUKE ST.",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "MOE'S SOUTHWEST GRILL",
        "phone_number": "(919) 493-6637",
        "address": "5332 MCFARLAND DR.",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "DICKEYS BARBECUE PIT",
        "phone_number": "(916) 502-6757",
        "address": "5318 NEW HOPE COMMONS",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TAQUERIA MI PUEBLO",
        "phone_number": "(919) 688-3461",
        "address": "223 THE VILLAGE",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "CHICK FIL A",
        "phone_number": "(919) 382-9399",
        "address": "3429 HILLSBOROUGH RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TOWN DELI GROCERY",
        "phone_number": "(919) 768-2192",
        "address": "801 N ALSTON AVE",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "THE COOKERY",
        "phone_number": "(919) 801-7290",
        "address": "1101 W CHAPEL HILL ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "L & D GROCERY & GRILL",
        "phone_number": "(919) 596-1735",
        "address": "2620 ANGIER AVE",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "LOUDERMILK PASTRY KITCHEN",
        "phone_number": "(919) 913-2098",
        "address": "150 DUBOSE HOUSE LN",
        "zip_code": 27517,
        "city": "CHAPEL HILL",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "EL RODEO OF DURHAM INC",
        "phone_number": "(919) 683-2417",
        "address": "905 W MAIN STREET",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "EL DORADO'S #6",
        "phone_number": "(919) 361-0302",
        "address": "4900 HWY 55",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "ZINBURGER",
        "phone_number": "(919) 293-1726",
        "address": "8030 RENNNAISSANCE PARKWAY",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "CREE CAFETERIA",
        "phone_number": "(919) 407-5631",
        "address": "4425 SILICON DRIVE",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "TAQUERIA DON BERCERRA",
        "phone_number": "(919) 220-0206",
        "address": "2301 N. ROXBORO RD.",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 383-9219",
        "address": "3600 HILLSBOROUGH RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "NEW CHINA",
        "phone_number": "(919) 806-3354",
        "address": "121 SHERRON ROAD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "BOB EVANS FARM REST #321",
        "phone_number": "(919) 403-6766",
        "address": "5419 CHAPEL HILL BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "JIMMY JOHN'S",
        "phone_number": "(919) 286-5383",
        "address": "701 NINTH STREET",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TOOTIE'S MOBILE KITCHEN DC #55",
        "phone_number": "(919) 641-2177",
        "address": "TOOTIES GRILL & CAFE 2108 ANGIER AVE",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "LAS DELICIAS DC #1",
        "phone_number": "(919) 710-1435",
        "address": "2104 ANGIER AVE JOE’S COMMISSARY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "V'S KITCHEN",
        "phone_number": "(910) 286-1070",
        "address": "2945 S MIAMI BLVD SUITE 127",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "POMPIERI PIZZA",
        "phone_number": "(919) 973-1589",
        "address": "102 CITY HALL PLAZA SUITE 101",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "R&B SEAFOOD BOX",
        "phone_number": "(919) 680-2227",
        "address": "518 E TRINITY AVE SUITE B",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BURGER KING #17454",
        "phone_number": "(919) 941-9197",
        "address": "5630 S MIAMI BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "OUTBACK STEAK HOUSE",
        "phone_number": "(919) 544-6358",
        "address": "3500 MT MORIAH ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "RANDY'S PIZZA",
        "phone_number": "(919) 941-7755",
        "address": "5311 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "R & B GRILL",
        "phone_number": "(919) 596-8938",
        "address": "1408 CHRISTIAN AVE #3 SOPHISTICATED CATERING INC",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "M SUSHI",
        "phone_number": "(919) 908-9266",
        "address": "311 HOLLAND ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TACOS LA AURORA",
        "phone_number": "(919) 685-0164",
        "address": "2300 CHAPEL HILL ROAD",
        "zip_code": 27702,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "FIREHOUSE SUBS",
        "phone_number": "(919) 479-1333",
        "address": "4201 N ROXBORO ROAD SUITE 110",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "PHO & POKE HOUSE",
        "phone_number": "(919) 412-9154",
        "address": "2816 ERWIN RD STU 207",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SUPER TAQUERIA",
        "phone_number": "(919) 220-9884",
        "address": "2842 N ROXBORO RD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "CHIPOTLE MEXICAN GRILL",
        "phone_number": "(919) 401-5469",
        "address": "3219 WATKINS ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "FIDELITY CAFE @ NETWORK CENTER",
        "phone_number": "(919) 458-3596",
        "address": "4004 EAST HWY 54",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "TACO GRANDE",
        "phone_number": "(919) 672-9054",
        "address": "2104 ANGIER AVE JOE’S COMMISSARY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "PENN STATION EAST COAST SUBS",
        "phone_number": "(919) 237-3044",
        "address": "8200 1001 RENAISSANCE PARKWAY",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "FLIK AT FIDELITY,DANBURY HALL",
        "phone_number": "(919) 458-3596",
        "address": "5411 PAGE ROAD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TACOS TIA REME",
        "phone_number": "(984) 888-6465",
        "address": "200 LYNNFOREST DR",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BIG C'S WAFFLES",
        "phone_number": "(919) 274-8439",
        "address": "4310 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "MCALISTER'S DELI",
        "phone_number": "(919) 806-3354",
        "address": "6807 FAYETTEVILLE ROAD 117",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "RAFA'S BURGERS",
        "phone_number": "(919) 923-3267",
        "address": "2300 CHAPEL HILL ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "DUNKIN DONUTS",
        "phone_number": "(919) 406-6666",
        "address": "1125 W. NC 54 SUITE 504",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "JIMMY JOHN'S GOURMET SANDWICH SHOP",
        "phone_number": "(919) 472-0506",
        "address": "3219 WATKINS ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "JIMMY JOHN'S",
        "phone_number": "(919) 419-7111",
        "address": "1125 W HWY 54 STE 802",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY 11138",
        "phone_number": "(919) 687-2771",
        "address": "1000 N. MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TAQUERIA SAN PABLITO",
        "phone_number": "(919) 824-1140",
        "address": "2104 ANGIER AVE JOE’S COMMISSARY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CHICKEN HUT #1",
        "phone_number": "(919) 682-5697",
        "address": "3019 FAYETTEVILLE STREET",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "DANNY'S BAR-B-QUE",
        "phone_number": "(919) 806-1965",
        "address": "2945 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "Q SHACK",
        "phone_number": "(919) 402-4227",
        "address": "2510 UNIVERSITY DRIVE",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "WILLIAM'S GOURMET KITCHEN",
        "phone_number": "(919) 806-0690",
        "address": "2114 EAST HIGHWAY 54",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TJ'S KITCHEN",
        "phone_number": "(919) 673-7188",
        "address": "1408 CHRISTIAN AVE #3 SOPHISTICATED CATERING INC",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY NCCU",
        "phone_number": "(919) 530-7807",
        "address": "1801 FAYETTEVILLE STREET",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "MARCO'S PIZZA",
        "phone_number": "(919) 410-9101",
        "address": "1125 W NC HIGHWAY 54 SUITE 406",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "MATTIE B'S PUBLIC HOUSE",
        "phone_number": "(717) 586-4619",
        "address": "1125 W NC HWY 54 STE 301",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TACOS GARCIA #2",
        "phone_number": "(919) 633-1915",
        "address": "2104 ANGIER AVE JOE’S COMMISSARY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "GODDESS GARDEN CAFE",
        "phone_number": "(919) 937-9534",
        "address": "4125 DURHAM CHAPEL HILL BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "CHINA PALACE EXPRESS",
        "phone_number": "(919) 493-3088",
        "address": "5210 GARRETT ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "COURTYARD CAFE",
        "phone_number": "(919) 598-9638",
        "address": "301 RESIDENCE INN BLVD",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "BASF CAFETERIA",
        "phone_number": "(919) 547-2000",
        "address": "26 DAVIS DRIVE",
        "zip_code": "27709-3528",
        "city": "RTP",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "NANTUCKET CAFE AND GRILL",
        "phone_number": "(919) 402-0077",
        "address": "5925 FARRINGTON RD",
        "zip_code": 27517,
        "city": "CHAPEL HILL",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "CAROLINA ALE HOUSE",
        "phone_number": "(919) 490-2001",
        "address": "3911 DURHAM CHAPEL HILL BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 560-0082",
        "address": "200 E MAIN ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY  #11873",
        "phone_number": "(919) 596-1217",
        "address": "121 SHERRON RD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CHINA STAR",
        "phone_number": "(919) 477-1068",
        "address": "5128 N ROXBORO RD",
        "zip_code": 27712,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "COOK OUT DURHAM ROX",
        "phone_number": "(866) 547-0011",
        "address": "4245 N ROXBORO ROAD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BENNETT POINTE GRILL",
        "phone_number": "(919) 382-9431",
        "address": "4625 HILLSBOROUGH RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "PIPER'S DELI",
        "phone_number": "(919) 489-2481",
        "address": "3219 OLD CHAPEL HILL RD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "MCDONALDS 27133",
        "phone_number": "(919) 677-2700",
        "address": "5507 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "PAPA JOHNS",
        "phone_number": "(919) 957-0606",
        "address": "3751 HOLLOWAY STREET",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BISCUITVILLE - 103",
        "phone_number": "(919) 286-4373",
        "address": "1129 CLUB BOULEVARD",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "SHIKI SUSHI20",
        "phone_number": "(919) 484-4108",
        "address": "207HWY 54 W",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "KING'S DAUGHTERS INN KITCHEN",
        "phone_number": "(919) 474-9922",
        "address": "204 N. BUCHANNAN BLVD",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "BISCUITVILLE - 149",
        "phone_number": "(919) 220-1090",
        "address": "3203 N. ROXBORO ROAD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "Italian PIZZERIA SANDWICH",
        "phone_number": "(984) 219-6110",
        "address": "3405 SUITE A HILLSBOROUGH ROAD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "HARRIS TEETER 172 STARBUCKS",
        "phone_number": "(333) 333-3333",
        "address": "1817 MARTIN LUTHER KING JR BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "Italian PIZZERIA",
        "phone_number": "(919) 471-0664",
        "address": "3823 GUESS RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "DOMINO'S PIZZA",
        "phone_number": "(919) 288-0303",
        "address": "1601 HWY. 54",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "NEO CHINA",
        "phone_number": "(919) 489-2828",
        "address": "4015 UNIVERSITY DRIVE",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "IBM CAFETERIA  500",
        "phone_number": "(919) 490-2964",
        "address": "4205 MIAMI BLVD",
        "zip_code": 27709,
        "city": "RTP",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "PAPA JOHN'S #639",
        "phone_number": "(919) 682-7272",
        "address": "811 BROAD ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CRACKER BARREL  345",
        "phone_number": "(919) 309-2888",
        "address": "3706 HILLSBOROUGH RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "COOK OUT",
        "phone_number": "(336) 880-3233",
        "address": "2103 ALLENDOWN DRIVE",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TAQUERIA LA FIESTA",
        "phone_number": "(321) 355-9888",
        "address": "1002 E GEER STREET",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CHINA BUFFET",
        "phone_number": "(919) 403-7878",
        "address": "3720 MAYFAIR ST",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "CHINA KING",
        "phone_number": "(919) 382-8000",
        "address": "1821 HILLANDALE RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CILANTRO MEDITERREAN GRILL & PIZZA",
        "phone_number": "(919) 472-2424",
        "address": "5400 S MIAMI BLVD SUITE 102",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "WIMPY'S GRILL",
        "phone_number": "",
        "address": "617 HICKS STREET",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "KFC/TACO BELL",
        "phone_number": "",
        "address": "1804 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "AMANTE PIZZA",
        "phone_number": "(919) 572-2345",
        "address": "3825 S ROXBORO ST",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "I LOVE NY PIZZA",
        "phone_number": "(919) 401-4224",
        "address": "5428 NEW HOPE COMMONS",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "MT FUJI SUSHI AND BAR",
        "phone_number": "(919) 680-4968",
        "address": "905 W MAIN ST SUITE 21B",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "BLU SEAFOOD AND BAR",
        "phone_number": "(919) 286-9777",
        "address": "2002 HILLSBOROUGH RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "PAPA JOHN  PIZZA  1626",
        "phone_number": "(919) 620-7575",
        "address": "3600 N DUKE STREET",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "WAFFLE HOUSE 844",
        "phone_number": "(919) 484-7337",
        "address": "112 E HWY. 54",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "MARDI GRAS SNACK BAR (THE)",
        "phone_number": "(919) 489-2669",
        "address": "6118 FARRINGTON RD",
        "zip_code": 27517,
        "city": "CHAPEL HILL",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BACKYARD BARBQUE PITT",
        "phone_number": "(919) 544-9911",
        "address": "5122 NC HWY 55",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TAQUERIA EVA Y GABY",
        "phone_number": "(919) 680-4282",
        "address": "401 E LAKEWOOD AVE",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SALSABANERO FRESH MEXICAN GRILL",
        "phone_number": "(919) 744-0826",
        "address": "821 N MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "COOK OUT MIAMI BLVD  21",
        "phone_number": "(866) 547-0011",
        "address": "1540 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "GUGLHUPF CAFE",
        "phone_number": "(919) 401-2600",
        "address": "2706 CHAPEL HILL BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "Italian PIZZERIA",
        "phone_number": "(919) 220-1386",
        "address": "3500 N ROXBORO ROAD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TOMO JAPAN",
        "phone_number": "(336) 260-0197",
        "address": "1058 W CLUB BLVE SPACE 560",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY  39636",
        "phone_number": "(919) 991-1800",
        "address": "5400 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 220-5171",
        "address": "2120 AVONDALE DRIVE",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY 36194",
        "phone_number": "(919) 680-0238",
        "address": "1525 GLENN SCHOOL ROAD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CHELSEA CAFE",
        "phone_number": "(919) 474-8647",
        "address": "1007 SLATER ROAD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "SYMPATHY FOR THE DELI DC #84",
        "phone_number": "(919) 360-6369",
        "address": "1101 W CHAPEL HILL ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TACO BELL",
        "phone_number": "(919) 237-3298",
        "address": "6910 FAYETTEVILLE ROAD STE2310",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "LINA'S CAFE",
        "phone_number": "(919) 419-1896",
        "address": "5400 S. MIAMI BLVD. #136",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "TACO BELL",
        "phone_number": "(919) 544-7954",
        "address": "2101 E HWY 54",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "PIZZA HUT",
        "phone_number": "(919) 598-0300",
        "address": "2105 SHERRON RD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BARNES AND NOBLE   #2631",
        "phone_number": "(919) 489-3012",
        "address": "5400 NEW HOPE COMMONS DRIVE",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TACOS CALY MFU #2",
        "phone_number": "(919) 697-0904",
        "address": "CHINO LATINO 2900 HOLLOWAY ST.",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "OVAL PARK GRILLE",
        "phone_number": "(919) 608-9577",
        "address": "1116 BROAD ST SUITE 100",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TOBACCO ROAD SPORTS CAFE",
        "phone_number": "(919) 937-9909",
        "address": "280 S MANGUM ST SUITE 100",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "NEW CHINA",
        "phone_number": "(919) 403-1889",
        "address": "6118 FARRINGTON RD",
        "zip_code": 27514,
        "city": "CHAPEL HILL",
        "cuisine": "Asian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "INDIA GATE",
        "phone_number": "(919) 248-9333",
        "address": "2223 E NC 54 SUITE Q",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Indian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "ROY'S KOUNTRY KITCHEN",
        "phone_number": "(919) 682-0939",
        "address": "2514 FAYETTEVILLE STREET",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SALT BOX",
        "phone_number": "(919) 908-8970",
        "address": "608 N MANGUM ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "NOSH @ JO RAE CAFE",
        "phone_number": "(919) 613-1750",
        "address": "8 SEARLE CENTER DR",
        "zip_code": 27710,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "SMASHBURGER",
        "phone_number": "(919) 237-1070",
        "address": "2608 ERWIN ROAD SUITE 116",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "PUPUSERIA TAQUERIA AMIGOS",
        "phone_number": "(919) 723-0242",
        "address": "2104 ANGIER AVE JOE’S COMMISSARY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BAR VIRGILE",
        "phone_number": "(919) 973-3000",
        "address": "105 S MANGUM STRRET SUITE 100",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "THE DOG HOUSE",
        "phone_number": "(919) 314-7661",
        "address": "3521 HILLSBOROUGH RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "SALADELIA",
        "phone_number": "(919) 489-5776",
        "address": "4201 UNIVERSITY DRIVE",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TACO EXPRESS",
        "phone_number": "(917) 676-5774",
        "address": "315 FOUSHEE ST",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "JOHN WAYNE'S CATERING",
        "phone_number": "(919) 346-7010",
        "address": "1101 W CHAPEL HILL ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BOTTLE 501",
        "phone_number": "(919) 402-1501",
        "address": "3219 WATKINS ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "STARBUCKS COFFEE CO",
        "phone_number": "(919) 886-0837",
        "address": "4010 CHAPEL HILL BLVD SUITE 100",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "JERSEY MIKE'S SUBS",
        "phone_number": "(919) 908-7641",
        "address": "6118 FARRINGTON ROAD SUITE C",
        "zip_code": 27517,
        "city": "CHAPEL HILL",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "GUASACA AREPA AND SALSA GRILL",
        "phone_number": "(919) 294-8939",
        "address": "2200 WEST MAIN STREET SUITE A100",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "STARBUCKS COFFEE 9361",
        "phone_number": "(919) 544-4132",
        "address": "6813 FAYETTEVILLE RD",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "RED ROBIN GOURMET BURGERS",
        "phone_number": "(919) 419-4980",
        "address": "5313 NEW HOPE COMMONS DR.",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "P F CHANG S CHINA BISTRO",
        "phone_number": "(919) 294-3131",
        "address": "6801 FAYETTEVILLE ROAD",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 682-5232",
        "address": "401 H LAKEWOOD AVE",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "JIMMY JOHN'S 991",
        "phone_number": "",
        "address": "5410 PAGE ROAD SUITE 5",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "IHOP",
        "phone_number": "(919) 477-8830",
        "address": "1821 NORTH POINTE DR",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 544-6808",
        "address": "4830 HWY 55",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "DAME'S CHICKEN & WAFFLES",
        "phone_number": "(919) 682-9235",
        "address": "317 W. MAIN",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "SALADELIA AT ATC",
        "phone_number": "(919) 687-4600",
        "address": "406 BLACKWELL STREET",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "NEO JAPAN",
        "phone_number": "(919) 682-4197",
        "address": "4104 SURLES COURT SUITE 4",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CHINA WOK",
        "phone_number": "(919) 544-0003",
        "address": "3825 S ROXBORO ST",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "DUNKIN DONUTS BASKIN ROBBINS",
        "phone_number": "(919) 309-0000",
        "address": "2608 ERWIN RD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "TAQUERIA LA ESPERANZA DC #2",
        "phone_number": "(919) 949-0920",
        "address": "1028 HOLLOWAY ST.",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "DULCE CAFE & ICE CREAM",
        "phone_number": "(919) 484-7337",
        "address": "5826 FAYETTEVILLE RD. #106",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "NEO JAPAN",
        "phone_number": "(919) 490-0120",
        "address": "1125 WEST HWY. 54 SUITE 401",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TAQUERIA DON FILY TRUCK",
        "phone_number": "(919) 491-2732",
        "address": "2003 HOLLOWAY ST RESTAURANTE (DON FILY)",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "RICKY'S NY PIZZA",
        "phone_number": "(919) 477-2800",
        "address": "5279 N. ROXBORO ROAD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "SAKE BOMB",
        "phone_number": "(919) 401-4488",
        "address": "4215 UNIVERSITY DR",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TACOS CARRBORO",
        "phone_number": "(919) 370-6159",
        "address": "2721 GUESS RD #B  COSTA AZUL",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TACO'S MEXICAN JORGITO JR DC #98",
        "phone_number": "(919) 358-8212",
        "address": "2100 ANGIER AVE JOE’S DINER",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "RANDY'S PIZZA EXPRESS",
        "phone_number": "(919) 286-3397",
        "address": "1058 W CLUB BLVD",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BURGER KING #6882",
        "phone_number": "(919) 471-5520",
        "address": "3414 N ROXBORO ST",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CHEERZ DELI",
        "phone_number": "(650) 678-9249",
        "address": "2945 S MIAMI BLVD SUITE 106",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "BOJANGLES #9",
        "phone_number": "(919) 489-5942",
        "address": "4150 GARRETT ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "VILLAGE BOWL",
        "phone_number": "(919) 682-9145",
        "address": "330 HARDEE STREET",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BLUE CORN CAFE",
        "phone_number": "(919) 286-9600",
        "address": "716 B NINTH ST",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "SOUTH SIDE COFFEE SHOP",
        "phone_number": "",
        "address": "DUKE SOUTH FOOD COURT",
        "zip_code": 27710,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "WAFFLE HOUSE",
        "phone_number": "(919) 544-4204",
        "address": "4203 NC HWY 55",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Breakfast",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "TACOS DON FILY (TRAILER)",
        "phone_number": "(919) 491-2732",
        "address": "2003 HOLLOWAY ST RESTAURANTE (DON FILY)",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "RESTAURANTE Y TAQUERIA DON FILY",
        "phone_number": "(919) 408-6487",
        "address": "2003 HOLLOWAY ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "KFC TACO BELL",
        "phone_number": "(919) 530-8119",
        "address": "1110 WEST HWY 54",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TACOS LAURITA DC #83",
        "phone_number": "(919) 672-1599",
        "address": "2104 ANGIER AVE JOE’S COMMISSARY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "MCDONALDS #5625",
        "phone_number": "",
        "address": "4717 NC HWY 55",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "THE PATRON MEXICAN GRILL",
        "phone_number": "(919) 937-9971",
        "address": "3438 HILLSBOROUGH ROAD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "JUMBO CHINA",
        "phone_number": "(919) 489-7474",
        "address": "1839 MARTIN LUTHER KING JR BLV",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "BAGUETTABOUTIT FOOD TRUCK",
        "phone_number": "(919) 521-2111",
        "address": "2945 122 S MIAMI BLVD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "GRIFOL'S CAFETERIA SODEXO",
        "phone_number": "(919) 316-2412",
        "address": "79 TW ALEXANDER DRIVE BUILDING 4101",
        "zip_code": 27709,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "THE DOG HOUSE",
        "phone_number": "(919) 286-9200",
        "address": "2009 GUESS RD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "CALIFORNIA PIZZA KITCHEN",
        "phone_number": "(919) 361-4200",
        "address": "6910 FAYETTEVILLE ROAD",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "BOJANGLES #32",
        "phone_number": "(919) 941-5620",
        "address": "5425 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "LOCAL 22 KITCHEN AND BAR",
        "phone_number": "(919) 286-9755",
        "address": "2200 W MAIN STREET SUITE B 130",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "FIREHOUSE SUBS # 325",
        "phone_number": "(919) 479-9995",
        "address": "2608 ERWIN ROAD SUITE 128",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "LAS DELICIAS II",
        "phone_number": "(919) 324-4417",
        "address": "2104 ANGIER AVE JOE’S COMMISSARY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "MCDONALDS # 32344",
        "phone_number": "(919) 383-8828",
        "address": "3533 HILLSBOROUGH ROAD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "ONLY BURGER",
        "phone_number": "(919) 237-2431",
        "address": "359 BLACKWELL STREET",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "PIZZA HUT DELIVERY",
        "phone_number": "(919) 490-9099",
        "address": "4201-103 UNIVERSITY DRIVE",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "DALE'S INDIAN CUISINE",
        "phone_number": "(919) 286-1760",
        "address": "811 NINTH ST",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Indian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "KROGER #374 DELI",
        "phone_number": "(919) 683-3022",
        "address": "3420 WATKINS ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "JASON S DELI",
        "phone_number": "(919) 474-9900",
        "address": "5408 NEW HOPE COMMONS DR",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "VILLA PIZZA",
        "phone_number": "(919) 361-0434",
        "address": "6910 FAYETTEVILLE ROAD",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TATER BREAD CAFE",
        "phone_number": "(919) 730-5048",
        "address": "1108 MORNING GLORY",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "THAI BOX ZING",
        "phone_number": "(919) 909-4202",
        "address": "2104 ANGIER AVE JOE’S COMMISSARY",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "J & J FISH & CHICKEN",
        "phone_number": "(919) 598-6000",
        "address": "1403 S MIAMI BLVD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "TOOTIE'S GRILL AND CAFE",
        "phone_number": "(919) 641-2177",
        "address": "2108 ANGIER AVE",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "PANERA BREAD BAKERY CAFE #1749",
        "phone_number": "(314) 984-2634",
        "address": "737 NINTH STREET SUITE 200",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "ENZO'S PIZZA COMPANY",
        "phone_number": "(919) 309-8421",
        "address": "2608 ERWIN ROAD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "DUKE UNIVERSITY, WEST UNION AU BON PAIN",
        "phone_number": "(919) 660-3900",
        "address": "406 CHAPEL DR",
        "zip_code": 27708,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "COSTA AZUL RESTAURANT AND BAR",
        "phone_number": "(919) 620-0971",
        "address": "3218 GUESS ROAD",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "THE BAGEL BAR",
        "phone_number": "(919) 294-6661",
        "address": "104 CITY HALL PLAZA SUITE 101",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "CITY BARBEQUE",
        "phone_number": "(919) 237-9509",
        "address": "208 W NC HWY 54",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "DUKE WEST UNION CAFE SALADELIA",
        "phone_number": "(919) 660-3900",
        "address": "406 CHAPEL DR",
        "zip_code": 27708,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "DOMINOS PIZZA  512",
        "phone_number": "(919) 477-1966",
        "address": "4502 N. ROXBORO ROAD",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "ROLLINGVIEW MARINA SNACK BAR",
        "phone_number": "(919) 489-2481",
        "address": "3940 FALLS LAKE ROAD",
        "zip_code": 27703,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "TACO BELL",
        "phone_number": "(919) 471-2911",
        "address": "3821 N DUKE ST",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "PEONY ASIAN BISTRO",
        "phone_number": "(919) 419-8800",
        "address": "3515 WITHERSPOON BLVD. SUITE 108",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "Asian",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "AZTECA GRILL",
        "phone_number": "(919) 403-2527",
        "address": "1929 CHAPEL HILL RD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "CINCO DE MAYO MEXICAN RESTAURANT",
        "phone_number": "",
        "address": "4818 NC HWY 55",
        "zip_code": 27713,
        "city": "DURHAM",
        "cuisine": "Mexican",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "COOK OUT",
        "phone_number": "(919) 864-8634",
        "address": "3119 SHANNON ROAD",
        "zip_code": 27707,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "STARBUCKS COFFEE 23693",
        "phone_number": "(919) 451-7305",
        "address": "4201 N ROXBORO ST",
        "zip_code": 27704,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": true,
        "is_breakfast": true
      },
      {
        "name": "SUBWAY",
        "phone_number": "(919) 286-8336",
        "address": "2301 ERWIN ROAD",
        "zip_code": 27710,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": false,
        "is_breakfast": false
      },
      {
        "name": "C AND H CAFETERIA",
        "phone_number": "(919) 286-7303",
        "address": "1720 GUESS RD",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "Coffee",
        "is_fast_food": false,
        "is_breakfast": true
      },
      {
        "name": "SALT BOX SEAFOOD JOINT",
        "phone_number": "(919) 908-8970",
        "address": "608 N MANGUM ST",
        "zip_code": 27701,
        "city": "DURHAM",
        "cuisine": "American",
        "is_fast_food": true,
        "is_breakfast": false
      },
      {
        "name": "DOMINO'S",
        "phone_number": "(919) 383-8399",
        "address": "1201 COLE MILL RD.",
        "zip_code": 27705,
        "city": "DURHAM",
        "cuisine": "Italian",
        "is_fast_food": true,
        "is_breakfast": false
      }
    ]
    f: filter_model = {
      city: 'rtp',
      cuisine: 'all'
    }
    liked: number[] = [];
    disliked: number[] = [];
    indifferent: number[] = [];
    seen: number[] = [];
    id: number = 0;
    filtered_data: number[] = [];
    resultIndex: number = 0;

    ame_count = 0;
    cof_count = 0;
    asi_count = 0;
    mex_count = 0;
    ita_count = 0;
    bre_count = 0;
    ind_count = 0;
    
    constructor(private router: Router){
      console.log('getting started');
      for(let i = 0; i < this.myData.length; i++){
        this.filtered_data.push(i);} 
    }

    public mainPage() {
      this.router.navigate(['']);
  }

  public filterS(i_city: string, i_cuisine: string){
    this.f.city = i_city;
    this.f.cuisine = i_cuisine;
    console.log(this.f.city);
    console.log(this.f.cuisine);
    this.router.navigate(['/restaurant/swipe']);
  }

    public menuSelectPage() {
      this.router.navigate(['/restaurant/menu-select']);
    }

    public likedPage() {
      this.router.navigate(['/restaurant/liked']);
  }

    public reviewPage() {
      this.router.navigate(['/restaurant/review']);
  }

    public likeRestaurant(index: number){
      //if statement for liked restaurants
      this.isSeen();
      this.liked.push(index);
      console.log(index);
    }

    public getLikedRestaurants(): number[]{
      return this.liked;
    }

    public dislikeRestaurant(index: number){
      //if statement for liked restaurants
      this.isSeen();
      this.disliked.push(index);
      console.log(index);
    }

    public getDisLikedRestaurants(): number[]{
      return this.disliked;
    }

    public indifferentRestaurant(index: number){
      //if statement for liked restaurants
      this.isSeen();
      this.indifferent.push(index);
      console.log(index);
    }

    public getindifferentRestaurant(): number[]{
      return this.indifferent;
    }

    public filterData(): void{
      this.filtered_data = [];
      let i = 0;
      while(i < this.myData.length){
        if(this.f.city == 'rtp' && this.f.cuisine == 'all'){
          this.filtered_data.push(i);
        }
        else if(this.f.city == 'rtp' && this.myData[i].cuisine == this.f.cuisine){
          this.filtered_data.push(i);
        }
        else if(this.myData[i].city == this.f.city && this.f.cuisine == 'all'){
          this.filtered_data.push(i);
        }
        else if(this.myData[i].city == this.f.city && this.myData[i].cuisine == this.f.cuisine){
          this.filtered_data.push(i);
        }
        i++; //looping through myData
      }
      // console.log(this.filtered_data);
      
      if(i >= 1 && this.filtered_data.length == 0){
        window.alert('There is no ' + this.f.cuisine + ' eatery in ' + this.f.city + '. Please make another selection.');
        console.log('no such filter')
        this.resetFilter();
      }
    }

    public result(index: number): void {
      this.resultIndex = index;
      this.router.navigate(['/restaurant/result']);
    }

    public getResult(): number {
      return this.resultIndex;
    }

      public resetFilter(){
        console.log('reset filter');
        // this.f.city = 'rtp';
        // this.f.cuisine = 'all';
        console.log(this.f.city);
        console.log(this.f.cuisine);
        this.filtered_data = [];
        this.liked = [];
        this.disliked = [];
        this.indifferent = [];
        for(let i = 0; i < this.myData.length; i++){
          this.filtered_data.push(i);} 
      }

    public getRestaurants(): {}[]{
      return this.myData;
    }

    public isSeen(): void{
      this.id += 1;
    }

    public roulette(){
      return this.liked[Math.floor(Math.random() * this.liked.length)];
}
    public randomGenerator(){
      let result = this.myData[this.roulette()].name;
      console.log(result);
      return result;
    }
}