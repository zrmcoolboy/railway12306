<template>
  <div class="section">
    <div class="section-head">
      <span class="section-title">铁路旅游</span>
      <span class="more">更多></span>
    </div>
    <div class="traval-train">
      <div
        @click="goDetail(item.id)"
        class="traval-train-list"
        v-for="item in travelList"
        :key="item.id"
      >
        <div class="pic">
          <img :src="item.images" />
        </div>
        <p class="traval-name">{{ item.name }}</p>
        <div class="txt-price">
          <i class="rmb">￥</i>
          {{ item.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getTravel, detailInfo } from "@/api/request.js";
import { onMounted, ref } from "vue";
import { useMainStore } from "@/store";
import router from "@/router";
const store = useMainStore();
let travelList = ref([]);
onMounted(() => {
  getList();
});
const getList = async () => {
  const res = await getTravel();
  // console.log(res);
  if (res.status === 200) {
    travelList.value = res.data;
  }
};
const goDetail = async (id) => {
  const res = await detailInfo(id);
  // console.log(res.data);
  store.$patch({
    travelList: res.data,
  });
  // console.log(store.travelList);
  // localStorage.setItem("travel", JSON.stringify(travelList));
  router.push({
    path: "/traveldetail",
    query: { id: id },
  });
};
</script>

<style scoped lang="less">
.section {
  width: 1210px;
  margin: 0 auto;
  .section-head {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    .section-title {
      display: block;
      margin-bottom: 5px;
      font-size: 16px;
      color: #3b99fc;
    }
    .more {
      display: block;
      font-size: 14px;
      color: #ccc;
    }
  }
  .traval-train {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 15px;
    .traval-train-list {
      width: 290px;
      height: 244px;
      border: 1px solid #ccc;
      margin-top: 5px;
      box-sizing: border-box;
      cursor: pointer;
      img {
        width: 288px;
        height: 160px;
      }
      .traval-name {
        color: #666;
        font-size: 14px;
      }
      .txt-price {
        color: #ff8201;
        font-size: 18px;
        margin-top: 5px;
        .rmb {
          font-size: 14px;
        }
      }
    }
  }
}
</style>