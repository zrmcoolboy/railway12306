<template>
  <div class="traver-serve-center">
    <div class="serve-center">
      <!-- 日期 -->
      <div class="serve-center-time">
        <div class="block">
          <el-date-picker
            v-model="info.value"
            type="date"
            placeholder="2022-10-09"
          />
        </div>
      </div>
      <!-- 车次 -->
      <div class="serve-center-num borderbgc">
        <label class="num">车次</label>
        <input
          type="text"
          class="car"
          v-model="info.car"
          placeholder="G2"
          @input="getResult($event)"
        />
        <div class="search_res" v-if="showSearch">
          <ul>
            <li
              :class="{ active: showbgc === index }"
              v-for="(item, index) in likeList"
              :key="index"
              @click="checkitem(item.carID)"
              @mouseenter="changebgc(index)"
            >
              {{ item.carID }}({{ item.start }}-{{ item.end }})
            </li>
          </ul>
        </div>
      </div>
      <!-- 乘车站 -->
      <div class="serve-center-station borderbgc" @click="getCity">
        <label class="num">乘车站</label>
        <input
          type="text"
          class="incar"
          v-model="info.incar"
          placeholder="北京"
          @blur="startnone"
        />
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
      <!-- 到达站 -->
      <div class="serve-center-station borderbgc" @click="getCity2">
        <label class="num">到达站</label>
        <input
          type="text"
          class="getcar"
          v-model="info.getcar"
          placeholder="上海"
          @blur="endnone"
        />
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
      <!-- 搜索按钮 -->
      <div class="serve-center-btn">
        <p @click="getShop">搜索</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import router from "@/router";
import {
  getShopList,
  likeSeach,
  getHotCity,
  getWordCity,
  getKetCity,
} from "@/api/request.js";
import { useMainStore } from "@/store";
import { ElMessage } from "element-plus";
import { storeToRefs } from "pinia";

// 使用store
const store = useMainStore();

// 搜索信息
const info = reactive({
  value: "",
  car: "",
  incar: "",
  getcar: "",
});

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
// 搜索按钮
const getShop = async () => {
  if (!info.value || !info.car || !info.incar || !info.getcar) {
    ElMessage({
      message: "请输入完整信息",
      type: "error",
    });
  } else {
    const res = await getShopList();
    store.$patch({
      shopinfo: res.data,
      goDate: info.value,
      startCar: info.car,
      endCar: info.getcar,
      car: info.car,
    });
    router.push("/shopdetail");
  }
};
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

<style lang="less" scoped>
input {
  border: none;
  font-size: 12px;
}
input::placeholder {
  color: #ccc;
}
.borderbgc:hover {
  border-bottom: 2px solid #ff8200;
}
.active {
  background-color: skyblue;
}
/* 中间主体 */
.traver-serve-center {
  width: 1519px;
  height: 630px;
  position: relative;
  background: url(@/assets/img/serve1.jpg) center center no-repeat;
}
.traver-serve-center .serve-center {
  width: 995px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 10px;
  position: absolute;
  top: 300px;
  left: 250px;

  .demo-tabs {
    position: absolute;
    top: 50px;
    left: 422px;
    width: 480px;
    background-color: #fff;
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
}
.serve-center-time {
  float: left;
  width: 211px;
  height: 52px;
  border-right: 1px solid #e6e6e6;
  position: relative;
  .block {
    margin-top: 10px;
    margin-left: 20px;
    :deep(.el-date-editor) {
      width: 170px;
    }
    :deep(.el-input__wrapper) {
      box-shadow: none;
      margin-left: -10px;
    }
    :deep(.el-input__prefix-inner) {
      width: 50px;
    }
  }
}
.serve-center-time .iconfont {
  position: absolute;
  top: 9px;
  left: 0px;
  font-size: 30px;
  cursor: pointer;
}
.inp {
  width: 164px;
  height: 24px;
  padding: 13px 10px 15px 36px;
  line-height: 28px;
  font-size: 16px;
  color: #666;
}
.serve-center-num {
  float: left;
  width: 210px;
  height: 52px;
  border-right: 1px solid #e6e6e6;
  position: relative;
  .search_res {
    position: absolute;
    top: 51px;
    width: 210px;
    background-color: #fff;
    ul {
      height: 150px;
      overflow: auto;
      li {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: left;
        text-indent: 2em;
        color: #666;
      }
      li:hover {
        color: #fff;
      }
    }
  }
}
.num {
  position: absolute;
  top: 13px;
  padding-left: 10px;
  font-size: 16px;
  color: #666;
}
.car {
  position: absolute;
  top: 12px;
  left: 52px;
  width: 150px;
  height: 24px;
  font-size: 16px;
  color: #666;
}
.serve-center-station {
  float: left;
  width: 216px;
  height: 52px;
  border-right: 1px solid #e6e6e6;
  line-height: 23px;
}
.incar {
  position: absolute;
  top: 12px;
  left: 485px;
  width: 150px;
  height: 24px;
  font-size: 16px;
  color: #666;
}
.getcar {
  position: absolute;
  top: 12px;
  left: 701px;
  width: 150px;
  height: 24px;
  font-size: 16px;
  color: #666;
}
.serve-center-btn {
  position: absolute;
  right: 0;
  width: 137px;
  height: 52px;
}
.serve-center-btn > p {
  display: block;
  height: 52px;
  line-height: 52px;
  background: #ff8200;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  border-right: 3px solid #ff8200;
  cursor: pointer;
}
</style>