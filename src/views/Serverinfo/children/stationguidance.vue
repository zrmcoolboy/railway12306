<template>
  <Header />
  <div class="center">
    <!-- 个人中心左侧 -->
    <div class="center-box">
      <span>车站引导</span>
      <ul id="hySubCol" class="kyZcfcCol">
        <li><a href="./bj/">北京</a></li>
        <li><a href="./tj/">天津</a></li>
        <li><a href="./hb/">河北</a></li>
        <li><a href="./sx/">山西</a></li>
        <li><a href="./nmg/">内蒙古</a></li>
        <li><a href="./ln_yd/">辽宁</a></li>
        <li><a href="./jl/">吉林</a></li>
        <li><a href="./hlj/">黑龙江</a></li>
        <li><a href="./sh/">上海</a></li>
        <li><a href="./js/">江苏</a></li>
        <li><a href="./zj/">浙江</a></li>
        <li><a href="./ah/">安徽</a></li>
        <li><a href="./fj/">福建</a></li>
        <li><a href="./jx/">江西</a></li>
        <li><a href="./sd/">山东</a></li>
        <li><a href="./hn/">河南</a></li>
        <li><a href="./hub/">湖北</a></li>
        <li><a href="./hun/">湖南</a></li>
        <li><a href="./gd/">广东</a></li>
        <li><a href="./gx/">广西</a></li>
        <li><a href="./hain/">海南</a></li>
        <li><a href="./cq/">重庆</a></li>
        <li><a href="./sc/">四川</a></li>
        <li><a href="./gz/">贵州</a></li>
        <li><a href="./yn/">云南</a></li>
        <li><a href="./xz/">西藏</a></li>
        <li><a href="./shx/">陕西</a></li>
        <li><a href="./gs/">甘肃</a></li>
        <li><a href="./nx/">宁夏</a></li>
        <li><a href="./qh/">青海</a></li>
        <li><a href="./xj/">新疆</a></li>
        <li><a href="./xg/">香港</a></li>
        <li><a href="./am/">澳门</a></li>
        <li><a href="./tw/">台湾</a></li>
      </ul>
    </div>
    <!-- 个人中心右侧 -->
    <div class="center-main">
      <div class="map">
        <img src="https://www.12306.cn/mormhweb/images/map3.gif" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
</script>
<style scoped>
.center {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.center-box {
  width: 150px;
  height: 690px;
  background-color: #d3edfd;
}
span {
  display: inline-block;
  width: 128px;
  padding-left: 22px;
  background: url(https://www.12306.cn/mormhweb/images/btbj_3.gif);
}
ul {
  width: 200px;
}
li {
  width: 50px;
  display: inline-block;
  float: left;
  padding-left: 15px;
  margin-left: 5px;
  margin-right: 10px;
  background: url(https://www.12306.cn/mormhweb/images/pic_29.gif) no-repeat -1px;
}
a {
  color: #26599a;
}
.center-main {
  margin-left: 10px;
  width: 700px;
  color: #333;
  border: 1px solid #96c5f7;
  background-color: hsla(211, 100%, 87%, 0.4);
  border-radius: 5px;
}
.map {
  background-color: white;
  width: 98%;
  height: 96%;
  margin: 0 auto;
  text-align: center;
  margin-top: 15px;
}
img {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
