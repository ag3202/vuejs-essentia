<template>
    <div>
    <div id="app2">
        <div v-lang="color">{{num}}</div>
        <p><button @click="add">add</button></p>
    </div>
    <p>
        <button @click='unbind'>解绑</button>
    </p>
        <div class="app">
            <div ref="msgDiv">{{msg}}</div>
            <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
            <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
            <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
            <button @click="changeMsg">
                Change the Message
            </button>
        </div>
        <div>
            <h2>{{vuex}}</h2>
            <hr/>
            <h3>{{count}}</h3>
            <div>
                <button @click="add10(10)">+</button>
                <button @click="reduce1()">-</button>
            </div>
        </div>
    </div>


</template>
<script>
    import {mapState,mapMutations} from 'vuex';
    export default {
        name : 'Test',
        data() {
            return {            num: 10,
                color: 'red',
                msg: 'Hello Vue.',
                msg1: '',
                msg2: '',
                msg3: '',
                vuex: 'Hello Vuex'
            }
        },
        methods: {
            ...mapMutations({
               add10: 'add',
                reduce1: 'reduce'
            }),
            add: function() {

                console.dir('begin')
                console.dir(mapMutations)
                console.dir('end')
                this.num++;
            },
            unbind : function () {
                this.$destroy()
            },
            changeMsg : function () {
                this.msg = "Hello world."
                this.msg1 = this.$refs.msgDiv.innerHTML
                this.$nextTick(() => {
                    this.msg2 = this.$refs.msgDiv.innerHTML
                })
                this.msg3 = this.$refs.msgDiv.innerHTML
            }
        },
        computed:{
            ...mapState(["count"]),
            count(){
                return this.$store.getters.count
            }
        }

    }
</script>
<style scoped>

</style>