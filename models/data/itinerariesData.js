import "../../config/database.js";
import Itinerary from "../Itinerary.js";

let itineraries = [
    {
      name: 'Paris Art & Lights Tour',
      photo: 'https://images.unsplash.com/photo-1631614182677-caa701f3e7e2?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Scarlett White',
      userPhoto: 'https://randomuser.me/api/portraits/women/82.jpg',
      price: 5,
      duration: 7,
      hashtags: [
        '#MonaLisa',
        '#EiffelTower',
        '#SeineRiver',
        '#Impressionism'
      ],
      city: '67e368788db6383b23fd703b'
    },
    {
      name: 'Paris Catacombs Adventure',
      photo: 'https://www.agoda.com/wp-content/uploads/2024/07/Paris-Catacombs-1.jpg%20',
      user: 'Jonas Johansen',
      userPhoto: 'https://randomuser.me/api/portraits/men/94.jpg',
      price: 4,
      duration: 5,
      hashtags: [
        '#DarkHistory',
        '#BoneChambers',
        '#MedievalParis'
      ],
      city: '67e368788db6383b23fd703b'
    },
    {
      name: 'Paris Fashion District',
      photo: 'https://images.unsplash.com/photo-1657352945635-37458cac41a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Kayla Watts',
      userPhoto: 'https://randomuser.me/api/portraits/women/26.jpg',
      price: 5,
      duration: 6,
      hashtags: [
        '#ChampsÉlysées',
        '#DesignerBoutiques',
        '#LuxuryShopping'
      ],
      city: '67e368788db6383b23fd703b'
    },
    {
      name: "Rome Gladiator's Odyssey",
      photo: 'https://images.unsplash.com/photo-1725402209645-bc9a8452d587?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Lyam Schmitt',
      userPhoto: 'https://randomuser.me/api/portraits/men/50.jpg',
      price: 5,
      duration: 8,
      hashtags: [
        '#Colosseum',
        '#RomanForum',
        '#HistoricBattlefields'
      ],
      city: '67e368788db6383b23fd7038'
    },
    {
      name: 'Vatican Marvels Experience',
      photo: 'https://images.unsplash.com/photo-1569758884017-9cac918c1fba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Jar Carpenter',
      userPhoto: 'https://randomuser.me/api/portraits/men/56.jpg',
      price: 5,
      duration: 6,
      hashtags: [
        '#SistineChapel',
        '#StPetersBasilica',
        '#RenaissanceArt'
      ],
      city: '67e368788db6383b23fd7038'
    },
    {
      name: 'Rome Culinary Walk',
      photo: 'https://images.unsplash.com/photo-1657566638711-e71f4959ecab?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Donna Watkins',
      userPhoto: 'https://randomuser.me/api/portraits/women/38.jpg',
      price: 3,
      duration: 4,
      hashtags: [
        '#GelatoTasting',
        '#TrastevereEats',
        '#WinePairing'
      ],
      city: '67e368788db6383b23fd7038'
    },
    {
      name: 'Kremlin & Red Square Expedition',
      photo: 'https://images.unsplash.com/photo-1689902520239-47512e3b0a5d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Alexander Sollie',
      userPhoto: 'https://randomuser.me/api/portraits/men/9.jpg',
      price: 4,
      duration: 6,
      hashtags: [ '#RedSquare', '#TsarBell', '#OnionDomes' ],
      city: '67e368788db6383b23fd7014'
    },
    {
      name: 'Moscow Metro Art Tour',
      photo: 'https://www.russinfo.in/moscow/wp-content/uploads/2020/04/66.jpg',
      user: 'Maria Thomsen',
      userPhoto: 'https://randomuser.me/api/portraits/women/86.jpg',
      price: 3,
      duration: 5,
      hashtags: [
        '#SovietArt',
        '#MarbleStations',
        '#ColdWarHistory'
      ],
      city: '67e368788db6383b23fd7014'
    },
    {
      name: 'Russian Ballet Evening',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moscow-Bolshoi-Theare-1.jpg/1024px-Moscow-Bolshoi-Theare-1.jpg',
      user: 'Louis Park',
      userPhoto: 'https://randomuser.me/api/portraits/men/65.jpg',
      price: 5,
      duration: 4,
      hashtags: [
        '#SwanLake',
        '#CulturalHeritage',
        '#PerformanceArt'
      ],
      city: '67e368788db6383b23fd7014'
    },
    {
      name: 'Winter Palace Grand Tour',
      photo: 'https://images.unsplash.com/photo-1736415635066-c1bcada43e52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Svobodan Buleca',
      userPhoto: 'https://randomuser.me/api/portraits/men/14.jpg',
      price: 5,
      duration: 7,
      hashtags: [ '#Hermitage', '#TsaristArt', '#NevaRiver' ],
      city: '67e368788db6383b23fd7017'
    },
    {
      name: 'Churches of Spilled Blood',
      photo: 'https://images.unsplash.com/photo-1655121164003-82d6e64ac742?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Karla Cedillo',
      userPhoto: 'https://randomuser.me/api/portraits/women/25.jpg',
      price: 4,
      duration: 5,
      hashtags: [
        '#Mosaics',
        '#RussianRevival',
        '#HistoricAssassination'
      ],
      city: '67e368788db6383b23fd7017'
    },
    {
      name: 'White Nights Festival Experience',
      photo: 'https://lp-cms-production.imgix.net/2024-09/Scarlet-Sails-St-Petersburg-19408b26d851.jpg?auto=format,compress&q=72&fit=crop&w=1200',
      user: 'Raul Fields',
      userPhoto: 'https://randomuser.me/api/portraits/men/45.jpg',
      price: 4,
      duration: 8,
      hashtags: [
        '#SummerSolstice',
        '#CulturalFestival',
        '#BalticNights'
      ],
      city: '67e368788db6383b23fd7017'
    },
    {
      name: 'Imperial Palaces Circuit',
      photo: 'https://www.viennasightseeing.at/fileadmin/_processed_/f/0/csm_Hofburg__c__Vienna_Sightseeing_Bernhard_Luck__10__11ec8d7b70.jpg',
      user: 'Lotte Wrede',
      userPhoto: 'https://randomuser.me/api/portraits/women/70.jpg',
      price: 5,
      duration: 7,
      hashtags: [
        '#SchönbrunnPalace',
        '#BaroqueArchitecture',
        '#RoyalGardens'
      ],
      city: '67e368788db6383b23fd702c'
    },
    {
      name: 'Vienna Opera Night',
      photo: 'https://images.unsplash.com/photo-1589194379031-6b7606daa33d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Mustafa Akışık',
      userPhoto: 'https://randomuser.me/api/portraits/men/62.jpg',
      price: 5,
      duration: 4,
      hashtags: [
        '#GoldenHall',
        '#MozartLegacy',
        '#SymphonyExperience'
      ],
      city: '67e368788db6383b23fd702c'
    },
    {
      name: 'Coffee House Culture Tour',
      photo: 'https://adventure.com/wp-content/uploads/2019/06/Vienna-coffeehouses-Cafe-Central-Photo-credit-Flikr-Yuan.jpg',
      user: 'Anna James',
      userPhoto: 'https://randomuser.me/api/portraits/women/50.jpg',
      price: 3,
      duration: 5,
      hashtags: [
        '#SacherTorte',
        '#VienneseBlend',
        '#HistoricCafés'
      ],
      city: '67e368788db6383b23fd702c'
    },
    {
      name: 'Acropolis Time Travel',
      photo: 'https://images.unsplash.com/photo-1512155912692-1229949f4879?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Erica Carlson',
      userPhoto: 'https://randomuser.me/api/portraits/women/31.jpg',
      price: 4,
      duration: 6,
      hashtags: [
        '#Parthenon',
        '#AncientRuins',
        '#OlympianGods'
      ],
      city: '67e368788db6383b23fd702f'
    },
    {
      name: 'Plaka District Discovery',
      photo: 'https://images.squarespace-cdn.com/content/v1/57125c2c2b8dde54a34b537f/1616001255488-YJJJOK7P66Z1AZSNMYR8/athens+plaka.jpg?format=2500w',
      user: 'Anika Manjunath',
      userPhoto: 'https://randomuser.me/api/portraits/women/95.jpg',
      price: 3,
      duration: 5,
      hashtags: [
        '#NeoclassicalHouses',
        '#OliveOilTasting',
        '#AgoraRuins'
      ],
      city: '67e368788db6383b23fd702f'
    },
    {
      name: 'Athens Sunset Mythology',
      photo: 'https://plus.unsplash.com/premium_photo-1661911756283-fd0fbefee201?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Bogoljub Stojaković',
      userPhoto: 'https://randomuser.me/api/portraits/men/26.jpg',
      price: 4,
      duration: 4,
      hashtags: [
        '#TempleOfZeus',
        '#LycabettusHill',
        '#GoldenHourViews'
      ],
      city: '67e368788db6383b23fd702f'
    },
    {
      name: 'Trinity Literary Quest',
      photo: 'https://images.unsplash.com/photo-1542375438-1a6be67f91d9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Rebecca Campbell',
      userPhoto: 'https://randomuser.me/api/portraits/women/91.jpg',
      price: 4,
      duration: 5,
      hashtags: [
        '#MedievalManuscripts',
        '#IrishWriters',
        '#HistoricLibraries'
      ],
      city: '67e368788db6383b23fd7008'
    },
    {
      name: 'Guinness Masterclass Experience',
      photo: 'https://images.unsplash.com/photo-1724535234360-68cb23990932?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Ajith Saldanha',
      userPhoto: 'https://randomuser.me/api/portraits/men/86.jpg',
      price: 4,
      duration: 4,
      hashtags: [
        '#StoutBrewing',
        '#SkylineBar',
        '#IrishCheers'
      ],
      city: '67e368788db6383b23fd7008'
    },
    {
      name: 'Dublin Castle Chronicles',
      photo: 'https://images.unsplash.com/photo-1603026904158-496b78d9c07e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Hubert Lemoine',
      userPhoto: 'https://randomuser.me/api/portraits/men/21.jpg',
      price: 3,
      duration: 6,
      hashtags: [
        '#VikingHistory',
        '#StateApartments',
        '#MedievalFortress'
      ],
      city: '67e368788db6383b23fd7008'
    },
    {
      name: 'Fjord & Viking Adventure',
      photo: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/15/52/3c/29.jpg',
      user: 'Andrés Flores',
      userPhoto: 'https://randomuser.me/api/portraits/men/77.jpg',
      price: 5,
      duration: 8,
      hashtags: [
        '#Oslofjord',
        '#LongshipMuseum',
        '#NordicLandscapes'
      ],
      city: '67e368788db6383b23fd700e'
    },
    {
      name: 'Opera House Architecture Tour',
      photo: 'https://images.unsplash.com/photo-1582540807017-86c7dc166d2d?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Florence Bouchard',
      userPhoto: 'https://randomuser.me/api/portraits/women/43.jpg',
      price: 4,
      duration: 5,
      hashtags: [
        '#SlopingRoof',
        '#MarbleFacades',
        '#HarborViews'
      ],
      city: '67e368788db6383b23fd700e'
    },
    {
      name: 'Norwegian Folklore Evening',
      photo: 'https://cdn.getyourguide.com/img/tour/63c3eeafb46bb.jpeg/145.jpg',
      user: 'Tibério da Luz',
      userPhoto: 'https://randomuser.me/api/portraits/men/13.jpg',
      price: 3,
      duration: 4,
      hashtags: [
        '#MythicalCreatures',
        '#FolkMusic',
        '#WinterTales'
      ],
      city: '67e368788db6383b23fd700e'
    },
    {
      name: 'Prado Museum Masterpieces',
      photo: 'https://mymodernmet.com/wp/wp-content/uploads/2019/12/museo-del-prado-1.jpg',
      user: 'Clara Lira',
      userPhoto: 'https://randomuser.me/api/portraits/women/17.jpg',
      price: 5,
      duration: 6,
      hashtags: [
        '#Goya',
        '#Velázquez',
        '#RenaissanceArt',
        '#GoldenTriangle'
      ],
      city: '67e368788db6383b23fd7035'
    },
    {
      name: 'Tapas & Flamenco Night',
      photo: 'https://images.unsplash.com/photo-1560781744-0853d9521cdc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Rayisa Dumka',
      userPhoto: 'https://randomuser.me/api/portraits/women/19.jpg',
      price: 4,
      duration: 5,
      hashtags: [
        '#SpanishGastronomy',
        '#TraditionalDance',
        '#HistoricTaverns'
      ],
      city: '67e368788db6383b23fd7035'
    },
    {
      name: 'Royal Palace Grand Tour',
      photo: 'https://plus.unsplash.com/premium_photo-1694475328725-64b77c08b4b9?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Dyllan Mohr',
      userPhoto: 'https://randomuser.me/api/portraits/men/40.jpg',
      price: 4,
      duration: 4,
      hashtags: [
        '#BaroqueArchitecture',
        '#ThroneRoom',
        '#ArmoryCollection'
      ],
      city: '67e368788db6383b23fd7035'
    },
    {
      name: 'Nyhavn Colorful Canals',
      photo: 'https://images.unsplash.com/photo-1613412237922-bd459012136c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Consuelo Ortega',
      userPhoto: 'https://randomuser.me/api/portraits/women/55.jpg',
      price: 4,
      duration: 5,
      hashtags: [
        '#WaterfrontViews',
        '#HistoricShips',
        '#HyggeCulture'
      ],
      city: '67e368788db6383b23fd701d'
    },
    {
      name: 'Tivoli Gardens Adventure',
      photo: 'https://media.cntraveler.com/photos/5bfdad5845e16c465f8757ca/16:9/w_1920,c_limit/Tivoli-Gardens_Tivoli_S%C3%B8en_D%C3%A6monen_Drageba%CC%8Adene_Himmelskibet_Aften_2017_02.jpg',
      user: 'Carol Hicks',
      userPhoto: 'https://randomuser.me/api/portraits/women/30.jpg',
      price: 3,
      duration: 6,
      hashtags: [
        '#AmusementPark',
        '#VictorianDesign',
        '#NightIlluminations'
      ],
      city: '67e368788db6383b23fd701d'
    },
    {
      name: 'Little Mermaid Discovery',
      photo: 'https://images.unsplash.com/photo-1730068036415-f03393c01093?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Inès Renard',
      userPhoto: 'https://randomuser.me/api/portraits/women/64.jpg',
      price: 3,
      duration: 3,
      hashtags: [
        '#SculptureArt',
        '#HarborWalk',
        '#LiteraryHistory'
      ],
      city: '67e368788db6383b23fd701d'
    },
    {
      name: 'Vasa Museum Time Capsule',
      photo: 'https://images.unsplash.com/photo-1710766331102-1b8cdc6060cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Baldur Stoiber',
      userPhoto: 'https://randomuser.me/api/portraits/men/2.jpg',
      price: 4,
      duration: 5,
      hashtags: [
        '#17thCenturyShip',
        '#SwedishEmpire',
        '#PreservationMarvel'
      ],
      city: '67e368788db6383b23fd701a'
    },
    {
      name: 'Gamla Stan Medieval Walk',
      photo: 'https://visitsweden.com/_next/image/?url=https%3A%2F%2Fs3-eu-north-1.amazonaws.com%3A443%2Fpy3.visitsweden.com%2Foriginal_images%2F_DSC0849-IBSweb_Q0ZlOGR.jpg&w=1980&q=75',
      user: 'Teodoro Fonseca',
      userPhoto: 'https://randomuser.me/api/portraits/men/91.jpg',
      price: 3,
      duration: 4,
      hashtags: [
        '#CobblestoneStreets',
        '#RoyalPalace',
        '#VikingLegacy'
      ],
      city: '67e368788db6383b23fd701a'
    },
    {
      name: 'Danube River Majesty',
      photo: 'https://a.storyblok.com/f/108167/850x556/0034520671/50933a10-2be4-49df-a33d-6c4d4483c916.jpg/m/?w=640&q=75',
      user: 'Theodore Clarke',
      userPhoto: 'https://randomuser.me/api/portraits/men/95.jpg',
      price: 4,
      duration: 6,
      hashtags: [
        '#ParliamentViews',
        '#BridgesAtNight',
        '#ThermalWaters'
      ],
      city: '67e368788db6383b23fd7029'
    },
    {
      name: 'Buda Castle Panorama',
      photo: 'https://budacastlebudapest.com/wp-content/uploads/2016/02/Buda-Castle-Tours-Budapest.jpg',
      user: 'Lucas Domínguez',
      userPhoto: 'https://randomuser.me/api/portraits/men/72.jpg',
      price: 3,
      duration: 5,
      hashtags: [
        '#HilltopViews',
        '#FunicularRide',
        '#RoyalResidence'
      ],
      city: '67e368788db6383b23fd7029'
    },
    {
      name: 'Charles Bridge Medieval Walk',
      photo: 'https://praguetouristinformation.com/en/wp-content/uploads/2020/12/Karlsbruecke-in-Prague.jpg',
      user: 'Vukan Stojković',
      userPhoto: 'https://randomuser.me/api/portraits/men/96.jpg',
      price: 4,
      duration: 5,
      hashtags: [
        '#StoneArchitecture',
        '#VltavaRiver',
        '#GothicTowers'
      ],
      city: '67e368788db6383b23fd7026'
    },
    {
      name: 'Prague Castle Complex Tour',
      photo: 'https://www.lucytours.com/wp-content/uploads/2022/02/Prague-Castle-Tour-1-scaled.jpg',
      user: 'Addison Barnaby',
      userPhoto: 'https://randomuser.me/api/portraits/women/41.jpg',
      price: 4,
      duration: 6,
      hashtags: [
        '#LargestCastle',
        '#StVitusCathedral',
        '#RoyalGardens'
      ],
      city: '67e368788db6383b23fd7026'
    },
    {
      name: 'Design District Explorer',
      photo: 'https://www.myhelsinki.fi/nitropack_static/NPKOrqSOTiHCxREDGKxzPsCxOlwxDjYB/assets/images/optimized/rev-e2da17c/www.myhelsinki.fi/wp-content/uploads/2024/12/kasarmintori-square-statue-1319x1536.jpg',
      user: 'Regiane Freitas',
      userPhoto: 'https://randomuser.me/api/portraits/women/39.jpg',
      price: 3,
      duration: 5,
      hashtags: [
        '#ModernArchitecture',
        '#MarimekkoStyle',
        '#FunctionalDesign'
      ],
      city: '67e368788db6383b23fd7020'
    },
    {
      name: 'Suomenlinna Fortress Adventure',
      photo: 'https://www.discoveringfinland.com/wp-content/uploads/2017/01/helsinki_suomenlinna_attractions_1200x700.jpg',
      user: 'Gonzalo Torres',
      userPhoto: 'https://randomuser.me/api/portraits/men/98.jpg',
      price: 4,
      duration: 6,
      hashtags: [
        '#SeaFortress',
        '#UNESCOHeritage',
        '#CoastalViews'
      ],
      city: '67e368788db6383b23fd7020'
    },
    {
      name: 'Belém Tower Discovery',
      photo: 'https://images.unsplash.com/photo-1700141459262-7175e5d945a3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Minttu Saari',
      userPhoto: 'https://randomuser.me/api/portraits/women/64.jpg',
      price: 4,
      duration: 5,
      hashtags: [
        '#ManuelineStyle',
        '#TagusRiver',
        '#MaritimeHistory'
      ],
      city: '67e368788db6383b23fd7032'
    },
    {
      name: 'Alfama Tram Experience',
      photo: 'https://images.unsplash.com/photo-1692993283747-b5893e40d09a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Franklin Jacobs',
      userPhoto: 'https://randomuser.me/api/portraits/men/81.jpg',
      price: 3,
      duration: 4,
      hashtags: [
        '#HistoricNeighborhood',
        '#YellowTrams',
        '#MiradouroViews'
      ],
      city: '67e368788db6383b23fd7032'
    },
    {
      name: 'Old Town Reconstruction Tour',
      photo: 'https://photos.smugmug.com/Warsaw/Warsaw-POIs/i-BhJ6WG6/0/206e0259/L/warsaw-poi-market-square-night-L.jpg',
      user: 'Vildan Ağaoğlu',
      userPhoto: 'https://randomuser.me/api/portraits/women/18.jpg',
      price: 4,
      duration: 6,
      hashtags: [
        '#PostWarRebuild',
        '#MarketSquare',
        '#RoyalRoute'
      ],
      city: '67e368788db6383b23fd7023'
    },
    {
      name: 'POLIN Museum Journey',
      photo: 'https://image.arrivalguides.com/1230x800/13/57912a24c4a347e78f50c1b8158a4bc7.jpg',
      user: 'Gonca Akay',
      userPhoto: 'https://randomuser.me/api/portraits/women/61.jpg',
      price: 3,
      duration: 5,
      hashtags: [
        '#CulturalHeritage',
        '#InteractiveExhibits',
        '#ToleranceSymbol'
      ],
      city: '67e368788db6383b23fd7023'
    },
    {
      name: 'Titanic Legacy Experience',
      photo: 'https://i.guim.co.uk/img/media/a592c8d28458daba27c26df0316044651664bc20/0_138_2048_1229/master/2048.jpg?width=620&dpr=2&s=none&crop=none',
      user: 'اميرعلي كامياران',
      userPhoto: 'https://randomuser.me/api/portraits/men/69.jpg',
      price: 4,
      duration: 6,
      hashtags: [
        '#ShipbuildingHistory',
        '#InteractiveMuseum',
        '#DryDockTour'
      ],
      city: '67e368788db6383b23fd700b'
    },
    {
      name: 'Giants Causeway Expedition',
      photo: 'https://belfastcitysightseeing.com/wp-content/uploads/2023/03/giants-causeway-site-northern-ireland.jpg',
      user: 'Michael Brooks',
      userPhoto: 'https://randomuser.me/api/portraits/men/28.jpg',
      price: 5,
      duration: 8,
      hashtags: [
        '#BasaltColumns',
        '#CoastalHike',
        '#NaturalWonder'
      ],
      city: '67e368788db6383b23fd700b'
    },
    {
      name: 'Golden Circle Expedition',
      photo: 'https://www.activities-iceland.com/images/ia/gallery/golden-circle/golden-circle-iceland.jpg',
      user: 'Connie Johnson',
      userPhoto: 'https://randomuser.me/api/portraits/women/71.jpg',
      price: 5,
      duration: 8,
      hashtags: [
        '#Geysers',
        '#Waterfalls',
        '#TectonicPlates'
      ],
      city: '67e368788db6383b23fd7002'
    },
    {
      name: 'Northern Lights Quest',
      photo: 'https://primetours.is/wp-content/uploads/2017/01/nordurljos.jpg',
      user: 'Hanne Istad',
      userPhoto: 'https://randomuser.me/api/portraits/women/61.jpg',
      price: 4,
      duration: 6,
      hashtags: [
        '#ArcticSkies',
        '#ThermalPools',
        '#MidnightSun'
      ],
      city: '67e368788db6383b23fd7002'
    },
    {
      name: 'Bryggen Hanseatic Heritage',
      photo: 'https://norwayexclusive.com/wp-content/uploads/2017/10/HD_Bergen-Bryggen-Dag-shutterstock_215341468-768x508.jpg',
      user: 'Prithvi Das',
      userPhoto: 'https://randomuser.me/api/portraits/women/73.jpg',
      price: 4,
      duration: 5,
      hashtags: [
        '#UNESCO',
        '#WoodenArchitecture',
        '#FishMarket'
      ],
      city: '67e368788db6383b23fd7011'
    },
    {
      name: 'Fjord Hiking Adventure',
      photo: 'https://media.gadventures.com/media-server/cache/30/b6/30b654c911acd52c03803e19ad6f4153.jpg',
      user: 'Rigo Dorn',
      userPhoto: 'https://randomuser.me/api/portraits/men/85.jpg',
      price: 5,
      duration: 7,
      hashtags: [
        '#MountFløyen',
        '#ScenicTrails',
        '#WaterfallViews'
      ],
      city: '67e368788db6383b23fd7011'
    },
    {
      name: 'Arctic Botanical Wonders',
      photo: 'https://tripjive.com/wp-content/uploads/2024/05/Akureyri-Botanical-Garden-1024x585.jpg',
      user: 'Leslie Ferguson',
      userPhoto: 'https://randomuser.me/api/portraits/men/33.jpg',
      price: 3,
      duration: 4,
      hashtags: [
        '#MidnightSun',
        '#ChurchViews',
        '#NorthernGardens'
      ],
      city: '67e368788db6383b23fd7005'
    },
    {
      name: 'Ski Resort Extreme',
      photo: 'https://www.akureyriguide.is/wp-content/uploads/2020/02/Hlidarfjall2013-22.jpg',
      user: 'Chi Van Ee',
      userPhoto: 'https://randomuser.me/api/portraits/women/13.jpg',
      price: 4,
      duration: 6,
      hashtags: [
        '#Hlíðarfjall',
        '#SnowSports',
        '#FjordSlopes'
      ],
      city: '67e368788db6383b23fd7005'
    },
    {
      name: 'CN Tower SkyWalk',
      photo: 'https://images.rove.me/w_1920,q_85/tbpxp8pogdaqwdgotkek/toronto-cn-tower-edge-walk.jpg',
      user: 'Derrick Wallace',
      userPhoto: 'https://randomuser.me/api/portraits/men/2.jpg',
      price: 4,
      duration: 5,
      hashtags: [ '#GlassFloor', '#360Views', '#CityLights' ],
      city: '67f504cb91fb216764e25f61'
    },
    {
      name: 'Old Montreal Time Travel',
      photo: 'https://images.unsplash.com/photo-1570474640932-c5dfbeeb2706?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      user: 'Louna Gerard',
      userPhoto: 'https://randomuser.me/api/portraits/women/37.jpg',
      price: 3,
      duration: 6,
      hashtags: [
        '#NotreDameBasilica',
        '#CobblestoneStreets',
        '#FrenchHeritage'
      ],
      city: '67f504d291fb216764e25f68'
    },
    {
      name: 'Pacific Rim Nature Tour',
      photo: 'https://i0.wp.com/foreverlostintravel.com/wp-content/uploads/2020/05/Stanley-Park-Tourism-Vancouver-Albert-Normandin.jpg?resize=1024%2C683&ssl=1',
      user: 'Ethel Gonzales',
      userPhoto: 'https://randomuser.me/api/portraits/women/9.jpg',
      price: 5,
      duration: 8,
      hashtags: [
        '#StanleyPark',
        '#RainforestTrails',
        '#CoastalViews'
      ],
      city: '67f504d291fb216764e25f65'
    },
    {
      name: 'Stampede Rodeo Experience',
      photo: 'https://livewirecalgary.com/wp-content/uploads/2023/07/20230707-Stampede-Parade-0071.jpg',
      user: 'Carmen Vincent',
      userPhoto: 'https://randomuser.me/api/portraits/women/53.jpg',
      price: 4,
      duration: 7,
      hashtags: [
        '#CowboyCulture',
        '#CountryMusic',
        '#WesternHeritage'
      ],
      city: '67f504d291fb216764e25f6b'
    }
  ];

  Itinerary.insertMany(itineraries);
  
  