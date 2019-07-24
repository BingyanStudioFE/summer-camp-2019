<template>
  <el-table :data="tableData" stripe border style="width: 100%" height="550px">
    <el-table-column prop="index" label="序号" width="100" align="center"></el-table-column>
    <el-table-column prop="id" label="id" width="300" align="center"></el-table-column>
    <el-table-column prop="title" label="标题" width="300" align="center"></el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "MyCollect",
    data() {
      return {
        tableData: [],
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.axios.get('/api/me/collections').then((response) => {
          if (response.data.success) {
            this.tableData = [];
            for (let i = 0; i < response.data.data.length; i++) {
              let obj = {};
              obj.index = i + 1;
              obj.id = response.data.data[i].Id;
              obj.title = response.data.data[i].Title;
              this.tableData.push(obj);
            }
          } else {
            this.$message.error(response.data.error);
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      handleDelete(row) {
        this.axios.delete('/api/me/collections', {
          data: {
            id: row.id
          }
        }).then((response) => {
          if (response.data.success) {
            this.$message.success("删除成功");
            this.getData();
          } else {
            this.$message.error(response.data.error);
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
    }
  }
</script>

<style scoped>
</style>

