<template>
  <div class="carOrder-container">
    <el-tabs type="card">
      <el-tab-pane label="未完成订单">
        <NoneTicket />
        <div class="tip-container">
          <h4>温馨提示：</h4>
          <p>1.席位已锁定，请在指定时间内完成网上支付。</p>
          <p>2.逾期未支付，系统将取消本次交易。</p>
          <p>3.在完成支付或取消本订单之前，您将无法购买其他车票。</p>
          <p>4.未尽事宜详见《铁路旅客运输规程》等有关规定和车站公告。</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="未出行订单">
        <div class="order-container">
          <div class="order">
            <div class="inputinto">
              <el-select v-model="findmsg" placeholder="请选择查询方式">
                <el-option label="按订票日期查询" value="按订票日期查询" />
                <el-option label="按乘车日期查询" value="按乘车日期查询" />
              </el-select>
            </div>
            <div class="checkTime">
              <el-date-picker
                v-model="datetime"
                type="daterange"
                range-separator="-"
                :start-placeholder="time"
                :end-placeholder="time"
              />
            </div>
            <div class="findCar">
              <el-input
                v-model="carNum"
                placeholder="订单号/车次/姓名"
                clearable
              />
            </div>
            <el-button>查询</el-button>
          </div>
          <el-tabs type="border-card" class="demo-tabs">
            <el-tab-pane label="全部">
              <NoneTicket />
              <TipInfo />
            </el-tab-pane>
            <el-tab-pane label="可改签">
              <NoneTicket />
              <TipInfo />
            </el-tab-pane>
            <el-tab-pane label="可变更车站">
              <NoneTicket />
              <TipInfo />
            </el-tab-pane>
            <el-tab-pane label="可退票">
              <NoneTicket />
              <TipInfo />
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
      <el-tab-pane label="历时订单">
        <div class="order-container">
          <div class="order">
            <span class="dateTime">乘车日期</span>
            <div class="checkTime">
              <el-date-picker
                v-model="datetime"
                type="daterange"
                range-separator="-"
                :start-placeholder="time"
                :end-placeholder="time"
              />
            </div>
            <div class="findCar">
              <el-input
                v-model="carNum"
                placeholder="订单号/车次/姓名"
                clearable
              />
            </div>
            <el-button>查询</el-button>
          </div>
        </div>
        <NoneTicket />
        <TipInfo />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import TipInfo from "@/components/TipView.vue";
import NoneTicket from "@/components/NoneTicket.vue";
const { ref } = require("@vue/reactivity");

const findmsg = ref("");
const datetime = ref("");
const carNum = ref("");
//获取日期
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
if (month < 10) {
  month = "0" + month;
}
if (date < 10) {
  date = "0" + date;
}
let time = year + "-" + month + "-" + date;

// 内置tab
const tabitem = (context, e) => {};
</script>

<style lang='less' scoped>
.tip-container {
  width: 968px;
  margin: 10px auto;
  border: 2px solid #ffddba;
  padding: 10px 8px 0 20px;
  line-height: 20px;
  h4 {
    font-weight: normal;
    font-size: 15px;
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    margin-top: 5px;
    span {
      color: #0077ff;
      cursor: pointer;
    }
  }
}
.carOrder-container {
  box-shadow: 0 0 5px #e5e5e5;
  width: 1030px;
  border: 1px solid #f5f5f5;
  position: absolute;
  top: 65px;
  left: 357px;
  .unorder-container {
    .unorder {
      width: 998px;
      height: 352px;
      border: 1px solid #3b99fc;
      margin: 20px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 87px;
        height: 70px;
      }
      .word {
        margin-left: 20px;
        font-size: 15px;
        color: #ccc;
        line-height: 20px;
        span {
          color: #3b99fc;
          text-decoration: underline;
        }
      }
    }
  }
  .order-container {
    .order {
      display: flex;
      justify-content: start;
      align-items: center;
      padding-bottom: 10px;
      .dateTime {
        margin-left: 20px;
        font-size: 14px;
      }
      .inputinto {
        width: 160px;
        margin-left: 20px;
      }
      .checkTime {
        width: 380px;
        margin-left: 20px;
      }
      .el-button {
        width: 100px;
        margin-left: 20px;
      }
    }
    .demo-tabs {
      margin-top: 20px;
      :deep(.el-tabs__item.is-active) {
        background-color: #3b99fc;
        color: #fff;
      }
    }
  }
}
</style>