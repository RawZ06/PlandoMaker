<template>
  <div>
    <label>
      Min :
      <span class="badge badge-secondary">{{ value_min }}</span>
    </label>
    <label>
      Max :
      <span class="badge badge-secondary">{{ value_max }}</span>
    </label>
    <div class="ui-slider" tabindex="0" ref="slider">
      <div class="ui-slider-containment" ref="container"></div>

      <div class="ui-slider-wrapper">
        <div class="ui-slider-track-container">
          <div class="ui-slider-track"></div>
          <div class="ui-slider-track-fill" ref="fillValue"></div>
        </div>

        <div class="ui-slider-thumb-container" ref="thumb_min">
          <div class="ui-slider-focus-ring"></div>
          <div class="ui-slider-thumb" id="thumb_min"></div>
        </div>

        <div class="ui-slider-thumb-container" ref="thumb_max">
          <div class="ui-slider-focus-ring"></div>
          <div class="ui-slider-thumb" id="thumb_max"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Draggabilly from "draggabilly";

export default {
  name: "Tests.vue",
  data: function() {
    return {
      value_max: 0,
      value_min: 0,
      draggValue: 0,
      isDraggable: false
    };
  },
  mounted: function() {
    this.updateSlider(this.value_max - this.value_min, this.value_min);
    this.$refs.thumb_max.style.left = this.value_max + "%";
    this.$refs.thumb_min.style.left = this.value_min + "%";

    let draggMax = new Draggabilly(this.$refs.thumb_max, {
      axis: "x",
      containment: this.$refs.container
    });
    let draggMin = new Draggabilly(this.$refs.thumb_min, {
      axis: "x",
      containment: this.$refs.container
    });

    draggMax.on("dragMove", (event, pointer) => {
      let x = draggMax.position.x;
      this.value_max = Math.round(
        (100 * x) / this.$refs.slider.getBoundingClientRect().width
      );
      this.value_max = Math.max(0, Math.min(100, this.value_max));
      if (this.value_min >= this.value_max) {
        this.value_min = this.value_max;
      }
      this.updateSlider(this.value_max - this.value_min, this.value_min);
      this.$refs.slider.focus();
    });

    draggMax.on("dragStart", () => {
      this.isDraggable = true;
    });
    draggMax.on("dragEnd", () => {
      this.$refs.thumb_max.style.left = this.value_max + "%";
      this.isDraggable = false;
    });

    draggMin.on("dragMove", (event, pointer) => {
      let x = draggMin.position.x;
      this.value_min = Math.round(
        (100 * x) / this.$refs.slider.getBoundingClientRect().width
      );
      this.value_min = Math.max(0, Math.min(100, this.value_min));
      if (this.value_max <= this.value_min) {
        this.value_max = this.value_min;
      }
      this.updateSlider(this.value_max - this.value_min, this.value_min);
      this.$refs.slider.focus();
    });

    draggMin.on("dragStart", () => {
      this.isDraggable = true;
    });
    draggMin.on("dragEnd", () => {
      this.$refs.thumb_min.style.left = this.value_min + "%";
      this.isDraggable = false;
    });
  },
  methods: {
    updateSlider(width, left) {
      this.$refs.fillValue.style.width = width + 0.01 + "%";
      this.$refs.fillValue.style.left = left + "%";
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
