<template>
  <div class="container">
    <div class="font">
      <p class="text">页面不存在</p>
      <div class="gologin">
        <span>点击</span>
        <span class="index" @click.prevent="$router.push('/home')">这里</span>
        <span>进入首页瞧瞧吧！</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang='less' scpoed>
.container {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/img/girl2.png");
  position: relative;
  .font {
    width: 300px;
    height: 300px;
    // background-color: rgba(2, 50, 70, 0.1);
    border-radius: 5px;
    text-align: center;
    line-height: 150px;
    position: absolute;
    top: 20px;
    right: 100px;
    .text {
      font-size: 58px;
      font-weight: bold;
      color: rgb(111, 202, 238);
    }
    .gologin {
      font-size: 20px;
      color: #fff;
      .index {
        display: inline-block;
        margin: 0 5px;
        color: yellow;
        font-size: 28px;
        // text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>