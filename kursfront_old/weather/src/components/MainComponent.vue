<template>
  <header>
    <h1>WeatherApp</h1>
    <div class="form">
      <!-- v-model pozwala zarządzać inputem w scripcie jako "localeInfo"  -->
      <input type="text" placeholder="Wpisz lokalizację" v-model="localeInfo" />
      <!-- @click - wywołuje funkcję "getLatLon" po kliknięciu  -->
      <button @click="getLatLon">szukaj</button>
    </div>
  </header>

  <main>
    <!-- wywołaj to, co zdefiniowałem w komponencie CityDetails z parametrem cityValues -->
    <CityDetails :values="cityValues" />
    <!-- v-if - wykonaj to co w środku, jeśli tablica weatherList ma jakieś elementy -->
    <!-- ( blokujemy wyświetlanie elementów podczas ładowania ) -->
    <div class="weatherDays" v-if="weatherList.length > 0">
      <!-- v-for - pętla wykona się dla każdego elementu z listy weatherList nazywając go ( element ) jako pojedyńczy single -->
      <SingleWeather v-for="single of weatherList" :values="single" />
    </div>
  </main>
</template>

<script>
// zaimportuj komponenty z miejsca gdzie są zapisane w stosunku do MainComponentu
import CityDetails from './CityDetails.vue';
import SingleWeather from './SingleWeather.vue';
// ten komponent eksportuje ten object:
export default {
  // ten komponent, pobiera takie komponenty:
  components: {
    CityDetails, // odpowiednik CityDetails: CityDetails,
    SingleWeather, // odpowiednik SingleWeather: SingleWeather,
    // jeśli klucz i wartość są takie same, to wystarczy podać je raz
  },

  // "domyślne" dane - te ładowane na początku
  data() {
    return {
      localeInfo: 'Katowice', // domyślna lokalizacja
      cityValues: {}, // domyślne info nt miasta (ładowanie)
      weatherList: [],  // domyślne info nt pogody (nie wyświatlanie)
    };
  },

  // obiekt przetrzymujący wszystkie funkcje dla komponentu
  methods: {
    // funkcja pobierająca dane LAT i LON z api
    getLatLon() {
      // przywróc cityValues i weatherList na domyślne wartości (dzięki czemu następuje loading.)
      this.cityValues = {};
      this.weatherList = [];
      // fetch wysyła zapytanie na podany adres API
      fetch(
        'https://api.openweathermap.org/geo/1.0/direct?q=' +
          this.localeInfo + // pobrane miejsce z modelu
          '&appid=04d03c358e8933ac6823da54c340c97b'
      )
        .then((dt) => dt.json()) // przekształcamy odpowiedź na JSONA
        .then((dt) => { // i zwracamy JSONową wartość
          // dzięki pobranym informacjom lokalizacji, pobieramy pogodę
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
          // podmień wartości :
          this.cityValues = dt.city;
          this.weatherList = dt.list;
        });
    },
  },

  // mouted - funkcja wywołująca się po "zamontowaniu komponentu"
  mounted() {
    // wywołaj pogodę dla domyślnej wartości localeInfo
    this.getLatLon();
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  > header {
    margin: 0 1rem;
    width: calc(100% - 2rem);
    border-radius: 0 0 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    padding: 1rem;
    gap: 1rem;
    h1 {
      color: red;
      margin: 0;
    }
  }
  main {
    padding: 1rem 2rem;
    .weatherDays {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
