<template>
  <div id="filters">
      <div class="form-row ml-2 mr-2 mt-2">
          <div class="offset-md-10 col-md-2 text-right">
              <button @click="open = !open" type="button" class="btn btn-light" :class="open ? 'active' : ''" name="button"> Advanced Search</button>
          </div>
      </div>
      <div class="form-row ml-2 mr-2">
        <div v-if="open || index < 5" v-for="(filter,index) in filters" class="form-group col-md-2" style="max-width:20%;flex:0 0 20%">
          <label>{{filter.title}}</label>
          <component :options="filter.options" :is="'new-'+filter.type" :placeholder="filter.title" v-model="filter.value"></component>
        </div>
      </div>
      <div class="form-row ml-2 mr-2 mt-2">
          <div class="offset-md-10 col-md-2 text-right">
              <button  type="button" class="btn btn-light" name="button">
                  <i class="fa fa-close"></i>
                   Clear
               </button>
               <button  type="button" class="btn btn-light" name="button" @click="search()">
                   <i class="fa fa-search"></i>
                    Search
                </button>
          </div>
      </div>
  </div>
</template>

<script>
import text from './inputs/text.vue';
import select from './inputs/select.vue';
import date from './inputs/date.vue';
export default {
  name: 'filters',
  data () {
    return {
      filters : [],
      open : false,
    }
  },
  created : function(){
     this.load();
  },
  components : {
      'new-text' : text,
      'new-select' : select,
      'new-date' : date
  },
  methods : {
     load : function(){
         axios
            .get('filters.json')
            .then(
                (sr)=>{
                    this.filters = sr.data;
                    this.getQueryString();
                }
            )
     },
     getQueryString : function(){
         const urlParams = new URLSearchParams(window.location.search);
         for(const index in this.filters){
             let filter = this.filters[index];
             const qParam = urlParams.get(filter.name)
             if (!this.open && qParam && index >= 5) {
                 this.open = true;
             }
             this.$set(filter,'value',qParam ? qParam : '' );
         }
     },
     search : function(){
         const params = {};
         for(const filter of this.filters){
             params[filter.name] = filter.value;
         }
         this.$emit('search',params);
     }
  }
}
</script>
