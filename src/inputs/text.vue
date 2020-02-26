<template>
  <div>
      <input class="form-control" type="text" :value="value" :placeholder="placeholder" @input="$emit('input',$event.target.value)">
  </div>
</template>

<script>
export default {
  props : [ 'value','placeholder' ],
}
</script>
