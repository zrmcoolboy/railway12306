<template>
  <div class="all">
    <div class="head">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <p class="p">请叫我战斗鸡</p>
    </div>
    <div class="rate">
      <div>
        满意度<el-rate
          v-model="value"
          :texts="['非常差', '差', '一般', '满意', '超赞']"
          show-text
        />
      </div>
      <div>
        味道
        <el-rate
          v-model="value2"
          :texts="['非常差', '差', '一般', '满意', '超赞']"
          show-text
        />
      </div>
      <div>
        包装
        <el-rate
          v-model="value3"
          :texts="['非常差', '差', '一般', '满意', '超赞']"
          show-text
        />
      </div>
    </div>
    <textarea
      v-model="textword"
      class="textcomment"
      placeholder="详细反馈问题，帮助商家改善"
    />
    <el-button color="#d9ecff" :disabled="usebtn">发表</el-button>
  </div>
</template>
<script setup>
import { watch, ref } from "vue";
const textword = ref("");
const usebtn = ref(true);
const value = ref();
const value2 = ref();
const value3 = ref();
const writetext = watch(textword, (newval, oldval) => {
  if (newval !== "") {
    usebtn.value = false;
  } else {
    usebtn.value = true;
  }
});
</script>
<style lang='less' scoped>
.all {
  width: 100%;
  .head {
    display: flex;
    flex-direction: row;
  }
  .rate {
    font-size: 14px;
  }
  .textcomment {
    width: 99%;
    height: 70px;
    // border-style: none;
    outline: none;
    margin-top: 10px;
  }
}

.p {
  margin: 15px;
}
.el-rate {
  margin: 5px;
}
</style>
