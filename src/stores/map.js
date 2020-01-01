import Location from '../models/location'
import Area from '../models/area';
import GroupArea from '../models/groupArea';

class Map {
    constructor(groups_area)
    {
        this.groups_area = groups_area;
    }
}

//Stone and Medallions
const links_pocket = new Location("Links Pocket", 0);
const queen_gohma = new Location("Queen Gohma", 1);
const king_dodongo = new Location("King Dodongo", 2);
const barinade = new Location("Barinade", 3);
const phantom_ganon = new Location("Phantom Ganon", 4);
const volvagia = new Location("Volvagia", 5);
const morpha = new Location("Morpha", 6);
const bongo_bongo = new Location("Bongo Bongo", 7);
const twinrova = new Location("Twinrova", 8);


const sm_list = [links_pocket, queen_gohma, king_dodongo, barinade, phantom_ganon, volvagia, morpha, bongo_bongo, twinrova];
const SM = new Area("Stones and Medallions", sm_list, 0);

const song_from_saria = new Location("Song from Saria", 9);
const sheik_forest_song = new Location("Sheik Forest Song", 10);
const song_from_ocarina_of_time = new Location("Song from Ocarina of Time", 11);
const sheik_at_colossus = new Location("Sheik at Colossus", 12);
const sheik_at_temple = new Location("Sheik at Temple", 13);
const impa_at_castle = new Location("Impa at Castle", 14);
const sheik_in_kakariko = new Location("Sheik in Kakariko", 15);
const song_at_windmill = new Location("Song at Windmill", 16);
const song_from_composer_grave = new Location("Song from Composer Grave", 17);
const sheik_in_crater = new Location("Sheik in Crater", 18);
const song_from_malon = new Location("Song from Malon", 19);
const sheik_in_ice_cavern = new Location("Sheik in Ice Cavern", 20);

const song_list = [song_from_saria, sheik_forest_song, song_from_ocarina_of_time, sheik_at_colossus, sheik_at_temple, impa_at_castle, sheik_in_kakariko,
    song_at_windmill, song_from_composer_grave, sheik_in_crater, song_from_malon, sheik_in_ice_cavern];
const songs = new Area("Songs", song_list, 1);

const kokiri_sword_chest = new Location("Kokiri Sword Chest", 21);
const mido_chest_top_left = new Location("Mido Chest Top Left", 22);
const mido_chest_top_right = new Location("Mido Chest Top Right", 23);
const mido_chest_bottom_left = new Location("Mido Chest Bottom Left", 24);
const mido_chest_bottom_right = new Location("Mido Chest Bottom Right", 25);
const kokiri_forest_storms_grotto_chest = new Location("Kokiri Forest Storms Grotto Chest", 99);

const forest_kokiri_list = [kokiri_sword_chest, mido_chest_top_left, mido_chest_top_right, mido_chest_bottom_left, mido_chest_bottom_right, kokiri_forest_storms_grotto_chest];
const forest_kokiri = new Area("Kokiri Forest", forest_kokiri_list, 2);

const skull_kid = new Location("Skull Kid", 26);
const ocarina_memory_game = new Location("Ocarina Memory Game", 27);
const target_in_woods = new Location("Target in Woods", 28);
const lw_deku_scrub_deku_stick_upgrade = new Location("LW Deku Scrub Deku Stick Upgrade", 29);
const lost_woods_generic_grotto_chest = new Location("Lost Woods Generic Grotto Chest", 100);
const deku_theater_skull_mask = new Location("Deku Theater Skull Mask", 101);
const deku_theater_mask_of_truth = new Location("Deku Theater Mask of Truth", 102);
const lw_grotto_deku_scrub_deku_nut_upgrade = new Location("LW Grotto Deku Scrub Deku Nut Upgrade", 103);
const wolfos_grotto_chest = new Location("Wolfos Grotto Chest", 104);

const LW_list = [skull_kid, ocarina_memory_game, target_in_woods, lw_deku_scrub_deku_stick_upgrade, lost_woods_generic_grotto_chest, deku_theater_skull_mask,
	 deku_theater_mask_of_truth, lw_grotto_deku_scrub_deku_nut_upgrade];
const LW = new Area("Lost Wood", LW_list, 3);

const meadow_list = [wolfos_grotto_chest];
const meadow = new Area("Sacred Forest Meadow", meadow_list, 3);

const underwater_bottle = new Location("Underwater Bottle", 30);
const lake_hylia_sun = new Location("Lake Hylia Sun", 31);
const lake_hylia_freestanding_poh = new Location("Lake Hylia Freestanding PoH", 32);
const diving_in_the_lab = new Location("Diving in the Lab", 33);
const child_fishing = new Location("Child Fishing", 34);
const adult_fishing = new Location("Adult Fishing", 35);

const lake_list = [underwater_bottle, lake_hylia_sun, lake_hylia_freestanding_poh, diving_in_the_lab, child_fishing, adult_fishing];
const lake = new Area("Lake", lake_list, 4);

