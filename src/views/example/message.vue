<template>
    <div class="currentMsg">
        <h1>{{msg}}</h1>
            <div>用户名：{{exampleData.userName}}</div>
            <div>用户id：{{exampleData.id}}</div>
            <div>手机号：{{exampleData.phoneNum}}</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "user",
        data() {
            return {
                msg:"您正在用vuex共享组件间的数据"
            }
        },
        computed:{
            ...mapGetters([
                'exampleData'
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
