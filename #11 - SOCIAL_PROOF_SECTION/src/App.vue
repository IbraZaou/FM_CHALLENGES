<script setup>
import Card from './components/Card.vue';


</script>

<template>
  <div class="wrapper">

    <div class="container-text">

      <div class="container-info">
        <h1><strong>10,000+ of our users love our products.</strong></h1>
        <p>We only provide great products combined with excellent customer service. See what our satisfied customers are
          saying about our services.</p>
      </div>

      <div class="container-rating">
        <div class="bloc">
          <img v-for="index in 5" :key="index" src="./assets/images/icon-star.svg" alt="">
          <p>Rated 5 Stars in Reviews</p>
        </div>

        <div class="bloc">
          <img v-for="index in 5" :key="index" src="./assets/images/icon-star.svg" alt="">
          <p>Rated 5 Stars in Report Guru</p>
        </div>

        <div class="bloc">
          <img v-for="index in 5" :key="index" src="./assets/images/icon-star.svg" alt="">
          <p>Rated 5 Stars in BestTech</p>
        </div>
      </div>
    </div>

    <!-- Reviews -->

    <div class="container-review">
      <Card />
    </div>
  </div>
</template>

<style scoped></style>
