function newRoom() {

    // Name 

    var roomNames = ['Library', 'Crypt', 'Tomb', 'Guard room'];
    var roomName = roomNames[Math.floor(Math.random()*roomNames.length)];
    document.getElementById("changeRoomName").innerHTML = roomName;

    // Adjectives 

    var smells = ['putrid smell', 'sweet scent', 'burnt smell'];
    var smell = smells[Math.floor(Math.random()*smells.length)];

    var sounds = ['eerie silence', 'knocking from the walls', 'sounds of violin', 'muffled chatter'];
    var sound = sounds[Math.floor(Math.random()*sounds.length)];

    var smells2 = ['putrid smell', 'sweet scent', 'burnt smell'];
    var smell2 = smells2[Math.floor(Math.random()*smells2.length)];

    var sounds2 = ['eerie silence', 'knocking from the walls', 'sounds of violin', 'muffled chatter'];
    var sound2 = sounds[Math.floor(Math.random()*sounds2.length)];

    var doors = ['wooden door'];
    var door = doors[Math.floor(Math.random()*doors.length)];

    document.getElementById("changeAdjectives1").innerHTML = smell + ', ' + sound + '.';
    document.getElementById("changeAdjectives2").innerHTML = door + ', ' + smell2 + ', ' + sound2 + '.';

    // POIs 

    var roomDressings = ['Books on the shelf - test Presence DR14 to find a sacred scroll.', 'An open grave in the middle of the room.', 'Four lit torches light the room.', 'A cluttered table with very old food on it. Very old food.'];
    var roomDressing = roomDressings[Math.floor(Math.random()*roomDressings.length)];
    document.getElementById("changeRoomDressing").innerHTML = roomDressing;

    // Directions

    var directions = ["north", "south", "east", "west"];
    var direction = directions[Math.floor(Math.random()*directions.length)];
    document.getElementById("changeDirection").innerHTML = direction + ':';

    
}
function moveFocus() {
    document.getElementById("changeRoomName").focus();
}

moveFocus();
newRoom();

