<template>
	<div class="about">
		<h1>About</h1>
		<h2>Where am I?</h2>
		<p>In a non-official Plandomizer GUI for ZOoTR.</p>
		<h3>Wait, what?</h3>
		<p>Ok. Let's start from the beginning.<br/>
			ZOoTR is Zelda: Ocarina of Time Randomizer. It's a project that has for a goal to let you play The Legend of
			Zelda: Ocarina of Time again and again,
			living a different adventure each time. How does it work? At (almost) any location you would open a chest to
			get
			something, or get something from a Fairy,
			or get a Medallion after beating a Dungeon, this thing will be replaced by something else from the Item Pool
			(which contains every single item drop existing
			in the original game). This way, you could happen to open the Kokiri Sword chest behind the boulder in
			Kokiri
			Forest, and get the Mirror Shield! Or a blue rupee...</p>
		<p>You will find more about the randomizer following <a href="https://ootrandomizer.com/">this link</a>.</p>
		<h3>Okay, and what about this Plandomizer thing?</h3>
		<p>As I said, there is a Randomizer that, well, randomizes item locations. The Plandomizer is a functionality
			which
			permits setting a specific location
			for specific items. You can, for example, set the location of the Kokiri Sword in the Kokiri Sword Chest. Or
			on
			Twinrova's Heart Container drop. Or in the
			Great Fairy's Fountain that is on the top of DMT. Or anywhere.</p>
		<h3>Quoted from <a href="https://ootrandomizer.com/plandoMaker">this link</a> (all credits to <a
			href="https://ootrandomizer.com/">ootrandomizer.com</a>):</h3>
		<h4>What is the OoTR Plandomizer?</h4>
		<ul>
			<li>Plando allows you to have total control over item placement.</li>
			<li>You can place a specific item on any location and locations not specified will be filled following the
				normal
				algorithm.
			</li>
			<li>You can also specify the settings that the algorithm follows after taking your item placement into
				consideration, what items Link starts with,
				what items are in the item pool, which dungeons are vanilla or MQ, which trials are active, and where
				entrances
				lead to.
			</li>
		</ul>
		<h4>How to Plando:</h4>
		<ul>
			<li>Use the Plandomizer below to create an OoT Randomizer plandomizer file with your preferred settings,
				locations, hints shenanigans
			</li>
			<li>Most aspects of an OoTR Seed are completely customizable here. Everything not defined will still be
				randomized
				by the randomizer.
			</li>
			<li>Please note that the plandomizer is not verifying most of your settings, so it is still possible that
				the
				randomizer will reject your file if
				the settings do not fit with logic.
			</li>
			<li>Hit the Generate Plando File button to get the JSON file.</li>
			<li>Use the generated file to create YOUR seed using the OoTR Application or the Web Generator.</li>
		</ul>
		<h3>If everything exists already, then why this GUI?</h3>
		<p>This non-official Plando GUI has for a goal to be closer to the user than the official one. Less settings are
			offered to you, for the sake of clarity.</p>
		<h3>How does it work?</h3>
		<ul>
			<li>Plando your things. You can plando only a few items if you want, or all of them - I do not guarantee the
				<a
					href="https://ootrandomizer.com/generator">generator</a> to work! It returns an error if you break
				the <a
					href="https://wiki.ootrandomizer.com/index.php?title=Logic">logic</a>, or if you break some inner
				Randomizer
				rules or settings.
			</li>
			<li>Hit the "Download" button. You will get a JSON file that is to be imported in the <a
				href="https://ootrandomizer.com/generator">web generator</a>, or in any other method you'd like to use
				to
				generate your seed.
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "About"
	}
</script>

<style scoped>
	.about {
		width: 80%;
		margin: 2% auto auto;
	}

	h1 {
		text-align: center;
	}

	h2 {
		border-bottom: black 2px solid;
	}

	h3 {
		border-bottom: blue 1px solid;
	}

</style>
