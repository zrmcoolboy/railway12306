<template>
  <div class="userinfo-container">
    <div class="baseinfo">
      <div class="top">
        <p class="title">基本信息</p>
      </div>
      <div class="info">用户名:<span>MD15169341071</span></div>
      <div class="info">
        姓名: <span>{{ info[0].username }}</span>
      </div>
      <div class="info">国家/地区:<span>中国China</span></div>
      <div class="info">
        证件类型:<span>{{ info[0].idcard }}</span>
      </div>
      <div class="info">
        证件号码:<span>{{ info[0].idcardnum }}</span>
      </div>
      <div class="info">校验状态:<span class="pass">已通过</span></div>
    </div>
    <div class="baseinfo" v-show="isEdit">
      <div class="top">
        <p class="title">联系方式</p>
        <div>
          <el-button @click="doSave" v-show="isEdit">编辑</el-button>
        </div>
      </div>
      <div class="info">
        手机号:<span>{{ info[0].tel }}</span
        ><span class="pass">已通过校验</span>
      </div>
      <div class="info">固定电话: <span></span></div>
      <div class="info">
        邮箱:<span>{{ info[0].email }}</span>
      </div>
      <div class="info">地址:<span></span></div>
      <div class="info">邮编:<span></span></div>
    </div>
    <div class="baseinfo" v-show="!isEdit">
      <div class="top">
        <p class="title">联系方式</p>
        <el-button @click="doEdit" v-show="!isEdit">保存</el-button>
      </div>
      <div class="info">
        手机号:<span>{{ info[0].tel }}</span
        ><span class="pass">已通过校验</span>
      </div>
      <div class="info">固定电话: <el-input v-model="phone" /></div>
      <div class="info">
        邮箱:<span>{{ info[0].email }}</span>
      </div>
      <div class="info">地址:<el-input v-model="address" /></div>
      <div class="info">邮编:<el-input v-model="mailnum" /></div>
    </div>
    <div class="baseinfo" v-show="isType">
      <div class="top">
        <p class="title">附加信息</p>
        <el-button @click="options">编辑</el-button>
      </div>
      <div class="info">
        旅客类型:<span>{{ info[0].travel }}</span>
      </div>
    </div>
    <div class="baseinfo" v-show="!isType">
      <div class="top">
        <p class="title">附加信息</p>
        <el-button @click="optionsSave">保存</el-button>
      </div>
      <div class="info">
        旅客类型:
        <el-select v-model="TravelType">
          <el-option label="学生" value="学生" />
          <el-option label="成人" value="成人" />
          <el-option label="儿童" value="儿童" />
          <el-option
            label="残疾军人、伤残人民警察"
            value="残疾军人、伤残人民警察"
          />
        </el-select>
      </div>
    </div>
    <div class="baseinfo last">
      <div class="top">
        <p class="title">学生资质查询</p>
        <div>
          <el-button @click="reflash">刷新</el-button>
          <el-button @click="findPower">查询</el-button>
        </div>
      </div>
      <p class="words">
        学生资质查询服务，提供查询本人的学生购票资质、购票优惠区间及年度剩余优惠票购票次数。
      </p>
      <div class="power" v-show="isPower">
        <div class="icon">
          <el-icon size="50px" color="#ff8000"><Postcard /></el-icon>
        </div>
        <div class="lastword">
          <p class="lastword-top" v-show="info[0].travel == '成人'">无资质</p>
          <p class="lastword-top" v-show="info[0].travel == '学生'">您有资质</p>
          <p class="lastword-bottom" v-show="info[0].travel == '成人'">
            当前账号无学生购票资质
          </p>
          <p class="lastword-bottom" v-show="info[0].travel == '学生'">
            当前账号有学生购票资质
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "element-plus/theme-chalk/el-loading.css";
import { editPersonInfo, getPersonInfo } from "@/api/request";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";
import { reactive, ref } from "vue";
const store = useMainStore();
const { personInfo } = storeToRefs(store);
let info = ref([]);
info.value = personInfo.value;
console.log(info);
const userid = localStorage.getItem("userid");
//联系方式变量
const isEdit = ref(true);
const phone = ref("");
const address = ref("");
const mailnum = ref("");
// 附加信息变量
const isType = ref(true);
const TravelType = ref("");
// 学生资质的刷新
const isPower = ref(false);
// 联系方式编辑按钮
const doSave = () => {
  isEdit.value = false;
};
// 联系方式保存按钮
const doEdit = () => {
  isEdit.value = true;
};
//附加信息编辑按钮
const options = () => {
  isType.value = false;
};
//保存按钮
const optionsSave = async () => {
  let res = await editPersonInfo({ travel: TravelType.value, id: userid });
  // console.log(res);
  if (res.status === 200) {
    let res = await getPersonInfo(userid);
    if (res.status === 200) {
      console.log(res);
      info.value = res.data;
      console.log(info.value);
    }
  }
  const loading = ElLoading.service({
    lock: true,
    text: "保存中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
    isType.value = true;
  }, 2000);
};
// 刷新和查找
const findPower = () => {
  const loading = ElLoading.service({
    lock: true,
    text: "查寻中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
    isPower.value = true;
  }, 2000);
};
// 刷新
const reflash = () => {
  const loading = ElLoading.service({
    lock: true,
    text: "查寻中...",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
  }, 1000);
};
</script>

<style lang="less" scoped>
.userinfo-container {
  width: 1030px;
  position: absolute;
  top: 20px;
  left: 357px;
  border: 1px solid #ccc;
  padding: 20px 10px;
  box-shadow: 0 0 5px #e5e5e5;
  .baseinfo {
    width: 1030px;
    border-bottom: 1px dashed #ccc;
    .top {
      width: 100%;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .title {
        margin-bottom: 10px;
        font-weight: bold;
        line-height: 30px;
      }
    }
    .words {
      font-size: 14px;
    }

    .info {
      width: 300px;
      height: 30px;
      margin: 10px auto;
      color: #666;
      font-size: 14px;
      .el-input {
        width: 60%;
        margin-left: 10px;
      }
      span {
        color: #333;
        margin-left: 15px;
      }
      .pass {
        color: #ff8000;
      }
    }
    .power {
      display: flex;
      align-items: center;
      height: 80px;
      border: 2px solid #ffddba;
      background: #fffbf8;
      margin-top: 15px;
      border-radius: 5px;
      .icon {
        margin-left: 15px;
      }
      .lastword {
        margin-left: 20px;
        .lastword-top {
          margin-bottom: 15px;
          font-size: 14px;
          font-weight: bold;
        }
        .lastword-bottom {
          margin-top: 10px;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
  .last {
    border: none;
  }
}
</style>