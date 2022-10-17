<template>
  <!-- 个人中心右侧 -->
  <div class="center-main">
    <div class="panel" style="min-height: 812px">
      <!-- 文章详情 -->
      <div class="article">
        <div class="article-head">
          <h1>遗失物品查找服务说明</h1>
        </div>
        <div class="article-boby">
          <p>
            1．中国铁路客户服务中心网站（www.12306.cn）注册用户可为本人及乘车人办理遗失物品网上查找、登记。非注册用户可先行注册后办理或通过12306铁路客服电话办理。
          </p>
          <p>
            2．填写时，请按照服务单内容逐项填写完整，详细描述遗失地点及遗失物品具体信息。
          </p>
          <p>3．遗失物品的管理、转运应符合《铁路旅客运输规程》的相关要求。</p>
          <div class="line"></div>
          <div class="btn">
            <a href="#" class="w120">不同意</a>
            <a href="#" class="w121">我已阅读并同意</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.center {
  display: flex;
  justify-content: center;
}
.center-box {
  width: 130px;
  height: 872px;
}
.center-main {
  position: absolute;
  top: 30px;
  left: 185px;
  margin: 15px 0 0 150px;
  width: 900px;
  color: #333;
  border: 1px solid #dedede;
}
.center-main .panel {
  padding: 20px;
  font-size: 14px;
  line-height: 1.5;
}
/* 文章详情 */
.center-main .panel .article {
  padding: 0 20px;
}
.center-main .panel .article-head {
  padding: 10px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-weight: 700;
}
.center-main .panel .article-boby > p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 20px;
  margin-top: 15px;
}
.article-boby .line {
  margin: 40px 0;
  height: 1px;
  border-top: 1px dashed #dedede;
}
.article-head > h1 {
  font-size: 20px;
}
.article-boby .btn {
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  width: 818px;
  min-width: 80px;
  height: 30px;
  line-height: 20px;
  padding: 10px 0px;
  border-radius: 6px;
  white-space: nowrap;
  vertical-align: middle;
  text-align: center;
}
.btn > a {
  border: 1px solid #dedede;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  margin: 0 5px;
  text-decoration: none;
}
.btn > a.w120 {
  color: #333333;
  border: 1px solid #dedede;
  border-radius: 6px;
  width: 120px !important;
}
.btn > a.w121 {
  background: #ff8201;
  width: 125px;
  height: 20px;
  color: #ffffff;
  border: 1px solid #dedede;
  border-radius: 6px;
}
</style>
