<template>
  <!-- 头部 -->
  <Header />
  <!-- 轮播图 -->
  <Swiper />
  <SwiperInfo />
  <!-- 服务区域 -->
  <Server />
  <!-- 旅游 -->
  <Travel />
  <!-- 信息 -->
  <News />
  <!-- 底部 -->
  <!-- 一键上移 -->
  <el-backtop :right="20" :bottom="20"></el-backtop>
  <Footer />
  <div class="fix-right" v-show="isShow">
    <ul class="menu-right">
      <li>
        <a href="son/more.html">
          <span><i class="iconfont icon-laba"></i></span>
          最新发布
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <span><i class="iconfont icon-dianhua"></i></span>
          联系客服
        </a>
      </li>
      <li class="App">
        <a href="#">
          <span><i class="iconfont icon-erweima"></i></span>
          APP下载
          <div class="menu-left">
            <h4>铁路12306</h4>
            <div class="menu-left-left">
              <img src="@/assets/img/download.png" />
              <div class="menu-left-right">
                官方APP下载，目前铁路未授权其他网站或APP开展类似服务内容，敬请广大用户注意。
              </div>
            </div>
          </div>
        </a>
      </li>
      <li style="width: 50px; height: 71px">
        <button @click="closeMenu" class="close">
          <span><i class="iconfont icon-guanbi"></i></span>
          关闭
        </button>
      </li>
    </ul>
  </div>
  <!-- <h1>{{ store.num }}</h1>
  <hr />
  <h1>{{ total }}</h1>
  <button @click="add">+1</button>
  <h1>{{ store.countSum }}</h1> -->
</template>

<script setup>
// import { useMainStore } from "@/store";
// import { storeToRefs } from "pinia";
import Header from "@/components/HeaderView.vue";
import Swiper from "@/components/SwiperView.vue";
import Server from "@/components/ServerView.vue";
import Travel from "@/components/TravelView.vue";
import SwiperInfo from "@/components/SwiperInfo.vue";
import News from "@/components/NewsView.vue";
import Footer from "@/components/FooterView.vue";
import { ref } from "vue";
// const store = useMainStore();
// // const { num, total } = store;  不可以
// const { num, total } = storeToRefs(store);
// const add = () => {
//   // 方式一
//   // store.num++;
//   // store.total++;
//   // 方式二
//   // store.$patch({
//   //   num: store.num + 1,
//   //   total: store.total + 1,
//   // });
//   // 方式三
//   // store.$patch((state) => {
//   //   state.num++;
//   //   state.total++;
//   // });
//   // 方式四
//   store.changeState();
// };
let isShow = ref(true);
const closeMenu = () => {
  isShow.value = false;
};
</script>

<style scoped>
/* 一键上移 */
.el-backtop {
  width: 50px;
  height: 50px;
}
.fix-right {
  /* background-color: pink; */
  position: fixed;
  right: 0;
  top: 25%;
  width: 50px;
  height: 400px;
  z-index: 5555;
}
.fix-right .menu-right > li {
  width: 50px;
  height: 86px;
  margin-bottom: 5px;
  background: #efefef;
  text-align: center;
  position: relative;
  font-size: 14px;
}
.fix-right .menu-right > li > a {
  display: block;
  padding: 10px;
  color: #666666;
}
.fix-right .menu-right > li > a:hover {
  color: #3b99fc;
}
.fix-right .menu-right .iconfont {
  display: block;
  font-size: 24px;
  height: 30px;
  line-height: 30px;
  color: #666;
  margin: 0 auto;
}
.menu-left {
  width: 330px;
  height: 148px;
  background-color: #ffffff;
  position: absolute;
  top: -30px;
  right: 60px;
  box-shadow: 0 0 8px #e3e3e3;
  display: none;
  z-index: 1000;
}
.fix-right > ul > li:hover .menu-left {
  display: block;
}
.menu-left > h4 {
  height: 46px;
  line-height: 46px;
  float: left;
  color: #333;
  margin-left: 15px;
}
.menu-left .menu-left-left > img {
  display: block;
  width: 80px;
  height: 80px;
  border: 1px solid #dedede;
  position: relative;
  top: 45px;
  left: -70px;
}
.menu-left .menu-left-left .menu-left-right {
  position: absolute;
  top: 45px;
  left: 120px;
  width: 190px;
  height: 80px;
  border: 1px solid #dedede;
  background-color: #fff;
  color: #333;
  font-size: 12px;
  line-height: 25px;
}
.close {
  width: 100%;
  height: 100%;
  border: none;
  margin-top: 5px;
  cursor: pointer;
}
.close:hover {
  color: #3b99fc;
}
</style>