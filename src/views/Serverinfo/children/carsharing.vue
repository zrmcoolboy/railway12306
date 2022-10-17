<template>
  <Header />
  <div class="center">
    <!-- 汽车共享 -->
    <div class="center-main">
      <div class="panel" style="min-height: 812px">
        <!-- 文章详情 -->
        <div class="article">
          <div class="article-head">
            <h1>12306网约车服务</h1>
          </div>
          <div class="article-boby">
            <div class="introduce">
              <h2>服务介绍</h2>
              <h4>
                为满足旅客多样化出行需求，帮助旅客解决“点到点”的出行难题，铁路12306为旅客提供接送站/机、实时打车等约车服务。目前为旅客提供超过400个城市的网约车服务，覆盖火车站、机场等交通枢纽，提供的服务车型涵盖经济、舒适、商务、豪华等，并推出一系列优惠活动，让旅客出行稳在车速、准在时间、快在接单、惠在价格、赢在体验。
              </h4>
              <img
                src="https://www.12306.cn/index/images/shared_new01.jpg"
                style="width: 700px; height: 150px"
              />
            </div>
            <div class="how">
              <h2>如何约车</h2>
              <p>
                1、12306APP包含多个约车入口，您可以随时随地下单。当您购买火车票后选择约车服务，可以与您的行程精准匹配，省时省心。
              </p>
              <img
                src="https://www.12306.cn/index/images/shared_new02.png"
                style="width: 551px; height: 400px"
              />
              <p>
                2、12306约车联合网约车聚合平台和运力供应商为您提供多种车型，您可自主选择下单，价格透明又安心。
              </p>
              <img
                src="https://www.12306.cn/index/images/shared_new03.png"
                style="width: 551px; height: 400px"
              />
              <p>
                扫描二维码并下载12306APP，带您体验优质网约车服务。如您在约车过程中出现任何问题，请拨打客服电话4008812306。铁路12306约车，陪伴您的每一段旅程。
              </p>
              <img
                src="https://www.12306.cn/index/images/download.png"
                style="width: 200px; height: 200px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
</script>
<style scoped>
.center {
  width: 1190px;
  margin: 20px auto;
}
.center-box {
  width: 130px;
  height: 872px;
}
.center-main {
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
.article-boby div img {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
