<template>
  <!-- <h1>登录组件</h1> -->
  <div class="header">
    <div class="header-con">
      <router-link to="/home"><img src="@/assets/img/logo.jpg" /></router-link>
      <div class="header-welcome">欢迎登陆12306</div>
    </div>
  </div>
  <el-carousel
    :interval="3000"
    arrow="never"
    height="600px"
    indicator-position="none"
  >
    <el-carousel-item>
      <img src="@/assets/img/banner-login-20200629.jpg" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/img/banner-login-20200924.jpg" />
    </el-carousel-item>
  </el-carousel>
  <div class="login-box">
    <ul class="login-hd">
      <li class="active">
        <a href="#" class="zhdl">账号登陆</a>
      </li>
      <li class="account">
        <a href="#" class="smdl">扫码登录</a>
        <div class="login-code">
          <div class="con">
            <a href="#" aria-label="使用12306APP扫描下方二维码进行登录"></a>
            <div class="main">
              <div class="pic">
                <img src="@/assets/img/public.png" />
              </div>
              <div class="tips">
                <img src="@/assets/img/code-tips.png" />
              </div>
            </div>
            <div class="code-txt">
              " 打开 "
              <span class="txt-primary">12306手机APP</span>
              "扫描二维码"
            </div>
            <div class="code-txt">
              <a href="#" class="txt-primary">注册12306账号</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="login-bd">
      <div class="login-account">
        <div class="item">
          <div class="item-login">
            <el-icon :size="22" color="#dedede"><User /></el-icon>
            <input
              type="text"
              class="input"
              id="name"
              placeholder="用户名/邮箱/手机"
              v-model="info.username"
            />
          </div>
          <div class="item-login">
            <el-icon :size="22" color="#dedede"><Lock /></el-icon>
            <input
              type="password"
              class="input"
              id="password"
              placeholder="密码 "
              v-model="info.password"
            />
          </div>
        </div>
        <button class="btn" @click="onLogin">立即登录</button>
        <div class="txt">
          <router-link to="/regist" class="regist">注册12306账号</router-link>
          <router-link to="/changepwd" class="none">忘记密码？</router-link>
        </div>
      </div>
    </div>
    <div class="login-ft">
      <p>
        铁路12306每日服务时间详见<span class="youknow"
          >《铁路互联网购票须知》</span
        >
      </p>
    </div>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title="手机验证"
    width="30%"
    :show-close="false"
  >
    <div class="validPhone">
      <el-input v-model="valid.tel" placeholder="请输入手机号"></el-input>
      <el-input
        v-model="valid.code"
        placeholder="输入验证码"
        style="width: 95px"
      ></el-input>
    </div>
    <el-button
      :disabled="btnState"
      @click="getCode"
      style="margin-left: 210px; margin-top: -88px"
      >{{ btnText }}</el-button
    >
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="goLogin"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
  <Footer />
</template>

<script setup>
import Footer from "@/components/FooterView.vue";
import router from "@/router/index";
import { useMainStore } from "@/store/index";
import { reactive, ref, watch } from "vue";
import { intoLogin, getPhoneCode } from "@/api/request";
import { ElMessage } from "element-plus";
// 点击登陆后弹出的框
const dialogVisible = ref(false);
const valid = reactive({
  tel: "",
  code: "",
  validCode: "",
});
// 获取验证码按钮文字
const btnText = ref("获取短信验证码");
const btnState = ref(false);
// 倒计时
let codeNum = ref(61);
const info = reactive({
  username: "",
  password: "",
});
const store = useMainStore();
// 保存的个人信息
const person = reactive({
  token: "",
  userid: "",
  username: "",
  personInfo: [],
});
// 登录按钮
const onLogin = async () => {
  if (!info.username || !info.password) {
    ElNotification.error({
      message: "请输入完整信息！",
      offset: 200,
      duration: 700,
      showClose: false,
    });
  } else {
    const res = await intoLogin({
      username: info.username,
      password: info.password,
    });
    if (res.status === 200) {
      dialogVisible.value = true;
      person.token = res.token;
      person.userid = res.data[0].id;
      person.username = res.data[0].username;
      person.personInfo = res.data;
      // console.log(userid);
    } else {
      ElMessage({
        message: res.message,
        type: "error",
      });
    }
  }
};
// 点击获取验证码
const getCode = async () => {
  if (valid.tel == "") {
    ElMessage({
      message: "请输入手机号",
      type: "warning",
    });
  } else {
    // console.log(valid.tel);
    const reg = /^1[23456789]\d{9}$/;
    const state = reg.test(valid.tel);
    console.log(state);
    if (state == true) {
      let res = await getPhoneCode({ phone: valid.tel });
      console.log(res.data.data);
      valid.validCode = res.data.data;
    }
    let timer = setInterval(() => {
      codeNum.value--;
      btnText.value = `重新发送${codeNum.value}`;
      if (codeNum.value == 0) {
        console.log(codeNum.value);
        clearInterval(timer);
        codeNum.value = 61;
        btnText.value = "重新发送";
        btnState.value = false;
      }
    }, 1000);
    btnState.value = true;
  }
};
// 验证码通过
const goLogin = async () => {
  // console.log(valid.code);
  // console.log(valid.validCode);
  if (valid.code == valid.validCode) {
    localStorage.setItem("token", person.token);
    localStorage.setItem("userid", person.userid);
    localStorage.setItem("username", person.username);
    store.$patch({
      personInfo: person.personInfo,
    });
    router.push("/serverinfo");
  } else {
    ElMessage({
      message: "验证码错误",
      type: "error",
    });
  }
};
</script>

