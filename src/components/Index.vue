<template>
	<div v-if="current_area !== null">
		<div class="app">
			<div class="left">
				<div class="list-group">
					<h5 class="text-center">Group Area</h5>
					<div class="group"
						 v-bind:key="group.group_area_id"
						 v-for="group in map.groups_area">
						<div class="list-group-item list-group-item-action active" v-if="group.name == group_area.name"
							 v-on:click="changeGroup(group)">
							{{group.name}}
						</div>
						<div class="list-group-item list-group-item-action" v-else v-on:click="changeGroup(group)">
							{{group.name}}
						</div>
					</div>
				</div>
			</div>
			<div class="right">
				<h5 class="text-center">Area</h5>
				<div class="list-group group">
					<div
						v-bind:key="area.area_id"
						v-for="area in group_area.areas"
					>
						<div class="list-group-item list-group-item-action active"
							 v-if="current_area != null && area.name == current_area.name"
							 v-on:click="changeArea(area)">
							{{area.name}}
						</div>
						<div class="list-group-item list-group-item-action" v-else v-on:click="changeArea(area)">
							{{area.name}}
						</div>
					</div>
					<div>
						<div class="list-group-item list-group-item-action active"
							 v-if="group_area.group_area_id == 0 && current_area == -1"
							 v-on:click="changeArea(-1)">
							Hash
						</div>
						<div class="list-group-item list-group-item-action" v-else-if="group_area.group_area_id == 0"
							 v-on:click="changeArea(-1)">
							Hash
						</div>
					</div>
					<!--                <div>-->
					<!--                    <div class="list-group-item list-group-item-action active" v-if="group_area.group_area_id == 0 && current_area == -2"-->
					<!--                         v-on:click="changeArea(-2)">-->
					<!--                        Gossip<span class="badge badge-danger">New</span>-->
					<!--                    </div>-->
					<!--                    <div class="list-group-item list-group-item-action" v-else-if="group_area.group_area_id == 0"-->
					<!--                         v-on:click="changeArea(-2)">-->
					<!--                        Gossip<span class="badge badge-danger">New</span>-->
					<!--                    </div>-->
					<!--                </div>-->
				</div>
				<div class="content">
					<div
						v-bind:key="location.location_id"
						v-for="location in current_area.locations"
					>
						<div class="row border">
							<div class="location-left"><label :for="location.name">{{location.name}}</label></div>
							<div class="location-right">
								<md-field style="width:auto; margin: 0;" v-if="current_area.area_id == 0">
									<md-select v-model="plando[location.name]">
										<md-option default value=""></md-option>
										<md-option
											v-bind:key="item.item_id"
											v-bind:value="item.name"
											v-for="item in items.sm"
										>{{item.name}}
										</md-option>
									</md-select>
								</md-field>
								<md-field style="width:auto; margin: 0;" v-else-if="current_area.area_id == 1">
									<md-select v-model="plando[location.name]">
										<md-option default value=""></md-option>
										<md-option
											v-bind:key="item.item_id"
											v-bind:value="item.name"
											v-for="item in items.songs"
										>{{item.name}}
										</md-option>
									</md-select>
								</md-field>
								<md-field style="width:auto; margin: 0;" v-else>
									<md-select class="selectpicker" data-live-search="true" data-show-subtext="true"
											   v-model="plando[location.name]">
										<md-option default value=""></md-option>
										<md-optgroup
											v-bind:key="group_items.group_item_id"
											v-bind:label="group_items.name"
											v-for="group_items in items.items"
										>
											<md-option
												v-bind:key="item.item_id"
												v-bind:value="item.name"
												v-for="item in group_items.items"
											>{{item.name}}
											</md-option>
										</md-optgroup>
									</md-select>
								</md-field>
							</div>
							<!-- <div class="col"><input v-model="plando[location.name]" class="form-control" :id="location.name" type="text"></div> -->
						</div>
					</div>
					<div v-if="current_area == -1">
						<div class="hash_list">
							<div style="margin: 1%" v-for="i in 5">
								<img :src="hash_list[hash_code[i-1]]" alt="" class="d-block m-auto"
									 v-if="hash_code[i-1] !== 'none'" v-on:click="open('#hash_' + i)">
								<img alt="" class="d-block m-auto" src="https://ootrandomizer.com/img/hash/none.png"
									 v-else>
								<md-field style="width:auto; margin: 0;">
									<md-select :id="'hash_' + i" class="selectpicker" v-model="hash_code[i-1]">
										<md-option default value=""></md-option>
										<md-option
											v-bind:key="hash"
											v-bind:value="hash"
											v-for="hash in Object.keys(hash_list)"
										>{{hash}}
										</md-option>
									</md-select>
								</md-field>
							</div>
						</div>
					</div>
					<div v-else-if="current_area == -2">
						<div class="m-2">
							<label>Choose the gossip stone</label>
							<md-field style="width:auto; margin: 0;">
								<md-select class="selectpicker" v-model="current_gossip">
									<md-option
										v-bind:key="gossip"
										v-bind:value="gossip"
										v-for="gossip in gossip_list"
									>{{gossip}}
									</md-option>
								</md-select>
							</md-field>
						</div>
						<div class="m-2">
							<label>Choose the category</label>
							<md-field style="width:auto; margin: 0;">
								<md-select class="selectpicker" v-model="hints[current_gossip]['category']">
									<md-option value="WOTH">Way of the Hero</md-option>
									<md-option value="Foolish">Foolish/Barren of Treasure</md-option>
									<md-option value="Always">Always Hint</md-option>
									<md-option value="Sometime">Sometime hint</md-option>
									<md-option value="Other">Custom</md-option>
								</md-select>
							</md-field>
						</div>
						<div
							v-if="hints[current_gossip]['category'] === 'WOTH' || hints[current_gossip]['category'] === 'Foolish'">
							<label>Choose the Area</label>
							<md-field style="width:auto; margin: 0;">
								<md-select class="selectpicker" v-model="hints[current_gossip]['area']">
									<md-option
										v-bind:key="area"
										v-bind:value="area"
										v-for="area in area_list"
									>{{area}}
									</md-option>
								</md-select>
							</md-field>
						</div>
						<div v-if="hints[current_gossip]['category'] === 'Always'">
							<label>Choose the always hint</label>
							<md-field style="width:auto; margin: 0;">
								<md-select class="selectpicker" v-model="hints[current_gossip]['hint']">
									<md-option value="30skull">30 Gold Skulltulas</md-option>
									<md-option value="40skull">40 Gold Skulltulas</md-option>
									<md-option value="50skull">50 Gold Skulltulas</md-option>
									<md-option value="BGS">Biggoron</md-option>
									<md-option value="Skull Mask">Skull Mask</md-option>
									<md-option value="frogs">Frogs</md-option>
									<md-option value="OoT">OoT</md-option>
								</md-select>
							</md-field>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom" id="footer">
			<div class="d-inline-block">
				<input accept="application/JSON" id="upload" type="file" v-on:change="take_json_uploaded">
				<button class="btn btn-primary d-inline-block" v-on:click="upload()">Upload</button>
			</div>
			<button class="btn btn-success d-inline-block" v-on:click="download()">Download</button>
		</div>
	</div>
