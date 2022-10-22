<template>
  <Header />
  <div class="body">
    <div class="body-center">
      <el-carousel :interval="2000" arrow="never">
        <el-carousel-item>
          <img src="https://cx.12306.cn/tlcx/images/jf/b01.jpg" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="https://cx.12306.cn/tlcx/images/jf/b02.jpg" />
        </el-carousel-item>
      </el-carousel>
      <div class="body-top">
        <el-menu text-color="#fff" active-color="#4a90e2" bg-color="#ccc">
          <el-menu-item
            v-for="(item, index) in vips"
            :key="item.id"
            @mouseenter="num3 = index"
            @mouseleave="num3 = -1"
          >
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
            <i class="sanjiao" v-show="index == num3"></i>
            <div class="mange">
              <ul class="one" v-show="index == num3">
                <li v-for="(child, index) in item.children" class="fontColor">
                  {{ child }}
                </li>
              </ul>
            </div>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
  <div class="middle">
    <transition>
      <ul
        class="two"
        @mouseover="changeActive1($event)"
        @mouseout="removeActive1($event)"
      >
        <li data-id="1" :class="{ pre: true, in: troggle1, out: !troggle1 }">
          <span data-id="1" class="cpyd">车票预定</span>
        </li>
        <li data-id="2" :class="{ center: true, in: troggle2, out: !troggle2 }">
          <span data-id="2" class="zzhc">中转换乘</span>
        </li>
        <li data-id="3" :class="{ food: true, in: troggle3, out: !troggle3 }">
          <span data-id="3" class="cytc">餐饮特产</span>
        </li>
        <li data-id="4" :class="{ serve: true, in: troggle4, out: !troggle4 }">
          <span data-id="4" class="wxfw">温馨服务</span>
        </li>
      </ul>
    </transition>
  </div>
  <div class="all">
    <div class="left">
      <div class="member">会员手册</div>
      <i class="boderbottom"></i>
      <div class="tip">重要提示</div>
      <i class="importTip"></i>
      <div class="list">
        <ul>
          <li
            :class="{ active: num2 == index }"
            v-for="(item, index) in message2"
            :key="index"
            @mouseenter="num2 = index"
            @mouseleave="num2 = -1"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="question">常见问题</div>
      <i class="boderbottom border-question"></i>
      <div class="list">
        <ul>
          <li
            v-for="(item, index) in message"
            :key="index + 1"
            :class="{ active: index == num }"
            @mouseenter="num = index"
            @mouseleave="num = -1"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>

  <Footer />
</template>
<script setup>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import { reactive, ref } from "vue";
const popUpShow = ref(false);
const troggle1 = ref(false);
const troggle2 = ref(false);
const troggle3 = ref(false);
const troggle4 = ref(false);
const num = ref(-1);
const num2 = ref(-1);
const num3 = ref(-1);
const font = ref(true);
const message = ref([
  '1、如何成为"铁路畅行"会员?',
  '2、申请"铁路畅行"会员可使用的有效身份证件有哪些?',
  '3、如何在12306网站"铁路12306"手机APP申请注册成为"铁路畅行',
  "4、申请会员时，需要提供哪些信息?",
  '5、"铁路畅行"包含哪些服务?',
]);
const message2 = ref([
  '1、开通"铁路畅行"常旅客服务的车站',
  '2、"铁路畅行"常旅客会员服务渠道',
  "3、不参与积分累计的车票",
  "4、购票实名制车票退票积分怎么补登?",
]);
const vips = reactive([
  {
    id: "1",
    name: "会员管理",
    children: ["个人信息", "会员等级", "账户安全"],
    icon: "iconfont icon-huangguan1",
  },
  {
    id: "2",
    name: "积分账户",
    children: ["积分查询", "积分补登"],
    icon: "iconfont icon-jifen",
  },
  {
    id: "3",
    name: "积分兑换",
    children: ["受让人管理", "兑换车票"],
    icon: "iconfont icon-liwu",
  },
  {
    id: "4",
    name: "会员专享",
    children: ["敬请期待"],
    icon: "iconfont icon-zuanshi_o",
  },
  {
    id: "5",
    name: "帮助中心",
    children: ["会员须知", "成为会员", "关于会员", "关于积分"],
    icon: "iconfont icon-bangzhu",
  },
]);
const enter = () => {
  popUpShow.value = true;
};
const leave = () => {
  popUpShow.value = false;
};

