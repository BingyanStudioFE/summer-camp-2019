<template>
  <div id="user-info">
    <el-form :model="userForm" :rules="userRules" ref="userForm" status-icon>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userForm.username" placeholder="请输入用户名" autocomplete="off"
                  type="text" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="userForm.password" placeholder="请输入密码" autocomplete="off"
                  type="password" show-password></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="userForm.nickname" placeholder="请输入昵称" autocomplete="off"
                  type="text"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="userForm.mobile" placeholder="请输入手机号码" autocomplete="off"
                  type="text"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="userForm.email" placeholder="请输入邮箱" autocomplete="off"
                  type="text"></el-input>
      </el-form-item>
      <p>商品总浏览量: {{userForm.total_view_count}}</p>
      <p>商品总收藏量: {{userForm.total_collect_count}}</p>
      <el-form-item>
        <el-button type="primary" @click="submitUserInfo">修改</el-button>
        <el-button type="danger" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "UserInfo",
    data: () => {
      return {
        userForm: {
          username: '',
          password: '',
          nickname: '',
          mobile: '',
          email: ''
        },
        userRules: {
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
    created() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('me').then((response) => {
          if (response.data.success) {
            this.userForm = response.data.data;
          } else {
            this.$message.error("读取失败");
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      submitUserInfo() {
        this.$refs.userForm.validate((valid) => {
          if (valid) {
            axios.post('me', {
              password: this.userForm.password,
              nickname: this.userForm.nickname,
              mobile: this.userForm.mobile,
              email: this.userForm.email
            }).then((response) => {
              if (response.data.success) {
                this.$message.success('修改成功');
              } else {
                this.$message.error("未知错误");
              }
            })
          }
        })
      },
      resetForm() {
        this.getData();
      }
    }
  }
</script>

<style scoped>
  #user-info {
    width: 500px;
    margin: 0 auto;
  }
</style>
