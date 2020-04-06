<template>
    <div>
        <h1>404 Not Found</h1>
        <img src="../img/sad.png" width="300px" alt="Drawing sad man" title="Sad man" class="title" />
        <h1>OUPS !</h1>
        <h2>We can create a Plando everywhere ! But, not here...</h2>
        <h3>
            Go to
            <router-link to="/">Home Page</router-link>
        </h3>
    </div>
</template>

<script>
export default {
    name: "404.vue"
};
</script>

<style scoped>
div {
    text-align: center;
}
</style>
