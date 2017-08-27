<template>
    <div class ="box">
        <h2>
            <p></p>
        </h2>
        <div class ="xfa" v-html="text">
            {{html}}
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .box {
        width: 100px;
        height: 100px;
        background-color: #fff;
    }
</style>