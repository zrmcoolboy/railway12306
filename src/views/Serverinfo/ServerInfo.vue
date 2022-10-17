<template>
  <Header />
  <div class="center-box">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <a href="#">个人中心</a>
      <span>></span>
      <a href="#">温馨服务</a>
      <span>></span>
      <span class="active">重点旅客预约服务说明</span>
    </div>
    <!-- 个人中心左侧 -->
    <ul>
      <li class="menu-item">
        <h2 class="menu-tit">
          <a class="#">个人中心</a>
        </h2>
      </li>
      <li class="menu-item">
        <h2 class="menu-tit">
          <a class="#">订单中心</a>
        </h2>
        <ul class="menu-sub">
          <li>
            <a href="#">火车票订单</a>
          </li>
          <li>
            <a href="#">候补订单</a>
          </li>
          <li>
            <a href="#">计次-定期票订单</a>
          </li>
          <li>
            <a href="#">约号订单</a>
          </li>
          <li>
            <a href="#">雪具快运订单</a>
          </li>
          <li>
            <a href="#">餐饮-特产</a>
          </li>
          <li>
            <a href="#">保险订单</a>
          </li>
        </ul>
      </li>
      <li class="menu-item">
        <h2 class="menu-tit">
          <a class="#">本人车票</a>
        </h2>
      </li>
      <li class="menu-item" id="gerenzhongxin">
        <h2 class="menu-tit">
          <a class="#">会员中心</a>
        </h2>
      </li>
      <li class="menu-item" id="gerenzhongxin">
        <h2 class="menu-tit">
          <a class="#">个人信息</a>
        </h2>
        <ul class="menu-sub">
          <li>
            <a href="#">查看个人信息</a>
          </li>
          <li>
            <a href="#">账号安全</a>
          </li>
          <li>
            <a href="#">手机核验</a>
          </li>
          <li>
            <a href="#">账号注销</a>
          </li>
        </ul>
      </li>
      <li class="menu-item" id="gerenzhongxin">
        <h2 class="menu-tit">
          <a class="#">常用信息管理</a>
        </h2>
        <ul class="menu-sub">
          <li>
            <a href="#">乘车人</a>
          </li>
          <li>
            <a href="#">地址管理</a>
          </li>
        </ul>
      </li>
      <li class="menu-item" id="gerenzhongxin">
        <h2 class="menu-tit">
          <a class="#">温馨服务</a>
        </h2>
        <ul class="menu-sub">
          <li class="tive">
            <a href="#" class="appiontment">重点旅客预约</a>
          </li>
          <li>
            <a href="#">遗失物品查找</a>
          </li>
          <li>
            <a href="#">服务查询</a>
          </li>
        </ul>
      </li>
      <li class="menu-item" id="gerenzhongxin">
        <h2 class="menu-tit">
          <a class="#">投诉和建议</a>
        </h2>
        <ul class="menu-sub">
          <li>
            <a href="#">投诉</a>
          </li>
          <li>
            <a href="#">建议</a>
          </li>
        </ul>
      </li>
    </ul>

    <router-view></router-view>
  </div>
  <Footer />
</template>

<script setup>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
</script>

<style lang='less' scoped>
/* 面包屑 */
.breadcrumb {
  height: 50px;
  line-height: 50px;
  color: #666;
  font-size: 12px;
  margin-left: 160px;
}

.breadcrumb > a {
  color: #666;
}

.breadcrumb > span {
  font-family: "5B8B\4F53";
  margin: 0 3px;
}

.breadcrumb .active {
  color: #3b99fc;
}

/* 个人中心 */
.center-box {
  float: left;
  width: 1100px;
  height: 900px;
  position: relative;
}

/* 个人中心左侧 */
.center-box > ul {
  width: 100px;
  height: 890px;
  padding-inline-start: 10px;
  margin-left: 150px;
}

.center-box > ul > li {
  margin-bottom: 4px;
}

.center-box > ul > li .menu-tit {
  display: block;
  width: 100px;
  height: 20px;
  line-height: 10px;
  padding: 0 0px;
}

.center-box > ul > li .menu-tit > a {
  display: block;
  color: #333;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
}

.center-box > ul > li .menu-sub {
  margin-block-start: 0px;
  margin-block-end: 0px;
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 20px;
}

.center-box > ul > li .menu-sub > li {
  width: 130px;
  height: 30px;
  display: list-item;
  text-align: -webkit-match-parent;
}

.center-box > ul > li .menu-sub > li > a {
  height: 30px;
  line-height: 0px;
  padding: 0px 0px;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}

.menu-sub .tive .appiontment {
  color: #fff;
  background-color: #3b99fc;
}
</style>