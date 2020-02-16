<template>
	<div>
		<div class="alert alert-danger" role="alert">
			<span class="badge badge-danger">ALPHA VERSION</span> This is a first version ! It's a minimum viable product ! There may be some bugs ! I will fix with next versions...
			<br><span class="badge badge-danger">Discord</span> If you find a bug or you don't know how it work, go to my discord : <a href="https://discord.gg/psSGn45">Discord</a>
		</div>
		<div class="component">
			<div v-for="setting in settings">
				<md-switch :id="setting.name" v-model="choices[setting.name]">{{setting.gui_text}}</md-switch>
			</div>
		</div>
		<div style="width: 100vw; text-align: center;">
			<button class="btn btn-success" v-on:click="download()">Download</button>
		</div>
	</div>
</template>

<script>
	import settings from '../stores/settings'

	const choices = {};
	settings.forEach(setting => choices[setting] = false);

    export default {
        name: "Settings.vue",
		data() {
			return {
				settings: settings,
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
			getSettingFromKey(key) {
        		let found = null;
        		this.settings.forEach(setting => {
        			if(setting.name === key) {
        				found = setting;
        				return null;
					}
				})
				return found;
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
        	download() {
        		alert('Warning, there may be some bugs !');
        		const that = this;
        		const randoms = Object.keys(this.choices).filter(key => that.choices[key]);
        		const plando = {};
        		randoms.forEach(key => {
        			const setting = that.getSettingFromKey(key);
        			if(setting.choices === 'multiples') {
        				plando[key] = that.randomNumber(setting.min, setting.max);
					}
        			else {
        				plando[key] = that.randomItem(setting.choices);
					}
				});
				const settings_dependencies = this.settings.filter(setting => setting.depend !== undefined);
				settings_dependencies.forEach(setting => {
					const dependencies = Object.keys(setting.depend);
					dependencies.forEach(dependency => {
						if(plando[dependency] !== setting.depend[dependency]) {
							delete plando[dependency];
						}
					})
				})
        		this.downloadObjectAsJson({
					settings: plando
				}, "settings_random");
			}

		}
    }
</script>

<style scoped>
	.component {
		display: grid;
		grid-template-columns: 20% 20% 20% 20% 20%;
	}
</style>
