<template>
  <h1>WeatherApp</h1>
  <input type="text" placeholder="Wpisz lokalizację" v-model="localeInfo" />
</template>

<script>
export default {
  // "domyślne" dane - te ładowane na początku
  data() {
    return {
      localeInfo: 'Chicago', // domyślna lokalizacja
    };
  },
  // "sprawdzaj / patrz" element, którego nazwa jest nazwą funkji
  watch : {
    // patrz na zmienną localInfo 
    localeInfo(newVal){
      console.log('newData: ', newVal)
    }
  },



  // mouted - funkcja wywołująca się po "zamontowaniu komponentu"
  mounted() {
    // console.log('hello');
  },
};
</script>

<style>
h1 {
  color: red;
}
</style>
