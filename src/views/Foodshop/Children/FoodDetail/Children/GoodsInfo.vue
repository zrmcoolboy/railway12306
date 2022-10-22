<template>
  <div class="info-top">
    <el-card class="container">
      <div class="info-left">
        <img src="@/assets/img/aniya.jpg" alt="" />
        <div class="shopinfo">
          <p>{{ shophead[0].name }}</p>
          <el-rate
            v-model="value"
            disabled
            text-color="#ff9900"
            score-template="{value} points"
          />
          <div class="tel">
            <span
              ><el-icon><Phone /></el-icon>18764159361</span
            >
            <span style="margin-left = 10px"
              ><el-icon><AlarmClock /></el-icon>营业时间：10:00-20:00</span
            >
          </div>
        </div>
      </div>
      <div class="info-right">
        <div class="item">
          <p>起送费</p>
          <p>￥0</p>
        </div>
        <div class="item">
          <p>配送费</p>
          <p>￥8</p>
        </div>
        <div class="item">
          <p>下单截至10-15&nbsp&nbsp07：04</p>
          <p>退单截至10-15&nbsp&nbsp07：04</p>
        </div>
      </div>
    </el-card>
  </div>
  <div class="info-goods">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="所有商品" name="goods">
        <el-tabs
          v-model="activeName2"
          type="card"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="全部" name="all">
            <div
              class="food-detail"
              v-for="item in goodsinfo"
              :key="item.goodsid"
            >
              <div class="goods-img">
                <img :src="item.goodimg" alt="" />
                <div class="mask">
                  <div class="mask-text">
                    {{ item.goodscontent }}
                  </div>
                </div>
              </div>
              <div class="info-detail">
                <p class="goods-name">{{ item.goodsname }}</p>
                <div class="goods-price">
                  <p>￥{{ item.goodsprice.toFixed(2) }}</p>
                  <el-button @click="gotobuy(item)">下单</el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="新品" name="newgoods">
            <div
              class="food-detail"
              v-for="item in newfoods"
              :key="item.goodsid"
            >
              <div class="goods-img">
                <img :src="item.goodimg" alt="" />
                <div class="mask">
                  <div class="mask-text">
                    {{ item.goodscontent }}
                  </div>
                </div>
              </div>
              <div class="info-detail">
                <p class="goods-name">{{ item.goodsname }}</p>
                <div class="goods-price">
                  <p>￥{{ item.goodsprice.toFixed(2) }}</p>
                  <el-button>下单</el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="热销" name="hot">
            <div
              class="food-detail"
              v-for="item in hotsale"
              :key="item.goodsid"
            >
              <div class="goods-img">
                <img :src="item.goodimg" alt="" />
                <div class="mask">
                  <div class="mask-text">
                    {{ item.goodscontent }}
                  </div>
                </div>
              </div>
              <div class="info-detail">
                <p class="goods-name">{{ item.goodsname }}</p>
                <div class="goods-price">
                  <p>￥{{ item.goodsprice.toFixed(2) }}</p>
                  <el-button>下单</el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="馄饨" name="huntun">
            <div
              class="food-detail"
              v-for="item in dumpings"
              :key="item.goodsid"
            >
              <div class="goods-img">
                <img :src="item.goodimg" alt="" />
                <div class="mask">
                  <div class="mask-text">
                    {{ item.goodscontent }}
                  </div>
                </div>
              </div>
              <div class="info-detail">
                <p class="goods-name">{{ item.goodsname }}</p>
                <div class="goods-price">
                  <p>￥{{ item.goodsprice.toFixed(2) }}</p>
                  <el-button>下单</el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="酱骨头" name="gutou">
            <div class="food-detail" v-for="item in bones" :key="item.goodsid">
              <div class="goods-img">
                <img :src="item.goodimg" alt="" />
                <div class="mask">
                  <div class="mask-text">
                    {{ item.goodscontent }}
                  </div>
                </div>
              </div>
              <div class="info-detail">
                <p class="goods-name">{{ item.goodsname }}</p>
                <div class="goods-price">
                  <p>￥{{ item.goodsprice.toFixed(2) }}</p>
                  <el-button>下单</el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="米饭类" name="rice">
            <div class="food-detail" v-for="item in rice" :key="item.goodsid">
              <div class="goods-img">
                <img :src="item.goodimg" alt="" />
                <div class="mask">
                  <div class="mask-text">
                    {{ item.goodscontent }}
                  </div>
                </div>
              </div>
              <div class="info-detail">
                <p class="goods-name">{{ item.goodsname }}</p>
                <div class="goods-price">
                  <p>￥{{ item.goodsprice.toFixed(2) }}</p>
                  <el-button>下单</el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="评价" name="pingjia">
        <Comments />
      </el-tab-pane>
      <el-tab-pane label="商家" name="shop">商家</el-tab-pane>
    </el-tabs>
  </div>
  <div class="icon" @click="gotocart">
    <el-badge :value="num" class="item">
      <el-icon size="58px" color="#ff0000"><ShoppingCart /></el-icon>
    </el-badge>
    <div class="text">点我去购物车</div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMainStore } from "@/store";
