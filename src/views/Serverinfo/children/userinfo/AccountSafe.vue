<template>
  <div class="account-safe-container">
    <div class="container">
      <div class="left">
        <el-icon size="25px" color="#3B99FC"><Lock /></el-icon>
        <p>登录密码</p>
      </div>
      <div class="center">建议您定期更改密码以保护账户安全</div>
      <el-button @click="editPwd">修改</el-button>
    </div>
    <div class="container">
      <div class="left">
        <el-icon size="25px" color="#3B99FC"><Iphone /></el-icon>
        <p>手机核验</p>
      </div>
      <div class="center">使用手机接收铁路客户服务信息</div>
      <el-button>修改</el-button>
    </div>
    <div class="container">
      <div class="left">
        <el-icon size="25px" color="#3B99FC"><Message /></el-icon>
        <p>安全邮箱</p>
      </div>
      <div class="center">使用邮箱接收铁路客户服务信息</div>
      <el-button>修改</el-button>
    </div>
    <div class="container">
      <div class="left">
        <el-icon size="25px" color="#3B99FC"><Bell /></el-icon>
        <p>通知设置</p>
      </div>
      <div class="center">设置通知方式</div>
      <el-button>修改</el-button>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
const editPwd = () => {
  router.push("/serverinfo/editpwd");
};
</script>

<style lang="less" scoped>
.account-safe-container {
  width: 1030px;
  position: absolute;
  top: 70px;
  left: 357px;
  border: 1px solid #ccc;
  padding: 20px 20px;
  box-shadow: 0 0 5px #e5e5e5;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 97px;
    border-bottom: 1px solid #ccc;
    .left {
      display: flex;
      align-items: center;
      font-size: 15px;
      .el-icon {
        margin-right: 15px;
      }
    }
    .center {
      color: #666;
      font-size: 14px;
    }
    .el-button {
      width: 100px;
    }
  }
}
</style>