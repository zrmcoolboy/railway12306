<template>
  <!-- <h1>头部组件</h1> -->
  <div class="body">
    <!-- 搜索框区域 -->
    <div class="bar-top">
      <router-link to="/home"
        ><img src="@/assets/img/logo@2x.png" style="width: 200px; height: 50px"
      /></router-link>
      <div class="top-bar-right">
        <div class="right-search">
          <input
            type="text"
            class="right-search-one"
            placeholder="搜索车票、餐饮、常旅客、相关规章"
          />
          <div class="icon-search">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </div>
        <ul>
          <li>
            <a href="javascipt:;">爱心模式</a>
          </li>
          <li class="English">
            <el-dropdown>
              <span class="el-dropdown-link">
                <a href="javascipt:;">English</a>
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>English</el-dropdown-item>
                  <el-dropdown-item>中文</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
          <li>
            <el-dropdown>
              <span class="el-dropdown-link">
                <a href="javascipt:;">我的12306</a>
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="router.push('/serverinfo/carorder')"
                    >火车票订单</el-dropdown-item
                  >
                  <el-dropdown-item>候补车票</el-dropdown-item>
                  <el-dropdown-item>计次•定期票订单</el-dropdown-item>
                  <el-dropdown-item>约号订单</el-dropdown-item>
                  <el-dropdown-item>本人车票</el-dropdown-item>
                  <el-dropdown-item divided>我的餐饮•特产</el-dropdown-item>
                  <el-dropdown-item>我的保险</el-dropdown-item>
                  <el-dropdown-item>我的会员</el-dropdown-item>
                  <el-dropdown-item divided>查看个人信息</el-dropdown-item>
                  <el-dropdown-item>账户安全</el-dropdown-item>
                  <el-dropdown-item divided>乘车人</el-dropdown-item>
                  <el-dropdown-item>地址管理</el-dropdown-item>
                  <el-dropdown-item divided>温馨服务查询</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
          <li>
            <router-link to="/login" class="login" v-show="!username2"
              >登录</router-link
            >
            <router-link to="/serverinfo" class="login" v-show="username2"
              >您好，<span class="login-name" style="color: #3b99fc">{{
                username2
              }}</span></router-link
            >
          </li>
          <li>
            <router-link to="/regist" class="login" v-show="!username2"
              >注册</router-link
            >
            <span @click="outLogin" class="outLogin" v-show="username2">
              退出
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 导航栏部分 -->
  <div class="body-top">
    <ul class="menu">
      <li>
        <router-link to="/home" class="first">首页</router-link>
      </li>
      <li>
        <a href="javascipt:;">车票</a>
        <div class="menu-one">
          <div class="one">
            <h3>购买</h3>
            <ul class="one-one">
              <li>
                <router-link to="/single">单程</router-link>
              </li>
              <li>
                <a href="javascipt:;">往返</a>
              </li>
              <li>
                <a href="javascipt:;">接续换乘</a>
              </li>
              <li>
                <a href="javascipt:;">计次•定期票</a>
              </li>
            </ul>
          </div>
          <div class="one">
            <h3>变更</h3>
            <ul class="one-one">
              <li>
                <a href="javascipt:;">退票</a>
              </li>
              <li>
                <a href="javascipt:;">改签</a>
              </li>
              <li>
                <a href="javascipt:;">变更到站</a>
              </li>
            </ul>
          </div>
          <div class="one">
            <h3>更多</h3>
            <ul class="one-one">
              <li>
                <a href="javascipt:;">中铁银通卡</a>
              </li>
              <li>
                <a href="javascipt:;">广九直通车</a>
              </li>
              <li>
                <a href="javascipt:;">市郊快速铁路</a>
              </li>
              <li>
                <a href="javascipt:;">国际列车</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <a href="javascipt:;">团购服务</a>
        <div class="menu-one">
          <ul class="one-one">
            <li>
              <a href="javascipt:;">务工人员</a>
            </li>
            <li>
              <a href="javascipt:;">学生团体</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="javascipt:;">会员服务</a>
        <div class="menu-one">
          <ul class="one-one">
            <li>
              <router-link to="/vipinfo">会员管理</router-link>
            </li>
            <li>
              <a href="javascipt:;">积分账户</a>
            </li>
            <li>
              <a href="javascipt:;">积分兑换</a>
            </li>
            <li>
              <a href="javascipt:;">会员专享</a>
            </li>
            <li>
              <a href="javascipt:;">会员中心</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="javascipt:;">站车服务</a>
        <div class="menu-one">
          <ul class="one-one">
            <li>
              <a href="javascipt:;">重点旅客预约</a>
            </li>
            <li>
              <a href="javascipt:;">便民托运</a>
            </li>
            <li>
              <a href="javascipt:;">共享汽车</a>
            </li>
            <li>
              <a href="javascipt:;">车站引导</a>
            </li>
            <li>
              <a href="javascipt:;">遗失物品查找</a>
            </li>
            <li>
              <a href="javascipt:;">遗失物品查找</a>
            </li>
            <li>
              <a href="javascipt:;">定制接送</a>
            </li>
            <li>
              <a href="javascipt:;">定制接送</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="javascipt:;">商旅服务</a>
        <div class="menu-one">
          <ul class="one-one">
            <li>
              <router-link to="/shopserver">餐饮•特产</router-link>
            </li>
            <li>
              <a href="javascipt:;">旅游</a>
            </li>
            <li>
              <a href="javascipt:;">保险</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="javascipt:;">出行指南</a>
        <div class="menu-one">
          <div class="one">
            <h3>常见问题</h3>
            <ul class="one-one">
              <li>
                <a href="javascipt:;">车票</a>
              </li>
              <li>
                <a href="javascipt:;">购票</a>
              </li>
              <li>
                <a href="javascipt:;">改签、变更到站</a>
              </li>
              <li>
                <a href="javascipt:;">退票</a>
              </li>
              <li class="more">
                <a href="javascipt:;">更多>></a>
              </li>
            </ul>
          </div>
          <div class="one">
            <h3>旅客须知</h3>
            <ul class="one-one">
              <li>
                <a href="javascipt:;">铁路电子客票</a>
              </li>
              <li>
                <a href="javascipt:;">身份核验</a>
              </li>
              <li class="more">
                <a href="javascipt:;">更多>></a>
              </li>
            </ul>
          </div>
          <div class="one">
            <h3>相关章程</h3>
            <ul class="one-one">
              <li>
                <a href="javascipt:;">铁路互联网售票办法</a>
              </li>
              <li>
                <a href="javascipt:;">铁路旅客运输规程</a>
              </li>
              <li>
                <a href="javascipt:;">铁路进站乘车禁止和...</a>
              </li>
              <li>
                <a href="javascipt:;">广深港高速铁路跨境旅客...</a>
              </li>
              <li class="more">
                <a href="javascipt:;">更多>></a>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <a href="javascipt:;">信息查询</a>
        <div class="menu-one">
          <div class="finally">
            <h3>常用查询</h3>
            <ul class="one-one">
              <li>
                <a href="javascipt:;">正晚点</a>
              </li>
              <li>
                <a href="javascipt:;">时刻表</a>
              </li>
              <li>
                <a href="javascipt:;">公布票价</a>
              </li>
              <li>
                <a href="javascipt:;">检票口</a>
              </li>
              <li>
                <a href="javascipt:;">起售时间</a>
              </li>
              <li>
                <a href="javascipt:;">最新发布</a>
              </li>
              <li>
                <a href="javascipt:;">天气</a>
              </li>
              <li>
                <a href="javascipt:;">交通查询</a>
              </li>
              <li>
                <a href="javascipt:;">代售点</a>
              </li>
              <li>
                <router-link to="/tel">客服电话</router-link>
              </li>
              <li>
                <a href="javascipt:;">列车状态</a>
              </li>
              <li>
                <a href="javascipt:;">常用信息</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
