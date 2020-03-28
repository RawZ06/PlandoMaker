<p align="center"><img src="https://ootplandomizer.com/static/img/logo.f0cb379.png" width="400"></p>

<p align="center">
<a href="https://badgen.net/travis/rawz06/plandomizerGUI/develop"><img src="https://badgen.net/travis/rawz06/plandomizerGUI/develop" alt="Build Status"></a>
<a href="https://badgen.net/github/tags/rawz06/plandomizergui"><img src="https://badgen.net/github/tags/rawz06/plandomizergui" alt="Tags"></a>
<a href="https://badgen.net/github/tag/rawz06/plandomizergui"><img src="https://badgen.net/github/tag/rawz06/plandomizergui" alt="Latest Stable Version"></a>
	<a href="https://badgen.net/github/last-commit/rawz06/plandomizergui/develop"><img src="https://badgen.net/github/last-commit/rawz06/plandomizergui/develop" alt="Latest Commit"></a>
<a href="https://badgen.net/github/license/rawz06/plandomizergui"><img src="https://badgen.net/github/license/rawz06/plandomizergui" alt="License"></a>
</p>


## What is this?

A non-official Plandomizer GUI for ZOoTR.

You can access it with [this link](https://ootplandomizer.com)

# Wait, what?

Ok. Let's start from the beginning.
ZOoTR is Zelda: Ocarina of Time Randomizer. It's a project that has for a goal to let you play The Legend of Zelda: Ocarina of Time again and again, living a different adventure each time. How does it work? At (almost) any location you would open a chest to get something, or get something from a Fairy, or get a Medallion after beating a Dungeon, this thing will be replaced by something else from the Item Pool (which contains every single item drop existing in the original game). This way, you could happen to open the Kokiri Sword chest behind the boulder in Kokiri Forest, and get the Mirror Shield! Or a blue rupee...

You will find more about the randomizer following this [link](https://ootrandomizer.com/).

# Okay, and what about this Plandomizer thing?

As I said, there is a Randomizer that, well, randomizes item locations. The Plandomizer is a functionality added by the devs of the Randomizer which permits setting a specific location for specific items. You can, for example, set the location of the Kokiri Sword in the Kokiri Sword Chest. Or on Twinrova's Heart Container drop. Or in the Great Fairy's Fountain that is on the top of DMT. Or anywhere.

# Quoted from [this link](https://ootrandomizer.com/plandoMaker) (all credits to ootrandomizer.com):
What is the OoTR Plandomizer?
- Plando allows you to have total control over item placement.
- You can place a specific item on any location and locations not specified will be filled following the normal algorithm.
- You can also specify the settings that the algorithm follows after taking your item placement into consideration, what items Link starts with, what items are in the item pool, which dungeons are vanilla or MQ, which trials are active, and where entrances lead to.

How to Plando:
- Use the Plandomizer below to create an OoT Randomizer plandomizer file with your preferred settings, locations, hints shenanigans
- Most aspects of an OoTR Seed are completely customizable here. Everything not defined will still be randomized by the randomizer.
- Please note that the plandomizer is not verifying most of your settings, so it is still possible that the randomizer will reject your file if the settings do not fit with logic.
- Hit the Generate Plando File button to get the JSON file.
- Use the generated file to create YOUR seed using the OoTR Application or the Web Generator.

# If everything exists, then why this GUI?

This non-official Plando GUI has for a goal to be closer to the user than the official one. Less settings are offered to you, for the sake of clarity.

# How does it work?

- Plando your things. You can plando only a few items if you want, or all of them - I do not guarantee the [generator](https://ootrandomizer.com/generator) to work! It returns an error if you break the [logic](https://wiki.ootrandomizer.com/index.php?title=Logic), or if you break some inner Randomizer rules or settings.
- Hit the "Download" button. You will get a JSON file that is to be imported in the [web generator](https://ootrandomizer.com/generator), or in any other method you'd like to use to generate your seed.

# [NEW] Settings Randomizer is now available!
In the "Settings Randomizer" tab on this website, you have now access to a GUI for randomizing any seed setting	you would like to randomize. Just check a setting, select every option you want in the pool for this setting, and let the randomizer choose the settings of your seed for you! You can choose as many settings as you want.	Once you're done with configurations, hit the "Download" button. Then, on the Randomizer, select a preset with non-random settings to get the default value for every setting, generate your settings, and put the previously downloaded JSON file into your freshly generated plando file. Enjoy!

Please note that at this moment, this Settings Randomizer is specifically made to work with Roman's fork of the	Randomizer. We do not guarantee a 100% compatibility with any other Randomizer.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## LICENSE

This reposity is under GNU's General Public License (GPL). You can use this repository, but every modification must be published.

## CONTRIBUTORS

RawZ06 (Project lead) ; Et0san ; Touyet
