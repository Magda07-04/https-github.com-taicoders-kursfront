<template>
  <div class="single">
    <!-- pobieramy info z obiektu values -->
    <!-- {{ values }} -->
    <h3>{{values.dt_txt}}</h3>
    <div class="temp">
      <ul>
        <li>temp: {{values.main.temp}} &deg; C</li>
        <li>min: {{values.main.temp_min}} &deg; C</li>
        <li>max: {{values.main.temp_max}} &deg; C</li>
        <li>ciśnienie : {{ values.main.pressure }} hPa</li>
      </ul>
      <!-- jeśli chcesz połączyć string z zmienną js użyj + oraz " " -->
      <!-- dwukropek przed atrybutem zmienia jego wartość na javascriptową -->
      <img :src="'http://openweathermap.org/img/wn/'+values.weather[0].icon+'@2x.png'" alt="Weather img">
    </div>

  </div>
</template>
<script>
// ten komponent eksportuje ten object:
export default {
  // properties - właściwości ( które dostajemy od rodzica )
  props: {
    // "single" przekazany od rodzica
    values: Object,
  },
};
</script>

<style lang="scss">
.single {
  
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  margin:1rem;
  border-radius:1rem;
  h3{
    border-radius:1rem 1rem 0 0;
    padding:.25rem;
    color:#fff;
    background-color:#213547;
    margin:0;
  }
  .temp{
    padding:.5rem 0 0 1rem;
    display:flex;
    justify-content:space-between;
    ul{
      padding:0;
      margin:0;
      list-style:none;
      li{
        text-align:left;
      }
    }
    img{
      aspect-radio:1/1;
    }
  }
}
</style>
