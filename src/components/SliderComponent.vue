<template>
	<div>
		<div class="ui-slider" ref="slider" tabindex="0">
			<div class="ui-slider-containment" ref="container"></div>

			<div class="ui-slider-wrapper">
				<div class="ui-slider-track-container">
					<div class="ui-slider-track"></div>
					<div class="ui-slider-track-fill" ref="fillValue" v-bind:class="{disabled:isDisabled}"></div>
				</div>

				<div class="ui-slider-thumb-container" ref="thumb_min">
					<div class="ui-slider-focus-ring" v-bind:class="{'disabled-focus':isDisabled}"></div>
					<div class="ui-slider-thumb" v-bind:class="{'disabled-thumb':isDisabled}"></div>
				</div>

				<div class="ui-slider-thumb-container" ref="thumb_max">
					<div class="ui-slider-focus-ring" v-bind:class="{'disabled-focus':isDisabled}"></div>
					<div class="ui-slider-thumb" v-bind:class="{'disabled-thumb':isDisabled}"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Draggabilly from "draggabilly";

	export default {
		name: "SliderComponent",
		props: {
			minValue: {default: 0, type: Number},
			maxValue: {default: 0, type: Number},
			disabled: Boolean
			// gui_text: String
		},
		data: function () {
			return {
				max: 0,
				min: 0,
				maxVal: 100,
				isDraggable: false,
				isDisabled: false,
				draggMax: null,
				draggMin: null
				// parentText: ""
			};
		},
		mounted: function () {
			this.maxVal = this.maxValue;
			this.max = this.maxVal;
			this.min = this.minValue;
			this.isDisabled = this.disabled;
			// this.parentText = this.gui_text;
			this.updateThumb(this.$refs.thumb_max, this.max);
			this.updateThumb(this.$refs.thumb_min, this.min);
			this.updateSlider(this.max - this.min, this.min);
			this.draggMax = new Draggabilly(this.$refs.thumb_max, {
				axis: "x",
				containment: this.$refs.container,
				grid: [
					this.$refs.slider.getBoundingClientRect().width / (this.maxVal || 100),
					0
				]
			});
			this.draggMin = new Draggabilly(this.$refs.thumb_min, {
				axis: "x",
				containment: this.$refs.container,
				grid: [
					this.$refs.slider.getBoundingClientRect().width / (this.maxVal || 100),
					0
				]
			});

			this.draggMax.on("dragMove", (event, pointer) => {
				let x = this.draggMax.position.x;
				this.max = Math.round(
					(this.maxVal * x) / this.$refs.slider.getBoundingClientRect().width
				);
				this.max = Math.max(0, Math.min(this.maxVal, this.max));
				if (this.min >= this.max) {
					this.min = this.max;
					this.updateThumb(this.$refs.thumb_min, this.min);
				}
				this.updateSlider(this.max - this.min, this.min);
				this.$refs.slider.focus();
			});

			this.draggMax.on("dragStart", () => {
				this.isDraggable = true;
			});
			this.draggMax.on("dragEnd", () => {
				this.updateThumb(this.$refs.thumb_max, this.max);
				this.isDraggable = false;
			});

			this.draggMin.on("dragMove", (event, pointer) => {
				let x = this.draggMin.position.x;
				this.min = Math.round(
					(this.maxVal * x) / this.$refs.slider.getBoundingClientRect().width
				);
				this.min = Math.max(0, Math.min(this.maxVal, this.min));
				if (this.max <= this.min) {
					this.max = this.min;
					this.updateThumb(this.$refs.thumb_max, this.max);
				}
				this.updateSlider(this.max - this.min, this.min);
				this.$refs.slider.focus();
			});

			this.draggMin.on("dragStart", () => {
				this.isDraggable = true;
			});
			this.draggMin.on("dragEnd", () => {
				this.updateThumb(this.$refs.thumb_min, this.min);
				this.isDraggable = false;
			});
		},
		watch: {
			disabled: function () {
				this.isDisabled = !this.isDisabled;
				this.updateDraggiesIfNeeded();
			},
			maxValue: function (v) {
				this.maxVal = v;
				if (this.max === 0) {
					this.max = v;
				}
				if (this.maxVal < this.max) {
					this.max = v;
				}
				if (this.maxVal < this.min) {
					this.min = v;
				}
				this.updateThumb(this.$refs.thumb_max, this.max);
				this.updateThumb(this.$refs.thumb_min, this.min);
				this.updateSlider(this.max - this.min, this.min);
				this.updateDraggiesIfNeeded();
			},
			min: function(v) {
				this.$emit('update:minChange', v)
			},
			max: function(v) {
				this.$emit('update:maxChange', v)
			}
		},
		methods: {
			updateSlider(width, left) {
				this.$refs.fillValue.style.width =
					(100 * width) / (this.maxVal || 100) + "%";
				this.$refs.fillValue.style.left =
					(100 * left) / (this.maxVal || 100) + "%";
			},
			updateThumb(thumb, value) {
				thumb.style.left = (100 * value) / (this.maxVal || 100) + "%";
			},
			updateDraggiesIfNeeded() {
				if (this.isDisabled || this.maxValue === 0) {
					this.draggMin.disable();
					this.draggMax.disable();
				} else {
					this.draggMax.options.grid = [
						this.$refs.slider.getBoundingClientRect().width / this.maxVal,
						0
					];
					this.draggMin.options.grid = [
						this.$refs.slider.getBoundingClientRect().width / this.maxVal,
						0
					];
					this.draggMin.enable();
					this.draggMax.enable();
				}
			}
		}
	};
</script>

<style scoped>
	.ui-slider {
		position: relative;
		width: 100%;
		height: 42px;
		display: flex;
		align-items: center;
		outline: none;
	}

	.ui-slider:hover .ui-slider-thumb {
		transform: scale(1.1);
	}

	.ui-slider:focus .ui-slider-thumb,
	.ui-slider.dragging .ui-slider-thumb {
		transform: scale(1.1);
	}

	.ui-slider:focus .ui-slider-focus-ring,
	.ui-slider.dragging .ui-slider-focus-ring {
		transform: scale(1);
	}

	.ui-slider-wrapper {
		position: relative;
		width: 100%;
	}

	.ui-slider-track-container {
		position: relative;
	}

	.ui-slider-track {
		height: 3px;
		background-color: rgba(0, 0, 0, 0.28);
		width: 100%;
	}

	.ui-slider-track-fill {
		position: absolute;
		top: 0;
		height: 3px;
		background-color: #f44336;
	}

	.disabled {
		background-color: darkgray !important;
	}

	.disabled-focus {
		background-color: lightgray !important;
	}

	.disabled-thumb {
		background-color: darkgray !important;
	}

	.ui-slider-thumb-container {
		position: absolute;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: -20.5px;
		margin-left: -20.5px;
		width: 38px;
		height: 38px;
	}

	.ui-slider-thumb {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		height: 16px;
		background-color: #f44336;
		border-radius: 50%;
		transition-property: transform;
		transition-duration: 0.2s;
		transition-timing-function: linear;
		transform: scale(1);
	}

	.ui-slider-focus-ring {
		position: absolute;
		top: 0;
		left: 0;
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background-color: rgba(244, 67, 54, 0.38);
		transition: transform 0.2s ease;
		transform: scale(0);
	}

	.ui-slider-containment {
		left: 0;
		right: 0;
		position: absolute;
		margin-left: -20.5px;
		margin-right: -20.5px;
	}
</style>
