<template>
    <div>
        <h1>Changelog</h1>
        <div>
            <md-tabs v-on:md-changed="changeTab">
                <md-tab id="classic-version" md-label="Classic" />
                <md-tab id="beta-3-version" md-label="V3 BETA" />
            </md-tabs>
            <div v-if="tab === 'classic-version'">
                <h3>
                    VERSION 3.2.5
                    <span class="badge badge-danger">New</span>
                </h3>
                <ul>
                    <li>Fixing slider don't save when we change tab</li>
                </ul>
                <h3>VERSION 3.2.4</h3>
                <ul>
                    <li>Release 3.2.x</li>
                    <li>Update readme</li>
                </ul>
                <h3>
                    VERSION 3.2.3
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Import 3.1.2 from release</li>
                </ul>
                <h3>
                    VERSION 3.2.2
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Import 3.1.1 from release</li>
                </ul>
                <h3>
                    VERSION 3.2.1
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Disable slider dragg by default</li>
                </ul>
                <h3>
                    VERSION 3.2.0
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Reworking slider to chooses min and max values of settings randomizer (like number of skull ect...)</li>
                </ul>
                <h3>VERSION 3.1.2</h3>
                <ul>
                    <li>Starting equipment : Sort item list</li>
                    <li>Starting equipment : Rename a few label</li>
                </ul>
                <h3>VERSION 3.1.1</h3>
                <ul>
                    <li>Starting equipment : The items selection was not random</li>
                    <li>Starting equipment : Rename a few label</li>
                </ul>
                <h3>VERSION 3.1.0</h3>
                <ul>Create a clean déployment system with two branch, master with ootplandomizer.com and develop with dev.ootplandomizer.com</ul>
                <h3>VERSION 3.0.7</h3>
                <ul>
                    <li>Bug fix buttons position at home page</li>
                    <li>Bug fix hidden burger menu</li>
                </ul>
                <h3>VERSION 3.0.6</h3>
                <ul>Nothing just for test CI</ul>
                <h3>VERSION 3.0.5</h3>
                <ul>
                    <li>Adding elements for SEO</li>
                </ul>
                <h3>VERSION 3.0.4</h3>
                <ul>
                    <li>Create 404 page</li>
                    <li>Footer always at bottom of page</li>
                    <li>Adding link to home on logo</li>
                </ul>
                <h3>VERSION 3.0.3</h3>
                <ul>
                    <li>Create favicon</li>
                    <li>Create logo and insert it</li>
                    <li>Adding option to preview settings selected</li>
                    <li>Adding starting with : "Hearts", "Consumables", "Rupees" settings</li>
                    <li>Bug fix starting inventory, it selected always the min</li>
                    <li>Set auto save to true if back-up exist</li>
                </ul>
                <h3>VERSION 3.0.2</h3>
                <ul>
                    <li>Removing hashbang from url</li>
                </ul>
                <h3>VERSION 3.0.1</h3>
                <ul>
                    <h5>Only for the PlandoMaker</h5>
                    <li>Moving button download and upload</li>
                    <li>Reset all system</li>
                    <li>Save system</li>
                    <li>Fix flex position hash code</li>
                </ul>
                <h3>VERSION 3.0.0</h3>
                <ul>
                    <li>Create settings random maker (go to V3 BETA to have more information)</li>
                    <li>Reworking changelog page to add beta changelog in new tab</li>
                </ul>
                <h3>VERSION 2.3.2</h3>
                <ul>
                    <li>Add license information</li>
                    <li>Add link to github</li>
                </ul>
                <h3>VERSION 2.3.1</h3>
                <ul>
                    <li>Fix some english mistakes</li>
                    <li>More space for gossip region</li>
                    <li>Fix bug when remove element hash, the "?" didn't appear</li>
                    <li>Change designation for barren item and major item.</li>
                </ul>
                <h3>VERSION 2.3.0</h3>
                <ul>
                    <li>First version of gossip stones : You can insert hint for all gossips stones</li>
                    <li>Create two categories for all dungeons : child and adult</li>
                    <li>Remove "Usually" and replace to 3 categories : "Hash & Hints", "Stones & Medallions" and "Songs"</li>
                </ul>
                <h3>VERSION 2.2.1</h3>
                <ul>
                    <li>Fix menu position, it was not same result as local</li>
                </ul>
                <h3>VERSION 2.2.0</h3>
                <ul>
                    <li>Reworking css for responsiveness</li>
                    <li>This website can be used on mobile/tablet, it's responsive</li>
                </ul>
                <h3>VERSION 2.1.3</h3>
                <ul>
                    <li>Add About page</li>
                    <li>Fix bottom buttons position</li>
                </ul>
                <h3>VERSION 2.1.2</h3>
                <ul>
                    <li>New design for all select</li>
                    <li>Customization hash seed</li>
                </ul>
                <h3>VERSION 2.1.1</h3>
                <ul>
                    <li>Import of existing plando is now available</li>
                    <li>Generating plando 5.x (dev and release) compatible</li>
                    <li>Removing some console errors</li>
                </ul>
                <h3>VERSION 2.1</h3>
                <ul>
                    <li>Removing back-end server and save system</li>
                </ul>
                <h3>
                    VERSION 2.0.6
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Removing Skull Mask double location</li>
                </ul>
                <h3>
                    VERSION 2.0.5
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Fixing bug, can't open GTG</li>
                </ul>
                <h3>
                    VERSION 2.0.4
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Download plando don't add locations</li>
                    <li>Removing page numbering when there is only one page</li>
                </ul>
                <h3>
                    VERSION 2.0.3
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>Nothing, just for me</ul>
                <h3>
                    VERSION 2.0.2
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>
                        Bugfix : If you fill a location with a blank item, it is removed of the list when you download the
                        plando
                    </li>
                </ul>
                <h3>
                    VERSION 2.0.1
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Removing double locations</li>
                    <li>Creating page without signup</li>
                    <li>Add item_pool in json generated (resolve plando errors with bottle and trade item for example)</li>
                    <li>Creating page version</li>
                </ul>
            </div>
            <div v-else-if="tab === 'beta-3-version'">
                <h2>Settings Random version</h2>
                <h3>
                    VERSION 3.0.0 B-12
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Adding save system</li>
                    <li>Moving download button</li>
                    <li>Adding Reset all" button</li>
                </ul>
                <h3>
                    VERSION 3.0.0 B-11
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Rephrasing description pages (About, Changelog, Settings)</li>
                    <li>Added credits to contributors</li>
                </ul>
                <h3>
                    VERSION 3.0.0 B-10
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Fix console error with md-dialog</li>
                    <li>Add warning message when you select a setting with non-randomized dependencies (for example, when you randomize the number of needed tokens for the bridge but you didn't randomize the bridge requirements)</li>
                    <li>Bug fix dependency settings: when the setting is not selected, it defaults to false</li>
                </ul>
                <h3>
                    VERSION 3.0.0 B-9
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Add starting inventory</li>
                </ul>
                <h3>
                    VERSION 3.0.0 B-8
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Create range input to take minimum and maximum value</li>
                    <li>Change alert message when you have an error, changed by a modal</li>
                    <li>Update help tab</li>
                </ul>
                <h3>
                    VERSION 3.0.0 B-7
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Import 2.3.2</li>
                </ul>
                <h3>
                    VERSION 3.0.0 B-6
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Bug fix settings dependencies (aka removing number skull bridge if bridge token is not choice by the program for example)</li>
                    <li>Create select all/deselect all button</li>
                </ul>
                <h3>
                    VERSION 3.0.0 B-5
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Create a select to choice what setting can be selected</li>
                    <li>Create tab like rando and sort settings</li>
                    <li>Some Bug fix</li>
                    <li>Update with the new version (removing Start with)</li>
                    <li>Help tab</li>
                </ul>
                <h3>
                    VERSION 3.0.0 B-4
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Import 2.3.1</li>
                </ul>
                <h3>
                    VERSION 3.0.0 B-3
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Add discord link</li>
                    <li>Fix mistake spelling</li>
                </ul>
                <h3>
                    VERSION 3.0.0 B-2
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>
                        Create random settings MVP
                        <span class="badge badge-danger">ALPHA version</span>
                    </li>
                </ul>
                <h3>
                    VERSION 3.0.0
                    <span class="badge badge-danger">BETA</span>
                </h3>
                <ul>
                    <li>Create random settings creator section</li>
                </ul>
            </div>
        </div>
        <small>*Todo list is features I want to implement but which are not guaranteed to be developed</small>
    </div>
</template>

<script>
export default {
    name: "Changelog",
    data() {
        return {
            tab: "classic-version"
        };
    },
    methods: {
        changeTab(tab) {
            this.tab = tab;
        }
    }
};
</script>
