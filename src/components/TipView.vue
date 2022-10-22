<template>
  <div class="tip-container">
    <h4>温馨提示：</h4>
    <p>1.订单信息在本网站保存期限为30日。</p>
    <p>
      2.在12306.cn网站改签和退票，改签应不晚于票面日期当日24:00，变更到站不晚于开车前48小时，退票应不晚于开车前。
    </p>
    <p>3.在本网站办理退票，只能逐次单张办理。</p>
    <p>
      4.
      车票改签、变更到站均只能办理一次。已经改签或变更到站的车票不再办理改签；对已改签车票、团体票暂不提供“变更到站”服务。
    </p>
    <p>
      5.退票、改签、变更到站后，如有应退票款，按购票时所使用的在线支付工具相关规定，将在规定时间内退还至原在线支付工具账户，请及时查询。如有疑问，请致电12306人工客服查询。
    </p>
    <p>6.如需取消或查看车票快递状态，请点击“快递详情”。</p>
    <p>7.投保、退保或查看电子保单状态，请点击“我的保险”或“购/赠/退保险”。</p>
    <p>8.未尽事宜详见《铁路旅客运输规程》等有关规定和车站公告。</p>
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