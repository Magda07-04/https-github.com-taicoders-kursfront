<template>
  <div class="single">
    KOMPONENT POGODOWY <br />
    {{ values }}
  </div>
</template>
<script>
export default {
  props: {
    values: Object,
  },
};
</script>


<style>
.single{
  border:2px dashed red;
}
</style>