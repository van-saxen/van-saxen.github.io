const NAMES = [
    'Narseth', 'Moseth', 'Nelvys', 'To', 'Shabai', 'Miala', 'Dranar', 'Varalin', 'Zunaral', 'Neloi', 'Kaya', 'Sha', 'Renaral', 'Tolaroc', 'Ralinni', 'Kabaras', 'Tursar', 'Bailyn', 'Larvo', 'Vatuhr', 'Fyllia', 'Etenir', 'Kyllion', 'Lageon', 'Lunox', 'Crodex', 'Servarus', 'Disoreon', 'Varin', 'Alnassor', 'Mirnoxis', 'Baizor', 'Relen' 
];

const ARCHETYPES = [
   {
        name: 'Fixer', 
        description: 'As a Fixer, you have a way of procuring things others can’t get their hands on, from valuable objects to well-guarded secrets.',
        feature: ['Swift', 'Expertise', 'Backstab', 'Network', 'Supplies', 'Many pockets', 'Steely resolve *', 'Gold-tongued *', 'Healing touch *', 'Teamleader *'],
        hasspell: false
    }, 
    {
        name: 'Vagabond', 
        description: 'As a Vagabond, you know how to take care of yourself in the harsh world outside the city walls, and how to deal with the dangers that lurk there.',
        feature: ['Maneuvers'],
        hasspell: false
        
    },
    {
        name: 'Warlock', 
        description: 'As a Warlock, you manifest powerful spells by inhaling elder ink and calling upon spirits from the Realm Beyond.', 
        feature: ['Spell names'],
        hasspell: true
    }];

