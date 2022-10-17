<template>
  <Header />
  <!-- <h1>支付页面</h1> -->
  <div class="payContainer">
    <div class="message">
      <el-icon size="70px" color="#FF0033" v-show="!state"
        ><CircleCloseFilled
      /></el-icon>
      <el-icon size="70px" color="#00CC00" v-show="state"
        ><CircleCheckFilled
      /></el-icon>
      <div class="notify">
        <span class="orderSuccess" v-show="state">{{ msg }}!</span>
        <span class="orderSuccess" v-show="!state">{{ msg }}!</span>
        <span>感谢您选择铁路出行!</span>
        <span>您的订单号:</span>
        <span class="orderNum">{{ data.trade_no }}</span>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { useRouter } from "vue-router";
import { paysend2, delCartGoods } from "@/api/request";
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import { ref } from "vue";
const router = useRouter();
// console.log(router);
// console.log(router.currentRoute.value.query.out_trade_no);
//支付后返回的成功或失败消息
const msg = ref(null);
//成功或失败消息状态
const state = ref(true);
let data = {
  out_trade_no: router.currentRoute.value.query.out_trade_no,
  trade_no: router.currentRoute.value.query.trade_no,
};
const type = localStorage.getItem("troggle");
// console.log(goodsid);
// const goodsid = []
const zhifu2 = async () => {
  let res = await paysend2(data.out_trade_no, data.trade_no);
  console.log(res);
  msg.value = res.msg;
  state.value = res.type;
  if (res.code === 200 && type === "cart") {
    const userid = localStorage.getItem("userid");
    const orderList = JSON.parse(localStorage.getItem("orderFoods"));
    const goodsid = orderList.map((item) => {
      return item.goodsid;
    });
    const res = await delCartGoods(userid, goodsid);
    console.log(res);
  }
};
zhifu2();
</script>

<style lang='less' scoped>
.payContainer {
  width: 1190px;
  margin: 20px auto;
  .message {
    display: flex;
    align-items: center;
    height: 130px;
    border: 1px solid #996633ed;
    border-radius: 10px;
    padding-left: 50px;
    .notify {
      .orderSuccess {
        font-size: 22px;
        margin-left: 15px;
        color: #00cc00;
      }
      span {
        font-size: 13px;
        margin-left: 15px;
      }
      .orderNum {
        font-size: 22px;
        color: #ff9900;
        margin-left: 5px;
      }
    }
  }
}
</style>