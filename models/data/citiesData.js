import "../../config/database.js";
import City from "../City.js";

let cities = [
    {
        name: "Reykjavik",
        photo: "https://images.unsplash.com/photo-1596102225269-174b5133907c?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Iceland",
        continent: "Europe",
        description: "Iceland's capital, famous for its winter landscapes and Northern Lights.",
        currency: ["Icelandic Króna"],
        language: "Icelandic",
        timezone: "UTC+0",
        landmarks: [
            { name: "Hallgrímskirkja", description: "A striking modern cathedral.", photo: "https://plus.unsplash.com/premium_photo-1725408034135-1c29ad838295?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Harpa Concert Hall", description: "A futuristic glass concert hall.", photo: "https://images.unsplash.com/photo-1561931510-54f4317f210a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ]
    },
    {
        name: "Akureyri",
        photo: "https://images.unsplash.com/photo-1617237739139-bd00d8ab4cc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Iceland",
        continent: "Europe",
        description: "The 'Capital of the North' of Iceland, known for ski resorts and snowy winters.",
        currency: ["Icelandic Króna"],
        language: "Icelandic",
        timezone: "UTC+0",
        landmarks: [
            { name: "Akureyri Church", description: "A Lutheran church with stunning views.", photo: "https://images.unsplash.com/photo-1533491234113-15f548aeb265?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Hlíðarfjall", description: "A ski resort near Akureyri.", photo: "https://res.cloudinary.com/itb-database/image/upload/s--mnlSpFdq--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1280/v1/ServiceProviders/c7d78119600aa134650423244051c20e?v2" }
        ]
    },
    {
        name: "Dublin",
        photo: "https://images.unsplash.com/photo-1549918864-48ac978761a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Ireland",
        continent: "Europe",
        description: "The vibrant capital of Ireland, known for its rich history and pubs.",
        currency: ["Euro"],
        language: "English, Irish",
        timezone: "UTC+0",
        landmarks: [
            { name: "Trinity College Library", description: "Home to the famous Book of Kells.", photo: "https://images.unsplash.com/photo-1542375438-1a6be67f91d9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Guinness Storehouse", description: "A must-visit brewery experience.", photo: "https://images.unsplash.com/photo-1520361580263-96c088e660a3?q=80&w=1825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ]
    },
    {
        name: "Belfast",
        photo: "https://images.unsplash.com/photo-1554169842-730a996aecf4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Ireland",
        continent: "Europe",
        description: "Capital of Northern Ireland, famous for the Titanic Museum.",
        currency: ["Pound Sterling"],
        language: "English, Irish",
        timezone: "UTC+0",
        landmarks: [
            { name: "Titanic Belfast", description: "A museum dedicated to the Titanic.", photo: "https://images.unsplash.com/photo-1592057502383-b797f1186620?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Giant's Causeway", description: "A natural wonder of hexagonal basalt columns.", photo: "https://images.unsplash.com/photo-1569531412913-08101790fb10?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ]
    },
    {
        name: "Oslo",
        photo: "https://plus.unsplash.com/premium_photo-1697729971005-330d1bb25a45?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Norway",
        continent: "Europe",
        description: "The capital of Norway, famous for fjords and Viking history.",
        currency: ["Norwegian Krone"],
        language: "Norwegian",
        timezone: "UTC+1",
        landmarks: [
            { name: "Oslo Opera House", description: "A modern architectural masterpiece.", photo: "https://images.unsplash.com/photo-1696263209567-92e4f7211cc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Viking Ship Museum", description: "Home to well-preserved Viking ships.", photo: "https://blog.assets.thediscoverer.com/2019/04/Interior-of-the-Viking-ship-museum-in-Oslo--Norway.jpg" }
        ]
    },
    {
        name: "Bergen",
        photo: "https://images.unsplash.com/photo-1537770712845-ff5007f83db2?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Norway",
        continent: "Europe",
        description: "A scenic city known for colorful houses and fjords.",
        currency: ["Norwegian Krone"],
        language: "Norwegian",
        timezone: "UTC+1",
        landmarks: [
            { name: "Bryggen Wharf", description: "A UNESCO Heritage Site with historic wooden houses.", photo: "https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Mount Fløyen", description: "A mountain with breathtaking city views.", photo: "https://images.unsplash.com/photo-1502144125741-62af1f0f16de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
            { name: "Hermitage Museum", description: "One of the largest and oldest museums in the world.", photo: "https://images.unsplash.com/photo-1559683907-5e9549adad37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Church of the Savior on Spilled Blood", description: "A stunning Russian Orthodox church.", photo: "https://images.unsplash.com/photo-1554202218-20ee1af0fb17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ]
    },
    {
        name: "Stockholm",
        photo: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Sweden",
        continent: "Europe",
        description: "The capital of Sweden, known for its beautiful archipelago and historic old town.",
        currency: ["Swedish Krona"],
        language: "Swedish",
        timezone: "UTC+1",
        landmarks: [
            { name: "Gamla Stan", description: "The old town with medieval streets.", photo: "https://images.unsplash.com/photo-1585919199983-c1e4a8d9f118?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Vasa Museum", description: "A well-preserved 17th-century warship.", photo: "https://images.unsplash.com/photo-1710766331102-1b8cdc6060cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
            { name: "Little Mermaid Statue", description: "A tribute to Hans Christian Andersen.", photo: "https://www.tripsavvy.com/thmb/xoC5l9QhZf_LudaUX00hRoeMvL8=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-596075021-c8caeb10e55f49d5a500a84ed1b84ff2.jpg" }
        ]
    },
    {
        name: "Helsinki",
        photo: "https://images.unsplash.com/photo-1522885147691-06d859633fb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Finland",
        continent: "Europe",
        description: "A coastal capital known for its modern design and saunas.",
        currency: ["Euro"],
        language: "Finnish, Swedish",
        timezone: "UTC+2",
        landmarks: [
            { name: "Helsinki Cathedral", description: "An iconic white church in the city center.", photo: "https://images.unsplash.com/photo-1740946065252-6800d0d9bd08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Suomenlinna", description: "A historic sea fortress.", photo: "https://images.unsplash.com/photo-1627823328876-7ee760562ee4?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
            { name: "Wilanów Palace", description: "A baroque palace known as the Polish Versailles.", photo: "https://images.unsplash.com/photo-1464520606738-6dab99180409?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
            { name: "Prague Castle", description: "The largest ancient castle in the world.", photo: "https://images.unsplash.com/photo-1558370142-c90d11872930?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
            { name: "Buda Castle", description: "A historic castle complex.", photo: "https://images.unsplash.com/photo-1652001786521-4bb8429eb9eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Parliament Building", description: "A stunning Gothic Revival building.", photo: "https://th.bing.com/th/id/R.83021e4ef56e7dc000f35d5d4c949505?rik=LrLrS1XftMbRzw&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f524%2f121%2f316%2fhungary-budapest-parliament-night-lights-water-danube-river-1080P-wallpaper.jpg&ehk=kVaQ7AsFUHjqj8CyOnk5zaLEp4KP%2boIC0OoAqN6gjsk%3d&risl=&pid=ImgRaw&r=0" }
        ]
    },
    {
        name: "Vienna",
        photo: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Austria",
        continent: "Europe",
        description: "A cultural capital known for its classical music and coffeehouses.",
        currency: ["Euro"],
        language: "German",
        timezone: "UTC+1",
        landmarks: [
            { name: "Schönbrunn Palace", description: "A baroque palace with vast gardens.", photo: "https://images.unsplash.com/photo-1568829486701-056199d57b24?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "St. Stephen's Cathedral", description: "A Gothic cathedral in the city center.", photo: "https://images.unsplash.com/photo-1578400889704-bbd63485d516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
            { name: "Temple of Olympian Zeus", description: "A colossal ruined temple.", photo: "https://images.unsplash.com/photo-1622272515063-c8e719f8fec6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
            { name: "Jerónimos Monastery", description: "A stunning Manueline-style monastery.", photo: "https://images.unsplash.com/photo-1731852397110-6bcb2d4524ab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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
            { name: "Prado Museum", description: "A world-class art museum.", photo: "https://images.musement.com/cover/0002/22/thumb_121543_cover_header.jpeg?&q=60&fit=crop" },
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
            { name: "Colosseum", description: "An iconic Roman amphitheater.", photo: "https://plus.unsplash.com/premium_photo-1675975635390-6ca4d5c056b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
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
            { name: "Eiffel Tower", description: "A symbol of Paris and France.", photo: "https://images.unsplash.com/photo-1435164205788-305635a36ec2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { name: "Louvre Museum", description: "Home to the Mona Lisa.", photo: "https://images.unsplash.com/photo-1544967082-d9d25d867d66" }
        ]
    }
];
City.insertMany(cities);