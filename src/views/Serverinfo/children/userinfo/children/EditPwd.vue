<template>
  <div class="container">
    <div class="baseinfo">
      <div class="top">
        <p class="title">密码修改</p>
      </div>
      <div class="content">
        <el-form
          :label-position="labelPosition"
          label-width="135px"
          :model="form"
          style="max-width: 300px"
          :rules="rules"
          ref="ref_form"
        >
          <el-form-item label="原密码" prop="oldpwd" required>
            <el-input type="password" v-model="form.oldpwd" />
          </el-form-item>
          <el-form-item label="新密码" prop="newpwd" required>
            <el-input type="password" v-model="form.newpwd" />
          </el-form-item>
          <el-form-item label="确认密码" prop="requirepwd" required>
            <el-input type="password" v-model="form.requirepwd" />
          </el-form-item>
          <el-form-item label="请输入手机验证码" prop="phoneCode" required>
            <el-input v-model="form.phoneCode" />
            <el-button type="primary">获取手机验证码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="btns">
      <el-button @click="cancel">取消</el-button>
      <el-button class="submit" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script setup>
import { CheckPassword } from "@/utils/checked";
import { reactive, ref } from "vue";
import { editPassword } from "@/api/request";
import router from "@/router";
import { ElMessage } from "element-plus";
const userid = localStorage.getItem("userid");
// 表单对齐位置
const labelPosition = ref("right");
//表单数据
const form = ref({
  oldpwd: "",
  newpwd: "",
  requirepwd: "",
  phoneCode: "",
  id: userid,
});
// 校验
const rules = reactive({
  oldpwd: [{ validator: CheckPassword, trigger: "blur" }],
  newpwd: [{ validator: CheckPassword, trigger: "blur" }],
  requirepwd: [{ validator: CheckPassword, trigger: "blur" }],
});
// 取消按钮
const cancel = () => {
  router.back();
};
// 提交
const submit = async () => {
  let res = await editPassword(form.value);
  // console.log(res);
  if (res.status === 200) {
    ElMessage({
      type: "success",
      message: "修改成功！",
    });
    setTimeout(() => {
      router.push("/login");
    }, 500);
  }
};
</script>

<style lang='less' scoped>
.container {
  width: 1030px;
  position: absolute;
  top: 20px;
  left: 357px;
  border: 1px solid #ccc;
  padding: 10px 15px;
  box-shadow: 0 0 5px #e5e5e5;
  .baseinfo {
    width: 1030px;
    border-bottom: 1px dashed #ccc;
    .top {
      width: 100%;
      margin-top: 10px;
      .title {
        margin-bottom: 10px;
        font-weight: bold;
        line-height: 30px;
        font-size: 15px;
      }
    }
    .content {
      width: 400px;
      margin: 0 auto;
      .el-form {
        :deep(.el-form-item) {
          margin-bottom: 30px;
        }
        .el-button {
          position: absolute;
          top: 0;
          left: 185px;
        }
      }
    }
  }
  .btns {
    width: 200px;
    margin: 20px auto;
    .el-button {
      width: 80px;
    }
    .submit {
      background-color: #ff8000;
      color: #fff;
    }
  }
}
</style>