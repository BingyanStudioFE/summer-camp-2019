<template>
  <div id="publish">
    <el-form :model="publishForm" :rules="publishRules" ref="publishForm" status-icon>
      <el-form-item label="标题" prop="title">
        <el-input v-model="publishForm.title" placeholder="请输入标题" autocomplete="off" type="text"></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="desc">
        <el-input v-model="publishForm.desc" placeholder="请输入简介" autocomplete="off" type="textarea" autosize></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="category">
        <el-select v-model="publishForm.category" value="">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model.number="publishForm.price" placeholder="请输入价格" autocomplete="off" type="text"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-upload action="http://47.103.112.154:9090/pics" list-type="picture-card" :headers="header"
                   :limit="1"
                   :on-exceed="handleExceed"
                   :on-preview="handlePreview"
                   :on-success="handleSuccess"
                   :on-error="handleError">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="图片未加载">
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="publish">发布</el-button>
        <el-button type="danger" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Publish",
    data: () => {
      const checkPrice = (rule, value, callback) => {
        if (value < 0) {
          callback(new Error('价格不能小于0'));
        } else {
          callback();
        }
      };
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        header: {Authorization: 'Bearer ' + window.localStorage.getItem('token')},
        publishForm: {
          title: '',
          desc: '',
          category: 1,
          price: '',
          picture: ''
        },
        options: [{
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
        publishRules: {
          title: [
            {required: true, message: "标题不能为空", trigger: 'blur'}
          ],
          desc: [
            {required: true, message: "简介不能为空", trigger: 'blur'}
          ],
          price: [
            {required: true, message: '价格不能为空', trigger: 'blur'},
            {type: 'number', message: '价格必须为数字值', trigger: 'blur'},
            {validator: checkPrice, trigger: 'blur'}
          ],
          picture: [
            {required: true, message: "图片不能为空", trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      publish() {
        this.$refs.publishForm.validate((valid) => {
          if (valid) {
            this.axios.post('/api/commodities', {
              title: this.publishForm.title,
              desc: this.publishForm.desc,
              category: this.publishForm.category,
              price: this.publishForm.price,
              picture: this.publishForm.picture,
            }).then((response) => {
              if (response.data.success) {
                this.$message.success('发布成功');
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
      handleError(err) {
        this.$message.error(err);
      },
      handleSuccess(response) {
        this.publishForm.picture = response.url;
      },
      handlePreview(file) {
        this.dialogImageUrl = file.response.url;
        this.dialogVisible = true;
      },
      handleExceed() {
        this.$message.error("图片上传数量限制")
      }
    }
  }
</script>

<style scoped>
  #publish {
    width: 500px;
    margin: 0 auto;
  }
</style>