</template>

<script>

	import map from '../stores/map'
	import items from '../stores/item'
	import item_pool from '../stores/item_pool'
	import hash_list from '../stores/hash_list'
	import 'bootstrap-select'
	import $ from 'jquery'
	import gossip_list from '../stores/gossip_list'
	import gossip_hint from '../stores/gossip_hint'

	export default {
		name: "Index",
		data() {
			return {
				id: this.$route.params.id,
				name: "name",
				map: map,
				group_area: map.groups_area[0],
				current_area: null,
				area_list: [],
				items: items,
				plando: {},
				item_pool: item_pool,
				hash_list: hash_list,
				hash_code: ["none", "none", "none", "none", "none"],
				gossip_list: gossip_list,
				current_gossip: gossip_list[0],
				hints: gossip_hint
			}
		},
		methods: {
			changeGroup(group) {
				this.success = false;
				this.group_area = group;
				this.current_area = this.group_area.areas[0];
			},
			changeArea(area) {
				this.success = false;
				this.current_area = area;
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
			take_json_uploaded(event) {
				const reader = new FileReader();
				reader.readAsText(event.target.files[0]);
				reader.onload = this.import_plando;
			},
			import_plando(evt) {
				const json = JSON.parse(evt.target.result);
				const plando = {};
				Object.keys(json.locations).forEach(key => {
					const att = json.locations[key];
					if (att.item !== undefined) {
						plando[key] = att.item;
					} else {
						plando[key] = att;
					}
				});
				if (json.file_hash !== undefined) this.hash_code = json.file_hash;
				else this.hash_code = ["none", "none", "none", "none", "none"];
				this.plando = plando;
			},
			upload() {
				$('#upload').focus().click();
			},
			download() {
				const src = {
					item_pool: this.getItemPool(),
					locations: this.filter(this.plando)
				};
				if (this.hash_code.indexOf("none") < 0) {
					src.file_hash = this.hash_code
				}
				this.downloadObjectAsJson(src, this.name);
			},
			getItemPool() {
				let item_pool = JSON.parse(JSON.stringify(this.item_pool));
				Object.keys(this.plando).forEach(key => {
					const att = this.plando[key];
					if (item_pool.hasOwnProperty(att))
						item_pool[att]++;
				});
				Object.keys(item_pool).forEach(key => {
					if (item_pool[key] === 0) item_pool[key] = undefined
				});
				return item_pool;
			},
			filter(plando) {
				const copy = {};
				Object.keys(plando).forEach(key => {
					const att = plando[key];
					if (att.length === 0) return;
					else copy[key] = att;
				});
				return copy;
			},
		},
		mounted() {
			// console.log(this.$route.params.id);
			this.name = "undefined";
			this.current_area = this.group_area.areas[0];
			this.plando = {};
			this.area_list = [];
			for (const i in this.map.groups_area) {
				for (const j in this.map.groups_area[i].areas) {
					this.area_list.push(this.map.groups_area[i].areas[j].name)
				}
			}
		}
	}
</script>

<style scoped>
	.row {
		margin: 15px 0;
		flex-direction: column;
	}

	.app {
		display: flex;
		flex-direction: column;
		width: 100vw;
		min-height: 75vh;
	}

	.list-group {
		flex-direction: column;
	}

	.group {
		cursor: pointer;
		margin: 5px;
	}

	.group:hover {
		color: gray;
	}

	.row {
		margin: 0;
		position: relative;
	}

	.bottom {
		margin-top: 5%;
		text-align: center;
	}

	input[type="file"] {
		display: none;
	}

	.location-left {
		background: rgba(235, 237, 246, 0.8);
		text-align: center;
	}

	.hash_list {
		display: flex;
		flex-direction: column;
	}

	@media screen and (min-width: 640px) {
		.right {
			width: 100%;
		}
		.app {
			flex-direction: row;
		}

		.row {
			flex-direction: row;
			justify-content: space-between;
		}

		.right > .list-group {
			flex-direction: row;
			align-items: stretch;
		}

		h5 {
			display: none;
		}

		.location-left {
			background: white;
			text-align: left;
		}

		.location-left > label {
			position: relative;
			top: 50%;
			transform: translateY(-50%);
		}

		.location-right {
			min-width: 100px;
		}

		.hash_list {
			display: flex;
			flex-direction: column;
		}

		.content {
			width: 80%;
			margin: auto;
		}

		.hash_list {
			flex-direction: row;
		}
	}

</style>

<style>
	.md-list-item-content {
		min-height: 0;
	}
</style>
