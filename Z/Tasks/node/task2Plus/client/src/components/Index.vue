<template>
  <div>
    <Header></Header>
    <el-container>
      <Aside></Aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './Header'
  import Aside from './Aside'
  import Footer from './Footer'

  export default {
    name: "Index",
    components: {Header, Aside, Footer},
  }
</script>

<style scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 600px;
  }
</style>
