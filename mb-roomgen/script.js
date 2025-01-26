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
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'corridor',
    'wooden door',
    'wooden door',
    'wooden door',
    'wooden door',
    'wooden door',
    'wooden door',
    'wooden door',
    'wooden door',
    'stone door',
    'stone door',
    'stone door',
    'stone door',
    'steel door',
    'bone door',
    'bronze door',
    'silver door',
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
    //TODO
    'Books on the shelf - test Presence DR14 to find a sacred scroll.', 
    'An open grave in the middle of the room.', 
    'Four lit torches light the room.', 
    'A cluttered table with very old food on it. Very old food.'
];
const MONSTERS = [
    //TODO
    {monster: "Blood-Drenched Skeleton", hp: "7", morale: "8", armourname: "No armour", armourvalue: "", weaponname: "Shortsword", weaponvalue: "d4" , special: "Skulks about, impossibly soundless. Attacks by surprise. Can mimic voices to lure victims, but can only repeat what it has heard. Attacks on them with piercing weapons are DR14. Any strike doing 5 or more damage destroys the skeleton completely."},
    {monster: "Blood-Drenched Skeleton", hp: "7", morale: "8", armourname: "No armour", armourvalue: "", weaponname: "Knife", weaponvalue: "d4" , special: "Skulks about, impossibly soundless. Attacks by surprise. Can mimic voices to lure victims, but can only repeat what it has heard. Attacks on them with piercing weapons are DR14. Any strike doing 5 or more damage destroys the skeleton completely."},
    {monster: "Blood-Drenched Skeleton", hp: "7", morale: "8", armourname: "No armour", armourvalue: "", weaponname: "Bony knuckles", weaponvalue: "d2" , special: "Skulks about, impossibly soundless. Attacks by surprise. Can mimic voices to lure victims, but can only repeat what it has heard. Attacks on them with piercing weapons are DR14. Any strike doing 5 or more damage destroys the skeleton completely."}
];
const TREASURES_EQUIPMENT = [
    'Backpack, roll Something Valuable for contents',
    'Bear trap',
    'Blanket',
    'Caltrops',
    'Chalk',
    'Chewing tobacco',
    'Crowbar',
    'Exquisite perfume',
    'Firesteel',
    'Grappling hook',
    'Hammer',
    'Heavy chain, d6 × 5 feet',
    'Iron nails. d10',
    'Ladder',
    'Large iron hook',
    'Lockpicks',
    'Magnesium strip',
    'Manacles',
    'Mattress',
    'Metal file',
    'Mirror',
    'Muzzle',
    'Oil lamp',
    'Rope, d6 × 10 feet',
    'Small wagon',
    'Tent',
    'Toolbox, 10 nails, hammer, small saw, tongs',
    'Sack, roll Something Valuable for contents',
    'Scissors',
    'Sharp needle',
];
const TREASURES_MUNDANE = [
    'Perfume, 25s',
    'd4 Bullion, 25s each',
    'd10 Gold Coin, 10s each',
    'd6 Gemstones, 30s each',
    'd4 Diamonds, 50s each',
    'd4 Jewelry, 50s each',
    'd3 Artwork, 100s each',
    'd2 Book, Journal, or Map, 50s each',
    'd6 Spices. Tea, or Coffee, 30s each',
    'd4 Fine Clothing, 100s each',
]
const TREASURES_SUPPLIES = [
    'Rations, d4 per player',
    'Rations, d4 per player',
    'Rations, d4 per player',
    'Rations, d4 per player',
    'Arrows, d6 per player',
    'Arrows, d6 per player',
    'Bolts, d6 per player',
    'Bolts, d6 per player',
    'Torches, 1 per player',
    'Torches, 1 per player',
    'Oil, 1 per player',
    'Healing Kit, 1d2 uses per player',
    'Healing Kit, 1d2 uses per player',
    'Bombs, 1d3',
    'Bombs, 1d3',
    'Bombs, 1d3',
    'Red Poison, 1d3',
    'Red Poison, 1d3',
    'Black Poison, 1d2',
    'Life Elixer, 1d4'
]
const TREASURES_ARMOUR = [
    'Shield',
    'Shield',
    'Shield',
    'Shield',
    'Tier 1',
    'Tier 1',
    'Tier 1',
    'Tier 2',
    'Tier 2',
    'Tier 3',
]
const TREASURES_DEBRIS = [
    '3d10 silver',
    'An unclean scroll',
    'A sacred scroll',
]
const TREASURES_OCCULT = [
    'Ash-grey ring, a finger-width wide. All that passes through is obliterated.',
    'The keening music of this small, vile flute animates a fetus-sized meat golem in a nearby corpse. HP 5 Morale - No armor Bite d4, immune to Powers.',
    'A note explains: one taste from this Famine Spoon means death from slow starvation.',
    'The image of a being in this malevolently-accurate mirror shows only the shameful truth of their soul.',
    'Vampiric phurba. Heals you as it harms your target (d3), but beware: after stealing a total of 6 HP, test Presence DR14 or become addicted—you must then test Presence DR12 daily. Fail and you must stab someone with the knife before next sunrise. Or wither to ash and die as the sun rises.',
    'A black pearl. If dropped in darkness it rolls towards the nearest exit to day.',
    'This torch burns for an immortal hour. Hold it and live. You can lose limbs and enter negative HP but won’t die unless you drop the torch or it burns out.',
    'Silver bird cage slays whatever is placed behind its bars, slowly, over one long night. That which is killed reanimates twice as strong, as a raging uncontrollable undead.',
    'Black Crown of the Crippled King. Wearing this crooks your body as you become aware that you and every creature within 100 yards gain +10 to your rolls but your maximum HP is halved. Rolls modified to go above 20 count as crits. The worn crown can only be removed in the pale light of a full moon.',
    'Anyone wearing this ancient blindfold becomes invisible to those who breathe though the undead attack them obsessively and nearby corpses awaken in moaning, unholy wrath.',
]
const TREASURES_CORPSE = [
    'The remains of something worthless crumbles in your hands.',
    'The remains of something worthless crumbles in your hands.',
    'The remains of something worthless crumbles in your hands.',
    'The remains of something worthless crumbles in your hands.',
    'The remains of something worthless crumbles in your hands.',
    'The remains of something worthless crumbles in your hands.',
    'Pot filled with extremely potent itching ointment.',
    'Necklace of human teeth.',
    'Bag of angry, venomous moths. Test Toughness dr6 or die.',
    'Pocket full of broken glass, pc takes d2 damage.',
    'Mad manifesto. If read, test Presence dr12 or lose 1 Presence permanently from confusion.',
    'Key to nearby locked door. Stolen.',
    'Map to a weak but wealthy family’s house.',
    'A hopeless amount of spiders.',
    'Metal cylinder with gunpowder and fuse. Roll a d6: 1–2 you lose a hand. 3–6 3d10 damage wherever it lands. ',
    'Known and liked/despised witch-hunter’s face. Flayed.',
    'Note with your names. One is crossed out.',
    'Tortured pixie with torn-off wings and gouged out eyes. ',
    'Map to a place that cannot possibly exist.',
    'Unmarked bottle with a liquid that shifts between red and green.',
    'Bond. A local potentate owes the holder a sizable amount.',
    'Death mask of one of the pcs.',
    'The ‘Water of Life.’ Heals d8. Test Toughness dr10 or go blind. Highly alcoholic.',
    'There was something very wrong with this corpse. Hands covered with something lukewarm, brown and acidic. Take d2+1 damage and smell terrible for d4 days.',
    'Black Kergüs dagger. 2d4 damage.',
    'Labelled poison bottle. Test Toughness dr12 or lower random ability by d4. The ability can be increased when your character is improved.',
    'Scalp with long black hair.',
    'Golden ball with an invisible seam, twists open.',
    'Bloodstained knuckle-duster.',
    'Two weighted dice.',
    '61 silver',
    '62 silver',
    '63 silver',
    '64 silver',
    '65 silver',
    '66 silver',
]
const TRAP_TRIGGERS = [
    'not leaving the room in time.',
    'stepping on the wrong floor tile.',
    'touching a damned doorknob.',
    'pushing an alluring button.',
    'turning the key.',
    'discussing a foul inscription.',
    'stealing a prized item.',
    'talking too loudly.',
    'taking a torch.',
    'opening a box/sarcophagus.',
    'treading on the trip wire.',
    'rattling your weapons.',
    'drinking Elixir Vitalis in a cursed room.',
    'lighting a lantern where gloom reigns.'
];
const TRAP_EFFECTS = [
    {effect:'Shimmering, bile-yellow poisonous gas.', description:'Test Toughness DR18 or die. Test every minute.'},
    {effect:'Poisonous darts shoot from wall-holes.', description:'D2 damage. Test Toughness DR16 or die.'},
    {effect:'Giant marble falls from the ceiling or from a ramp in an adjacent room.', description:'Test Agility DR14 or die.'},
    {effect:'Cruel creature is released from a hidden chamber.', description:'Varying.'},
    {effect:'Sharpened pole hits you from the side.', description:'Fate decides. Roll a die: an odd result is d20 damage'},
    {effect:'Falling net. Something approaches.', description:'Presence DR16 to escape.'},
    {effect:'A Power affects you.', description:'Varying.'},
    {effect:'A pit opens under your feet.', description:'1-in-6 chance of impalement (instant death). Otherwise, d6 damage per 10’.'},
    {effect:'Doors lock and water fills the room.', description:'Better find a way out.'},
    {effect:'Alarm goes off; something awakens.', description:'Varying.'},
    {effect:'The walls are closing in.', description:'Better find a way out. 1-in-6 chance that the walls get stuck… if you’re lucky.'},
    {effect:'Burning oil pouring from a ceiling cauldron.', description:'Fate decides. Roll a die: an odd result is d12 damage.'},
];
const TRAP_BUILDERS = [
    'A slow, calculating grotesque.',
    'An death-sentenced Uguth mine-thrall. (Uguth: A huge, no ... ho-ha-MEGA-catacomb in Bergen Chrypt.)', 
    'A simple goblin.',
    'A forgotten berserker king.',
    'A deranged shadow being.',
    'A bitter necromancer.',
    'A dying troll mourning its mother.',
    'A spiteful child from a torched village.', 
    'A slumbering, nebulous daemon.',
    'A catacomb creatorʼs executione',
    'An inveterate nail collecto',
    'A cunning, crafty skeleton.',
    'A bewildered wickhe',
    'A sickly, blind demigod',
    'A group of terrified goons.',
    'A mindless death-cultis',
    'A witch lost in Labyrinth Lecht. (A mental labyrinth occasionally brought to semi-physical form by a creature’s prolonged pondering or mourning. Real enough for its traps and tricks to actually harm the creature.)',
    'A bored, teeth-counting hermit.',
    'A sadistic graveyard architect.',
    'An anxious undead doll.',
];
const TRICKS = [
];
const ITEMS = [
    '60 silver',
    'a femur (d4 damage)'
];
const DIRECTIONS = ["north", "south", "east", "west"];

