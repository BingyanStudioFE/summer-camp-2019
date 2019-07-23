<template>
  <el-aside width="200px">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>商品</span>
            </template>
            <el-menu-item index="commodity">商品列表</el-menu-item>
            <el-menu-item index="publish">发布商品</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>我的</span>
            </template>
            <el-menu-item index="userInfo">个人信息</el-menu-item>
            <el-menu-item index="mypublish">我发布的商品</el-menu-item>
            <el-menu-item index="myCollect">我收藏的商品</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
  export default {
    name: "Aside",
    methods: {}
  }
</script>

<style scoped>
  .el-menu {
    border: none;
  }
</style>
