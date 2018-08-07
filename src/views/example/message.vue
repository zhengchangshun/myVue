<template>
    <div class="currentMsg">
        {{currentMsg}}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "user",
        data() {
            return {
            }
        },
        computed:{
            ...mapGetters([
                'currentMsg'
            ])
        }
    }
</script>

<style scoped>
    .currentMsg {
        font-size: 30px;
        color: yellow;
    }
</style>