const gerudo_valley_crate_freestanding_poh = new Location("Gerudo Valley Crate Freestanding PoH", 36);
const gerudo_valley_waterfall_freestanding_poh = new Location("Gerudo Valley Waterfall Freestanding PoH", 37);
const gerudo_valley_hammer_rocks_chest = new Location("Gerudo Valley Hammer Rocks Chest", 38);

const gerudo_valley_list = [gerudo_valley_crate_freestanding_poh, gerudo_valley_waterfall_freestanding_poh, gerudo_valley_hammer_rocks_chest];
const gerudo_valley = new Area("Gerudo Valley", gerudo_valley_list, 5);

const gerudo_fortress_rooftop_chest = new Location("Gerudo Fortress Rooftop Chest", 39);
const horseback_archery_1000_points = new Location("Horseback Archery 1000 Points", 40);
const horseback_archery_1500_points = new Location("Horseback Archery 1500 Points", 41);

const gerudo_fortress_list = [gerudo_fortress_rooftop_chest, horseback_archery_1000_points, horseback_archery_1500_points];
const gerudo_fortress = new Area("Gerudo Fortress", gerudo_fortress_list, 6);

const haunted_wasteland_structure_chest = new Location("Haunted Wasteland Structure Chest", 42);

const haunted_wasteland_list = [haunted_wasteland_structure_chest];
const haunted_wasteland = new Area("Haunted Wasteland", haunted_wasteland_list, 7);

const colossus_freestanding_poh = new Location("Colossus Freestanding PoH", 43);
const desert_colossus_fairy_reward = new Location("Desert Colossus Fairy Reward", 44);

const colossus_list = [colossus_freestanding_poh, desert_colossus_fairy_reward];
const colossus = new Area("Colossus", colossus_list, 8);

const zelda = new Location("Zelda", 45);

const tot_list = [zelda];
const tot = new Area("Temple of Time", tot_list, 9)

const hyrule_castle_fairy_reward = new Location("Hyrule Castle Fairy Reward", 46);
const ganons_castle_fairy_reward = new Location("Ganons Castle Fairy Reward", 47);

const castle_list = [hyrule_castle_fairy_reward, ganons_castle_fairy_reward];
const castle = new Area("Castle", castle_list, 10);

const loc_10_big_poes = new Location("10 Big Poes", 48);
const child_shooting_gallery = new Location("Child Shooting Gallery", 49);
const bombchu_bowling_bomb_bag = new Location("Bombchu Bowling Bomb Bag", 50);
const bombchu_bowling_piece_of_heart = new Location("Bombchu Bowling Piece of Heart", 51);
const treasure_chest_game = new Location("Treasure Chest Game", 52);
const dog_lady = new Location("Dog Lady", 53);

const market_list = [loc_10_big_poes, child_shooting_gallery, bombchu_bowling_bomb_bag, bombchu_bowling_piece_of_heart, treasure_chest_game, dog_lady];
const market = new Area("Market", market_list, 11);

const man_on_roof = new Location("Man on Roof", 54);
const anju_as_adult = new Location("Anju as Adult", 55);
const anjus_chickens = new Location("Anjus Chickens", 56);
const loc_10_gold_skulltula_reward = new Location("10 Gold Skulltula Reward", 57);
const loc_20_gold_skulltula_reward = new Location("20 Gold Skulltula Reward", 58);
const loc_30_gold_skulltula_reward = new Location("30 Gold Skulltula Reward", 59);
const loc_40_gold_skulltula_reward = new Location("40 Gold Skulltula Reward", 60);
const loc_50_gold_skulltula_reward = new Location("50 Gold Skulltula Reward", 61);
const impa_house_freestanding_poh = new Location("Impa House Freestanding PoH", 62);
const windmill_freestanding_poh = new Location("Windmill Freestanding PoH", 63);
const adult_shooting_gallery = new Location("Adult Shooting Gallery", 64);
const redead_grotto_chest = new Location("Redead Grotto Chest", 110);
const kakariko_back_grotto_chest = new Location("Kakariko Back Grotto Chest", 111);

const kak_list = [man_on_roof, anju_as_adult, anjus_chickens, loc_10_gold_skulltula_reward, loc_20_gold_skulltula_reward, loc_30_gold_skulltula_reward,
    loc_40_gold_skulltula_reward, loc_50_gold_skulltula_reward, impa_house_freestanding_poh, windmill_freestanding_poh, adult_shooting_gallery, redead_grotto_chest,
    kakariko_back_grotto_chest];
const kak = new Area("Kakariko Village", kak_list, 12);

const graveyard_freestanding_poh = new Location("Graveyard Freestanding PoH", 65);
const gravedigging_tour = new Location("Gravedigging Tour", 66);
const shield_grave_chest = new Location("Shield Grave Chest", 67);
const heart_piece_grave_chest = new Location("Heart Piece Grave Chest", 68);
const composer_grave_chest = new Location("Composer Grave Chest", 69);
const hookshot_chest = new Location("Hookshot Chest", 70);
const dampe_race_freestanding_poh = new Location("Dampe Race Freestanding PoH", 71);

const gy_list = [graveyard_freestanding_poh, gravedigging_tour, shield_grave_chest, heart_piece_grave_chest, composer_grave_chest, hookshot_chest,
    dampe_race_freestanding_poh];
