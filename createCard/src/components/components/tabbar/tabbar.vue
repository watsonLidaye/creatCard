<template>
  <div class="tabbar flex_align" v-if="now_page=='index'||now_page=='person'">
  	<router-link class="tabbar_item juc_colum_b"  :class="{tabact:now_page=='index'}" to="/" >
  		<img src="@/assets/image/10.png" class="w32h32" v-if="now_page=='index'">
  		<img src="@/assets/image/14.png" class="w32h32" v-else>
  		<div>首页</div>
  	</router-link>
  	<router-link class="tabbar_item juc_colum_b"  :class="{tabact:now_page=='person'}" to="/person" >
  		<img src="@/assets/image/15.png" class="w34h34" v-if="now_page=='person'">
  		<img src="@/assets/image/11.png" class="w34h34" v-else>
  		<div>我的</div>
  	</router-link>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data(){
    return{
      now_page:"index"
    }
  },
  created(){
    this.now_page=this.$route.name
  },
   watch: {
    '$route' (to, from) {
        this.now_page=to.name
    }
}

}
</script>
<style >
@import "tabbar.css"
</style>
