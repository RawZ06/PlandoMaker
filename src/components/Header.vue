<template>
    <header>
        <div class="title">Plandomizer</div>
		<small>v.2.1.2 Release</small>
        <small> - By RawZ</small>
        <div class="links">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/about">About</router-link>
			<router-link class="link" to="/changelog">Changelog</router-link>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<style>
    header
    {
        width: 100vw;
        height: 80px;
        background: rgb(218, 218, 218);
        box-shadow: 2px 2px 2px rgb(228, 228, 228);
        line-height: 80px;
    }

    .title, .links {display: inline-block;}

    .title {
        float: left;
        font-size: 200%;
        margin-left: 2vw;
    }
    .links {float: right; margin-right: 4vw;}

    .link {
        position: relative;
        text-decoration: none;
        margin: 0 1vw;
        color: black;
        display: inline-block;
        height: 100%;
        border-bottom: 3px solid rgba(255, 107, 107, 0);
    }

    .click {
        cursor: pointer;
    }

    .link:hover {
        transition-duration: 0.5s;
        border-bottom-color:  rgb(255, 107, 107);
        text-decoration: none;
    }

    .name {
        margin: 0 1vw;
        color: black;
        display: inline-block;
        height: 100%;
    }

    .modal-body {
        line-height: 18px;
    }

    .md-theme-default a:not(.md-button) {
        color: black;
    }

    .md-theme-default a:not(.md-button):hover {
        color: gray;
        text-decoration: none;
    }
</style>