const gy = new Area("Graveyard", gy_list, 13);

const death_mountain_bombable_chest = new Location("Death Mountain Bombable Chest", 72);
const dm_trail_freestanding_poh = new Location("DM Trail Freestanding PoH", 73);
const biggoron = new Location("Biggoron", 74);
const mountain_summit_fairy_reward = new Location("Mountain Summit Fairy Reward", 85);
const mountain_storms_grotto_chest = new Location("Mountain Storms Grotto Chest", 112);

const dmt_list = [death_mountain_bombable_chest, dm_trail_freestanding_poh, biggoron, mountain_summit_fairy_reward, mountain_storms_grotto_chest];
const dmt = new Area("Death Mountain Trail", dmt_list, 14);

const goron_city_leftmost_maze_chest = new Location("Goron City Leftmost Maze Chest", 75);
const goron_city_left_maze_chest = new Location("Goron City Left Maze Chest", 76);
const goron_city_right_maze_chest = new Location("Goron City Right Maze Chest", 77);
const goron_city_pot_freestanding_poh = new Location("Goron City Pot Freestanding PoH", 78);
const rolling_goron_as_child = new Location("Rolling Goron as Child", 79);
const link_the_goron = new Location("Link the Goron", 80);
const darunias_joy = new Location("Darunias Joy", 81);

const gc_list = [goron_city_leftmost_maze_chest, goron_city_left_maze_chest, goron_city_right_maze_chest, goron_city_pot_freestanding_poh, rolling_goron_as_child,
    link_the_goron, darunias_joy];
const gc = new Area("Goron City", gc_list, 15);

const dm_crater_wall_freestanding_poh = new Location("DM Crater Wall Freestanding PoH", 82);
const dm_crater_volcano_freestanding_poh = new Location("DM Crater Volcano Freestanding PoH", 83);
const crater_fairy_reward = new Location("Crater Fairy Reward", 84);
const top_of_crater_grotto_chest = new Location("Top of Crater Grotto Chest", 113);

const dmc_list = [dm_crater_wall_freestanding_poh, dm_crater_volcano_freestanding_poh, crater_fairy_reward, top_of_crater_grotto_chest];
const dmc = new Area("Death Moutain Crater", dmc_list, 16);

const frog_ocarina_game = new Location("Frog Ocarina Game", 86);
const frogs_in_the_rain = new Location("Frogs in the Rain", 87);
const zora_river_lower_freestanding_poh = new Location("Zora River Lower Freestanding PoH", 88);
const zora_river_upper_freestanding_poh = new Location("Zora River Upper Freestanding PoH", 89);
const zora_river_plateau_open_grotto_chest = new Location("Zora River Plateau Open Grotto Chest", 114);

const river_list = [frog_ocarina_game, frogs_in_the_rain, zora_river_lower_freestanding_poh, zora_river_upper_freestanding_poh, zora_river_plateau_open_grotto_chest];
const river = new Area("Zora River", river_list, 17);

const diving_minigame = new Location("Diving Minigame", 90);
const zoras_domain_torch_run = new Location("Zoras Domain Torch Run", 91);
const king_zora_thawed = new Location("King Zora Thawed", 92);

const domain_list = [diving_minigame, zoras_domain_torch_run, king_zora_thawed];
const domain = new Area("Zora Domain", domain_list, 18);

const zoras_fountain_iceberg_freestanding_poh = new Location("Zoras Fountain Iceberg Freestanding PoH", 93);
const zoras_fountain_bottom_freestanding_poh = new Location("Zoras Fountain Bottom Freestanding PoH", 94);
const zoras_fountain_fairy_reward = new Location("Zoras Fountain Fairy Reward", 95);

const fountain_list = [zoras_fountain_iceberg_freestanding_poh, zoras_fountain_bottom_freestanding_poh, zoras_fountain_fairy_reward];
const fountain = new Area("Zora Fountain", fountain_list, 19);

const talons_chickens = new Location("Talons Chickens", 96);
const lon_lon_tower_freestanding_poh = new Location("Lon Lon Tower Freestanding PoH", 97);

const ranch_list = [talons_chickens, lon_lon_tower_freestanding_poh]
const ranch = new Area("Lon Lon Ranch", ranch_list, 20);

const remote_southern_grotto_chest = new Location("Remote Southern Grotto Chest", 105);
const field_near_lake_outside_fence_grotto_chest = new Location("Field Near Lake Outside Fence Grotto Chest", 106);
const hf_grotto_deku_scrub_piece_of_heart = new Location("HF Grotto Deku Scrub Piece of Heart", 107);
const field_west_castle_town_grotto_chest = new Location("Field West Castle Town Grotto Chest", 108);
const tektite_grotto_freestanding_poh = new Location("Tektite Grotto Freestanding PoH", 109);

const hyrule_list = [remote_southern_grotto_chest, field_near_lake_outside_fence_grotto_chest, hf_grotto_deku_scrub_piece_of_heart, field_west_castle_town_grotto_chest,
    tektite_grotto_freestanding_poh];
