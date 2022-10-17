<template>
  <!--轮播图 -->
  <Swiper />
  <!--导航-->
  <div class="nav">
    <p style="position: absolute; left: 260px">{{ localtime }}</p>
    <ul>
      <li>
        <!-- <span>|</span> -->
        <a href="https://www.12306.cn/">首页</a>
      </li>
      <li>
        <!-- <span>|</span> -->
        <a href="https://kyfw.12306.cn/otn/">客运服务</a>
      </li>
      <li>
        <!-- <span>|</span> -->
        <a href="https://exservice.12306.cn/excater/index.html">餐饮服务</a>
      </li>
      <li>
        <!-- <span>|</span> -->
        <a href="https://cx.12306.cn/tlcx/index.html">会员服务</a>
      </li>
      <li>
        <!-- <span>|</span> -->
        <a href="https://travel.12306.cn/portal">旅游超市</a>
      </li>

      <li>
        <!-- <span>|</span> -->
        <a href="https://kyfw.12306.cn/otn/view/my_insurance.html">保险服务</a>
      </li>
      <li>
        <!-- <span>|</span> -->
        <a href="https://kyfw.12306.cn/otn/gonggao/help.html">常见问题</a>
      </li>
      <li>
        <!-- <span>|</span> -->
        <a href="http://www.12306.cn/index/index.html#index_ads">最新发布</a>
      </li>
      <li>
        <!-- <span>|</span> -->
        <a href="#">爱心模式</a>
      </li>
    </ul>
  </div>
  <!--导航结束-->
  <!--搜索开始-->
  <div class="travel-search">
    <div class="w">
      <div class="seach-form">
        <!--搜索地点-->
        <div class="s-place">
          <a href="#">
            <div class="s-place-hd">
              <i></i>
              <div class="txt">山西</div>
              <b class="down"></b>
            </div>
          </a>
          <!--二级菜单-->
          <div class="s-place-bd" id="s-place-bd">
            <div class="city-list">
              <div class="item">
                <span class="label">华北</span>
                <p>
                  <a href="#">北京</a>
                  <a href="#">天津</a>
                  <a href="#">河北</a>
                  <a href="#">山西</a>
                  <a href="#">内蒙古</a>
                </p>
              </div>

              <div class="item">
                <span class="label">华南</span>
                <p>
                  <a href="#">广东</a>
                  <a href="#">广西</a>
                  <a href="#">海南</a>
                </p>
              </div>
              <div class="item">
                <span class="label">华东</span>
                <p>
                  <a href="">上海</a>
                  <a href="">江苏</a>
                  <a href="">浙江</a>
                  <a href="">安徽</a>
                  <a href="#">福建</a>
                  <a href="#">山东</a>
                </p>
              </div>
              <div class="item">
                <span class="label">华中</span>
                <p>
                  <a href="#">河南</a>
                  <a href="#">湖北</a>
                  <a href="#">湖南</a>
                  <a href="#">江西</a>
                </p>
              </div>
              <div class="item">
                <span class="label">西北</span>
                <p>
                  <a href="#">山西</a>
                  <a href="#">甘肃</a>
                  <a href="#">青海</a>
                  <a href="#">宁夏</a>
                  <a href="#">新疆</a>
                </p>
              </div>

              <div class="item">
                <span class="label">西南</span>
                <p>
                  <a href="#">重庆</a>
                  <a href="#">贵州</a>
                  <a href="#">四川</a>
                  <a href="#">云南</a>
                  <a href="#">西藏</a>
                </p>
              </div>
              <div class="item">
                <span class="label">东北</span>
                <p>
                  <a href="#">辽宁</a>
                  <a href="#">吉林</a>
                  <a href="#">黑龙江</a>
                </p>
              </div>
              <div class="item">
                <span class="label">台港澳</span>
                <p>
                  <a href="#">台湾</a>
                  <a href="#">香港</a>
                  <a href="#">澳门</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--表单-->
        <div class="s-form">
          <input
            type="text"
            class="ts-inp"
            id="common_keyword"
            placeholder="请输入目的地城市，关键字或主题"
          />
          <button id="common_search" class="ts_btn">搜索</button>
        </div>
      </div>

      <div class="hot-place">
        热门旅游目的地：
        <a href="#">甘肃</a>
        <a href="#">辽宁</a>
        <a href="#">山东</a>
        <a href="#">山西</a>
        <a href="#">河南</a>
        <a href="#">江西</a>
        <a href="#">北京</a>
      </div>
    </div>
  </div>
  <!--详情页-->
  <div class="w" v-for="item in travelList" :key="item.id">
    <!--面包屑导航-->
    <div class="crumbs">
      <a href="http://www.12306.cn">首页</a>
      &nbsp;>&nbsp;
      <a href="https://travel.12306.cn/portal">旅游超市</a>
      &nbsp;>&nbsp;
      <span>{{ item.name }}</span>
    </div>
    <div class="travel-info">
      <div class="info-top">
        <div class="pic-show">
          <img :src="item.images" />
        </div>
        <div class="txt-box">
          <h2 id="product_notice">
            {{ item.title }}
          </h2>
          <div class="txt-01" id="detail_product_code">
            编号：LT001
            <span class="inline-block w50 tc">|</span>
            出发地：兰州
          </div>
          <div class="buy_box">
            <div class="buy_box-top">
              <div class="label">
                参考价
                <span class="rmb">￥</span>
                <span class="price">{{ item.price }}</span>

                <span>/人</span>
              </div>
            </div>
            <p class="tr">
              <span class="text-primary"></span>
            </p>
          </div>
          <div class="txt_item">
            <span class="label">旅游类型</span>
            <div class="item-bd" id="data_product_type">跟团游</div>
          </div>
          <div class="txt_item">
            <span class="label">目的地</span>
            <div class="item-bd">张掖</div>
          </div>
          <div class="txt_item">
            <span class="label">行程天数</span>
            <div class="item-bd" id="travel-days">{{ item.time }}天</div>
          </div>
          <div class="txt_item">
            <span class="label">产品特色</span>
            <div class="item-bd">
              <div id="product_features" class="features">
                <span class="hot" v-for="(item, index) in hots" :key="index">{{
                  item
                }}</span>
                <!-- <span class="hot">河西走廊</span>
                <span class="hot">豪华专列</span>
                <span class="hot">古迹</span>
                <span class="hot">地质地貌</span> -->
              </div>
            </div>
          </div>
          <div class="txt_item">
            <span class="label">零售商</span>
            <div class="item-bd">甘肃兰铁国际旅行设有限公司</div>
          </div>
          <div class="txt_item">
            <span class="label">联系电话</span>
            <div class="item-bd">4001630900</div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-item">
      <el-tabs type="border-card">
        <el-tab-pane label="行程介绍">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Swiper from "@/components/SwiperView.vue";
