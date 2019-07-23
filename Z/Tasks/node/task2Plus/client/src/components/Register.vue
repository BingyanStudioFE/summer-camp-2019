<template>
  <div id="register">
    <el-form :model="registerForm" :rules="registerRules" ref="registerForm" status-icon>
      <h1>商城注册</h1>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username" placeholder="请输入用户名" autocomplete="off"
                  type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registerForm.password" placeholder="请输入密码" autocomplete="off"
                  type="password" show-password></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="registerForm.nickname" placeholder="请输入昵称" autocomplete="off"
                  type="text"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="registerForm.mobile" placeholder="请输入手机号码" autocomplete="off"
                  type="text"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registerForm.email" placeholder="请输入邮箱" autocomplete="off"
                  type="text"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitRegister">提交</el-button>
        <el-button type="danger" @click="resetForm">重置</el-button>
        <el-button type="success" @click="login">返回登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Register",
    data: () => {
      return {
        registerForm: {
          username: '',
          password: '',
          nickname: '',
          mobile: '',
          email: ''
        },
        registerRules: {
          username: [
            {required: true, message: "用户名不能为空", trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {min: 6, max: 20, message: '长度为 6 到 20 个字符', trigger: 'blur'}
          ],
          mobile: [
            {min: 11, max: 11, message: '手机号不合法', trigger: "blur"}
          ],
          email: [
            {pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/, message: '邮箱不合法', trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitRegister() {
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            axios.post('user/register', {
              username: this.registerForm.username,
              password: this.registerForm.password,
              nickname: this.registerForm.nickname || null,
              mobile: this.registerForm.mobile || null,
              email: this.registerForm.email || null
            }).then((response) => {
              if (response.data.success) {
                this.$message.success('注册成功');
                this.$router.push({name: 'login'})
              } else {
                console.log(response.data);
                this.$message.error("用户名已被占用");
              }
            })
          }
        })
      },
      resetForm() {
        this.$refs.registerForm.resetFields();
      },
      login() {
        this.$router.push({name: 'login'});
      },
    }
  }
</script>

<style scoped>
  #register {
    width: 500px;
    margin: 0 auto;
  }
</style>
