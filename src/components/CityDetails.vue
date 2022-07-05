<template>
  <div v-if="Object.keys(values).length == 0" class="loading">loading...</div>
  <div v-else>
    <h2>{{ values.name }}</h2>
    <img
      :src="'https://countryflagsapi.com/svg/' + values.country"
      alt="COUNTRY FLAG"
    />
    <div class="suntime">
      <div class="sunrise">{{ unixToDateTime(values.sunrise) }}</div>
      <div class="sunset">{{ unixToDateTime(values.sunset) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    values: Object,
  },
  methods: {
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

<style>
img {
  max-width: 30vw;
}
</style>
