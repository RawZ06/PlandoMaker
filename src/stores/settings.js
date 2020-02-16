export default [
	{
		"name": "open_forest",
		"gui_text": "Forest",
		"choices": {
			"open": "Open Forest",
			"closed_deku": "Closed Deku",
			"closed": "Closed Forest"
		}
	},
	{
		"name": "open_kakariko",
		"gui_text": "Open Kakariko Gate",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "open_door_of_time",
		"gui_text": "Open Door of Time",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "zora_fountain",
		"gui_text": "Zora\"s Fountain",
		"choices": {
			"closed": "Default Behavior (Closed)",
			"adult": "Open For Adult",
			"open": "Always Open"
		}
	},
	{
		"name": "gerudo_fortress",
		"gui_text": "Gerudo Fortress",
		"choices": {
			"normal": "Default Behavior",
			"fast": "Rescue One Carpenter",
			"open": "Open Gerudo Fortress"
		}
	},
	{
		"name": "bridge",
		"gui_text": "Rainbow Bridge Requirement",
		"choices": {
			"open": "Always Open",
			"vanilla": "Vanilla Requirements",
			"stones": "All Spiritual Stones",
			"medallions": "All Medallions",
			"dungeons": "All Dungeons",
			"tokens": "Gold Skulltula Tokens"
		}
	},
	{
		"name": "bridge_tokens",
		"gui_text": "Skulltulas Required for Bridge",
		"choices": "multiples",
		"min": 1,
		"max": 100,
		"depend": {"bridge": "tokens"}
	},
	{
		"name": "triforce_hunt",
		"gui_text": "Triforce Hunt",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "triforce_goal_per_world",
		"gui_text": "Required Triforces Per World",
		"choices": "multiples",
		"min": 1,
		"max": 100,
		"depend": {"triforce_hunt": "true"}
	},
	{
		"name": "logic_rules",
		"gui_text": "Logic Rules",
		"choices": {
			"glitchless": "Glitchless",
			"glitched": "Glitched",
			"none": "No Logic"
		}
	},
	{
		"name": "all_reachable",
		"gui_text": "All Locations Reachable",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "bombchus_in_logic",
		"gui_text": "Bombchus Are Considered in Logic",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "one_item_per_dungeon",
		"gui_text": "Dungeons Have One Major Item",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "trials_random",
		"gui_text": "Random Number of Ganon\"s Trials",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "no_escape_sequence",
		"gui_text": "Skip Tower Escape Sequence",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "no_guard_stealth",
		"gui_text": "Skip Child Stealth",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "no_epona_race",
		"gui_text": "Skip Epona Race",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "no_first_minigame_phases",
		"gui_text": "Skip First Minigame Phases",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "useful_cutscenes",
		"gui_text": "Enable Useful Cutscenes",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "fast_chests",
		"gui_text": "Fast Chest Cutscenes",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "logic_no_night_tokens_without_suns_song",
		"gui_text": "Nighttime Skulltulas Expect Sun\"s Song",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "free_scarecrow",
		"gui_text": "Free Scarecrow\"s Song",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "start_with_fast_travel",
		"gui_text": "Start with Fast Travel",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "start_with_rupees",
		"gui_text": "Start with Max Rupees",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "start_with_wallet",
		"gui_text": "Start with Tycoon\"s Wallet",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "start_with_deku_equipment",
		"gui_text": "Start with Deku Equipment",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "chicken_count_random",
		"gui_text": "Random Cucco Count",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "big_poe_count_random",
		"gui_text": "Random Big Poe Target Count",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "shuffle_kokiri_sword",
		"gui_text": "Shuffle Kokiri Sword",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "shuffle_ocarinas",
		"gui_text": "Shuffle Ocarinas",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "shuffle_weird_egg",
		"gui_text": "Shuffle Weird Egg",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "shuffle_gerudo_card",
		"gui_text": "Shuffle Gerudo Card",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "shuffle_song_items",
		"gui_text": "Shuffle Songs with Items",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "shuffle_cows",
		"gui_text": "Shuffle Cows",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "shuffle_beans",
		"gui_text": "Shuffle Magic Beans",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "shuffle_medigoron_carpet_salesman",
		"gui_text": "Shuffle Medigoron & Carpet Salesman",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "shuffle_interior_entrances",
		"gui_text": "Shuffle Interior Entrances",
		"choices": {
			"off": "Off",
			"simple": "Simple Interiors",
			"all": "All Interiors"
		}
	},
	{
		"name": "shuffle_grotto_entrances",
		"gui_text": "Shuffle Grotto Entrances",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "shuffle_dungeon_entrances",
		"gui_text": "Shuffle Dungeon Entrances",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "shuffle_overworld_entrances",
		"gui_text": "Shuffle Overworld Entrances",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "mix_entrance_pools",
		"gui_text": "Mix Entrance Pools",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "decouple_entrances",
		"gui_text": "Decouple Entrances",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "owl_drops",
		"gui_text": "Randomize Owl Drops",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "warp_songs",
		"gui_text": "Randomize Warp Song Destinations",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "spawn_positions",
		"gui_text": "Randomize Overworld Spawns",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "shuffle_scrubs",
		"gui_text": "Scrub Shuffle",
		"choices": {
			"off": "Off",
			"low": "On (Affordable)",
			"regular": "On (Expensive)",
			"random": "On (Random Prices)"
		}
	},
	{
		"name": "shopsanity",
		"gui_text": "Shopsanity",
		"choices": {
			"off": "Off",
			"0": "Shuffled Shops (0 Items)",
			"1": "Shuffled Shops (1 Items)",
			"2": "Shuffled Shops (2 Items)",
			"3": "Shuffled Shops (3 Items)",
			"4": "Shuffled Shops (4 Items)",
			"random": "Shuffled Shops (Random)"
		}
	},
	{
		"name": "tokensanity",
		"gui_text": "Tokensanity",
		"choices": {
			"off": "Off",
			"dungeons": "Dungeons Only",
			"overworld": "Overworld Only",
			"all": "All Tokens"
		}
	},
	{
		"name": "shuffle_mapcompass",
		"gui_text": "Maps & Compasses",
		"choices": {
			"remove": "Remove",
			"startwith": "Start With",
			"vanilla": "Vanilla Locations",
			"dungeon": "Dungeon Only",
			"keysanity": "Anywhere"
		}
	},
	{
		"name": "shuffle_smallkeys",
		"gui_text": "Small Keys",
		"choices": {
			"remove": "Remove (Keysy)",
			"vanilla": "Vanilla Locations",
			"dungeon": "Dungeon Only",
			"keysanity": "Anywhere (Keysanity)"
		}
	},
	{
		"name": "shuffle_bosskeys",
		"gui_text": "Boss Keys",
		"choices": {
			"remove": "Remove (Keysy)",
			"vanilla": "Vanilla Locations",
			"dungeon": "Dungeon Only",
			"keysanity": "Anywhere (Keysanity)"
		}
	},
	{
		"name": "shuffle_ganon_bosskey",
		"gui_text": "Ganon\"s Boss Key",
		"choices": {
			"remove": "Remove (Keysy)",
			"vanilla": "Vanilla Location",
			"dungeon": "Dungeon Only",
			"keysanity": "Anywhere (Keysanity)",
			"lacs_vanilla": "On LACS: Vanilla",
			"lacs_medallions": "On LACS: Medallions",
			"lacs_stones": "On LACS: Stones",
			"lacs_dungeons": "On LACS: Dungeons"
		},
		"depend": {"triforce_hunt": "false"}
	},
	{
		"name": "enhance_map_compass",
		"gui_text": "Maps and Compasses Give Information",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "mq_dungeons_random",
		"gui_text": "Random Number of MQ Dungeons",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "logic_earliest_adult_trade",
		"gui_text": "Adult Trade Sequence Earliest Item",
		"choices": {
			"pocket_egg": "Pocket Egg",
			"pocket_cucco": "Pocket Cucco",
			"cojiro": "Cojiro",
			"odd_mushroom": "Odd Mushroom",
			"poachers_saw": "Poacher\"s Saw",
			"broken_sword": "Broken Sword",
			"prescription": "Prescription",
			"eyeball_frog": "Eyeball Frog",
			"eyedrops": "Eyedrops",
			"claim_check": "Claim Check"
		}
	},
	{
		"name": "logic_latest_adult_trade",
		"gui_text": "Adult Trade Sequence Latest Item",
		"choices": {
			"pocket_egg": "Pocket Egg",
			"pocket_cucco": "Pocket Cucco",
			"cojiro": "Cojiro",
			"odd_mushroom": "Odd Mushroom",
			"poachers_saw": "Poacher\"s Saw",
			"broken_sword": "Broken Sword",
			"prescription": "Prescription",
			"eyeball_frog": "Eyeball Frog",
			"eyedrops": "Eyedrops",
			"claim_check": "Claim Check"
		}
	},
	{
		"name": "logic_lens",
		"gui_text": "Lens of Truth",
		"choices": {
			"all": "Required Everywhere",
			"chest-wasteland": "Wasteland and Chest Minigame",
			"chest": "Only Chest Minigame"
		}
	},
	{
		"name": "ocarina_songs",
		"gui_text": "Randomize Ocarina Song Notes",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "correct_chest_sizes",
		"gui_text": "Chest Size Matches Contents",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "clearer_hints",
		"gui_text": "Clearer Hints",
		"choices": [
			"true",
			"false"
		]
	},
	{
		"name": "hints",
		"gui_text": "Gossip Stones",
		"choices": {
			"none": "No Hints",
			"mask": "Hints; Need Mask of Truth",
			"agony": "Hints; Need Stone of Agony",
			"always": "Hints; Need Nothing"
		}
	},
	{
		"name": "hint_dist",
		"gui_text": "Hint Distribution",
		"choices": {
			"useless": "Useless",
			"balanced": "Balanced",
			"strong": "Strong",
			"very_strong": "Very Strong",
			"tournament": "Tournament"
		}
	},
	{
		"name": "text_shuffle",
		"gui_text": "Text Shuffle",
		"choices": {
			"none": "No Text Shuffled",
			"except_hints": "Shuffled except Hints and Keys",
			"complete": "All Text Shuffled"
		}
	},
	{
		"name": "ice_trap_appearance",
		"gui_text": "Ice Trap Appearance",
		"choices": {
			"major_only": "Major Items Only",
			"junk_only": "Junk Items Only",
			"anything": "Anything"
		}
	},
	{
		"name": "junk_ice_traps",
		"gui_text": "Ice Traps",
		"choices": {
			"off": "No Ice Traps",
			"normal": "Normal Ice Traps",
			"on": "Extra Ice Traps",
			"mayhem": "Ice Trap Mayhem",
			"onslaught": "Ice Trap Onslaught"
		}
	},
	{
		"name": "item_pool_value",
		"gui_text": "Item Pool",
		"choices": {
			"plentiful": "Plentiful",
			"balanced": "Balanced",
			"scarce": "Scarce",
			"minimal": "Minimal"
		}
	},
	{
		"name": "damage_multiplier",
		"gui_text": "Damage Multiplier",
		"choices": {
			"half": "Half",
			"normal": "Normal",
			"double": "Double",
			"quadruple": "Quadruple",
			"ohko": "OHKO"
		}
	},
	{
		"name": "starting_tod",
		"gui_text": "Starting Time of Day",
		"choices": {
			"default": "Default (10:00)",
			"random": "Random Choice",
			"sunrise": "Sunrise (6:30)",
			"morning": "Morning (9:00)",
			"noon": "Noon (12:00)",
			"afternoon": "Afternoon (15:00)",
			"sunset": "Sunset (18:00)",
			"evening": "Evening (21:00)",
			"midnight": "Midnight (00:00)",
			"witching-hour": "Witching Hour (03:00)"
		}
	},
	{
		"name": "starting_age",
		"gui_text": "Starting Age",
		"choices": {
			"child": "Child",
			"adult": "Adult",
			"random": "Random"
		}
	}
]
