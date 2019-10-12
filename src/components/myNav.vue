<template>
    <el-menu
  :default-active="activeIndex2"
  class="nav"
  mode="horizontal"
  @select="handleSelect"
  router="true"
  background-color="#333744">
  <el-menu-item index="/mine">工作台</el-menu-item>
  <el-menu-item index="/mine1">项目</el-menu-item>
  <el-menu-item index="/mine2">业务</el-menu-item>
  <el-menu-item index="/mine3">度量</el-menu-item>
  <el-menu-item>使用文档</el-menu-item>
</el-menu>

</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
     .nav {
         height: 46px;
     }
     .el-menu--horizontal>.el-menu-item{
         height: 46px;
         line-height: 46px;
         color:white;
     }
     .el-menu--horizontal>.el-menu-item:hover {
         color:white  !important;
     }
     .el-menu--horizontal>.el-menu-item.is-active {
         border:none;
         color:white ;
         background: #3C85D2 !important;
     }
     .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
       color:white;
     }
</style>