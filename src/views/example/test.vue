<template>
    <div class="red">
        <div class="green">
            哈哈
        </div>
        <router-link to="/message">查看vuex共享的message</router-link>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: '',
        components: '',
        data() {
            return {}
        },

        created() {
            this.queryExampleData({
                a: 111
            });
        },

        destroyed() {

        },

        methods: {
            // 按钮事件 内部事件
            _btnClick() {

            },
            ...mapActions([
                'queryExampleData',
            ]),
        },

        computed: {
            name() {
                return this.data
            }
        },

        watch: {
            data(newValue, oldValue) {

            }
        },

    }
</script>

<style lang="scss" scoped>
    .red {
        color: red;
        .green {
            color: green;
            font-size: 30px;
        }
    }

</style>