function d(dice) { 
    var roll = Math.floor(Math.random() * (dice - 1 + 1) + 1);
    return roll;
  }

function roomComposition() {
    
}

function randomEntryFrom(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function createRoom() {
    // Name 
    const roomName = randomEntryFrom(ROOM_NAMES);
    document.getElementById("room-name").innerHTML = roomName;
    document.title = roomName + ' - nameless, dark places';

    // Adjectives 
    //const smell = randomEntryFrom(SMELLS);
    //const sound = randomEntryFrom(SOUNDS);
    //document.getElementById("room-adjectives").innerHTML = smell + ', ' + sound + '.';

    // POIs 
    const roomDressing = randomEntryFrom(ROOM_DRESSINGS);
    document.getElementById("room-adjectives").innerHTML = roomDressing;

    // Composition
    const roomMonster = randomEntryFrom(MONSTERS)
    const roomTrapTrigger = randomEntryFrom(TRAP_TRIGGERS);
    const roomTrapEffect = randomEntryFrom(TRAP_EFFECTS);
    const roomTrapBuilder = randomEntryFrom(TRAP_BUILDERS);

    // Treasure generator
    let roomTreasure;
    let roomTreasureRollOne = d(6);
    let roomTreasureRollTwo = d(6);
    let roomTreasureRoll = Math.floor(roomTreasureRollOne + roomTreasureRollTwo);

    let weaponTreasure;
    let weaponTreasureRollOne = d(8);
    let weaponTreasureRollTwo = d(8);
    let weaponTreasureRoll = Math.floor(weaponTreasureRollOne + weaponTreasureRollTwo);
    switch (weaponTreasureRoll) {
        case 2: weaponTreasure  = "Whip"; break;
        case 3: weaponTreasure  = "Crossbow"; break;
        case 4: weaponTreasure  = "Bow"; break;
        case 5: weaponTreasure  = "Club"; break;
        case 6: weaponTreasure  = "Mace"; break;
        case 7: weaponTreasure  = "Sling"; break;
        case 8: weaponTreasure  = "Shortbow"; break;
        case 9: weaponTreasure  = "Knife"; break;
        case 10: weaponTreasure = "Staff"; break;
        case 11: weaponTreasure = "Shortsword"; break;
        case 12: weaponTreasure = "Sword"; break;
        case 13: weaponTreasure = "Handaxe"; break;
        case 14: weaponTreasure = "Battleaxe"; break;
        case 15: weaponTreasure = "Flail"; break;
        case 16: weaponTreasure = "Zweihänder"; break;                  
    }

    switch (roomTreasureRoll) {
        case 2:
            // Magical treasure
            let magicalTreasureRollOne = d(4);
            let magicalTreasureRollTwo = d(4);
            let magicalTreasureRoll = Math.floor(magicalTreasureRollOne + magicalTreasureRollTwo);
            switch (magicalTreasureRoll) {
                case 2: 
                    roomTreasure = "Magical Light Source"; 
                    break;
                case 3: 
                    roomTreasure = "Magical Armour, " + randomEntryFrom(TREASURES_ARMOUR); 
                    break;
                case 4: 
                    roomTreasure = "Magical Shield"; 
                    break;
                case 5: 
                    roomTreasure = "A random scroll"; 
                    break;
                case 6: 
                    roomTreasure = "1d6 life elixir"; 
                    break;
                case 7: 
                    roomTreasure = "Magical " + weaponTreasure; 
                    break;
                case 7: 
                    roomTreasure = "Magical clothing"; 
                    break;
            }
            break;
        case 3:  roomTreasure = randomEntryFrom(TREASURES_MUNDANE); break;
        case 4:  roomTreasure = randomEntryFrom(TREASURES_DEBRIS); break;
        case 5:  roomTreasure = randomEntryFrom(TREASURES_EQUIPMENT); break;
        case 6:  roomTreasure = randomEntryFrom(TREASURES_SUPPLIES); break;
        case 7:  roomTreasure = "3d10 silver"; break;
        case 8:  roomTreasure = randomEntryFrom(TREASURES_CORPSE); break;
        case 9:  roomTreasure = "A religious or arcane trinket. +1 Omen"; break;
        case 10: roomTreasure = randomEntryFrom(TREASURES_OCCULT); break;
        case 11: roomTreasure = randomEntryFrom(TREASURES_ARMOUR); break;
        case 12: roomTreasure = weaponTreasure; break;
    }

    let roomCompositionRollOne = d(6);
    let roomCompositionRollTwo = d(6);
    let roomCompositionRoll = Math.floor(roomCompositionRollOne + roomCompositionRollTwo);
    console.log([roomCompositionRollOne, roomCompositionRollTwo, roomCompositionRoll]);

    switch (roomCompositionRoll) {
        case 2:
            // Treasure guarded by trap
            document.getElementById("room-content").innerHTML = "You have found treasure: " + roomTreasure + "<br /><br /><b>Guarded by a trap that is triggered by: </b>" + roomTrapTrigger + " <br /> <b>" + roomTrapEffect.effect + "</b> " + roomTrapEffect.description + "<br> <b>Who or what built the trap?</b> " + roomTrapBuilder;
            break;
        case 3:
            // Trick or trap
            document.getElementById("room-content").innerHTML = "<b> You have triggered the trap by </b>" + roomTrapTrigger + " <br /> <b>" + roomTrapEffect.effect + "</b> " + roomTrapEffect.description + "<br> <b>Who or what built the trap?</b> " + roomTrapBuilder;
            break;
        case 4:
            // Treasure guarded by monster
            document.getElementById("room-content").innerHTML = "You have found treasure: " + roomTreasure + "<br /><br />Guarded by " + "<b>" + roomMonster.monster + "</b> <br /> <b>HP </b>" + roomMonster.hp + ",   <b>Morale </b>" + roomMonster.morale + ", <br /> <b>" + roomMonster.armourname + " </b>" + roomMonster.armourvalue + "<br /> <b>" + roomMonster.weaponname + " </b>" + roomMonster.weaponvalue + "<br /> <b>Special: </b>" + roomMonster.special;
            break;
        case 5: 
            // Monster
            document.getElementById("room-content").innerHTML = "<b>" + roomMonster.monster + "</b> <br /> <b>HP </b>" + roomMonster.hp + ",   <b>Morale </b>" + roomMonster.morale + ", <br /> <b>" + roomMonster.armourname + " </b>" + roomMonster.armourvalue + "<br /> <b>" + roomMonster.weaponname + " </b>" + roomMonster.weaponvalue + "<br /> <b>Special: </b>" + roomMonster.special;
            break;
        case 6: case 7: case 8:
            // Empty
            document.getElementById("room-content").innerHTML = "Empty room";
            break;
        case 9:
            // Monster
            document.getElementById("room-content").innerHTML = "<b>" + roomMonster.monster + "</b> <br /> <b>HP </b>" + roomMonster.hp + ",   <b>Morale </b>" + roomMonster.morale + ", <br /> <b>" + roomMonster.armourname + " </b>" + roomMonster.armourvalue + "<br /> <b>" + roomMonster.weaponname + " </b>" + roomMonster.weaponvalue + "<br /> <b>Special: </b>" + roomMonster.special;
            break;
        case 10:
            // Treasure guarded by monster
            document.getElementById("room-content").innerHTML = "You have found treasure: " + roomTreasure + "<br /><br />Guarded by " + "<b>" + roomMonster.monster + "</b> <br /> <b>HP </b>" + roomMonster.hp + ",   <b>Morale </b>" + roomMonster.morale + ", <br /> <b>" + roomMonster.armourname + " </b>" + roomMonster.armourvalue + "<br /> <b>" + roomMonster.weaponname + " </b>" + roomMonster.weaponvalue + "<br /> <b>Special: </b>" + roomMonster.special;
            break;
        case 11: case 12:
            // Unguarded treasure
            document.getElementById("room-content").innerHTML = "You have found treasure: " + roomTreasure
            break;
        default:
          console.log('default');
      }
    


    // Exits


    exits = d(4);
    document.getElementById("room-exits").innerHTML = "";
    
    /* for (let i = 0; i < exits; i++) {
        document.getElementById("room-exits").innerHTML += '<li><span class="small-caps door-direction">:</span> <span class="clue-adjectives"></span></li>';
        document.getElementsByClassName("clue-adjectives").innerHTML = doorMaterial + ' door, ' + doorAdjective + ' - ' + soundClue + ', ' + smellClue + '.';
        document.getElementsByClassName("door-direction").innerHTML = direction + ':';
    }; */

    for (let i = 0; i < exits; i++) {

    const direction = randomEntryFrom(DIRECTIONS);
    const smellClue = randomEntryFrom(SMELL_CLUES);
    const soundClue = randomEntryFrom(SOUND_CLUES);
    const doorMaterial = randomEntryFrom(DOOR_MATERIALS);
    const doorAdjective = randomEntryFrom(DOOR_ADJECTIVES);

    const isCorridor = doorMaterial.toLowerCase() === 'corridor'; // case-insensitive check

    const soundChance = Math.random() <= 0.1;
    const smellChance = Math.random() <= 0.1;

    const soundText = soundChance ? soundClue : '';
    const smellText = smellChance ? smellClue : '';
    const soundDivider = soundText ? ', ' : '';
    const smellDivider = smellText ? ', ' : '';

    // If it's a corridor, handle it differently (example: no adjectives or other custom logic)
    let exitContent;
    if (isCorridor) {
        exitContent = ` a corridor${soundDivider}${soundText}${smellText ? ', ' + smellText : ''}.`;
    } else {
        exitContent = `${doorMaterial}, ${doorAdjective}${soundDivider}${soundText}${smellDivider}${smellText}.`;
    }

    // Create the list item and its contents
    const exitItem = document.createElement('li');

    const doorDirectionSpan = document.createElement('span');
    doorDirectionSpan.classList.add('small-caps', 'door-direction');
    doorDirectionSpan.innerHTML = direction + ':';

    const clueAdjectivesSpan = document.createElement('span');
    clueAdjectivesSpan.classList.add('clue-adjectives');
    clueAdjectivesSpan.innerHTML = exitContent;

    // Append the spans to the list item
    exitItem.appendChild(doorDirectionSpan);
    exitItem.appendChild(clueAdjectivesSpan);

    // Append the list item to the room-exits container
    document.getElementById("room-exits").appendChild(exitItem);
    }
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

// init and start

function init() {
    createRoom();
    checkTheme();
}

function newRoom() {
    createRoom();
    moveFocus();
};