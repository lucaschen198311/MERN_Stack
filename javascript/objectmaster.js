const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    

//an array of pokémon objects where the id is evenly divisible by 3
const pokeId_3 = pokémon.filter(el=> el.id%3 == 0);
console.log(pokeId_3);

//an array of pokémon objects that are "fire" type
const poke_fire = pokémon.filter(el=>el.types.includes('fire'));
console.log(poke_fire);

//an array of pokémon objects that have more than one type
const pokeMoreTypes = pokémon.filter(el=>el.types.length>=2) ;
console.log(pokeMoreTypes);

//an array with just the names of the pokémon
const pokeNames = pokémon.map(el=>el.name);
console.log(pokeNames);

//an array with just the names of pokémon with an id greater than 99
const pokeIdMoreThan99 =  pokémon.filter(el=>el.id>99).map(item=>item.name);
console.log(pokeIdMoreThan99);

//an array with just the names of the pokémon whose only type is poison
const pokePoison = pokémon.filter(el=>el.types.length==1&&el.types[0]=='poison').map(item=>item.name);
console.log(pokePoison);

//an array containing just the first type of all the pokémon whose second type is "flying"
const pokeFS = pokémon.filter(el=>el.types[1]=='flying').map(item=>item.types[0]);
console.log(pokeFS); 

//a count of the number of pokémon that are "normal" type
const pokeCount = pokémon.filter(el=>el.types.includes('normal')).length;
console.log(pokeCount);