<template>
  <div class="footer">
    <!--友情链接-->
    <div class="wrapper">
      <div class="link">
        <h2 class="yqlj">友情链接</h2>
        <br />
        <ul class="tup">
          <li>
            <img src="@/assets/img/link01.png" width="200px" height="30px" />
          </li>
          <li>
            <img src="@/assets/img/link02.png" width="200px" height="30px" />
          </li>
          <li>
            <img src="@/assets/img/link03.png" width="200px" height="30px" />
          </li>
          <li>
            <img src="@/assets/img/link04.png" width="200px" height="30px" />
          </li>
        </ul>
      </div>
      <!--二维码-->
      <ul class="ewm">
        <li>
          <h2 class="foot">中国铁路官方微信</h2>
          <div class="code">
            <img src="@/assets/img/zgtlwx.png" width="80px" height="80px" />
          </div>
        </li>
        <li>
          <h2 class="foot">中国铁路官方微博</h2>
          <div class="code">
            <img src="@/assets/img/zgtlwb.png" width="80px" height="80px" />
          </div>
        </li>
        <li style="width: 110px; height: 134px">
          <h2 class="foot">12360公众号</h2>
          <div class="code">
            <img src="@/assets/img/public.png" width="80px" height="80px" />
          </div>
        </li>
        <li style="width: 110px">
          <h2 class="foot">铁路12360</h2>
          <div class="code">
            <img src="@/assets/img/download.png" width="80px" height="80px" />
            <div class="cod-tip">
              官方APP下载，目前铁路未授权其他网站或APP开展类似服务内容，敬请广大用户注意。
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!--底部区域-->
    <div class="bottom">
      <div class="dl">
        <p>
          <span class="mr">版权所有©2008-2021</span>
          <span class="mr">中国铁道科学研究院集团有限公司</span>
        </p>
        <p>
          <span>京ICP备05020493号-4</span>
          <span>|</span>
          <span>ICP证：京B2-20202537</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 274px;
  background: #f8f8f8;
  // top: 1950px;
  position: relative;
  // left: 0px;
  bottom: 0;
  overflow: hidden;
  margin-bottom: 0;
}
.footer .wrapper {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 154px;
  // position: absolute;
  // top: 16px;
  // left: 90px;
}
.link {
  width: 420px;
  height: 54px;
}
.link .yqlj {
  float: left;
  width: 420px;
  height: 54px;
  line-height: 54px;
  font-size: 14px;
  position: relative;
  left: 40px;
}
.footer .wrapper .link .tup {
  width: 500px;
  height: 100px;
  padding-inline-start: 40px;
  font-size: 14px;
}
.link > ul > li {
  width: 202px;
  float: left;
  margin: 0 10px 10px 0;
  display: list-item;
  text-align: -webkit-match-parent;
}
.link > ul > li > img {
  display: block;
  width: 200px;
  height: 34px;
  border: 1px solid #dedede;
  cursor: pointer;
}
/* 二维码 */
.ewm {
  float: left;
  width: 500px;
  height: 134px;
  margin-right: 250px;
}
.ewm > li {
  display: block;
  float: left;
  width: 140px;
  height: 134px;
  text-align: center;
  font-size: 14px;
}
.ewm .foot {
  height: 54px;
  line-height: 54px;
  font-size: 14px;
  font-weight: 400px;
}
.ewm .code {
  width: 80px;
  height: 80px;
  background: #fff;
  margin: 0 auto;
  position: relative;
}
.ewm > img {
  display: block;
  width: 80px;
  height: 80px;
  border: 1px solid #dedede;
}
.ewm > li .cod-tip {
  position: absolute;
  top: 0px;
  left: 96px;
  width: 180px;
  height: 60px;
  border: 1px solid #dedede;
  background-color: #fff;
  background-position: right bottom;
  background-repeat: no-repeat;
  line-height: 18px;
  padding: 12px 10px;
  font-size: 12px;
  text-align: left;
}
/* 底部 */
.bottom {
  /* text-align: center; */
  width: 1535px;
  height: 80px;
  background-color: #666666;
  padding: 10px 0;
  background: #666;
  color: #c1c1c1;
  // position: absolute;
  // bottom: 0px;
}
.dl > p {
  line-height: 30px;
}

.footer .bottom .dl {
  text-align: center;
  padding: 10px 0;
  background: #666;
  color: #c1c1c1;
  top: 30px;
}
.dl .mr {
  text-align: center;
}
</style>