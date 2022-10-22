<template>
  <div class="addinfo-container">
    <!-- 基本信息 -->
    <div class="baseinfo">
      <div class="top">
        <p class="title">基本信息</p>
      </div>
    </div>
    <div class="container-body">
      <div class="idcard-type">
        <p>证件类型：</p>
        <el-select v-model="form.idcard" placeholder="中国居民身份证">
          <el-option label="中国居民身份证" value="中国居民身份证" />
          <el-option
            label="港澳居民来往内地通行证"
            value="港澳居民来往内地通行证"
          />
          <el-option
            label="台湾居民来往大陆通行证"
            value="台湾居民来往大陆通行证"
          />
          <el-option label="护照" value="护照" />
          <el-option
            label="外国人永久居留身份证"
            value="外国人永久居留身份证"
          />
          <el-option label="港澳台居民居住证" value="港澳台居民居住证" />
        </el-select>
      </div>
      <div class="name idcard-type">
        <p class="username">姓名：</p>
        <el-input v-model="form.username" />
      </div>
      <div class="idcard-type">
        <p>证件号码：</p>
        <el-input v-model="form.idcardnum" />
      </div>
    </div>
    <div class="none" v-show="form.idcard !== '中国居民身份证'">
      <div class="common">
        <p>有效期截止日期:</p>
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="选择截止日期"
        />
      </div>
      <div class="common growDate">
        <p>出生日期：</p>
        <el-date-picker
          v-model="form.growDate"
          type="date"
          placeholder="选择出生日期"
        />
      </div>
      <div class="common optionSex">
        <p>性别：</p>
        <el-radio-group v-model="form.resource">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </div>
    </div>
    <!-- 联系方式 -->
    <div class="baseinfo">
      <div class="top">
        <p class="title">联系方式</p>
      </div>
    </div>
    <div class="phone idcard-type">
      <p class="username">手机号码（+86）：</p>
      <el-input v-model="form.tel" />
    </div>
    <!-- 附加信息 -->
    <div class="baseinfo">
      <div class="top">
        <p class="title">附加信息</p>
      </div>
    </div>
    <div class="idcard-type">
      <p>证件类型：</p>
      <el-select v-model="form.travel" placeholder="成人">
        <el-option label="成人" value="成人" />
        <el-option label="学生" value="学生" />
        <el-option label="儿童" value="儿童" />
        <el-option
          label="残疾军人、伤残人民警察"
          value="残疾军人、伤残人民警察"
        />
      </el-select>
    </div>
    <div class="btns">
      <el-button @click="cancer">取消</el-button>
      <el-button class="save" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script setup>
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import { ref } from "vue";
import { SavePassenger } from "@/api/request";
import router from "@/router";
import { ElMessage } from "element-plus";
const userid = localStorage.getItem("userid");
// 信息数据
const form = ref({
  idcard: "中国居民身份证",
  username: "",
  idcardnum: "",
  travel: "成人",
  date: "2023-06-16",
  growDate: "2000-06-16",
  resource: "",
  tel: "",
  userid: userid,
});

// 取消按钮
const cancer = () => {
  router.back();
};
// 保存按钮
const save = async () => {
  const res = await SavePassenger(form.value);
  console.log(res);
  if (res.status === 200) {
    ElMessage({
      type: "success",
      message: "保存成功",
    });
    setTimeout(() => {
      router.back();
    }, 1000);
  }
};
</script>

<style lang='less' scoped>
p {
  color: #666;
  font-size: 15px;
}
.addinfo-container {
  width: 1030px;
  position: absolute;
  top: 20px;
  left: 357px;
  border: 1px solid #ccc;
  padding: 10px 15px;
  box-shadow: 0 0 5px #e5e5e5;
  .baseinfo {
    width: 1030px;
    .title {
      color: #000;
      font-weight: bold;
    }
  }
  .none {
    .common {
      width: 350px;
      margin-left: 325px;
      display: flex;
      align-items: center;
      p {
        margin-right: 10px;
      }
    }
    .growDate {
      margin-top: 20px;
      margin-left: 360px;
    }
    .optionSex {
      margin-top: 20px;
      margin-left: 400px;
    }
  }
  .container-body {
    width: 100%;
  }
  .el-input {
    width: 218px;
  }
  .name {
    padding-left: 30px;
  }
  .phone {
    padding-right: 60px;
  }
  .idcard-type {
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  }
  .btns {
    width: 150px;
    margin: 20px auto;
    .save {
      background-color: #ff6602;
      color: #fff;
      border: #ff6602;
    }
  }
}
</style>