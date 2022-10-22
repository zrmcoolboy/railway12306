<template>
  <div class="userinfo-container">
    <div class="baseinfo">
      <div class="top">
        <p class="title">基本信息</p>
      </div>
      <div class="info">
        姓名: <span>{{ passengerinfo.username }}</span>
      </div>
      <div class="info">国家/地区:<span>中国China</span></div>
      <div class="info">
        证件类型:<span>{{ passengerinfo.idcard }}</span>
      </div>
      <div class="info">
        证件号码:<span>{{ passengerinfo.idcardnum }}</span>
      </div>
      <div class="info">校验状态:<span class="pass">已通过</span></div>
    </div>
    <div class="baseinfo">
      <div class="top">
        <p class="title">联系方式</p>
      </div>
      <div class="info">
        手机号:<span>{{ passengerinfo.tel }}</span
        ><span class="pass">已通过校验</span>
      </div>
      <div class="baseinfo">
        <div class="top">
          <p class="title">附加信息</p>
        </div>
        <div class="info">
          旅客类型:
          <el-select v-model="type">
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
    </div>
    <div class="last">
      <el-button @click="cancer">取消</el-button>
      <el-button class="save" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script setup>
import { updatePassenger } from "@/api/request";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import router from "@/router";
import { ElMessage } from "element-plus";
const store = useMainStore();
const { passengerinfo } = storeToRefs(store);
const userid = localStorage.getItem("userid");
const type = ref("成人");
// console.log(passengerinfo.value.idcardnum);
// 取消
const cancer = () => {
  router.back();
};
// 保存
const save = async () => {
  const res = await updatePassenger({
    travel: type.value,
    idcardnum: passengerinfo.value.idcardnum,
  });
  if (res.status === 200) {
    ElMessage({
      type: "success",
      message: "更新成功！",
    });
  }
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
    // border-bottom: 1px dashed #ccc;
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
    .info {
      width: 300px;
      height: 30px;
      margin: 10px auto;
      color: #666;
      font-size: 14px;
      span {
        color: #333;
        margin-left: 15px;
      }
      .pass {
        color: #ff8000;
      }
    }
  }
  .last {
    width: 200px;
    margin: 20px auto;
    .save {
      background-color: #ff8000;
      border: #ff8000;
      color: #fff;
    }
  }
}
</style>