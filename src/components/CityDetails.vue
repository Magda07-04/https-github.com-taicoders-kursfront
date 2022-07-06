<template>
  <div v-if="Object.keys(values).length == 0" class="loading">loading...</div>
  <div v-else class="cityDetail">
    <header>
      <h2>{{ values.name }}</h2>
      <img
        :src="'https://countryflagsapi.com/svg/' + values.country"
        alt="COUNTRY FLAG"
      />
    </header>
    <div class="suntime">
      <div class="sunrise">
        <span> Wschód słońca </span>
        <span>
          {{ unixToDateTime(values.sunrise) }}
        </span>
      </div>
      <div class="sunset">
        <span>Zachód słońca</span>
        <span>
          {{ unixToDateTime(values.sunset) }}
        </span>
      </div>
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
    padding: .4rem 1rem 1rem 1rem;
    .sunset,
    .sunrise{
      display:flex;
      flex-direction:column;
    }
  }
}
</style>
