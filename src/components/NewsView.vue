<template>
  <div class="news">
    <div class="hd">
      <ul class="news-top">
        <li>
          <a href="#">最新发布</a>
        </li>
        <li>
          <a href="#">常见问题</a>
        </li>
        <li>
          <a href="#">信用信息</a>
        </li>
      </ul>
    </div>
    <div class="bd">
      <!-- <div class="bd-news"> -->
      <!--公告-->
      <div class="item1">
        <ul class="two">
          <li>
            <a href="son/ziye.html">邕北高铁票价优化调整公告</a>
            <span class="SJ">2021-12-21</span>
          </li>
          <li>
            <a href="#">候补购票操作说明</a>
            <span class="SJ">2021-12-21</span>
          </li>
          <li>
            <a href="#">关于调整互联网、电话订票起售时间的公告</a>
            <span class="SJ">2021-12-21</span>
          </li>
          <li>
            <a href="#"
              >中国铁路广州局集团有限公司关于2021年12月24日至12月26日增开G9634次、G9633次旅客列车的公告</a
            >
            <span class="SJ">2021-12-21</span>
          </li>
          <li>
            <a href="#"
              >中国铁路广州局集团有限公司关于2021年12月16日增开C9791/4次旅客列车的公告</a
            >
            <span class="SJ">2021-12-21</span>
          </li>
        </ul>
      </div>
      <div class="news-more">
        <a href="son/more.html">更多></a>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang='less' scoped>
.news {
  width: 1290px;
  height: 298px;
  margin-top: 40px;
  margin-bottom: 55px;
  margin-left: 155px;
  // position: absolute;
  // top: 1620px;
  // left: 155px;
}
.news .hd {
  width: 1290px;
  height: 40px;
}
.news .hd > ul {
  list-style-type: none;
}
.news .hd .news-top > li {
  width: 380px;
  height: 40px;
  float: left;
  background: #efeff4;
  display: block;
  margin-right: 35px;
  line-height: 40px;
}
.news .hd .news-top > li > a {
  display: block;
  color: #666;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
}
.news .hd .news-top > li > a:hover {
  color: #ffffff;
  background-color: #3b99fc;
}

.bd {
  width: 1290px;
  height: 258px;
}
.bd-news {
  width: 1210px;
  height: 216px;
  margin-left: 40px;
}
.two > li {
  width: 1100px;
  height: 40px;

  line-height: 40px;
}
.two > li > a {
  display: inline-block;
  width: 1000px;
  color: #666;
  font-size: 16px;
  text-decoration: none;
}
.two > li > a:hover {
  color: #0000ff;
}
.news-more > a {
  color: darkblue;
}
.news-more > a:hover {
  color: cornflowerblue;
}
.SJ {
  display: inline-block;
  // float: right;
  color: #999;
  font-size: 15px;
}
.news-more > a {
  text-decoration: none;
  float: right;
  color: #999;
}
</style>