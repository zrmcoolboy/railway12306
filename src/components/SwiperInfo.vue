<template>
  <div class="search">
    <div class="search-left">
      <ul>
        <li @click="changeState" :class="state ? 'active' : ''">
          <a href="javascript:;"
            ><i class="iconfont icon-huochepiao"></i>车票</a
          >
        </li>
        <li @click="changeState2" :class="state2 ? 'active' : ''">
          <a href="javascript:;"
            ><i class="iconfont icon-chaxun"></i>常用查询</a
          >
        </li>
        <li :class="state3 ? 'active' : ''" @click="changeState3">
          <a href="javascript:;"><i class="iconfont icon-dingcan"></i>订餐</a>
        </li>
      </ul>
    </div>
    <div class="search-center">
      <div class="search-center-body" v-show="state">
        <div class="search-center-top">
          <ul>
            <li>
              <a href="#">
                <el-icon><Right /></el-icon>
                <span>单程</span>
              </a>
            </li>
            <li>
              <a href="#">
                <el-icon><Switch /></el-icon>
                <span>往返</span>
              </a>
            </li>
            <li>
              <a href="#">
                <el-icon><Refresh /></el-icon>
                <span>中程转换</span>
              </a>
            </li>
            <li>
              <a href="#">
                <el-icon><Money /></el-icon>
                <span>退票</span>
              </a>
            </li>
          </ul>
        </div>
        <hr class="line" />
        <div class="search-center-bottom">
          <div class="label" @click="getCity">
            <label>出发地：</label>
            <input
              v-model="info.incar"
              type="text"
              class="city-go"
              placeholder="简拼/全拼/汉字"
            />
            <el-icon><LocationFilled /></el-icon>
          </div>
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
            v-show="startCar"
          >
            <el-tab-pane label="热门" name="hot">
              <div class="hotcity">
                <ul>
                  <li
                    v-for="(item, index) in hotcity"
                    :key="item.id"
                    @click="getCityName(item.name)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="ABCDE" name="first">
              <div class="hotcity">
                <ul>
                  <li
                    v-for="item in firstCity"
                    :key="item.id"
                    @click="getCityName(item.name)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="FGHIJ" name="second">
              <div class="hotcity">
                <ul>
                  <li
                    v-for="item in secondCity"
                    :key="item.id"
                    @click="getCityName(item.name)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="KLMNO" name="third">
              <div class="hotcity">
                <ul>
                  <li
                    v-for="item in secondCity"
                    :key="item.id"
                    @click="getCityName(item.name)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="PQRST" name="fourth">
              <div class="hotcity">
                <ul>
                  <li
                    v-for="item in secondCity"
                    :key="item.id"
                    @click="getCityName(item.name)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="UVWXYJK" name="fifth">
              <div class="hotcity">
                <ul>
                  <li v-for="item in secondCity" :key="item.id">
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="label" @click="getCity2">
            <label>到达地：</label>
            <input
              v-model="info.getcar"
              type="text"
              class="city-go"
              placeholder="简拼/全拼/汉字"
            />
            <el-icon><LocationFilled /></el-icon>
          </div>
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
            v-show="endCar"
          >
            <el-tab-pane label="热门" name="hot">
              <div class="hotcity">
                <ul>
                  <li
                    v-for="(item, index) in hotcity"
                    :key="item.id"
                    @click="getCityName2(item.name)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="ABCDE" name="first">
              <div class="hotcity">
                <ul>
                  <li
                    v-for="item in firstCity"
                    :key="item.id"
                    @click="getCityName2(item.name)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="FGHIJ" name="second">
              <div class="hotcity">
                <ul>
                  <li
                    v-for="item in secondCity"
                    :key="item.id"
                    @click="getCityName2(item.name)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="KLMNO" name="third">
              <div class="hotcity">
                <ul>
                  <li
                    v-for="item in secondCity"
                    :key="item.id"
                    @click="getCityName2(item.name)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="PQRST" name="fourth">
              <div class="hotcity">
                <ul>
                  <li
                    v-for="item in secondCity"
                    :key="item.id"
                    @click="getCityName2(item.name)"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="UVWXYJK" name="fifth">
              <div class="hotcity">
                <ul>
                  <li v-for="item in secondCity" :key="item.id">
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="label-final">
            <div class="block">
              <span class="demonstration">出发日期：</span>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="2022-10-03"
              />
            </div>
          </div>
          <div class="option">
            <div class="option-next">
              <ul>
                <li>
                  <label for="stu">学生</label>
                  <input type="checkbox" id="stu" />
                </li>
                <li>
                  <label for="train">高铁/动车</label>
                  <input type="checkbox" id="train" />
                </li>
              </ul>
            </div>
            <div class="finder">
              <span @click="findTicket">查询</span>
            </div>
          </div>
        </div>
      </div>
      <div class="search-center-body" v-show="state2">
        <div class="search-center-top">
          <ul>
            <li>
              <a href="#">
                <el-icon><Timer /></el-icon>
                <span>正晚点</span>
              </a>
            </li>
            <li>
              <a href="#">
                <el-icon><FullScreen /></el-icon>
                <span>检票口</span>
              </a>
            </li>
            <li>
              <a href="#">
                <el-icon><AlarmClock /></el-icon>
                <span>起售时间</span>
              </a>
            </li>
            <li>
              <a href="#">
                <el-icon><Sunrise /></el-icon>
                <span>天气查询</span>
              </a>
            </li>
          </ul>
        </div>
        <hr class="line" />
        <div class="search-center-bottom">
          <div class="label">
            <label class="car">车站:</label>
            <input type="text" class="city-go" placeholder="简拼/全拼/汉字" />
            <el-icon><LocationFilled /></el-icon>
          </div>
          <div class="label">
            <label class="car">车次:</label>
            <input type="text" class="city-go" placeholder="请输入车次" />
            <el-icon><LocationFilled /></el-icon>
          </div>
          <div class="option">
            <div class="option-next">
              <ul>
                <li>
                  <label for="end">到达站</label>
                  <input type="checkbox" id="end" @blur="endnone" />
                </li>
                <li>
                  <label for="start">出发站</label>
                  <input type="checkbox" id="start" @blur="startnone" />
                </li>
              </ul>
            </div>
            <div class="finder">
              <a href="#">查询</a>
            </div>
          </div>
        </div>
      </div>
      <div class="search-center-body" v-show="state3">
        <div class="search-center-top">
          <ul>
            <li>
              <a href="#">
                <el-icon><Clock /></el-icon>
                <span>预定</span>
              </a>
            </li>
            <li>
              <a href="#">
                <el-icon><Dish /></el-icon>
                <span>餐饮订单</span>
              </a>
            </li>
          </ul>
        </div>
        <hr class="line" />
        <div class="search-center-bottom">
          <div class="label" style="margin-left: 42px">
            <label>出发车次：</label>
            <input
              type="text"
              class="city-go"
              placeholder="仅支持G,D字母开头的动车组列车"
            />
            <el-icon><LocationFilled /></el-icon>
          </div>
          <div class="label-final">
            <div class="block">
              <span class="demonstration">出发日期：</span>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="2022-10-03"
              />
            </div>
          </div>
          <div class="option">
            <div class="finder">
              <a href="#">查询</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  getShopList,
  likeSeach,
  getHotCity,
  getWordCity,
  getKetCity,
} from "@/api/request.js";
import { storeToRefs } from "pinia";