import Footer from "@/components/FooterView.vue";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
const store = useMainStore();
const { travelList } = storeToRefs(store);
const arr = [];
// console.log(travelList.value[0].hot);
// console.log("1,2,3");
const hots = travelList.value[0].hot.split(",");
// console.log(hots);
// console.log(travelList.value[0].hot.split(","));

let localtime = ref(new Date().toLocaleString());
onMounted(() => {
  let timer = setInterval(() => {
    localtime.value = new Date().toLocaleString(); // 修改数据date
  }, 1000);
});
</script>

<style scoped lang="less">
/*导航*/
.nav {
  height: 40px;
  width: 100%;
  line-height: 40px;
  background: #1476bd;
  color: #fff;
  margin-top: -50px;
}
.w {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
.nav .time {
  float: left;
  color: #ff9;
  margin-right: 20px;
  font-size: 12px;
}
#time {
  width: 200px;
  height: 20px;
}
.div {
  display: block;
}
.nav ul {
  margin-left: 425px;
}
.nav ul li {
  float: left;
  padding: 0 10px 0 10px;
  width: 70px;
}
li:nth-child(1) {
  margin-right: -25px;
}
.nav ul li a:hover {
  color: #ff9;
  border-bottom: 1px solid #f2f6ff;
}
.nav li a {
  width: 50px;
  font-size: 14px;
  color: #fff;
  position: relative;
}

