import Item from '../models/item';
import groupItem from '../models/groupItem';

const items = [];

const songs = [];
songs.push(new Item("Bolero of Fire", 4));
songs.push(new Item("Eponas Song", 24));
songs.push(new Item("Minuet of Forest", 39));
songs.push(new Item("Nocturne of Shadow", 42));
songs.push(new Item("Prelude of Light", 46));
songs.push(new Item("Requiem of Spirit", 52));
songs.push(new Item("Sarias Song", 58));
songs.push(new Item("Serenade of Water", 59));
songs.push(new Item("Song of Storms", 61));
songs.push(new Item("Song of Time", 62));
songs.push(new Item("Suns Song", 64));
songs.push(new Item("Zeldas Lullaby", 65));

const sm = [];
sm.push(new Item("Kokiri Emerald", 101));
sm.push(new Item("Goron Ruby", 102));
sm.push(new Item("Zora Sapphire", 103));
sm.push(new Item("Light Medallion", 104));
sm.push(new Item("Forest Medallion", 105));
sm.push(new Item("Fire Medallion", 106));
sm.push(new Item("Water Medallion", 107));
sm.push(new Item("Shadow Medallion", 108));
sm.push(new Item("Spirit Medallion", 109));

///
const collectables = [];
collectables.push(new Item("Arrows (10)", 0));
collectables.push(new Item("Arrows (30)", 1));
collectables.push(new Item("Arrows (5)", 2));
collectables.push(new Item("Bombchus (10)", 6));
collectables.push(new Item("Bombchus (20)", 7));
collectables.push(new Item("Bombchus (5)", 8));
collectables.push(new Item("Bombs (10)", 9));
collectables.push(new Item("Bombs (20)", 10));
collectables.push(new Item("Bombs (5)", 11));
collectables.push(new Item("Deku Nuts (10)", 18));
collectables.push(new Item("Deku Nuts (5)", 19));
collectables.push(new Item("Deku Stick (1)", 121));
collectables.push(new Item("Deku Seeds (30)", 122));

items.push(new groupItem("Consommables", collectables, 0));

const rupees = [];

rupees.push(new Item("Rupee (1)", 53));
rupees.push(new Item("Rupees (20)", 54));
rupees.push(new Item("Rupees (200)", 55));
rupees.push(new Item("Rupees (5)", 56));
rupees.push(new Item("Rupees (50)", 57));

items.push(new groupItem("Rupees", rupees, 1));

const traps = []

traps.push(new Item("Ice Trap", 33));

items.push(new groupItem("Traps", traps, 2));

const hearts = [];

hearts.push(new Item("Double Defense", 23));
hearts.push(new Item("Heart Container", 29));
hearts.push(new Item("Piece of Heart (Treasure Chest Game)", 43));
hearts.push(new Item("Piece of Heart", 44));
hearts.push(new Item("Recovery Heart", 51));

items.push(new groupItem("Hearts", hearts, 3));

const barrens = [];

barrens.push(new Item("Biggoron Sword", 3));
barrens.push(new Item("Deku Nut Capacity", 17));
barrens.push(new Item("Deku Shield", 20));
barrens.push(new Item("Deku Stick Capacity", 21));
barrens.push(new Item("Hylian Shield", 31));
barrens.push(new Item("Ice Arrows", 32));
barrens.push(new Item("Kokiri Sword", 35));
barrens.push(new Item("Nayrus Love", 41));
barrens.push(new Item("Stone of Agony", 63));

items.push(new groupItem("Non Progression Items", barrens, 4));

const bottles = [];

bottles.push(new Item('Bottle with Red Potion', 112));
bottles.push(new Item('Bottle with Green Potion', 113));
bottles.push(new Item('Bottle with Blue Potion', 114));
bottles.push(new Item('Bottle with Fairy', 115));
bottles.push(new Item('Bottle with Fish', 116));
bottles.push(new Item('Bottle with Blue Fire', 117));
bottles.push(new Item('Bottle with Bugs', 118));
bottles.push(new Item('Bottle with Big Poe', 119));
bottles.push(new Item('Bottle with Poe', 120));

items.push(new groupItem("Bottles", bottles, 5));

const others = [];