const BACKGROUNDS = [
    {
        name: 'Archivist', 
        description: 'You spent years of your life inscribing other people’s tales in the glimmering slabs of the Electrum Archive. Did you leave of your own accord or were you forced to leave the Shattered Tower?', 
        talents: 'History, Culture, Geography', 
        languages: 'Trade Tongue, Lahmaic script',
        agilityBonus: 0,
        archiveBonus: 2,
        bodyBonus: 1,
        maskBonus: 0,
        spiritBonus: 0,
        hpBonus: 0
    }, 
    {
        name: 'Houseborn', 
        description: 'Born into a minor Merchant House, you’ve been trained since birth to play both markets and people. Are you the last of a dying House or one of many kin with no other way to leave your mark on your House’s legacy?', 
        talents: 'Influence, Politics, Trade', 
        languages: 'Trade Tongue, Lahmaic script',
        agilityBonus: 1,
        archiveBonus: 0,
        bodyBonus: 0,
        maskBonus: 2,
        spiritBonus: 0,
        hpBonus: 0
    }, 
    {
        name: 'Muscle', 
        description: 'Whether you were a prize fighter, a hired thug, or a prestigious house guard, you know how to hold your own in a skirmish. Did you get tired of fighting or are you just looking for a new challenge?', 
        talents: 'Intimidation, Brute Force, Tactics', 
        languages: 'Trade Tongue, Riftspeak',
        agilityBonus: 0,
        archiveBonus: 0,
        bodyBonus: 1,
        maskBonus: 0,
        spiritBonus: 0,
        hpBonus: 2
    },
    {
        name: 'Nomad', 
        description: 'You traveled the wilds with your tribe, away from the meddling of the Houses. Did you set out on a task given to you by your tribe’s elders or were you banished from their tents and left to wander on your own?', 
        talents: 'Healing, Survival, Herbalism', 
        languages: 'Trade Tongue, an additional language of your choice',
        agilityBonus: 1,
        archiveBonus: 1,
        bodyBonus: 0,
        maskBonus: 0,
        spiritBonus: 1,
        hpBonus: 0
    },
    {
        name: 'Cultist', 
        description: 'You are privy to obscure mysteries not known to outsiders. Did you break with your brothers and sisters or do you travel Orn to further your cult’s tenets still?', 
        talents: 'Religion, Spirits, Rumors', 
        languages: 'Trade Tongue, Nollish',
        agilityBonus: 0,
        archiveBonus: 0,
        bodyBonus: 0,
        maskBonus: 1,
        spiritBonus: 2,
        hpBonus: 0
    },
    {
        name: 'Performer', 
        description: 'You were part of a traveling troupe of actors, artists and acrobats, showing off your skills to cheering crowds. Are you in search of inspiration for your next act or for an audience more appreciative of your talents?', 
        talents: 'Art, Performance, Acrobatics', 
        languages: 'Trade Tongue',
        agilityBonus: 2,
        archiveBonus: 0,
        bodyBonus: 0,
        maskBonus: 1,
        spiritBonus: 0,
        hpBonus: 0
    },
    {
        name: 'Scavenger', 
        description: 'You are familiar with the dangers lurking in elderships and how to get your hands on the ink tech hidden within. Are you in it for the ink or to sate your own curiosity?', 
        talents: 'Ink Tech, Stealth, Traps', 
        languages: 'Trade Tongue, Riftspeak',
        agilityBonus: 1,
        archiveBonus: 1,
        bodyBonus: 0,
        maskBonus: 1,
        spiritBonus: 0,
        hpBonus: 0
    },
    {
        name: 'Worker', 
        description: 'A life of toiling in iron mines, working the lumenpod fields or building the strongholds and halls of House nobles has hardened your body and spirit. Did you take pride in your work or are you happy to have left it behind?', 
        talents: 'Endurance, Animals, Repair', 
        languages: 'Trade Tongue',
        agilityBonus: 0,
        archiveBonus: 0,
        bodyBonus: 2,
        maskBonus: 0,
        spiritBonus: 1,
        hpBonus: 0
    },
    {
        name: 'Assassin *', 
        description: 'You were unseen death, a murderer working for whichever House paid you the most. Did a job gone wrong force you to adopt a new identity or are you finally done being a pawn in someone else’s game?', 
        talents: 'Poisons, Politics, Stealth', 
        languages: 'Trade Tongue, Riftspeak',
        agilityBonus: 1,
        archiveBonus: 0,
        bodyBonus: 0,
        maskBonus: 1,
        spiritBonus: 1,
        hpBonus: 0
    },
    {
        name: 'Courtesan *', 
        description: 'Your work as a member of the House of Delights has made you intimately familiar with the human heart. Do you seek to forget what you’ve glimpsed or are you merely looking for new ways to use this understanding?', 
        talents: 'Persuasion, Savoir Faire, Rumors', 
        languages: 'Trade Tongue, and either Riftspeak or Lahmaic Script',
        agilityBonus: 0,
        archiveBonus: 0,
        bodyBonus: 0,
        maskBonus: 2,
        spiritBonus: 1,
        hpBonus: 0
    },
    {
        name: 'Guild Artisan *', 
        description: 'Years of faceting glittering gems, sculpting statues, or weaving intricate patterns has sharpened your hands and eyes. Were you kicked out after ruining a job for a high-profile patron or do you still have friends within the guild?', 
        talents: 'Art, Repair, a talent of your choice related to your craft', 
        languages: 'Trade Tongue, Lahmaic Script',
        agilityBonus: 2,
        archiveBonus: 1,
        bodyBonus: 0,
        maskBonus: 0,
        spiritBonus: 0,
        hpBonus: 0
    },
    {
        name: 'Pit Fighter *', 
        description: 'You are no stranger to the blood-stained dance floor of the arena. Did you become a fighter to make a name for yourself or were you forced to entertain a bloodthirsty crowd to pay off a debt?', 
        talents: 'Performance, Athletics, Healing', 
        languages: 'Trade Tongue',
        agilityBonus: 1,
        archiveBonus: 0,
        bodyBonus: 1,
        maskBonus: 0,
        spiritBonus: 1,
        hpBonus: 0
    }
];

const WEAPONS = [
    {
        weapon: 'Dagger',
        speed: '8',
        damage: 'd4',
        note: ' (thrown)'
    },
    {
        weapon: 'Club',
        speed: '8',
        damage: 'd6',
        note: ''
    },
    {
        weapon: 'Spear',
        speed: '7',
        damage: 'd6/d8',
        note: ' (versatile, thrown)'
    },
    {
        weapon: 'Staff',
        speed: '7',
        damage: 'd6/2d4',
        note: ' (versatile)'
    },
    {
        weapon: 'Sword',
        speed: '6',
        damage: 'd8',
        note: ''
    },
    {
        weapon: 'Axe',
        speed: '5',
        damage: 'd8',
        note: ' (thrown)'
    },
    {
        weapon: 'Glaive',
        speed: '5',
        damage: '2d4',
        note: ' (two-handed)'
    },
    {
        weapon: 'Mace',
        speed: '4',
        damage: '2d4',
        note: ''
    },
    {
        weapon: 'Maul',
        speed: '4',
        damage: 'd10',
        note: ' (two-handed, requires Body 4+)'
    },
    {
        weapon: 'Great sword',
        speed: '3',
        damage: '2d6',
        note: ' (two-handed, requires Body 6+)'
    },
    {
        weapon: 'Sling',
        speed: '9',
        damage: 'd4',
        note: ' (short range)'
    },
    {
        weapon: 'Shortbow',
        speed: '7',
        damage: 'd6',
        note: ' (short range, two-handed, requires Agility 4+, ammo)'
    },
    {
        weapon: 'Crossbow',
        speed: '4',
        damage: 'd8',
        note: ' (long range, two-handed, requires Agility 4+, ammo)'
    },
    {
        weapon: 'Longbow',
        speed: '6',
        damage: 'd10',
        note: ' (long range, two-handed, requires Agility 6+, ammo)'
    }
];

