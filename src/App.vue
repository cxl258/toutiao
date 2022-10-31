<template>
  <div id="app">
    <h1>黑马头条</h1>
     <!-- 路由出口 -->
      <i class="toutiao toutiao-lishi"></i>
      <van-button type="info">信息按钮</van-button>
    <router-view/>
   
  </div>
</template>

<script>
export default {
  name:"App"
}
</script>

<style lang="less">

</style>

