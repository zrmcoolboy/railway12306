<template>
  <div class="carOrder-container">
    <el-tabs type="card">
      <el-tab-pane label="待支付订单">
        <NoneTicket />
        <DalayTip />
      </el-tab-pane>
      <el-tab-pane label="待兑现订单">
        <NoneTicket />
        <DalayTip />
      </el-tab-pane>
      <el-tab-pane label="已处理订单">
        <NoneTicket />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import TipInfo from "@/components/TipView.vue";
import NoneTicket from "@/components/NoneTicket.vue";
import DalayTip from "@/components/DalayTip.vue";
</script>

<style lang="less" scoped>
.tip-container {
  box-shadow: 0 0 5px #e5e5e5;
  width: 968px;
  margin: 10px auto;
  border: 2px solid #ffddba;
  padding: 10px 8px 0 20px;
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
.carOrder-container {
  box-shadow: 0 0 5px #e5e5e5;
  width: 1030px;
  border: 1px solid #f5f5f5;
  position: absolute;
  top: 65px;
  left: 357px;
  .unorder-container {
    .unorder {
      width: 998px;
      height: 352px;
      border: 1px solid #3b99fc;
      margin: 20px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 87px;
        height: 70px;
      }
      .word {
        margin-left: 20px;
        font-size: 15px;
        color: #ccc;
        line-height: 20px;
        span {
          color: #3b99fc;
          text-decoration: underline;
        }
      }
    }
  }
  .order-container {
    .order {
      display: flex;
      justify-content: start;
      align-items: center;
      padding-bottom: 10px;
      .dateTime {
        margin-left: 20px;
        font-size: 14px;
      }
      .inputinto {
        width: 160px;
        margin-left: 20px;
      }
      .checkTime {
        width: 380px;
        margin-left: 20px;
      }
      .el-button {
        width: 100px;
        margin-left: 20px;
      }
    }
    .demo-tabs {
      margin-top: 20px;
      :deep(.el-tabs__item.is-active) {
        background-color: #3b99fc;
        color: #fff;
      }
    }
  }
}
</style>