// import { useMainStore } from "@/store";
// import { storeToRefs } from "pinia";
import { reactive } from "vue";
import router from "@/router";
import { ElMessage } from "element-plus";
const username2 = localStorage.getItem("username");
// const store = useMainStore();
// const { username } = storeToRefs(store);
const outLogin = () => {
  ElMessage({
    message: "退出成功！",
    type: "success",
  });
  localStorage.removeItem("token");
  localStorage.removeItem("userid");
  localStorage.removeItem("username");
  // store.$patch({
  //   username: "",
  // });
  router.push("/login");
};
</script>

<style lang="less" scoped>
.body {
  /* position: absolute; */
  width: 100%;
  overflow: hidden;
}
.body .bar-top {
  width: 100%;
  height: 80px;
  /* background-color: pink; */
  position: relative;
  z-index: 100;
}
.body .bar-top > a {
  width: 200px;
  height: 50px;
  display: block;
  position: absolute;
  left: 165px;
  top: 15px;
}
.top-bar-right {
  width: 1115px;
  /* width: 100%; */
  height: 40px;
  background: url(@/assets/img/train@2x.png);
  /* background-color: yellow; */
  position: absolute;
  top: 20px;
  right: 0px;
  ul {
    .English {
      margin-right: -25px;
    }
  }
}
.top-bar-right .right-search {
  display: flex;
  align-items: center;
  width: 380px;
  height: 30px;
  /* background-color: javascipt:;0000FF; */
  position: relative;
  left: 160px;
  top: 4px;
  float: left;
}
.right-search .icon-search {
  background-color: #3b99fc;
  height: 31px;
  width: 31px;
  text-align: center;
  line-height: 31px;
}
.right-search .right-search-one {
  width: 100%;
  height: 27px;
  border: 1px solid #dedede;
  background-color: #fff;
  color: #333;
  outline: none;
  font-size: 14px;
}
#search {
  width: 30px;
  height: 30px;
  position: relative;
  color: #ffffff;
  top: -31px;
  left: 355px;
  display: block;
  background-color: #3b99fc;
  line-height: 30px;
  text-align: center;
}
.bar-top ul {
  position: relative;
  /* background-color: yellow; */
  left: 255px;
}
.bar-top ul > li {
  display: block;
  height: 40px;
  padding: 10px;
  float: left;
  font-size: 12px;
}
.bar-top ul > li > a {
  color: #3b99fc;
  cursor: pointer;
}
/* 英文 */
.el-dropdown {
  width: 80px;
}
:deep(.el-dropdown-item) {
  font-size: 12px;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
}
.el-dropdown a {
  color: #2676e3;
  font-size: 12px;
  display: block;
  margin-top: 3px;
}
.el-dropdown .el-icon {
  color: #2676e3;
}
.bar-top ul > li > .login {
  color: #333;
}
.outLogin {
  cursor: pointer;
}
.outLogin:hover {
  color: #3b99fc;
}
.bar-top ul > li > .login:hover .login-name {
  text-decoration: underline;
}
/* 导航栏 */
.body-top {
  height: 40px;
  background-color: #3b99fc;
  position: relative;
  top: 0px;
  z-index: 1000;
}
.menu {
  width: 1190px;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  font-size: 16px;
  position: relative;
}
.menu li {
  float: left;
  width: 148px;
  color: #ffffff;
  line-height: 40px;
}
/* .menu li .first {
   background-color: #2676e3; 
} */
.menu > li > a {
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
}
.menu > li > a:hover {
  background-color: #2676e3;
}
.menu .menu-one {
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  min-height: 40px;
  background-color: rgba(255, 255, 255, 0.96);
  border: 1px solid #3b99fc;
  padding: 14px 0;
  font-size: 14px;
  display: none;
  /* background-color: pink; */
  z-index: 1000;
}
.body-top > ul > li:hover .menu-one {
  display: block;
}
.one {
  width: 380px;
  height: 110px;
  float: left;
  font-size: 14px;
  border-right: 1px solid #ccc;
}
.one-one li {
  /* width: 198px; */
  float: left;
  line-height: 32px;
  height: 32px;
  padding-left: 30px;
  /* border-right: 1px solid javascipt:;acd1f9; */
  font-size: 14px;
}
.menu-one .one:nth-child(3) {
  border-right: 0px;
}
h3 {
  color: #3b99fc;
  height: 24px;
  line-height: 16px;
  position: relative;
  padding: 0 0 8px 30px;
  /* border-right: 1px solid javascipt:;acd1f9; */
  font-size: 14px;
}
.one-one a {
  color: #666;
  font-size: 14px;
}
.one-one a:hover {
  color: #3b99fc;
}
.one .one-one .more {
  color: blue;
}
</style>