<template>
  <div class="tip-container">
    <h4>温馨提示：</h4>
    <p>
      1.系统将持续尝试为您兑现候补需求，若无满足您需求的席位，将在截止兑现时间自动终止兑现。
    </p>
    <p>
      2.兑现成功或自动终止时，将通过您选择的通知方式进行告知，请注意查收消息并关注“候补订单”兑现状态。
    </p>
    <p>
      3.兑现时，将根据您所候补列车的席位实际情况予以分配，多人出行时，可能分配到不同车厢，遇有卧代座时，将按座席予以分配。
    </p>
    <p>4.同一候补购票订单中需求不进行部分兑现。</p>
    <p>5.兑现时实名制和行程冲突规则按既有规则办理。</p>
    <p>
      6.兑现成功车票的退改签规则按既有规则办理，退票费按如下规则核收：票面乘车站开车时间前8天（含）以上不收取退票费，48小时以上的按票价5%计，24小时以上、不足48小时的按票价10%计，不足24小时的按票价20%计。上述计算的尾数以5角为单位，尾数小于2.5角的舍去、2.5角及以上且小于7.5角的计为5角、7.5角及以上的进为1元。退票费最低按2元计收。
    </p>
  </div>
</template>

<script setup>
</script>

<style lang='less' scoped>
.tip-container {
  width: 968px;
  margin: -10px auto;
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
</style>