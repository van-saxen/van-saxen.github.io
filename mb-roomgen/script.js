const ROOM_NAMES = [
    // used entries from Solitary Defilement
    'Library', 
    'Crypt', 
    'Grave', 
    'Prison', 
    'Cell', 
    'Storage room', 
    'Kitchen', 
    'Cavern', 
    'Passage', 
    'Corridor', 
    'Stairwell', 
    'Pit', 
    'Chamber', 
    'Lair', 
    'Dwelling', 
    'Shrine', 
    'Temple', 
    'Workshop', 
    'Forge', 
    'Catacomb', 
    'Tomb', 
    'Guard room'
];
const SMELLS = [
    // used entries from Mythic 2e
    'acrid smell', 
    'smell of an animal', 
    'smell of animals', 
    'aromatic scent', 
    'artificial smell', 
    'chemical smell', 
    'comforting, nostalgic smell', 
    'smell of cooked meat', 
    'smells of cooking', 
    'dirty smells', 
    'very dry air', 
    'humid air', 
    'still air', 
    'familiar smell', 
    'fishy smell', 
    'floral smell', 
    'herbal smell', 
    'fruity smell', 
    'heavy air', 
    'intoxicating air', 
    'medicinal smell', 
    'metallic smell', 
    'mossy smell', 
    'musky smell', 
    'musty air', 
    'nauseating smell', 
    'weirdly odourless air', 
    'perfumed scent', 
    'very pleasant scent', 
    'putrid smell', 
    'smell of rot', 
    'smell of smoke', 
    'stale air', 
    'stinging smell', 
    'sulphuric smell', 
    'warm air', 
    'cold air', 
    'sweet scent', 
    'burnt smell'
];
const SOUNDS = [
    // used entries from Mythic 2e
    'eerie silence', 
    'sounds of animals', 
    'a static noise - getting louder', 
    'toll of a bell', 
    'sound of burning', 
    'constant sounds of dripping', 
    'echoes', 
    'sounds of footsteps', 
    'tapping from the walls'
];
const DOOR_MATERIALS = [
    // used entries from shieldice's door generator
    'wooden',
    'wooden',
    'wooden',
    'wooden',
    'wooden',
    'stone',
    'stone',
    'stone',
    'steel',
    'bone',
    'bronze',
    'silver'
];
const DOOR_ADJECTIVES = [
    // used entries from shieldice's door generator
    'wide open',
    'ajar',
    'closed',
    'locked',
    'barricaded',
    'stuck',
    'broken hinges',
    'creaky',
    'rotten',
    'splintered',
    'wedged',
    'blocked',
    'unbolted',
    'sealed',
];
const SMELL_CLUES = [
    // used entries from Mythic 2e
    'acrid smell', 
    'smell of an animal', 
    'smell of animals', 
    'aromatic scent', 
    'artificial smell', 
    'chemical smell', 
    'comforting, nostalgic smell', 
    'smell of cooked meat', 
    'smells of cooking', 
    'dirty smells', 
    'moist smell', 
    'familiar smell', 
    'fishy smell', 
    'floral smell', 
    'herbal smell', 
    'fruity smell', 
    'intoxicating smell', 
    'medicinal smell', 
    'metallic smell', 
    'mossy smell', 
    'musky smell', 
    'musty smell', 
    'nauseating smell', 
    'perfumed scent', 
    'very pleasant scent', 
    'smell of rot', 
    'smell of smoke', 
    'stinging smell', 
    'sulphuric smell', 
    'warm air', 
    'cold air', 
    'putrid smell', 
    'sweet scent', 
    'burnt smell'
];
const SOUND_CLUES = [
    // used entries from Mythic 2e
    'eerie silence', 
    'knocking on the door', 
    'loud banging on the door', 
    'sounds of violin', 
    'noise of conflict', 
    'sounds of animals', 
    'a static noise - getting louder', 
    'toll of a bell', 
    'sound of burning', 
    'constant sounds of dripping', 
    'echoes', 
    'sounds of footsteps', 
    'muffled chatter'
];
const ROOM_DRESSINGS = [
    'Books on the shelf - test Presence DR14 to find a sacred scroll.', 
    'An open grave in the middle of the room.', 
    'Four lit torches light the room.', 
    'A cluttered table with very old food on it. Very old food.'
];
const ITEMS = [
    '60 silver',
    'a femur (d4 damage)'
];
const DIRECTIONS = ["north", "south", "east", "west"];

function randomEntryFrom(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function createRoom() {
    // Name 
    const roomName = randomEntryFrom(ROOM_NAMES);
    document.getElementById("room-name").innerHTML = roomName;
    document.title = roomName + ' - nameless, dark places';

    // Adjectives 
    const smell = randomEntryFrom(SMELLS);
    const sound = randomEntryFrom(SOUNDS);
    const smellClue = randomEntryFrom(SMELL_CLUES);
    const soundClue = randomEntryFrom(SOUND_CLUES);
    const doorMaterial = randomEntryFrom(DOOR_MATERIALS);
    const doorAdjective = randomEntryFrom(DOOR_ADJECTIVES);
    document.getElementById("room-adjectives").innerHTML = smell + ', ' + sound + '.';
    document.getElementById("clue-adjectives").innerHTML = doorMaterial + ' door, ' + doorAdjective + ' - ' + soundClue + ', ' + smellClue + '.';

    // POIs 
    const roomDressing = randomEntryFrom(ROOM_DRESSINGS);
    document.getElementById("room-dressing").innerHTML = roomDressing;

    // Directions
    const direction = randomEntryFrom(DIRECTIONS);
    document.getElementById("door-direction").innerHTML = direction + ':';
}
function moveFocus() {
    document.getElementById("room-name").focus();
}

// Dark mode... needs refactoring quite bad

function checkTheme() {
    const currentTheme = localStorage.getItem('theme');
    if ( currentTheme === 'light' ) { 
        document.documentElement.setAttribute("data-theme", "light"); 
    } else { 
        document.documentElement.setAttribute("data-theme", "dark"); 
    }
}

function switchTheme() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light'){
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem('theme', 'light');
    }
};

function init() {
    createRoom();
    checkTheme();
}

function newRoom() {
    createRoom();
    moveFocus();
};