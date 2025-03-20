import "../../config/database.js";
import City from "../City.js";

let cities = [
    {
        name: "Reykjavik",
        photo: "https://example.com/reykjavik.jpg",
        country: "Iceland",
        continent: "Europe",
        description: "Iceland’s capital, famous for its winter landscapes and Northern Lights.",
        currency: ["Icelandic Króna"],
        language: "Icelandic",
        timezone: "UTC+0",
        landmarks: [
            { name: "Hallgrímskirkja", description: "A striking modern cathedral.", photo: "https://example.com/hallgrimskirkja.jpg" },
            { name: "Harpa Concert Hall", description: "A futuristic glass concert hall.", photo: "https://example.com/harpa.jpg" }
        ]
    },
    {
        name: "Akureyri",
        photo: "https://example.com/akureyri.jpg",
        country: "Iceland",
        continent: "Europe",
        description: "The 'Capital of the North' of Iceland, known for ski resorts and snowy winters.",
        currency: ["Icelandic Króna"],
        language: "Icelandic",
        timezone: "UTC+0",
        landmarks: [
            { name: "Akureyri Church", description: "A Lutheran church with stunning views.", photo: "https://example.com/akureyri-church.jpg" },
            { name: "Hlíðarfjall", description: "A ski resort near Akureyri.", photo: "https://example.com/hlidarfjall.jpg" }
        ]
    },
    {
        name: "Dublin",
        photo: "https://example.com/dublin.jpg",
        country: "Ireland",
        continent: "Europe",
        description: "The vibrant capital of Ireland, known for its rich history and pubs.",
        currency: ["Euro"],
        language: "English, Irish",
        timezone: "UTC+0",
        landmarks: [
            { name: "Trinity College Library", description: "Home to the famous Book of Kells.", photo: "https://example.com/trinity-college.jpg" },
            { name: "Guinness Storehouse", description: "A must-visit brewery experience.", photo: "https://example.com/guinness.jpg" }
        ]
    },
    {
        name: "Belfast",
        photo: "https://example.com/belfast.jpg",
        country: "Ireland",
        continent: "Europe",
        description: "Capital of Northern Ireland, famous for the Titanic Museum.",
        currency: ["Pound Sterling"],
        language: "English, Irish",
        timezone: "UTC+0",
        landmarks: [
            { name: "Titanic Belfast", description: "A museum dedicated to the Titanic.", photo: "https://example.com/titanic.jpg" },
            { name: "Giant’s Causeway", description: "A natural wonder of hexagonal basalt columns.", photo: "https://example.com/giants-causeway.jpg" }
        ]
    },
    {
        name: "Oslo",
        photo: "https://example.com/oslo.jpg",
        country: "Norway",
        continent: "Europe",
        description: "The capital of Norway, famous for fjords and Viking history.",
        currency: ["Norwegian Krone"],
        language: "Norwegian",
        timezone: "UTC+1",
        landmarks: [
            { name: "Oslo Opera House", description: "A modern architectural masterpiece.", photo: "https://example.com/opera.jpg" },
            { name: "Viking Ship Museum", description: "Home to well-preserved Viking ships.", photo: "https://example.com/vikingship.jpg" }
        ]
    },
    {
        name: "Bergen",
        photo: "https://example.com/bergen.jpg",
        country: "Norway",
        continent: "Europe",
        description: "A scenic city known for colorful houses and fjords.",
        currency: ["Norwegian Krone"],
        language: "Norwegian",
        timezone: "UTC+1",
        landmarks: [
            { name: "Bryggen Wharf", description: "A UNESCO Heritage Site with historic wooden houses.", photo: "https://example.com/bryggen.jpg" },
            { name: "Mount Fløyen", description: "A mountain with breathtaking city views.", photo: "https://example.com/floyen.jpg" }
        ]
    },
    {
        name: "Moscow",
        photo: "https://example.com/moscow.jpg",
        country: "Russia",
        continent: "Europe",
        description: "The capital of Russia, famous for its historic architecture and cold winters.",
        currency: ["Russian Ruble"],
        language: "Russian",
        timezone: "UTC+3",
        landmarks: [
            { name: "Red Square", description: "The most famous landmark in Russia.", photo: "https://example.com/red-square.jpg" },
            { name: "Saint Basil’s Cathedral", description: "A colorful architectural masterpiece.", photo: "https://example.com/saint-basil.jpg" }
        ]
    },
    {
        name: "Saint Petersburg",
        photo: "https://example.com/saintpetersburg.jpg",
        country: "Russia",
        continent: "Europe",
        description: "A cultural hub known for its beautiful canals and palaces.",
        currency: ["Russian Ruble"],
        language: "Russian",
        timezone: "UTC+3",
        landmarks: [
            { name: "Hermitage Museum", description: "One of the largest and oldest museums in the world.", photo: "https://example.com/hermitage.jpg" },
            { name: "Church of the Savior on Spilled Blood", description: "A stunning Russian Orthodox church.", photo: "https://example.com/savior-church.jpg" }
        ]
    }
];

City.insertMany(cities);