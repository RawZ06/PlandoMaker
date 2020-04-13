<template>
	<div id="app">
		<Header></Header>
		<md-switch v-model="darkMode">Dark mode</md-switch>
		<main><router-view/></main>
		<div class="copyleft">Copyleft - <img
			alt="Copyleft logo"
			height="10px"
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Copyleft.svg/440px-Copyleft.svg.png" width="10px"
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
		},
		data() {
			return {
				"darkMode": false
			}
		},
		mounted() {
			// set 'app-background' class to body
			let bodyElement = document.body;
			bodyElement.classList.add("app-background");
		},
		watch: {
			darkMode: function () {
				// add/remove class to/from html tag
				let htmlElement = document.documentElement;

				if (this.darkMode) {
					localStorage.setItem("theme", 'dark');
					htmlElement.setAttribute('theme', 'dark');
				} else {
					localStorage.setItem("theme", 'light');
					htmlElement.setAttribute('theme', 'light');
				}
			}
		}
	}
</script>

<style langs="sass">

	:root {
		--app-background-color: #FFFFFF;
		--app-color: #000000;
		--app-background-header: rgb(218, 218, 218);
		--app-box-header: rgb(228, 228, 228);

		--app-background-item: rgb(255, 255, 255);
		--app-background-item-primary: rgb(0, 98, 204);
	}

	[theme="dark"] {
		--app-background-color: rgb(24, 26, 27);
		--app-color: rgb(218, 215, 210);
		--app-background-header: rgb(35, 37, 38);
		--app-box-header: rgb(27, 27, 27);

		--app-background-item: rgb(24, 26, 27);
		--app-background-item-primary: rgb(0, 98, 204);
	}

	html, body {
		margin: 0;
		padding: 0;
		font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
	  	width: 100vw;
		background: var(--app-background-color);
		color: var(--app-color);
	}

	main {
		min-height: calc(100vh - 80px - 3em);
	}

	.copyleft {
		margin: 1em auto auto;
		text-align: center;
	}
</style>