const changeActive1 = (e) => {
  if (e.target.dataset.id === "1") {
    troggle1.value = true;
  } else if (e.target.dataset.id === "2") {
    troggle2.value = true;
  } else if (e.target.dataset.id === "3") {
    troggle3.value = true;
  } else if (e.target.dataset.id === "4") {
    troggle4.value = true;
  }
};
const removeActive1 = (e) => {
  if (e.target.dataset.id === "1") {
    troggle1.value = false;
  } else if (e.target.dataset.id === "2") {
    troggle2.value = false;
  } else if (e.target.dataset.id === "3") {
    troggle3.value = false;
  } else if (e.target.dataset.id === "4") {
    troggle4.value = false;
  }
};
</script>
<style lang="less" scoped>
.pre,
.center,
.food,
.serve {
  line-height: 20px;
  width: 220px;
  height: 150px;
  cursor: pointer;
  background-color: #f5f5f5;
}
.fontColor:hover {
  color: blue;
}
.list .active {
  color: white;
  background-color: rgb(76, 79, 190);
}
.remove {
  background-color: #f5f5f5;
  color: #3333;
}
.in {
  color: white;
  background-color: rgb(112, 116, 227);
}
.out {
  background-color: #f5f5f5;
}
.body-center {
  height: 340px;
  position: relative;
  // background-color: red;
  .el-carousel {
    height: 340px;
    :deep(.el-carousel__container) {
      height: 340px;
    }
  }
}
.el-carousel__item img {
  width: 100%;
  height: 340px;
}
.body-top {
  position: absolute;
  top: 0;
  left: 150px;
  height: 100%;
  .iconfont {
    width: 22px;
    height: 22px;
  }
}
.el-menu {
  background: rgba(140, 140, 219, 0.8);
  width: 120px;
  height: 100%;
  // opacity: 0.5;
  .el-menu-item {
    display: flex;
    flex-direction: column;
    height: 68px;
    color: #f5f5f5;
    position: relative;
    .mange {
      height: 40px;
      position: absolute;
      top: 10px;
      left: 133px;
    }
    .sanjiao {
      position: absolute;
      top: 28px;
      border: 10px solid transparent;
      border-right: 10px solid rgb(183, 192, 242);
      left: 115px;
    }
    // margin-top: 10px;
  }
}

.middle {
  width: 1200px;
  margin: 20px auto;
}
.two {
  display: flex;
  justify-content: space-around;
  span {
    font-size: 14px;
    margin: 40px auto 20px;
    display: block;
    width: 60px;
    height: 0px;
    padding-top: 60px;
    text-align: center;
  }
}

@keyframes comeOut1 {
  from {
    background-position: -60px 0px;
  }
  to {
    background-position: -60px -60px;
  }
}
@keyframes goBack1 {
  from {
    background-position: -60px -60px;
  }
  to {
    background-position: -60px 0px;
  }
}
@keyframes comeOut {
  from {
    background-position: 0px 0px;
  }
  to {
    background-position: 0px -60px;
  }
}
@keyframes goBack {
  from {
    background-position: 0px -60px;
  }
  to {
    background-position: 0px 0px;
  }
}
@keyframes comeOut2 {
  from {
    background-position: -120px 0px;
  }
  to {
    background-position: -120px -60px;
  }
}
@keyframes goBack2 {
  from {
    background-position: -120px -60px;
  }
  to {
    background-position: -120px 0px;
  }
}
@keyframes comeOut3 {
  from {
    background-position: -180px 0px;
  }
  to {
    background-position: -180px -60px;
  }
}
@keyframes goBack3 {
  from {
    background-position: -180px -60px;
  }
  to {
    background-position: -180px 0px;
  }
}

// s
.cpyd {
  background: url(https://cx.12306.cn/tlcx/images/jf/service.png) no-repeat;
  animation: goBack 0.5s backwards;
}
.pre:hover .cpyd {
  background: url(https://cx.12306.cn/tlcx/images/jf/service.png) no-repeat 0px -60px;
  animation: comeOut 0.5s forwards;
}

.zzhc {
  background: url(https://cx.12306.cn/tlcx/images/jf/service.png) no-repeat -60px
    0px;
  animation: goBack1 0.5s backwards;
}
.center:hover .zzhc {
  background: url(https://cx.12306.cn/tlcx/images/jf/service.png) no-repeat -60px -60px;
  animation: comeOut1 0.5s forwards;
}

.cytc {
  background: url(https://cx.12306.cn/tlcx/images/jf/service.png) no-repeat -120px
    0;
  animation: goBack2 0.5s backwards;
}
.food:hover .cytc {
  background: url(https://cx.12306.cn/tlcx/images/jf/service.png) no-repeat -120px -60px;
  animation: comeOut2 0.5s forwards;
}

.wxfw {
  background: url(https://cx.12306.cn/tlcx/images/jf/service.png) no-repeat -180px
    0;
  animation: goBack3 0.5s backwards;
}
.serve:hover .wxfw {
  background: url(https://cx.12306.cn/tlcx/images/jf/service.png) no-repeat -180px -60px;
  animation: comeOut3 0.5s forwards;
}

.all {
  display: flex;
  width: 1200px;
  justify-content: space-between;
  margin: 30px auto;
  .left {
    .member {
      padding: 15px 0;
      font-size: 18px;
      position: relative;
      margin-top: -20px;
    }
    .tip {
      font-size: 18px;
      position: relative;
      margin-bottom: 30px;
    }
    .importTip {
      display: block;
      width: 40px;
      height: 2px;
      line-height: 2px;
      background: #478dcd;
      margin: -20px 0 20px 0;
    }
  }
}
.boderbottom {
  display: block;
  width: 40px;
  height: 2px;
  line-height: 2px;
  background: #ca7c18;
  margin: -6px 0 20px 0;
}
.border-question {
  margin: 10px 0 20px 0;
  height: 3px;
}
.list {
  ul {
    li {
      margin: 10px 0;
      width: 480px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      padding: 0px 10px;
      background-color: #f5f5f5;
      border-bottom: 1px solid #e6e6e6;
      color: #333;
      cursor: pointer;
    }
  }
}

.one {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  width: 270px;
  border-radius: 8px;
  color: white;
  background: url(https://cx.12306.cn/tlcx/images/jf/bg01.png);
}

.one li {
  margin: 0 5px;
}
</style>
