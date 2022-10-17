<template>
  <Header />
  <div class="cartContainer">
    <el-card>
      <div class="foodinfo" v-for="item in cartGoodsList" :key="item.goodsid">
        <input
          type="checkbox"
          :id="item.id"
          class="check"
          @change="changeState($event, item)"
          :checked="item.checkedstate"
        />
        <label :for="item.id">
          <img :src="item.goodimg" alt="" />
        </label>
        <div class="Pname">
          <span class="foodName">{{ item.goodsname }}</span>
          <p class="price">
            <span class="icon">￥</span>{{ item.goodsprice.toFixed(2) }}
          </p>
        </div>
        <div class="count">
          <p class="left">×{{ item.count }}</p>
          <div class="right">
            <button class="btnCount" @click="add(item)">+</button>
            <div class="num">{{ item.count }}</div>
            <button class="btnCount" @click="sub(item)">-</button>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="left">
          <input
            type="checkbox"
            id="all"
            :checked="allChecked"
            @change="getAllChecked"
          />
          <label for="all">全选</label>
        </div>
        <div class="right">
          <p class="totalCount">总计:</p>
          <p class="allPrice"><span>￥</span>{{ allTotalPrice.toFixed(2) }}</p>
        </div>
      </div>
      <div class="btn">
        <button class="buybtn" @click="xiadan">去下单</button>
      </div>
    </el-card>
  </div>
  <Footer />
</template>

<script setup>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import router from "@/router";
import { paysend } from "@/api/request";
import { ElMessage } from "element-plus";
// 使用store
// 订单号
let data = ref(153151664284);
const store = useMainStore();
const { cartGoodsList } = storeToRefs(store);
// 数量加减
const add = (item) => {
  item.count++;
};

const sub = (item) => {
  if (item.count === 1) {
    return;
  } else {
    item.count--;
  }
};
//单选
const changeState = (e, item) => {
  item.checkedstate = e.target.checked;
  console.log(item.checkedstate);
};
// 判断是否勾选全选
const allChecked = computed(() => {
  return cartGoodsList.value.every((item) => {
    // console.log(item);
    return item.checkedstate;
  });
});
// 底部全选
const getAllChecked = (e) => {
  cartGoodsList.value.forEach((item) => {
    item.checkedstate = e.target.checked;
  });
};

// 总价
const allTotalPrice = computed(() => {
  return cartGoodsList.value
    .filter((item) => item.checkedstate)
    .reduce((total, item) => {
      return (total += item.goodsprice * item.count);
    }, 0);
});
// console.log(allTotalPrice.value);
// 生成10位数的订单号
const OrderNum = () => {
  let numArr = [];
  // console.log(orderNum);
  for (let i = 0; i < 10; i++) {
    let orderNum = Math.floor(Math.random() * 10);
    numArr.push(orderNum);
  }
  localStorage.setItem("OrderNum", JSON.stringify(numArr));
};
// 跳转
const xiadan = async () => {
  if (!allTotalPrice.value) {
    ElMessage({
      type: "error",
      message: "请选择要订购的食物",
    });
  } else {
    // console.log(cartGoodsList.value);
    const orderFoods = cartGoodsList.value.filter((item) => item.checkedstate);
    // console.log(JSON.stringify(orderFoods));
    localStorage.setItem("orderFoods", JSON.stringify(orderFoods));
    localStorage.setItem("orderPrice", allTotalPrice.value);
    OrderNum();
    router.push("/order");
  }

  // console.log(data.value);
  // let res = await paysend(data.value);
  // console.log(res);
  // window.location.href = res.result;
};
</script>

<style lang='less' scoped>
.cartContainer {
  width: 800px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 20px;
  // border: 1px solid red;
  .foodinfo {
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    margin-top: 10px;
    border-bottom: 1px solid #ccc;
    .check {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }
    img {
      width: 100px;
      height: 100px;
    }
    .Pname {
      width: 510px;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      margin-left: 50px;
      margin-top: -50px;
      .foodName {
        margin-left: -35px;
      }
      .price {
        color: red;
        font-size: 16px;
        .icon {
          display: inline-block;
          font-size: 22px;
        }
      }
    }
    .count {
      display: flex;
      position: absolute;
      justify-content: space-between;
      align-items: center;
      bottom: 10px;
      right: 25px;
      width: 510px;
      .left {
        margin-left: -65px;
      }
      .right {
        display: flex;
        .btnCount {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          font-size: 18px;
          border: 1px solid #ccc;
          background-color: #fff;
          cursor: pointer;
        }
        .num {
          width: 30px;
          height: 30px;
          padding: 0 10px;
          text-align: center;
          line-height: 30px;
        }
      }
    }
  }
  .footer {
    position: relative;
    display: flex;
    width: 100%;
    height: 50px;
    // justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      input {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
    .right {
      display: flex;
      position: absolute;
      right: 30px;
      height: 50px;
      line-height: 50px;
      .totalCount {
        font-size: 18px;
      }
      .allPrice {
        font-size: 16px;
        color: red;
        margin-left: 10px;
        span {
          font-size: 22px;
        }
      }
    }
  }
  .btn {
    margin-left: 630px;
    .buybtn {
      width: 100px;
      height: 35px;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid #ccc;
      background-color: #fff;
    }
    .buybtn:hover {
      background-color: skyblue;
    }
  }
}
</style>