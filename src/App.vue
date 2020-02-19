<template>
  <div id="app">
    <Header></Header>
    <router-view/>
	  <div class="copyleft">Copyleft - <img
		  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Copyleft.svg/440px-Copyleft.svg.png"
		  alt="Copyleft logo"
		  width="10px" height="10px"
	  >
		  RawZ - <a href="https://github.com/RawZ06/PlandomizerGUI">Repository Github</a>
	  </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  }
	.copyleft {
		margin: 1em auto auto;
		text-align: center;
	}
</style>
