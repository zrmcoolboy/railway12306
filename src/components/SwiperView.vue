<template>
  <div class="body-center">
    <el-carousel :interval="3000" arrow="always" height="400px">
      <el-carousel-item>
        <img src="@/assets/img/first.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/two.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/three.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/four.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/five.jpg" />
      </el-carousel-item>
    </el-carousel>
    <!-- <info></info> -->
  </div>
</template>

<script setup>
// import info from "./SwiperInfo.vue";
</script>

<style scoped>
.body-center {
  height: 450px;
  position: relative;
  top: 0px;
  /* background-color: pink; */
  /* overflow: hidden; */
}
.el-carousel__item img {
  width: 1550px;
  height: 400px;
}
</style>