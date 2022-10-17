<template>
  <Header />
  <div class="ticket-container">
    <el-card>
      <div class="title">
        <p class="orderinfo">订单信息</p>
        <el-card class="carInfo">
          <p class="carNumInfo">车次信息</p>
          <div class="trainInfo">
            <span class="time">2022-10-17(周一)</span>
            <span class="moveLeft">{{ orderinfo.carID }}次</span>
            <span class="startStation">{{ orderinfo.start }}站</span>
            <span class="moveLeft">({{ orderinfo.startTime }}开)</span>
            <span class="symbol">————</span>
            <span class="time">{{ orderinfo.end }}站</span>
            <span class="moveLeft">({{ orderinfo.endTime }}到)</span>
          </div>
          <div class="ticektType">
            <div class="item">
              <p>商务座(<span class="money">￥1873.0</span>)</p>
              <p class="moveLeft">{{ orderinfo.tedeng }}张票</p>
            </div>
            <div class="item">
              <p>一等座(<span class="money">￥1873.0</span>)</p>
              <p class="moveLeft">{{ orderinfo.one }}张票</p>
            </div>
            <div class="item">
              <p>二等座(<span class="money">￥1873.0</span>)</p>
              <p class="moveLeft">{{ orderinfo.two }}张票</p>
            </div>
          </div>
          <p class="carinfotip">
            *显示的卧铺票价均为上铺票价，供您参考。具体票价以您确认支付时实际购买的铺别票价为准。
          </p>
        </el-card>
        <el-card class="tableInfo">
          <p class="personInfo">乘车人信息</p>
          <div class="checkperson">
            <p class="personhead">
              <el-icon size="25px" color="#07f"><User /></el-icon>
              <span>乘车人</span>
            </p>
            <div class="every" v-show="username">
              <input type="checkbox" id="1" :checked="username" />
              <label for="1">{{ username }}</label>
            </div>
          </div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column
              align="center"
              prop="date"
              label="序号"
              width="70"
              type="index"
              :index="1"
            />
            <el-table-column align="center" prop="ticked" label="票种">
              <template #default="scope">
                <el-select v-model="ticket" placeholder="请选择">
                  <el-option value="成人票"></el-option>
                  <el-option value="学生票"></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="siteNum"
              label="席别"
              width="180"
            >
              <template #default="scope">
                <el-select
                  v-model="site"
                  placeholder="请选择"
                  @change="getSite"
                >
                  <el-option value="商务座"></el-option>
                  <el-option value="一等座"></el-option>
                  <el-option value="二等座"></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="username" label="姓名" />
            <el-table-column align="center" prop="idcard" label="证件类型" />
            <el-table-column
              align="center"
              prop="idcardnum"
              label="证件号码"
              width="180"
            />
            <el-table-column align="center" prop="tel" label="手机号码" />
            <el-table-column align="center" prop="positionNum" label="操作">
              <template #default="scope">
                <el-icon size="25px" @click="delRow"
                  ><CircleCloseFilled
                /></el-icon>
              </template>
            </el-table-column>
          </el-table>
          <img src="@/assets/img/ticketad7.png" style="width: 1106px" />
        </el-card>
      </div>
    </el-card>
    <div class="btns">
      <el-button @click="router.go(-1)">上一步</el-button>
      <el-button class="submit" @click="purchase">提交订单</el-button>
    </div>
    <el-card class="tip">
      <h2>温馨提示：</h2>
      <p>
        1.
        一张有效身份证件同一乘车日期同一车次只能购买一张车票，高铁动卧列车除外。
      </p>
      <p>
        2.
        购票时可使用的有效身份证件包括：中华人民共和国居民身份证、港澳居民来往内地通行证、台湾居民来往大陆通行证和按规定可使用的有效护照。
      </p>
      <p>
        3.
        购买儿童票时，乘车儿童有有效身份证件的，请填写本人有效身份证件信息。乘车儿童没有有效身份证件的，应使用同行成年人的有效身份证件信息；购票时不受第一条限制，但购票后、开车前须办理换票手续方可进站乘车。
      </p>
      <p>
        4. 购买学生票时，须在我的乘车人
        中登记乘车人的学生详细信息。学生票乘车时间限为每年的暑假6月1日至9月30日、寒假12月1日至3月31日。购票后、开车前，须办理换票手续方可进站乘车。换票时，新生凭录取通知书，毕业生凭学校书面证明，其他凭学生优惠卡。
      </p>
      <p>
        5.
        购买残疾军人（伤残警察）优待票的，须在购票后、开车前办理换票手续方可进站乘车。换票时，不符合规定的减价优待条件，没有有效"中华人民共和国残疾军人证"或"中华人民共和国伤残人民警察证"的，不予换票，所购车票按规定办理退票手续。
      </p>
      <p>
        6.一天内3次申请车票成功后取消订单（包含无座票时取消5次计为取消1次），当日将不能在12306继续购票。
      </p>
      <p>
        <strong
          >7.购买铁路乘意险的注册用户年龄须在18周岁以上，使用非中国居民身份证注册的用户如购买铁路乘意险，须在<span
            class="personinfo"
            >我的12306——个人信息</span
          >
          如实填写“出生日期”。</strong
        >
      </p>
      <p>
        <strong
          >8.父母为未成年子女投保，须在<span class="personinfo"
            >我的乘车人</span
          >
          登记未成年子女的有效身份证件信息。</strong
        >
      </p>
      <p>9.未尽事宜详见《铁路旅客运输规程》等有关规定和车站公告。</p>
    </el-card>
  </div>
  <Footer />
