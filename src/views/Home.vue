<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div  uk-scrollspy="cls: uk-animation-slide-right; repeat: true">{{this.$store.state.token}}</div>
    <div v-for="(e,i) in goods_list" :key="i">
      <img :src="e.pict_url" style="width:20vw;height:20vw;float:left;" alt="">
    </div>
    <div>
        <div>
            <div uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
    <div class="div div1">
      <iframe src="http://www.jq22.com/yanshi22593" frameborder="0" width="100%" height="100%"></iframe>
    </div>
    <div class="div div2">
      <iframe src="http://www.jq22.com/yanshi10471" frameborder="0" width="100%" height="100%"></iframe>
    </div>
    <div class="div div3">
      <iframe src="http://www.jq22.com/yanshi22736" frameborder="0" width="100%" height="100%"></iframe>
    </div>
    <div class="div div4">
      <iframe src="http://www.jq22.com/yanshi15518" frameborder="0" width="100%" height="100%"></iframe>
    </div>
    <div class="div div4">
      <iframe src="http://www.jq22.com/yanshi22793" frameborder="0" width="100%" height="100%"></iframe>
    </div>
    <div class="div div4">
      <iframe src="http://www.jq22.com/yanshi22603" frameborder="0" width="100%" height="100%"></iframe>
    </div>
    <ul>
      <li @click="tab1">1平滑滚动到指定位置</li>
      <li @click="tab2">2平滑滚动到指定位置</li>
      <li @click="tab3">3平滑滚动到指定位置</li>
    </ul>
    <img v-for="(item,index) in arr" :key="index" :src="item.file_path" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
import request from "../request/index";

export default {
  name: 'home',
  data () {
    return {
      goods_list: {name:'hzj'},
      arr: []
    }
  },
  components: {
  },
  methods:{
    // 平滑滚动到指定位置
    tab1() {
      document.getElementsByClassName('div1')[0].scrollIntoView({ block: 'start',behavior: 'smooth' });
    },
    tab2() {
      document.getElementsByClassName('div2')[0].scrollIntoView({ block: 'start',behavior: 'smooth' });
    },
    tab3() {
      document.getElementsByClassName('div3')[0].scrollIntoView({ block: 'start',behavior: 'smooth' });
    },
    getdata(){
      request.user.shareshop().then(res => {
          // eslint-disable-next-line no-console
          console.log('------------首页----------');
          // eslint-disable-next-line no-console
          console.log(res.data.data.hot_pro);
          this.arr = res.data.data.hot_pro;
      })
    },
  },
  mounted() {
      this.getdata();
      
      
  }
}
</script>

<style scoped>
  .div{
    border:1px solid yellowgreen;
    height:800px;
    font-size: 40px;
    color:#fff;
    width:100vw;
  }
  .div1{
    background: rgb(145, 120, 170);
    overflow: hidden;
  }
  .div2{
    background: rgb(106, 150, 163);
  }
  .div3{
    background: rgb(194, 153, 153);
  }
  ul{
    position: fixed;
    top:40%;
    right:10px;
  }
  li{
    padding:20px 8px;
    background: red;
    margin-top: 10px;
  }
</style>