const hyrule = new Area("Hyrule Field", hyrule_list, 21);

const deku_tree_lobby_chest = new Location("Deku Tree Lobby Chest", 115);
const deku_tree_compass_chest = new Location("Deku Tree Compass Chest", 116);
const deku_tree_compass_room_side_chest = new Location("Deku Tree Compass Room Side Chest", 117);
const deku_tree_basement_chest = new Location("Deku Tree Basement Chest", 118);
const deku_tree_slingshot_chest = new Location("Deku Tree Slingshot Chest", 119);
const deku_tree_slingshot_room_side_chest = new Location("Deku Tree Slingshot Room Side Chest", 120);
const queen_gohma_heart = new Location("Queen Gohma Heart", 121);

const deku_list = [deku_tree_lobby_chest, deku_tree_compass_chest, deku_tree_compass_room_side_chest, deku_tree_basement_chest, deku_tree_slingshot_chest,
    deku_tree_slingshot_room_side_chest, queen_gohma_heart];
const deku = new Area("Deku Tree", deku_list, 22);

const dodongos_cavern_map_chest = new Location("Dodongos Cavern Map Chest", 122);
const dodongos_cavern_compass_chest = new Location("Dodongos Cavern Compass Chest", 123);
const dodongos_cavern_bomb_flower_platform = new Location("Dodongos Cavern Bomb Flower Platform", 124);
const dodongos_cavern_bomb_bag_chest = new Location("Dodongos Cavern Bomb Bag Chest", 125);
const dodongos_cavern_end_of_bridge_chest = new Location("Dodongos Cavern End of Bridge Chest", 126);
const chest_above_king_dodongo = new Location("Chest Above King Dodongo", 127);
const king_dodongo_heart = new Location("King Dodongo Heart", 128);

const dc_list = [dodongos_cavern_map_chest, dodongos_cavern_compass_chest, dodongos_cavern_bomb_flower_platform, dodongos_cavern_bomb_bag_chest, dodongos_cavern_end_of_bridge_chest,
    chest_above_king_dodongo, king_dodongo_heart];
const dc = new Area("Dodongo's Cavern", dc_list, 23);

const boomerang_chest = new Location("Boomerang Chest", 129);
const jabu_jabus_belly_map_chest = new Location("Jabu Jabus Belly Map Chest", 130);
const jabu_jabus_belly_compass_chest = new Location("Jabu Jabus Belly Compass Chest", 131);
const barinade_heart = new Location("Barinade Heart", 132);

const jabu_list = [boomerang_chest, jabu_jabus_belly_map_chest, jabu_jabus_belly_compass_chest, barinade_heart];
const jabu = new Area("Jabu Jabu's Belly", jabu_list, 24);

const forest_temple_first_chest = new Location("Forest Temple First Chest", 133);
const forest_temple_chest_behind_lobby = new Location("Forest Temple Chest Behind Lobby", 134);
const forest_temple_outside_hookshot_chest = new Location("Forest Temple Outside Hookshot Chest", 135);
const forest_temple_well_chest = new Location("Forest Temple Well Chest", 136);
const forest_temple_map_chest = new Location("Forest Temple Map Chest", 137);
const forest_temple_falling_room_chest = new Location("Forest Temple Falling Room Chest", 138);
const forest_temple_block_push_chest = new Location("Forest Temple Block Push Chest", 139);
const forest_temple_boss_key_chest = new Location("Forest Temple Boss Key Chest", 140);
const forest_temple_floormaster_chest = new Location("Forest Temple Floormaster Chest", 141);
const forest_temple_bow_chest = new Location("Forest Temple Bow Chest", 142);
const forest_temple_red_poe_chest = new Location("Forest Temple Red Poe Chest", 143);
const forest_temple_blue_poe_chest = new Location("Forest Temple Blue Poe Chest", 144);
const forest_temple_near_boss_chest = new Location("Forest Temple Near Boss Chest", 145);
const phantom_ganon_heart = new Location("Phantom Ganon Heart", 146);

const forest_list = [forest_temple_first_chest, forest_temple_chest_behind_lobby, forest_temple_outside_hookshot_chest, forest_temple_well_chest, forest_temple_map_chest,
    forest_temple_falling_room_chest, forest_temple_block_push_chest, forest_temple_boss_key_chest, forest_temple_floormaster_chest, forest_temple_bow_chest,
    forest_temple_red_poe_chest, forest_temple_blue_poe_chest, forest_temple_near_boss_chest, phantom_ganon_heart];
const forest = new Area("Forest Temple", forest_list, 25);

