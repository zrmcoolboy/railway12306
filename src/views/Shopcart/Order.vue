<template>
  <Header />
  <el-card class="order">
    <div class="header">
      <h2 class="header-title">订单确认消息</h2>
      <div class="item">
        <div class="content item1" style="width: 225px">店铺宝贝</div>
        <div class="content item2" style="width: 180px">商品属性</div>
        <div class="content item3" style="width: 120px">单价</div>
        <div class="content item4" style="width: 120px">数量</div>
        <!-- <div class="content item5" style="width: 180px">优惠方式</div> -->
        <div class="content item6" style="width: 130px">小计</div>
      </div>
    </div>
    <div class="body">
      <div class="one">
        <span class="name">店铺名称&nbsp;：&nbsp; {{ shophead[0].name }}</span>
      </div>
      <div class="two" v-for="item in orderFoods" :key="item.goodsid">
        <div class="iteminfo">
          <img class="info-img" :src="item.goodimg" />
          <div class="info-msg">{{ item.goodsname }}</div>
        </div>
        <div class="item-cell"><p>大碗</p></div>
        <div class="item-price">{{ item.goodsprice.toFixed(2) }}</div>
        <div class="item-number">{{ item.count }}</div>
        <!-- <div class="item-select">省10:新品上新</div> -->
        <div class="item-price" style="color: red">
          {{ item.goodsprice.toFixed(2) }}
        </div>
      </div>
      <div class="three">
        <div class="first"><span class="f-text">开具发票</span></div>

        <div class="first">
          <span class="f-text">运送方式：</span>
          <span class="f-text">普通配送</span>
          <span class="f-text">快递 &nbsp;免邮</span>
          <span class="f-text1">0.00</span>
        </div>
      </div>

      <div class="four">
        <div class="four-text">给卖家留言：</div>
        <div class="four-input">
          <textarea
            placeholder="选填，请先和商家协商一致，付款后商家可见"
            class="four-info"
            rows="3"
            style="color: #ccc"
          ></textarea>
        </div>
      </div>
      <div class="five">
        <div class="pay">
          <div class="addr">
            <div>
              <span class="realpay--title">实付款:</span>
              <span class="realpay--price-symbol">¥{{ total.toFixed(2) }}</span>
            </div>
            <div>
              <span class="realpay--title2"> 送达至:</span>
              <span class="addr-info">
                {{ optioncarinfo.carID }}次 {{ randomCarNum }}车{{ randomCarNum
                }}{{ siteType }}</span
              >
            </div>
            <div class="last-name">
              <span class="realpay--title3"> 收货人:</span>
              <span class="addr-info">张瑞敏</span>
            </div>
          </div>
        </div>
        <div class="six">
          <button role="button" class="gt-btn" @click="gopay">提交订单</button>
        </div>
      </div>
    </div>
  </el-card>
  <Footer />
</template>
<script setup>
import { computed } from "vue";
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import { paysend } from "@/api/request";
const shophead = JSON.parse(localStorage.getItem("shophead"));
// console.log(shophead);
const orderFoods = JSON.parse(localStorage.getItem("orderFoods"));

let total = JSON.parse(localStorage.getItem("orderPrice"));
let orderNum = JSON.parse(localStorage.getItem("OrderNum"));
orderNum = orderNum.join("");

const randomCarNum = JSON.parse(localStorage.getItem("randomCarNum"));
const siteType = JSON.parse(localStorage.getItem("siteType"));
const optioncarinfo = JSON.parse(localStorage.getItem("optioncarinfo"));
// 支付
const gopay = async () => {
  localStorage.setItem("troggle", "cart");
  let res = await paysend(orderNum, total);
  console.log(res);
  window.location.href = res.result;
};
</script>
<style lang='less' scoped>
.order {
  width: 1025px;
  margin: 60px auto;
  border: 2px solid #3b99fc;
}
.header {
  margin-bottom: 15px;
}
.header-title {
  margin-left: 10px;
  line-height: 60px;
  color: #333;
  font-weight: 700;
  font-size: 18px;
}
.item {
  margin-top: 15px;
  color: #6c6c6c;
  display: flex;
  justify-content: space-around;
}
.content {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-bottom: 3px solid #b2d1ff;
  font-size: 12px;
  margin-left: 5px;
  vertical-align: bottom;
}
.body {
  width: 990px;
}
.one {
  padding-bottom: 5px;
  margin-top: 25px;
  border-bottom: 1px dotted #80b2ff;
  height: 27px;
}
.name {
  margin-left: 10px;
  color: #6c6c6c;
  font-size: 15px;
}
.two {
  height: 110px;
  background-color: #f0f4fc;
  border-bottom: 1px dotted #80b2ff;
  display: flex;
  justify-content: space-around;
}
.iteminfo {
  width: 225px;
  padding: 20px 0 20px 10px;
}
.info-img {
  width: 70px;
  height: 70px;
}
.info-msg {
  color: #454040;
  padding-left: 10px;
  vertical-align: top;
  display: inline-block;
  box-sizing: content-box;
  margin-right: 1px;
  font-size: 12px;
  text-overflow: ellipsis;
}
.item-cell {
  margin-top: 20px;
  width: 180px;
  font-size: 12px;
  color: #6c6c6c;
  /* padding-left: 78px; */
  vertical-align: top;
  text-align: center;
}
.item-price {
  width: 120px;
  margin-top: 20px;
  color: #6c6c6c;
  text-align: center;
}
.item-number {
  width: 140px;
  margin-top: 20px;
  color: #6c6c6c;
  text-align: center;
}
.item-select {
  width: 180px;
  margin-top: 20px;
  color: #6c6c6c;
  text-align: center;
}
.three {
  height: 50px;
  background-color: #f5f5f5;
  border-bottom: 1px dotted #80b2ff;
  display: flex;
}
.four {
  height: 80px;
  background-color: #f5f5f5;
  border-bottom: 1px dotted #80b2ff;
  display: flex;
}
.first {
  width: 480px;
  height: 35px;
  padding: 10px;
}
.f-text {
  font-size: 12px;
  color: #333;
  vertical-align: middle;
  margin-left: 5px;
}
.f-text1 {
  color: red;
  float: right;
  margin-right: 39px;
}
.first {
  height: 60px;
  padding: 10px;
}
.four-text {
  font-size: 12px;
  margin-left: 15px;
  margin-top: 10px;
}
.four-input {
  //   width: 328px;
  width: 90%;
  height: 43px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 10px;
}
.four-info {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #fff;
  outline: none;
}

.five {
  width: 100%;
  text-align: right;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  .pay {
    width: 100%;
    height: 120px;
    .addr {
      margin-top: 15px;
      padding: 10px;
      display: flex;
      // flex-direction: column;
      // justify-content: space-between;
      .realpay--title {
        font-weight: bold;
        margin-right: 10px;
      }
      .realpay--title2 {
        font-weight: bold;
        margin-right: 10px;
      }
      .realpay--title3 {
        font-weight: bold;
        margin-right: 10px;
        margin-top: 5px;
      }
      .realpay--price-symbol {
        color: red;
        display: inline-block;
        width: 60px;
        text-align: left;
      }
      .last-name {
        margin-left: 15px;
      }
    }
  }
  .six {
    margin-top: -10px;

    .gt-btn {
      width: 150px;
      height: 50px;
      border-radius: 5px;
      border: 1px solid #ccc;
      cursor: pointer;
    }
  }
  .addr-info {
    font-weight: normal;
    color: red;
    // display: inline-block;
    width: 60px;
    text-align: left;
  }
}
</style>