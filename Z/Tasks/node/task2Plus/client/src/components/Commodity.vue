<template>
  <div>
    <div class="filter">
      <div class="select">
        <el-select v-model="category" value="" @change="handleChange">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="search">
        <el-autocomplete class="inline-input" v-model="search" :fetch-suggestions="querySearch" placeholder="请输入关键字搜索"
                         :trigger-on-focus="false" @keydown.enter.native="submitSearch">
        </el-autocomplete>
        <el-button size="mini" type="primary" @click="submitSearch">提交</el-button>
      </div>
    </div>
    <el-table :data="tableData" stripe border style="width: 100%" height="470px">
      <el-table-column prop="index" label="序号" width="100" align="center"></el-table-column>
      <el-table-column prop="picture" label="图片" width="150" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.picture" alt="图片未加载" style="width: 36px;height: 36px">
        </template>
      </el-table-column>
      <el-table-column prop="category" label="分类" width="250" align="center"></el-table-column>
      <el-table-column prop="title" label="标题" width="250" align="center"></el-table-column>
      <el-table-column prop="price" label="价格" width="250" align="center"></el-table-column>
      <el-table-column prop="id" label="id" width="100" align="center" v-if="false"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleShow(scope.row)">详情</el-button>
          <el-button size="mini" type="success" @click="handleCollect(scope.row)">收藏</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page.sync="page"
                     :page-sizes="[10, 20, 50, 100]"
                     :page-size="10"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total.sync="total">
      </el-pagination>
    </div>
    <el-dialog title="商品详情" :visible.sync="dialogFormVisible">
      <div class="wrapper">
        <div class="picture">
          <img :src="commodity.picture" alt="图片未加载" style="width: 350px;height: 350px">
        </div>
        <div class="content">
          <p><span>标题</span>: {{commodity.title}}</p>
          <p><span>简介</span>: {{commodity.desc}}</p>
          <p><span>分类</span>: {{commodity.category}}</p>
          <p><span>价格</span>: {{commodity.price}}</p>
          <p><span>浏览数</span>: {{commodity.view_count}}</p>
          <p><span>收藏数</span>: {{commodity.collect_count}}</p>
          <p><span>发布者</span>:
            <el-link type="primary">{{commodity.pub_user}}</el-link>
          </p>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleDialog">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Commodity",
    data() {
      return {
        page: 1,
        total: 0,
        limit: 10,
        count: 0,
        category: 0,
        tableData: [],
        search: '',
        suggestions: [],
        commodity: {},
        dialogFormVisible: false,
        tag: ['电子设备', '书籍资料', '宿舍百货', '美妆护肤', '女装', '男装', '鞋帽配饰', '门票卡券', '其它'],
        options: [{
          value: 0,
          label: '全部'
        }, {
          value: 1,
          label: '电子设备'
        }, {
          value: 2,
          label: '书籍资料'
        }, {
          value: 3,
          label: '宿舍百货'
        }, {
          value: 4,
          label: '美妆护肤'
        }, {
          value: 5,
          label: '女装'
        }, {
          value: 6,
          label: '男装'
        }, {
          value: 7,
          label: '鞋帽配饰'
        }, {
          value: 8,
          label: '门票卡券'
        }, {
          value: 9,
          label: '其它'
        }],
      }
    },
    created() {
      this.handleTotal();
      this.getData(this.page - 1, this.limit, this.category, "");
      this.getSuggestion();
    },
    methods: {
      querySearch(queryString, cb) {
        let suggestions = this.suggestions;
        let results = queryString ? suggestions.filter(this.createFilter(queryString)) : suggestions;
        cb(results);
      },
      createFilter(queryString) {
        return (suggestions) => {
          return (suggestions.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      getSuggestion() {
        this.axios.get('/api/commodities/hot').then((response) => {
          if (response.data.success) {
            for (let i = 0; i < response.data.data.length; i++) {
              let obj = {};
              obj.value = response.data.data[i];
              this.suggestions.push(obj);
            }
          } else {
            this.$message.error(response.data.error);
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      getData(page, limit, category, keyword) {
        this.axios.get('/api/commodities', {
          params: {
            page: page,
            limit: limit,
            category: category,
            keyword: keyword
          }
        }).then((response) => {
          if (response.data.success) {
            this.tableData = [];
            for (let i = 0; i < response.data.data.length; i++) {
              let obj = {};
              obj.index = (i + 1) + (limit * (page));
              obj.id = response.data.data[i].Id;
              obj.title = response.data.data[i].Title;
              obj.price = response.data.data[i].Price;
              obj.picture = response.data.data[i].Picture;
              obj.category = this.tag[response.data.data[i].Category - 1];
              this.tableData.push(obj);
            }
            if (limit === 1000) {
              this.total = response.data.data.length;
            }
          } else {
            this.$message.error(response.data.error);
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      submitSearch() {
        this.getData(this.page - 1, this.limit, this.category, this.search);
      },
      handleTotal() {
        this.getData(0, 1000, 0, "");
      },
      handleSizeChange(pageSize) {
        this.limit = pageSize;
        this.getData(this.page - 1, this.limit, this.category, this.search);
      },
      handleCurrentChange(currentPage) {
        this.page = currentPage;
        this.getData(this.page - 1, this.limit, this.category, this.search);
      },
      handleChange() {
        this.getData(this.page - 1, this.limit, this.category, this.search);
      },
      handleShow(row) {
        this.axios.get('/api/commodity/' + row.id).then((response) => {
          if (response.data.success) {
            this.dialogFormVisible = true;
            this.commodity = response.data.data;
            this.commodity.category = this.tag[response.data.data.category - 1];
            this.getUser(this.commodity.pub_user);
          } else {
            this.$message.error(response.data.error);
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      handleCollect(row) {
        this.axios.post('/api/me/collections', {
          id: row.id
        }).then((response) => {
          if (response.data.success) {
            this.$message.success("收藏成功");
          } else {
            this.$message.error(response.data.error);
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      handleDialog() {
        this.dialogFormVisible = false;
      },
      getUser(id) {
        this.axios.get('/api/user/' + id).then((response) => {
          if (response.data.success) {
            this.commodity.pub_user = response.data.data.nickname;
          } else {
            this.$message.error(response.data.error);
          }
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped>
  .search {
    display: flex;
  }

  .filter {
    display: flex;
    justify-content: space-between;
  }

  .wrapper {
    display: flex;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 50px;
  }

  .content span {
    font-weight: 900;
  }
</style>
