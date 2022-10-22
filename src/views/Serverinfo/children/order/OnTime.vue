<template>
  <div class="carOrder-container">
    <el-tabs type="card">
      <el-tab-pane label="待支付订单">
        <div class="top-list">
          <ul class="list">
            <li>产品信息</li>
            <li>使用人信息</li>
            <li>可预约数</li>
            <li>价格</li>
            <li>状态</li>
          </ul>
        </div>
        <NoneTicket />
        <DalayTip />
      </el-tab-pane>
      <el-tab-pane label="全部订单">
        <div class="top-list">
          <ul class="list">
            <li>产品信息</li>
            <li>使用人信息</li>
            <li>可预约数</li>
            <li>价格</li>
            <li>状态</li>
            <li>操作</li>
          </ul>
        </div>
        <NoneTicket />
        <DalayTip />
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
  .top-list {
    width: 95%;
    background-color: #f8f8f8;
    margin: 5px auto;
    height: 40px;
    .list {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>