<style lang="less" scoped>
.validPhone {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  background: url(@/assets/img/girl2.png);
  background-position: -130px 0px;
  .el-input {
    margin-top: 10px;
    margin-left: 110px;
    width: 200px;
    height: 32px;
  }
}
.el-button {
  width: 100px;
}
.header {
  width: 1190px;
  margin: 20px auto;
  .header-con {
    display: flex;
    align-items: center;
    .header-welcome {
      margin-left: 35px;
      font-size: 20px;
    }
  }
}
.login-box {
  background: #fff;
  width: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: 215px;
  margin-top: -225px;
  z-index: 100;
}
.login-box .login-hd {
  height: 78px;
  line-height: 78px;
  padding: 0 50px;
}
.login-box .login-hd li {
  float: left;
  width: 130px;
  text-align: center;
  position: relative;
  display: list-item;
  text-align: -webkit-match-parent;
  .zhdl {
    color: #0077ff;
  }
}
.login-box .login-hd a {
  display: block;
  font-size: 16px;
  text-align: center;
}

/* 二维码 */
.login-box .login-hd .smdl {
  position: relative;
}
.login-box .login-hd .smdl:hover {
  color: #ff8c00;
}
.login-code {
  position: absolute;
  top: 70px;
  right: -70px;
  width: 380px;
  height: 330px;
  background-color: #ffffff;
  display: none;
  z-index: 100;
}
.login-code .con {
  height: 270px;
  padding: 0 30px;
}
.login-code .main {
  height: 200px;
  position: relative;
}
.login-code .pic {
  position: absolute;
  top: 20px;
  left: 80px;
  width: 160px;
  height: 160px;
  border: 1px solid #dedede;
}
.login-hd .account:hover .login-code {
  display: block;
}
.login-code .pic img {
  /* display: block; */
  width: 158px;
  height: 158px;
}
.login-code .tips {
  position: absolute;
  top: 8px;
  right: 0;
  width: 155px;
  height: 180px;
}
.login-code .tips img {
  /* display: block; */
  width: 155px;
  height: 180px;
}
.login-code .code-txt {
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.login-box .txt-primary {
  color: #3b99fc !important;
}
.login-account {
  padding: 0 30px 15px 30px;
  display: block;
}
.item {
  .item-login {
    display: flex;
    align-items: center;
  }
}

.login-account .item .input {
  line-height: 20px;
  border: 1px solid #dedede;
  padding: 4px 10px 4px 36px;
  background-color: #fff;
  color: #333;
  outline: none;
  font-size: 14px;
  border-radius: 0;
  // vertical-align: middle;
  height: 44px;
  line-height: 44px;
  display: block;
  width: 268px;
  padding-left: 36px;
  margin-top: 10px;
}
.login-box .btn {
  font-size: 14px;
  height: 44px;
  border-radius: 6px;
  background-color: #ff8c00;
  text-align: center;
  margin-top: 12px;
  margin-left: 20px;
  width: 300px;
  border: none;
  color: #fff;
  cursor: pointer;
}
.login-account .txt {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.txt {
  .regist {
    font-size: 12px;
    color: #0077ff;
  }
  .none {
    font-size: 12px;
    color: #ccc;
  }
  .none:hover {
    color: #0077ff;
  }
}
.login-ft {
  padding: 10px 20px 15px;
  font-size: 13px;
  color: #666;
  border-top: 1px solid #dedede;
  .youknow {
    color: #0077ff;
    cursor: pointer;
  }
}
p {
  line-height: 20px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.login-code {
  width: 380px;
  height: 330px;
}
.login-code .con {
  height: 270px;
  padding: 0 30px;
  display: block;
}
.login-code .main {
  height: 200px;
  position: relative;
}
.login-code .pic {
  position: absolute;
  top: 20px;
  left: 80px;
  width: 160px;
  height: 160px;
  border: 1px solid #dedede;
}
.login-code .pic img {
  display: block;
  width: 158px;
  height: 158px;
}
.login-code .tips {
  position: absolute;
  top: 8px;
  right: 0;
  width: 155px;
  height: 180px;
  display: none;
}
.login-code .tips img {
  display: block;
  width: 155px;
  height: 180px;
}
.login-code .code-txt {
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.login-box .txt-primary {
  color: #3b99fc !important;
}
</style>