const TOOLKITS = [
    {
        name: 'Healing Toolkit',
        notes: ' (Bandages, scalpels, alcohol, needle and thread, etc.)'
    },
    {
        name: 'Dungeoneering Toolkit',
        notes: ' (Rope, crowbar, hammer, spikes, lock picks, etc.)'
    },
    {
        name: 'Scribing Toolkit',
        notes: ' (Writing board, ordinary ink, pen, parchment, wax, etc.)'
    },
    {
        name: 'Navigation Toolkit',
        notes: ' (Compass, regional maps, small telescope, etc.)'
    },
    {
        name: 'Cooking Toolkit',
        notes: ' (Salt and spices, cutlery, cast iron pots and pans, oil, etc.)'
    },
    {
        name: 'Disguise Toolkit',
        notes: ' (Make-up, wig, fancy and poor set of clothes, fake nose, etc.)'
    }
];

const SPELL_FORMS = [
    'Armor',      
    'Aura',       
    'Beacon',     
    'Beam',       
    'Beast',      
    'Blade',      
    'Blast',      
    'Bolt',       
    'Bond',       
    'Bubble',     
    'Cascade',    
    'Chariot',    
    'Charm',      
    'Claw',       
    'Cloak',      
    'Crown',      
    'Cube',       
    'Dance',      
    'Dart',       
    'Disk',       
    'Door',       
    'Eye',        
    'Fang',       
    'Feast',      
    'Field',      
    'Finger',     
    'Gaze',       
    'Grasp',      
    'Guide',      
    'Gust',       
    'Hand',       
    'Lock',       
    'Mark',       
    'Mask',       
    'Monolith',   
    'Oracle',     
    'Pillar',     
    'Pocket',     
    'Prison',     
    'Ring',       
    'Ritual',     
    'Seal',       
    'Servant',    
    'Shard',      
    'Shield',     
    'Silhouette', 
    'Song',       
    'Sphere',     
    'Steed',      
    'Strike',     
    'Swarm',      
    'Tentacle',   
    'Torrent',    
    'Trap',       
    'Veil',       
    'Voice',      
    'Vortex',     
    'Wall',       
    'Ward',       
    'Wave',       
    'Web',        
    'Whisper',    
    'Wings',      
    'Word']

const SPELL_ADJECTIVES = [
'Avenging',       
'Banishing',      
'Binding',        
'Blazing',        
'Blinding',       
'Bright',         
'Charming',       
'Concealing',     
'Confusing',      
'Consuming',      
'Controlling',    
'Creeping',       
'Crushing',       
'Cryptic',        
'Delicate',       
'Diminishing',    
'Disintegrating',
'Draining',
'Empowering',
'Entangling',
'Enveloping',
'Erratic',
'Expanding',
'Fearsome',
'Flaming',
'Floating',
'Freezing',
'Glittering',
'Hindering',
'Illusory',
'Intoxicating',
'Invisible',
'Iridescent',
'Luminous',
'Maddening',
'Many-Colored',
'Mesmerizing',
'Oozing',
'Paralyzing',
'Petrifying',
'Piercing',
'Prismatic',
'Pulsing',
'Regenerating',
'Rending',
'Repelling',
'Revealing',
'Screaming',
'Searing',
'Sensitive',
'Shifting',
'Shimmering',
'Sickening',
'Silent',
'Sleeping',
'Slow',
'Smoking',
'Soothing',
'Terrible',
'Transforming',
'Unseen',
'Unbreakable',
'Withering',
'Yawning'
]

