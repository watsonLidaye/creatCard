  <template>
    <div class="index" :class="{scrolltrue:show_model}">
    	<div class="index_header bor_border flex_align">
    		<div class="header_left">
    			<img src="@/assets/image/01.png" class="w130h130">
    			<img src="@/assets/image/04.png" class="w42h44">
    		</div>
    		<div class="bor_border header_right juv_colum ">
    			<div class="clear">
    				<div class="left">
    					<img src="@/assets/image/05.png" class="w20h24 ">
    				</div>
    				<div class="header_right_text left text_clamp2">永定区机场路三眼桥饭庄西北侧100米</div>
    			</div>
    			<div class="flex_align">
    				<img src="@/assets/image/06.png" class="w22h22 ">
    				<div class="header_right_text">09:30-23:30</div>
    			</div>
    			<div class="flex_align">
    				<img src="@/assets/image/07.png" class="w20h24 ">
    				<div class="header_right_text">139-7449-3157</div>
    			</div>
    		</div>
    	</div>
      <!-- 中间卡部分 -->
      <div class="card_plate">
      <div class="card_title">代金券</div>
      <div v-for="(item,index) in index_page.card" class="card_item bor_border flex_align" >
        <div class="card_item_left">
          <span class="card_item_left_smaller">¥</span>{{item.cost}}
        </div>
        <div class="card_item_right bor_border juv_colum">
          <div class="card_item_right_title">{{item.title}}</div>
          <div class="card_item_right_price jub_jub_center">
            <div>门市价:¥{{item.price}}</div>
            <div>已售:{{item.sale}}</div>
          </div>
          <div class="card_item_right_cost jub_jub_center">
            <div><span class="card_item_right_smaller">¥</span>{{item.real_cost}}</div>
            <div class="buy_now">立即购买</div>
          </div>
        </div>
      </div>
      </div>
      <!-- 底部卡片 -->
      <ul class="product_list both bor_border">
        <li v-for="(item,index) in index_page.enter" class="left product_item"  @click="showModels()">
          <img :src="item.img" class="product_img">
          <div class="product_detail bor_border">
            <div class="product_detail_title">{{item.title}}</div>
            <div class="product_detail_content jub_jub_center bor_border">
              <div><span class="product_detail_smaller">¥</span>{{item.cost}}</div>
             <div class="buy_now">立即购买</div>
            </div>
          </div>
        </li>
      </ul>
      <!-- 模态层 -->
      <div  v-if="show_model" @click="showModels()"  class="index_model" :style="{height:screenHeight+'px'}">
      </div>
              <transition name="fade" >
        <div class="buy_plate" v-if="show_model">
          <div class="buy_top"></div>
          <div class="buy_bottom flex_align">
            <div class="buy_bottom_item"  @click="showModels()" >取消</div>
            <div class="buy_bottom_item buy_bottom_red">确实</div>
          </div>
        </div>
      </transition>
  </div>
    </div>
  </template>

  <script>

  export default {
    name: 'index',
    data () {
      return {
        index_page:{},
        screenHeight:"",
        show_model:false
      }
    },
    methods:{
      showModels(){
        let now_model=this.show_model
        this.show_model=!now_model
    },
    },
    created(){
      this.screenHeight=document.documentElement.clientHeight
      let that = this
      this.$axios.get('http://localhost:8080/static/index.json',{})
    .then(function (response) {
      that.index_page=response.data.index
    })
    .catch(function (error) {
      console.log(error);
    });
    },
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
   @import 'index.css'
  </style>
