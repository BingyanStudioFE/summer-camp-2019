<template>
  <el-header>
    <h1>商品管理系统</h1>
    <div id="user-info">
      <el-avatar shape="square" :size="40" icon="el-icon-user-solid"></el-avatar>
      <el-button type="danger" @click="logout" id="logout-btn">注 销</el-button>
    </div>
  </el-header>
</template>

<script>
  export default {
    name: "Header",
    data: () => {
      return {
        username: window.localStorage.getItem('username')
      }
    },
    methods: {
      logout() {
        this.$store.commit('LOGOUT');
        this.$message.success('注销成功');
        this.$router.push({name: 'login'})
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #logout-btn {
    height: 40px;
  }

  #user-info {
    display: flex;
    align-items: center;
  }

  #user-info .el-avatar {
    margin-right: 20px;
  }

</style>
