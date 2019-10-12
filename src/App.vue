<template>
  <div id="app">
     <index></index>
  </div>
</template>


<script>
import index from './views/Index'
export default {
   components:{
     index
   }
}
</script>


<style>
* {
  margin:0;
  padding: 0;
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
html,body,#app {
  height: 100%;
}

</style>
