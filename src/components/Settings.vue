<template>
	<div>
		<div class="alert alert-danger" role="alert">
			<span class="badge badge-danger">BETA VERSION</span> This is a beta version ! There may be some bugs ! I will fix with next versions...
			<br><span class="badge badge-danger">Discord</span> If you find a bug or you don't know how it work, go to my discord : <a href="https://discord.gg/psSGn45">Discord</a>
		</div>
		<md-tabs v-on:md-changed="changeTab" class="md-primary">
			<md-tab v-for="tab in Object.keys(settings)" :id="tab" :key="tab" :md-label="tab" />
			<md-tab id="Help" md-label="Help" />
		</md-tabs>
		<div v-if="tab === 'Starting Inventory'">
			<h1>Work In Progress (WIP)... Soon.</h1>
		</div>
		<div v-if="tab === 'Help'">
			<h1><span class="badge badge-success">Tutorial</span></h1>
			<h2>Step 1</h2>
			<p>For each setting that you want to randomize, select it. If the setting has a list of choices, select all choices that you want</p>
			<h2>Step 2</h2>
			<p>Download the json file with the "Download" button</p>
			<h2>Step 3</h2>
			<p>Open Roman's Fork app and select the preset that you want (it's for settings that you don't have check and select default value)</p>
			<h2>Step 4</h2>
			<p>Insert on plando file the json download previously</p>

			<h1><span class="badge badge-warning">Information</span></h1>
			<p>It's only for Roman's fork actually</p>
		</div>
		<div class="component">
			<div v-for="setting in settings[tab]">
				<md-switch :id="setting.name" v-model="choices[setting.name].active">{{setting.gui_text}}</md-switch>
				<div>
					<md-field v-if="setting.type === 'list' && choices[setting.name].active === true">
						<label>Settings allowed</label>
						<md-select v-model="choices[setting.name].allow" multiple>
							<md-option :key="choice" :value="choice" v-for="choice in Object.keys(setting.choices)">{{setting.choices[choice]}}
							</md-option>
							<md-button v-on:click="() => {choices[setting.name].allow = Object.keys(setting.choices)}" class="md-raised md-primary" v-if="choices[setting.name].allow.length === 0">Select all</md-button>
							<md-button v-on:click="() => {choices[setting.name].allow = []}" class="md-raised md-primary" v-else>Deselect all</md-button>
						</md-select>
					</md-field>
					<md-field style="background: #EEE" v-else-if="setting.type === 'list'">
						<label>Settings allowed</label>
						<md-select class="md-secondary" disabled/>
					</md-field>
				</div>
			</div>
		</div>
		<div style="width: 100vw; text-align: center;">
			<button class="btn btn-success" v-on:click="download()">Download</button>
		</div>
	</div>
</template>

<script>
	import settings from '../stores/settings.json'

	const choices = {};

	Object.values(settings).forEach(settinglist => {
		settinglist.forEach(setting => {
			choices[setting.name] = {
				type: setting.type,
				active: false,
				allow: [],
				min: setting.type === 'scale' ? setting.min : undefined,
				max: setting.type === 'scale' ? setting.max : undefined,
				depend: setting.depend,
				gui_text: setting.gui_text
			}
		})
	})

    export default {
        name: "Settings.vue",
		data() {
			return {
				settings: settings,
				tab: "Main Rules",
				choices: choices
			}
		},
		methods: {
        	randomItem(items) {
        		if(typeof items[0] === "string")
        			return items[Math.floor(Math.random() * items.length)]
				else
					return Object.keys(items)[Math.floor(Math.random() * Object.keys(items).length)]
			},
			randomNumber(min, max) {
				return Math.floor(Math.random() * (max - min + 1) + min);
			},
			randomBoolean() {
				return this.randomNumber(0, 1) === 0;
			},
			downloadObjectAsJson(exportObj, exportName) {
				const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 4));
				const downloadAnchorNode = document.createElement('a');
				downloadAnchorNode.setAttribute("href", dataStr);
				downloadAnchorNode.setAttribute("download", exportName + ".json");
				document.body.appendChild(downloadAnchorNode); // required for firefox
				downloadAnchorNode.click();
				downloadAnchorNode.remove();
			},
			changeTab(tab) {
        		this.tab = tab
			},
			generate() {
        		const err = [];
        		const settings = {};
        		const choicesTrue = Object.keys(this.choices).filter(key => this.choices[key].active);
        		choicesTrue.forEach(key => {
        			const setting = this.choices[key];
        			if(setting.type === 'list') {
        				if(setting.allow.length === 0) {
        					err.push('The setting "' + setting.gui_text + '" is randomized but has no element allowed')
						}
        				settings[key] = this.randomItem(setting.allow);
					} else if(setting.type === 'boolean') {
        				settings[key] = this.randomBoolean()
					} else {
        				settings[key] = this.randomNumber(setting.min, setting.max)
					}
				});
				if(err.length > 0)
				{
					alert(err.join('\n'));
					return null;
				}
				const dependencies = this.getDependencies();
				Object.keys(dependencies).forEach(settingToRemove => {
					const depend = dependencies[settingToRemove].depend;
					Object.keys(depend).forEach(key => {
						if(settings[key] !== depend[key]) {
							delete settings[settingToRemove];
						}
					})
				});
				console.log(settings);
				return settings;
			},
			getDependencies() {
        		const dependencies_settings = Object.keys(this.choices).filter(key => this.choices[key].depend !== undefined);
				const dependenciesObject = {};
				dependencies_settings.forEach(key => {
					dependenciesObject[key] = this.choices[key];
				});
				return dependenciesObject;
			},
			download() {
        		const settings = this.generate();
        		if(settings === null) {}
        		else this.downloadObjectAsJson({
					"settings":settings
				}, 'settings_random');
			}
		}
    }
</script>

<style scoped>
	.component {
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-column-gap: 10px;
		grid-row-gap: 15px;
	}

	.component > div {
		background: #fafafa
	}
</style>
