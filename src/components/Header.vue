<template>
    <header>
		<div class="title-version">
			<router-link to="/"><img src="../img/logo.png" width="200px" alt="Logo Plando Maker with an Ocarina" title="Logo Plando Maker" class="title"></router-link>
			<small>v.3.2.3 <span class="badge badge-danger">BETA</span></small>
			<div title="Menu" class="c-icon c-icon-burger"><span> </span></div>
		</div>
        <div class="links hide">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/settings">Settings Random</router-link>
            <router-link class="link" to="/about">About</router-link>
			<router-link class="link" to="/changelog">Changelog</router-link>
			<a title="My discord" class="link" href="https://discord.gg/psSGn45">Discord</a>
			<a title="Repository Github" class="link" href="https://github.com/RawZ06/PlandomizerGUI/">Repository Github</a>
        </div>
    </header>
</template>

<script>
	window.onload = () => {
		const btn = document.querySelector('.c-icon-burger');
		const links = document.querySelector('.links');
		btn.addEventListener('click', function(e){
			if (this.classList.contains('is-pressed')) {
				this.classList.remove('is-pressed');
				links.classList.add('hide');
			} else {
				this.classList.add('is-pressed');
				links.classList.remove('hide');
			}
		}, false);
	};

export default {
    name: 'Header'
}
</script>

<style>
    header
    {
        width: 100vw;
		line-height: 30px;
		text-align: center;
        background: rgb(218, 218, 218);
        box-shadow: 2px 2px 2px rgb(228, 228, 228);
		display: flex !important;
		flex-direction: column;
    }

	.links > a {
		color: black !important;
	}

	.links > a:hover {
		color: gray !important;
		text-decoration: none !important;
	}


	.links {
		display: flex;
		flex-direction: column;
	}

	.hide {
		display: none;
	}

	.title-version {
		position: relative;
	}

	.title-version {
		display: flex;
		flex-direction: column;
		text-align: left;
	}

	small {
		margin-left: 20px;
	}

    .link  {
        position: relative;
        text-decoration: none;
        margin: 0.5vh 1vw;
        display: inline-block;
        height: 100%;
        border-bottom: 1px solid gray;
    }

    .link:hover {
        transition-duration: 0.5s;
        border-bottom-color:  rgb(255, 107, 107);
        text-decoration: none;
    }

	.c-icon {
		position: absolute;
		display: block;
		height: 60px;
		width: 40px;
		overflow: hidden;
		white-space: nowrap;
		color: transparent;
		line-height: 1;
		right: 0;
	}

	.c-icon-burger span {
		position: absolute;
		top: 50%;
		right: 8px;
		transition: background 200ms 200ms;
	}
	.c-icon-burger span::before, .c-icon-burger span::after {
		content: "";
		right: 0;
		transform: translateZ(0);
		backface-visibility: hidden;
		transition: transform 0.2s 0.2s;
	}

	.c-icon-burger span,
	.c-icon-burger span::before,
	.c-icon-burger span::after {
		position: absolute;
		display: inline-block;
		height: 2px;
		width: 24px;
		background: #000;
	}

	.c-icon-burger span::before {
		top: -7px;
	}

	.c-icon-burger span::after {
		top: 7px;
	}

	.c-icon-burger.is-pressed span {
		background: transparent;
	}

	.c-icon-burger.is-pressed span::before {
		transform: translate(0px, 7px) rotate(45deg);
	}

	.c-icon-burger.is-pressed span::after {
		transform: translate(0px, -7px) rotate(-45deg);
	}

	.c-icon-burger.is-pressed span::before,
	.c-icon-burger.is-pressed span::after {
		background: #000;
	}

	@media screen and (min-width: 840px) {
		.c-icon {
			display: none;
		}

		header
		{
			line-height: 0;
			text-align: left;
			flex-direction: row;
			justify-content: space-between;
			height: 80px;
		}

		.title-version {
			flex-direction: row;
		}

		small {
			text-align: center;
			line-height: 80px;
		}

		.links {
			flex-direction: row;
		}

		.hide {
			display: initial;
		}

		.link  {
			border-bottom: 3px solid rgba(255, 107, 107, 0);
			vertical-align: middle;
			line-height: 80px;
		}
	}
</style>