const bottom_of_the_well_front_left_hidden_wall = new Location("Bottom of the Well Front Left Hidden Wall", 147);
const bottom_of_the_well_front_center_bombable = new Location("Bottom of the Well Front Center Bombable", 148);
const bottom_of_the_well_right_bottom_hidden_wall = new Location("Bottom of the Well Right Bottom Hidden Wall", 149);
const bottom_of_the_well_center_large_chest = new Location("Bottom of the Well Center Large Chest", 150);
const bottom_of_the_well_center_small_chest = new Location("Bottom of the Well Center Small Chest", 151);
const bottom_of_the_well_back_left_bombable = new Location("Bottom of the Well Back Left Bombable", 152);
const bottom_of_the_well_freestanding_key = new Location("Bottom of the Well Freestanding Key", 153);
const bottom_of_the_well_defeat_boss = new Location("Bottom of the Well Defeat Boss", 154);
const bottom_of_the_well_invisible_chest = new Location("Bottom of the Well Invisible Chest", 155);
const bottom_of_the_well_underwater_front_chest = new Location("Bottom of the Well Underwater Front Chest", 156);
const bottom_of_the_well_underwater_left_chest = new Location("Bottom of the Well Underwater Left Chest", 157);
const bottom_of_the_well_basement_chest = new Location("Bottom of the Well Basement Chest", 158);
const bottom_of_the_well_locked_pits = new Location("Bottom of the Well Locked Pits", 159);
const bottom_of_the_well_behind_right_grate = new Location("Bottom of the Well Behind Right Grate", 160);

const botw_list = [bottom_of_the_well_front_left_hidden_wall, bottom_of_the_well_front_center_bombable, bottom_of_the_well_right_bottom_hidden_wall,
    bottom_of_the_well_center_large_chest, bottom_of_the_well_center_small_chest, bottom_of_the_well_back_left_bombable, bottom_of_the_well_freestanding_key,
    bottom_of_the_well_defeat_boss, bottom_of_the_well_invisible_chest, bottom_of_the_well_underwater_front_chest, bottom_of_the_well_underwater_left_chest, bottom_of_the_well_basement_chest,
    bottom_of_the_well_locked_pits, bottom_of_the_well_behind_right_grate];
const botw = new Area("Bottom Of The Well", botw_list, 26);

const fire_temple_chest_near_boss = new Location("Fire Temple Chest Near Boss", 161);
const fire_temple_fire_dancer_chest = new Location("Fire Temple Fire Dancer Chest", 162);
const fire_temple_boss_key_chest = new Location("Fire Temple Boss Key Chest", 163);
const volvagia_heart = new Location("Volvagia Heart", 164);
const fire_temple_big_lava_room_open_chest = new Location("Fire Temple Big Lava Room Open Chest", 165);
const fire_temple_big_lava_room_bombable_chest = new Location("Fire Temple Big Lava Room Bombable Chest", 166);
const fire_temple_boulder_maze_lower_chest = new Location("Fire Temple Boulder Maze Lower Chest", 167);
const fire_temple_boulder_maze_upper_chest = new Location("Fire Temple Boulder Maze Upper Chest", 168);
const fire_temple_boulder_maze_side_room = new Location("Fire Temple Boulder Maze Side Room", 169);
const fire_temple_boulder_maze_bombable_pit = new Location("Fire Temple Boulder Maze Bombable Pit", 170);
const fire_temple_scarecrow_chest = new Location("Fire Temple Scarecrow Chest", 171);
const fire_temple_map_chest = new Location("Fire Temple Map Chest", 172);
const fire_temple_compass_chest = new Location("Fire Temple Compass Chest", 173);
const fire_temple_highest_goron_chest = new Location("Fire Temple Highest Goron Chest", 174);
const fire_temple_megaton_hammer_chest = new Location("Fire Temple Megaton Hammer Chest", 175);

const fire_list = [fire_temple_chest_near_boss, fire_temple_fire_dancer_chest, fire_temple_boss_key_chest, volvagia_heart, fire_temple_big_lava_room_open_chest,
    fire_temple_big_lava_room_bombable_chest, fire_temple_boulder_maze_lower_chest, fire_temple_boulder_maze_upper_chest, fire_temple_boulder_maze_side_room,
    fire_temple_boulder_maze_bombable_pit, fire_temple_scarecrow_chest, fire_temple_map_chest, fire_temple_compass_chest, fire_temple_highest_goron_chest,
    fire_temple_megaton_hammer_chest];
const fire = new Area("Fire Temple", fire_list, 27);

const ice_cavern_map_chest = new Location("Ice Cavern Map Chest", 176);
const ice_cavern_compass_chest = new Location("Ice Cavern Compass Chest", 177);
const ice_cavern_iron_boots_chest = new Location("Ice Cavern Iron Boots Chest", 178);
const ice_cavern_freestanding_poh = new Location("Ice Cavern Freestanding PoH", 179);

const ice_list = [ice_cavern_map_chest, ice_cavern_compass_chest, ice_cavern_iron_boots_chest, ice_cavern_freestanding_poh];
const ice = new Area("Ice Cavern", ice_list, 28);

const morpha_heart = new Location("Morpha Heart", 180);
const water_temple_map_chest = new Location("Water Temple Map Chest", 181);
const water_temple_compass_chest = new Location("Water Temple Compass Chest", 182);
const water_temple_cracked_wall_chest = new Location("Water Temple Cracked Wall Chest", 183);
const water_temple_torches_chest = new Location("Water Temple Torches Chest", 184);
const water_temple_dragon_chest = new Location("Water Temple Dragon Chest", 185);
const water_temple_central_bow_target_chest = new Location("Water Temple Central Bow Target Chest", 186);
const water_temple_boss_key_chest = new Location("Water Temple Boss Key Chest", 187);
const water_temple_central_pillar_chest = new Location("Water Temple Central Pillar Chest", 188);
const water_temple_dark_link_chest = new Location("Water Temple Dark Link Chest", 189);
const water_temple_river_chest = new Location("Water Temple River Chest", 190);