const SPELL_NOUNS = [
'Acid',
'Air',
'Amber',
'Ash',
'Blood',
'Bone',
'Clay',
'Cosmos',
'Crystal',
'Dark',
'Death',
'Deceit',
'Dimension',
'Doom',
'Dream',
'Earth',
'Electrum',
'Ember',
'Emotion',
'Energy',
'Fire',
'Flesh',
'Force',
'Fungus',
'Greed',
'Hate',
'Health',
'Heat',
'Ice',
'Iron',
'Light',
'Lightning',
'Lore',
'Malady',
'Memory',
'Might',
'Mind',
'Mist',
'Negation',
'Oil',
'Pain',
'Plant',
'Poison',
'Rage',
'Rot',
'Salt',
'Sand',
'Shadow',
'Sight',
'Skin',
'Slime',
'Soul',
'Sound',
'Spirit',
'Star',
'Stasis',
'Steam',
'Sun',
'Terror',
'Time',
'Twilight',
'Vermin',
'Water',
'Wind'
]

function randomEntryFrom(array) {
    return array[Math.floor(Math.random()*array.length)];
}
function d(dice) { 
    var roll = Math.floor(Math.random() * (dice - 1 + 1) + 1);
    return roll;
    console.log(roll);
  }
  

function createInkseeker() {
    // Name 
    const name = randomEntryFrom(NAMES);
    document.getElementById("inseeker-name").innerHTML = name;
    document.title = name + ' - The Inkseeker Vat';

    // Archetype
    const archetype = randomEntryFrom(ARCHETYPES);
    document.getElementById("archetype-name").innerHTML = archetype["name"];
    document.getElementById("archetype-description").innerHTML = archetype["description"];
    document.getElementById("archetype-feature").innerHTML = randomEntryFrom(archetype["feature"]);

    // Background
    const background = randomEntryFrom(BACKGROUNDS);
    document.getElementById("background-name").innerHTML = background["name"];
    document.getElementById("background-description").innerHTML = background["description"];
    document.getElementById("background-talents").innerHTML = background["talents"];
    document.getElementById("background-languages").innerHTML = background["languages"];

    // Attributes
    document.getElementById("agility-score").innerHTML = Math.floor(d(4) + background["agilityBonus"]);
    document.getElementById("archive-score").innerHTML = Math.floor(d(4) + background["archiveBonus"]);
    document.getElementById("body-score").innerHTML = Math.floor(d(4) + background["bodyBonus"]);
    document.getElementById("mask-score").innerHTML = Math.floor(d(4) + background["maskBonus"]);
    document.getElementById("spirit-score").innerHTML = Math.floor(d(4) + background["spiritBonus"]);
    document.getElementById("hp-score").innerHTML = Math.floor(d(4) + d(4) + background["hpBonus"]);
    
    // Equipments
    const toolkit = randomEntryFrom(TOOLKITS);
    const weapon = randomEntryFrom(WEAPONS);
    document.getElementById("eq-drops").innerHTML = Math.floor((d(8) + d(8)) * 2);
    document.getElementById("eq-common-weapon").innerHTML = weapon["weapon"] + " | damage: " + weapon["damage"] + " | speed: " + weapon["speed"] + weapon["note"];
    document.getElementById("eq-toolkit").innerHTML = toolkit["name"] + toolkit["notes"];

    // Spell name
    const form = randomEntryFrom(SPELL_FORMS);
    const adjective = randomEntryFrom(SPELL_ADJECTIVES);
    const noun = randomEntryFrom(SPELL_NOUNS);
    const template = d(4);

         if (archetype["hasspell"]==true && template == 1) {document.getElementById("archetype-spell").innerHTML = ' (' + noun + ' ' + form + ')';}
    else if (archetype["hasspell"]==true && template == 2) {document.getElementById("archetype-spell").innerHTML = ' (' + adjective + ' ' + noun + ')';}
    else if (archetype["hasspell"]==true && template == 3) {document.getElementById("archetype-spell").innerHTML = ' (' + adjective + ' ' + form + ')';}
    else if (archetype["hasspell"]==true && template == 4) {document.getElementById("archetype-spell").innerHTML = ' (' + form + ' of ' + adjective + ' ' + noun + ')';}
    else {return};

}
function moveFocus() {
    document.getElementById("name").focus();
}

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
    createInkseeker();
    checkTheme();
}

function newInkseeker() {
    createInkseeker();
    moveFocus();
};