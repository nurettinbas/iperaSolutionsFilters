<template>
  <div>
      <input class="form-control" :value="value" type="text" :name="name"/>
  </div>
</template>

<script>
export default {
 mounted : function(){
    this.init();
 },
 props : {
   'name' : {
       default : ''
   },
   'value' : {},
   'options' : {
       default : {}
   },
 },
 methods : {
   init : function(){
       $(()=>{
          $('input',this.$el)
          .daterangepicker(this.options)
          .on('apply.daterangepicker',(e)=>{
             this.$emit('input',e.target.value);
          });
        });
   }
 }
}
</script>
