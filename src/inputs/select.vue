<template>
  <div>
      <select class="js-example-basic-single col-md-12">
        <option v-for="op in options" :value="op.value" :selected="op.value == value ? 'selected' : ''">{{op.text}}</option>
      </select>
  </div>
</template>

<script>
export default {
  mounted : function(){
      this.init();
  },
  props : {
    'options' : {
        default : []
    },
    'value' : {}
  },
  methods : {
     init : function(){
         $(document).ready(()=>{
             $('.js-example-basic-single',this.$el)
                .select2({
                    theme: 'bootstrap4',
                })
                .on('change',(e)=>{
                    this.$emit('input',e.target.value);
                });
         });
     }
  }
}
</script>