//
import { reactive, ref } from "vue";
import { useMainStore } from "@/store";

import router from "@/router";
import { ElMessage } from "element-plus";
const value1 = ref("");
// 轮播图内部
const state = ref(true);
const state2 = ref(false);
const state3 = ref(false);
const changeState = () => {
  state2.value = false;
  state3.value = false;
  state.value = true;
};
const changeState2 = () => {
  state.value = false;
  state3.value = false;
  state2.value = true;
};
const changeState3 = () => {
  state2.value = false;
  state.value = false;
  state3.value = true;
};

// 搜索信息
const info = reactive({
  value: "",
  car: "",
  incar: "",
  getcar: "",
});
const store = useMainStore();
const findTicket = () => {
  if (!info.incar || !info.getcar) {
    ElMessage({
      message: "请输入地点",
      type: "error",
    });
  } else {
    store.$patch({
      start: info.incar,
      end: info.getcar,
    });
    router.push("/single");
  }
};

// 车站选择点
const activeName = ref("hot");
// 热门城市
const hotcity = ref([]);
// abcde城市
const firstCity = ref([]);
// fghij城市
const secondCity = ref([]);
// 控制显示搜索内容框
let showSearch = ref(false);
// 出发点地点显示状态控制
let startCar = ref(false);
let endCar = ref(false);
// 模糊查询结果
let likeList = ref([]);
// li的状态类
const showbgc = ref("");
// 搜索框内容变化
const getResult = async (e) => {
  if (e.currentTarget.value) {
    const res = await likeSeach(e.currentTarget.value);
    likeList.value = res.data;
    showSearch.value = true;
  } else {
    showSearch.value = false;
  }
};
// 搜索框的每一项
const checkitem = (car) => {
  // 点击那一个输入框内容为哪一个
  info.car = car;
  showSearch.value = false;
};
// 鼠标经过每一个li显示背景颜色
const changebgc = (index) => {
  showbgc.value = index;
};
// 失去焦点后
const endnone = () => {
  // endCar.value = false;
};
const startnone = () => {
  // startCar.value = false;
};
// 车站输入框部分---出发站
const getCity = () => {
  const res = getHotCity().then((res) => {
    hotcity.value = res.data;
    startCar.value = true;
  });
};
const getCity2 = () => {
  const res = getHotCity().then((res) => {
    hotcity.value = res.data;
    endCar.value = true;
  });
};
// 点击tab栏每一项,展示每一项的数组
const handleClick = (tab, e) => {
  if (tab.props.name === "hot") {
    const res = getHotCity().then((res) => {
      hotcity.value = res.data;
    });
  } else if (tab.props.name === "first") {
    const res = getWordCity(1).then((res) => {
      firstCity.value = res.data;
    });
  } else if (tab.props.name === "second") {
    const res = getWordCity(2).then((res) => {
      secondCity.value = res.data;
    });
  }
};
// 获得城市名字
const getCityName = (name) => {
  // console.log(name);
  info.incar = name;
  startCar.value = false;
};
const getCityName2 = (name) => {
  info.getcar = name;
  endCar.value = false;
  // console.log(name);
};
</script>

