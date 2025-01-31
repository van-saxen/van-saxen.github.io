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
    //MÖRKBORG CORE
    {monster: "Goblin", hp: "6", morale: "7", armourname: "Ropy skin", armourvalue: "-d2", weaponname: "Knife/shortbow", weaponvalue: "d4", special: "Quick, attacks and defence are DR14. Goblin curse."},
    {monster: "Scum", hp: "7", morale: "8", armourname: "No armour", armourvalue: "", weaponname: "Poisoned knife", weaponvalue: "d4 + special", special: "Poisoned knife. Test Toughness DR10 or become infected."},
    {monster: "Berserker", hp: "13", morale: "9", armourname: "Hardened skin", armourvalue: "-d2", weaponname: "Wields (d4)", weaponvalue: "1. Long flail d8, 2. Heavy mace d6, 3. Chained sword d6, 4. Huge warhammer d10", special: "Attacks twice per round but doesn’t have time for defence (DR10 to hit them)."},
    {monster: "Wraith", hp: "15", morale: "—", armourname: "No armour", armourvalue: "", weaponname: "Touch", weaponvalue: "d4 + special", special: "Swift, elusive and difficult to hit (DR14). These soundless phantoms always win initiative. ❡ Their touch drains Strength, Presence and Agility by 1 for the duration of the fight."},
    {monster: "Blood-Drenched Skeleton", hp: "7", morale: "8", armourname: "No armour", armourvalue: "", weaponname: "Shortsword / Knife / Bony knuckles", weaponvalue: "d4 / d4 / d2", special: "Skulks about, impossibly soundless. Attacks by surprise. Can mimic voices to lure victims, but can only repeat what it has heard. ❡ Attacks on them with piercing weapons are DR14. Any strike doing 5 or more damage destroys the skeleton completely."},
    {monster: "Lich", hp: "15", morale: "—", armourname: "Barrier (necro)", armourvalue: "-d4", weaponname: "Strike", weaponvalue: "d6 + special", special: "Paralyzing touch (Presence DR14 every round to break free). No one can use Powers near this anti-magical wound in reality. ❡ Every round they can steal the contents of Skull a nearby scroll and use this 100s Power against its owner."},
    {monster: "Troll", hp: "32", morale: "special", armourname: "Thick hide", armourvalue: "-d2", weaponname: "Fist", weaponvalue: "2d6", special: "Easy to hit; attacks are DR10. attacks are DR10. ❡ Cowards despite their size. Usually retreat if badly wounded. Never forget who hurt them. They grow larger during the healing process and will definitely come back, stronger than before. Any HP healed is added to their maximum HP. Every time they return, add another d6 to their damage."},
    {monster: "Zombie", hp: "7", morale: "—", armourname: "Leather scraps", armourvalue: "-d2", weaponname: "Claw/bite", weaponvalue: "d2 + special", special: "Anyone bitten tests Toughness DR8 or dies within two days before rising as a zombie. The only cure or vaccine is said to be found at the peak of a pale mountain within an infinitely-miserable forest of dark leaves."},
    {monster: "Undead Doll", hp: "11", morale: "—", armourname: "Porcelain", armourvalue: "-d2", weaponname: "Claws/piercing bite", weaponvalue: "d4", special: "Their mad gaze demands a Presence DR12 test at the start of combat to avoid being frozen with fear for d4 rounds."},
    {monster: "Grotesque", hp: "18", morale: "—", armourname: "Clay/stone", armourvalue: "-d6", weaponname: "Claws / Eye-beam", weaponvalue: "d6 / d8", special: "Lurking round churches, stalking graveyards, creeping closer when you look away. Disturbingly still, difficult to discern against gray stone and hard to recognize even when seen. They move slowly and are easy to hit (DR10). ❡ Their terrifying gaze is used on 1–2 on a d6 each round. Always hits."},
    {monster: "Wickhead knife-wielder", hp: "10", morale: "7", armourname: "No armour", armourvalue: "", weaponname: "Knife with dried blood", weaponvalue: "d4", special: "Sneaks up behind its victims, silent as the grave. ❡ 25% chance wounds from the insanely filthy knife become infected. ❡ Can magically douse all nearby light sources, ignite its own blinding light and attack. Then vanish into the darkness."},
    {monster: "Wyvern", hp: "25", morale: "10", armourname: "Thick hide", armourvalue: "-d4", weaponname: "Bite/sting", weaponvalue: "d6", special: "60% chance that she bites. The tail's venomous sting can paralyze a victim. Test Toughness DR14 to avoid one painful hour of paralysis."},
    {monster: "Earthbound", hp: "8", morale: "7", armourname: "Leather", armourvalue: "-d2", weaponname: "Staff/Femur", weaponvalue: "d4", special: "Potential follower. MB pg.70"},
    {monster: "Wild Wickhead", hp: "10", morale: "7", armourname: "No armour", armourvalue: "", weaponname: "Knife", weaponvalue: "d4", special: "Potential follower. MB pg.70"},
    {monster: "Pale one", hp: "5", morale: "8", armourname: "No armour", armourvalue: "", weaponname: "Unarmed", weaponvalue: "d2", special: "Potential follower. MB pg.71"},
    {monster: "Prowler", hp: "8", morale: "8", armourname: "Leather", armourvalue: "-d2", weaponname: "Knife / Femur / Filthy shortsword", weaponvalue: "d4 / d4 / d4+1", special: "Potential follower. MB pg.71"},
    //THE DEATH ZIGGURAT
    {monster: "Rot Priest", hp: "10", morale: "8", armourname: "No armour", armourvalue: "", weaponname: "Claws", weaponvalue: "d6", special: "Devour: DR12 Strength test or be grappled and next turn, devoured (d8 damage per round). ❡ Rotting touch: Those damaged by a rot priest do not heal when resting until healed magically or resting one night."},
    {monster: "Horn Beast", hp: "8", morale: "—", armourname: "Shifting bones", armourvalue: "-d4", weaponname: "Claws", weaponvalue: "d6", special: "Attacks twice per round"},
    {monster: "Undead", hp: "3", morale: "—", armourname: "No armour", armourvalue: "", weaponname: "Claw/bite", weaponvalue: "d4", special: "Grapple: DR12 Strength test or be grappled. Subsequent attacks (by all present undead) are claw or bite (d4). ❡ Will not die: Only stays dead for one round, then rises again with 1 HP. ❡ Slow: Can always be outrun (unless you are grappled)."},
    //GRAVES LEFT WANTING
    {monster: "Widow-wraith", hp: "15", morale: "—", armourname: "No armour", armourvalue: "", weaponname: "Icy touch", weaponvalue: "d4 + special", special: "Her sobbing alerts anyone to her presence; she always loses initiative. ❡ Touch drains Strength, Presence, and Agility by 1 for the fight’s duration."},
    {monster: "Hungry Zombie", hp: "6", morale: "—", armourname: "Leather scraps", armourvalue: "-d2", weaponname: "Claw/bite", weaponvalue: "d2 + special", special: "Test Toughness DR8 or die turning into a zombie after 2 days."},
    {monster: "Rotted Skeleton", hp: "5", morale: "7", armourname: "No armour", armourvalue: "", weaponname: "Knuckles", weaponvalue: "d2", special: "Whenever it takes damage, a puff of vile marrow-dust leaks from its broken bones. ❡ Melee attackers test Toughness DR10 or become infected."},
    {monster: "Fogbound Skeleton", hp: "7", morale: "8", armourname: "No armour", armourvalue: "", weaponname: "Weapon of condensed fog", weaponvalue: "d4", special: "Shatters if an attack deals 5+ damage, but otherwise, damage is reduced to 1."},
    {monster: "Twice-grown Corpse Fly", hp: "4", morale: "—", armourname: "Exoskeleton", armourvalue: "-d4", weaponname: "Bite", weaponvalue: "d4 + special", special: "Test Toughness DR12 or become host for a dozen freshly laid fly eggs. Extract them within d6 days or watch them hatch in your corpse."},
    //SEPULCHRE OF THE SWAMP WITCH
    {monster: "Emerald Serpent", hp: "8", morale: "—", armourname: "No armour", armourvalue: "", weaponname: "Bite", weaponvalue: "d2 + Emerald Venom", special: "Lightning reflexes: Attacks thrice each round, and melee attacks against her use Agility DR16 instead of Strength. ❡ Emerald Venom: Test Toughness DR12 or be afflicted (no test if willingly bitten). Everything turns chromatic. Fire burns with colors never seen before: jale, dolm, and ulfire. Spectral leaf buds grow from dead matter. Everything is kaleidoscopic. Nature sings just for you. There is beauty in the world. Certain truths become clear to you. You get −1 on initiative (if using individual initiative) and fumble on 1–3 for the duration of the 7-day-long high. You also perceive some things dif ferently here."},
    {monster: "Strange Serpent Drug Cultist", hp: "4", morale: "4", armourname: "Gatorskin vestment", armourvalue: "-d3", weaponname: "Knife or club", weaponvalue: "d4", special: "Drug-addled: Immune to mind-affecting powers"},
    {monster: "Forked-Tongue Devotee", hp: "9", morale: "9", armourname: "Gatorskin hood and vestment", armourvalue: "-d4", weaponname: "Forked dagger", weaponvalue: "d4 + poison", special: "Poison: Test Toughness DR10 or become infected and drowsy, raising thedifficultyofallattackanddefence tests by +2 for D4 hours. ❡ Viper spit: Test Agility DR12 to avoid being blinded D3 rounds."},
    //DEATH TEMPLE SZTUN
    {monster: "Skeleton", hp: "6", morale: "—", armourname: "Chain", armourvalue: "-d4", weaponname: "Halbard or Scythe", weaponvalue: "d6", special: "Old and dry: DR10 to hit them."},
    {monster: "Giant spider", hp: "8", morale: "8", armourname: "Carapace", armourvalue: "-d2", weaponname: "Bite", weaponvalue: "d4", special: "—"},
    {monster: "Chained Skeleton", hp: "6", morale: "—", armourname: "No armour", armourvalue: "", weaponname: "Grab/strike", weaponvalue: "d2", special: "Grapple: DR12 Strength test or be grappled."},
    //ROTBLACK SLUDGE
    {monster: "Dusk Gnoum", hp: "4", morale: "7", armourname: "No armour", armourvalue: "", weaponname: "Knife", weaponvalue: "d4", special: "DR14 to hit them."},
    {monster: "Mongrel", hp: "8", morale: "9", armourname: "No armour", armourvalue: "", weaponname: "Bite", weaponvalue: "d4+1", special: "Infection if Toughness DR12 is failed."},
    {monster: "Guard with sharpened teeth", hp: "6", morale: "7", armourname: "Leather", armourvalue: "-d2", weaponname: "Shortsword/bite", weaponvalue: "d4", special: "—"},
    {monster: "Nesting Death", hp: "12", morale: "—", armourname: "Thick carapace", armourvalue: "-d2", weaponname: "Bite", weaponvalue: "d4", special: "Wins initiative on 1—4. ❡ Test Toughness DR12 to avoid freezing (tests are DR+2 for one hour)"},
    {monster: "Slumbering skeleton", hp: "5", morale: "7", armourname: "No armour", armourvalue: "", weaponname: "Bony fists", weaponvalue: "d4", special: "Thoughtless, without goal."},
    {monster: "Gutworm", hp: "50", morale: "—", armourname: "Thick gide", armourvalue: "-d6", weaponname: "Razor-sharp teeth", weaponvalue: "d10", special: "Test Agility DR6 or be devoured, dying instantly. ❡ Can travel vast distances."},
    //THE UNSEEN VAULTS OF THE OPTIC EXPERIMENT — TO FINISH
    {monster: "Observer", hp: "20", morale: "—", armourname: "Chitin", armourvalue: "-d6", weaponname: "Bite", weaponvalue: "d6", special: "3 random rays each round, at random targets. Test Presence DR12 to avoid effect. ❡ Optic Pg.9 ❡ Essenitally a Beholder."},


    



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
const DIRECTIONS = ["NORTH", "SOUTH", "EAST", "WEST"];

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
    document.getElementById("room-content").innerHTML = '';
    const roomMonster = randomEntryFrom(MONSTERS)
    const wanderingMonster = randomEntryFrom(MONSTERS)
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
            document.getElementById("room-content").innerHTML = "You have found an item: " + roomTreasure + "<br /><br /><b>Guarded by a trap that is triggered by: </b>" + roomTrapTrigger + " <br /> <b>" + roomTrapEffect.effect + "</b> " + roomTrapEffect.description + "<br> <b>Who or what built the trap?</b> " + roomTrapBuilder;
            break;
        case 3:
            // Trick or trap
            document.getElementById("room-content").innerHTML = "<b> You have triggered the trap by </b>" + roomTrapTrigger + " <br /> <b>" + roomTrapEffect.effect + "</b> " + roomTrapEffect.description + "<br> <b>Who or what built the trap?</b> " + roomTrapBuilder;
            break;
        case 4:
            // Treasure guarded by monster
            document.getElementById("room-content").innerHTML = "You have found an item: " + roomTreasure + "<br /><br />Guarded by " + "<b>" + roomMonster.monster + "</b> <br /> <b>HP </b>" + roomMonster.hp + ",   <b>Morale </b>" + roomMonster.morale + ", <br /> <b>" + roomMonster.armourname + " </b>" + roomMonster.armourvalue + "<br /> <b>" + roomMonster.weaponname + " </b>" + roomMonster.weaponvalue + "<br /> <b>Special: </b>" + roomMonster.special;
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
            document.getElementById("room-content").innerHTML = "You have found an item: " + roomTreasure + "<br /><br />Guarded by " + "<b>" + roomMonster.monster + "</b> <br /> <b>HP </b>" + roomMonster.hp + ",   <b>Morale </b>" + roomMonster.morale + ", <br /> <b>" + roomMonster.armourname + " </b>" + roomMonster.armourvalue + "<br /> <b>" + roomMonster.weaponname + " </b>" + roomMonster.weaponvalue + "<br /> <b>Special: </b>" + roomMonster.special;
            break;
        case 11: case 12:
            // Unguarded treasure
            document.getElementById("room-content").innerHTML = "You have found an item: " + roomTreasure
            break;
        default:
          console.log('default');
      }
      const wanderingMonsterChance = Math.random() <= 0.1;
      if (wanderingMonsterChance === true) {
        document.getElementById("room-content").innerHTML += "<br /><br />You stumble into a wandering <b>" + wanderingMonster.monster + "</b> <br /> <b>HP </b>" + wanderingMonster.hp + ",   <b>Morale </b>" + wanderingMonster.morale + ", <br /> <b>" + wanderingMonster.armourname + " </b>" + wanderingMonster.armourvalue + "<br /> <b>" + wanderingMonster.weaponname + " </b>" + wanderingMonster.weaponvalue + "<br /> <b>Special: </b>" + wanderingMonster.special;
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
        exitContent = `: a corridor${soundDivider}${soundText}${smellText ? ', ' + smellText : ''}.`;
    } else {
        exitContent = `: ${doorMaterial}, ${doorAdjective}${soundDivider}${soundText}${smellDivider}${smellText}.`;
    }

    // Create the list item and its contents
    const exitItem = document.createElement('li');

    const doorDirectionSpan = document.createElement('span');
    doorDirectionSpan.classList.add(/*'small-caps', */'door-direction');
    doorDirectionSpan.innerHTML = direction + '';

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