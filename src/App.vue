<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header></nav-header>
        <card-Front></card-Front>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import CardFront from './components/card/CardFront.vue'

export default {
  components: {
    navHeader: Header,
    cardFront: CardFront
  }
}
</script>

<style>
h1 {
  margin-top: 10px;
}
</style>
