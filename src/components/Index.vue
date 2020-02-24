<template>
	<div v-if="current_area !== null">
		<div class="app">
			<div class="left">
				<div class="list-group">
					<h5 class="text-center">Group Area</h5>
					<div class="group"
						 v-bind:key="group.group_area_id"
						 v-for="group in map.groups_area">
						<div class="list-group-item list-group-item-action active" v-if="group.name === group_area.name"
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
							 v-if="current_area != null && area.name === current_area.name"
							 v-on:click="changeArea(area)">
							{{area.name}}
						</div>
						<div class="list-group-item list-group-item-action" v-else v-on:click="changeArea(area)">
							{{area.name}}
						</div>
					</div>
					<div>
						<div class="list-group-item list-group-item-action active"
							 v-if="group_area.group_area_id === 0 && current_area === -1"
							 v-on:click="changeArea(-1)">
							Hash
						</div>
						<div class="list-group-item list-group-item-action" v-else-if="group_area.group_area_id === 0"
							 v-on:click="changeArea(-1)">
							Hash
						</div>
					</div>
					                <div>
					                    <div class="list-group-item list-group-item-action active" v-if="group_area.group_area_id === 0 && current_area === -2"
					                         v-on:click="changeArea(-2)">
					                        Gossip
					                    </div>
					                    <div class="list-group-item list-group-item-action" v-else-if="group_area.group_area_id === 0"
					                         v-on:click="changeArea(-2)">
					                        Gossip
					                    </div>
					                </div>
				</div>
				<div v-bind:class="[(group_area.group_area_id === 0 && current_area === -1) ? 'content' : 'col-md-12' ]">
					<div v-if="current_area !== -1 && current_area !== -2 && current_area !== undefined">
						<div
							v-bind:key="location.location_id"
							v-for="location in current_area.locations"
						>
							<div class="row border">
								<div class="location-left"><label :for="location.name">{{location.name}}</label></div>
								<div class="location-right">
									<md-field style="width:auto; margin: 0;" v-if="current_area.area_id === 0">
										<md-select v-model="plando[location.name]">
											<md-option default value=""/>
											<md-option
												v-bind:key="item.item_id"
												v-bind:value="item.name"
												v-for="item in items.sm"
											>{{item.name}}
											</md-option>
										</md-select>
									</md-field>
									<md-field style="width:auto; margin: 0;" v-else-if="current_area.area_id === 1">
										<md-select v-model="plando[location.name]">
											<md-option default value=""/>
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
											<md-option default value=""/>
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
							</div>
						</div>
					</div>
					<div v-if="current_area === -1">
						<div class="hash_list">
							<div style="margin: 1%" v-for="i in 5">
								<img :src="hash_list[hash_code[i-1]]" alt="" class="d-block m-auto"
									 v-if="hash_code[i-1] !== 'none'" v-on:click="open('#hash_' + i)">
								<md-field style="width:auto; margin: 0;">
									<md-select :id="'hash_' + i" class="selectpicker" v-model="hash_code[i-1]">
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
					<div v-else-if="current_area === -2">
						<div class="alert alert-warning" role="alert">
							<img height="20px" width="20px" src="https://image.flaticon.com/icons/svg/158/158591.svg" alt="">
							This version of hint is not automatic ! <br>
							There is no color management of hint (blue for woth, purple for foolish for example)<br>
							There is no control location's content (you can make a gossip stone lie) <br>
							It's work in progress and will be added in futures versions.
						</div>
						<md-list>
							<md-list-item
								v-for="hint in gossip_list.slice(5*(page_hint-1), 5*page_hint)"
								v-bind:key="hint"
							>
								<md-field>
									<label>{{hint}}</label>
									<md-input v-model="gossip_hint[hint]"/>
									<span class="md-helper-text">Write your hint for {{hint}}</span>
								</md-field>
							</md-list-item>
						</md-list>
						<div class="paginator">
							<Paginator v-on:pageChange="changePageHint" :page="page_hint" :max-page="gossip_list.length / 5 - 1"/>
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

	import gossip_list from "../stores/gossip_list";
	import gossip_hint from "../stores/gossip_hint";

	import Paginator from "./Paginator";

	export default {
		name: "Index",
		components: {Paginator},
		data() {
			return {
				id: this.$route.params.id,
				name: "name",
				map: map,
				group_area: map.groups_area[0],
				current_area: -1,
				area_list: [],
				items: items,
				plando: {},
				item_pool: item_pool,
				hash_list: hash_list,
				hash_code: ["", "", "", "", ""],
				gossip_list: gossip_list,
				gossip_hint: gossip_hint,
				page_hint: 1
			}
		},
		methods: {
			changeGroup(group) {
				this.success = false;
				this.group_area = group;
				if(group.group_area_id !== 0)
					this.current_area = this.group_area.areas[0];
				else
					this.current_area = -1;
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
				Object.keys(json.gossip_stones).forEach(key => {
					this.gossip_hint[key] = json.gossip_stones[key].text;
				});
			},
			upload() {
				$('#upload').focus().click();
			},
			download() {
				const src = {
					item_pool: this.getItemPool(),
					locations: this.filter(this.plando),
					gossip_stones: this.getGossipStones()
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
					if (att.length === 0) {}
					else copy[key] = att;
				});
				return copy;
			},
			changePageHint(index) {
				this.page_hint = index;
			},
			getGossipStones() {
				const data = {};
				this.gossip_list.forEach(gossip => {
					if(this.gossip_hint[gossip] !== undefined && this.gossip_hint[gossip] !== null && this.gossip_hint[gossip].length > 0)
					data[gossip] = {
						text: this.gossip_hint[gossip]
					}
				});
				return data;
			}
		},
		mounted() {
			// console.log(this.$route.params.id);
			this.name = "undefined";
			this.current_area = -1;
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

	.paginator {
		margin-top: 20px
	}

</style>

<style>
	.md-list-item-content {
		min-height: 0;
	}
</style>