const water_list = [morpha_heart, water_temple_map_chest, water_temple_compass_chest, water_temple_cracked_wall_chest, water_temple_torches_chest,
    water_temple_dragon_chest, water_temple_central_bow_target_chest, water_temple_boss_key_chest, water_temple_central_pillar_chest,
    water_temple_dark_link_chest, water_temple_river_chest];
const water = new Area("Water Temple", water_list, 29);

const shadow_temple_map_chest = new Location("Shadow Temple Map Chest", 191);
const shadow_temple_hover_boots_chest = new Location("Shadow Temple Hover Boots Chest", 192);
const shadow_temple_compass_chest = new Location("Shadow Temple Compass Chest", 193);
const shadow_temple_early_silver_rupee_chest = new Location("Shadow Temple Early Silver Rupee Chest", 194);
const shadow_temple_invisible_blades_visible_chest = new Location("Shadow Temple Invisible Blades Visible Chest", 195);
const shadow_temple_invisible_blades_invisible_chest = new Location("Shadow Temple Invisible Blades Invisible Chest", 196);
const shadow_temple_falling_spikes_lower_chest = new Location("Shadow Temple Falling Spikes Lower Chest", 197);
const shadow_temple_falling_spikes_upper_chest = new Location("Shadow Temple Falling Spikes Upper Chest", 198);
const shadow_temple_falling_spikes_switch_chest = new Location("Shadow Temple Falling Spikes Switch Chest", 199);
const shadow_temple_invisible_spikes_chest = new Location("Shadow Temple Invisible Spikes Chest", 200);
const shadow_temple_freestanding_key = new Location("Shadow Temple Freestanding Key", 201);
const shadow_temple_wind_hint_chest = new Location("Shadow Temple Wind Hint Chest", 202);
const shadow_temple_after_wind_enemy_chest = new Location("Shadow Temple After Wind Enemy Chest", 203);
const shadow_temple_after_wind_hidden_chest = new Location("Shadow Temple After Wind Hidden Chest", 204);
const shadow_temple_spike_walls_left_chest = new Location("Shadow Temple Spike Walls Left Chest", 205);
const shadow_temple_boss_key_chest = new Location("Shadow Temple Boss Key Chest", 206);
const shadow_temple_hidden_floormaster_chest = new Location("Shadow Temple Hidden Floormaster Chest", 207);
const bongo_bongo_heart = new Location("Bongo Bongo Heart", 208);

const shadow_list = [shadow_temple_map_chest, shadow_temple_hover_boots_chest, shadow_temple_compass_chest, shadow_temple_early_silver_rupee_chest, shadow_temple_invisible_blades_visible_chest,
    shadow_temple_invisible_blades_invisible_chest, shadow_temple_falling_spikes_lower_chest, shadow_temple_falling_spikes_upper_chest, shadow_temple_falling_spikes_switch_chest,
    shadow_temple_invisible_spikes_chest, shadow_temple_freestanding_key, shadow_temple_wind_hint_chest, shadow_temple_after_wind_enemy_chest, shadow_temple_after_wind_hidden_chest,
    shadow_temple_spike_walls_left_chest, shadow_temple_boss_key_chest, shadow_temple_hidden_floormaster_chest, bongo_bongo_heart];
const shadow = new Area("Shadow Temple", shadow_list, 30);

