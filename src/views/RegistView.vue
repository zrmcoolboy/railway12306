<template>
  <Header />
  <div class="formList">
    <p>账户信息</p>
    <el-form :model="form" label-width="160px" :rules="rules" ref="ref_form">
      <el-form-item label="用户名：" prop="username" required>
        <el-input
          v-model="form.username"
          placeholder="用户名设置成功后不可需改"
        />
      </el-form-item>
      <el-form-item label="登陆密码：" prop="password" required>
        <el-input
          type="password"
          v-model="form.password"
          placeholder="6-20位字母、数字或符号"
        />
      </el-form-item>
      <el-form-item label="确认密码：" prop="reqpassword" required>
        <el-input
          type="password"
          v-model="form.reqpassword"
          placeholder="再次输入您的密码"
        />
      </el-form-item>
      <el-form-item label="证件类型：" prop="idcard" required>
        <el-select v-model="form.idcard" placeholder="中国居民身份证">
          <el-option label="中国居民身份证" value="中国居民身份证" />
          <el-option label="港澳台居民居住证" value="港澳台居民居住证" />
          <el-option
            label="港澳居民来往内地通行证"
            value="港澳居民来往内地通行证"
          />
          <el-option
            label="台湾居民来往内地通行证"
            value="台湾居民来往内地通行证"
          />
          <el-option label="护照" value="护照" />
          <el-option
            label="外国人永久居留身份证"
            value="外国人永久居留身份证"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="姓名：" prop="relname" required>
        <el-input v-model="form.relname" placeholder="请输入证件上的中文姓名" />
      </el-form-item>
      <el-form-item label="证件号码：" prop="idcardnum" required>
        <el-input v-model="form.idcardnum" placeholder="请输入您的证件号码" />
      </el-form-item>
      <el-form-item label="旅客类型：" prop="travel" required>
        <el-select v-model="form.travel" placeholder="成人">
          <el-option label="成人" value="成人" />
          <el-option label="儿童" value="儿童" />
          <el-option label="学生" value="学生" />
          <el-option
            label="残疾军人、残疾人民警察"
            value="残疾军人、残疾人民警察"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="邮箱：" prop="email" required>
        <el-input v-model="form.email" placeholder="请正确填写邮箱地址" />
      </el-form-item>
      <el-form-item label="手机号码(+86)" prop="tel" required>
        <el-input v-model.number="form.tel" placeholder="请输入您的电话号码" />
      </el-form-item>
    </el-form>
    <div class="footer">
      <div class="info">
        <input type="checkbox" id="agree" @change="change" />
        <label for="agree">我已阅读并同意遵守</label>
        <a href="javascrip:;">《中国铁路客户服务中心网站服务条款》</a>
        <a href="javascrip:;">《隐私权政策》</a>
      </div>
      <button class="btn" id="btn" @click="onRegist">下一步</button>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
import { reactive, ref } from "vue";
import { intoRegist } from "@/api/request.js";
import router from "@/router/index";
import {
  CheckUsername,
  CheckPassword,
  CheckIdcard,
  CheckIdcardnum,
  Checkemail,
  Checktel,
} from "@/utils/checked.js";
const ref_form = ref(null);
const form = ref({
  username: "",
  password: "",
  reqpassword: "",
  idcard: "",
  relname: "",
  idcardnum: "",
  email: "",
  tel: "",
});
const rules = reactive({
  username: [{ validator: CheckUsername, trigger: "blur" }],
  password: [{ validator: CheckPassword, trigger: "blur" }],
  reqpassword: [{ validator: CheckPassword, trigger: "blur" }],
  relname: [{ validator: CheckIdcard, trigger: "blur" }],
  idcardnum: [{ validator: CheckIdcardnum, trigger: "blur" }],
  email: [{ validator: Checkemail, trigger: "blur" }],
  tel: [{ validator: Checktel, trigger: "blur" }],
});
// 确认协议
let changeState = ref(null);
const change = (e) => {
  console.log(e.target.checked);
  changeState.value = e.target.checked;
};
// 注册按钮
const onRegist = () => {
  if (changeState.value === true) {
    getRegist();
    // alert("chengg");
  } else {
    ElMessage({
      message: "请勾选协议！",
      type: "error",
    });
  }

  // console.log(form.value);
};
// 注册接口逻辑
const getRegist = async () => {
  const res = await intoRegist(form.value);
  console.log(res);
  // console.log(form.value);
  if (res.status === 200) {
    ElMessage({
      message: "注册成功！",
      type: "success",
    });
    router.push("/login");
  } else {
    ElMessage({
      message: "注册失败！",
      type: "error",
    });
  }
};
</script>

<style lang="less" scoped>
.formList {
  width: 980px;
  margin: 20px auto;
  // background-color: pink;
  border: 1px solid #0077ff;
  border-radius: 5px;
  p {
    height: 32px;
    background-color: #1678be;
    font-size: 13px;
    color: #fff;
    padding-left: 30px;
    line-height: 32px;
    margin-bottom: 10px;
  }
  .el-form {
    width: 500px;
    margin: 0 auto;
  }
  .footer {
    width: 500px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    margin-left: 280px;
    .info {
      a {
        color: #0077ff;
      }
    }
    .btn {
      margin-top: 10px;
      width: 120px;
      height: 30px;
      background-color: #ff8c00;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>