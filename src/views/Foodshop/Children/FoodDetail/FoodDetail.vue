<template>
  <el-card class="box-card">
    <div class="container">
      <!-- <label for="">乘车日期</label>
        <el-input v-model="carInfo.cardate" placeholder="2022-10-06" /> -->
      <div class="date">
        <span class="demonstration">乘车日期</span>
        <el-date-picker
          v-model="carInfo.cardate"
          type="date"
          placeholder="2022-10-06"
        />
      </div>
      <div class="date">
        <label for="">车次</label>
        <el-input v-model="carInfo.carNum" placeholder="G1" />
      </div>
      <div class="date">
        <label for="">乘车站</label>
        <el-input v-model="carInfo.cargo" placeholder="北京" />
      </div>
      <div class="date">
        <label for="">到达站</label>
        <el-input v-model="carInfo.arrive" placeholder="上海" />
      </div>
      <el-button color="#ff8000" class="btn">查询</el-button>
    </div>
    <div class="sendStatic">
      <span>配送站：</span>
      <button>全部</button>
    </div>
  </el-card>
  <div class="shoplist">
    <el-card
      @click="goDetail(item.shopID, item.name, item.shopimg)"
      class="shopinfo"
      v-for="item in shopinfo"
      :key="item.shopID"
    >
      <div class="info">
        <img :src="item.shopimg" alt="" />
        <div class="info-right">
          <p class="shopname">{{ item.name }}</p>
          <p class="price">
            起送：￥{{ item.sendmoney.toFixed(2) }}|配送费：￥{{
              item.startmoney.toFixed(2)
            }}
          </p>
        </div>
      </div>
      <div class="shopbottom">
        <span>09-16起售</span>
        <span>10-15 07:04截止下单</span>
      </div>
    </el-card>
  </div>

  <!-- 搜索不到时 -->
  <div class="none" v-show="!shopinfo">
    <img src="@/assets/img/empty.png" alt="" />
    <p>很抱歉，未查询到餐饮?特产信息！</p>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";
import router from "@/router";
import { getGoodsInfo } from "@/api/request.js";
const token = localStorage.getItem("token");
if (!token) {
  ElMessageBox.confirm("您还未登录，请您先登录！", "提示", {
    confirmButtonText: "去登陆",
    cancelButtonText: "取消",
    type: "warning",
    center: true,
  })
    .then(() => {
      router.push("/login");
    })
    .catch(() => {
      ElMessage({
        type: "warning",
        message: "取消",
      });
    });
}
const store = useMainStore();
const { shopinfo, startCar, endCar, car, goDate } = storeToRefs(store);
const carInfo = reactive({
  carDate: "",
  carNum: "",
  cargo: "",
  arrive: "",
});
// console.log(startCar);
carInfo.carDate = goDate;
carInfo.carNum = car;
carInfo.cargo = startCar;
carInfo.arrive = endCar;
const goDetail = async (id, name, img) => {
  console.log(id, name, img);
  const shophead = [{ id, name, img }];
  const res = await getGoodsInfo(id, name, img);
  // console.log(res);
  localStorage.setItem("shopFoodsList", JSON.stringify(res.data));
  store.$patch({
    goodsinfo: res.data,
    shophead: shophead,
  });
  localStorage.setItem("shophead", JSON.stringify(shophead));
  router.push("/goodsinfo");
};
</script>

<style lang="less" scoped>
.box-card {
  width: 1200px;
  margin: 20px auto;
  background-color: #eef1f8;
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px dashed #999;
    .date {
      width: 230px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #666;
      font-size: 12px;
      margin-left: 5px;
      :deep(.el-date-editor) {
        width: 150px;
      }
      .el-input {
        width: 150px;
        height: 30px;
        margin-left: 5px;
      }
    }
    .btn {
      width: 92px;
      height: 30px;
      color: #fff;
    }
  }
  .sendStatic {
    font-size: 12px;
    color: #666;
    margin-top: 5px;
    button {
      margin-left: 10px;
      width: 50px;
      height: 20px;
      background-color: #8ea6d4;
      border: none;
      outline: none;
      color: #fff;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
.none {
  width: 1200px;
  height: 200px;
  margin: 0 auto;
  text-align: center;
  p {
    color: #999;
    font-size: 14px;
  }
}

.shoplist {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1200px;
  margin: 20px auto;
  cursor: pointer;
  .shopinfo:hover {
    border: 1px solid #478dcd;
  }
  .shopinfo {
    width: 384px;
    height: 150px;
    padding: 0;
    .info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100px;
      background-color: #e6e6e6;
      img {
        width: 80px;
        height: 80px;
      }
      .info-right {
        margin-left: -10px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .shopname {
          font-weight: bold;
          font-size: 14px;
        }
        .price {
          color: #666;
          font-size: 12px;
        }
      }
    }
    .shopbottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 28px;
      color: #999;
      font-size: 12px;
    }
  }
}
</style>