</template>

<script setup>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import { getPersonInfo, paysend } from "@/api/request";
import router from "@/router";
import { ref } from "vue";
const orderinfo = JSON.parse(localStorage.getItem("optioncarinfo"));
console.log(orderinfo);
const site = ref("");
const ticket = ref("");
// 删除
const delRow = () => {
  console.log("删除");
};

const userid = localStorage.getItem("userid");
const username = localStorage.getItem("username");
// 获取个人信息
const PersonInfo = async () => {
  let res = await getPersonInfo(userid);
  // console.log(res);
  if (res.status === 200) {
    tableData.value = res.data;
  }
};
// 车票钱
const money = ref(0);
// 获取座
const getSite = (val) => {
  // console.log(val);
  if (val === "商务座") {
    money.value = 1998;
  } else if (val === "一等座") {
    money.value = 1006;
  } else {
    money.value = 576;
  }
};
PersonInfo();
// 表格数据
const tableData = ref([]);
// 提交订单
const purchase = async () => {
  localStorage.setItem("troggle", "ticket");
  // 生成10位数的订单号
  let numArr = [];
  for (let i = 0; i < 10; i++) {
    let orderNum = Math.floor(Math.random() * 10);
    numArr.push(orderNum);
  }
  const orderTicketNum = numArr.join("");
  console.log(orderTicketNum);
  let res = await paysend(orderTicketNum, money.value);
  console.log(res);
  window.location.href = res.result;
};
</script>

<style lang='less' scoped>
.ticket-container {
  width: 1190px;
  margin: 20px auto;
  .el-card {
    margin-top: 20px;
    background-color: snow;
    .title {
      // border: 1px solid green;
      .orderinfo {
        width: 100%;
        height: 40px;
        margin-top: 0px;
        font-size: 20px;
        line-height: 0;
        color: rgb(62, 136, 202);
        font-weight: bold;
      }
      .carInfo {
        width: 100%;
        padding: 0;
        margin-top: -15px;
        // border: 1px solid blue;
        .carNumInfo {
          margin-top: 0;
          color: rgb(62, 136, 202);
          font-weight: bold;
        }
        .trainInfo {
          margin-top: 20px;
          padding-bottom: 10px;
          display: flex;
          // justify-content: space-around;
          border-bottom: 1px dashed #ccc;
          .time {
            font-weight: bold;
          }
          .moveLeft {
            margin-left: 20px;
          }
          .startStation {
            font-weight: bold;
            margin-left: 20px;
          }
          .symbol {
            margin: 0 10px;
          }
        }
        .ticektType {
          display: flex;
          font-size: 12px;
          margin: 15px 0;
          width: 500px;
          justify-content: space-between;
          .item {
            display: flex;
            .moveLeft {
              margin-left: 10px;
            }
            p {
              .money {
                color: #fb7403;
              }
            }
          }
        }
        .carinfotip {
          color: #3177bf;
          font-size: 12px;
          font-family: 宋体;
        }
      }
    }
    .tableInfo {
      margin-top: 20px;
      .personInfo {
        color: rgb(62, 136, 202);
        margin-bottom: 10px;
        font-weight: bold;
      }
      .checkperson {
        .personhead {
          font-size: 14px;
          font-family: 宋体;
          display: flex;
          align-items: center;
          .el-icon {
            margin-right: 10px;
          }
        }
        .every {
          display: flex;
          align-items: center;
          margin-left: 30px;
          margin-top: 10px;
          border-bottom: 1px dashed;
          margin-bottom: 10px;
          padding-bottom: 15px;
          font-size: 13px;
        }
      }
      .el-table {
        background-color: snow;
      }
    }
  }
  .btns {
    width: 200px;
    margin: 20px auto;
    .submit {
      background-color: #fdb800;
      color: #fff;
    }
  }
  .tip {
    background: #fffbe5;
    border: 1px solid #fbd800;
    padding: 5px;
    h2 {
      height: 25px;
      line-height: 25px;
      font-size: 14px;
    }
    p {
      line-height: 20px;
      color: #666;
      font-size: 12px;
      .personinfo {
        color: #07f;
        cursor: pointer;
      }
    }
  }
}
</style>
