<template>
  <div class="passenger-container">
    <div class="top">
      <el-input
        v-model="username"
        clearable
        placeholder="请输入乘客姓名"
      ></el-input>
      <el-button @click="FindUsername">查询</el-button>
    </div>
    <div class="head">
      <div class="todo" @click="addinfo">
        <el-icon size="15px" color="#00CC0C"><CirclePlusFilled /></el-icon>
        <p>添加</p>
      </div>
      <div class="todo" @click="delAllInfo">
        <el-icon size="15px" color="#E12525"><Delete /></el-icon>
        <p>批量删除</p>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column
        align="center"
        type="selection"
        prop="date"
        width="55px"
      />
      <el-table-column
        align="center"
        prop="username"
        label="姓名"
        width="120px"
      />
      <el-table-column align="center" prop="idcard" label="证件类型" />
      <el-table-column
        align="center"
        prop="idcardnum"
        label="证件号码"
        width="160px"
      />
      <el-table-column align="center" prop="tel" label="手机/电话" />
      <el-table-column align="center" prop="travel" label="旅客类型" />
      <el-table-column align="center" prop="address" label="校验状态">
        <template #default="scope">
          <div class="valid">
            <i class="user"></i>
            <i class="phone"></i>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="address" label="操作">
        <template #default="scope">
          <el-icon
            size="25px"
            color="#E12525"
            @click="delinfo(scope.$index, scope.row)"
            ><Delete
          /></el-icon>
          <el-icon size="25px" color="#3B99FC" @click="EditInfo(scope.row)"
            ><Edit
          /></el-icon>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import "element-plus/theme-chalk/el-message.css";
import { useMainStore } from "@/store";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import router from "@/router";
import { ElMessage } from "element-plus";
import { delPassenger, getAllPersonInfo } from "@/api/request";
const store = useMainStore();
const { AllPersonInfo } = storeToRefs(store);
// console.log(AllPersonInfo);
const tableData = ref([]);
const username = ref("");
tableData.value = AllPersonInfo.value;
const userid = localStorage.getItem("userid");
// 查人
const FindUsername = () => {
  if (username.value === "") {
    ElMessage({
      type: "warning",
      message: "请输入内容",
    });
  } else {
    const arr = Array.from(tableData.value);
    const newArr = arr.filter((item) => {
      return item.username === username.value;
    });
    tableData.value = newArr;
  }
};
// 监听输入搜索框
const findname = watch(username, (newval, oldval) => {
  // console.log(newval);
  if (newval === "") {
    tableData.value = AllPersonInfo.value;
  }
});

// 获取行信息
const getPersonInfo = async () => {
  let res = await getAllPersonInfo(userid);
  // console.log(res);
  tableData.value = res.data;
};
getPersonInfo();
// 添加
const addinfo = () => {
  // alert(123);
  router.push("/serverinfo/address/addinfo");
};
// 批量删除
const delAllInfo = () => {
  alert("删除");
};

// 单行删除
const delinfo = (index, row) => {
  ElMessageBox.confirm("您确定要删除改乘车人吗？", "警告", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      const res = await delPassenger(row);
      console.log(res);
      if (res.status === 200) {
        ElMessage({
          type: "success",
          message: "删除成功！",
        });
        const res = await getAllPersonInfo(userid);
        tableData.value = res.data;
      }
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "取消删除",
      });
    });
};
// 编辑
const EditInfo = (row) => {
  console.log(row);
  store.$patch({
    passengerinfo: row,
  });
  router.push("/serverinfo/address/editinfo");
};
</script>

<style lang='less' scoped>
.valid {
  display: flex;
  width: 100px;
  justify-content: space-between;
  .user {
    display: block;
    width: 44px;
    height: 44px;
    background-image: url("@/assets/img/user-success.png");
  }
  .phone {
    width: 44px;
    height: 44px;
    display: block;
    background-image: url("@/assets/img/mobile-success.png");
  }
}
.el-icon {
  margin-left: 10px;
  cursor: pointer;
}
.passenger-container {
  width: 980px;
  position: absolute;
  top: 70px;
  left: 357px;
  border: 1px solid #ccc;
  padding: 10px 15px;
  box-shadow: 0 0 5px #e5e5e5;
  .top {
    display: flex;
    width: 240px;
    margin: 20px;
    .el-button {
      margin-left: 20px;
    }
  }
  .head {
    display: flex;
    height: 40px;
    // width: 180px;
    background-color: #f0f8ff;
    align-items: center;
    .todo {
      height: 90%;
      display: flex;
      align-items: center;
      font-size: 14px;
      cursor: pointer;
      p {
        margin-left: 5px;
      }
    }
    .todo:hover {
      color: #3b99fc;
    }
  }
}
</style>