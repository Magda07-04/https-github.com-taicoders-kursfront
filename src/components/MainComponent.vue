<template>
  <h1>WeatherApp</h1>
  <input type="text" placeholder="Wpisz lokalizację" v-model="localeInfo" />
  <button @click="getLatLon">szukaj</button>
  <CityDetails :values="cityValues" />

  <div class="weatherDays">
    <SingleWeather v-for="single of weatherList" :values="single" />
  </div>

</template>

<script>
import CityDetails from './CityDetails.vue';
import SingleWeather from './SingleWeather.vue';
export default {
  components: {
    CityDetails,
    SingleWeather
  },

  // "domyślne" dane - te ładowane na początku
  data() {
    return {
      localeInfo: 'Chicago', // domyślna lokalizacja
      cityValues: {},
      weatherList: [],
    };
  },

  // obiekt przetrzymujący wszystkie funkcje dla komponentu
  methods: {
    getLatLon() {
      this.cityValues = {};
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
          '&appid=04d03c358e8933ac6823da54c340c97b'
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
    // console.log('hello');
    this.getLatLon();
  },
};
</script>

<style>
h1 {
  color: red;
  margin: 0;
}
</style>
