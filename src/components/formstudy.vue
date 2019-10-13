<template>
  <div>
    <el-form :model="userForm" status-icon ref="userForm" class="demo-ruleForm" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="userForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="userForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="userForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userForm:{
        username:"",
        pass:"",
        checkPass:"",
        age:""},
        rules:{
          username:[{
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
        },{
        min: 2,
        max: 5,
        message: '长度在 2 到 5 个字符'
        },{
        pattern: /^[\u4E00-\u9FA5]+$/,
        message: '用户名只能为中文'
    }
        //{ pattern:/^[a-zA-Z]w{1,4}$/, message: '以字母开头，长度在2-5之间， 只能包含字符、数字和下划线'}
          ],
          pass: [{
        required: true,
        message: '请输入密码',
        trigger: 'blur'
    }, {
        min: 6,
        max: 30,
        message: '长度在 6 到 30 个字符'
    }, {
        pattern: /^(\w){6,20}$/,
        message: '只能输入6-20个字母、数字、下划线'
    }]
          
      }
    }
  },
  methods:{
    submitForm(formRef){
      console.log(this.userForm)
    }
  }
};
</script>

<style scoped>
.demo-ruleForm {
  width: 400px;
  margin: 50px auto;
}
</style>