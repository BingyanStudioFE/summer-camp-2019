<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  body {
    margin: 0;
  }

  input {
    margin: 10px;
    width: 500px;
    border: 1px solid #ccc;
    padding: 7px 0;
    border-radius: 3px;
    padding-left: 5px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s
  }

  input:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
  }

  button {
    margin: 10px;
    background-color: #66afe9;
    border: none;
    color: #ffffff;
    border-radius: 3px;
    padding: 10px 14px;
    text-align: center;
    font-size: 16px;
    transition-duration: 0.4s;
  }

  button:hover {
    background-color: #4CAF50;
  }

  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
