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
           
        <router-view></router-view>
   </div>
</template>

<script>
import myNav from '../components/myNav'
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
    },
    components:{
       myNav
    }
}
</script>

<style soped>
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
</style>