<template>
  <div class="single">
    <h3>{{values.dt_txt}}</h3>
    <div class="temp">
      <ul>
        <li>temp: {{values.main.temp}} &deg; C</li>
        <li>min: {{values.main.temp_min}} &deg; C</li>
        <li>max: {{values.main.temp_max}} &deg; C</li>
        <li>ciśnienie : {{ values.main.pressure }} hPa</li>
      </ul>
      <img :src="'http://openweathermap.org/img/wn/'+values.weather[0].icon+'@2x.png'" alt="Weather img">
    </div>

  </div>
</template>
<script>
export default {
  props: {
    values: Object,
  },
};
</script>

<style lang="scss">
.single {
  border: 2px dashed red;
}
</style>
