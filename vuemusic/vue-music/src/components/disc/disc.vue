<template>
    <music-list
        :title = 'title'
    ></music-list>
</template>

<script>
    import MusicList from '@/components/music-list/music-list'
    import {
        mapGetters
    } from 'vuex'
    export default {
        components: {
            MusicList
        },
        created() {
            console.log(this.disc.dissname, ' this.disc.dissname')
        },
        computed: {
            title() {

                return this.disc.dissname
            },
            ...mapGetters([
                'disc'
            ])
        }
    }
</script>

<style>

</style>