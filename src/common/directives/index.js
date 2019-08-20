import Vue from 'vue'
import * as dom from '../dom'
console.log(dom);

/**
 * 计算内容的高度 以显示滚动条
 * 滚动高度条 窗口高度 - 元素距离body的偏移量 - binding.value || 0
 * v-scrollHeight[, ={Number}]
 */
Vue.directive('scrollHeight',(el, binding, vnode, oldnode) => {
    function resizeH () {
        let subtract = binding.value || 0
        let win = document.documentElement.clientHeight
        let offTop = dom.offset(el).top

        el.style.height = win - offTop - subtract + 'px'
        el.style.overflowY = 'auto';
        el.style.overflowX = 'hidden';
        // el.style.width = '100%'
    }
    setTimeout(() => {
        resizeH ()
    })
    window.addEventListener("resize", () => {
        resizeH()
    },false)
});

Vue.directive('scrollWidth',(el, binding, vnode, oldnode) => {
    function resizeW () {
        let subtract = binding.value || 0
        let win = document.documentElement.clientWidth
        let offLeft = dom.offset(el).left

        el.style.width = win - offLeft - subtract + 'px'
        el.style.overflowX = 'auto';
        el.style.overflowY = 'hidden';
        // el.style.width = '100%'
    }
    setTimeout(() => {
        resizeW ()
    })
    window.addEventListener("resize", () => {
        resizeW()
    },false)
});