/*导航结束*/
/*搜索地点*/
.travel-search {
  background: #3d5d7c;
  height: 95px;
  padding-top: 20px;
}
.w {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
.travel-search .seach-form {
  height: 55px;
}
.travel-search .s-place {
  float: left;
  width: 242px;
  height: 42px;
  position: relative;
  margin-right: 18px;
  z-index: 30;
}
a {
  text-decoration: none;
  color: #333;
  outline: 0;
}

.travel-search .s-place-hd {
  width: 200px;
  height: 40px;
  border: 1px solid #cdcdcd;
  background: #fff;
  border-radius: 3px;
  padding-left: 40px;
}
.travel-search .s-place-hd i {
  position: absolute;
  top: 10px;
  left: 15px;
  width: 16px;
  height: 16px;
  background: url(@/assets/img/bg03.png) no-repeat;
}
.travel-search .s-place-hd .txt {
  float: left;
  width: 160px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #478dce;
  font-weight: 700;
}
.travel-search .s-place-hd b {
  position: relative;
  float: left;
  width: 39px;
  height: 40px;
  border-left: 1px solid #eee;
  cursor: pointer;
  background: url(@/assets/img/arw02.png) center center no-repeat;
  line-height: 40px;
}
/* .down:hover .s-place-bd{
	display: block;
} */
/*二级菜单*/
.travel-search .s-place-bd {
  position: absolute;
  top: 41px;
  left: 0;
  width: 300px;
  padding: 20px;
  background: #fff;
  z-index: 30;
  border: 1px solid #cdcdcd;
  display: none;
}

.s-place:hover .s-place-bd {
  display: block;
}
.s-place-bd .city-list .item {
  font-size: 12px;
  font-family: Tahoma, "宋体";
  color: #333;
  margin-top: 10px;
  padding-left: 50px;
  float: left;
}
.s-place-bd .city-list .item .label {
  float: left;
  width: 50px;
  height: 20px;
  line-height: 20px;
  margin-left: -50px;
  _display: inline;
  font-weight: 700;
  color: #478dcd;
  padding-left: 10px;
}
.s-place-bd .city-list .item p {
  line-height: 20px;
  float: left;
}
.s-place-bd .city-list .item p a {
  color: grey;
  margin-right: 10px;
  display: inline-block;
}

/*表单*/
.travel-search .s-form {
  width: 470px;
  height: 40px;
  // border: 1px solid #cdcdcd;
  float: left;
  // background: #fff;
  position: relative;
}
.travel-search .s-form .ts-inp {
  // float: left;
  width: 330px;
  // padding: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  // height: 20px;
  line-height: 20px;
  // background: #fff;
}
.travel-search .s-form .ts_btn {
  width: 121px;
  // height: 42px;
  line-height: 42px;
  background: #63afed;
  border: 0 none;
  color: #fff;
  font-size: 14px;
  position: absolute;
  // top: -1px;
  right: 0px;
  // border-radius: 3px;
  cursor: pointer;
}
.travel-search .s-form .ts_btn:hover {
  color: #003784;
}

/*热门旅游地*/
.travel-search .hot-place {
  height: 30px;
  line-height: 30px;
  color: #cdcdcd;
  margin-top: 4px;
  font-size: 12px;
}
.travel-search .hot-place a {
  color: #cdcdcd;
  margin-right: 20px;
  font-size: 12px;
}
.travel-search .hot-place a:hover {
  color: #e2e2e2;
}

/*详情页*/
.crumbs {
  height: 32px;
  line-height: 32px;
  font-size: 12px;
}
.crumbs a {
  color: #333;
}
/*产品展示*/
.travel-info {
  height: 385px;
}
.travel-info .info-top {
  width: 1100px;
  height: 383px;
  float: left;
  display: block;
}

.travel-info .info-top .pic-show {
  width: 480px;
  float: left;
}
.travel-info .info-top .pic-show img {
  width: 480px;
}
/*右边的文本框*/

.travel-info .txt-box {
  float: left;
  width: 490px;
  padding: 0 0 30px 30px;
  z-index: 9999;
}

.travel-info .txt-box h2 {
  font-size: 24px;
  font-weight: 400;
  font-family: Tahoma, "宋体";
}
.travel-info .txt-box .txt-01 {
  background: #fff;
  font-size: 12px;
  font-family: Tahoma, "宋体";
  color: #333;
  margin: 0;
  padding: 0;
}
.w50 {
  width: 50px;
}
.inline-block {
  display: inline-block;
}
.tc {
  text-align: center;
}
.travel-info .txt-box .buy_box {
  padding: 10px 20px 10px 20px;
  background: #f2f6ff;
}
.travel-info .txt-box > .buy_box-top {
  height: 38px;
  line-height: 38px;
}
.travel-info .txt-box .buy_box-top .label {
  // background: #fff;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-family: Tahoma, "宋体";
  color: #333;
  margin: 0;
  padding: 0;
  position: relative;
}
.travel-info .txt-box .buy_box-top .buy_box-top {
  float: left;
  margin-right: 25px;
  height: 38px;
  line-height: 38px;
}
.travel-info .txt-box .buy_box-top .label .rmb {
  display: block;
  margin-left: 10px;
  color: #fb7403;
  font-weight: bold;
  font-size: 20px;
}
.travel-info .txt-box .txt_item {
  width: 490px;
  height: 38px;
  background: #fff;
  font-size: 12px;
  font-family: Tahoma, "宋体";
  color: #333;
  margin: 0;
  padding: 0;
}
.txt_item > .label {
  /* float: left; */
  width: 60px;
  height: 38px;
  // background: #fff;
  font-size: 12px;
  font-family: Tahoma, "宋体";
  color: #333;
  margin: 0;
  padding: 0;
  display: inline-block;
  padding-right: o;
}
.txt_item .item-bd {
  display: inline-block;
  width: 350px;
  height: 38px;
  min-height: 26px;
  line-height: 38px;
  /* padding-left: 60px; */
  margin-left: 30px;
}
.info-item {
  width: 985px;
  margin: 20px auto;
  font-size: 14px;
}
.price {
  font-size: 34px;
  color: #fb7403;
}
.hot {
  display: inline-block;
  width: 62px;
  height: 26px;
  background-color: #fef7f7;
  margin-left: 6px;
  text-align: center;
  line-height: 26px;
  border: 1px solid #fb7403;
}
</style>