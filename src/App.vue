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

html,body,#app {
  height: 100%;
}

</style>