const gerudo_training_grounds_lobby_left_chest = new Location("Gerudo Training Grounds Lobby Left Chest", 209);
const gerudo_training_grounds_lobby_right_chest = new Location("Gerudo Training Grounds Lobby Right Chest", 210);
const gerudo_training_grounds_stalfos_chest = new Location("Gerudo Training Grounds Stalfos Chest", 211);
const gerudo_training_grounds_beamos_chest = new Location("Gerudo Training Grounds Beamos Chest", 212);
const gerudo_training_grounds_hidden_ceiling_chest = new Location("Gerudo Training Grounds Hidden Ceiling Chest", 213);
const gerudo_training_grounds_maze_path_first_chest = new Location("Gerudo Training Grounds Maze Path First Chest", 214);
const gerudo_training_grounds_maze_path_second_chest = new Location("Gerudo Training Grounds Maze Path Second Chest", 215);
const gerudo_training_grounds_maze_path_third_chest = new Location("Gerudo Training Grounds Maze Path Third Chest", 216);
const gerudo_training_grounds_maze_path_final_chest = new Location("Gerudo Training Grounds Maze Path Final Chest", 217);
const gerudo_training_grounds_maze_right_central_chest = new Location("Gerudo Training Grounds Maze Right Central Chest", 218);
const gerudo_training_grounds_maze_right_side_chest = new Location("Gerudo Training Grounds Maze Right Side Chest", 219);
const gerudo_training_grounds_freestanding_key = new Location("Gerudo Training Grounds Freestanding Key", 220);
const gerudo_training_grounds_underwater_silver_rupee_chest = new Location("Gerudo Training Grounds Underwater Silver Rupee Chest", 221);
const gerudo_training_grounds_hammer_room_clear_chest = new Location("Gerudo Training Grounds Hammer Room Clear Chest", 222);
const gerudo_training_grounds_hammer_room_switch_chest = new Location("Gerudo Training Grounds Hammer Room Switch Chest", 223);
const gerudo_training_grounds_eye_statue_chest = new Location("Gerudo Training Grounds Eye Statue Chest", 224);
const gerudo_training_grounds_near_scarecrow_chest = new Location("Gerudo Training Grounds Near Scarecrow Chest", 225);
const gerudo_training_grounds_before_heavy_block_chest = new Location("Gerudo Training Grounds Before Heavy Block Chest", 226);
const gerudo_training_grounds_heavy_block_first_chest = new Location("Gerudo Training Grounds Heavy Block First Chest", 227);
const gerudo_training_grounds_heavy_block_second_chest = new Location("Gerudo Training Grounds Heavy Block Second Chest", 228);
const gerudo_training_grounds_heavy_block_third_chest = new Location("Gerudo Training Grounds Heavy Block Third Chest", 229);
const gerudo_training_grounds_heavy_block_fourth_chest = new Location("Gerudo Training Grounds Heavy Block Fourth Chest", 230);

const gtg_list = [gerudo_training_grounds_lobby_left_chest, gerudo_training_grounds_lobby_right_chest, gerudo_training_grounds_stalfos_chest, gerudo_training_grounds_beamos_chest,
    gerudo_training_grounds_hidden_ceiling_chest, gerudo_training_grounds_maze_path_first_chest, gerudo_training_grounds_maze_path_second_chest, gerudo_training_grounds_maze_path_third_chest, gerudo_training_grounds_maze_path_final_chest, gerudo_training_grounds_maze_right_central_chest, gerudo_training_grounds_maze_right_side_chest,
    gerudo_training_grounds_freestanding_key, gerudo_training_grounds_underwater_silver_rupee_chest, gerudo_training_grounds_hammer_room_clear_chest, gerudo_training_grounds_hammer_room_switch_chest,
    gerudo_training_grounds_eye_statue_chest, gerudo_training_grounds_near_scarecrow_chest, gerudo_training_grounds_before_heavy_block_chest, gerudo_training_grounds_heavy_block_first_chest,
    gerudo_training_grounds_heavy_block_second_chest, gerudo_training_grounds_heavy_block_third_chest, gerudo_training_grounds_heavy_block_fourth_chest];
const gtg = new Area("Gerudo Training Grounds", gtg_list, 31);

const spirit_temple_child_left_chest = new Location("Spirit Temple Child Left Chest", 231);
const spirit_temple_child_right_chest = new Location("Spirit Temple Child Right Chest", 232);
const spirit_temple_child_climb_east_chest = new Location("Spirit Temple Child Climb East Chest", 233);
const spirit_temple_child_climb_north_chest = new Location("Spirit Temple Child Climb North Chest", 234);
const spirit_temple_compass_chest = new Location("Spirit Temple Compass Chest", 235);
const spirit_temple_early_adult_right_chest = new Location("Spirit Temple Early Adult Right Chest", 236);
const spirit_temple_first_mirror_right_chest = new Location("Spirit Temple First Mirror Right Chest", 237);
const spirit_temple_first_mirror_left_chest = new Location("Spirit Temple First Mirror Left Chest", 238);
const spirit_temple_map_chest = new Location("Spirit Temple Map Chest", 239);
const spirit_temple_sun_block_room_chest = new Location("Spirit Temple Sun Block Room Chest", 240);
const spirit_temple_statue_hand_chest = new Location("Spirit Temple Statue Hand Chest", 241);
const spirit_temple_ne_main_room_chest = new Location("Spirit Temple NE Main Room Chest", 242);
const silver_gauntlets_chest = new Location("Silver Gauntlets Chest", 243);
const mirror_shield_chest = new Location("Mirror Shield Chest", 244);
const spirit_temple_near_four_armos_chest = new Location("Spirit Temple Near Four Armos Chest", 245);
const spirit_temple_hallway_left_invisible_chest = new Location("Spirit Temple Hallway Left Invisible Chest", 246);
const spirit_temple_hallway_right_invisible_chest = new Location("Spirit Temple Hallway Right Invisible Chest", 247);
const spirit_temple_boss_key_chest = new Location("Spirit Temple Boss Key Chest", 248);
const spirit_temple_topmost_chest = new Location("Spirit Temple Topmost Chest", 249);
const twinrova_heart = new Location("Twinrova Heart", 250);

