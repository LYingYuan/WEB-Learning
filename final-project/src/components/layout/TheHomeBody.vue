<template>
  <div class="home-body">
    <div class="container">
      <home-body-screen></home-body-screen>
    </div>
    <div class="container">
      <panic-buying></panic-buying>
    </div>
    <div class="container">
      <home-box-book></home-box-book>
    </div>
    <div class="container">
      <home-box-clothes></home-box-clothes>
    </div>
    <div class="container">
      <home-box-goods></home-box-goods>
    </div>
    <div class="container">
      <home-box-foods></home-box-foods>
    </div>
    <div class="container">
      <home-box-child></home-box-child>
    </div>
    <div class="container">
      <the-recommendation></the-recommendation>
    </div>
  </div>
</template>

<script>
import HomeBodyScreen from "../homeBody/HomeBodyScreen.vue";
import TheRecommendation from "../recommendation/TheRecommendation.vue";
import PanicBuying from "../panicBuying/PanicBuying.vue";
import HomeBoxBook from "../home/HomeBoxBook.vue";
import HomeBoxClothes from "../home/HomeBoxClothes.vue";
import HomeBoxGoods from "../home/HomeBoxGoods.vue";
import HomeBoxFoods from "../home/HomeBoxFoods.vue";
import HomeBoxChild from "../home/HomeBoxChild.vue";

export default {
  components: {
    HomeBodyScreen,
    TheRecommendation,
    PanicBuying,
    HomeBoxBook,
    HomeBoxClothes,
    HomeBoxGoods,
    HomeBoxFoods,
    HomeBoxChild,
  },
};
</script>

<style scoped>
.home-body {
  position: relative;
  background-image: url("../../assets/pic/bj-1648893862.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
