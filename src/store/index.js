import { defineStore } from "pinia";
// 创建并导出
export const useMainStore = defineStore("main", {
  // 相当于data
  state: () => {
    return {
      // 车票数据
      ticketData: [],
      start: "",
      end: "",
      // 乘车站和到达站和车次
      startCar: "",
      endCar: "",
      car: "",
      goDate: "",
      //旅游信息
      travelList: [],
      // 商铺
      shopinfo: [],
      // 商品头信息
      shophead: [{ id: "", name: "", img: "" }],
      // 店铺商品
      goodsinfo: [],
      // 定义收集购物车数据的变量
      cartGoodsList: [],
      // 个人信息
      personInfo: [],
      // 自己及关联人的信息
      AllPersonInfo: [],
      //乘客信息
      passengerinfo: {},
    };
  },
  //  相当于计算属性，有缓存
  getters: {
    // 接受一个state参数，也就是state
  },
  //  相当于methods
  actions: {},
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        // 自定义key
        key: "travel",
        // 自定义存储方式，默认sessionStorage
        storage: localStorage,
        // 指定要持久化的数据，默认所有 state 都会进行缓存，可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
        paths: [
          "travelList",
          "shopinfo",
          "goodsinfo",
          "cartGoodsList",
          "shophead",
          "personInfo",
          "AllPersonInfo",
        ],
      },
    ],
  },
});
