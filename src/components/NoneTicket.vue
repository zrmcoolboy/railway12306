<template>
  <div class="unorder-container">
    <div class="unorder">
      <img src="@/assets/img/emptyorder.png" alt="" />
      <div class="word">
        <p>您没有未完成的订单哦~</p>
        <p>您可以通过<span>车票预订</span>功能，来制定出行计划。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
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