<template>
  <div class="wrapper" role="main">
    <!-- 个人中心 -->
    <div class="center-box">
      <!-- 个人中心右侧 -->
      <div class="center-main">
        <div class="panel" style="min-height: 812px">
          <!-- 文章详情 -->
          <div class="article">
            <div class="article-head">
              <h1>重点旅客旅游服务说明</h1>
            </div>
            <div class="article-boby">
              <p>
                1．中国铁路客户服务中心网站（www.12306.cn）注册用户可为本人及乘车人办理网上重点旅客预约服务。非注册用户可先行注册后办理或通过12306铁路客服电话办理。
              </p>
              <p>
                2．重点旅客预约服务仅受理依靠轮椅、担架等辅助器具旅行的老年、伤病、残疾等已购车票旅客服务需求。铁路站车提供优先进站、协助乘降、便利出站等服务，不办理代购车票等其他业务。
              </p>
              <p>3．乘车前12至72小时的重点旅客预约服务可在网上办理。</p>
              <p>
                4．预约服务提交完成后，工作人员将不晚于乘车前2小时与您联系，因特殊情况未接到工作人员电话时，请拨打12306铁路客服电话进行确认。
              </p>
              <p>
                5．旅客身份信息与车票身份信息不一致、不符合重点旅客预约服务条件的，铁路部门有权拒绝受理。
              </p>
              <p>
                6．已提交预约服务的旅客，办理车票改签、变更到站、退票或取消服务时，须及时通过12306铁路客服电话变更或取消服务。
              </p>
              <div class="line"></div>
              <div class="btn">
                <a href="#" class="w120">不同意</a>
                <a href="#" class="w121">我已阅读并同意</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
/* 个人中心右侧 */
.center-box .center-main {
  position: absolute;
  top: 30px;
  left: 330px;
  margin-top: 15px;
  margin-right: 15px;
  width: 900px;
  height: 890px;
  color: #333;
  background: #fff;
}

.center-box .center-main .panel {
  border: 1px solid #dedede;
  padding: 20px;
  font-size: 14px;
  line-height: 1.5;
}

/* 文章详情 */
.center-box .center-main .panel .article {
  padding: 0 20px;
}

.center-box .center-main .panel .article-head {
  padding: 10px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-weight: 700;
}

.center-box .center-main .panel .article-boby > p {
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