const spirit_list = [spirit_temple_child_left_chest, spirit_temple_child_right_chest, spirit_temple_child_climb_east_chest, spirit_temple_child_climb_north_chest,
    spirit_temple_compass_chest, spirit_temple_early_adult_right_chest, spirit_temple_first_mirror_right_chest, spirit_temple_first_mirror_left_chest, spirit_temple_map_chest,
    spirit_temple_sun_block_room_chest, spirit_temple_statue_hand_chest, spirit_temple_ne_main_room_chest, silver_gauntlets_chest, mirror_shield_chest, spirit_temple_near_four_armos_chest,
    spirit_temple_hallway_left_invisible_chest, spirit_temple_hallway_right_invisible_chest, spirit_temple_boss_key_chest, spirit_temple_topmost_chest, twinrova_heart];
const spirit = new Area("Spirit Temple", spirit_list, 32);

const ganons_castle_forest_trial_chest = new Location("Ganons Castle Forest Trial Chest", 251);
const ganons_castle_water_trial_left_chest = new Location("Ganons Castle Water Trial Left Chest", 252);
const ganons_castle_water_trial_right_chest = new Location("Ganons Castle Water Trial Right Chest", 253);
const ganons_castle_shadow_trial_first_chest = new Location("Ganons Castle Shadow Trial First Chest", 254);
const ganons_castle_shadow_trial_second_chest = new Location("Ganons Castle Shadow Trial Second Chest", 255);
const ganons_castle_spirit_trial_first_chest = new Location("Ganons Castle Spirit Trial First Chest", 256);
const ganons_castle_spirit_trial_second_chest = new Location("Ganons Castle Spirit Trial Second Chest", 257);
const ganons_castle_light_trial_first_left_chest = new Location("Ganons Castle Light Trial First Left Chest", 258);
const ganons_castle_light_trial_second_left_chest = new Location("Ganons Castle Light Trial Second Left Chest", 259);
const ganons_castle_light_trial_third_left_chest = new Location("Ganons Castle Light Trial Third Left Chest", 260);
const ganons_castle_light_trial_first_right_chest = new Location("Ganons Castle Light Trial First Right Chest", 261);
const ganons_castle_light_trial_second_right_chest = new Location("Ganons Castle Light Trial Second Right Chest", 262);
const ganons_castle_light_trial_third_right_chest = new Location("Ganons Castle Light Trial Third Right Chest", 263);
const ganons_castle_light_trial_invisible_enemies_chest = new Location("Ganons Castle Light Trial Invisible Enemies Chest", 264);
const ganons_castle_light_trial_lullaby_chest = new Location("Ganons Castle Light Trial Lullaby Chest", 265);
const ganons_tower_boss_key_chest = new Location("Ganons Tower Boss Key Chest", 98);

const ganon_list = [ganons_castle_forest_trial_chest, ganons_castle_water_trial_left_chest, ganons_castle_water_trial_right_chest, ganons_castle_shadow_trial_first_chest,
    ganons_castle_shadow_trial_second_chest, ganons_castle_spirit_trial_first_chest, ganons_castle_spirit_trial_second_chest, ganons_castle_light_trial_first_left_chest, ganons_castle_light_trial_second_left_chest,
    ganons_castle_light_trial_third_left_chest, ganons_castle_light_trial_first_right_chest, ganons_castle_light_trial_second_right_chest,
    ganons_castle_light_trial_third_right_chest, ganons_castle_light_trial_invisible_enemies_chest, ganons_castle_light_trial_lullaby_chest, ganons_tower_boss_key_chest];
const ganon = new Area("Ganon Castle", ganon_list, 33);

const usually_list = [];
const usually = new GroupArea("Hash & Hints", usually_list, 0, 0);

const forest_area_list = [forest_kokiri, LW, meadow];
const forest_area = new GroupArea("Forest", forest_area_list, 0, 1);

const fields_list = [hyrule, kak, gy, ranch];
const fields = new GroupArea("Fields", fields_list, 0, 2);

const mountain_list = [dmt, dmc, gc, dc];
const mountain = new GroupArea("Mountain", mountain_list, 0, 3);

const zora_list = [lake, domain, river, fountain];
const zora = new GroupArea("Zora", zora_list, 0, 4);

const gerudo_list = [gerudo_valley, haunted_wasteland, gerudo_fortress, colossus];
const gerudo = new GroupArea("Gerudo", gerudo_list, 0, 5);

const hyrule_castle_list = [market, tot, castle];
const hyrule_castle = new GroupArea("Hyrule Castle", hyrule_castle_list, 0, 6);

const dungeons_child_list = [deku, dc, jabu, botw];
const dungeons_child = new GroupArea("Child Dungeons", dungeons_child_list, 0, 7);

const dungeons_adult_list = [forest, fire, water, shadow, spirit, ice, gtg, ganon];
const dungeons_adult = new GroupArea("Adult Dungeons", dungeons_adult_list, 0, 8);

const stones_list = [SM];
const stones = new GroupArea("Stones & Medallions", stones_list, 0, 9);

const song_group_list = [songs];
const songs_group = new GroupArea("Songs", song_group_list, 0, 10);

const map_list = [usually, stones, songs_group, dungeons_child, dungeons_adult, forest_area, fields, mountain, zora, gerudo, hyrule_castle];
const map = new Map(map_list);

export default map;
