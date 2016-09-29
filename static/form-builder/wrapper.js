var container = document.querySelector('.form-builder-container');
const fb = new FormBuilder(container);

const btn = document.querySelector('#exportBtn');
btn.addEventListener('click', function () {
  console.log(JSON.stringify(fb.exportState()))
});

const countriesDropdown = {
  "required": true,
  "title": "Countries",
  "type": "Dropdown",
  "options": [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic (CAR)',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Democratic Republic of the Congo',
    'Republic of the Congo',
    'Costa Rica',
    'Cote dIvoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar (Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates (UAE)',
    'United Kingdom (UK)',
    'United States of America (USA)',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City (Holy See)',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ],
  "disabledIndexes": [],
};

const countriesBtn = document.querySelector('#countries')
countriesBtn.addEventListener('click', () => {
  const state = fb.exportState();
  const newState = state.concat([countriesDropdown]);
  fb.importState(newState);
});


const puppiesDropdown = {
  "required": true,
  "title": "Puppy breeds",
  "type": "Dropdown",
  "options": [
    'Affenpinscher',
    'Afghan Hound',
    'Afghan Shepherd',
    'Aidi',
    'Airedale Terrier',
    'Akbash',
    'Akita Inu',
    'Alano Español',
    'Alaskan Klee Kai',
    'Alaskan Malamute',
    'Alpine Dachsbracke',
    'Alpine Spaniel',
    'American Akita',
    'American Bulldog',
    'American Cocker Spaniel',
    'American Eskimo Dog',
    'American Foxhound',
    'American Hairless Terrier',
    'American Pit Bull Terrier',
    'American Staffordshire Terrier',
    'American Water Spaniel',
    'Anatolian Shepherd Dog',
    'Andalusian Hound',
    'Anglo-Français de Petite Vénerie',
    'Appenzeller Sennenhund',
    'Ariege Pointer',
    'Ariegeois',
    'Armant',
    'Armenian Gampr dog',
    'Artois Hound',
    'Australian Cattle Dog',
    'Australian Kelpie',
    'Australian Shepherd',
    'Australian Silky Terrier',
    'Australian Stumpy Tail Cattle Dog[10]',
    'Australian Terrier',
    'Austrian Black and Tan Hound',
    'Austrian Pinscher',
    'Azawakh',
    'Bakharwal Dog',
    'Barbet',
    'Basenji',
    'Basque Ratter',
    'Basque Shepherd Dog',
    'Basset Artésien Normand',
    'Basset Bleu de Gascogne',
    'Basset Fauve de Bretagne',
    'Basset Griffon Vendéen, Grand',
    'Basset Griffon Vendéen, Petit',
    'Basset Hound',
    'Bavarian Mountain Hound',
    'Beagle',
    'Beagle-Harrier',
    'Bearded Collie',
    'Beauceron',
    'Bedlington Terrier',
    'Belgian Shepherd Dog (Groenendael)',
    'Belgian Shepherd Dog (Laekenois)',
    'Belgian Shepherd Dog (Malinois)',
    'Belgian Shepherd (Tervuren)',
    'Bergamasco Shepherd',
    'Berger Blanc Suisse',
    'Berger Picard',
    'Berner Laufhund',
    'Bernese Mountain Dog',
    'Bichon Frisé',
    'Billy',
    'Black and Tan Coonhound',
    'Black and Tan Virginia Foxhound',
    'Black Norwegian Elkhound',
    'Black Russian Terrier',
    'Blackmouth Cur',
    'Bleu de Gascogne, Grand',
    'Bleu de Gascogne, Petit',
    'Bloodhound',
    'Blue Heeler',
    'Blue Lacy',
    'Blue Paul Terrier',
    'Bluetick Coonhound',
    'Boerboel',
    'Bohemian Shepherd',
    'Bolognese',
    'Border Collie',
    'Border Terrier',
    'Borzoi',
    'Bosnian Coarse-haired Hound',
    'Boston Terrier',
    'Bouvier des Ardennes',
    'Bouvier des Flandres',
    'Boxer',
    'Boykin Spaniel',
    'Bracco Italiano',
    'Braque dAuvergne',
    'Braque du Bourbonnais',
    'Braque du Puy',
    'Braque Francais',
    'Braque Saint-Germain',
    'Brazilian Dogo',
    'Brazilian Terrier',
    'Briard',
    'Briquet Griffon Vendéen',
    'Brittany',
    'Broholmer',
    'Bruno Jura Hound',
    'Bucovina Shepherd Dog',
    'Bull and Terrier',
    'Bull Terrier',
    'Bull Terrier (Miniature)',
    'Bulldog',
    'Bullenbeisser',
    'Bullmastiff',
    'Bully Kutta',
    'Burgos Pointer',
    'Cairn Terrier',
    'Canaan Dog',
    'Canadian Eskimo Dog',
    'Cane Corso',
    'Cantabrian Water Dog',
    'Cão da Serra de Aires',
    'Cão de Castro Laboreiro',
    'Cão Fila de São Miguel',
    'Carolina Dog',
    'Carpathian Shepherd Dog',
    'Catahoula Cur',
    'Catalan Sheepdog',
    'Caucasian Shepherd Dog',
    'Cavalier King Charles Spaniel',
    'Central Asian Shepherd Dog',
    'Cesky Fousek',
    'Cesky Terrier',
    'Chesapeake Bay Retriever',
    'Chien Français Blanc et Noir',
    'Chien Français Blanc et Orange',
    'Chien Français Tricolore',
    'Chien-gris',
    'Chihuahua',
    'Chilean Fox Terrier',
    'Chinese Chongqing Dog',
    'Chinese Crested Dog',
    'Chinese Imperial Dog',
    'Chinook',
    'Chippiparai',
    'Chow Chow',
    'Cierny Sery',
    'Cirneco dellEtna',
    'Clumber Spaniel',
    'Collie, Rough',
    'Collie, Smooth',
    'Combai',
    'Cordoba Fighting Dog',
    'Coton de Tulear',
    'Cretan Hound',
    'Croatian Sheepdog',
    'Cumberland Sheepdog',
    'Curly Coated Retriever',
    'Cursinu',
    'Czechoslovak Wolfdog',
    'Dachshund',
    'Dalmatian',
    'Dandie Dinmont Terrier',
    'Danish Swedish Farmdog',
    'Decker Rat Terrier',
    'Deutsche Bracke',
    'Doberman Pinscher',
    'Dogo Argentino',
    'Dogo Cubano',
    'Dogue de Bordeaux',
    'Drentse Patrijshond',
    'Drever',
    'Dunker',
    'Dutch Shepherd Dog',
    'Dutch Smoushond',
    'East Siberian Laika',
    'East-European Shepherd',
    'Elo',
    'English Cocker Spaniel',
    'American English Coonhound',
    'English Foxhound',
    'English Mastiff',
    'English Setter',
    'English Shepherd',
    'English Springer Spaniel',
    'English Toy Terrier (Black & Tan)',
    'English Water Spaniel',
    'English White Terrier',
    'Entlebucher Mountain Dog',
    'Épagneul Bleu de Picardie',
    'Estonian Hound',
    'Estrela Mountain Dog',
    'Eurasier',
    'Field Spaniel',
    'Fila Brasileiro',
    'Finnish Hound',
    'Finnish Lapphund',
    'Finnish Spitz',
    'Flat-Coated Retriever',
    'Fox Terrier (Smooth)',
    'Fox Terrier, Wire',
    'French Brittany',
    'French Bulldog',
    'French Spaniel',
    'Gaddi Dog',
    'Galgo Español',
    'Galician Cattle Dog',
    'Garafian Shepherd',
    'Gascon Saintongeois',
    'Georgian Shepherd Dog',
    'German Longhaired Pointer',
    'German Pinscher',
    'German Rough-haired Pointer',
    'German Shepherd Dog',
    'German Shorthaired Pointer',
    'German Spaniel',
    'German Spitz',
    'German Wirehaired Pointer',
    'Giant Schnauzer',
    'Glen of Imaal Terrier',
    'Golden Retriever',
    'Gordon Setter',
    'Gran Mastín de Borínquen',
    'Grand Anglo-Français Blanc et Noir',
    'Grand Anglo-Français Blanc et Orange',
    'Grand Anglo-Français Tricolore',
    'Grand Griffon Vendéen',
    'Great Dane',
    'Great Pyrenees',
    'Greater Swiss Mountain Dog',
    'Greek Harehound',
    'Greenland Dog',
    'Greyhound',
    'Griffon Bleu de Gascogne',
    'Griffon Bruxellois',
    'Griffon Fauve de Bretagne',
    'Griffon Nivernais',
    'Guatemalan Dogo',
    'Hamiltonstövare',
    'Hanover Hound',
    'Hare Indian Dog',
    'Harrier',
    'Havanese',
    'Hawaiian Poi Dog',
    'Himalayan Sheepdog',
    'Hokkaido Ken',
    'Hortaya Borzaya',
    'Hovawart',
    'Huntaway',
    'Hygenhund',
    'Ibizan Hound',
    'Icelandic Sheepdog',
    'Indian pariah dog',
    'Indian Spitz',
    'Irish Red and White Setter',
    'Irish Setter',
    'Irish Terrier',
    'Irish Water Spaniel',
    'Irish Wolfhound',
    'Istrian Coarse-haired Hound',
    'Istrian Shorthaired Hound',
    'Italian Greyhound',
    'Jack Russell Terrier',
    'Jagdterrier',
    'Jämthund',
    'Japanese Chin',
    'Japanese Spitz',
    'Japanese Terrier',
    'Kaikadi',
    'Kai Ken',
    'Kangal Dog',
    'Kanni',
    'Karakachan Dog',
    'Karelian Bear Dog',
    'Karst Shepherd',
    'Keeshond',
    'Kerry Beagle',
    'Kerry Blue Terrier',
    'King Charles Spaniel',
    'King Shepherd',
    'Kintamani',
    'Kishu Ken',
    'Komondor',
    'Kooikerhondje',
    'Koolie',
    'Korean Jindo Dog',
    'Kromfohrländer',
    'Kumaon Mastiff',
    'Kunming Wolfdog',
    'Kurī',
    'Kuvasz',
    'Kyi-Leo',
    'Labrador Husky',
    'Labrador Retriever',
    'Lagotto Romagnolo',
    'Lakeland Terrier',
    'Lancashire Heeler',
    'Landseer',
    'Lapponian Herder',
    'Leonberger',
    'Lhasa Apso',
    'Lithuanian Hound',
    'Longhaired Whippet',
    'Löwchen',
    'Magyar Agár',
    'Mahratta Greyhound',
    'Majorca Ratter',
    'Majorca Shepherd Dog',
    'Maltese',
    'Manchester Terrier',
    'Maremma Sheepdog',
    'McNab',
    'Mexican Hairless Dog',
    'Miniature Australian Shepherd',
    'Miniature American Shepherd',
    'Miniature Fox Terrier',
    'Miniature Pinscher',
    'Miniature Schnauzer',
    'Miniature Shar Pei',
    'Mioritic',
    'Molossus',
    'Molossus of Epirus',
    'Montenegrin Mountain Hound',
    'Moscow Watchdog',
    'Moscow Water Dog',
    'Mountain Cur',
    'Mucuchies',
    'Mudhol Hound',
    'Mudi',
    'Münsterländer, Large',
    'Münsterländer, Small',
    'Murcian Ratter',
    'Neapolitan Mastiff',
    'Newfoundland',
    'New Zealand Heading Dog',
    'Norfolk Spaniel',
    'Norfolk Terrier',
    'Norrbottenspets',
    'North Country Beagle',
    'Northern Inuit Dog',
    'Norwegian Buhund',
    'Norwegian Elkhound',
    'Norwegian Lundehund',
    'Norwich Terrier',
    'Nova Scotia Duck-Tolling Retriever',
    'Old Croatian Sighthound',
    'Old Danish Pointer',
    'Old English Sheepdog',
    'Old English Terrier',
    'Old German Shepherd Dog',
    'Old Time Farm Shepherd',
    'Olde English Bulldogge',
    'Otterhound',
    'Pachon Navarro',
    'Pandikona',
    'Paisley Terrier',
    'Papillon',
    'Parson Russell Terrier',
    'Patterdale Terrier',
    'Pekingese',
    'Perro de Presa Canario',
    'Perro de Presa Mallorquin',
    'Perro fino Colombiano',
    'Peruvian Hairless Dog',
    'Phalène',
    'Pharaoh Hound',
    'Phu Quoc ridgeback dog',
    'Picardy Spaniel',
    'Plott Hound',
    'Podenco Canario',
    'Pointer',
    'Poitevin',
    'Polish Greyhound',
    'Polish Hound',
    'Polish Hunting Dog',
    'Polish Lowland Sheepdog',
    'Polish Tatra Sheepdog',
    'Pomeranian',
    'Pont-Audemer Spaniel',
    'Poodle',
    'Porcelaine',
    'Portuguese Podengo',
    'Portuguese Pointer',
    'Portuguese Water Dog',
    'Posavac Hound',
    'Pražský Krysařík',
    'Pudelpointer',
    'Pug',
    'Puli',
    'Pumi',
    'Pungsan Dog',
    'Pyrenean Mastiff',
    'Pyrenean Shepherd',
    'Rafeiro do Alentejo',
    'Rajapalayam',
    'Rampur Greyhound',
    'Rastreador Brasileiro',
    'Ratonero Bodeguero Andaluz',
    'Ratonero Valenciano',
    'Rat Terrier',
    'Redbone Coonhound',
    'Rhodesian Ridgeback',
    'Rottweiler',
    'Russian Spaniel',
    'Russian Toy',
    'Russian tracker',
    'Russo-European Laika',
    'Russell Terrier',
    'Saarlooswolfhond',
    'Sabueso Español',
    'Saint-Usuge Spaniel',
    'Sakhalin Husky',
    'Saluki',
    'Samoyed',
    'Santal Hound',
    'Sapsali',
    'Šarplaninac',
    'Schapendoes',
    'Schillerstövare',
    'Schipperke',
    'Standard Schnauzer',
    'Schweizer Laufhund',
    'Schweizerischer Niederlaufhund',
    'Scotch Collie',
    'Scottish Deerhound',
    'Scottish Terrier',
    'Sealyham Terrier',
    'Segugio Italiano',
    'Seppala Siberian Sleddog',
    'Serbian Hound',
    'Serbian Tricolour Hound',
    'Seskar Seal Dog',
    'Shar Pei',
    'Shetland Sheepdog',
    'Shiba Inu',
    'Shih Tzu',
    'Shikoku Ken',
    'Shiloh Shepherd Dog',
    'Siberian Husky',
    'Silken Windhound',
    'Sinhala Hound',
    'Skye Terrier',
    'Sloughi',
    'Slovak Cuvac',
    'Slovakian Rough-haired Pointer',
    'Slovenský Kopov',
    'Smålandsstövare',
    'Small Greek Domestic Dog',
    'Soft-Coated Wheaten Terrier',
    'South Russian Ovcharka',
    'Southern Hound',
    'Spanish Mastiff',
    'Spanish Water Dog',
    'Spinone Italiano',
    'Sporting Lucas Terrier',
    'St. Bernard',
    'St. Johns water dog',
    'Stabyhoun',
    'Staffordshire Bull Terrier',
    'Stephens Cur',
    'Styrian Coarse-haired Hound',
    'Sussex Spaniel',
    'Swedish Lapphund',
    'Swedish Vallhund',
    'Tahltan Bear Dog',
    'Taigan',
    'Taiwan Dog',
    'Talbot',
    'Tamaskan Dog',
    'Teddy Roosevelt Terrier',
    'Telomian',
    'Tennessee Treeing Brindle',
    'Tenterfield Terrier',
    'Terceira Mastiff',
    'Thai Bangkaew Dog',
    'Thai Ridgeback',
    'Tibetan Mastiff',
    'Tibetan Spaniel',
    'Tibetan Terrier',
    'Tornjak',
    'Tosa',
    'Toy Bulldog',
    'Toy Fox Terrier',
    'Toy Manchester Terrier',
    'Toy Trawler Spaniel',
    'Transylvanian Hound',
    'Treeing Cur',
    'Treeing Walker Coonhound',
    'Trigg Hound',
    'Tweed Water Spaniel',
    'Tyrolean Hound',
    'Uruguayan Cimarron',
    'Vanjari Hound',
    'Villano de las Encartaciones',
    'Vizsla',
    'Volpino Italiano',
    'Weimaraner',
    'Welsh Corgi, Cardigan',
    'Welsh Corgi, Pembroke',
    'Welsh Sheepdog',
    'Welsh Springer Spaniel',
    'Welsh Terrier',
    'West Highland White Terrier',
    'West Siberian Laika',
    'Westphalian Dachsbracke',
    'Wetterhoun',
    'Whippet',
    'White Shepherd',
    'Wirehaired Pointing Griffon',
    'Wirehaired Vizsla',
    'Xiasi Dog',
    'Yorkshire Terrier',
  ],
  "disabledIndexes": [],
};

const puppiesBtn = document.querySelector('#puppies')
puppiesBtn.addEventListener('click', () => {
  const state = fb.exportState();
  const newState = state.concat([puppiesDropdown]);
  fb.importState(newState);
});
