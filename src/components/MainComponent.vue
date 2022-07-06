<template>
  <header>
    <h1>WeatherApp</h1>
    <div class="form">
      <input type="text" placeholder="Wpisz lokalizację" v-model="localeInfo" />
      <button @click="getLatLon">szukaj</button>
    </div>
  </header>

  <main>
    <CityDetails :values="cityValues" />
    <div class="weatherDays" v-if="weatherList.length > 0">
      <SingleWeather v-for="single of weatherList" :values="single" />
    </div>  
  </main>
</template>

<script>
import CityDetails from './CityDetails.vue';
import SingleWeather from './SingleWeather.vue';
export default {
  components: {
    CityDetails,
    SingleWeather,
  },

  // "domyślne" dane - te ładowane na początku
  data() {
    return {
      localeInfo: 'Katowice', // domyślna lokalizacja
      cityValues: {},
      weatherList: [],
    };
  },

  // obiekt przetrzymujący wszystkie funkcje dla komponentu
  methods: {
    getLatLon() {
      this.cityValues = {};
      this.weatherList = [];
      fetch(
        'https://api.openweathermap.org/geo/1.0/direct?q=' +
          this.localeInfo +
          '&appid=04d03c358e8933ac6823da54c340c97b'
      )
        .then((dt) => dt.json())
        .then((dt) => {
          this.getWeather(dt[0].lat, dt[0].lon);
        });
    },
    getWeather(lat, lon) {
      fetch(
        'https://api.openweathermap.org/data/2.5/forecast?lat=' +
          lat +
          '&lon=' +
          lon +
          '&appid=04d03c358e8933ac6823da54c340c97b&units=metric'
      )
        .then((dt) => dt.json())
        .then((dt) => {
          this.cityValues = dt.city;
          this.weatherList = dt.list;
          console.log(dt);
        });
    },
  },

  // mouted - funkcja wywołująca się po "zamontowaniu komponentu"
  mounted() {
    this.getLatLon();
  },
};
</script>

<style lang="scss">
*{box-sizing:border-box;}
#app{
  margin:0;
  padding:0;
  width:100%;
  > header{
    margin: 0 1rem;
    width:calc(100% - 2rem);
    border-radius:0 0 1rem 1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      padding:1rem;
      gap:1rem;
    h1 {
      color: red;
      margin: 0;
    }
  }
  main{
    padding:1rem 2rem;
    .weatherDays{
      display:flex;
      flex-wrap:wrap;
      justify-content:center;
    }
  }

}

</style>
