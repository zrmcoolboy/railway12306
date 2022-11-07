<template>
  <div class="carOrder-container">
    <el-tabs type="card">
      <el-tab-pane label="全部订单">
        <div class="finished">
          <table class="info" rowspan="2" align="center">
            <th>车次信息</th>
            <th>旅客信息</th>
            <th>席位信息</th>
            <th>票价</th>
            <th>车票状态</th>
            <tr v-for="item in AllOrder" :key="item.carid">
              <td>
                <span class="dataZoom"
                  >{{ item.start }}-{{ item.end }} {{ item.carid }}</span
                >
                <br />
                {{ item.trade_time.slice(0, 10) }} <br />
                {{ item.startTime }} 开
              </td>
              <td>
                {{ item.username }} <br />
                {{ item.idcardnum }}
              </td>
              <td>
                {{ item.site }} <br />
                {{ item.carNumber }}车{{ item.carNumber }}{{ item.sitetype }}
              </td>
              <td>
                {{ item.travel }}票 <br />
                <span class="ticketPrice">{{ item.totalMoney }}元</span>
              </td>
              <td>已支付</td>
            </tr>
          </table>
        </div>
        <div>
          <NoneTicket v-if="AllOrder ? false : true" />
          <div class="tip-container">
            <h4>温馨提示：</h4>
            <p>1.席位已锁定，请在指定时间内完成网上支付。</p>
            <p>2.逾期未支付，系统将取消本次交易。</p>
            <p>3.在完成支付或取消本订单之前，您将无法购买其他车票。</p>
            <p>4.未尽事宜详见《铁路旅客运输规程》等有关规定和车站公告。</p>
          </div>
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
              <NoneTicket v-show="NoUse ? false : true" />
              <div class="finished">
                <table class="info" rowspan="2" align="center">
                  <th>车次信息</th>
                  <th>旅客信息</th>
                  <th>席位信息</th>
                  <th>票价</th>
                  <th>车票状态</th>
                  <tr v-for="item in NoUse" :key="item.carid">
                    <td>
                      <span class="dataZoom"
                        >{{ item.start }}-{{ item.end }} {{ item.carid }}</span
                      >
                      <br />
                      {{ item.trade_time.slice(0, 10) }} <br />
                      {{ item.startTime }} 开
                    </td>
                    <td>
                      {{ item.username }} <br />
                      {{ item.idcardnum }}
                    </td>
                    <td>
                      {{ item.site }} <br />
                      {{ item.carNumber }}车{{ item.carNumber
                      }}{{ item.sitetype }}
                    </td>
                    <td>
                      {{ item.travel }}票 <br />
                      <span class="ticketPrice">{{ item.totalMoney }}元</span>
                    </td>
                    <td>待使用</td>
                  </tr>
                </table>
              </div>
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
        <div>
          <NoneTicket />
          <div class="tip-container">
            <h4>温馨提示：</h4>
            <p>1.席位已锁定，请在指定时间内完成网上支付。</p>
            <p>2.逾期未支付，系统将取消本次交易。</p>
            <p>3.在完成支付或取消本订单之前，您将无法购买其他车票。</p>
            <p>4.未尽事宜详见《铁路旅客运输规程》等有关规定和车站公告。</p>
          </div>
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
        <div class="finished" v-show="outdate ? false : true">
          <table class="info" rowspan="2" align="center">
            <th>车次信息</th>
            <th>旅客信息</th>
            <th>席位信息</th>
            <th>票价</th>
            <th>车票状态</th>
            <tr v-for="item in outdate" :key="item.carid">
              <td>
                <span class="dataZoom"
                  >{{ item.start }}-{{ item.end }} {{ item.carid }}</span
                >
                <br />
                {{ item.trade_time.slice(0, 10) }} <br />
                {{ item.startTime }} 开
              </td>
              <td>
                {{ item.username }} <br />
                {{ item.idcardnum }}
              </td>
              <td>
                {{ item.site }} <br />
                {{ item.carNumber }}车{{ item.carNumber }}{{ item.sitetype }}
              </td>
              <td>
                {{ item.travel }}票 <br />
                <span class="ticketPrice">{{ item.totalMoney }}元</span>
              </td>
              <td>已完成</td>
            </tr>
          </table>
        </div>
        <NoneTicket v-show="outdate ? true : false" />
        <TipInfo />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import TipInfo from "@/components/TipView.vue";
import NoneTicket from "@/components/NoneTicket.vue";
import { getOrder } from "@/api/request";
import { ref, onMounted } from "vue";

const findmsg = ref("");
const datetime = ref("");
const carNum = ref("");
//全部订单
const AllOrder = ref(null);
//未使用
const NoUse = ref(null);
// 过时的
const outdate = ref(null);
const siteType = JSON.parse(localStorage.getItem("siteType"));
const personOrderInfo = JSON.parse(localStorage.getItem("personOrderInfo"));
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
// 获取购买的车票信息
const userid = JSON.parse(localStorage.getItem("userid"));
const getData = async () => {
  let res = await getOrder({ userid: userid });
  console.log(res);
  AllOrder.value = res.data;
  NoUse.value = AllOrder.value.filter((item) => {
    return item.state == 0;
  });
  outdate.value = AllOrder.value.filter((item) => item.state == 1);
  console.log(NoUse.value);
};
onMounted(() => {
  getData();
});
</script>

<style lang='less' scoped>
.finished {
  width: 980px;
  height: 400px;
  padding: 10px 15px;
  border: 1px solid #ccc;
}
.info {
  width: 100%;
  // height: 100%;
  margin: 20px auto;
  text-align: center;
  line-height: 25px;
  border-collapse: collapse;
  th {
    // font-weight: 400;
    color: #666;
    border: 1px solid #ccc;
    background-color: #eee;
  }
  tr {
    height: 100px;
    color: #666;
    // border-radius: 10px;
    td {
      border: 1px solid #ccc;
      font-size: 14px;
      .ticketPrice {
        color: #e6a23c;
      }
      .dataZoom {
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
}
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