others.push(new Item("Farores Wind", 25));
others.push(new Item("Goron Tunic", 27));
others.push(new Item("Zora Tunic", 66));

items.push(new groupItem("Others", others, 6));

const trade = [];

trade.push(new Item('Pocket Egg', 102));
trade.push(new Item('Pocket Cucco', 103));
trade.push(new Item('Odd Mushroom', 104));
trade.push(new Item('Odd Potion', 105));
trade.push(new Item('Poachers Saw', 106));
trade.push(new Item('Broken Sword', 107));
trade.push(new Item('Prescription', 108));
trade.push(new Item('Eyeball Frog', 109));
trade.push(new Item('Eyedrops', 110));
trade.push(new Item('Claim Check', 111));

items.push(new groupItem("Trade", trade, 7));

const tools = [];

tools.push(new Item("Bomb Bag", 5));
tools.push(new Item("Boomerang", 12));
tools.push(new Item("Bottle with Letter", 13));
tools.push(new Item("Bow", 16));
tools.push(new Item("Dins Fire", 22));
tools.push(new Item("Fire Arrows", 26));
tools.push(new Item("Hammer", 28));
tools.push(new Item("Hover Boots", 30));
tools.push(new Item("Iron Boots", 34));
tools.push(new Item("Lens of Truth", 36));
tools.push(new Item("Light Arrows", 37));
tools.push(new Item("Magic Meter", 38));
tools.push(new Item("Mirror Shield", 40));
tools.push(new Item("Progressive Hookshot", 47));
tools.push(new Item("Progressive Scale", 48));
tools.push(new Item("Progressive Strength Upgrade", 49));
tools.push(new Item("Progressive Wallet", 50));
tools.push(new Item("Slingshot", 60));

items.push(new groupItem("Progression Items", tools, 8));

const keys = [];

keys.push(new Item("Small Key (Forest Temple)", 67));
keys.push(new Item("Small Key (Bottom of the Well)", 68));
keys.push(new Item("Small Key (Fire Temple)", 69));
keys.push(new Item("Small Key (Water Temple)", 70));
keys.push(new Item("Small Key (Shadow Temple)", 71));
keys.push(new Item("Small Key (Gerudo Training Grounds)", 72));
keys.push(new Item("Small Key (Spirit Temple)", 73));
keys.push(new Item("Small Key (Ganons Castle)", 74));
keys.push(new Item("Boss Key (Forest Temple)", 75));
keys.push(new Item("Boss Key (Fire Temple)", 76));
keys.push(new Item("Boss Key (Water Temple)", 77));
keys.push(new Item("Boss Key (Shadow Temple)", 78));
keys.push(new Item("Boss Key (Spirit Temple)", 79));
keys.push(new Item("Boss Key (Ganons Castle)", 80));

items.push(new groupItem("Keys", keys, 9));

//Bracket settings only for the first version
// items.push(null)
// items.push(new Item("Map (Deku Tree)", 81));
// items.push(new Item("Compass (Deku Tree)", 82));
// items.push(new Item("Map (Dodongos Cavern)", 83));
// items.push(new Item("Compass (Dodongos Cavern)", 84));
// items.push(new Item("Map (Jabu Jabus Belly)", 85));
// items.push(new Item("Compass (Jabu Jabus Belly)", 86));
// items.push(new Item("Map (Forest Temple)", 87));
// items.push(new Item("Compass (Forest Temple)", 88));
// items.push(new Item("Map (Bottom of the Well)", 89));
// items.push(new Item("Compass (Bottom of the Well)", 90));
// items.push(new Item("Map (Fire Temple)", 91));
// items.push(new Item("Compass (Fire Temple)", 92));
// items.push(new Item("Map (Ice Cavern)", 93));
// items.push(new Item("Compass (Ice Cavern)", 94));
// items.push(new Item("Map (Water Temple)", 95));
// items.push(new Item("Compass (Water Temple)", 96));
// items.push(new Item("Map (Shadow Temple)", 97));
// items.push(new Item("Compass (Shadow Temple)", 98));
// items.push(new Item("Map (Spirit Temple)", 99));
// items.push(new Item("Compass (Spirit Temple)", 100));

export default {
    items: items,
    sm: sm,
    songs: songs
};