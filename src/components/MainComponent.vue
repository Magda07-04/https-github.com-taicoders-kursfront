<template>
  <h1>WeatherApp</h1>
  <input type="text" placeholder="Wpisz lokalizację" v-model="localeInfo" />

  <CityDetails :values="cityValues" />
</template>

<script>
import CityDetails from './CityDetails.vue';
export default {
  components: {
    CityDetails,
  },

  // "domyślne" dane - te ładowane na początku
  data() {
    return {
      localeInfo: 'Chicago', // domyślna lokalizacja
      cityValues: {},
    };
  },

  // "sprawdzaj / patrz" element, którego nazwa jest nazwą funkji
  watch: {
    // patrz na zmienną localInfo
    localeInfo(newVal) {
      this.getLatLon();
      // console.log('newData: ', newVal);
    },
  },

  // obiekt przetrzymujący wszystkie funkcje dla komponentu
  methods: {
    getLatLon() {
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
}
</style>
