<template>
  <!-- <h1>服务区域</h1> -->
  <div class="wrapper">
    <ul>
      <li @click="goAppointment">
        <div class="box">
          <img src="@/assets/img/001-2.png" style="width: 36px; height: 36px" />
          <div>重点旅客预约</div>
        </div>
        <span
          ><img src="@/assets/img/002.png" style="width: 64px; height: 56px"
        /></span>
      </li>
      <li @click="goLost">
        <div class="box">
          <img src="@/assets/img/001-6.png" style="width: 36px; height: 36px" />

          <div>遗失物品查找</div>
        </div>
        <span
          ><img src="@/assets/img/002.png" style="width: 64px; height: 56px"
        /></span>
      </li>
      <li @click="goOrderCar">
        <div class="box">
          <img src="@/assets/img/001-4.png" style="width: 36px; height: 36px" />
          <div>约车服务</div>
        </div>
        <span
          ><img src="@/assets/img/002.png" style="width: 64px; height: 56px"
        /></span>
      </li>
      <li @click="goChecked">
        <div class="box">
          <img src="@/assets/img/001-5.png" style="width: 36px; height: 36px" />
          <div>便民托运</div>
        </div>
        <span
          ><img src="@/assets/img/002.png" style="width: 64px; height: 56px"
        /></span>
      </li>
      <li @click="goState">
        <div class="box">
          <img src="@/assets/img/001-3.png" style="width: 36px; height: 36px" />
          <div>车站引导</div>
        </div>
        <span
          ><img src="@/assets/img/002.png" style="width: 64px; height: 56px"
        /></span>
      </li>
      <li @click="goState">
        <div class="box">
          <img src="@/assets/img/001-7.png" style="width: 36px; height: 36px" />
          <div>站车采风</div>
        </div>
        <span
          ><img src="@/assets/img/002.png" style="width: 64px; height: 56px"
        /></span>
      </li>
      <li @click="goUser">
        <div class="box">
          <img src="@/assets/img/001-8.png" style="width: 36px; height: 36px" />

          <div>用户反馈</div>
        </div>
        <span
          ><img src="@/assets/img/002.png" style="width: 64px; height: 56px"
        /></span>
      </li>
    </ul>
  </div>
  <!-- 四大块 -->
  <div class="service-lg">
    <ul>
      <li>
        <a href="#">
          <img src="@/assets/img/img1.jpg" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="@/assets/img/img2.jpg" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="@/assets/img/img3.png" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="@/assets/img/img4.png" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import router from "@/router";
// 预约
const goAppointment = () => {
  router.push("/serverinfo/appointment");
};
// 遗失
const goLost = () => {
  router.push("/serverinfo/lost");
};
// 约车
const goOrderCar = () => {
  router.push("/server/ordercar");
};
// 托运
const goChecked = () => {
  router.push("/server/checked");
};
// 车站指引
const goState = () => {
  router.push("/server/statebus");
};
// 用户反馈
const goUser = () => {
  router.push("/serverinfo/userback");
};
</script>

<style scoped>
.wrapper {
  width: 1200px;
  height: 150px;
  padding: 0 5px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.wrapper > ul > li {
  float: left;
  width: 14.2%;
  height: 100px;
  padding: 35px 0 0;
  line-height: 20px;
  text-align: center;
  background-position: right center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.wrapper > ul > li > a > img {
  float: left;
  width: 36px;
  height: 36px;
}
.wrapper > ul > li > div {
  float: left;
  text-align: center;
}
.wrapper > ul > li > span {
  width: 64px;
  height: 56px;
}
/* 服务列表大图 */
.service-lg {
  width: 1200px;
  height: 350px;
  padding: 0 5px;
  margin-left: auto;
  margin-right: auto;
}
.service-lg > ul > li {
  text-align: center;
  float: left;
  width: 590px;
  height: 160px;
  margin-right: 10px;
  margin-bottom: 20px;
  overflow: hidden;
}
.service-lg > ul > li > a > img {
  display: block;
  width: 590px;
  height: 160px;
}
</style>