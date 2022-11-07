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
        <span class="orderSuccess" v-show="state">{{ msg1 }}!</span>
        <span class="orderSuccess" v-show="!state">{{ msg1 }}!</span>
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
import { paysend2, delCartGoods, saveOrder } from "@/api/request";
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import { useMainStore } from "@/store";
import { ref, onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
const store = useMainStore();
const router = useRouter();
const { tableData } = storeToRefs(store);
//支付后返回的成功或失败消息
let msg1 = ref(null);
//成功或失败消息状态
let state = ref(true);
let orderdata = ref([]);

// 订单号
let data = {
  out_trade_no: router.currentRoute.value.query.out_trade_no,
  trade_no: router.currentRoute.value.query.trade_no,
};
const type = localStorage.getItem("troggle");
// 支付
const zhifu2 = async () => {
  let res = await paysend2(data.out_trade_no, data.trade_no);
  console.log(res);

  if (res.code == 200) {
    // console.log(123);
    msg1.value = res.message;
    // console.log(msg1.value);
    state.value = res.type;
    // console.log(state.value);
    orderdata.value = res.data;
    // console.log(orderdata.value);
    localStorage.setItem("orderdata", JSON.stringify(orderdata.value));
  }
  if (res.code === 200 && type === "cart") {
    const userid = localStorage.getItem("userid");
    const orderList = JSON.parse(localStorage.getItem("orderFoods"));
    const goodsid = orderList.map((item) => {
      return item.goodsid;
    });
    const res = await delCartGoods(userid, goodsid);
    // console.log(res);
  }
};
onMounted(() => {
  zhifu2();
  PostTrainOrder();
});
// 提交订单到数据库
// 收集订单信息
const optioncarinfo = JSON.parse(localStorage.getItem("optioncarinfo")); //车次信息
const userid = localStorage.getItem("userid"); //用户id
const randomCarNum = JSON.parse(localStorage.getItem("randomCarNum"));
const sitetype = JSON.parse(localStorage.getItem("siteType")); //车座
orderdata.value = JSON.parse(localStorage.getItem("orderdata"));
const personOrderInfo = JSON.parse(localStorage.getItem("personOrderInfo"));
const orderInfo = ref({
  order: {
    carid: optioncarinfo.carID,
    start: optioncarinfo.start,
    end: optioncarinfo.end,
    startTime: optioncarinfo.startTime,
    endTime: optioncarinfo.endTime,
    userid: userid,
    trade_no: orderdata.value.no,
    trade_time: orderdata.value.time,
    sitetype: sitetype,
    site: personOrderInfo[0].site,
    idcardnum: personOrderInfo[0].idcardnum,
    travel: personOrderInfo[0].travel,
    username: personOrderInfo[0].username,
    carNumber: randomCarNum,
    totalMoney: orderdata.value.price,
  },
});
// 订单信息保存到数据库
const PostTrainOrder = async () => {
  if (state.value == true) {
    let res = await saveOrder(orderInfo.value);
    console.log(res);
  }
};
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