import { ref } from "vue";
import { getTypeFood, addCart, getCartGoods } from "@/api/request";
import { ElMessage } from "element-plus";
import router from "@/router";
import Comments from "@/views/VipView/goodInforate.vue";
const num = ref(0);
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
const { shopinfo, shophead } = storeToRefs(store);
const goodsinfo = JSON.parse(localStorage.getItem("shopFoodsList"));
// console.log(goodsinfo);
const newfoods = ref([]);
const hotsale = ref([]);
const dumpings = ref([]);
const bones = ref([]);
const rice = ref([]);
const value = ref(5);
const activeName = ref("goods");
const activeName2 = ref("all");
const handleClick = (content) => {
  console.log(+content.index + 1);
  newfoods.value = goodsinfo.filter((item) => item.typeid === +content.index);
  hotsale.value = goodsinfo.filter((item) => item.typeid === +content.index);
  dumpings.value = goodsinfo.filter((item) => item.typeid === +content.index);
  bones.value = goodsinfo.filter((item) => item.typeid === +content.index);
  rice.value = goodsinfo.filter((item) => item.typeid === +content.index);
};
// 下单按钮
const gotobuy = async (info) => {
  const userID = localStorage.getItem("userid");
  // console.log(userID);
  let res = await addCart(info, userID);
  console.log(res);
  if (res.status === 200) {
    num.value++;
    ElMessage({
      type: "success",
      message: "加入成功！",
    });
  }
};
// 从本地存储中拿出登录的个人id
const userid = localStorage.getItem("userid");
// console.log(userid);
// 获取购物车信息
const getCarts = async () => {
  let res = await getCartGoods(userid);
  console.log(res);
  num.value = res.data.length;
  // console.log(num.value);
  if (res.status === 200) {
    store.$patch({
      cartGoodsList: res.data,
    });
  }
};
getCarts();
// 点击去购物车
const gotocart = () => {
  // 调用请求数据的方法
  // getCarts();
  router.push("/shopcart");
};
</script>

<style lang="less" scoped>
.info-top {
  width: 75rem;
  margin: 1.25rem auto;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 7rem;
    border: 1px solid #478dcd;
    :deep(.el-card__body) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .info-left {
      display: flex;
      width: 28.125rem;
      flex-direction: row;
      // justify-content: space-between;
      align-items: center;
      .shopinfo {
        margin-left: 1.25rem;
        p {
          font-weight: bold;
        }
        .tel {
          color: #999;
          font-size: 0.75rem;
          span {
            display: inline-block;
          }
        }
      }
      img {
        width: 5.625rem;
        height: 5.625rem;
      }
    }
    .info-right {
      width: 31.25rem;
      display: flex;
      margin-right: -12.5rem;
      // justify-content: space-around;
      .item {
        font-size: 0.875rem;
        width: 9.6875rem;
        height: 3rem;
        margin-right: -5rem;
        p {
          margin-top: 0.3125rem;
          color: #666;
          font-weight: bold;
        }
      }
    }
  }
}
.info-goods {
  width: 75rem;
  margin: 1.25rem auto;
  .demo-tabs {
    // font-weight: bold;
    :deep(.el-tabs) {
      width: 100%;
    }
    .el-tab-pane {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .food-detail {
      width: 17.8125rem;
      height: 17.625rem;
      overflow: hidden;
      margin-left: 15px;
      .info-detail {
        width: 100%;
        .goods-name {
          font-weight: bold;
        }
        .goods-price {
          margin-top: 0.625rem;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            color: #fb7403;
            font-size: 0.875rem;
          }
          .el-button {
            width: 5.625rem;
            height: 1.875rem;
          }
        }
      }
      .goods-img {
        position: relative;
        height: 13.125rem;
        overflow: hidden;
      }
      img {
        width: 17.6875rem;
        height: 13.125rem;
      }
      .goods-img:hover .mask {
        // transform: translateY(-300px);
        top: 0;
      }
      .mask {
        transition: all 0.5s;
        position: absolute;
        top: 13.125rem;
        width: 17.6875rem;
        height: 13.125rem;
        background-color: rgba(0, 0, 0, 0.6);
        .mask-text {
          padding: 55px 15px;
          color: #fff;
          font-size: 14px;
        }
      }
    }
  }
}
// 购物车车标
.icon {
  position: fixed;
  top: 400px;
  z-index: 999;
  right: 35px;
  cursor: pointer;
  .text {
    font-size: 14px;
    // padding-right: 5px;
  }
}
:deep(.el-badge__content.is-fixed) {
  top: 15px;
  right: 15px;
}
</style>