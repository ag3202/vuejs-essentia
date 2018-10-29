import Vue from 'vue'
import validator from './validator'
import dropdown from './dropdown'

const directives = {
    validator,
    dropdown
}
console.dir(Object.entries(directives));
for (const [key, value] of Object.entries(directives)) {
    Vue.directive(key, value)
}

Vue.directive('validator', validator)
Vue.directive('lang', {
    bind(el,binding, vnode){ //被绑定
        console.dir(el)
        console.dir(binding)
        console.dir(vnode)
        console.log('1 - bind');
    },
    inserted: function() { //绑定到节点
        console.log('2 - inserted');
    },
    update: function() { //组件更新
        console.log('3 - update');
    },
    componentUpdated: function() { //组件更新完成
        console.log('4 - componentUpdated');
    },
    unbind: function() { //解绑
        console.log('5 - bind');
    }
})