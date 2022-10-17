<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Header from "@/components/HeaderView.vue";
import Footer from "@/components/FooterView.vue";
</script>

<style lang="less" scoped>
</style>