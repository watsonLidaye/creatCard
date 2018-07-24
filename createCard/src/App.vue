<template>
  <div id="app">
  	<top enter_type="index"></top>
  	<transition :name="transitionName" mode="out-in">
    <router-view />
	</transition>
	<tabbar></tabbar>
  </div>
</template>

<script>
  import './js/public.js'
  	import top from '@/components/components/top/top'
  import tabbar from '@/components/components/tabbar/tabbar'
export default {
  name: 'App',
   components:{tabbar,top},
    data(){
      return {
          transitionName:'slideleft'
      }
  },

}
</script>

<style>
@import "./css/common.css";
@import "./css/public.css";
.slideleft-enter-active,.slideleft-leave-active,.slideright-enter-active,.slideright-leave-active{transition: all .3s;}
.slideleft-enter,.slideleft-leave-to,.slideright-enter,.slideright-leave-to{opacity: 0;}
.slideright-enter {transform: translateX(+100%);}
.slideright-leave-active {transform: translateX(-100%);}
.slideleft-enter {transform: translateX(-100%);}
.slideleft-leave-active {transform: translateX(+100%);}
</style>