<style scpoed lang="less">
.search {
  width: 510px;
  height: 350px;
  margin-left: 100px;
  position: absolute;
  top: 140px;
  display: flex;
  .search-left {
    .active {
      color: #3b99fc;
      background-color: #fff;
      border-left: 3px solid #3b99fc;
    }
    li {
      width: 100px;
      height: 116px;
      background-color: #3b99fc;
      border-bottom: 1px solid #86bffb;
      line-height: 117px;
      text-align: center;
      display: block;
      cursor: pointer;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .search-center {
    width: 410px;
    height: 350px;
    background-color: #ffffff;
    position: absolute;
    left: 100px;
    top: 0px;
    .search-center-body {
      width: 360px;
      height: 257px;
      background-color: #ffffff;
      position: absolute;
      top: 40px;
      // overflow: hidden;
      .search-center-top {
        width: 360px;
        height: 34px;
        background-color: #ffffff;
        margin-left: 30px;
        font-size: 14px;
        li:nth-child(2n) {
          width: 70px;
        }
        li:nth-child(1) {
          width: 70px;
        }
        li {
          float: left;
          display: block;
          width: 90px;
          height: 32px;
          text-align: center;
          margin-left: 10px;
          a {
            display: flex;
            align-items: center;
            color: #666;
          }
          a:hover {
            color: #3b99fc;
          }
        }
      }
      .search-center-bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 360px;
        height: 223px;
        margin-top: 10px;
        margin-left: 15px;
        .label {
          width: 360px;
          height: 30px;
          text-align: center;
          margin-top: 18px;
          margin-left: 70px;
          display: flex;
          align-items: center;
          .car {
            margin-right: 10px;
          }
          .city-go {
            border: 1px solid #ccc;
            height: 30px;
            width: 215px;
            margin-right: 5px;
            border-radius: 5px;
          }
        }
        .label-final {
          width: 360px;
          height: 30px;
          margin-top: 15px;
          margin-left: 41px;
        }
        .option {
          width: 360px;
          height: 40px;
          margin-top: 15px;
          .option-next {
            width: 260px;
            height: 40px;
            margin: 0 auto;
            li {
              float: left;
              width: 96px;
              height: 40px;
              line-height: 40px;
              padding-left: 25px;
            }
          }
          .finder {
            width: 360px;
            height: 30px;
            border: 1px solid #ff8201;
            text-align: center;
            line-height: 30px;
            border-radius: 5px;
            background-color: #ff8201;
            cursor: pointer;
            span {
              color: #ffffff;
            }
          }
        }
      }
    }
  }
  .line {
    margin-left: 25px;
    margin-top: 0px;
  }
}
.demo-tabs {
  position: absolute;
  top: 97px;
  left: 110px;
  width: 480px;
  background-color: #fff;
  z-index: 66;
  .hotcity {
    ul {
      display: flex;
      // justify-content: space-around;
      flex-wrap: wrap;
      align-items: center;
      li {
        font-size: 12px;
        width: 80px;
        text-align: center;
        margin-bottom: 10px;
        cursor: pointer;
      }
      li:hover {
        color: skyblue;
      }
    }
  }
}
</style>