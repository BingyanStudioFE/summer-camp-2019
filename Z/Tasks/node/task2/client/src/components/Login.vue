<template>
  <div id="login">
    <form :model="loginForm" ref="loginForm">
      <h1>商城登录</h1>
      <div class="input">
        <label>
          <input v-model="loginForm.username" name="username" placeholder="请输入用户名" autocomplete="off" type="text"
                 v-validate="'required'"/>
        </label>
        <span v-show="errors.has('username')">{{ errors.first('username') }}</span>
        <label>
          <input v-model="loginForm.password" name="password" placeholder="请输入密码" autocomplete="off" type="password"
                 v-validate="'required'"/>
        </label>
        <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
      </div>
      <div>
        <button class="primary">登录</button>
        <button class="danger">重置</button>
        <button class="success">注册</button>
      </div>
    </form>
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
      }
    }
  }
</script>

<style scoped>
  .input {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
  }
</style>
