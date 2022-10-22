<template>
  <div class="wrapper">
    <!-- 个人中心 -->
    <div class="top-container">
      <img src="@/assets/img/laba.png" alt="" />
      <p>
        {{ username }} <span>先生，{{ text }}！</span>
      </p>
    </div>
    <div class="center-container">
      <p>欢迎您登录中国铁路客户服务中心网站。</p>
      <p style="color: red">
        如果您的密码在其他网站也使用，建议您修改本网站密码。
      </p>
      <p style="color: red">
        为配合做好新冠疫情常态化防控工作，同时便于乘车人及时接收列车运行变更信息，购票时需登记每名乘车旅客中国大陆手机号码，请您提前填报并通知乘车人协助完成手机号码核验。对于未成年人、老年人等重点旅客以及无手机的旅客，可提供监护人或能及时联系的亲友手机号码。铁路部门将依法保护旅客个人信息安全。<span
          style="color: #0077ff"
          >立即填写联系方式信息</span
        >
      </p>
      <p>
        如果您需要预订车票，请您点击<span class="preTicket">车票预订</span>。
      </p>
    </div>
    <div class="tip-container">
      <h4>温馨提示：</h4>
      <p>
        1.消息通知方式进行相关调整，将通过“铁路12306”App客户端为您推送相关消息（需开启通知
        权限）。您也可以扫描关注“铁路12306”微信公众号或支付宝生活号，选择通过微信或支付宝接收。列
        车运行调整的通知仍然发送短信通知给您。
      </p>
      <p>
        2.您可通过“账号安全”中的<span>“通知设置”</span>修改您接收信息服务的方式。
      </p>
    </div>
  </div>
</template>

<script setup>
const username = localStorage.getItem("username");
import { ref } from "vue";
//时间判断
let text = ref("");
const getTimeState = () => {
  // 获取当前时间
  let timeNow = new Date();
  // 获取当前小时
  let hours = timeNow.getHours();
  // 设置默认文字

  // 判断当前时间段
  if (hours >= 0 && hours <= 10) {
    text.value = "早上好";
  } else if (hours > 10 && hours <= 14) {
    text.value = "中午好";
  } else if (hours > 14 && hours <= 18) {
    text.value = "下午好";
  } else if (hours > 18 && hours <= 24) {
    text.value = "晚上好";
  }
};
getTimeState();
</script>

<style lang="less" scoped>
.wrapper {
  box-shadow: 0 0 5px #e5e5e5;
  width: 1030px;
  border: 1px solid #ccc;
  position: absolute;
  top: 65px;
  left: 357px;
  .top-container {
    display: flex;
    align-items: center;
    margin-top: 10px;
    img {
      width: 80px;
      height: 65px;
      margin-left: 10px;
    }
    p {
      margin-left: 20px;
      font-size: 24px;
      span {
        font-size: 18px;
        margin-left: 10px;
      }
    }
  }
  .center-container {
    width: 968px;
    border: 1px dashed #9eccfe;
    margin: 20px auto;
    padding: 20px;
    line-height: 32px;
    p {
      font-size: 14px;
      color: #000;
      .preTicket {
        color: #3b99fc;
        text-decoration: underline;
      }
    }
  }
  .tip-container {
    width: 968px;
    margin: 40px auto;
    border: 2px solid #ffddba;
    padding: 10px 20px 10px 20px;
    line-height: 20px;
    h4 {
      font-weight: normal;
      font-size: 15px;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      margin-top: 5px;
      span {
        color: #0077ff;
        cursor: pointer;
      }
    }
  }
}
</style>