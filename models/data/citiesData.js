import "../../config/database.js";
import City from "../City.js";

let cities = [
    {
        name: "Reykjavik",
        photo: "https://images.unsplash.com/photo-1504284402647-db8d7eb2a5fc",
        country: "Iceland",
        continent: "Europe",
        description: "Iceland's capital, famous for its winter landscapes and Northern Lights.",
        currency: ["Icelandic Króna"],
        language: "Icelandic",
        timezone: "UTC+0",
        landmarks: [
            { name: "Hallgrímskirkja", description: "A striking modern cathedral.", photo: "https://images.unsplash.com/photo-1431069767777-c37892aa0a07" },
            { name: "Harpa Concert Hall", description: "A futuristic glass concert hall.", photo: "https://images.unsplash.com/photo-1588409716791-1a6cf4225117" }
        ]
    },
    {
        name: "Akureyri",
        photo: "https://images.unsplash.com/photo-1512403754473-27835cd59382",
        country: "Iceland",
        continent: "Europe",
        description: "The 'Capital of the North' of Iceland, known for ski resorts and snowy winters.",
        currency: ["Icelandic Króna"],
        language: "Icelandic",
        timezone: "UTC+0",
        landmarks: [
            { name: "Akureyri Church", description: "A Lutheran church with stunning views.", photo: "https://images.unsplash.com/photo-1593016605825-8a401fae926f" },
            { name: "Hlíðarfjall", description: "A ski resort near Akureyri.", photo: "https://images.unsplash.com/photo-1611774119019-461b5dbd3ae8" }
        ]
    },
    {
        name: "Dublin",
        photo: "https://images.unsplash.com/photo-1618567063864-a4d2e32e795b",
        country: "Ireland",
        continent: "Europe",
        description: "The vibrant capital of Ireland, known for its rich history and pubs.",
        currency: ["Euro"],
        language: "English, Irish",
        timezone: "UTC+0",
        landmarks: [
            { name: "Trinity College Library", description: "Home to the famous Book of Kells.", photo: "https://images.unsplash.com/photo-1603446079972-8c0add4c5b3e" },
            { name: "Guinness Storehouse", description: "A must-visit brewery experience.", photo: "https://images.unsplash.com/photo-1666282990922-93366e94be58" }
        ]
    },
    {
        name: "Belfast",
        photo: "https://images.unsplash.com/photo-1549918864-48ac978761a4",
        country: "Ireland",
        continent: "Europe",
        description: "Capital of Northern Ireland, famous for the Titanic Museum.",
        currency: ["Pound Sterling"],
        language: "English, Irish",
        timezone: "UTC+0",
        landmarks: [
            { name: "Titanic Belfast", description: "A museum dedicated to the Titanic.", photo: "https://images.unsplash.com/photo-1569254781497-aef46e6a542c" },
            { name: "Giant's Causeway", description: "A natural wonder of hexagonal basalt columns.", photo: "https://images.unsplash.com/photo-1589489873423-d1745278a8f3" }
        ]
    },
    {
        name: "Oslo",
        photo: "https://images.unsplash.com/photo-1518125801-af71404e6e3a",
        country: "Norway",
        continent: "Europe",
        description: "The capital of Norway, famous for fjords and Viking history.",
        currency: ["Norwegian Krone"],
        language: "Norwegian",
        timezone: "UTC+1",
        landmarks: [
            { name: "Oslo Opera House", description: "A modern architectural masterpiece.", photo: "https://images.unsplash.com/photo-1620538261798-6d3d74ca6bb9" },
            { name: "Viking Ship Museum", description: "Home to well-preserved Viking ships.", photo: "https://images.unsplash.com/photo-1598874399771-3c0bb4507cb7" }
        ]
    },
    {
        name: "Bergen",
        photo: "https://images.unsplash.com/photo-1566086541654-15f04a638abc",
        country: "Norway",
        continent: "Europe",
        description: "A scenic city known for colorful houses and fjords.",
        currency: ["Norwegian Krone"],
        language: "Norwegian",
        timezone: "UTC+1",
        landmarks: [
            { name: "Bryggen Wharf", description: "A UNESCO Heritage Site with historic wooden houses.", photo: "https://images.unsplash.com/photo-1580412254167-8218a5b2f621" },
            { name: "Mount Fløyen", description: "A mountain with breathtaking city views.", photo: "https://images.unsplash.com/photo-1560704196-86533e79c2d4" }
        ]
    },
    {
        name: "Moscow",
        photo: "https://images.unsplash.com/photo-1513326738677-b964603b136d",
        country: "Russia",
        continent: "Europe",
        description: "The capital of Russia, famous for its historic architecture and cold winters.",
        currency: ["Russian Ruble"],
        language: "Russian",
        timezone: "UTC+3",
        landmarks: [
            { name: "Red Square", description: "The most famous landmark in Russia.", photo: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d" },
            { name: "Saint Basil's Cathedral", description: "A colorful architectural masterpiece.", photo: "https://images.unsplash.com/photo-1520106212299-d99c443e4568" }
        ]
    },
    {
        name: "Saint Petersburg",
        photo: "https://images.unsplash.com/photo-1556610961-2fecc5927173",
        country: "Russia",
        continent: "Europe",
        description: "A cultural hub known for its beautiful canals and palaces.",
        currency: ["Russian Ruble"],
        language: "Russian",
        timezone: "UTC+3",
        landmarks: [
            { name: "Hermitage Museum", description: "One of the largest and oldest museums in the world.", photo: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0" },
            { name: "Church of the Savior on Spilled Blood", description: "A stunning Russian Orthodox church.", photo: "https://images.unsplash.com/photo-1556610373-a9507b82ad8a" }
        ]
    },
    {
        name: "Stockholm",
        photo: "https://images.unsplash.com/photo-1588493859025-668244fed6e8",
        country: "Sweden",
        continent: "Europe",
        description: "The capital of Sweden, known for its beautiful archipelago and historic old town.",
        currency: ["Swedish Krona"],
        language: "Swedish",
        timezone: "UTC+1",
        landmarks: [
            { name: "Gamla Stan", description: "The old town with medieval streets.", photo: "https://images.unsplash.com/photo-1519334324938-6b56e4c16482" },
            { name: "Vasa Museum", description: "A well-preserved 17th-century warship.", photo: "https://images.unsplash.com/photo-1600185894548-5140bfef9f5d" }
        ]
    },
    {
        name: "Copenhagen",
        photo: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc",
        country: "Denmark",
        continent: "Europe",
        description: "A vibrant city known for its bike culture and canals.",
        currency: ["Danish Krone"],
        language: "Danish",
        timezone: "UTC+1",
        landmarks: [
            { name: "Nyhavn", description: "A colorful waterfront district.", photo: "https://images.unsplash.com/photo-1552560880-2482cef14240" },
            { name: "Little Mermaid Statue", description: "A tribute to Hans Christian Andersen.", photo: "https://images.unsplash.com/photo-1556670100-7a3e04ec9d26" }
        ]
    },
    {
        name: "Helsinki",
        photo: "https://images.unsplash.com/photo-1550649286-2369bf52b18c",
        country: "Finland",
        continent: "Europe",
        description: "A coastal capital known for its modern design and saunas.",
        currency: ["Euro"],
        language: "Finnish, Swedish",
        timezone: "UTC+2",
        landmarks: [
            { name: "Helsinki Cathedral", description: "An iconic white church in the city center.", photo: "https://images.unsplash.com/photo-1559146453-7f26d88863fa" },
            { name: "Suomenlinna", description: "A historic sea fortress.", photo: "https://images.unsplash.com/photo-1565027324823-607e99d6d4f7" }
        ]
    },
    {
        name: "Warsaw",
        photo: "https://images.unsplash.com/photo-1519197924294-4ba991a11128",
        country: "Poland",
        continent: "Europe",
        description: "A city with a rich history and a beautifully restored Old Town.",
        currency: ["Polish Zloty"],
        language: "Polish",
        timezone: "UTC+1",
        landmarks: [
            { name: "Royal Castle", description: "A reconstructed castle in the heart of Warsaw.", photo: "https://images.unsplash.com/photo-1607427293702-036933bbf746" },
            { name: "Wilanów Palace", description: "A baroque palace known as the Polish Versailles.", photo: "https://images.unsplash.com/photo-1611745754518-27b3f54f9d5e" }
        ]
    },
    {
        name: "Prague",
        photo: "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef",
        country: "Czech Republic",
        continent: "Europe",
        description: "The 'City of a Hundred Spires,' known for its medieval architecture.",
        currency: ["Czech Koruna"],
        language: "Czech",
        timezone: "UTC+1",
        landmarks: [
            { name: "Charles Bridge", description: "A historic stone bridge.", photo: "https://images.unsplash.com/photo-1541849546-216549ae216d" },
            { name: "Prague Castle", description: "The largest ancient castle in the world.", photo: "https://images.unsplash.com/photo-1558436599-31f5c7a383b4" }
        ]
    },
    {
        name: "Budapest",
        photo: "https://images.unsplash.com/photo-1551867633-194f125bddfa",
        country: "Hungary",
        continent: "Europe",
        description: "A city split by the Danube River, known for its thermal baths.",
        currency: ["Hungarian Forint"],
        language: "Hungarian",
        timezone: "UTC+1",
        landmarks: [
            { name: "Buda Castle", description: "A historic castle complex.", photo: "https://images.unsplash.com/photo-1518723276788-bcdb1ec63c61" },
            { name: "Parliament Building", description: "A stunning Gothic Revival building.", photo: "https://images.unsplash.com/photo-1585295085328-88dc4a5cbee9" }
        ]
    },
    {
        name: "Vienna",
        photo: "https://images.unsplash.com/photo-1516550893885-985c994c8609",
        country: "Austria",
        continent: "Europe",
        description: "A cultural capital known for its classical music and coffeehouses.",
        currency: ["Euro"],
        language: "German",
        timezone: "UTC+1",
        landmarks: [
            { name: "Schönbrunn Palace", description: "A baroque palace with vast gardens.", photo: "https://images.unsplash.com/photo-1585243669409-a943eb667fb7" },
            { name: "St. Stephen's Cathedral", description: "A Gothic cathedral in the city center.", photo: "https://images.unsplash.com/photo-1599828500307-d779bc3f46f0" }
        ]
    },
    {
        name: "Athens",
        photo: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb",
        country: "Greece",
        continent: "Europe",
        description: "The cradle of Western civilization, known for ancient ruins.",
        currency: ["Euro"],
        language: "Greek",
        timezone: "UTC+2",
        landmarks: [
            { name: "Acropolis", description: "An ancient citadel with the Parthenon.", photo: "https://images.unsplash.com/photo-1555993539-1732b0258235" },
            { name: "Temple of Olympian Zeus", description: "A colossal ruined temple.", photo: "https://images.unsplash.com/photo-1621265845825-b99f7af58f39" }
        ]
    },
    {
        name: "Lisbon",
        photo: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a",
        country: "Portugal",
        continent: "Europe",
        description: "A hilly coastal capital with historic tram rides and great seafood.",
        currency: ["Euro"],
        language: "Portuguese",
        timezone: "UTC+0",
        landmarks: [
            { name: "Belem Tower", description: "A medieval fortress by the sea.", photo: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b" },
            { name: "Jerónimos Monastery", description: "A stunning Manueline-style monastery.", photo: "https://images.unsplash.com/photo-1580323958008-86232de4ea6a" }
        ]
    },
    {
        name: "Madrid",
        photo: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
        country: "Spain",
        continent: "Europe",
        description: "Spain's capital, known for its art, food, and vibrant culture.",
        currency: ["Euro"],
        language: "Spanish",
        timezone: "UTC+1",
        landmarks: [
            { name: "Prado Museum", description: "A world-class art museum.", photo: "https://images.unsplash.com/photo-1628771900900-f14bf5a2dc4a" },
            { name: "Royal Palace", description: "The official residence of the Spanish royal family.", photo: "https://images.unsplash.com/photo-1578305698944-874fa44d04c9" }
        ]
    },
    {
        name: "Rome",
        photo: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
        country: "Italy",
        continent: "Europe",
        description: "The Eternal City, known for its ancient ruins and Vatican City.",
        currency: ["Euro"],
        language: "Italian",
        timezone: "UTC+1",
        landmarks: [
            { name: "Colosseum", description: "An iconic Roman amphitheater.", photo: "https://images.unsplash.com/photo-1552419272-1e2e9eff2fb7" },
            { name: "Trevi Fountain", description: "A stunning Baroque fountain.", photo: "https://images.unsplash.com/photo-1525874684015-58379d421a52" }
        ]
    },
    {
        name: "Paris",
        photo: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        country: "France",
        continent: "Europe",
        description: "The city of love, known for its art, fashion, and architecture.",
        currency: ["Euro"],
        language: "French",
        timezone: "UTC+1",
        landmarks: [
            { name: "Eiffel Tower", description: "A symbol of Paris and France.", photo: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e" },
            { name: "Louvre Museum", description: "Home to the Mona Lisa.", photo: "https://images.unsplash.com/photo-1544967082-d9d25d867d66" }
        ]
    }
];
/* let cities = [
    {
        name: "Reykjavik",
        photo: "https://example.com/reykjavik.jpg",
        country: "Iceland",
        continent: "Europe",
        description: "Iceland's capital, famous for its winter landscapes and Northern Lights.",
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
            { name: "Giant's Causeway", description: "A natural wonder of hexagonal basalt columns.", photo: "https://example.com/giants-causeway.jpg" }
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
            { name: "Saint Basil's Cathedral", description: "A colorful architectural masterpiece.", photo: "https://example.com/saint-basil.jpg" }
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
    },
    {
        name: "Stockholm",
        photo: "https://example.com/stockholm.jpg",
        country: "Sweden",
        continent: "Europe",
        description: "The capital of Sweden, known for its beautiful archipelago and historic old town.",
        currency: ["Swedish Krona"],
        language: "Swedish",
        timezone: "UTC+1",
        landmarks: [
            { name: "Gamla Stan", description: "The old town with medieval streets.", photo: "https://example.com/gamlastan.jpg" },
            { name: "Vasa Museum", description: "A well-preserved 17th-century warship.", photo: "https://example.com/vasamuseum.jpg" }
        ]
    },
    {
        name: "Copenhagen",
        photo: "https://example.com/copenhagen.jpg",
        country: "Denmark",
        continent: "Europe",
        description: "A vibrant city known for its bike culture and canals.",
        currency: ["Danish Krone"],
        language: "Danish",
        timezone: "UTC+1",
        landmarks: [
            { name: "Nyhavn", description: "A colorful waterfront district.", photo: "https://example.com/nyhavn.jpg" },
            { name: "Little Mermaid Statue", description: "A tribute to Hans Christian Andersen.", photo: "https://example.com/littlemermaid.jpg" }
        ]
    },
    {
        name: "Helsinki",
        photo: "https://example.com/helsinki.jpg",
        country: "Finland",
        continent: "Europe",
        description: "A coastal capital known for its modern design and saunas.",
        currency: ["Euro"],
        language: "Finnish, Swedish",
        timezone: "UTC+2",
        landmarks: [
            { name: "Helsinki Cathedral", description: "An iconic white church in the city center.", photo: "https://example.com/helsinki-cathedral.jpg" },
            { name: "Suomenlinna", description: "A historic sea fortress.", photo: "https://example.com/suomenlinna.jpg" }
        ]
    },
    {
        name: "Warsaw",
        photo: "https://example.com/warsaw.jpg",
        country: "Poland",
        continent: "Europe",
        description: "A city with a rich history and a beautifully restored Old Town.",
        currency: ["Polish Zloty"],
        language: "Polish",
        timezone: "UTC+1",
        landmarks: [
            { name: "Royal Castle", description: "A reconstructed castle in the heart of Warsaw.", photo: "https://example.com/royalcastle.jpg" },
            { name: "Wilanów Palace", description: "A baroque palace known as the Polish Versailles.", photo: "https://example.com/wilanow.jpg" }
        ]
    },
    {
        name: "Prague",
        photo: "https://example.com/prague.jpg",
        country: "Czech Republic",
        continent: "Europe",
        description: "The 'City of a Hundred Spires,' known for its medieval architecture.",
        currency: ["Czech Koruna"],
        language: "Czech",
        timezone: "UTC+1",
        landmarks: [
            { name: "Charles Bridge", description: "A historic stone bridge.", photo: "https://example.com/charlesbridge.jpg" },
            { name: "Prague Castle", description: "The largest ancient castle in the world.", photo: "https://example.com/praguecastle.jpg" }
        ]
    },
    {
        name: "Budapest",
        photo: "https://example.com/budapest.jpg",
        country: "Hungary",
        continent: "Europe",
        description: "A city split by the Danube River, known for its thermal baths.",
        currency: ["Hungarian Forint"],
        language: "Hungarian",
        timezone: "UTC+1",
        landmarks: [
            { name: "Buda Castle", description: "A historic castle complex.", photo: "https://example.com/budacastle.jpg" },
            { name: "Parliament Building", description: "A stunning Gothic Revival building.", photo: "https://example.com/parliament.jpg" }
        ]
    },
    {
        name: "Vienna",
        photo: "https://example.com/vienna.jpg",
        country: "Austria",
        continent: "Europe",
        description: "A cultural capital known for its classical music and coffeehouses.",
        currency: ["Euro"],
        language: "German",
        timezone: "UTC+1",
        landmarks: [
            { name: "Schönbrunn Palace", description: "A baroque palace with vast gardens.", photo: "https://example.com/schonbrunn.jpg" },
            { name: "St. Stephen's Cathedral", description: "A Gothic cathedral in the city center.", photo: "https://example.com/stephenscathedral.jpg" }
        ]
    },
    {
        name: "Athens",
        photo: "https://example.com/athens.jpg",
        country: "Greece",
        continent: "Europe",
        description: "The cradle of Western civilization, known for ancient ruins.",
        currency: ["Euro"],
        language: "Greek",
        timezone: "UTC+2",
        landmarks: [
            { name: "Acropolis", description: "An ancient citadel with the Parthenon.", photo: "https://example.com/acropolis.jpg" },
            { name: "Temple of Olympian Zeus", description: "A colossal ruined temple.", photo: "https://example.com/zeustemple.jpg" }
        ]
    },
    {
        name: "Lisbon",
        photo: "https://example.com/lisbon.jpg",
        country: "Portugal",
        continent: "Europe",
        description: "A hilly coastal capital with historic tram rides and great seafood.",
        currency: ["Euro"],
        language: "Portuguese",
        timezone: "UTC+0",
        landmarks: [
            { name: "Belem Tower", description: "A medieval fortress by the sea.", photo: "https://example.com/belemtower.jpg" },
            { name: "Jerónimos Monastery", description: "A stunning Manueline-style monastery.", photo: "https://example.com/jeronimos.jpg" }
        ]
    },
    {
        name: "Madrid",
        photo: "https://example.com/madrid.jpg",
        country: "Spain",
        continent: "Europe",
        description: "Spain's capital, known for its art, food, and vibrant culture.",
        currency: ["Euro"],
        language: "Spanish",
        timezone: "UTC+1",
        landmarks: [
            { name: "Prado Museum", description: "A world-class art museum.", photo: "https://example.com/prado.jpg" },
            { name: "Royal Palace", description: "The official residence of the Spanish royal family.", photo: "https://example.com/royalpalace.jpg" }
        ]
    },
    {
        name: "Rome",
        photo: "https://example.com/rome.jpg",
        country: "Italy",
        continent: "Europe",
        description: "The Eternal City, known for its ancient ruins and Vatican City.",
        currency: ["Euro"],
        language: "Italian",
        timezone: "UTC+1",
        landmarks: [
            { name: "Colosseum", description: "An iconic Roman amphitheater.", photo: "https://example.com/colosseum.jpg" },
            { name: "Trevi Fountain", description: "A stunning Baroque fountain.", photo: "https://example.com/trevi.jpg" }
        ]
    },
    {
        name: "Paris",
        photo: "https://example.com/paris.jpg",
        country: "France",
        continent: "Europe",
        description: "The city of love, known for its art, fashion, and architecture.",
        currency: ["Euro"],
        language: "French",
        timezone: "UTC+1",
        landmarks: [
            { name: "Eiffel Tower", description: "A symbol of Paris and France.", photo: "https://example.com/eiffel.jpg" },
            { name: "Louvre Museum", description: "Home to the Mona Lisa.", photo: "https://example.com/louvre.jpg" }
        ]
    }
]; */

City.insertMany(cities);