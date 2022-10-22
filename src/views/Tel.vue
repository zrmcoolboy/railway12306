<template>
  <Header />
  <div class="content">
    <div class="top">
      <!-- 面包屑导航 -->

      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        separator=">"
        class="crumb"
      >
        <el-breadcrumb-item>信息查询</el-breadcrumb-item>
        <el-breadcrumb-item>常用查询</el-breadcrumb-item>
        <el-breadcrumb-item>客服电话</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main-panel">
      <div class="bd">
        <div class="title">
          <h2>客户服务中心客服电话</h2>
        </div>
        <div class="box">
          <ul class="all">
            <li>
              <h3 class="content-tit">哈尔滨铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                0451-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">沈阳铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                024-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">北京铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                010-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">太原铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                0351-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">呼和浩特铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                0471-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">郑州铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                0371-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">武汉铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                027-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">西安铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                029-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">济南铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                0531-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">上海铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                021-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">兰州铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                0931-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">乌鲁木齐铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                0991-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">广州铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                020-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">西宁铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                0971-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">南宁铁路客户服务中心</h3>
              <div class="phone">
                <el-icon>
                  <Service />
                </el-icon>
                0771-12306
              </div>
            </li>
            <li>
              <h3 class="content-tit">铁路客户邮箱</h3>
              <div class="phone">
                <el-icon><Message /> </el-icon>
                客运：kyfw@12306.cn
              </div>
              <div class="phone">
                <el-icon><Message /> </el-icon>
                货运：hyfw@12306.cn
              </div>
              <div class="phone">
                <el-icon><Message /> </el-icon>
                行包：xbfw@12306.cn
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <FooterView />
</template>

<script setup>
import Header from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
</script>

<style>
.content {
  width: 1200px;
  padding: 0 5px;
  margin-left: auto;
  margin-right: auto;
}
.crumb {
  padding-top: 15px;
}
.top {
  height: 50px;
  line-height: 50px;
  color: #666;
  font-size: 12px;
}
.main-panel {
  border-top: 0;
  position: relative;
}
.main-panel .bd {
  border: 1px solid #dedede;
  padding: 20px 19px;
}
.main-panel .title {
  font-size: 18px;
  line-height: 36px;
  text-align: center;
  padding: 10px;
  margin-bottom: 15px;
}
h2 {
  font-weight: normal;
}
.box {
  overflow: hidden;
}
.all {
  margin-right: -20px;
  width: 1300px;
  display: block;
  flex-direction: row;
}
.all li {
  float: left;
  padding: 23px 20px 17px 20px;
  border: 1px solid #dedede;
  margin-right: 20px;
  width: 330px;
  margin-top: 20px;
  color: #666;
}
h3 {
  font-weight: normal;
}
.content-tit {
  font-size: 20px;
  color: #3b99fc;
  line-height: 20px;
  overflow: hidden;
}
.phone {
  height: 22px;
  line-height: 22px;
  overflow: hidden;
  padding-top: 20px;
}
.el-icon {
  margin-right: 8px;
}
</style>