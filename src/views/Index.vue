<template>
   <div class="container">
        <div class="header">
             <div class="logo">
                <h3>我的系统</h3>
             </div>
             <div class="nav">
                 <my-nav></my-nav>
             </div>
             <div class="userinfo"></div>
             <div class="popover"></div>
        </div>

          <div class="main">
             <div class="asider">
                   <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#333"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="routerState"
      :default-openeds="defaultopend"
       @open="handleOpen" 
       @close="handleClose" >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>基本功能</span>
        </template>
          <el-menu-item index="/formstudy">表单学习</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
             </div>
             <div class="main-container">
                <router-view></router-view>
             </div>

          </div>

   </div>
</template>

<script>
import myNav from '../components/myNav'
export default {
 data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        routerState:true,
        defaultopend:['1']
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components:{
       myNav
    }
}
</script>

<style soped>
.container {
   height: calc(100% - 50px);
}
    .header {
       width: 100%;
       height: 46px;
       line-height: 46px;
       color:#fff;
       background: #333744;
      
    }
    .header>.logo {
       font-size: 22px;
       margin:0px 40px 0px 20px;
       float: left;
    }
    .header>.nav {
       float:left;
    }

    .userinfo {
       float:right;
    }
    .popover {
       float:right;
    }

    .asider {
       width: 200px;
       float:left;
       height: 100%;
       background: #333;
    }

    .main-container {
       overflow: hidden;
       background: #cfcfcf;

    }
    .main,.main>div {
       height: 100%;
    }
    .el-menu {
       border:none !important;
    }
</style>