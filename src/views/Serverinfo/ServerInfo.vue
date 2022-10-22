<template>
  <Header />
  <div class="center-box">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <a href="javascript:;">个人中心</a>
      <span v-show="name">></span>
      <a href="javascript:;" class="active1">{{ name }}</a>
    </div>
    <!-- 个人中心左侧 -->
    <ul @click="getItem">
      <li class="menu-item">
        <h2 class="menu-tit">
          <router-link to="/serverinfo">个人中心</router-link>
        </h2>
      </li>
      <li class="menu-item" @click="getItem">
        <h2 class="menu-tit">
          <a>订单中心</a>
        </h2>
        <ul class="menu-sub">
          <li class="active">
            <router-link to="/serverinfo/carorder" name="火车票订单"
              >火车票订单</router-link
            >
          </li>
          <li class="active">
            <router-link to="/serverinfo/dalay" name="候补订单"
              >候补订单</router-link
            >
          </li>
          <li class="active">
            <router-link to="/serverinfo/ontime" name="计次-定期票订单"
              >计次-定期票订单</router-link
            >
          </li>
          <li class="active">
            <router-link to="/serverinfo/preorder" name="约号订单"
              >约号订单</router-link
            >
          </li>
          <li class="active">
            <a href="javascript:;" name="雪具快运订单">雪具快运订单</a>
          </li>
          <li class="active">
            <a href="javascript:;" name="餐饮-特产">餐饮-特产</a>
          </li>
          <li class="active">
            <a href="javascript:;" name="保险订单">保险订单</a>
          </li>
        </ul>
      </li>
      <li class="menu-item">
        <h2 class="menu-tit">
          <a class="javascript:;">本人车票</a>
        </h2>
      </li>
      <li class="menu-item" id="gerenzhongxin">
        <h2 class="menu-tit">
          <a class="javascript:;">会员中心</a>
        </h2>
      </li>
      <li class="menu-item" id="gerenzhongxin" @click="getItem">
        <h2 class="menu-tit">
          <a class="javascript:;">个人信息</a>
        </h2>
        <ul class="menu-sub">
          <li class="active">
            <router-link to="/serverinfo/userinfo" name="查看个人信息"
              >查看个人信息</router-link
            >
          </li>
          <li class="active">
            <router-link to="/serverinfo/accountsafe" name="账号安全"
              >账号安全</router-link
            >
          </li>
          <li class="active">
            <a href="javascript:;" name="手机核验">手机核验</a>
          </li>
          <li class="active">
            <a href="javascript:;" name="账号注销">账号注销</a>
          </li>
        </ul>
      </li>

      <li class="menu-item" id="gerenzhongxin" @click="getItem">
        <h2 class="menu-tit">
          <a class="javascript:;">常用信息管理</a>
        </h2>
        <ul class="menu-sub">
          <li class="active" @click="getAllInfo">
            <router-link to="/serverinfo/address" name="乘车人"
              >乘车人</router-link
            >
          </li>
          <li class="active">
            <a href="javascript:;" name="地址管理">地址管理</a>
          </li>
        </ul>
      </li>
      <li class="menu-item" id="gerenzhongxin" @click="getItem">
        <h2 class="menu-tit">
          <a class="javascript:;">温馨服务</a>
        </h2>
        <ul class="menu-sub">
          <li class="active">
            <a href="javascript:;" class="appiontment" name="重点旅客预约"
              >重点旅客预约</a
            >
          </li>
          <li class="active">
            <a href="javascript:;" name="遗失物品查找">遗失物品查找</a>
          </li>
          <li class="active">
            <a href="javascript:;" ame="服务查询">服务查询</a>
          </li>
        </ul>
      </li>
      <li class="menu-item" id="gerenzhongxin" @click="getItem">
        <h2 class="menu-tit">
          <a class="javascript:;">投诉和建议</a>
        </h2>
        <ul class="menu-sub">
          <li class="active">
            <a href="javascript:;" name="投诉">投诉</a>
          </li>
          <li class="active">
            <a href="javascript:;" name="建议">建议</a>
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
import { getAllPersonInfo } from "@/api/request";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";
const store = useMainStore();
import { ref } from "vue";
const name = ref("");
const getItem = (e) => {
  // console.log(e.target.name);
  name.value = e.target.name;
};
const userid = localStorage.getItem("userid");
// 获取账户下所有关联的人
const getAllInfo = async () => {
  const res = await getAllPersonInfo(userid);
  console.log(res);
  if (res.status === 200) {
    store.$patch({
      AllPersonInfo: res.data,
    });
  }
};
</script>

<style lang='less' scoped>
.menu-item {
  text-align: center;
}
.active:hover {
  background-color: #0077ff;
  cursor: pointer;
  a {
    color: #fff !important;
  }
}
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

.breadcrumb .active1 {
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
  margin-top: 18px;
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

.center-box > ul > li .menu-sub > li {
  width: 130px;
  height: 30px;
  display: list-item;
  text-align: -webkit-match-parent;
}

.center-box > ul > li .menu-sub > li > a {
  width: 100%;
  height: 100%;
  line-height: 28px;
  display: block;
  color: #666;
  font-size: 14px;
}

.menu-sub .tive .appiontment {
  color: #fff;
  background-color: #3b99fc;
}
</style>