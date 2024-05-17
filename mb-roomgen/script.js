const ROOM_NAMES = ['Library', 'Crypt', 'Tomb', 'Guard room'];
const SMELLS = ['putrid smell', 'sweet scent', 'burnt smell'];
const SOUNDS = ['eerie silence', 'knocking from the walls', 'sounds of violin', 'muffled chatter'];
const DOORS = ['wooden door'];
const SMELL_CLUES = ['putrid smell', 'sweet scent', 'burnt smell'];
const SOUND_CLUES = ['eerie silence', 'knocking from the walls', 'sounds of violin', 'muffled chatter'];
const ROOM_DRESSINGS = ['Books on the shelf - test Presence DR14 to find a sacred scroll.', 'An open grave in the middle of the room.', 'Four lit torches light the room.', 'A cluttered table with very old food on it. Very old food.'];
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
    const door = randomEntryFrom(DOORS);
    document.getElementById("room-adjectives").innerHTML = smell + ', ' + sound + '.';
    document.getElementById("clue-adjectives").innerHTML = door + ', ' + soundClue + ', ' + smellClue + '.';

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

function checkTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (
        currentTheme === 'light'){ document.documentElement.setAttribute("data-theme", "light"); 
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