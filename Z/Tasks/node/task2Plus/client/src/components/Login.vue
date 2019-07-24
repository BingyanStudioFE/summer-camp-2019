<template>
  <div id="login">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" status-icon>
      <h1>商城登录</h1>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" autocomplete="off"
                  type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码" autocomplete="off"
                  type="password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitLogin">登录</el-button>
        <el-button type="danger" @click="resetForm">重置</el-button>
        <el-button type="success" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data: () => {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [
            {required: true, message: "请输入用户名", trigger: "blur"}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitLogin() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.axios.post('/api/user/login', {
              username: this.loginForm.username,
              password: this.loginForm.password
            }).then((response) => {
              if (response.data.success) {
                this.$store.commit('SET_TOKEN', response.data.data);
                this.$message.success('登录成功');
                this.$router.push({name: '/'})
              } else {
                this.$message.error(response.data.error);
              }
            })
          }
        })
      },
      resetForm() {
        this.$refs.loginForm.resetFields();
      },
      register() {
        this.$router.push({name: 'register'})
      }
    }
  }
</script>
<style scoped>
  #login {
    width: 500px;
    margin: 0 auto;
  }
</style>
