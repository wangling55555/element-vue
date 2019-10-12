
<template>
  <div class="project-container">
    <div class="project-header clearfix">
      <div class="title">
        <span>项目列表</span>
        <span>进行中</span>
        <span>已结束</span>
      </div>
      <div class="operation">
        <el-button type="success" size="mini" @click="dialogFormVisible = true">创建项目</el-button>
        <el-button type="primary" size="mini" @click="labelManage=true">标签管理</el-button>
      </div>
    <!-- 标签管理 -->
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="success">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 添加标签 -->
      <el-dialog title="标签管理" :visible.sync="labelManage">
         1111
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
     success(){
         //先关闭对话框
         this.dialogFormVisible=false;
         // 这里可以得到表单的值
         console.log(this.form)
     }
  },
  data() {
    return {
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      labelManage:true,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  }
};
</script>

<style>
.project-header {
  width: 80%;
  margin: 0px auto;
  padding: 6px 0px;
  border-bottom: 2px solid #d6d9e0;
}
.project-header > .title {
  float: left;
}
.project-header > .operation {
  float: right;
}
</style>