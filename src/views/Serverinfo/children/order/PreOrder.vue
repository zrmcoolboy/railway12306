<template>
  <div class="carOrder-container">
    <el-tabs type="card">
      <el-tab-pane label="待出行">
        <NoneTicket />
        <DalayTip />
      </el-tab-pane>
      <el-tab-pane label="已完成">
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
        <div class="top-list">
          <ul class="list">
            <li>车次信息</li>
            <li>旅客信息</li>
            <li>席位信息</li>
            <li>操作</li>
          </ul>
        </div>
        <NoneTicket />
        <DalayTip />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import NoneTicket from "@/components/NoneTicket.vue";
import DalayTip from "@/components/DalayTip.vue";
import { ref } from "vue";
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
</script>

<style lang="less" scoped>
.tip-container {
  box-shadow: 0 0 5px #e5e5e5;
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
  .top-list {
    width: 95%;
    background-color: #f8f8f8;
    margin: 5px auto;
    height: 40px;
    .list {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>