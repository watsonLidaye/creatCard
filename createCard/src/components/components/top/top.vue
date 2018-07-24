<template>
  <div class="top">
<!--   	<div v-if="enter_type=='index'">2</div> -->
  	<div class="top_plate">水上乐园</div>
  </div>
</template>
<script>
export default {
  name: 'top',
  props:{
	'enter_type':{
		type:String,
		value:"index"
	}
  },
  data () {
    return {
    }
  }
}
</script>
<style >
@import "top.css"
</style>
