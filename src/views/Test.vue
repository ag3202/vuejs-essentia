<template>
    <div>
    <div id="app2">
        <div v-lang="color">{{num}}</div>
        <p><button @click="add">add</button></p>
    </div>
    <p>
        <button @click='unbind'>解绑</button>
    </p>
    </div>
</template>
<script>

    export default {
        name : 'Test',
        data() {
            return {            num: 10,
                color: 'red'}
        },
        methods: {
            add: function() {
                this.num++;
            },
            unbind : function () {
                this.$destroy()
            }
        }

    }
</script>
<style scoped>

</style>