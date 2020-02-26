<template>
  <div id="app">
      <filters @search="search"></filters>
  </div>
</template>

<script>
import filters from './filters.vue';
export default {
  name: 'app',
  data () {
    return {
      params : {},
    }
 },
 components : {
    'filters' : filters
 },
 computed : {
 },
 methods : {
     search : function(params){
         this.params = params;
         this.$forceUpdate();
     }
 }
}
</script>
