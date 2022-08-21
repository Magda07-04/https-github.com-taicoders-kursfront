<template>
  <!-- v-if - warunek, jeśli prawdziwy, to wykona to co pomiędzy tagami ( loading ) -->
  <!-- Object.keys zwraca tablicę z kluczami obiektu np Object.keys({ name : "John" }) => ['name']  -->
  <!-- .lenght zwraca długość tablicy, gdzie 0 to pusta tablica -->
  <div v-if="Object.keys(values).length == 0" class="loading">loading...</div>
  <!-- v-else - kod w środku wykona się jeśli powyższy warunek jest fałszywy -->
  <div v-else class="cityDetail">
    <header>
      <!-- pobieramy dane z values -->
      <h2>{{ values.name }}</h2>
      <!-- jeśli chcesz połączyć string z zmienną js użyj + oraz " " -->
      <!-- dwukropek przed atrybutem zmienia jego wartość na javascriptową -->
      <img
        :src="'https://countryflagsapi.com/svg/' + values.country"
        alt="COUNTRY FLAG"
      />
    </header>
    <div class="suntime">
      <div class="sunrise">
        <span> Wschód słońca </span>
        <span>
          <!-- wykorzystujemy funckję napisaną w METHODS -->
          {{ unixToDateTime(values.sunrise) }}
        </span>
      </div>
      <div class="sunset">
        <span>Zachód słońca</span>
        <span>
          <!-- wykorzystujemy funckję napisaną w METHODS -->
          {{ unixToDateTime(values.sunset) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// ten komponent eksportuje ten object:
export default {
  // properties - właściwości ( które dostajemy od rodzica )
  props: {
    // "cityValues" przekazany od rodzica
    values: Object,
  },
  // przechowuje wszystkie wykorzystywane w komponencie funcje
  methods: {
    // funckja zmieniająca unixową datę na "ludzką" H:i:s
    unixToDateTime(unix_timestamp) {
      const date = new Date(unix_timestamp * 1000);
      const hours = date.getHours();
      const minutes = '0' + date.getMinutes();
      const seconds = '0' + date.getSeconds();
      return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    },
  },
};
</script>

<style lang="scss">
.cityDetail {
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  header {
    background-color: #213547;
    color: #fff;
    border-radius: 1rem 1rem 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    h2 {
      margin: 0;
    }
    img {
      height: 2rem;
      margin-left: 1rem;
    }
  }
  .suntime {
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 1rem 1rem 1rem;
    .sunset,
    .sunrise {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
